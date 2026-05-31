import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts, sortedPosts, type ContentBlock } from "@/lib/blog";
import { profile } from "@/lib/content";
import { BlogFooter, BlogNav } from "../page";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `https://shingi.tech/blog/${post.slug}`;
  return {
    title: `${post.title} — Shingi Mudyirwa`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: "Shingi Mudyirwa", url: profile.social.linkedin }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      // article:author → links the post to the LinkedIn profile
      authors: [profile.social.linkedin],
      tags: post.tags,
      // og:image is supplied by the generated opengraph-image.tsx (1200×630)
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      // twitter:image is derived from the generated opengraph-image.tsx
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `https://shingi.tech/blog/${post.slug}`;
  const related = sortedPosts().filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    author: {
      "@type": "Person",
      name: "Shingi Mudyirwa",
      url: "https://shingi.tech",
      jobTitle: "Software Developer & Cloud Engineer",
      sameAs: [
        profile.social.linkedin,
        profile.social.github,
        profile.social.credly,
      ],
    },
    publisher: {
      "@type": "Person",
      name: "Shingi Mudyirwa",
      url: "https://shingi.tech",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://shingi.tech" },
      { "@type": "ListItem", position: 2, name: "Field Notes", item: "https://shingi.tech/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <BlogNav />
      <main className="relative mx-auto w-full max-w-3xl px-6 pb-32 sm:px-10">
        {/* breadcrumb */}
        <nav aria-label="Breadcrumb" className="pt-12 text-sm text-muted">
          <Link href="/blog" className="hover:text-foreground transition-colors">
            Field notes
          </Link>
          <span className="mx-2 text-muted-2/50">/</span>
          <span className="text-accent">{post.category}</span>
        </nav>

        <article className="pt-8">
          <header className="pb-8 border-b hairline">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2 mb-5">
              <span className="text-accent">{post.category}</span>
              <span className="text-muted-2/50">·</span>
              <time dateTime={post.date}>{post.dateLabel}</time>
              <span className="text-muted-2/50">·</span>
              <span>{post.readingMinutes} min read</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight text-balance">
              {post.title}
            </h1>
            {/* TL;DR — leads with the answer for AI overviews / featured snippets */}
            <div className="mt-8 rounded-xl border hairline-strong bg-surface/60 p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-2">
                In short
              </div>
              <p className="text-lg text-foreground/85 leading-relaxed text-pretty">
                {post.tldr}
              </p>
            </div>
            {post.projectName && post.projectUrl && (
              <a
                href={post.projectUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
              >
                Visit {post.projectName} <ArrowUpRight />
              </a>
            )}
          </header>

          {/* body */}
          <div className="post-body pt-8">
            {post.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          {/* FAQ */}
          {post.faq.length > 0 && (
            <section className="mt-14 pt-10 border-t hairline">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
                FAQ
              </div>
              <div className="space-y-6">
                {post.faq.map((f) => (
                  <div key={f.q}>
                    <h3 className="font-display text-xl tracking-tight">{f.q}</h3>
                    <p className="mt-2 text-foreground/75 leading-relaxed text-pretty">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* client CTA */}
          <ClientCTA projectName={post.projectName} />

          {/* author + connect */}
          <section className="mt-14 pt-10 border-t hairline">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 shrink-0 rounded-full bg-accent/15 border hairline-strong flex items-center justify-center font-display text-lg text-accent">
                S
              </div>
              <div className="min-w-0">
                <div className="font-display text-lg">
                  Written by{" "}
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noreferrer author"
                    className="hover:text-accent transition-colors"
                  >
                    Shingi Mudyirwa
                  </a>
                </div>
                <p className="mt-1 text-sm text-foreground/70 leading-relaxed max-w-xl">
                  Software developer and cloud engineer in Cape Town. CTO at SubSaharaData,
                  founder of PeakRank Digital, and director of WhatTheWordSays.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <SocialLink href={profile.social.linkedin} label="Connect on LinkedIn" />
                  <SocialLink
                    href={post.repoUrl ?? profile.social.github}
                    label={post.repoUrl ? "View source on GitHub" : "Code on GitHub"}
                  />
                  <SocialLink href={profile.social.credly} label="Verify badges on Credly" />
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-canvas px-3.5 py-1.5 text-xs font-medium hover:bg-accent transition-colors"
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </article>

        {/* related */}
        {related.length > 0 && (
          <section className="mt-16">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
              Keep reading
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group rounded-xl border hairline bg-surface/40 p-5 hover:hairline-strong hover:bg-surface transition-all"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-2 mb-2">
                    {r.category} · {r.readingMinutes} min
                  </div>
                  <div className="font-display text-xl tracking-tight group-hover:text-accent transition-colors text-balance">
                    {r.title}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <BlogFooter />
    </>
  );
}

/* ───────────────────────────────────────────── block renderer */

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          id={block.id}
          className="font-display text-2xl sm:text-3xl tracking-tight mt-12 mb-4 scroll-mt-24"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="font-display text-xl tracking-tight mt-8 mb-3">{block.text}</h3>
      );
    case "p":
      return (
        <p className="text-foreground/80 leading-relaxed mb-5 text-pretty">{block.text}</p>
      );
    case "ul":
      return (
        <ul className="mb-6 space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="text-pretty">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-8 border-l-2 border-accent/60 pl-5 italic text-lg text-foreground/75 text-pretty">
          {block.text}
        </blockquote>
      );
  }
}

function ClientCTA({ projectName }: { projectName?: string }) {
  const primary = profile.emails[0];
  const secondary = profile.emails[1];
  return (
    <section className="mt-14 rounded-2xl border hairline-strong bg-surface/60 p-7 sm:p-9 grain">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-3">
        Build with me
      </div>
      <h2 className="font-display text-2xl sm:text-3xl tracking-tight text-balance">
        Want a platform like{" "}
        <span className="italic text-accent">{projectName ?? "this"}</span> built for you?
      </h2>
      <p className="mt-4 text-foreground/80 leading-relaxed max-w-2xl text-pretty">
        I design and ship cloud-native products end to end — architecture, data, security and
        a front end your users actually want to use — and make sure they get found on Google and
        cited by AI search. If you have a product in mind, or want your brand visible across
        SEO and GEO, let&apos;s talk.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${primary.value}?subject=${encodeURIComponent(
            "Project enquiry — let's build something"
          )}`}
          className="inline-flex items-center gap-2 rounded-full bg-foreground text-canvas px-5 py-2.5 text-sm font-medium hover:bg-accent transition-colors"
        >
          Email {primary.value}
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
      <p className="mt-4 text-sm text-muted">
        General: <a href={`mailto:${primary.value}`} className="text-accent hover:underline">{primary.value}</a>
        {secondary && (
          <>
            {" · "}Enquiries:{" "}
            <a href={`mailto:${secondary.value}`} className="text-accent hover:underline">
              {secondary.value}
            </a>
          </>
        )}
        {" · "}Based in Cape Town, South Africa · available worldwide (remote)
      </p>
    </section>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border hairline-strong px-3.5 py-1.5 text-xs font-medium text-foreground/80 hover:bg-surface hover:text-foreground transition-colors"
    >
      {label}
    </a>
  );
}

function ArrowUpRight() {
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
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}
