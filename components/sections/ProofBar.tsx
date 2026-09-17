import type { FunnelConfig } from "@/content/types";

/** Numeric strip directly under the hero. Cleared claims only — see the
 *  copy rules at the top of the funnel config before adding a number. */
export default function ProofBar({ config }: { config: FunnelConfig }) {
  if (config.proofBar.length === 0) return null;
  return (
    <div className="border-y border-white/5 bg-white/[0.03] px-5 py-8">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-4">
        {config.proofBar.map((item) => (
          <div key={item.label} className="text-center">
            <p className="text-2xl font-extrabold text-white sm:text-3xl">{item.value}</p>
            <p className="mt-1 text-xs leading-snug text-slate-400">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
