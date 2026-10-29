import {
  ArrowRight,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { getContactMethods, type ContactMethod } from "@/data/contact";
import { contactContent } from "@/data/contact";

const CONTACT_ICONS: Record<ContactMethod["icon"], LucideIcon> = {
  mapPin: MapPin,
  messageCircle: MessageCircle,
  mail: Mail,
  camera: Camera,
};

export async function ContactInfoSection() {
  const contactMethods = await getContactMethods();

  return (
    <section className="w-full my-4  bg-[#F7F1E5]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-[clamp(1.5rem,7vw,100px)] py-10">
        {/* Section heading */}
        <Reveal className="flex max-w-[780px] flex-col gap-4">
          <SectionHeading
            size="wide"
            eyebrow={contactContent.intro.eyebrow}
            title={contactContent.intro.title}
          />
          <p className="text-[18px] leading-[22px] text-[#625F56]">
            {contactContent.intro.description}
          </p>
        </Reveal>

        {/* Contact methods */}
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-4">
          {contactMethods.map(({ icon, title, value, action, url, external }, index) => {
            const Icon = CONTACT_ICONS[icon];
            return (
              <Reveal key={title} y={16} delay={index * 0.1} className="h-full">
                <article className="flex h-full min-h-[210px] flex-col items-start gap-4 rounded-xl border border-[#D4D0C9] bg-[#FFFCF6] p-5 sm:min-h-[230px] sm:p-6">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#F9E7C7]">
                    <Icon aria-hidden size={20} strokeWidth={1.7} className="text-[#C9870A]" />
                  </span>

                  <h3 className="text-[16px] font-semibold leading-[19px] text-[#111110]">{title}</h3>

                  <p className="self-stretch text-[18px] leading-[24px] text-[#111110] [overflow-wrap:anywhere] sm:text-[20px]">
                    {value}
                  </p>

                  <a
                    href={url}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="mt-auto inline-flex max-w-full items-center gap-2 text-[15px] font-semibold leading-[19px] text-[#0D733A] hover:underline sm:text-[16px]"
                  >
                    {action}
                    <ArrowRight aria-hidden size={18} />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
