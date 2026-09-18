import { ormIndia as funnel } from "@/content/funnels/orm-india";
import AnnouncementBar from "@/components/sections/AnnouncementBar";
import Hero from "@/components/sections/Hero";
import ProofBar from "@/components/sections/ProofBar";
import ProblemCards from "@/components/sections/ProblemCards";
import SegmentCards from "@/components/sections/SegmentCards";
import HowItWorks from "@/components/sections/HowItWorks";
import MarginMath from "@/components/sections/MarginMath";
import NetworkStats from "@/components/sections/NetworkStats";
import HonestOutcomes from "@/components/sections/HonestOutcomes";
import SocialProof from "@/components/sections/SocialProof";
import FeatureGrid from "@/components/sections/FeatureGrid";
import ComparisonTable from "@/components/sections/ComparisonTable";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import SiteFooter from "@/components/sections/SiteFooter";
import LeadPopup from "@/components/LeadPopup";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import StickyCta from "@/components/StickyCta";
import StructuredData from "@/components/StructuredData";
import AnchorScroll from "@/components/AnchorScroll";

export default function Home() {
  return (
    <main className="pb-[76px] sm:pb-0">
      <AnnouncementBar config={funnel} />
      <Hero config={funnel} />
      <ProofBar config={funnel} />
      <ProblemCards config={funnel} />
      <SegmentCards config={funnel} />
      <HowItWorks config={funnel} />
      <MarginMath config={funnel} />
      <NetworkStats config={funnel} />
      <HonestOutcomes config={funnel} />
      <SocialProof config={funnel} />
      <FeatureGrid config={funnel} />
      <ComparisonTable config={funnel} />
      <Faq config={funnel} />
      <FinalCta config={funnel} />
      <SiteFooter config={funnel} />
      <LeadPopup config={funnel} />
      <WhatsAppFloat config={funnel} />
      <StickyCta config={funnel} />
      <StructuredData config={funnel} />
      <AnchorScroll />
    </main>
  );
}
