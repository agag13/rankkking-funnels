import type { Metadata } from "next";
import ThankYouClient from "@/app/thank-you/ThankYouClient";
import { prResellerAe as funnel } from "@/content/funnels/pr-reseller-ae";

export const metadata: Metadata = {
  title: "Thank You | 01Wire",
  robots: { index: false },
};

export default function DubaiThankYouPage() {
  return <ThankYouClient config={funnel} />;
}
