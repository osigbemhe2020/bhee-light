import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/shared/page-hero";
import { EnquiryCalloutSection } from "@/components/shared/enquiry-callout-section";
import { ContactInfoSection } from "./components/ContactInfoSection";
import { EnquiryFormSection } from "./components/EnquiryFormSection";
import { LocationMapSection } from "./components/LocationMapSection";
import { getNavigationItems } from "@/data/navigation";
import { getEnquiryServiceOptions } from "@/data/services";

export async function ContactView() {
  const [navItems, serviceOptions] = await Promise.all([
    getNavigationItems(),
    getEnquiryServiceOptions(),
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader activePage="contact" navItems={navItems} />

      <main className="flex-1 pt-[72px] md:pt-[88px]">
        <PageHero
          eyebrow="CONTACT US"
          title="Let&apos;s Talk About What You Need"
          description="Reach out to us for event staffing, refreshments, travel services, or business development. We&apos;re here to help."
        />
        <ContactInfoSection />
        <EnquiryFormSection serviceOptions={serviceOptions} />
        <EnquiryCalloutSection
          eyebrow="NEED A QUICK RESPONSE?"
          title="Chat With Us On WhatsApp"
          description="Chat with us directly on WhatsApp about your event, travel plans, refreshment requirements, or other enquiries."
          buttonText="Chat Us On WhatsApp"
          backgroundColor="#DCE8DF"
          phoneNumber="09162779962"
        />
        <LocationMapSection />
      </main>

      <SiteFooter />
    </div>
  );
}
