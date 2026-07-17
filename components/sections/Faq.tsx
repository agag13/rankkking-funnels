import type { FunnelConfig } from "@/content/types";
import { Kicker, Section, SectionTitle } from "@/components/ui";

export default function Faq({ config }: { config: FunnelConfig }) {
  const { faq } = config;
  return (
    <Section>
      <div className="text-center">
        <Kicker>{faq.kicker}</Kicker>
        <SectionTitle lines={faq.title} />
      </div>
      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {faq.items.map((item) => (
          <details
            key={item.q}
            className="group rounded-xl border border-white/10 bg-white/5 transition open:border-brand-500/40"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[15px] font-semibold text-white [&::-webkit-details-marker]:hidden">
              {item.q}
              <span className="text-xl font-light text-brand-400 transition group-open:rotate-45">+</span>
            </summary>
            <p className="px-6 pb-5 text-[15px] leading-relaxed text-slate-400">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
