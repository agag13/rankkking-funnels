import type { FunnelConfig } from "@/content/types";
import { Section, SectionTitle } from "@/components/ui";
import LeadForm from "@/components/LeadForm";

/** Second lead capture, above the footer. Visitors who read the whole page
 *  should not have to scroll back to the hero to act. */
export default function FinalCta({ config }: { config: FunnelConfig }) {
  const { finalCta } = config;
  return (
    <Section id="final-cta" className="hero-gradient">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,420px)]">
        <div className="text-center lg:text-left">
          <SectionTitle lines={finalCta.title} />
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300 lg:mx-0">{finalCta.subtitle}</p>
          <p className="mt-6 text-sm text-slate-400">
            <span aria-hidden="true" className="mr-1.5 inline-block h-2 w-2 rounded-full bg-accent-400 align-middle" />
            {finalCta.note}
          </p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-2xl shadow-black/40 sm:p-7">
          <h3 className="text-lg font-bold text-slate-900">{finalCta.formHeading}</h3>
          <div className="mt-4">
            <LeadForm config={config} sourceForm="footer" submitLabel={finalCta.cta} compact />
          </div>
        </div>
      </div>
    </Section>
  );
}
