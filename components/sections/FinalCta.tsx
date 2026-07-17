import type { FunnelConfig } from "@/content/types";
import { CtaButton, Section, SectionTitle } from "@/components/ui";

export default function FinalCta({ config }: { config: FunnelConfig }) {
  const { finalCta } = config;
  return (
    <Section className="hero-gradient">
      <div className="text-center">
        <SectionTitle lines={finalCta.title} />
        <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">{finalCta.subtitle}</p>
        <div className="mt-8">
          <CtaButton className="px-10 py-5 text-lg">{finalCta.cta}</CtaButton>
        </div>
        <p className="mt-4 text-sm text-slate-400">
          <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-accent-400 align-middle" />
          {finalCta.note}
        </p>
      </div>
    </Section>
  );
}
