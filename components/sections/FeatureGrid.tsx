import type { FunnelConfig } from "@/content/types";
import { CtaButton, Kicker, Section, SectionTitle } from "@/components/ui";

export default function FeatureGrid({ config }: { config: FunnelConfig }) {
  const { features } = config;
  return (
    <Section>
      <div className="text-center">
        <Kicker>{features.kicker}</Kicker>
        <SectionTitle lines={features.title} />
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:border-brand-500/40"
          >
            <div className="text-2xl">{card.icon}</div>
            <h3 className="mt-3 text-lg font-bold text-white">{card.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-slate-400">{card.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <CtaButton>{features.cta}</CtaButton>
      </div>
    </Section>
  );
}
