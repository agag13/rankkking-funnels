import type { FunnelConfig } from "@/content/types";
import { Kicker, Section, SectionTitle } from "@/components/ui";
import PhoneLink from "@/components/PhoneLink";
import WhatsAppLink from "@/components/WhatsAppLink";

export default function SegmentCards({ config }: { config: FunnelConfig }) {
  const { segments } = config;
  return (
    <Section id="segments">
      <div className="text-center">
        <Kicker>{segments.kicker}</Kicker>
        <SectionTitle lines={segments.title} />
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {segments.cards.map((card) => {
          const crisis = card.action === "crisis";
          return (
            <div
              key={card.title}
              className={`flex flex-col rounded-2xl border p-7 transition ${
                crisis
                  ? "border-accent-500/50 bg-accent-500/10"
                  : "border-white/10 bg-white/5 hover:border-brand-500/40"
              }`}
            >
              <div className="text-3xl">{card.icon}</div>
              <h3 className="mt-4 text-lg font-bold text-white">{card.title}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-slate-400">{card.body}</p>
              {crisis ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  <PhoneLink
                    config={config}
                    source="crisis_card"
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-navy-900 transition hover:bg-slate-100"
                  >
                    Call {config.phone.display}
                  </PhoneLink>
                  <WhatsAppLink
                    config={config}
                    source="crisis_card"
                    className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-5 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
                  >
                    WhatsApp now
                  </WhatsAppLink>
                </div>
              ) : (
                <a
                  href="#lead-form"
                  className="mt-5 inline-block text-sm font-semibold text-brand-400 transition hover:text-brand-300"
                >
                  {card.ctaLabel ?? "Check my case in the free audit"} →
                </a>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
