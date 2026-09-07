import type { FunnelConfig } from "@/content/types";
import { Kicker, Section, SectionTitle } from "@/components/ui";

/** Agency verticals that can upsell white-label PR (used by /ae). */
export default function AgencyTypes({ config }: { config: FunnelConfig }) {
  const at = config.agencyTypes;
  if (!at) return null;
  return (
    <Section>
      <div className="text-center">
        <Kicker>{at.kicker}</Kicker>
        <SectionTitle lines={at.title} />
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {at.items.map((item) => (
          <div
            key={item.name}
            className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-brand-500/50 hover:bg-white/10"
          >
            <span className="text-2xl" aria-hidden>
              {item.icon}
            </span>
            <p className="mt-3 text-sm font-bold text-white">{item.name}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{item.line}</p>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-slate-400">{at.note}</p>
    </Section>
  );
}
