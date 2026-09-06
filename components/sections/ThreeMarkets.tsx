import type { FunnelConfig } from "@/content/types";
import { Kicker, Section, SectionTitle } from "@/components/ui";

export default function ThreeMarkets({ config }: { config: FunnelConfig }) {
  const tm = config.threeMarkets;
  if (!tm) return null;
  return (
    <Section>
      <div className="text-center">
        <Kicker>{tm.kicker}</Kicker>
        <SectionTitle lines={tm.title} />
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {tm.markets.map((market) => (
          <div
            key={market.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:border-brand-400/40"
          >
            <div className="text-3xl">{market.icon}</div>
            <h3 className="mt-4 text-xl font-bold text-white">{market.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-slate-400">{market.subtitle}</p>
            <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
              {market.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-[14px] leading-snug text-slate-300">
                  <span className="mt-0.5 text-accent-400">✓</span> {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-[15px] leading-relaxed text-slate-400">{tm.note}</p>
    </Section>
  );
}
