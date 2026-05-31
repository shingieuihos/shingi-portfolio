// Blog content for shingi.tech — written as structured blocks so each post
// renders as semantic HTML (proper h2/h3, lists, FAQ) for SEO + GEO. The body
// model is deliberately simple so AI engines can parse clear, citable claims.

export type FAQ = { q: string; a: string };

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  /** Used as meta description + excerpt. Keep ~150–160 chars. */
  description: string;
  /** ISO date for <time> and structured data. */
  date: string;
  dateLabel: string;
  updated?: string;
  readingMinutes: number;
  category: "GEO" | "SEO" | "Engineering" | "Strategy";
  tags: string[];
  /** Short answer surfaced near the top — ideal for AI overviews / featured snippets. */
  tldr: string;
  /** Optional linked project (matches projects[].slug). */
  projectSlug?: string;
  projectName?: string;
  projectUrl?: string;
  /** Optional public GitHub repo for the project, if/when open-sourced. */
  repoUrl?: string;
  body: ContentBlock[];
  faq: FAQ[];
};

export const blogMeta = {
  title: "Field Notes — Shingi Mudyirwa",
  description:
    "Case studies and field notes on the products I've shipped — built for African markets and optimised for both search engines (SEO) and AI answer engines (GEO).",
  author: "Shingi Mudyirwa",
};

