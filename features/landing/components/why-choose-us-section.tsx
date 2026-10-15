import { BadgeCheck, Clock3, HeartHandshake, SearchCheck, Sparkles, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { getDifferentiators, type Differentiator } from "@/data/landing";

const DIFFERENTIATOR_ICONS: Record<Differentiator["icon"], LucideIcon> = {
  badgeCheck: BadgeCheck,
  clock: Clock3,
  searchCheck: SearchCheck,
  sparkles: Sparkles,
  heartHandshake: HeartHandshake,
};

interface DifferentiatorCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function DifferentiatorCard({ icon: Icon, title, description }: DifferentiatorCardProps) {
  return (
    <div className="group h-full bg-background border border-gray rounded-[12px] p-5 sm:p-6 flex flex-col gap-4 transition-colors duration-300 hover:border-[#C9870A]/50 motion-reduce:transition-none">
      <div className="w-[42px] h-[42px] bg-light-orange rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
        <Icon size={20} className="text-orange" aria-hidden="true" />
      </div>
      <h3 className="text-xl sm:text-[24px] font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-gray-2 leading-[17px]">{description}</p>
    </div>
  );
}

export async function WhyChooseUsSection() {
  const differentiators = await getDifferentiators();

  return (
    <section className="w-full py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-[100px] bg-background">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Professionalism You Can Rely On"
            description="Every engagement is an opportunity to create confidence, comfort, and a positive experience."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
          {differentiators.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07} className="h-full">
              <DifferentiatorCard {...item} icon={DIFFERENTIATOR_ICONS[item.icon]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}