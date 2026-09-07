import type { FunnelConfig } from "@/content/types";
import { Kicker, Section, SectionTitle } from "@/components/ui";

/**
 * Social proof for /ae: stats, placement-screenshot placeholder slots styled as
 * browser-frame mockups, and partner testimonial slots.
 */
export default function SocialProofAe({ config }: { config: FunnelConfig }) {
  const sp = config.socialProofAe;
  if (!sp) return null;
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

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {sp.screenshots.map((shot) => (
          <figure key={shot.outlet} className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-600/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent-400/70" />
              <span className="ml-2 min-w-0 flex-1 truncate rounded-md bg-navy-950/60 px-3 py-1 text-[11px] text-slate-500">
                {shot.url}
              </span>
            </div>
            {shot.image ? (
              <figcaption className="group relative h-52 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot.image}
                  alt={`${shot.outlet} — live coverage`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top opacity-40 blur-[1px] transition-all duration-500 group-hover:opacity-100 group-hover:blur-0"
                />
                <span className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-navy-950/70 via-navy-950/40 to-navy-950/80 px-6 text-center transition-opacity duration-500 group-hover:opacity-0">
                  {shot.logo ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={shot.logo} alt="" style={{ height: 30 }} className="w-auto brightness-0 invert" />
                  ) : null}
                  <span className="font-serif text-xl font-bold text-white/90">{shot.outlet}</span>
                  <span className="text-[11px] tracking-[0.18em] text-slate-400">TAP TO VIEW COVERAGE</span>
                </span>
              </figcaption>
            ) : (
              <figcaption className="flex h-44 flex-col items-center justify-center gap-2 px-6 text-center">
                <span className="font-serif text-xl font-bold text-white/80">{shot.outlet}</span>
                <span className="text-xs leading-relaxed text-slate-500">{shot.caption}</span>
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
        {sp.testimonials.map((t) => (
          <figure key={t.quote} className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-7">
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
    </Section>
  );
}
