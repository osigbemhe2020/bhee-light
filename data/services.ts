export const ENQUIRY_SERVICE_VALUES = ["ushering", "refreshments", "travel", "business", "general"] as const;
export type EnquiryService = (typeof ENQUIRY_SERVICE_VALUES)[number];
export type EnquiryServiceOption = { value: EnquiryService; label: string };
export type ServiceIcon = "bell" | "plane" | "cupSoda" | "handshake";

export const servicesContent = {
  hero: {
    eyebrow: "OUR SERVICES",
    title: "Professional Services Designed Around Your Needs",
    description: "We provide a range of services across events, hospitality, travel, business development, and natural refreshments.",
  },
  callout: {
    eyebrow: "WE ARE ALWAYS AVAILABLE FOR YOU",
    title: "Which Service Can We Help You With ?",
    description: "Share your requirements and we’ll help you take the next step with clarity, professionalism, and care.",
  },
  ushering: {
    id: "ushering",
    eyebrow: "Event Ushering & Guest Management",
    title: "Make Every Guest Feel Welcome",
    description: "We provide elegant, well trained, and well behaved ushers for events, organisations, companies, and event planners. Our event staffing service is designed to support a professional and welcoming guest experience.",
    image: { src: "/images/bhee-light-img-5.jpeg", alt: "Bhee Light ushers welcoming guests at a conference" },
    included: ["Guest reception", "Guest guidance", "Event support", "Professional guest management", "Hospitality support", "Professional presentation"],
    values: ["Courtesy", "Discipline", "Confidence", "Good Presentation", "Professionalism"],
    button: "Enquire About Ushering",
  },
  refreshments: {
    id: "refreshments",
    eyebrow: "Refreshments Service",
    title: "Natural Refreshments for Events",
    description: "Premium naturally made Nigerian fruit and hibiscus beverages for events, catering, and corporate functions.",
    image: { src: "/images/bhee-light-img-2.jpeg", alt: "Naturally made refreshments" },
    quantityLabel: "Quantity",
    quantity: "100+",
    quantityCaption: "Bottles per event",
    highlight: "Perfect for large corporate events, weddings, and conferences. Fresh, healthy, and beautifully presented.",
    button: "Order Refreshments",
  },
  travel: {
    id: "travel",
    eyebrow: "Travel Planning & Tour Services",
    title: "Plan Your Journey. Experience Your Destination.",
    description: "We provide travel consultancy, travel planning, client support, and professional tour guiding. Our approach is influenced by an appreciation for history, culture, tourism, and meaningful experiences. We help individuals and groups plan and experience destinations in an engaging and well organised way.",
    image: { src: "/images/service-image-3.jpg", alt: "Tour guide sharing the story of a pottery centre with a small group of visitors" },
    pillars: ["Travel consultancy", "Journey planning", "Client support", "Tour guiding"],
    button: "Enquire About Travel Services",
  },
  business: {
    id: "business",
    eyebrow: "Business Development & Marketing",
    title: "Building Relationships. Creating Opportunities.",
    description: "We bring experience across business development, marketing, client relations, sales, networking, and partnerships. Our focus is on building valuable relationships, identifying opportunities, and creating meaningful connections that can support business growth and collaboration.",
    image: { src: "/images/bhee-light-img-6.jpeg", alt: "Business professionals in a development meeting at a modern office" },
    capabilities: ["Business development", "Marketing", "Client relations", "Sales", "Networking", "Partnerships"],
    connection: "Meaningful professional connections",
    button: "Work With Us",
  },
};

export const enquiryServiceOptions: EnquiryServiceOption[] = [
  { value: "ushering", label: "Event Ushering & Guest Management" },
  { value: "refreshments", label: "Natural Refreshments" },
  { value: "travel", label: "Travel Planning & Tour Services" },
  { value: "business", label: "Business Development & Marketing" },
  { value: "general", label: "General Enquiry" },
];

export async function getEnquiryServiceOptions(): Promise<EnquiryServiceOption[]> {
  return enquiryServiceOptions;
}
