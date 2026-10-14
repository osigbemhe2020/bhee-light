import { SectionHeading } from "@/components/shared/section-heading";

interface ClientSegmentProps {
  title: string;
  desc: string;
}

function ClientSegment({ title, desc }: ClientSegmentProps) {
  return (
    <div className="bg-background border border-gray rounded-[12px] p-5 flex flex-col gap-4">
      <h3 className="text-[18px] font-semibold text-dark-green">{title}</h3>
      <p className="text-sm text-gray-2 leading-[17px]">{desc}</p>
    </div>
  );
}

const CLIENT_SEGMENTS = [
  { title: "Corporate Organisations", desc: "Professional event and hospitality support for organised corporate gatherings" },
  { title: "Event Planners", desc: "Dependable staffing and refreshment support aligned to each event plan." },
  { title: "Hotels & Hospitality Businesses", desc: "Guest-facing support grounded in presentation, courtesy, and service." },
  { title: "NGOs & Development Organisations", desc: "Welcoming support for meetings, conferences, and stakeholder events." },
  { title: "Embassies & International Organisations", desc: "Professional hospitality support for formal and international settings." },
  { title: "Government & Institutional Organisations", desc: "Structured support for official functions and institutional gatherings." },
  { title: "Churches & Faith Based Organisations", desc: "Courteous event support for conferences, services, and special occasions." },
  { title: "Schools & Educational Institutions", desc: "Organised guest support for ceremonies, programmes, and gatherings." },
  { title: "Wedding Planners", desc: "Elegant ushers and guest guidance for warm, well-run celebrations." },
  { title: "Conference Organisers", desc: "Reception, guidance, and on-the-day support for attendees" },
  { title: "Private Individuals", desc: "Personalised help for events, journeys, and refreshment requirements" },
  { title: "Luxury & Premium Event Clients", desc: "Polished presentation and attentive service for elevated occasions." },
];

export function WhoWeServeSection() {
  return (
    <section className="w-full py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-[100px] bg-lighter-orange-2">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Our Clients"
          title="Who We Serve"
          description="Trusted by organisations across various industries."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {CLIENT_SEGMENTS.map((item) => (
            <ClientSegment key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
