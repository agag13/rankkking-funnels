import type { FunnelConfig } from "@/content/types";
import { Kicker, Section, SectionTitle } from "@/components/ui";
import LogoStrip from "./LogoStrip";

export default function SocialProof({ config }: { config: FunnelConfig }) {
  const { socialProof: sp } = config;
  return (
    <Section className="section-gradient">
      <div className="text-center">
        <Kicker>{sp.kicker}</Kicker>
        <SectionTitle lines={sp.title} />
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
        {sp.stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-5 text-center">
            <p className="text-2xl font-extrabold text-white sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {sp.testimonials.map((t) => (
          <figure key={t.name} className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-7">
            <div className="text-sm tracking-widest text-amber-400" aria-label="5 star rating">
              ★★★★★
            </div>
            <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-300">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                {t.initials}
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">{t.name}</span>
                <span className="block text-xs text-slate-400">{t.company}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-brand-500/30 bg-brand-600/10 p-8 sm:p-10">
        <div className="grid grid-cols-3 gap-4 text-center">
          {sp.caseStudy.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-extrabold text-brand-400 sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
        <blockquote className="mt-7 text-center text-[15px] leading-relaxed text-slate-300 sm:text-base">
          “{sp.caseStudy.quote}”
        </blockquote>
        <p className="mt-4 text-center text-sm font-semibold text-white">{sp.caseStudy.author}</p>
      </div>

      <LogoStrip title={sp.logosTitle} logos={sp.partnerLogos} />
    </Section>
  );
}
