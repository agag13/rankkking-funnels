import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ormIndia as funnel } from "@/content/funnels/orm-india";
import Analytics from "@/components/Analytics";
import { SITE_URL } from "@/lib/siteUrl";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: funnel.meta.title,
  description: funnel.meta.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: funnel.meta.title,
    description: funnel.meta.description,
    url: "/",
    siteName: funnel.meta.title,
    type: "website",
    images: [{ url: funnel.meta.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: funnel.meta.title,
    description: funnel.meta.description,
    images: [funnel.meta.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full">
        <noscript>
          {funnel.tracking.gtmIds.map((id) => (
            <iframe
              key={id}
              src={`https://www.googletagmanager.com/ns.html?id=${id}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          ))}
        </noscript>
        {children}
        <Analytics
          gtmIds={funnel.tracking.gtmIds}
          metaPixelId={funnel.tracking.metaPixelId}
          ga4Id={funnel.tracking.ga4Id}
          clarityId={funnel.tracking.clarityId}
        />
      </body>
    </html>
  );
}
