import type { FunnelConfig } from "@/content/types";
import { Kicker, Section, SectionTitle } from "@/components/ui";

function Cell({ value }: { value: string }) {
  if (value.startsWith("yes:")) {
    return <span className="font-semibold text-accent-400">✓ {value.slice(4)}</span>;
  }
  if (value.startsWith("no:")) {
    return <span className="font-semibold text-red-400">✗ {value.slice(3)}</span>;
  }
  return <>{value}</>;
}

export default function ComparisonTable({ config }: { config: FunnelConfig }) {
  const { comparison } = config;
  return (
    <Section className="section-gradient">
      <div className="text-center">
        <Kicker>{comparison.kicker}</Kicker>
        <SectionTitle lines={comparison.title} />
      </div>
      <div className="mt-12 overflow-x-auto">
        <table className="mx-auto w-full max-w-4xl border-separate border-spacing-0 text-left text-[15px]">
          <thead>
            <tr>
              <th className="rounded-tl-xl border border-white/10 bg-white/5 px-5 py-4" />
              <th className="border border-l-0 border-brand-500/50 bg-brand-600/20 px-5 py-4 font-bold text-brand-300">
                {comparison.columns[0]}
              </th>
              <th className="border border-l-0 border-white/10 bg-white/5 px-5 py-4 font-semibold text-slate-300">
                {comparison.columns[1]}
              </th>
              <th className="rounded-tr-xl border border-l-0 border-white/10 bg-white/5 px-5 py-4 font-semibold text-slate-300">
                {comparison.columns[2]}
              </th>
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row, i) => {
              const last = i === comparison.rows.length - 1;
              return (
                <tr key={row.label}>
                  <td className={`border border-t-0 border-white/10 px-5 py-4 font-medium text-slate-300 ${last ? "rounded-bl-xl" : ""}`}>
                    {row.label}
                  </td>
                  <td className="border border-l-0 border-t-0 border-brand-500/50 bg-brand-600/10 px-5 py-4 font-semibold text-white">
                    <Cell value={row.values[0]} />
                  </td>
                  <td className="border border-l-0 border-t-0 border-white/10 px-5 py-4 text-slate-400">
                    <Cell value={row.values[1]} />
                  </td>
                  <td className={`border border-l-0 border-t-0 border-white/10 px-5 py-4 text-slate-400 ${last ? "rounded-br-xl" : ""}`}>
                    <Cell value={row.values[2]} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
