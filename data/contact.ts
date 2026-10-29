export type ContactMethod = {
  icon: "mapPin" | "messageCircle" | "mail" | "camera";
  title: string;
  value: string;
  action: string;
  url: string;
  external?: boolean;
};

export const contactContent = {
  hero: {
    eyebrow: "CONTACT US",
    title: "Let's Talk About What You Need",
    description: "Reach out to us for event staffing, refreshments, travel services, or business development. We're here to help.",
  },
  intro: {
    eyebrow: "Get in Touch With Us",
    title: "Bhee Light 07 Unique Global Ventures",
    description: "Choose the contact method that works best for you. We welcome enquiries about our services and your specific requirements.",
  },
  enquiry: {
    eyebrow: "Enquiry Form",
    title: "Send Us an Enquiry",
    description: "Tell us what you need and our team will get back to you.",
    image: { src: "/images/contact/contact-us-img.jpg", alt: "Bhee Light client services professional answering an enquiry" },
    privacyNote: "Share only the details relevant to your enquiry. We'll use them to understand your requirements and respond.",
    successTitle: "Enquiry Submitted Successfully",
    successDescription: "Thank you for your enquiry. Our team will get back to you shortly.",
    anotherEnquiry: "Submit Another Enquiry",
    submitLabel: "Submit Enquiry",
    submittingLabel: "Submitting...",
    submitErrorFallback: "Failed to submit enquiry",
    validation: {
      fullNameMin: "Full name must be at least 2 characters",
      fullNameMax: "Full name must be less than 100 characters",
      phoneMin: "Phone number must be at least 10 characters",
      phoneMax: "Phone number must be less than 20 characters",
      phoneFormat: "Invalid phone number format",
      emailRequired: "Email is required",
      emailFormat: "Invalid email address",
      serviceRequired: "Please select a service",
      messageMin: "Message must be at least 10 characters",
      messageMax: "Message must be less than 2000 characters",
    },
    fields: {
      fullName: { label: "Full Name", placeholder: "Enter your full name." },
      phoneNumber: { label: "Phone Number", placeholder: "Enter your phone number." },
      email: { label: "Email Address", placeholder: "Enter your email address." },
      service: { label: "Service Required" },
      eventDate: { label: "Event / Service Date", placeholder: "Select your preferred date if applicable." },
      message: { label: "Message", placeholder: "Tell us more about your requirements." },
    },
  },
  whatsapp: {
    eyebrow: "NEED A QUICK RESPONSE?",
    title: "Chat With Us On WhatsApp",
    description: "Chat with us directly on WhatsApp about your event, travel plans, refreshment requirements, or other enquiries.",
    buttonText: "Chat Us On WhatsApp",
    phoneNumber: "09162779962",
  },
  location: {
    eyebrow: "Find Us",
    title: "Guzape Extension, Abuja, Nigeria",
    address: "Guzape Extension, Abuja",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Guzape+Extension+Abuja+Nigeria",
    description: "Use Google Maps for directions to Guzape Extension, Abuja. Contact us before visiting so we can support your enquiry appropriately.",
    mapButton: "Open Google Maps",
  },
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
