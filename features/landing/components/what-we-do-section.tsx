import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { Bell, Plane, CupSoda, Handshake } from "lucide-react";

interface ServiceCardProps {
  imageSrc: string;
  imageAlt: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ imageSrc, imageAlt, icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex-1 bg-background rounded-[22px] shadow-lg overflow-hidden">
      <div className="relative w-full h-[210px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1440px) 610px, (min-width: 768px) calc((100vw - 220px) / 2), 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-5 sm:p-6 flex flex-col gap-4">
        <div className="w-[42px] h-[42px] bg-light-orange rounded-full flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl sm:text-[24px] font-semibold text-dark-green">{title}</h3>
        <p className="text-sm text-foreground leading-[17px]">{description}</p>
        <a href="#" className="text-[16px] font-semibold text-green">
          Learn More →
        </a>
      </div>
    </div>
  );
}

const SERVICES = [
  {
    imageSrc: "/images/landing/card-image-1.jpg",
    imageAlt: "Event Staffing",
    icon: <Bell size={20} className="text-[#C9870A]" />,
    title: "Event Staffing & Hospitality",
    description:
      "Professional ushers, hosts, and hospitality staff for corporate events, weddings, and special occasions.",
  },
  {
    imageSrc: "/images/landing/card-image-2.jpg",
    imageAlt: "Travel & Tours",
    icon: <Plane size={20} className="text-[#C9870A]" />,
    title: "Travel & Tour Services",
    description: "Curated travel experiences and tour packages for individuals and groups exploring Nigeria.",
  },
  {
    imageSrc: "/images/landing/card-image-3.jpg",
    imageAlt: "Natural Refreshments",
    icon: <CupSoda size={20} className="text-[#C9870A]" />,
    title: "Natural Refreshments",
    description: "Premium naturally made Nigerian fruit and hibiscus beverages for events and catering.",
  },
  {
    imageSrc: "/images/landing/card-image-4.jpg",
    imageAlt: "Business Development",
    icon: <Handshake size={20} className="text-[#C9870A]" />,
    title: "Business Development",
    description: "Strategic partnerships and growth solutions for businesses looking to expand.",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="w-full py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-[100px] bg-lighter-orange-2">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="What We Do"
          title="Services Built Around People, Experiences and Quality."
          description="From the first welcome to the final detail, our services are shaped around 
people, thoughtful preparation, and dependable delivery."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
