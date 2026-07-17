import type { Metadata } from "next";
import Image from "next/image";
import { prReseller as funnel } from "@/content/funnels/pr-reseller";
import { listingSites, listingSiteCount } from "@/content/leadmagnets/listing-sites";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const lm = funnel.leadMagnet;

export const metadata: Metadata = {
  title: lm.page.title,
  description: lm.page.metaDescription,
  robots: { index: false },
};

const CATEGORY_ORDER = [
  "Launch Platforms",
  "SaaS Review Sites",
  "Startup Directories",
  "Tech Media & Blogs",
  "Communities & Social",
  "India-Specific",
  "Business Listings",
  "Design & Dev",
] as const;

const CATEGORY_ICONS: Record<string, string> = {
  "Launch Platforms": "🚀",
  "SaaS Review Sites": "⭐",
  "Startup Directories": "📇",
  "Tech Media & Blogs": "📰",
  "Communities & Social": "👥",
  "India-Specific": "🇮🇳",
  "Business Listings": "🏢",
  "Design & Dev": "🎨",
};

export default function FreeListingSitesPage() {
  const grouped = CATEGORY_ORDER.map((cat) => ({
    cat,
    sites: listingSites.filter((s) => s.category === cat),
  })).filter((g) => g.sites.length > 0);

  return (
    <main>
      <div className="hero-gradient px-5 pb-14 pt-8">
        <div className="mx-auto max-w-5xl">
          <a href="/">
            <Image src={funnel.logo.src} alt={funnel.logo.alt} width={150} height={38} className="h-8 w-auto" />
          </a>
          <span className="mt-8 inline-block rounded-full border border-accent-500/40 bg-accent-500/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] text-accent-400">
            ✅ YOU&apos;RE IN — THE FREE LISTINGS VAULT
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {listingSiteCount}+ Websites to List Your Brand,{" "}
            <span className="text-brand-400">Free of Cost</span>
          </h1>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-slate-300">{lm.page.intro}</p>
          <p className="mt-4 max-w-3xl rounded-xl border border-brand-500/30 bg-brand-600/10 px-4 py-3 text-sm leading-relaxed text-slate-200">
            💡 {lm.page.tip}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-5 py-12">
        {grouped.map(({ cat, sites }) => (
          <section key={cat} className="mb-10">
            <h2 className="flex items-center gap-2 text-xl font-bold text-white">
              <span>{CATEGORY_ICONS[cat]}</span> {cat}
              <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-semibold text-slate-300">
                {sites.length}
              </span>
            </h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {sites.map((site) => (
                <a
                  key={site.url + site.name}
                  href={site.url}
                  target="_blank"
                  rel="noopener nofollow"
                  className="group flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-[14px] text-slate-200 transition hover:border-brand-500/50 hover:bg-brand-600/10"
                >
                  <span className="truncate font-medium">{site.name}</span>
                  <span className="shrink-0 text-slate-500 transition group-hover:text-brand-400">↗</span>
                </a>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-14 rounded-2xl border border-brand-500/40 bg-brand-600/10 p-8 text-center sm:p-10">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{lm.page.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-300">{lm.page.ctaBody}</p>
          <a
            href="/"
            className="mt-6 inline-block rounded-xl bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500"
          >
            {lm.page.ctaButton}
          </a>
        </section>

        <p className="mt-10 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Rankkking · Listing policies belong to each site; availability can change.
        </p>
      </div>
      <WhatsAppFloat config={funnel} />
    </main>
  );
}
