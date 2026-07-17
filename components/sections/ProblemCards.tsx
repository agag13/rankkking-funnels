import type { FunnelConfig } from "@/content/types";
import { Kicker, Section, SectionTitle } from "@/components/ui";

export default function ProblemCards({ config }: { config: FunnelConfig }) {
  const { problem } = config;
  return (
    <Section className="section-gradient">
      <div className="text-center">
        <Kicker>{problem.kicker}</Kicker>
        <SectionTitle lines={problem.title} />
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {problem.cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:border-brand-500/40"
          >
            <div className="text-3xl">{card.icon}</div>
            <h3 className="mt-4 text-lg font-bold text-white">{card.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-slate-400">{card.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
