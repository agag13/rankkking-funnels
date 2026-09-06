import type { FunnelConfig } from "@/content/types";
import { Section } from "@/components/ui";

export default function Guarantee({ config }: { config: FunnelConfig }) {
  const g = config.guarantee;
  if (!g) return null;
  return (
    <Section>
      <div className="mx-auto max-w-3xl rounded-3xl border border-accent-500/40 bg-accent-500/10 p-10 text-center sm:p-14">
        <div className="text-4xl">{g.icon}</div>
        <p className="mt-5 text-xs font-semibold tracking-[0.25em] text-accent-400 uppercase">{g.kicker}</p>
        <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-4xl">{g.title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-300 sm:text-base">{g.body}</p>
        <p className="mt-6 text-xs text-slate-500">{g.note}</p>
      </div>
    </Section>
  );
}
