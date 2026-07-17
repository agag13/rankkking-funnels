import type { Metadata } from "next";
import ThankYouClient from "./ThankYouClient";
import { prReseller as funnel } from "@/content/funnels/pr-reseller";

export const metadata: Metadata = {
  title: "Thank You | Rankkking",
  robots: { index: false },
};

export default function ThankYouPage() {
  return <ThankYouClient config={funnel} />;
}
