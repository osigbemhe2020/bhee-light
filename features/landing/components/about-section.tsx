import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/shared/button";

export function AboutSection() {
  return (
    <section className="w-full py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-[100px] bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10">
        <div>
          <SectionHeading eyebrow="About the Business" title="Building Experience Through Service" />
        </div>
        <div className="flex flex-col items-start gap-8 lg:gap-14">
          <p className="text-[16px] text-foreground leading-[19px]">
            Bhee Light 07 Unique Global Ventures is a Nigerian business providing professional services across event
            staffing, hospitality, travel and tourism, business development, and natural refreshments. Founded around the
            experience and vision of Blessing Chikaodi, the business brings together a passion for people, service,
            entrepreneurship, and continuous growth.
            <br />
            <br />
            From providing professional ushers for events to helping clients plan journeys and providing naturally made
            refreshments, our work is guided by one commitment: To deliver quality, create positive experiences, and
            provide genuine value.
          </p>
          <Button>Read Our Story</Button>
        </div>
      </div>
    </section>
  );
}
