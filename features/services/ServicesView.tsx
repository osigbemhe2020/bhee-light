import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { EnquiryCalloutSection } from "@/components/shared/enquiry-callout-section";
import { PageHero } from "@/components/shared/page-hero";
import { UsheringServiceSection } from "./components/UsheringServiceSection";
import { RefreshmentsServiceSection } from "./components/RefreshmentsServiceSection";
import { TravelServiceSection } from "./components/TravelServiceSection";
import { BusinessServiceSection } from "./components/BusinessServiceSection";
import { getNavigationItems } from "@/data/navigation";
import { servicesContent } from "@/data/services";

export async function ServicesView() {
  const navItems = await getNavigationItems();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader activePage="services" navItems={navItems} />

      <main className="flex-1 pt-[72px] md:pt-[88px]">
        <PageHero
          {...servicesContent.hero}
        />
        <UsheringServiceSection />
        <RefreshmentsServiceSection />
        <TravelServiceSection />
        <BusinessServiceSection />
        <EnquiryCalloutSection
          eyebrow={servicesContent.callout.eyebrow}
          title={servicesContent.callout.title}
          description={servicesContent.callout.description}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
