export const ENQUIRY_SERVICE_VALUES = [
  "ushering",
  "refreshments",
  "travel",
  "business",
  "general",
] as const;

export type EnquiryService = (typeof ENQUIRY_SERVICE_VALUES)[number];

export type EnquiryServiceOption = {
  value: EnquiryService;
  label: string;
};

export type ServiceIcon = "bell" | "plane" | "cupSoda" | "handshake";

const enquiryServiceOptions: EnquiryServiceOption[] = [
  { value: "ushering", label: "Event Ushering & Guest Management" },
  { value: "refreshments", label: "Natural Refreshments" },
  { value: "travel", label: "Travel Planning & Tour Services" },
  { value: "business", label: "Business Development & Marketing" },
  { value: "general", label: "General Enquiry" },
];

const usheringIncluded = [
  "Guest reception",
  "Guest guidance",
  "Event support",
  "Professional guest management",
  "Hospitality support",
  "Professional presentation",
];

const usheringValues = ["Courtesy", "Discipline", "Confidence", "Good Presentation", "Professionalism"];
const businessCapabilities = [
  "Business development",
  "Marketing",
  "Client relations",
  "Sales",
  "Networking",
  "Partnerships",
];
const travelPillars = ["Travel consultancy", "Journey planning", "Client support", "Tour guiding"];

export async function getEnquiryServiceOptions(): Promise<EnquiryServiceOption[]> {
  return enquiryServiceOptions;
}

export async function getUsheringIncluded(): Promise<string[]> {
  return usheringIncluded;
}

export async function getUsheringValues(): Promise<string[]> {
  return usheringValues;
}

export async function getBusinessCapabilities(): Promise<string[]> {
  return businessCapabilities;
}

export async function getTravelPillars(): Promise<string[]> {
  return travelPillars;
}
