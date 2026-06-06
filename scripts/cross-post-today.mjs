// Local daily LinkedIn cross-poster for the 7-14 June shingi.tech series.
// Run by a Windows Scheduled Task once a day; it looks up today's slug and calls
// scripts/linkedin-post.mjs, which is idempotent (skips if already posted) and
// waits for the live blog URL before publishing.
//
//   node scripts/cross-post-today.mjs [YYYY-MM-DD]
//
// Token: from $LI_TOKEN, else from a local file outside the repo
// (%USERPROFILE%\.peakrank-li-token). Never store the token in the repo.
//
// NOTE: the 15-24 June series is handled separately by scripts/publish-day.mjs
// (which also calls linkedin-post.mjs); idempotency keeps the two from clashing.
import { spawnSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { homedir } from "node:os";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = dirname(here);

// date (UTC) -> slug, matching the date-gate in src/lib/blog.ts.
const SCHEDULE = {
  "2026-06-07": "claude-geo-content-generation-peakrank",
  "2026-06-08": "claude-per-domain-ai-assistant-peakrank",
  "2026-06-09": "peakrank-ai-academy-claude-south-africa",
  "2026-06-10": "building-a-certified-claude-practice",
  "2026-06-11": "what-is-the-claude-partner-network",
  "2026-06-12": "anthropic-academy-claude-certification-journey",
  "2026-06-13": "peakrank-claude-partner-network-journey",
  "2026-06-14": "certified-claude-practice-client-benefits",
};

const date = process.argv[2] || new Date().toISOString().slice(0, 10);
const slug = SCHEDULE[date];
if (!slug) {
  console.log(`[cross-post-today] nothing scheduled for ${date} — exiting cleanly.`);
  process.exit(0);
}

let token = process.env.LI_TOKEN;
if (!token) {
  const tokenFile = join(homedir(), ".peakrank-li-token");
  if (existsSync(tokenFile)) token = readFileSync(tokenFile, "utf8").trim();
}
if (!token) {
  console.error(
    "[cross-post-today] no LinkedIn token. Set $LI_TOKEN or write it to " +
      join(homedir(), ".peakrank-li-token")
  );
  process.exit(1);
}

console.log(`[cross-post-today] ${date} -> ${slug}`);
const r = spawnSync(process.execPath, ["scripts/linkedin-post.mjs", slug], {
  cwd: repoRoot,
  stdio: "inherit",
  env: { ...process.env, LI_TOKEN: token },
});
process.exit(r.status ?? 1);
