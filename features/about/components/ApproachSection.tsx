import { BadgeCheck, Gem, HeartHandshake, Repeat, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/shared/button";

const PRINCIPLES = [
  { label: "Character", Icon: HeartHandshake },
  { label: "Competence", Icon: BadgeCheck },
  { label: "Presentation", Icon: Sparkles },
  { label: "Consistency", Icon: Repeat },
  { label: "Creating Value", Icon: Gem },
];

export function ApproachSection() {
  return (
    <section className="w-full bg-[#FFFCF6]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-[clamp(1.5rem,7vw,100px)] py-10">
        {/* Section heading */}
        <div className="flex max-w-[840px] flex-col gap-4">
          <SectionHeading
            eyebrow="My Approach"
            title="Professionalism Goes Beyond Qualifications"
          />
          <p className="text-[16px] leading-[19px] text-[#625F56]">
            Blessing believes that professionalism is visible in the way work is approached, people are treated, and
            value is created.
          </p>
        </div>

        {/* Principles */}
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {PRINCIPLES.map(({ label, Icon }) => (
            <li
              key={label}
              className="flex min-h-[130px] flex-col gap-[18px] rounded-xl border border-[#D4D0C9] bg-[#F7F1E5] p-[22px]"
            >
              <Icon aria-hidden size={23} strokeWidth={1.7} className="text-[#C9870A]" />
              <span className="font-[family-name:var(--font-lora)] text-[22px] leading-[28px] text-[#092A22]">
                {label}
              </span>
            </li>
          ))}
        </ul>

        {/* Approach statement */}
        <div className="flex flex-col gap-[30px] rounded-[22px] bg-[#E5F9ED] p-[clamp(1.5rem,2.5vw,2.25rem)] lg:flex-row lg:items-start">
          <h3 className="text-[length:clamp(1.5rem,2.2vw,2rem)] font-semibold leading-[1.19] text-[#092A22] lg:w-[340px] lg:shrink-0">
            Adaptable By Experience. Consistent in Purpose.
          </h3>

          <div className="flex flex-1 flex-col items-start justify-center gap-[30px]">
            <div className="flex flex-col gap-[19px] text-[16px] leading-[19px] text-[#123D32]">
              <p>
                Her diverse experiences have taught her to remain adaptable, learn continuously, and approach every
                opportunity with excellence.
              </p>
              <p>
                Whether she is helping someone plan a journey, guiding visitors through a cultural experience, building
                a business relationship, producing a healthy drink, or coordinating professional event staff, her goal
                is the same:
                <br />
                <span className="font-semibold text-[#111110]">
                  To deliver quality, create positive experiences, and leave a meaningful impact.
                </span>
              </p>
            </div>

            <Button>See Our Services</Button>
          </div>
        </div>
      </div>
    </section>
  );
}