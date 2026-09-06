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
  metadataBase: new URL(funnel.meta.url),
  title: funnel.meta.title,
  description: funnel.meta.description,
  openGraph: {
    title: funnel.meta.title,
    description: funnel.meta.description,
    url: funnel.meta.url,
    siteName: "01Wire",
    type: "website",
    // [PLACEHOLDER-OG-IMAGE] add a 01Wire-branded image here once designed
  },
  twitter: {
    card: "summary",
    title: funnel.meta.title,
    description: funnel.meta.description,
  },
};

export default function AeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`theme-ae ${baloo.variable} ${manrope.variable}`}>{children}</div>;
}
