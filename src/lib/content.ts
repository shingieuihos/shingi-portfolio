export const profile = {
  name: "Shingi Mudyirwa",
  tagline:
    "Building cloud-native products for African markets — from Cape Town.",
  headlineRoles: [
    { role: "CTO", at: "SubSaharaData" },
    { role: "Founder", at: "PeakRank Digital" },
    { role: "Ministry Director", at: "WhatTheWordSays" },
  ],
  location: "Cape Town, South Africa",
  available: "Open to consulting & contract work",
  emails: [
    { label: "General", value: "hello@shingi.tech" },
    { label: "Enquiries", value: "info@shingi.tech" },
    { label: "Ministry", value: "shingi@whatthewordsays.org" },
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/shingimudyirwa/",
    github: "https://github.com/shingieuihos",
    credly: "https://www.credly.com/users/shingi-mudyirwa",
  },
  resumeUrl: "https://s3.af-south-1.amazonaws.com/cv.shingimudyirwa.click/index.html",
};

export const about = {
  intro:
    "I'm a software developer who pairs hands-on AWS cloud engineering with Claude AI specialization. I lead engineering at SubSaharaData, run PeakRank Digital as founder, SignalCartel and direct WhatTheWordSays — a digital ministry reaching tens of thousands of people monthly. Twenty years of ministry leadership shapes how I build: long horizons, real users, plain language.",
  story:
    "My IT journey started as a teenager — I moved to Cape Town to study at CTU Training Solutions, two years that earned me CompTIA A+, Network+ and MCSE. Today I work with AWS and Linux, and on AI-assisted software with Anthropic's Claude. I enjoy the part where complex infrastructure quietly becomes a simple product someone uses every day — and I stay in constant training to keep the skill level sharp.",
  ministry:
    "Outside engineering, I've spent 20+ years (18 full-time) mentoring young people through authentic discipleship. Over those two decades I've pioneered dynamic ways to reach my generation with the gospel — from Christian music and merch to youth services and outreaches that touched tens of thousands of young lives. WhatTheWordSays is the digital arm of that work: Bible teaching and commentary for a global audience.",
};

export type Project = {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  description: string;
  url: string;
  image: string;
  stack: string[];
  year: string;
};

export const projects: Project[] = [
  {
    slug: "subsaharadata",
    name: "SubSaharaData",
    role: "Chief Technology Officer",
    tagline: "Turning African market complexity into clear intelligence.",
    description:
      "Decision-grade market intelligence across all 54 African nations — risk scoring, capital flows, and industry assessments across 13 sectors. Built for investors who need to know where to act before capital arrives.",
    url: "https://www.subsaharadata.com",
    image: "/projects/subsaharadata.png",
    stack: ["Next.js", "Supabase", "Tailwind", "Vercel", "Recharts", "Leaflet"],
    year: "2026",
  },
  {
    slug: "peakrank",
    name: "PeakRank Digital",
    role: "Founder",
    tagline: "South Africa's first GEO + SEO + SEM agency.",
    description:
      "Brand visibility across Google, AI search (ChatGPT, Perplexity) and paid channels — bundled with POPIA-compliant consent. Productized SEO, GEO and paid media for South African SMEs through enterprise clients.",
    url: "https://www.peakrank.co.za",
    image: "/projects/peakrank.png",
    stack: ["Next.js", "TypeScript", "Tailwind", "GA4", "POPIA"],
    year: "2026",
  },
  {
    slug: "signalcartel",
    name: "SignalCartel",
    role: "Founder & Engineer",
    tagline: "Run your own trading signals service.",
    description:
      "A white-label SaaS that lets traders launch a branded signals business — billing, subscriptions and Telegram delivery on a managed codebase. Productizing as SignalKit.",
    url: "https://www.signalcartel.trade",
    image: "/projects/signalcartel.png",
    stack: ["Next.js", "Supabase", "Telegram API", "Stripe", "PM2", "Caddy"],
    year: "2025",
  },
];

export type Role = {
  title: string;
  company: string;
  type?: string;
  start: string;
  end: string;
  location: string;
  description: string;
  skills?: string[];
};

