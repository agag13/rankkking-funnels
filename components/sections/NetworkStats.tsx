import type { FunnelConfig } from "@/content/types";
import { CtaButton, Kicker, Section, SectionTitle } from "@/components/ui";
import LogoStrip from "./LogoStrip";

export default function NetworkStats({ config }: { config: FunnelConfig }) {
  const { network, pressLogos } = config;
  return (
    <Section>
      <div className="text-center">
        <Kicker>{network.kicker}</Kicker>
        <SectionTitle lines={network.title} />
      </div>
      <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
        {network.stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center">
            <p className="text-4xl font-extrabold text-brand-400">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
      <LogoStrip title={network.logosTitle} logos={pressLogos.logos} />
      <div className="text-center">
        <CtaButton>{network.cta}</CtaButton>
      </div>
    </Section>
  );
}
