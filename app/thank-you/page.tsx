import type { Metadata } from "next";
import ThankYouClient from "./ThankYouClient";
import { masdar as funnel } from "@/content/funnels/masdar";

export const metadata: Metadata = {
  title: "Thank You | Masdar City Free Zone",
  robots: { index: false },
};

export default function ThankYouPage() {
  return <ThankYouClient config={funnel} />;
}
