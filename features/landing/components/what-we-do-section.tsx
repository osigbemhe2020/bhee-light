import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Bell, Plane, CupSoda, Handshake, type LucideIcon } from "lucide-react";
import { getLandingServices, type LandingService } from "@/data/landing";

const SERVICE_ICONS: Record<LandingService["icon"], LucideIcon> = {
  bell: Bell,
  plane: Plane,
  cupSoda: CupSoda,
  handshake: Handshake,
};

function ServiceCard({
  imageSrc,
  imageAlt,
  icon,
  title,
  description,
  href,
}: LandingService) {
  const Icon = SERVICE_ICONS[icon];

  return (
    <div className="group h-full bg-background rounded-[22px] shadow-lg overflow-hidden transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="relative w-full h-[210px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1440px) 610px, (min-width: 768px) calc((100vw - 220px) / 2), 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <div className="p-5 sm:p-6 flex flex-col gap-4">
        <div className="w-[42px] h-[42px] bg-light-orange rounded-full flex items-center justify-center">
          <Icon size={20} className="text-[#C9870A]" />
        </div>
        <h3 className="text-xl sm:text-[24px] font-semibold text-dark-green">
          {title}
        </h3>
        <p className="text-sm text-foreground leading-[17px]">{description}</p>
        <Link href={href} className="text-[16px] font-semibold text-green">
          Learn More{" "}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}

export async function WhatWeDoSection() {
  const services = await getLandingServices();

  return (
    <section className="w-full py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-[100px] bg-lighter-orange-2">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Services Built Around People, Experiences and Quality."
            description="From the first welcome to the final detail, our services are shaped around people, thoughtful preparation, and dependable delivery."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 2) * 0.12}
              className="h-full"
            >
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}