// Cross-posts a published blog post to LinkedIn as a personal-profile share
// with a link-preview card. Used by the scheduled "Publish ..." routines.
//
//   LI_TOKEN=<token> LI_AUTHOR=urn:li:person:<id> node scripts/linkedin-post.mjs <slug>
//
// The caption is read verbatim from scripts/linkedin/<slug>.txt. No secrets
// live in this file or in the repo — the token is passed via the LI_TOKEN env
// var from the routine config. The script first waits until the live blog URL
// returns 200 (so Cloudflare has finished the rebuild and the OG card renders),
// then publishes.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const slug = process.argv[2];
if (!slug) {
  console.error("usage: node scripts/linkedin-post.mjs <slug>");
  process.exit(2);
}

const TOKEN = process.env.LI_TOKEN;
const AUTHOR = process.env.LI_AUTHOR || "urn:li:person:onp3qsUiWq";
if (!TOKEN) {
  console.error("LI_TOKEN env var is required");
  process.exit(2);
}

const here = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(here, "linkedin", `${slug}.txt`), "utf8").trim();
const url = `https://shingi.tech/blog/${slug}`;

// 1) Wait for the rebuilt page to be live (up to ~12 min).
const deadline = Date.now() + 12 * 60 * 1000;
let live = false;
while (Date.now() < deadline) {
  try {
    const r = await fetch(url, { method: "GET", redirect: "follow" });
    if (r.status === 200) {
      live = true;
      break;
    }
    console.log(`waiting for ${url} — HTTP ${r.status}`);
  } catch (e) {
    console.log(`waiting for ${url} — ${e.message}`);
  }
  await new Promise((res) => setTimeout(res, 20_000));
}
if (!live) {
  console.error(`${url} never returned 200 within the timeout — aborting LinkedIn post`);
  process.exit(1);
}

// 2) Publish the share with an article (link-preview) card.
const body = {
  author: AUTHOR,
  lifecycleState: "PUBLISHED",
  specificContent: {
    "com.linkedin.ugc.ShareContent": {
      shareCommentary: { text },
      shareMediaCategory: "ARTICLE",
      media: [{ status: "READY", originalUrl: url }],
    },
  },
  visibility: { "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC" },
};

const res = await fetch("https://api.linkedin.com/v2/ugcPosts", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json",
    "X-Restli-Protocol-Version": "2.0.0",
  },
  body: JSON.stringify(body),
});

const payload = await res.text();
console.log(`LinkedIn HTTP ${res.status}`);
console.log(`share-id: ${res.headers.get("x-restli-id") || "(none)"}`);
console.log(payload);

if (res.status !== 201) {
  if (res.status === 401) console.error("Token expired or invalid (401) — regenerate the LinkedIn token.");
  process.exit(1);
}