export const experience: Role[] = [
  {
    title: "Chief Technology Officer",
    company: "SubSaharaData LLC",
    type: "Contract",
    start: "Jan 2026",
    end: "Present",
    location: "Texas, United States · Remote",
    description:
      "Lead engineering and product for an investment-intelligence platform covering 54 African markets. Architecture, data pipelines, security, and the dashboard surface investors actually use.",
    skills: [
      "IT Strategy",
      "Software Development",
      "Cloud Architecture",
      "Information Security",
      "Web Application Security",
      "Data Engineering",
    ],
  },
  {
    title: "Founder",
    company: "PeakRank Digital",
    type: "Self-employed",
    start: "Jan 2026",
    end: "Present",
    location: "City of Cape Town, Western Cape · Hybrid",
    description:
      "Founded South Africa's first agency to combine Generative Engine Optimization with traditional SEO and SEM. Productized service packages for SMEs and enterprise clients, all POPIA-compliant.",
    skills: ["SEO", "GEO", "Google Ads", "POPIA", "Analytics", "Product"],
  },
  {
    title: "Ministry Director",
    company: "WhatTheWordSays",
    type: "Full-time",
    start: "Sep 2020",
    end: "Present",
    location: "Cape Town, Western Cape · Hybrid",
    description:
      "Founder and director of a digital ministry platform reaching tens of thousands through Bible teaching and commentary. Strategy, content, and the technical stack — currently mid-redesign on WordPress.",
    skills: [
      "Teaching",
      "Church Events",
      "Discipleship",
      "Content Strategy",
      "Public Speaking",
    ],
  },
  {
    title: "Youth Minister",
    company: "Christ Embassy",
    start: "Jun 2017",
    end: "Oct 2022",
    location: "City of Cape Town, Western Cape",
    description:
      "Led youth ministry programs, outreaches and pastoral care for young members of the congregation. Pioneered creative formats for reaching young people with the gospel.",
    skills: [
      "Youth Ministry",
      "Pastoring",
      "Discipleship",
      "Content Strategy",
      "Public Speaking",
    ],
  },
  {
    title: "Youth Minister",
    company: "Christ Embassy",
    start: "Sep 2004",
    end: "Nov 2014",
    location: "Cape Town Area, South Africa",
    description:
      "First decade in full-time ministry — youth mentoring, teaching, and pioneering programs that impacted tens of thousands of young lives across the region.",
    skills: [
      "Youth Ministry",
      "Teaching",
      "Religious Practices",
      "Content Strategy",
    ],
  },
];

export type Badge = {
  name: string;
  issuer: string;
  date: string;
  image: string;
  url: string;
};

export const badges: Badge[] = [
  {
    name: "AWS Knowledge: Security Champion",
    issuer: "Amazon Web Services",
    date: "Aug 2025",
    image: "/badges/security-champion.png",
    url: "https://www.credly.com/badges/955ae1df-8cb3-4c7a-9fcc-14e533733325",
  },
  {
    name: "AWS Knowledge: File Storage",
    issuer: "Amazon Web Services",
    date: "Jul 2025",
    image: "/badges/file-storage.png",
    url: "https://www.credly.com/badges/8d6e5059-7f7d-47b2-8330-d1332eed0df5",
  },
  {
    name: "AWS Knowledge: Networking Core",
    issuer: "Amazon Web Services",
    date: "Jul 2025",
    image: "/badges/networking-core.png",
    url: "https://www.credly.com/badges/4547f8fa-2104-45dc-983c-84fde76ad7e2",
  },
  {
    name: "AWS Knowledge: Cloud Essentials",
    issuer: "Amazon Web Services",
    date: "Jun 2025",
    image: "/badges/cloud-essentials.png",
    url: "https://www.credly.com/badges/bd0a2711-c44c-40d3-a10b-a5f8d1edaedf",
  },
  {
    name: "AWS Knowledge: Compute",
    issuer: "Amazon Web Services",
    date: "Jun 2025",
    image: "/badges/compute.png",
    url: "https://www.credly.com/badges/cb7cc554-f4cd-4400-a4a6-8b85bc8ca133",
  },
  {
    name: "AWS Cloud Practitioner: Foundations",
    issuer: "AWS Skills Center",
    date: "Jun 2025",
    image: "/badges/cloud-practitioner.png",
    url: "https://www.credly.com/badges/2c0cfa4d-d810-4e15-aca3-ff0ae1b20ed0",
  },
];

export type Education = {
  school: string;
  qualification: string;
  date: string;
  note?: string;
  status: "completed" | "in-progress";
};

export const education: Education[] = [
  {
    school: "Anthropic Academy",
    qualification: "Claude Certified Architect",
    date: "Feb 2026 – Present",
    note: "Building with the Claude API · Model Context Protocol (Intro & Advanced) · Introduction to Agent Skills · Introduction to Subagents · Claude Code in Action · Claude with Amazon Bedrock",
    status: "in-progress",
  },
  {
    school: "AWS Training & Certification",
    qualification:
      "Cloud Practitioner · Cloud Essentials · Compute · Security · Storage · Networking · EKS",
    date: "Jun – Aug 2025",
    status: "completed",
  },
  {
    school: "CTU Training Solutions",
    qualification: "Computer Systems Networking — CompTIA A+, Network+, MCSE",
    date: "2001 – 2003",
    note: "Operating Systems: Windows 7, 8 & 10",
    status: "completed",
  },
  {
    school: "Jameson High School",
    qualification: "Secondary education",
    date: "Completed",
    status: "completed",
  },
];

export const skills = {
  Cloud: [
    "AWS",
    "EC2",
    "S3",
    "Lambda",
    "IAM",
    "VPC",
    "Route 53",
    "RDS",
    "DynamoDB",
    "CloudFront",
    "API Gateway",
    "CloudFormation",
    "Cloud Security",
  ],
  Platform: [
    "Docker",
    "Linux",
    "PM2",
    "Caddy",
    "Vercel",
    "Serverless",
  ],
  "Web & Product": [
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind",
    "Supabase",
    "PostgreSQL",
    "Stripe",
    "Resend",
  ],
  "AI & Tooling": [
    "Anthropic Claude",
    "Claude Skills",
    "Claude Code",
    "Prompt Engineering",
    "Git",
  ],
  Marketing: ["SEO", "GEO", "Google Ads", "GA4", "POPIA Compliance"],
  Leadership: [
    "IT Strategy",
    "Product",
    "Teaching",
    "Public Speaking",
    "Ministry Leadership",
  ],
};

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Shona", level: "Native" },
];