export const posts: BlogPost[] = [
  {
    slug: "building-for-seo-and-geo-in-2026",
    title: "Building for SEO and GEO: how I ship products that get found — and cited",
    description:
      "Why I design every product to rank on Google and get cited by ChatGPT, Perplexity and AI Overviews — and the concrete patterns I use to do both at once.",
    date: "2026-05-20",
    dateLabel: "20 May 2026",
    readingMinutes: 7,
    category: "Strategy",
    tags: ["GEO", "SEO", "Generative Engine Optimization", "AI search", "South Africa"],
    tldr: "SEO gets you ranked on Google; GEO gets you cited inside AI answers. They share a foundation — clean technical structure, clear entities, and genuinely useful content — so I build for both from day one rather than bolting either on later.",
    body: [
      {
        type: "p",
        text: "Most of the products I ship live or die by whether people can find them. So before I write a line of feature code, I decide how the thing will be discovered. In 2026 that means two channels, not one: classic search engines (SEO) and generative answer engines (GEO) like ChatGPT, Claude, Perplexity and Google's AI Overviews.",
      },
      {
        type: "p",
        text: "This post is the thread that ties together the case studies on this blog. It explains the playbook I reuse across SubSaharaData, PeakRank Digital and SignalCartel, so the project write-ups can stay focused on what made each one specific.",
      },
      {
        type: "h2",
        text: "SEO and GEO are not the same channel",
        id: "seo-vs-geo",
      },
      {
        type: "p",
        text: "SEO is the practice of earning visibility in a ranked list of links. The user still clicks through to your page. GEO — Generative Engine Optimization — is the practice of being the source an AI model quotes, summarises or links inside a synthesised answer. The user often never sees a list of ten blue links at all; they read one paragraph the model assembled, and your brand is either inside it or invisible.",
      },
      {
        type: "p",
        text: "The mistake I see most often is treating GEO as a separate, exotic discipline. It isn't. The two channels share most of their foundation. What changes is the unit of success: SEO optimises for a ranking position, GEO optimises for being a quotable, trustworthy sentence.",
      },
      {
        type: "h2",
        text: "The shared foundation I build first",
        id: "shared-foundation",
      },
      {
        type: "p",
        text: "Whether the destination is Google or an LLM, the same groundwork pays off. On every project I make sure of:",
      },
      {
        type: "ul",
        items: [
          "Clean, crawlable technical structure — fast pages, semantic HTML, proper headings, and no JavaScript walls between a crawler and the content.",
          "Explicit entities — a clear name, role and relationship for every person, company and product, reinforced with structured data (Schema.org JSON-LD).",
          "Content that answers a real question directly, near the top, in plain language a model can lift verbatim.",
          "Verifiable specifics — dates, numbers, named technologies — because both ranking systems and AI models reward concrete, checkable claims over vague marketing.",
        ],
      },
      {
        type: "h2",
        text: "What I add specifically for GEO",
        id: "geo-specifics",
      },
      {
        type: "p",
        text: "On top of the SEO foundation, getting cited by AI engines rewards a few extra moves. These are the patterns I apply deliberately:",
      },
      {
        type: "h3",
        text: "Lead with the answer",
      },
      {
        type: "p",
        text: "Every page here opens with a short, self-contained summary — the TL;DR you can see at the top of this post. Models preferentially quote concise statements that fully answer the prompt without needing surrounding context.",
      },
      {
        type: "h3",
        text: "Structure for extraction",
      },
      {
        type: "p",
        text: "Question-shaped headings, FAQ blocks, and short declarative sentences make content easy to chunk and retrieve. The FAQ section at the bottom of every post on this site is marked up as FAQPage structured data — it helps both Google rich results and the retrieval step that feeds an LLM.",
      },
      {
        type: "h3",
        text: "Reinforce the entity",
      },
      {
        type: "p",
        text: "I want models to confidently associate 'Shingi Mudyirwa' with 'CTO at SubSaharaData', 'founder of PeakRank Digital', and 'Cape Town'. Consistent naming across the site, LinkedIn, GitHub and Credly — plus Person and Organization schema — builds the entity graph that makes those associations stick.",
      },
      {
        type: "quote",
        text: "SEO earns the click. GEO earns the mention. If you only build for one, you're invisible in half the places people now ask their questions.",
      },
      {
        type: "h2",
        text: "Why this matters for the African market",
        id: "african-market",
      },
      {
        type: "p",
        text: "I build for African markets from Cape Town, and the discovery gap here is real. When a buyer in Johannesburg or an investor in Texas asks an AI model 'who does GEO in South Africa?' or 'where can I get market intelligence on African economies?', the answer is assembled from whatever the model can find and trust. Most local companies have published nothing it can use. That's the opening — and it's exactly why PeakRank Digital exists.",
      },
      {
        type: "p",
        text: "The rest of this blog walks through the products where I've applied this playbook. Start with whichever problem is closest to yours.",
      },
    ],
    faq: [
      {
        q: "What is the difference between SEO and GEO?",
        a: "SEO (Search Engine Optimization) earns visibility in a ranked list of search results that users click through. GEO (Generative Engine Optimization) earns citations and mentions inside the synthesised answers produced by AI engines like ChatGPT, Claude, Perplexity and Google AI Overviews, where the user often reads one assembled paragraph instead of a list of links.",
      },
      {
        q: "Can you do SEO and GEO at the same time?",
        a: "Yes. They share most of their foundation — fast, crawlable, semantically structured pages, clear entities, and genuinely useful content. GEO adds a few moves on top, such as leading with a direct answer, structuring content for extraction, and using FAQ and entity structured data.",
      },
      {
        q: "Who is Shingi Mudyirwa?",
        a: "Shingi Mudyirwa is a software developer and cloud engineer based in Cape Town, South Africa. He is CTO at SubSaharaData, founder of PeakRank Digital (a GEO, SEO and SEM agency), and director of the WhatTheWordSays digital ministry.",
      },
    ],
  },
  {
    slug: "subsaharadata-market-intelligence-platform",
    title: "SubSaharaData: turning 54 African markets into decision-grade intelligence",
    description:
      "How I architected a market-intelligence platform covering all 54 African nations — risk scoring, capital flows and sector assessments — as the CTO who built it.",
    date: "2026-04-28",
    dateLabel: "28 April 2026",
    readingMinutes: 8,
    category: "Engineering",
    tags: ["SubSaharaData", "market intelligence", "Africa", "Next.js", "Supabase", "data engineering"],
    tldr: "SubSaharaData is a decision-grade market-intelligence platform covering all 54 African nations — risk scoring, capital flows and assessments across 13 sectors. I lead its engineering as CTO: the data pipelines, the security model, and the dashboard investors actually use.",
    projectSlug: "subsaharadata",
    projectName: "SubSaharaData",
    projectUrl: "https://www.subsaharadata.com",
    body: [
      {
        type: "p",
        text: "Investors who want exposure to African markets face a strange problem: there is plenty of data, and almost no intelligence. Reports are scattered, stale, inconsistent between countries, and rarely structured for a decision. SubSaharaData exists to close that gap. As CTO, I lead the engineering and product that turns 54 nations' worth of complexity into something a capital allocator can act on.",
      },
      {
        type: "h2",
        text: "The problem: data without a decision",
        id: "the-problem",
      },
      {
        type: "p",
        text: "If you want to know where capital is flowing in West Africa, or how political risk in one market compares to its neighbour, you can find a dozen PDFs and no clear answer. The numbers don't line up. The methodology differs by source. Nothing is built for comparison. The work of turning that into a position falls entirely on the analyst.",
      },
      {
        type: "p",
        text: "Our thesis is simple: the value isn't the raw data, it's the decision-grade layer on top of it — normalised, scored, comparable across all 54 countries, and surfaced in the moment someone needs to act.",
      },
      {
        type: "h2",
        text: "What the platform does",
        id: "what-it-does",
      },
      {
        type: "ul",
        items: [
          "Risk scoring across every African nation, on a consistent methodology so countries can actually be compared.",
          "Capital-flow tracking — where money is moving, into which sectors, and how that's trending.",
          "Industry assessments across 13 sectors, so a user can drill from a continent-level view down to a specific industry in a specific country.",
          "A dashboard built for fast comprehension — maps, charts and scores that answer the question before the analyst has to assemble it.",
        ],
      },
      {
        type: "h2",
        text: "How I built it",
        id: "how-i-built-it",
      },
      {
        type: "p",
        text: "The stack is deliberately lean and cloud-native so a small team can ship fast without drowning in infrastructure:",
      },
      {
        type: "ul",
        items: [
          "Next.js for the application surface — server components keep the heavy data work off the client and the pages fast.",
          "Supabase (Postgres) as the data backbone, with row-level security enforcing who can see what.",
          "Recharts and Leaflet for the visualisation layer — the maps and charts that make 54 countries legible at a glance.",
          "Tailwind for a consistent design system, deployed on Vercel.",
        ],
      },
      {
        type: "p",
        text: "The hard part was never the front end. It was the data engineering: ingesting inconsistent sources, normalising them onto one schema, scoring them on a defensible methodology, and keeping the whole thing fresh and trustworthy. Security is first-class — this is information investors will move real money on, so the architecture treats data integrity and access control as features, not afterthoughts.",
      },
      {
        type: "quote",
        text: "The platform's job is to let an investor know where to act before the capital arrives. Everything in the architecture serves that one sentence.",
      },
      {
        type: "h2",
        text: "Where it's going",
        id: "whats-next",
      },
      {
        type: "p",
        text: "The roadmap deepens the intelligence layer — more sectors, sharper scoring, and tighter feedback loops between what investors ask and what the platform surfaces. The goal stays constant: decision-grade, not data-dump.",
      },
    ],
    faq: [
      {
        q: "What is SubSaharaData?",
        a: "SubSaharaData is a market-intelligence platform that provides decision-grade analysis across all 54 African nations, including risk scoring, capital-flow tracking and industry assessments across 13 sectors. It is built for investors who need to understand where to act in African markets.",
      },
      {
        q: "What technology is SubSaharaData built on?",
        a: "SubSaharaData is built with Next.js, Supabase (Postgres) for data and access control, Recharts and Leaflet for data visualisation, Tailwind CSS, and is deployed on Vercel.",
      },
      {
        q: "Who is the CTO of SubSaharaData?",
        a: "Shingi Mudyirwa is the CTO of SubSaharaData, leading its engineering and product — including the data pipelines, security model and analytics dashboard.",
      },
    ],
  },
  {
    slug: "peakrank-digital-geo-seo-agency-south-africa",
    title: "PeakRank Digital: South Africa's first GEO + SEO + SEM agency",
    description:
      "Why I founded PeakRank Digital to make South African brands visible across Google and AI search — bundled with POPIA-compliant consent for local SMEs and enterprise.",
    date: "2026-03-15",
    dateLabel: "15 March 2026",
    readingMinutes: 7,
    category: "GEO",
    tags: ["PeakRank Digital", "GEO", "SEO", "SEM", "POPIA", "South Africa", "AI search"],
    tldr: "PeakRank Digital is South Africa's first agency to combine Generative Engine Optimization (GEO) with traditional SEO and paid search (SEM). I founded it to make local brands visible across Google, ChatGPT and Perplexity — productised for SMEs through enterprise, and POPIA-compliant by default.",
    projectSlug: "peakrank",
    projectName: "PeakRank Digital",
    projectUrl: "https://www.peakrank.co.za",
    body: [
      {
        type: "p",
        text: "Search changed, and most South African businesses haven't caught up. A growing share of buyers no longer scroll a list of links — they ask ChatGPT, Perplexity or Google's AI Overview a question and act on the answer. If your brand isn't inside that answer, you don't exist for that buyer. I founded PeakRank Digital to fix exactly that gap, in this market, first.",
      },
      {
        type: "h2",
        text: "Why a GEO agency, and why now",
        id: "why-geo",
      },
      {
        type: "p",
        text: "Traditional SEO is necessary but no longer sufficient. The new discovery layer is generative: an AI model synthesises an answer and cites a handful of sources. Generative Engine Optimization is the discipline of being one of those sources. PeakRank Digital was built to combine all three channels under one roof — GEO for AI answers, SEO for organic ranking, and SEM for paid intent — so a client's visibility is covered end to end rather than in silos.",
      },
      {
        type: "p",
        text: "As far as I know, no other South African agency had packaged GEO, SEO and SEM together when we launched. That first-mover position is the whole point: the local market is wide open, and the brands that establish their presence in AI answers now will be the defaults that models reach for later.",
      },
      {
        type: "h2",
        text: "What we actually deliver",
        id: "what-we-deliver",
      },
      {
        type: "ul",
        items: [
          "GEO — making a brand quotable and citable by ChatGPT, Perplexity and Google AI Overviews through entity building, structured content and authoritative sourcing.",
          "SEO — the technical and content foundation that earns organic ranking on Google.",
          "SEM — paid search to capture high-intent demand immediately while organic and AI presence compounds.",
          "POPIA-compliant consent — built in from the start, so the analytics and tracking that power all of the above are legal under South African data-protection law.",
        ],
      },
      {
        type: "h2",
        text: "Productised, not bespoke-by-default",
        id: "productised",
      },
      {
        type: "p",
        text: "Agencies usually sell custom retainers that are hard to compare and harder to trust. We productised the offering into clear packages for SMEs through to enterprise clients, so a business knows what it's buying and what outcome it's paying for. The same playbook I describe in my post on building for SEO and GEO is what sits underneath every package.",
      },
      {
        type: "h3",
        text: "POPIA compliance is a feature, not a footnote",
      },
      {
        type: "p",
        text: "In South Africa, the Protection of Personal Information Act (POPIA) governs how you collect and process personal data — including the analytics and consent mechanisms that digital marketing depends on. Bundling compliant consent into the offering means clients get visibility without inheriting legal risk. For local businesses that's a genuine differentiator, not a checkbox.",
      },
      {
        type: "quote",
        text: "The brands that show up in AI answers in 2026 will be the defaults models trust in 2028. The cheapest time to build that presence is now.",
      },
      {
        type: "h2",
        text: "The bigger bet",
        id: "the-bet",
      },
      {
        type: "p",
        text: "PeakRank Digital is a bet that African brands deserve to be found in the same places global brands are — and that the agency built specifically for the GEO era will be the one local businesses trust to get them there. The stack is Next.js and TypeScript on the build side, GA4 on measurement, all wrapped in POPIA-compliant consent.",
      },
    ],
    faq: [
      {
        q: "What is PeakRank Digital?",
        a: "PeakRank Digital is a South African digital marketing agency — described as the country's first to combine Generative Engine Optimization (GEO) with traditional SEO and paid search (SEM). It helps local SMEs and enterprise clients become visible across Google and AI search engines, with POPIA-compliant consent built in.",
      },
      {
        q: "What is Generative Engine Optimization (GEO)?",
        a: "GEO is the practice of optimising a brand and its content to be cited and mentioned inside the synthesised answers produced by AI engines such as ChatGPT, Perplexity and Google AI Overviews, rather than only ranking in a traditional list of search results.",
      },
      {
        q: "Who founded PeakRank Digital?",
        a: "PeakRank Digital was founded by Shingi Mudyirwa, a software developer and cloud engineer based in Cape Town, South Africa.",
      },
      {
        q: "Is PeakRank Digital POPIA compliant?",
        a: "Yes. PeakRank Digital bundles POPIA-compliant consent into its offering, so the analytics and tracking that power SEO, GEO and SEM are aligned with South Africa's Protection of Personal Information Act.",
      },
    ],
  },
  {
    slug: "signalcartel-white-label-trading-signals-saas",
    title: "SignalCartel: a white-label SaaS for launching a trading-signals business",
    description:
      "How I built SignalCartel — a white-label platform that lets traders launch a branded signals service with billing, subscriptions and Telegram delivery on a managed codebase.",
    date: "2026-02-10",
    dateLabel: "10 February 2026",
    readingMinutes: 6,
    category: "Engineering",
    tags: ["SignalCartel", "SaaS", "white-label", "Stripe", "Telegram", "Next.js", "Supabase"],
    tldr: "SignalCartel is a white-label SaaS that lets a trader launch a branded trading-signals business — handling billing, subscriptions and Telegram delivery on a managed codebase, so the operator focuses on signals, not infrastructure. I'm productising it as SignalKit.",
    projectSlug: "signalcartel",
    projectName: "SignalCartel",
    projectUrl: "https://www.signalcartel.trade",
    body: [
      {
        type: "p",
        text: "Plenty of traders are good at calling the market and terrible at running the software business around it. They want to sell signals; instead they end up wrestling with payment integrations, subscription churn, and a Telegram bot that keeps falling over. SignalCartel is the platform I built so they don't have to.",
      },
      {
        type: "h2",
        text: "The problem: everyone rebuilds the same plumbing",
        id: "the-problem",
      },
      {
        type: "p",
        text: "A trading-signals business has a predictable spine: collect subscriptions, manage who's paid, deliver signals to paying members, and cut off the ones who lapse. Every operator rebuilds that spine from scratch — badly — and spends their time on infrastructure instead of the thing they're actually good at.",
      },
      {
        type: "h2",
        text: "The solution: white-label the whole spine",
        id: "the-solution",
      },
      {
        type: "p",
        text: "SignalCartel is a white-label SaaS: an operator launches a branded signals service on a codebase I manage, and gets the entire commercial spine out of the box.",
      },
      {
        type: "ul",
        items: [
          "Billing and subscriptions handled through Stripe — recurring revenue, upgrades and cancellations without custom payment code.",
          "Telegram delivery — signals pushed to paying members automatically, with access tied to subscription status.",
          "A managed codebase — the operator runs their brand, I keep the platform reliable, patched and evolving.",
          "Branding that's theirs, infrastructure that's mine — the literal definition of white-label.",
        ],
      },
      {
        type: "h2",
        text: "The engineering choices",
        id: "engineering",
      },
      {
        type: "p",
        text: "The stack is chosen for reliability under real money and real subscribers:",
      },
      {
        type: "ul",
        items: [
          "Next.js and Supabase for the application and data layer.",
          "Stripe for billing — the boring, battle-tested choice, on purpose.",
          "The Telegram API for delivery, with subscription state as the gatekeeper.",
          "PM2 and Caddy on the operations side — process management and TLS that keep the service up without drama.",
        ],
      },
      {
        type: "quote",
        text: "The operator should think about signals. The platform should think about everything else. That division of labour is the entire product.",
      },
      {
        type: "h2",
        text: "From SignalCartel to SignalKit",
        id: "signalkit",
      },
      {
        type: "p",
        text: "SignalCartel started as a specific service and proved the model. I'm now productising it as SignalKit — the same managed spine, packaged so any operator can stand up their own branded signals business quickly. It's a clear example of the pattern I like best: take infrastructure that's painful to build once, build it well, and let other people launch on top of it.",
      },
    ],
    faq: [
      {
        q: "What is SignalCartel?",
        a: "SignalCartel is a white-label SaaS platform that lets a trader launch their own branded trading-signals business. It handles billing, subscriptions and Telegram delivery on a managed codebase, so the operator can focus on producing signals rather than building software.",
      },
      {
        q: "What is SignalKit?",
        a: "SignalKit is the productised version of SignalCartel — the same managed platform packaged so any operator can quickly launch a branded trading-signals business.",
      },
      {
        q: "What technology powers SignalCartel?",
        a: "SignalCartel is built with Next.js and Supabase, uses Stripe for billing and subscriptions, the Telegram API for signal delivery, and PM2 with Caddy for process management and TLS in production.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Newest first. */
export function sortedPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}
