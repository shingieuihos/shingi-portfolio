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

import { readFileSync, existsSync, appendFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { spawnSync } from "node:child_process";

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
const repoRoot = dirname(here);
const git = (...args) => spawnSync("git", args, { cwd: repoRoot, encoding: "utf8" });
const logPath = join(here, "linkedin", "post-log.ndjson");

// Idempotency: if a successful receipt for this slug already exists, skip. This
// lets the remote routine and the local scheduled task both run safely — whoever
// posts first wins, the other no-ops — so there are never duplicate shares.
git("pull", "--ff-only"); // best-effort: pick up a receipt the other runner pushed
if (existsSync(logPath)) {
  const already = readFileSync(logPath, "utf8")
    .split("\n")
    .filter(Boolean)
    .map((l) => {
      try {
        return JSON.parse(l);
      } catch {
        return null;
      }
    })
    .some((r) => r && r.slug === slug && r.ok);
  if (already) {
    console.log(`already cross-posted ${slug} (receipt exists) — skipping.`);
    process.exit(0);
  }
}

// Normalise to LF so mention offsets are stable no matter how git checks the
// caption out (CRLF on Windows, LF in the cloud routine).
const text = readFileSync(join(here, "linkedin", `${slug}.txt`), "utf8")
  .replace(/\r\n/g, "\n")
  .trim();
const url = `https://shingi.tech/blog/${slug}`;

// Build real @-mention annotations from linkedin/mentions.json (anchor text ->
// organization URN), so tagged pages are linked and notified rather than left
// as plain text. Indices are plain string offsets; captions are kept free of
// emoji / non-BMP characters before any anchor so these line up exactly.
const shareCommentary = { text };
const mentionsPath = join(here, "linkedin", "mentions.json");
if (existsSync(mentionsPath)) {
  const map = JSON.parse(readFileSync(mentionsPath, "utf8"));
  const attributes = [];
  for (const [anchor, urn] of Object.entries(map)) {
    let from = 0;
    let idx;
    while ((idx = text.indexOf(anchor, from)) !== -1) {
      attributes.push({
        start: idx,
        length: anchor.length,
        value: { "com.linkedin.common.CompanyAttributedEntity": { company: urn } },
      });
      from = idx + anchor.length;
    }
  }
  if (attributes.length) {
    attributes.sort((a, b) => a.start - b.start);
    shareCommentary.attributes = attributes;
    console.log(`attaching ${attributes.length} mention(s): ${attributes.map((a) => text.slice(a.start, a.start + a.length)).join(", ")}`);
  }
}

// 1) Wait for the rebuilt page to be live (up to ~25 min — the Cloudflare build
//    can sit in a queue on publish day before the post turns from 404 to 200).
const deadline = Date.now() + 25 * 60 * 1000;
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
      shareCommentary,
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
const shareId = res.headers.get("x-restli-id") || "(none)";
const ok = res.status === 201;
console.log(`LinkedIn HTTP ${res.status}`);
console.log(`share-id: ${shareId}`);
console.log(payload);

// Receipt: append a one-line record to post-log.ndjson and best-effort commit +
// push it, so every cross-post leaves a durable, in-repo proof (time, slug,
// status, share-id). Best-effort: a logging/git failure never fails the post.
try {
  const receipt = {
    ts: new Date().toISOString(),
    slug,
    status: res.status,
    shareId: ok ? shareId : null,
    mentions: shareCommentary.attributes?.length ?? 0,
    ok,
  };
  appendFileSync(logPath, JSON.stringify(receipt) + "\n");

  git("add", "scripts/linkedin/post-log.ndjson");
  const commit = git("commit", "-m", `LinkedIn receipt: ${slug} (HTTP ${res.status})`);
  if (commit.status === 0) {
    const push = git("push", "origin", "HEAD:master");
    console.log(push.status === 0 ? "receipt: committed + pushed" : `receipt: committed (push failed: ${(push.stderr || "").trim()})`);
  } else {
    console.log(`receipt: written, commit skipped (${(commit.stderr || commit.stdout || "").trim()})`);
  }
} catch (e) {
  console.warn(`receipt logging failed (non-fatal): ${e.message}`);
}

if (res.status !== 201) {
  if (res.status === 401) console.error("Token expired or invalid (401) — regenerate the LinkedIn token.");
  process.exit(1);
}
