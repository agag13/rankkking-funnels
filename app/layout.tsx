import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { masdar as funnel } from "@/content/funnels/masdar";
import MasdarAnalytics from "@/components/MasdarAnalytics";

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
    siteName: "Masdar City Free Zone — Business Setup",
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
        {children}
        <MasdarAnalytics
          gtmId={funnel.tracking.gtmId}
          ga4Id="TODO-GA4-ID"
          metaPixelId={funnel.tracking.metaPixelId}
        />
      </body>
    </html>
  );
}
