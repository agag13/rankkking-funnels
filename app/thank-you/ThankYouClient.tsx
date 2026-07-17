"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { FunnelConfig } from "@/content/types";
import { dataLayerPush } from "@/lib/track";

export default function ThankYouClient({ config }: { config: FunnelConfig }) {
  const waHref = `https://wa.me/${config.whatsapp.number}?text=${encodeURIComponent(config.whatsapp.prefill)}`;

  useEffect(() => {
    // Conversion signal for Google Ads / GA4 via GTM
    dataLayerPush("lead_thank_you", { funnel_id: config.id });
    const t = window.setTimeout(() => {
      window.location.href = waHref;
    }, 1800);
    return () => window.clearTimeout(t);
  }, [config.id, waHref]);

  return (
    <main className="hero-gradient flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <Image src={config.logo.src} alt={config.logo.alt} width={160} height={40} className="h-9 w-auto" />
      <h1 className="mt-10 text-3xl font-extrabold text-white sm:text-4xl">{config.thankYou.title}</h1>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate-300">{config.thankYou.subtitle}</p>
      <a
        href={waHref}
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-whatsapp px-8 py-4 text-base font-bold text-white shadow-lg transition hover:brightness-110"
      >
        <svg viewBox="0 0 32 32" className="h-5 w-5 fill-white" aria-hidden="true">
          <path d="M16.004 3C8.832 3 3 8.83 3 16.002c0 2.29.6 4.53 1.74 6.5L3 29l6.66-1.72a13.03 13.03 0 0 0 6.34 1.62h.01c7.17 0 13-5.83 13-13S23.175 3 16.004 3Z" />
        </svg>
        {config.thankYou.whatsappCta}
      </a>
      <Link href="/" className="mt-6 text-sm text-slate-400 underline hover:text-white">
        ← Back to the page
      </Link>
    </main>
  );
}
