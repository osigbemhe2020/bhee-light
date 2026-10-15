export type HeroDiamond = {
  id: string;
  cx: number;
  cy: number;
  r: number;
  imageSrc: string;
  imageAlt: string;
};

export type LandingService = {
  imageSrc: string;
  imageAlt: string;
  icon: "bell" | "plane" | "cupSoda" | "handshake";
  title: string;
  description: string;
};

export type PurposeCard = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  accentColor: "white" | "black";
  cardClassName: string;
  numberClassName: string;
};

export type Differentiator = {
  icon: "badgeCheck" | "clock" | "searchCheck" | "sparkles" | "heartHandshake";
  title: string;
  description: string;
};

export type ClientSegment = {
  title: string;
  desc: string;
};

export const heroDescription = [
  "Bhee Light Unique Global Ventures provides professional event staffing, hospitality support, travel and tour services, business development solutions, and natural refreshments.",
  "We are committed to professionalism, reliability, quality, and creating positive experiences for the people and organisations we serve.",
];

const heroDiamonds: HeroDiamond[] = [
  {
    id: "large",
    cx: 720,
    cy: 480,
    r: 480,
    imageSrc: "/images/bhee-light-img-5.jpeg",
    imageAlt: "Bhee Light staff assisting guests at an airport desk",
  },
  {
    id: "medium",
    cx: 225,
    cy: 747,
    r: 225,
    imageSrc: "/images/bhee-light-img-2.jpeg",
    imageAlt: "Bhee Light hospitality staff at an event",
  },
  {
    id: "small",
    cx: 478,
    cy: 1000,
    r: 225,
    imageSrc: "/images/bhee-light-img-3.jpeg",
    imageAlt: "Bhee Light team member serving a guest",
  },
];

const landingServices: LandingService[] = [
  {
    imageSrc: "/images/bhee-light-img-4.jpeg",
    imageAlt: "Event Staffing",
    icon: "bell",
    title: "Event Staffing & Hospitality",
    description:
      "Professional ushers, hosts, and hospitality staff for corporate events, weddings, and special occasions.",
  },
  {
    imageSrc: "/images/bhee-light-img-5.jpeg",
    imageAlt: "Travel & Tours",
    icon: "plane",
    title: "Travel & Tour Services",
    description: "Curated travel experiences and tour packages for individuals and groups exploring Nigeria.",
  },
  {
    imageSrc: "/images/bhee-light-img-3.jpeg",
    imageAlt: "Natural Refreshments",
    icon: "cupSoda",
    title: "Natural Refreshments",
    description: "Premium naturally made Nigerian fruit and hibiscus beverages for events and catering.",
  },
  {
    imageSrc: "/images/bhee-light-img-6.jpeg",
    imageAlt: "Business Development",
    icon: "handshake",
    title: "Business Development",
    description: "Strategic partnerships and growth solutions for businesses looking to expand.",
  },
];

const purposeCards: PurposeCard[] = [
  {
    number: "01",
    eyebrow: "Our Mission",
    title: "Creating Value Through Professional Service.",
    description:
      "To provide professional, reliable, and customer focused event and refreshment services while maintaining high standards of presentation, service delivery, and client satisfaction. We aim to create memorable experiences through professionalism, attention to detail, quality products, and dependable service.",
    accentColor: "white",
    cardClassName: "bg-light-green gap-6 rounded-t-[20px] md:rounded-l-[20px] md:rounded-tr-none border border-white/20",
    numberClassName: "text-white",
  },
  {
    number: "02",
    eyebrow: "Our Vision",
    title: "Building a Recognised Nigerian Brand.",
    description:
      "To become a recognised Nigerian brand in professional event staffing, hospitality support, and natural refreshments, known for excellence, reliability, and exceptional customer experience both locally and internationally.",
    accentColor: "black",
    cardClassName: "bg-light-orange gap-6 rounded-b-[20px] md:rounded-r-[20px] md:rounded-bl-none",
    numberClassName: "text-foreground",
  },
];

const differentiators: Differentiator[] = [
  {
    icon: "badgeCheck",
    title: "Professional Experience",
    description: "We approach every engagement with professionalism, courtesy, confidence, and respect.",
  },
  {
    icon: "clock",
    title: "Reliability",
    description: "We understand the importance of dependable service, especially when supporting important events and occasions.",
  },
  {
    icon: "searchCheck",
    title: "Attention to Detail",
    description: "From presentation to service delivery, we pay attention to the details that contribute to a positive experience.",
  },
  {
    icon: "sparkles",
    title: "Quality Service",
    description: "We are committed to maintaining high standards across our services and products.",
  },
  {
    icon: "heartHandshake",
    title: "Customer Focus",
    description: "We listen to our clients, understand their requirements, and work towards delivering solutions that meet their needs..",
  },
];

const clientSegments: ClientSegment[] = [
  { title: "Corporate Organisations", desc: "Professional event and hospitality support for organised corporate gatherings" },
  { title: "Event Planners", desc: "Dependable staffing and refreshment support aligned to each event plan." },
  { title: "Hotels & Hospitality Businesses", desc: "Guest-facing support grounded in presentation, courtesy, and service." },
  { title: "NGOs & Development Organisations", desc: "Welcoming support for meetings, conferences, and stakeholder events." },
  { title: "Embassies & International Organisations", desc: "Professional hospitality support for formal and international settings." },
  { title: "Government & Institutional Organisations", desc: "Structured support for official functions and institutional gatherings." },
  { title: "Churches & Faith Based Organisations", desc: "Courteous event support for conferences, services, and special occasions." },
  { title: "Schools & Educational Institutions", desc: "Organised guest support for ceremonies, programmes, and gatherings." },
  { title: "Wedding Planners", desc: "Elegant ushers and guest guidance for warm, well-run celebrations." },
  { title: "Conference Organisers", desc: "Reception, guidance, and on-the-day support for attendees" },
  { title: "Private Individuals", desc: "Personalised help for events, journeys, and refreshment requirements" },
  { title: "Luxury & Premium Event Clients", desc: "Polished presentation and attentive service for elevated occasions." },
];

export async function getHeroDiamonds(): Promise<HeroDiamond[]> {
  return heroDiamonds;
}

export async function getLandingServices(): Promise<LandingService[]> {
  return landingServices;
}

export async function getPurposeCards(): Promise<PurposeCard[]> {
  return purposeCards;
}

export async function getDifferentiators(): Promise<Differentiator[]> {
  return differentiators;
}

export async function getClientSegments(): Promise<ClientSegment[]> {
  return clientSegments;
}
