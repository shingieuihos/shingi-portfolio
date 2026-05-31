import type { Metadata } from "next";
import Link from "next/link";
import { blogMeta, sortedPosts } from "@/lib/blog";
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Field Notes — Shingi Mudyirwa",
  description: blogMeta.description,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Field Notes — Shingi Mudyirwa",
    description: blogMeta.description,
    url: "https://shingi.tech/blog",
    type: "website",
  },
};

export default function BlogIndex() {
  const all = sortedPosts();
  const [lead, ...rest] = all;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: blogMeta.title,
    description: blogMeta.description,
    url: "https://shingi.tech/blog",
    author: { "@type": "Person", name: blogMeta.author, url: "https://shingi.tech" },
    blogPost: all.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      url: `https://shingi.tech/blog/${p.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogNav />
      <main className="relative mx-auto w-full max-w-6xl px-6 pb-32 sm:px-10">
        <header className="pt-20 pb-12 sm:pt-28 sm:pb-16 border-b hairline">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">
            Field notes
          </div>
          <h1 className="font-display text-4xl sm:text-6xl tracking-tight text-balance max-w-3xl">
            Case studies on what I&apos;ve <span className="italic text-accent">shipped</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/75 leading-relaxed text-pretty">
            {blogMeta.description}
          </p>
        </header>

        {/* Lead post */}
        {lead && (
          <Link href={`/blog/${lead.slug}`} className="group block py-12 border-b hairline">
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
              <div className="lg:col-span-8">
                <PostMeta category={lead.category} dateLabel={lead.dateLabel} minutes={lead.readingMinutes} />
                <h2 className="mt-4 font-display text-3xl sm:text-4xl tracking-tight group-hover:text-accent transition-colors text-balance">
                  {lead.title}
                </h2>
                <p className="mt-4 text-lg text-foreground/80 leading-relaxed text-pretty">
                  {lead.tldr}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium group-hover:text-accent transition-colors">
                  Read field note <Arrow />
                </span>
              </div>
              <div className="lg:col-span-4 flex flex-wrap gap-1.5 lg:pt-1">
                {lead.tags.slice(0, 5).map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          </Link>
        )}

        {/* Rest */}
        <div className="divide-y hairline">
          {rest.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group block py-9">
              <article className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-8 items-baseline">
                <div className="sm:col-span-3">
                  <PostMeta category={p.category} dateLabel={p.dateLabel} minutes={p.readingMinutes} />
                </div>
                <div className="sm:col-span-9">
                  <h2 className="font-display text-2xl sm:text-3xl tracking-tight group-hover:text-accent transition-colors text-balance">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-foreground/70 leading-relaxed max-w-2xl text-pretty">
                    {p.description}
                  </p>
                  {p.projectName && p.projectUrl && (
                    <p className="mt-3 text-sm text-muted">
                      Project:{" "}
                      <span className="text-accent">{p.projectName}</span>
                    </p>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Client CTA */}
        <section className="mt-16 rounded-2xl border hairline-strong bg-surface/60 p-8 sm:p-10 grain">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-3">
            Build with me
          </div>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-balance max-w-2xl">
            Need a platform built — and <span className="italic text-accent">found</span>?
          </h2>
          <p className="mt-4 max-w-2xl text-foreground/80 leading-relaxed text-pretty">
            These are products I&apos;ve shipped end to end. If you want something similar built
            for you — or your brand made visible across Google and AI search — I take on
            consulting, fractional CTO and product builds. The fastest way to start is an email.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.emails[0].value}?subject=${encodeURIComponent(
                "Project enquiry — let's build something"
              )}`}
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-canvas px-5 py-2.5 text-sm font-medium hover:bg-accent transition-colors"
            >
              Email {profile.emails[0].value}
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border hairline-strong px-5 py-2.5 text-sm font-medium hover:bg-surface transition-colors"
            >
              See all contact options
            </Link>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border hairline-strong px-5 py-2.5 text-sm font-medium hover:bg-surface transition-colors"
            >
              Message on LinkedIn
            </a>
          </div>
        </section>
      </main>
      <BlogFooter />
    </>
  );
}

/* ───────────────────────────────────────────── shared blog chrome */

export function BlogNav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-canvas/60 border-b hairline">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="font-display text-xl tracking-tight">
            Shingi <span className="text-accent">/</span> Mudyirwa
          </span>
        </Link>
        <nav className="flex items-center gap-7 text-sm text-muted">
          <Link href="/#work" className="hover:text-foreground transition-colors">
            Work
          </Link>
          <Link href="/blog" className="text-foreground transition-colors">
            Field notes
          </Link>
          <Link
            href="/#contact"
            className="rounded-full border hairline-strong px-4 py-1.5 text-xs font-medium tracking-wide hover:bg-foreground hover:text-canvas transition-colors"
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function BlogFooter() {
  return (
    <footer className="border-t hairline">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted">
        <div>
          <div className="font-display text-foreground text-lg">Shingi Mudyirwa</div>
          <div className="mt-1">Cape Town, South Africa · © {new Date().getFullYear()}</div>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href={profile.social.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
            GitHub
          </a>
          <a href={`mailto:${profile.emails[0].value}`} className="hover:text-foreground transition-colors">
            {profile.emails[0].value}
          </a>
          <Link href="/" className="hover:text-foreground transition-colors">
            ← Portfolio
          </Link>
        </div>
      </div>
    </footer>
  );
}

function PostMeta({
  category,
  dateLabel,
  minutes,
}: {
  category: string;
  dateLabel: string;
  minutes: number;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2">
      <span className="text-accent">{category}</span>
      <span className="text-muted-2/50">·</span>
      <span>{dateLabel}</span>
      <span className="text-muted-2/50">·</span>
      <span>{minutes} min read</span>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-mono px-2 py-1 rounded-md bg-surface border hairline text-muted">
      {children}
    </span>
  );
}

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
