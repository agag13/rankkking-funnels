import type { Metadata } from "next";
import { Baloo_2, Manrope } from "next/font/google";
import "./theme.css";
import { prResellerAe as funnel } from "@/content/funnels/pr-reseller-ae";

// 01Wire brand fonts, scoped to the /ae route only (the India page keeps Inter).
const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Origin, not the page URL: metadataBase with a path would resolve
  // "/logos/ae/og-image.png" to lp.01wire.com/dubai/logos/... and 404.
  metadataBase: new URL(new URL(funnel.meta.url).origin),
  title: funnel.meta.title,
  description: funnel.meta.description,
  openGraph: {
    title: funnel.meta.title,
    description: funnel.meta.description,
    url: funnel.meta.url,
    siteName: "01Wire",
    type: "website",
    images: [{ url: funnel.meta.ogImage, width: 1200, height: 630, alt: funnel.meta.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: funnel.meta.title,
    description: funnel.meta.description,
    images: [funnel.meta.ogImage],
  },
};

export default function DubaiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`theme-ae ${baloo.variable} ${manrope.variable}`}>{children}</div>;
}
