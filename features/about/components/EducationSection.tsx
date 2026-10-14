import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

export function EducationSection() {
  return (
    <section className="w-full bg-[#F7F1E5]">
      <div className="mx-auto flex min-h-[459px] max-w-[1440px] flex-col items-center gap-10 px-[clamp(1.5rem,7vw,100px)] py-10 lg:flex-row lg:gap-16">
        {/* Education card */}
        <article className="flex w-full max-w-[440px] shrink-0 flex-col gap-7 rounded-[22px] bg-[#FFFCF6] p-[clamp(1.5rem,3vw,2.75rem)] shadow-[0_12px_32px_rgba(18,61,50,0.094)] lg:w-[440px]">
          <div className="flex items-center gap-4">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#123D32]">
              <GraduationCap
                aria-hidden
                size={28}
                strokeWidth={1.7}
                className="text-[#E8CF98]"
              />
            </div>
            <p className="text-[16px] font-semibold leading-[19px] text-[#C9870A]">
              2019 — 2024
            </p>
          </div>

          <h3 className="text-[length:clamp(1.5rem,2.2vw,2rem)] font-semibold leading-[1.19] text-[#092A22]">
            University of Calabar, Calabar
          </h3>

          <hr className="h-px border-0 bg-[#D4D0C9]" />

          <p className="text-[18px] leading-[22px] text-[#111110]">
            Background in Biology Education &bull; Teachers Registration Council of Nigeria (TRCN) certificate
          </p>
        </article>

        {/* Education copy */}
        <div className="flex w-full flex-1 flex-col gap-6">
          <SectionHeading
            eyebrow="Education & Professional Development"
            title="Learning, Growing and Becoming Better"
          />

          <div className="flex flex-col gap-6 text-[18px] leading-[22px] text-[#625F56]">
            <p>
              Blessing studied at the University of Calabar, Calabar, from 2019 to 2024, with a background in Biology
              Education. She holds a Teachers Registration Council of Nigeria (TRCN) certificate and has pursued
              additional certifications across different fields.
            </p>
            <p>
              Her commitment to continuous learning reflects her belief in personal development, adaptability, and
              professional growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}