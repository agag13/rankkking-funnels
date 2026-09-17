import type { FunnelConfig } from "@/content/types";
import { Section } from "@/components/ui";

/** The honesty strip. It is also the page's main compliance signal:
 *  it states plainly what cannot be removed, so nothing here reads as a
 *  removal promise. Do not soften this copy to sell harder. */
export default function HonestOutcomes({ config }: { config: FunnelConfig }) {
  const { honesty } = config;
  return (
    <Section className="section-gradient">
      <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{honesty.title}</h2>
        <ul className="mt-7 space-y-4">
          {honesty.points.map((point) => (
            <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-slate-300">
              <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-accent-400">
                ✓
              </span>
              {point}
            </li>
          ))}
        </ul>
        <p className="mt-7 border-t border-white/10 pt-5 text-[15px] leading-relaxed text-slate-400">
          {honesty.note}
        </p>
      </div>
    </Section>
  );
}
