import Image from "next/image";
import type { FunnelConfig } from "@/content/types";

export default function SiteFooter({ config }: { config: FunnelConfig }) {
  const { footer, logo } = config;
  return (
    <footer className="border-t border-white/10 bg-navy-950 px-5 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
        <div>
          <Image src={logo.src} alt={logo.alt} width={140} height={36} className="h-8 w-auto" />
          <p className="mt-4 text-sm leading-relaxed text-slate-400">{footer.about}</p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">CONTACT</p>
          <a href={`mailto:${footer.email}`} className="mt-3 block text-sm text-slate-300 hover:text-white">
            {footer.email}
          </a>
          <p className="mt-4 text-xs font-semibold tracking-[0.25em] text-slate-500">OFFICE</p>
          <p className="mt-3 text-sm text-slate-400">{footer.office}</p>
          <p className="mt-1 text-sm text-slate-400">{footer.gstin}</p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-slate-500">LEGAL</p>
          <ul className="mt-3 space-y-2">
            {footer.legal.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm text-slate-300 hover:text-white" target="_blank" rel="noopener">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-center">
        <p className="text-xs text-slate-500">{footer.copyright}</p>
        <p className="mt-2 text-xs text-slate-600">{footer.disclaimer}</p>
      </div>
    </footer>
  );
}
