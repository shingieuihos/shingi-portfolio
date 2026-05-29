import Image from "next/image";
import { ViewCounter } from "./ViewCounter";
import {
  about,
  badges,
  education,
  experience,
  languages,
  profile,
  projects,
  skills,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <TopNav />
      <main className="relative mx-auto w-full max-w-6xl px-6 pb-32 sm:px-10">
        <Hero />
        <About />
        <SelectedWork />
        <Experience />
        <Certifications />
        <Education />
        <SkillsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/* ───────────────────────────────────────────────────────────── nav */

function TopNav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-canvas/60 border-b hairline">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="font-display text-xl tracking-tight">
            Shingi <span className="text-accent">/</span> Mudyirwa
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted">
          <a href="#work" className="hover:text-foreground transition-colors">
            Work
          </a>
          <a
            href="#experience"
            className="hover:text-foreground transition-colors"
          >
            Experience
          </a>
          <a href="#certs" className="hover:text-foreground transition-colors">
            Certifications
          </a>
          <a
            href="#contact"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-full border hairline-strong px-4 py-1.5 text-xs font-medium tracking-wide hover:bg-foreground hover:text-canvas transition-colors"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

/* ───────────────────────────────────────────────────────────── hero */

function Hero() {
  return (
    <section id="top" className="relative pt-20 pb-24 sm:pt-32 sm:pb-36">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 fade-up">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted-2 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span>{profile.available}</span>
            <span className="text-muted-2/50">·</span>
            <ViewCounter />
          </div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-balance">
            Shingi <span className="italic text-accent">Mudyirwa</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-xl sm:text-2xl text-foreground/85 leading-snug text-pretty">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {profile.headlineRoles.map((r) => (
              <span key={r.at} className="inline-flex items-center gap-2">
                <span className="text-foreground/90">{r.role}</span>
                <span className="text-muted-2">at</span>
                <span className="text-accent">{r.at}</span>
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-canvas px-5 py-2.5 text-sm font-medium hover:bg-accent transition-colors"
            >
              Get in touch
              <ArrowRight />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border hairline-strong px-5 py-2.5 text-sm font-medium hover:bg-surface transition-colors"
            >
              See selected work
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border hairline-strong px-5 py-2.5 text-sm font-medium hover:bg-surface transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 fade-up">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto rounded-2xl overflow-hidden border hairline-strong bg-surface grain">
            <Image
              src="/portrait.png"
              alt="Portrait of Shingi Mudyirwa"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 420px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/70">
                  Based in
                </div>
                <div className="font-display text-2xl mt-1">
                  Cape Town, ZA
                </div>
              </div>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-foreground/10 backdrop-blur px-3 py-1 text-xs font-medium border hairline-strong hover:bg-foreground hover:text-canvas transition-colors"
              >
                in/shingimudyirwa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────── about */

function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="Engineer, founder, teacher.">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>{about.intro}</p>
          <p>{about.story}</p>
          <p className="text-foreground/70 border-l-2 border-accent/60 pl-5 italic">
            {about.ministry}
          </p>
        </div>
        <aside className="lg:col-span-5">
          <div className="rounded-xl border hairline bg-surface/60 p-6 space-y-5">
            <Stat label="Years in IT" value="20+" />
            <Stat label="Years in ministry" value="20+" />
            <Stat label="AWS badges" value="6" />
            <Stat label="Live products" value="3" />
            <div className="pt-4 border-t hairline">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-2 mb-3">
                Languages
              </div>
              <div className="flex flex-col gap-2">
                {languages.map((l) => (
                  <div key={l.name} className="flex justify-between text-sm">
                    <span>{l.name}</span>
                    <span className="text-muted">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between">
      <span className="text-sm text-muted">{label}</span>
      <span className="font-display text-3xl text-foreground">{value}</span>
    </div>
  );
}

/* ───────────────────────────────────────────────────────────── work */

function SelectedWork() {
  return (
    <Section id="work" eyebrow="02 · Selected work" title="Things I've shipped.">
      <div className="space-y-10">
        {projects.map((p, i) => (
          <article
            key={p.slug}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
          >
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""} block`}
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border hairline-strong bg-surface transition-transform duration-500 group-hover:-translate-y-1">
                <Image
                  src={p.image}
                  alt={`${p.name} — homepage`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 left-4 rounded-full bg-canvas/80 backdrop-blur px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em]">
                  {p.year}
                </div>
              </div>
            </a>
            <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-3">
                {p.role}
              </div>
              <h3 className="font-display text-3xl sm:text-4xl tracking-tight">
                {p.name}
              </h3>
              <p className="mt-3 text-lg text-foreground/80 italic">
                {p.tagline}
              </p>
              <p className="mt-4 text-foreground/70 leading-relaxed">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-mono px-2 py-1 rounded-md bg-surface border hairline text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
              >
                Visit {new URL(p.url).hostname.replace("www.", "")}
                <ArrowUpRight />
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────────────────────────────────────────────── experience */

function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="03 · Experience"
      title="Two decades, three callings."
    >
      <ol className="relative border-l hairline-strong ml-3 space-y-12">
        {experience.map((role, i) => (
          <li key={`${role.company}-${i}`} className="relative pl-8">
            <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-accent ring-4 ring-canvas" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-2xl">
                {role.title}
                <span className="text-muted-2 font-sans text-base mx-2">·</span>
                <span className="text-accent text-xl">{role.company}</span>
              </h3>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-2">
                {role.start} — {role.end}
              </span>
            </div>
            <div className="mt-1 text-sm text-muted flex flex-wrap gap-x-3 gap-y-1">
              <span>{role.location}</span>
              {role.type && (
                <>
                  <span className="text-muted-2">·</span>
                  <span>{role.type}</span>
                </>
              )}
            </div>
            <p className="mt-4 text-foreground/75 leading-relaxed max-w-3xl">
              {role.description}
            </p>
            {role.skills && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {role.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-mono px-2 py-1 rounded-md bg-surface border hairline text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ───────────────────────────────────────────────────────────── certs */

function Certifications() {
  return (
    <Section
      id="certs"
      eyebrow="04 · Certifications"
      title="Credentialed in cloud."
    >
      <p className="text-foreground/70 max-w-2xl mb-10">
        AWS-issued knowledge badges, verifiable on Credly. Currently training
        toward becoming a Claude Certified Architect through Anthropic Academy.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {badges.map((b) => (
          <a
            key={b.name}
            href={b.url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center text-center rounded-xl border hairline bg-surface/60 p-4 hover:bg-surface hover:hairline-strong transition-all"
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 transition-transform group-hover:-translate-y-1">
              <Image
                src={b.image}
                alt={b.name}
                fill
                sizes="120px"
                className="object-contain"
              />
            </div>
            <div className="mt-3 text-[11px] font-medium leading-tight">
              {b.name.replace("AWS Knowledge: ", "")}
            </div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-2">
              {b.date}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────────────────────────────────────────────── education */

function Education() {
  return (
    <Section
      id="education"
      eyebrow="05 · Education"
      title="School, certs, and what's next."
    >
      <div className="divide-y hairline border-y hairline">
        {education.map((e, i) => (
          <div
            key={`${e.school}-${i}`}
            className="grid grid-cols-1 sm:grid-cols-12 gap-3 py-6"
          >
            <div className="sm:col-span-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-2 pt-1">
              {e.date}
            </div>
            <div className="sm:col-span-7">
              <div className="font-display text-xl">{e.qualification}</div>
              <div className="text-sm text-accent mt-0.5">{e.school}</div>
              {e.note && (
                <div className="text-sm text-muted mt-1">{e.note}</div>
              )}
            </div>
            <div className="sm:col-span-2 sm:text-right">
              <span
                className={`inline-block text-[10px] font-mono uppercase tracking-wider rounded-full px-2.5 py-1 border ${
                  e.status === "in-progress"
                    ? "border-accent/40 text-accent bg-accent-soft"
                    : "hairline text-muted"
                }`}
              >
                {e.status === "in-progress" ? "In progress" : "Completed"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────────────────────────────────────────────── skills */

function SkillsSection() {
  return (
    <Section id="skills" eyebrow="06 · Skills" title="The toolkit.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([group, items]) => (
          <div
            key={group}
            className="rounded-xl border hairline bg-surface/40 p-5"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-3">
              {group}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {items.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2.5 py-1 rounded-md bg-canvas border hairline text-foreground/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────────────────────────────────────────────── contact */

function Contact() {
  return (
    <Section id="contact" eyebrow="07 · Contact" title="Let's build something.">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-4">
          <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
            Open to consulting, fractional CTO work, cloud architecture, and
            interesting product builds for African markets. The best way to
            reach me is email.
          </p>
          <div className="space-y-3 pt-2">
            {profile.emails.map((e) => (
              <a
                key={e.value}
                href={`mailto:${e.value}`}
                className="group flex items-center justify-between rounded-xl border hairline bg-surface/60 px-5 py-4 hover:hairline-strong hover:bg-surface transition-all"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-2">
                    {e.label}
                  </div>
                  <div className="text-foreground mt-1 group-hover:text-accent transition-colors">
                    {e.value}
                  </div>
                </div>
                <ArrowUpRight />
              </a>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 space-y-3">
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-xl border hairline bg-surface/60 px-5 py-4 hover:hairline-strong hover:bg-surface transition-all"
          >
            <span className="font-medium">LinkedIn</span>
            <span className="text-muted text-sm">in/shingimudyirwa</span>
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-xl border hairline bg-surface/60 px-5 py-4 hover:hairline-strong hover:bg-surface transition-all"
          >
            <span className="font-medium">GitHub</span>
            <span className="text-muted text-sm">@shingieuihos</span>
          </a>
          <a
            href={profile.social.credly}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-xl border hairline bg-surface/60 px-5 py-4 hover:hairline-strong hover:bg-surface transition-all"
          >
            <span className="font-medium">Credly</span>
            <span className="text-muted text-sm">View badges</span>
          </a>
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────────────────────────────────────────── footer */

function Footer() {
  return (
    <footer className="border-t hairline">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted">
        <div>
          <div className="font-display text-foreground text-lg">
            Shingi Mudyirwa
          </div>
          <div className="mt-1">
            {profile.location} · © {new Date().getFullYear()}
          </div>
        </div>
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-2">
          Built with Next.js · Deployed on Cloudflare
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────────────────────────────────────────── helpers */

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 sm:py-28 border-t hairline">
      <div className="mb-12">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">
          {eyebrow}
        </div>
        <h2 className="font-display text-3xl sm:text-5xl tracking-tight text-balance">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function ArrowRight() {
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
      className="text-muted group-hover:text-accent transition-colors"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}
