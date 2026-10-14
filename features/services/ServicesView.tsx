import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { EnquiryCalloutSection } from "@/components/shared/enquiry-callout-section";
import { PageHero } from "@/components/shared/page-hero";
import { UsheringServiceSection } from "./components/UsheringServiceSection";
import { RefreshmentsServiceSection } from "./components/RefreshmentsServiceSection";
import { TravelServiceSection } from "./components/TravelServiceSection";
import { BusinessServiceSection } from "./components/BusinessServiceSection";

export function ServicesView() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader activePage="services" />

      <main className="flex-1 pt-[72px] md:pt-[88px]">
        <PageHero
          eyebrow="OUR SERVICES"
          title="Professional Services Designed Around Your Needs"
          description="We provide a range of services across events, hospitality, travel, business development, and natural refreshments."
        />
        <UsheringServiceSection />
        <RefreshmentsServiceSection />
        <TravelServiceSection />
        <BusinessServiceSection />
        <EnquiryCalloutSection
          eyebrow="WE ARE ALWAYS AVAILABLE FOR YOU"
          title="Which Service Can We Help You With ?"
          description="Share your requirements and we’ll help you take the next step with clarity, professionalism, and care."
        />
      </main>

      <SiteFooter />
    </div>
  );
}
