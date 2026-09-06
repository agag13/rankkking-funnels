import type { Metadata } from "next";
import ThankYouClient from "./ThankYouClient";
import { ormIndia as funnel } from "@/content/funnels/orm-india";

export const metadata: Metadata = {
  title: "Thank You | FameNinja",
  robots: { index: false },
};

export default function ThankYouPage() {
  return <ThankYouClient config={funnel} />;
}
