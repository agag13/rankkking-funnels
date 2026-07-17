import type { FunnelConfig } from "@/content/types";
import { Kicker, Section, SectionTitle } from "@/components/ui";

export default function MarginMath({ config }: { config: FunnelConfig }) {
  const { math } = config;
  return (
    <Section className="section-gradient">
      <div className="text-center">
        <Kicker>{math.kicker}</Kicker>
        <SectionTitle lines={math.title} />
      </div>
      <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
        {math.rows.map((row) => (
          <div
            key={row.label}
            className={`rounded-2xl border p-7 text-center ${
              row.highlight
                ? "border-accent-500/50 bg-accent-500/10"
                : "border-white/10 bg-white/5"
            }`}
          >
            <p className="text-sm text-slate-400">{row.label}</p>
            <p
              className={`mt-2 text-4xl font-extrabold ${
                row.highlight ? "text-accent-400" : "text-white"
              }`}
            >
              {row.value}
            </p>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-[15px] leading-relaxed text-slate-400">{math.note}</p>
    </Section>
  );
}
