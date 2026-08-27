import type { Metadata } from "next";
import Image from "next/image";
import { aiVideo as c } from "@/content/funnels/ai-video";
import AiVideoLeadForm from "@/components/AiVideoLeadForm";
import s from "./ai-video.module.css";

export const metadata: Metadata = {
  title: c.meta.title,
  description: c.meta.description,
  alternates: { canonical: c.meta.url },
  openGraph: {
    title: c.meta.title,
    description: c.meta.description,
    url: c.meta.url,
    type: "website",
    images: [{ url: c.meta.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: c.meta.title,
    description: c.meta.description,
    images: [c.meta.ogImage],
  },
};

export default function AiVideoPage() {
  return (
    <main>
      <Hero />
      <StackBar />
      <Pillars />
      <Process />
      <Comparison />
      <SocialProof />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}

/* ------------------------------ Hero ------------------------------ */
function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-white/10">
      <ReelWall />
      <div className={s.heroVeil} />
      <div className={s.heroGlow} />
      <div className={`${s.heroGlow} ${s.heroGlowAlt}`} />
      <div className={s.grain} />

      <div className="relative z-10">
        <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 pt-6">
          <Image
            src={c.logo.src}
            alt={c.logo.alt}
            width={160}
            height={40}
            className="h-9 w-auto"
            priority
          />
          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            {c.nav.map((n) => (
              <a key={n.href} href={n.href} className="transition hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#quote"
            className="rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500"
          >
            {c.hero.ctaPrimary}
          </a>
        </header>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-20 pt-12 sm:pt-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-600/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-brand-400">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              {c.hero.badge}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-[56px]">
              {c.hero.titlePre}
              <span className={`${s.serif} text-brand-400`}>{c.hero.titleHighlight}</span>
              {c.hero.titlePost}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              {c.hero.subtitle}
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {c.hero.chips.map((chip) => (
                <li
                  key={chip}
                  className="flex items-center gap-2 text-[15px] font-medium text-slate-200"
                >
                  <span className="text-accent-400">✓</span> {chip}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#quote"
                className="rounded-xl bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500"
              >
                {c.hero.ctaPrimary}
              </a>
              <a
                href="#pillars"
                className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
              >
                ▶ {c.hero.ctaSecondary}
              </a>
            </div>
          </div>

          <div
            id="quote"
            className={`animate-fade-up scroll-mt-24 rounded-2xl border border-white/10 p-6 shadow-2xl shadow-black/40 sm:p-8 ${s.glass}`}
          >
            <h2 className="text-xl font-bold text-white">{c.form.heading}</h2>
            <p className="mt-1.5 text-sm text-slate-400">{c.form.subheading}</p>
            <AiVideoLeadForm sourceForm="hero" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ReelWall() {
  const g = c.reelGradients;
  return (
    <div className={s.reelWall} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, col) => (
        <div className={s.col} key={col}>
          {/* tile set duplicated so the vertical loop is seamless */}
          {[0, 1].map((dup) =>
            Array.from({ length: 5 }).map((__, t) => (
              <div
                key={`${dup}-${t}`}
                className={s.tile}
                style={{ background: g[(col * 3 + t) % g.length] }}
              >
                <span className={s.play} />
              </div>
            )),
          )}
        </div>
      ))}
    </div>
  );
}

/* ---------------------------- Stack bar ---------------------------- */
function StackBar() {
  const doubled = [...c.stack.tools, ...c.stack.tools];
  return (
    <div className="overflow-hidden border-b border-white/10 bg-navy-900/50 py-7">
      <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
        {c.stack.label}
      </p>
      <div className={s.marquee}>
        {doubled.map((t, i) => (
          <span key={i} className="text-xl font-bold tracking-tight text-slate-600">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- Pillars ----------------------------- */
function Pillars() {
  return (
    <section id="pillars" className="px-5 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
            {c.pillars.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            {c.pillars.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">{c.pillars.subtitle}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {c.pillars.items.map((p) => (
            <div
              key={p.num}
              className={`group relative overflow-hidden rounded-[20px] border border-white/10 p-8 transition duration-300 hover:-translate-y-1.5 hover:border-brand-500/40 ${s.glass} ${s.pillar}`}
            >
              <div
                className="relative mb-6 h-[120px] overflow-hidden rounded-xl border border-white/10"
                style={{ background: p.thumb }}
              >
                <span className={`${s.play} ${s.playLg}`} />
              </div>
              <p className="relative z-10 font-mono text-[13px] tracking-widest text-brand-400">
                {p.num}
              </p>
              <h3 className="relative z-10 mt-3 text-[23px] font-bold text-white">{p.title}</h3>
              <p className="relative z-10 mt-3 leading-relaxed text-slate-300">{p.body}</p>
              <ul className="relative z-10 mt-6 space-y-2.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2.5 text-[15px] text-slate-200">
                    <span className="text-accent-400">✓</span> {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Process ----------------------------- */
function Process() {
  return (
    <section id="process" className="section-gradient px-5 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
            {c.process.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            {c.process.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>

        <div className="mt-14 border-t border-white/10">
          {c.process.steps.map((step) => (
            <div
              key={step.number}
              className="grid grid-cols-[70px_1fr] items-baseline gap-x-6 gap-y-2 border-b border-white/10 py-8 transition hover:bg-white/[0.015] sm:grid-cols-[120px_1fr_1fr] sm:gap-8"
            >
              <span className="font-mono text-[34px] font-bold text-brand-500">{step.number}</span>
              <h3 className="text-2xl font-bold text-white">{step.title}</h3>
              <p className="col-start-2 leading-relaxed text-slate-300 sm:col-start-3">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Comparison --------------------------- */
function Comparison() {
  return (
    <section id="compare" className="px-5 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
            {c.comparison.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            {c.comparison.title}
          </h2>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr>
                <th />
                {c.comparison.columns.map((col, i) => (
                  <th
                    key={col}
                    className={`border-b border-white/10 px-5 py-4 text-center text-[14.5px] ${
                      i === 0 ? "font-bold text-brand-400" : "font-semibold text-slate-400"
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.comparison.rows.map((row) => (
                <tr key={row.label} className="border-b border-white/10 last:border-b-0">
                  <td className="px-5 py-4 text-left text-[14.5px] font-medium text-slate-200">
                    {row.label}
                  </td>
                  {row.values.map((v, i) => (
                    <td
                      key={i}
                      className={`px-5 py-4 text-center text-[14.5px] ${
                        i === 0 ? "bg-brand-600/10 font-semibold text-white" : "text-slate-300"
                      }`}
                    >
                      <Cell value={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// Values prefixed "yes:" / "no:" render as a check or cross, matching the
// convention used by the PR-reseller comparison table.
function Cell({ value }: { value: string }) {
  if (value.startsWith("yes:")) {
    return <span className="text-accent-400">✓</span>;
  }
  if (value.startsWith("no:")) {
    return <span className="text-slate-600">✕</span>;
  }
  return <>{value}</>;
}

/* --------------------------- Social proof -------------------------- */
function SocialProof() {
  return (
    <section className="section-gradient px-5 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
            {c.socialProof.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            {c.socialProof.title}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {c.socialProof.testimonials.map((t) => (
            <figure
              key={t.name + t.company}
              className={`flex flex-col rounded-[18px] border border-white/10 p-7 ${s.glass}`}
            >
              <div className="tracking-[3px] text-accent-400">★★★★★</div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-slate-200">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600/20 text-sm font-bold text-brand-400">
                  {t.initials}
                </span>
                <span>
                  <span className="block font-semibold text-white">{t.name}</span>
                  <span className="text-[13.5px] text-slate-400">{t.company}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- FAQ ------------------------------- */
function Faq() {
  return (
    <section id="faq" className="px-5 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-400">
            {c.faq.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            {c.faq.title}
          </h2>
        </div>

        <div
          className={`mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-white/10 ${s.glass}`}
        >
          {c.faq.items.map((item, i) => (
            <details
              key={item.q}
              open={i === 0}
              className={`border-t border-white/10 first:border-t-0 ${s.faqItem}`}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-7 py-6 text-[16.5px] font-semibold text-white">
                {item.q}
              </summary>
              <p className="max-w-2xl px-7 pb-6 leading-relaxed text-slate-300">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Final CTA ---------------------------- */
function FinalCta() {
  return (
    <section className="hero-gradient px-5 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
          {c.finalCta.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
          {c.finalCta.subtitle}
        </p>
        <a
          href="#quote"
          className="mt-9 inline-block rounded-xl bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500"
        >
          {c.finalCta.cta}
        </a>
      </div>
    </section>
  );
}

/* ------------------------------ Footer ----------------------------- */
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 px-5 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <Image
          src={c.logo.src}
          alt={c.logo.alt}
          width={140}
          height={36}
          className="h-8 w-auto"
        />
        <p className="text-sm text-slate-400">
          AI-first video studio — UGC ads, brand commercials, and product photoshoots.
        </p>
        <a
          href={`https://wa.me/${c.whatsapp.number}?text=${encodeURIComponent(c.whatsapp.prefill)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-accent-400 hover:underline"
        >
          {c.form.chatPrompt}
        </a>
      </div>
    </footer>
  );
}
