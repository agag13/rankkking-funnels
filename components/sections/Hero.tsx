import Image from "next/image";
import type { FunnelConfig } from "@/content/types";
import LeadForm from "@/components/LeadForm";

export default function Hero({ config }: { config: FunnelConfig }) {
  const { hero, form, logo, whatsapp } = config;
  return (
    <div className="hero-gradient">
      <header className="mx-auto flex max-w-6xl items-center px-5 pt-6">
        <Image src={logo.src} alt={logo.alt} width={160} height={40} className="h-9 w-auto" priority />
      </header>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 pb-20 pt-10 sm:pt-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-600/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-brand-400">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            {hero.badge}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-[56px]">
            {hero.titlePre}
            <span className="text-brand-400">{hero.titleHighlight}</span>
            {hero.titlePost}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">{hero.subtitle}</p>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {hero.chips.map((chip) => (
              <li key={chip} className="flex items-center gap-2 text-[15px] font-medium text-slate-200">
                <span className="text-accent-400">✓</span> {chip}
              </li>
            ))}
          </ul>
        </div>

        <div id="lead-form" className="animate-fade-up scroll-mt-24 rounded-2xl bg-white p-6 shadow-2xl shadow-black/40 sm:p-8">
          <h2 className="text-xl font-bold text-slate-900">{form.heading}</h2>
          <p className="mt-1.5 text-sm text-slate-600">{form.subheading}</p>
          <div className="mt-5">
            <LeadForm config={config} sourceForm="hero" />
          </div>
          <p className="mt-4 text-center text-sm text-slate-600">
            {form.chatPrompt}{" "}
            <a
              href={`https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.prefill)}`}
              target="_blank"
              rel="noopener"
              className="font-semibold text-[#128C7E] underline"
            >
              WhatsApp us →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
