import type { FunnelConfig } from "@/content/types";
import { CtaButton, Kicker, Section, SectionTitle } from "@/components/ui";

export default function HowItWorks({ config }: { config: FunnelConfig }) {
  const { howItWorks } = config;
  return (
    <Section>
      <div className="text-center">
        <Kicker>{howItWorks.kicker}</Kicker>
        <SectionTitle lines={howItWorks.title} />
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {howItWorks.steps.map((step) => (
          <div key={step.number} className="relative rounded-2xl border border-white/10 bg-white/5 p-7">
            <span className="absolute -top-5 left-7 text-5xl font-extrabold text-brand-600/30">{step.number}</span>
            <p className="text-xs font-semibold tracking-widest text-brand-400 uppercase">{step.label}</p>
            <h3 className="mt-2 text-xl font-bold text-white">{step.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-400">{step.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <CtaButton>{howItWorks.cta}</CtaButton>
      </div>
    </Section>
  );
}
