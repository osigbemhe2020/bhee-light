import { BadgeCheck, Clock3, HeartHandshake, SearchCheck, Sparkles, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

interface DifferentiatorCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function DifferentiatorCard({ icon: Icon, title, description }: DifferentiatorCardProps) {
  return (
    <div className="bg-background border border-gray rounded-[12px] p-5 sm:p-6 flex flex-col gap-4">
      <div className="w-[42px] h-[42px] bg-light-orange rounded-full flex items-center justify-center">
        <Icon size={20} className="text-orange" aria-hidden="true" />
      </div>
      <h3 className="text-xl sm:text-[24px] font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-gray-2 leading-[17px]">{description}</p>
    </div>
  );
}

const DIFFERENTIATORS = [
  {
    icon: BadgeCheck,
    title: "Professional Experience",
    description: "We approach every engagement with professionalism, courtesy, confidence, and respect.",
  },
  {
    icon: Clock3,
    title: "Reliability",
    description: "We understand the importance of dependable service, especially when supporting important events and occasions.",
  },
  {
    icon: SearchCheck,
    title: "Attention to Detail",
    description: "From presentation to service delivery, we pay attention to the details that contribute to a positive experience.",
  },
  {
    icon: Sparkles,
    title: "Quality Service",
    description: "We are committed to maintaining high standards across our services and products.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Focus",
    description: "We listen to our clients, understand their requirements, and work towards delivering solutions that meet their needs..",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="w-full py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-[100px] bg-background">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Professionalism You Can Rely On"
          description="Every engagement is an opportunity to create confidence, comfort, and a positive experience."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
          {DIFFERENTIATORS.map((item) => (
            <DifferentiatorCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
