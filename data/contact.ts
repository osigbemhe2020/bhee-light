export type ContactMethod = {
  icon: "mapPin" | "messageCircle" | "mail" | "camera";
  title: string;
  value: string;
  action: string;
  url: string;
  external?: boolean;
};

const contactMethods: ContactMethod[] = [
  {
    icon: "mapPin",
    title: "Location",
    value: "Guzape Extension, Abuja, Nigeria",
    action: "View Location",
    url: "https://maps.google.com",
    external: true,
  },
  {
    icon: "messageCircle",
    title: "Phone / WhatsApp",
    value: "09162779962",
    action: "Chat With Us on WhatsApp",
    url: "https://wa.me/2349162779962",
    external: true,
  },
  {
    icon: "mail",
    title: "Email",
    value: "blessingochuba19@gmail.com",
    action: "Send Us an Email",
    url: "mailto:blessingochuba19@gmail.com",
  },
  {
    icon: "camera",
    title: "Instagram",
    value: "@bhee_light__ushers",
    action: "Follow Us on Instagram",
    url: "https://instagram.com/bhee_light__ushers",
    external: true,
  },
];

export async function getContactMethods(): Promise<ContactMethod[]> {
  return contactMethods;
}
