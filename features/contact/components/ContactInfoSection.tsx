import { ArrowRight, Camera, Mail, MapPin, MessageCircle, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

interface ContactMethod {
  Icon: LucideIcon;
  title: string;
  value: string;
  action: string;
  url: string;
  external?: boolean;
}

const CONTACT_METHODS: ContactMethod[] = [
  {
    Icon: MapPin,
    title: "Location",
    value: "Guzape Extension, Abuja, Nigeria",
    action: "View Location",
    url: "https://maps.google.com",
    external: true,
  },
  {
    Icon: MessageCircle,
    title: "Phone / WhatsApp",
    value: "09162779962",
    action: "Chat With Us on WhatsApp",
    url: "https://wa.me/2349162779962",
    external: true,
  },
  {
    Icon: Mail,
    title: "Email",
    value: "blessingochuba19@gmail.com",
    action: "Send Us an Email",
    url: "mailto:blessingochuba19@gmail.com",
  },
  {
    Icon: Camera,
    title: "Instagram",
    value: "@bhee_light__ushers",
    action: "Follow Us on Instagram",
    url: "https://instagram.com/bhee_light__ushers",
    external: true,
  },
];

export function ContactInfoSection() {
  return (
    <section className="w-full my-4  bg-[#F7F1E5]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-[clamp(1.5rem,7vw,100px)] py-10">
        {/* Section heading */}
        <div className="flex max-w-[780px] flex-col gap-4">
          <SectionHeading
            size="wide"
            eyebrow="Get in Touch With Us"
            title="Bhee Light 07 Unique Global Ventures"
          />
          <p className="text-[18px] leading-[22px] text-[#625F56]">
            Choose the contact method that works best for you. We welcome enquiries about our services and your
            specific requirements.
          </p>
        </div>

        {/* Contact methods */}
        <ul className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-4">
          {CONTACT_METHODS.map(({ Icon, title, value, action, url, external }) => (
            <li
              key={title}
              className="flex min-h-[210px] flex-col items-start gap-4 rounded-xl border border-[#D4D0C9] bg-[#FFFCF6] p-5 sm:min-h-[230px] sm:p-6"
            >
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
                className="inline-flex max-w-full items-center gap-2 text-[15px] font-semibold leading-[19px] text-[#0D733A] hover:underline sm:text-[16px]"
              >
                {action}
                <ArrowRight aria-hidden size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}