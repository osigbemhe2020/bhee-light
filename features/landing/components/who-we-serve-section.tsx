import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { getClientSegments } from "@/data/landing";

interface ClientSegmentProps {
  title: string;
  desc: string;
}

function ClientSegment({ title, desc }: ClientSegmentProps) {
  return (
    <div className="h-full bg-background border border-gray rounded-[12px] p-5 flex flex-col gap-4 transition-colors duration-300 hover:border-[#C9870A]/50 motion-reduce:transition-none">
      <h3 className="text-[18px] font-semibold text-dark-green">{title}</h3>
      <p className="text-sm text-gray-2 leading-[17px]">{desc}</p>
    </div>
  );
}

export async function WhoWeServeSection() {
  const clientSegments = await getClientSegments();

  return (
    <section className="w-full py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-[100px] bg-lighter-orange-2">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow="Our Clients"
            title="Who We Serve"
            description="Trusted by organisations across various industries."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {clientSegments.map((item, i) => (
            <Reveal key={item.title} y={16} delay={i * 0.12} className="h-full">
              <ClientSegment {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}