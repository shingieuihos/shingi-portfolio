// Daily orchestrator for the June-2026 "PeakRank platform & results" series.
// Run once per day by the scheduled routine. For the slug scheduled on the
// given date (default: today, UTC) it:
//
//   1. Publishes the post on peakrank.co.za   (draft -> published, via Supabase)
//   2. Rebuilds + deploys shingi.tech          (npm run build && wrangler deploy)
//      — the date-gate in src/lib/blog.ts only emits the post once TODAY >= its date
//   3. Cross-posts to LinkedIn                  (scripts/linkedin-post.mjs <slug>)
//
//   LI_TOKEN=<token> [LI_AUTHOR=urn:li:person:<id>] node scripts/publish-day.mjs [YYYY-MM-DD]
//
// Step 3 is skipped (with a warning) if LI_TOKEN is not set, so the blog side
// can still publish unattended. The peakrank repo is found as a sibling of this
// repo by default; override with PEAKRANK_DIR.
import { spawnSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const shingiRoot = resolve(here, '..')
const peakrankDir =
  process.env.PEAKRANK_DIR || resolve(shingiRoot, '..', 'PeakRank Digital')
const isWin = process.platform === 'win32'

// date -> slug. Slugs are identical across peakrank.co.za, shingi.tech and the
// LinkedIn caption files, so one slug drives all three steps.
const SCHEDULE = [
  { date: '2026-06-15', slug: 'whatthewordsays-geo-seo-case-study' },
  { date: '2026-06-16', slug: 'how-to-run-your-first-free-geo-audit-peakrank' },
  { date: '2026-06-17', slug: 'peakrank-dashboard-tour-turn-data-into-your-next-move' },
  { date: '2026-06-18', slug: 'get-the-best-from-ai-citation-monitoring-peakrank' },
  { date: '2026-06-19', slug: 'per-domain-ai-assistant-ask-your-search-data-peakrank' },
  { date: '2026-06-20', slug: 'turn-one-blog-post-into-a-week-of-social-peakrank' },
  { date: '2026-06-21', slug: 'which-peakrank-offering-is-right-for-you' },
  { date: '2026-06-22', slug: 'connect-search-console-ga4-google-ads-to-peakrank' },
  { date: '2026-06-23', slug: 'peakrank-ai-academy-train-your-team-on-claude' },
  { date: '2026-06-24', slug: '90-day-geo-seo-playbook-peakrank' },
]

const date = process.argv[2] || new Date().toISOString().slice(0, 10)
const entry = SCHEDULE.find((e) => e.date === date)

if (!entry) {
  console.log(`[publish-day] nothing scheduled for ${date} — exiting cleanly.`)
  process.exit(0)
}
const { slug } = entry
console.log(`[publish-day] ${date} -> ${slug}\n`)

function run(label, cmd, args, opts = {}) {
  console.log(`\n=== ${label}: ${cmd} ${args.join(' ')} ===`)
  const r = spawnSync(cmd, args, { stdio: 'inherit', ...opts })
  if (r.status !== 0) {
    console.error(`[publish-day] ${label} FAILED (exit ${r.status}).`)
    process.exit(r.status || 1)
  }
}

// 1) peakrank.co.za — flip the draft to published.
const peakrankPublish = join(
  peakrankDir,
  'scripts',
  'blog-series-june2026',
  'publish-day.mjs'
)
if (!existsSync(peakrankPublish)) {
  console.error(`[publish-day] cannot find peakrank publisher at ${peakrankPublish}`)
  console.error('Set PEAKRANK_DIR to the PeakRank Digital repo path.')
  process.exit(1)
}
run('peakrank publish', 'node', [peakrankPublish, date])

// 2) shingi.tech — rebuild (date-gate releases the post) and deploy to Cloudflare.
run('shingi build', isWin ? 'npm.cmd' : 'npm', ['run', 'build'], { cwd: shingiRoot })
run('shingi deploy', isWin ? 'npx.cmd' : 'npx', ['wrangler', 'deploy'], { cwd: shingiRoot })

// 3) LinkedIn — cross-post (waits for the live URL, then publishes the share).
if (!process.env.LI_TOKEN) {
  console.warn(
    '\n[publish-day] LI_TOKEN not set — blog posts are live, but the LinkedIn cross-post was SKIPPED.'
  )
  process.exit(0)
}
run('linkedin post', 'node', ['scripts/linkedin-post.mjs', slug], { cwd: shingiRoot })

console.log(`\n[publish-day] done for ${date} (${slug}).`)
