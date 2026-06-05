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
  {
    slug: "how-claude-powers-peakrank-digital-geo-seo",
    title: "How Anthropic's Claude powers PeakRank Digital's GEO and SEO engine",
    description:
      "A tour under the hood of how I use Anthropic's Claude to run PeakRank Digital — from GEO content and AI citation monitoring to the per-domain assistant that reads your search data.",
    date: "2026-06-05",
    dateLabel: "5 June 2026",
    readingMinutes: 7,
    category: "GEO",
    tags: ["PeakRank Digital", "Anthropic", "Claude", "GEO", "SEO", "AI search", "South Africa"],
    tldr: "PeakRank Digital runs on Anthropic's Claude. I use it as the reasoning engine behind everything we sell — generating GEO-ready content, monitoring which AI engines cite our clients, and powering a per-domain assistant that turns raw search data into plain-language next steps.",
    projectSlug: "peakrank",
    projectName: "PeakRank Digital",
    projectUrl: "https://www.peakrank.co.za",
    body: [
      {
        type: "p",
        text: "PeakRank Digital looks like a digital marketing agency from the outside. Under the hood, it's an AI product — and the intelligence layer is Anthropic's Claude. This post is the honest tour of where Claude sits in the stack, what jobs I hand it, and why it's the difference between selling 'SEO services' and actually moving a client's visibility across both Google and AI search.",
      },
      {
        type: "h2",
        text: "Why I built PeakRank on Claude",
        id: "why-claude",
      },
      {
        type: "p",
        text: "I founded PeakRank Digital because search split into two channels: the ranked list of links you optimise with SEO, and the synthesised answer an AI engine writes, which you earn through Generative Engine Optimization (GEO). Covering both at scale, for many clients, is a reasoning problem before it's a marketing problem. You have to read messy web content, judge whether a brand is represented well, write content a model will happily quote, and explain all of it to a business owner in plain language.",
      },
      {
        type: "p",
        text: "That is exactly the shape of work large language models are good at. I evaluated the options and built on Claude because it is strong at long-context reading, structured extraction, and following careful instructions without going off-script — which matters when the output goes straight to a paying client.",
      },
      {
        type: "h2",
        text: "The four jobs Claude does at PeakRank",
        id: "four-jobs",
      },
      {
        type: "p",
        text: "Claude isn't a chatbot bolted onto the dashboard. It's wired into four distinct workflows, each of which gets its own field note in this series:",
      },
      {
        type: "ul",
        items: [
          "Citation monitoring — reading the answers ChatGPT, Perplexity, Gemini, Claude and Google AI Overviews give to your customers' questions, and extracting who got cited.",
          "Content generation — turning a keyword and a citation gap into a GEO-ready brief, structured to be quoted by an AI and to rank on Google at the same time.",
          "The per-domain assistant — a grounded assistant that answers 'why did my visibility change?' from your own data, not generic advice.",
          "Education — the PeakRank AI Academy, which teaches South African businesses to use Claude safely in their own operations.",
        ],
      },
      {
        type: "h2",
        text: "Picking the right Claude for the job",
        id: "model-choice",
      },
      {
        type: "p",
        text: "Not every task needs the same horsepower, and pretending it does is how you burn money. I route work across Claude's model family deliberately: the deepest reasoning models for analysis a client will act on — competitive citation gaps, strategy, audits — and the faster, cheaper models for high-volume, well-defined jobs like classifying thousands of AI answers or drafting routine copy. Matching the model to the task is what keeps a bootstrapped product's margins alive.",
      },
      {
        type: "h2",
        text: "Guardrails: POPIA and the 4 Ds",
        id: "guardrails",
      },
      {
        type: "p",
        text: "Pointing an AI at client data in South Africa means taking the Protection of Personal Information Act (POPIA) seriously, not as a footnote. PeakRank is POPIA-aware by design — what data Claude sees, why, and with what consent is part of the architecture.",
      },
      {
        type: "p",
        text: "On the human side, I run the whole operation on Anthropic's '4 Ds' framework for working with AI: Delegation, Description, Discernment and Diligence. Claude drafts and analyses; a human decides what's true and what ships. That discipline is the reason clients get AI speed without AI mistakes.",
      },
      {
        type: "quote",
        text: "Claude is the reasoning engine; I'm the editor-in-chief. The model does the reading and the first draft at superhuman speed — a human still owns every claim that reaches a client.",
      },
      {
        type: "h2",
        text: "Where this series goes next",
        id: "next",
      },
      {
        type: "p",
        text: "The rest of these field notes open each box: how the citation monitor works, how Claude writes content engineered to be quoted, the per-domain assistant, and the Academy. If you want the strategy that sits above all of it, read my post on building for SEO and GEO in 2026. If you want PeakRank to do it for your brand, the fastest start is a free GEO audit at peakrank.co.za.",
      },
    ],
    faq: [
      {
        q: "What is PeakRank Digital?",
        a: "PeakRank Digital is a South African GEO, SEO and SEM agency and platform founded by Shingi Mudyirwa. It makes brands visible across both Google and AI search engines, and uses Anthropic's Claude as the reasoning engine behind its content, monitoring and analytics.",
      },
      {
        q: "How does PeakRank Digital use Anthropic's Claude?",
        a: "PeakRank uses Claude for four jobs: monitoring which AI engines cite a brand, generating GEO-ready content, powering a per-domain assistant that answers questions from a client's own search data, and teaching businesses to use Claude through the PeakRank AI Academy.",
      },
      {
        q: "Why use Claude instead of another AI model?",
        a: "PeakRank uses Claude for its strength in long-context reading, structured extraction and reliable instruction-following — qualities that matter when output goes directly to paying clients. Different Claude models are matched to different tasks to balance quality and cost.",
      },
      {
        q: "Is client data safe under POPIA?",
        a: "Yes. PeakRank is built to be POPIA-aware: what data Claude processes, why, and with what consent is part of the system design, and a human reviews AI output before it reaches clients.",
      },
    ],
  },
  {
    slug: "claude-ai-citation-monitoring-peakrank",
    title: "AI citation monitoring: how PeakRank uses Claude to see who the machines recommend",
    description:
      "Google rankings no longer tell the whole story. Here's how I built PeakRank's AI citation monitoring on Claude to track whether ChatGPT, Perplexity and AI Overviews cite you — or your competitor.",
    date: "2026-06-07",
    dateLabel: "7 June 2026",
    readingMinutes: 6,
    category: "GEO",
    tags: ["PeakRank Digital", "Claude", "AI citation monitoring", "GEO", "AI search", "Perplexity", "ChatGPT"],
    tldr: "PeakRank's citation monitor asks AI engines the questions your customers ask, then uses Claude to read the answers — extracting which brands were cited, in what context, and how you compare. It turns 'are we in the AI answer?' into a number you can track every week.",
    projectSlug: "peakrank",
    projectName: "PeakRank Digital",
    projectUrl: "https://www.peakrank.co.za",
    body: [
      {
        type: "p",
        text: "For twenty years the SEO scoreboard was your Google ranking. In 2026 that scoreboard is incomplete. A large share of searches now end inside an AI-generated answer the user never clicks past — and if your brand isn't named in that answer, your ranking didn't save you. PeakRank's AI citation monitoring exists to measure the new scoreboard, and Claude is what reads it.",
      },
      {
        type: "h2",
        text: "The problem: you can't see the AI answer",
        id: "the-problem",
      },
      {
        type: "p",
        text: "When a buyer asks ChatGPT 'who are the best [your category] in Johannesburg?', the model writes a paragraph and names a few businesses. You have no rank-tracker for that. Worse, the answer differs by engine. When I tested 50 real queries across ChatGPT, Perplexity and Google AI Overviews, the overlap in cited sources was only about 12% — being the default in one engine tells you almost nothing about the others.",
      },
      {
        type: "p",
        text: "So the first job is simply visibility into invisibility: what are the engines actually saying about you, and your competitors, right now?",
      },
      {
        type: "h2",
        text: "How the monitor works",
        id: "how-it-works",
      },
      {
        type: "p",
        text: "The pipeline is straightforward in shape and hard in the details:",
      },
      {
        type: "ul",
        items: [
          "Start from the questions your customers actually ask — by category, location and intent — not vanity keywords.",
          "Put those questions to each AI engine on a schedule, capturing the full synthesised answer.",
          "Hand each answer to Claude to read like an analyst: which brands are named, who's recommended first, what's said about each, and whether you appear at all.",
          "Roll it up into a visibility score per engine, tracked over time, so a drop or a competitor's rise becomes a number you can see.",
        ],
      },
      {
        type: "p",
        text: "The reading step is where Claude earns its place. Extracting 'who was cited and how' from free-flowing prose, consistently, across thousands of answers, is exactly the structured-extraction task large language models handle well — and Claude does it reliably enough to put in front of a client.",
      },
      {
        type: "h2",
        text: "From data to decision",
        id: "data-to-decision",
      },
      {
        type: "p",
        text: "A number isn't a strategy. Claude also drafts the 'so what': if a competitor is cited for a question you're absent from, that's a content gap with a name and a priority. Those gaps feed straight into the content workflow described in the next post, closing the loop from 'we're invisible here' to 'here's the brief that fixes it'.",
      },
      {
        type: "quote",
        text: "Traditional rank tracking answers 'where am I on Google?'. Citation monitoring answers 'do the machines recommend me?' — and increasingly, that's the question that decides who gets the lead.",
      },
      {
        type: "h2",
        text: "Why this matters now",
        id: "why-now",
      },
      {
        type: "p",
        text: "AI answers are a land grab. The brands models cite today become the defaults they reach for tomorrow, because models lean on the sources they already trust. Measuring your citation share now — while most South African businesses aren't even looking — is how you claim that default position before it hardens around someone else.",
      },
    ],
    faq: [
      {
        q: "What is AI citation monitoring?",
        a: "AI citation monitoring tracks whether AI engines like ChatGPT, Perplexity, Gemini, Claude and Google AI Overviews mention or recommend a brand when users ask relevant questions. PeakRank measures this as a visibility score per engine, tracked over time.",
      },
      {
        q: "How does PeakRank monitor AI citations?",
        a: "PeakRank puts real customer questions to each AI engine on a schedule, then uses Anthropic's Claude to read each answer and extract which brands were cited, in what order and in what context — rolling the results into a trackable visibility score.",
      },
      {
        q: "Why isn't Google ranking enough anymore?",
        a: "Because a growing share of searches are answered directly by AI, where the user reads a synthesised paragraph instead of clicking a ranked link. If your brand isn't named in that answer, a high Google ranking won't capture the lead.",
      },
      {
        q: "Do different AI engines cite different sources?",
        a: "Yes. In PeakRank's testing of 50 queries across ChatGPT, Perplexity and Google AI Overviews, only about 12% of cited sources overlapped — so a brand must be monitored across all engines, not just one.",
      },
    ],
  },
  {
    slug: "claude-geo-content-generation-peakrank",
    title: "From keyword to citation: how Claude writes GEO-ready content at PeakRank",
    description:
      "How I use Anthropic's Claude to produce content engineered to be quoted by AI — entity-rich, structured for extraction, and shipped with the FAQ and schema markup that both Google and LLMs reward.",
    date: "2026-06-09",
    dateLabel: "9 June 2026",
    readingMinutes: 7,
    category: "SEO",
    tags: ["PeakRank Digital", "Claude", "content", "GEO", "SEO", "schema markup", "structured data"],
    tldr: "PeakRank uses Claude to turn a keyword and a citation gap into a finished, GEO-ready brief: a lead-with-the-answer structure, question-shaped headings, entity reinforcement and FAQ schema. The goal isn't to rank a page — it's to make a paragraph quotable.",
    projectSlug: "peakrank",
    projectName: "PeakRank Digital",
    projectUrl: "https://www.peakrank.co.za",
    body: [
      {
        type: "p",
        text: "Most content is written to rank. The content I generate at PeakRank is written to be quoted. Those are related but different goals, and the difference is the whole game in 2026. Claude is the tool that lets me produce content engineered for both — pages that rank on Google and paragraphs that AI engines lift into their answers — at the speed a real client roster demands.",
      },
      {
        type: "h2",
        text: "Ranking is not the same as being quoted",
        id: "rank-vs-quote",
      },
      {
        type: "p",
        text: "An SEO page wins a position in a list and earns a click. A GEO-optimised page wins something subtler: it becomes the source a model trusts enough to summarise. To be quotable, content has to lead with a direct, self-contained answer, state verifiable specifics, and be structured so a machine can lift a clean chunk without dragging in context. Claude is good at writing exactly that, because it is good at recognising what it would itself want to quote.",
      },
      {
        type: "h2",
        text: "How Claude turns a gap into a brief",
        id: "gap-to-brief",
      },
      {
        type: "p",
        text: "The input usually comes from the citation monitor: a question your customers ask, where a competitor is cited and you aren't. From there Claude produces a working brief:",
      },
      {
        type: "ul",
        items: [
          "A lead-with-the-answer opening — the TL;DR a model can quote verbatim, like the one at the top of this post.",
          "Question-shaped headings that mirror how people actually ask, so the structure matches the prompts engines receive.",
          "Entity reinforcement — naming the brand, people, place and products consistently so the model builds a confident association.",
          "An FAQ block written to be marked up as FAQPage structured data, which helps both Google rich results and the retrieval step that feeds an LLM.",
        ],
      },
      {
        type: "p",
        text: "Claude drafts all of that in minutes. I then do the part that can't be delegated: check every claim, add the real numbers and first-hand specifics a model can't invent, and cut anything that smells generic. AI-generated filler is the fastest way to lose trust with both readers and engines.",
      },
      {
        type: "h2",
        text: "Shipping the structure, not just the words",
        id: "structure",
      },
      {
        type: "p",
        text: "Words are half the job. The other half is the markup. PeakRank ships content with the Schema.org structured data — Organization, Person, FAQPage, Article — that makes entities explicit and machine-readable. Claude helps generate and validate that JSON-LD, so the page doesn't just read well, it parses well. This is the same foundation that serves both SEO and GEO, which is why building for one and ignoring the other is a wasted opportunity.",
      },
      {
        type: "quote",
        text: "Don't write to fill a page. Write the one paragraph you'd want an AI to read aloud when someone asks about your business — then make everything else support it.",
      },
      {
        type: "h2",
        text: "Speed with a human in the loop",
        id: "human-loop",
      },
      {
        type: "p",
        text: "The reason this works as a business is throughput with quality held constant. Claude removes the blank-page cost and the structural busywork; the human adds judgement, truth and taste. That division — Anthropic's '4 Ds' in practice — is how PeakRank produces GEO-ready content for many clients without it reading like a machine wrote it, because in the way that matters, a person did.",
      },
    ],
    faq: [
      {
        q: "What makes content GEO-ready?",
        a: "GEO-ready content leads with a direct, self-contained answer, uses question-shaped headings, reinforces clear entities, states verifiable specifics, and ships with FAQ and schema markup — so AI engines can confidently quote a clean chunk of it.",
      },
      {
        q: "How does PeakRank use Claude to write content?",
        a: "PeakRank uses Claude to turn a keyword and a citation gap into a structured, GEO-ready brief, then a human verifies every claim, adds real data and specifics, and approves it before publishing. Claude also helps generate and validate Schema.org markup.",
      },
      {
        q: "Does AI-written content hurt SEO?",
        a: "Generic, unedited AI filler can hurt trust with both readers and search engines. PeakRank avoids that by using Claude for structure and first drafts while a human adds verifiable specifics and judgement before anything ships.",
      },
      {
        q: "Is the same content good for both SEO and GEO?",
        a: "Largely yes. SEO and GEO share a foundation — fast, crawlable, well-structured pages with clear entities and useful content. GEO adds a few moves on top, like leading with the answer and structuring for extraction.",
      },
    ],
  },
  {
    slug: "claude-per-domain-ai-assistant-peakrank",
    title: "Ask your own search data: the per-domain AI assistant Claude powers at PeakRank",
    description:
      "Most SEO dashboards bury the answer in charts. I built a per-domain assistant on Claude so clients can just ask 'why did my AI visibility drop?' and get a grounded, data-backed answer.",
    date: "2026-06-11",
    dateLabel: "11 June 2026",
    readingMinutes: 6,
    category: "Engineering",
    tags: ["PeakRank Digital", "Claude", "RAG", "AI assistant", "GEO", "SEO", "analytics"],
    tldr: "Every domain on PeakRank gets an AI assistant powered by Claude that's grounded in that domain's own rankings, citations and audit data. Clients ask questions in plain language; Claude answers from their numbers — no chart-reading required.",
    projectSlug: "peakrank",
    projectName: "PeakRank Digital",
    projectUrl: "https://www.peakrank.co.za",
    body: [
      {
        type: "p",
        text: "Open almost any SEO dashboard and you're met with a wall of charts. The data is all there; the answer isn't. The hardest part of this industry was never collecting numbers — it was telling a busy business owner what the numbers mean and what to do next. So I built a per-domain assistant into PeakRank, powered by Claude, that you can simply ask.",
      },
      {
        type: "h2",
        text: "The problem with dashboards",
        id: "dashboard-problem",
      },
      {
        type: "p",
        text: "A line went down. Is that seasonality, a Google update, a technical regression, or a competitor pulling ahead in AI answers? A chart can't tell you, and most owners don't have an analyst on hand to interpret it. The result is dashboards people log into, frown at, and close.",
      },
      {
        type: "h2",
        text: "An assistant grounded in your data",
        id: "grounded",
      },
      {
        type: "p",
        text: "The key word is grounded. This isn't a generic chatbot that gives textbook SEO advice. Each domain's assistant is wired to that domain's own data — its keyword rankings, its AI citation scores, its site-audit results — and Claude answers from those numbers.",
      },
      {
        type: "ul",
        items: [
          "Ask 'why did my AI visibility drop this month?' and it points to the specific engines and queries where citations were lost.",
          "Ask 'what should I fix first?' and it prioritises from your actual audit, not a generic checklist.",
          "Ask 'how do I compare to my main competitor?' and it answers from the citation data you're both being measured on.",
          "Ask it in plain English at 11pm, and get a grounded answer without booking a call.",
        ],
      },
      {
        type: "p",
        text: "Technically, this is retrieval-augmented generation: the relevant slices of a client's data are pulled in and given to Claude as context, so its answers are anchored to facts rather than guesses. Claude's strength with long context and faithfulness to source material is what makes the answers trustworthy enough to act on.",
      },
      {
        type: "h2",
        text: "Why grounding matters",
        id: "why-grounding",
      },
      {
        type: "p",
        text: "An ungrounded model will happily invent a plausible reason your traffic fell. That's worse than useless — it's confidently wrong. Tying every answer back to the client's real numbers is what turns the assistant from a party trick into a tool a business runs on. When it can't support a claim from the data, it should say so, and it does.",
      },
      {
        type: "quote",
        text: "The win isn't a chatbot in a dashboard. It's that a business owner can ask 'what changed and what do I do?' and get an answer grounded in their own numbers, in seconds.",
      },
      {
        type: "h2",
        text: "From insight to action",
        id: "insight-to-action",
      },
      {
        type: "p",
        text: "Because the assistant shares the same data backbone as the citation monitor and the content engine, an insight doesn't dead-end. 'You lost citations for these three questions' becomes 'here are the briefs to win them back'. That continuity — see it, understand it, fix it — is the point of building the whole platform on one reasoning engine instead of stitching together five disconnected tools.",
      },
    ],
    faq: [
      {
        q: "What is the PeakRank per-domain assistant?",
        a: "It's an AI assistant, powered by Anthropic's Claude, attached to each domain in PeakRank. It answers plain-language questions about that domain's SEO and GEO performance using the domain's own rankings, citation scores and audit data.",
      },
      {
        q: "How is it different from a normal chatbot?",
        a: "It's grounded. Instead of generic SEO advice, it answers from the specific client's real data using retrieval-augmented generation, so its answers are anchored to facts and tied to actions the client can take.",
      },
      {
        q: "What can I ask it?",
        a: "Questions like 'why did my AI visibility drop?', 'what should I fix first?', or 'how do I compare to my competitor?' — and get answers drawn from your actual rankings, citations and site audit.",
      },
      {
        q: "Can the assistant make things up?",
        a: "It's designed to answer from the client's own data and to say when it can't support a claim from that data, which is what makes its answers reliable enough to act on.",
      },
    ],
  },
  {
    slug: "peakrank-ai-academy-claude-south-africa",
    title: "Teaching South African businesses to run on Claude: the PeakRank AI Academy",
    description:
      "PeakRank's Academy teaches SA SMEs to use Anthropic's Claude in their business — built on Anthropic's 4 Ds AI-fluency framework and Claude for Small Business, with POPIA baked in from module one.",
    date: "2026-06-13",
    dateLabel: "13 June 2026",
    readingMinutes: 7,
    category: "Strategy",
    tags: ["PeakRank Digital", "Claude", "Anthropic", "AI Academy", "POPIA", "South Africa", "SME"],
    tldr: "The PeakRank AI Academy is a three-tier curriculum that teaches South African businesses to use Anthropic's Claude safely and productively — grounded in Anthropic's '4 Ds' AI-fluency framework and Claude for Small Business, and POPIA-aware from module one.",
    projectSlug: "peakrank",
    projectName: "PeakRank Digital",
    projectUrl: "https://www.peakrank.co.za",
    body: [
      {
        type: "p",
        text: "PeakRank Digital sells visibility. But the more time I spent with South African business owners, the clearer one thing became: the biggest lever for most of them isn't a better agency — it's learning to use AI in their own business. So I built the PeakRank AI Academy to teach exactly that, with Anthropic's Claude at the centre and the work grounded in Anthropic's own frameworks.",
      },
      {
        type: "h2",
        text: "Why teach, not just sell",
        id: "why-teach",
      },
      {
        type: "p",
        text: "There are over two and a half million small and medium businesses in South Africa, and most are time-poor and lean. Done-for-you services help, but a founder who can delegate research, drafting and analysis to Claude gets a compounding advantage every single day. Teaching that is higher-leverage than doing one more audit — and it builds the kind of trust no ad ever will.",
      },
      {
        type: "h2",
        text: "Grounded in Anthropic's own foundations",
        id: "anthropic-foundations",
      },
      {
        type: "p",
        text: "I didn't want to invent folk wisdom about prompting. The Academy is built on two Anthropic foundations so the guidance stays accurate and current:",
      },
      {
        type: "ul",
        items: [
          "The '4 Ds' AI-fluency framework — Delegation, Description, Discernment and Diligence — as the mental model for working with Claude well rather than blindly.",
          "Claude for Small Business — the practical side, including how Claude connects to the tools businesses already run on, like Google Workspace, Microsoft 365 and accounting and CRM software.",
          "An accuracy discipline: AI products change fast, so modules link the official source and tell you to confirm current pricing and features before you rely on a number.",
        ],
      },
      {
        type: "h2",
        text: "The three tiers",
        id: "tiers",
      },
      {
        type: "p",
        text: "The curriculum is built to take someone from 'I've heard of ChatGPT' to running real workflows on Claude:",
      },
      {
        type: "ul",
        items: [
          "Foundations — what Claude is, the 4 Ds, your first useful prompts, and how to stay safe and POPIA-aware with business data.",
          "Growth Engine — repeatable workflows for marketing, content and admin, plus a personal AI assistant for the owner.",
          "Accelerator — advanced prompting, custom agentic workflows, rolling AI out to a team, and a capstone project applied to the real business.",
        ],
      },
      {
        type: "h2",
        text: "POPIA from module one",
        id: "popia",
      },
      {
        type: "p",
        text: "Teaching South African businesses to use AI without teaching them the Protection of Personal Information Act would be reckless. Data safety and POPIA awareness are woven through the Academy from the start — what you can and can't put into a tool, how consent works, and how to get the upside of AI without inheriting legal risk. The same principle runs through the whole of PeakRank: compliance is a feature, not a footnote.",
      },
      {
        type: "quote",
        text: "The agency makes you visible. The Academy makes you capable. In a market this early, the businesses that learn to run on AI now will be the ones competitors can't catch.",
      },
      {
        type: "h2",
        text: "Where it fits",
        id: "where-it-fits",
      },
      {
        type: "p",
        text: "The Academy completes the picture. The platform monitors your AI visibility and the agency improves it; the Academy makes your own team fluent in the same tools I use to deliver all of it. It's the same bet repeated at a different level: the South African businesses that adopt AI early — safely, and with a real framework — get a head start that's very hard to give back. If that's the bet you want to make, start at peakrank.co.za.",
      },
    ],
    faq: [
      {
        q: "What is the PeakRank AI Academy?",
        a: "The PeakRank AI Academy is a three-tier curriculum that teaches South African businesses to use Anthropic's Claude in their operations. It runs from foundations through to advanced agentic workflows, and is POPIA-aware throughout.",
      },
      {
        q: "What frameworks is the Academy based on?",
        a: "It's grounded in two Anthropic foundations: the '4 Ds' AI-fluency framework (Delegation, Description, Discernment, Diligence) and Claude for Small Business, with modules linking official sources for accuracy.",
      },
      {
        q: "Who is the Academy for?",
        a: "It's built for South African small and medium businesses — from owners new to AI through to teams ready to roll out custom Claude workflows across their operations.",
      },
      {
        q: "Does the Academy cover POPIA and data safety?",
        a: "Yes. POPIA awareness and data safety are woven through the curriculum from the first module, covering what data is safe to use, how consent works, and how to adopt AI without inheriting legal risk.",
      },
    ],
  },
];

// ── Scheduled publishing ──────────────────────────────────────────────
// The site is a static export with no runtime scheduler: a post only goes
// live when the site is rebuilt on/after its `date`. Posts dated in the
// future are withheld at build time (not rendered, not in sitemap, no static
// route), so pushing all of them at once is safe — each appears on the next
// build that runs on or after its publish date.

/** Build-time date in YYYY-MM-DD (UTC), comparable to a post's ISO `date`. */
const TODAY = new Date().toISOString().slice(0, 10);

/** True once a post's publish date has arrived (evaluated at build time). */
export function isPublished(post: BlogPost): boolean {
  return post.date <= TODAY;
}

/** Posts whose publish date has arrived. */
export function publishedPosts(): BlogPost[] {
  return posts.filter(isPublished);
}

export function getPost(slug: string): BlogPost | undefined {
  const post = posts.find((p) => p.slug === slug);
  return post && isPublished(post) ? post : undefined;
}

/** Live posts, newest first. */
export function sortedPosts(): BlogPost[] {
  return publishedPosts().sort((a, b) => (a.date < b.date ? 1 : -1));
}
