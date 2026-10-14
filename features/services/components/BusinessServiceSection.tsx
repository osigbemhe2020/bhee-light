import Image from "next/image";
import { Handshake } from "lucide-react";
import { Button } from "@/components/shared/button";
import { SectionHeading } from "@/components/shared/section-heading";

const CAPABILITIES = [
  "Business development",
  "Marketing",
  "Client relations",
  "Sales",
  "Networking",
  "Partnerships",
];

export function BusinessServiceSection() {
  return (
    <section className="w-full bg-[#FFFCF6]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-[clamp(1.5rem,7vw,100px)] py-10 lg:flex-row lg:gap-[72px]">
        {/* Service copy */}
        <div className="flex w-full min-w-0 flex-1 flex-col items-start gap-12">
          <div className="flex w-full flex-col gap-6">
            <SectionHeading
              eyebrow="Business Development & Marketing"
              title="Building Relationships. Creating Opportunities."
            />

            <p className="text-[18px] leading-[22px] text-[#625F56]">
              We bring experience across business development, marketing, client relations, sales, networking, and
              partnerships. Our focus is on building valuable relationships, identifying opportunities, and creating
              meaningful connections that can support business growth and collaboration.
            </p>

            {/* Capabilities */}
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {CAPABILITIES.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-full bg-[#F9E7C7] px-[14px] py-3"
                >
                  <span aria-hidden className="size-[7px] shrink-0 rounded-full bg-[#C9870A]" />
                  <span className="font-[family-name:var(--font-inter)] text-[12px] font-medium leading-[15px] text-[#111110]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Button>Work With Us</Button>
        </div>

        {/* Service imagery: everything inside is a percentage of the 560 box */}
        <div className="relative aspect-square w-full max-w-[560px] shrink-0 lg:w-[560px]">
          {/* Main image: 510 / 560 */}
          <div className="absolute left-0 top-0 h-[91%] w-[91%] overflow-hidden rounded-[22px]">
            <Image
              src="/images/services/service-image-4.jpg"
              alt="Business professionals in a development meeting at a modern office"
              fill
              sizes="(min-width: 1024px) 510px, 90vw"
              className="object-cover"
            />
          </div>

          {/* Connection card: cream border cuts into the main image */}
          <div className="absolute bottom-0 right-0 z-10 flex min-h-[20%] w-[46.4%] min-w-[200px] items-center gap-3 rounded-xl border-8 border-[#FFFCF6] bg-[#E8CF98] p-5">
            <Handshake aria-hidden size={28} strokeWidth={1.6} className="shrink-0 text-[#123D32]" />
            <p className="text-[20px] font-semibold leading-[24px] text-[#092A22]">
              Meaningful professional connections
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}