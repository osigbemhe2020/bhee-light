export type ApproachPrinciple = {
  label: string;
  icon: "heartHandshake" | "badgeCheck" | "sparkles" | "repeat" | "gem";
};

export const aboutDescription = [
  "Bhee Light 07 Unique Global Ventures is a Nigerian business providing professional services across event staffing, hospitality, travel and tourism, business development, and natural refreshments. Founded around the experience and vision of Blessing Chikaodi, the business brings together a passion for people, service, entrepreneurship, and continuous growth.",
  "From providing professional ushers for events to helping clients plan journeys and providing naturally made refreshments, our work is guided by one commitment: To deliver quality, create positive experiences, and provide genuine value.",
];

const approachPrinciples: ApproachPrinciple[] = [
  { label: "Character", icon: "heartHandshake" },
  { label: "Competence", icon: "badgeCheck" },
  { label: "Presentation", icon: "sparkles" },
  { label: "Consistency", icon: "repeat" },
  { label: "Creating Value", icon: "gem" },
];

export async function getApproachPrinciples(): Promise<ApproachPrinciple[]> {
  return approachPrinciples;
}
