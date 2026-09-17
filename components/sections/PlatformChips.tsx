import type { FunnelConfig } from "@/content/types";

/** Named platform wall. Competitors all run one; it also catches long-tail
 *  visitors whose platform is not in our headline copy. */
export default function PlatformChips({ config }: { config: FunnelConfig }) {
  const { platforms } = config;
  return (
    <div className="mt-12">
      <p className="text-center text-[11px] font-semibold tracking-[0.3em] text-slate-500 uppercase">
        {platforms.kicker}
      </p>
      <ul className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
        {platforms.items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300"
          >
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-center text-sm text-slate-400">
        {platforms.note}{" "}
        <a href="#lead-form" className="font-semibold text-brand-400 underline-offset-2 hover:underline">
          Ask us →
        </a>
      </p>
    </div>
  );
}
