import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { prReseller as funnel } from "@/content/funnels/pr-reseller";
import Analytics from "@/components/Analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(funnel.meta.url),
  title: funnel.meta.title,
  description: funnel.meta.description,
  openGraph: {
    title: funnel.meta.title,
    description: funnel.meta.description,
    url: funnel.meta.url,
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
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${funnel.tracking.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Analytics gtmId={funnel.tracking.gtmId} metaPixelId={funnel.tracking.metaPixelId} />
      </body>
    </html>
  );
}
