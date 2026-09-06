import type { FunnelConfig } from "@/content/types";
import { CtaButton, Kicker, Section, SectionTitle } from "@/components/ui";

export default function PartnerTiers({ config }: { config: FunnelConfig }) {
  const pt = config.partnerTiers;
  if (!pt) return null;
  return (
    <Section className="section-gradient">
      <div className="text-center">
        <Kicker>{pt.kicker}</Kicker>
        <SectionTitle lines={pt.title} />
        {pt.subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-400">{pt.subtitle}</p>
        )}
      </div>
      <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
        {pt.tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative flex flex-col rounded-2xl border p-8 ${
              tier.recommended
                ? "border-brand-600/60 bg-brand-600/10 shadow-lg shadow-brand-600/10"
                : "border-white/10 bg-white/5"
            }`}
          >
            {tier.badge && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-600 px-4 py-1 text-[11px] font-bold tracking-[0.15em] text-white">
                {tier.badge}
              </span>
            )}
            <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
            <p className="mt-1 text-sm text-slate-400">{tier.tagline}</p>
            <ul className="mt-6 flex-1 space-y-3 border-t border-white/10 pt-6">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-[15px] leading-snug text-slate-300">
                  <span className="mt-0.5 text-accent-400">✓</span> {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              {tier.recommended ? (
                <CtaButton className="w-full text-center">{pt.cta}</CtaButton>
              ) : (
                <a
                  href="#lead-form"
                  className="inline-block w-full rounded-xl border border-brand-600/60 px-8 py-4 text-center text-base font-semibold text-white transition hover:border-brand-600 hover:bg-brand-600/10"
                >
                  {pt.cta}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-[15px] leading-relaxed text-slate-400">{pt.note}</p>
    </Section>
  );
}
