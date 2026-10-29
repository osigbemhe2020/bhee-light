export type ApproachPrinciple = {
  label: string;
  icon: "heartHandshake" | "badgeCheck" | "sparkles" | "repeat" | "gem";
};

export const aboutContent = {
  hero: {
    eyebrow: "ABOUT US",
    title: "Building Experiences Through Service",
    description: "A people-centred Nigerian business bringing together hospitality, travel, entrepreneurship, and a commitment to genuine value.",
  },
  story: {
    eyebrow: "OUR STORY",
    title: "Service, Enterprise And Continuous Growth.",
    paragraphs: [
      "Bhee Light 07 Unique Global Ventures is a Nigerian business providing professional services across event staffing, hospitality, travel and tourism, business development, and natural refreshments.",
      "Founded around the experience and vision of Blessing Chikaodi, the business brings together a passion for people, service, entrepreneurship, and continuous growth. From providing professional ushers for events to helping clients plan journeys and providing naturally made refreshments, our work is guided by one commitment: To deliver quality, create positive experiences, and provide genuine value.",
    ],
    commitment: "To deliver quality, create positive experiences, and provide genuine value.",
    images: [
      { src: "/images/bhee-light-img-4.jpeg", alt: "Bhee Light usher greeting guests at an event" },
      { src: "/images/bhee-light-img-1.jpeg", alt: "Naturally made Nigerian fruit drinks" },
    ],
  },
  leadership: {
    name: "Blessing Chikaodi",
    role: "Entrepreneur | Travel Consultant | Tour Guide | Business Development Professional",
    eyebrow: "Meet Blessing Chikaodi",
    title: "The Person Behind the Business",
    image: { src: "/images/CEO-image.PNG", alt: "Bhee Light founder Blessing Chikaodi" },
    paragraphs: [
      "Blessing Chikaodi is a Nigerian entrepreneur and multidisciplinary professional with experience spanning travel and tourism, business development, marketing, events, education, and the production of healthy natural beverages.",
      "With a background in Biology Education, Blessing has built a diverse professional journey driven by her passion for learning, creating opportunities, serving people, and developing businesses that provide genuine value. She is a professional in the hospitality space, a travel consultant, and a tour guide. Her experience includes working in a museum, where she developed an appreciation for history, culture, tourism, and creating meaningful experiences for visitors. Blessing brings this experience into her work as a tour guide, helping individuals and groups discover destinations through well planned and engaging experiences.",
      "She also has experience in travel consultancy, marketing, client relations, sales, and business development, working with clients and organisations while identifying opportunities for partnerships, growth, and collaboration.",
      "Beyond travel and tourism, Blessing is an entrepreneur with interests in the food and wellness space. She produces healthy, naturally made drinks and edible products, with a focus on providing refreshing and wholesome options to consumers. She also provides elegant, well trained, and well behaved ushers for events, helping organisations, companies, and event planners create a professional and welcoming experience for their guests. Her approach to event staffing emphasises good presentation, courtesy, discipline, confidence, and professionalism.",
    ],
  },
  education: {
    eyebrow: "Education & Professional Development",
    title: "Learning, Growing and Becoming Better",
    period: "2019 — 2024",
    institution: "University of Calabar, Calabar",
    qualification: "Background in Biology Education • Teachers Registration Council of Nigeria (TRCN) certificate",
    paragraphs: [
      "Blessing studied at the University of Calabar, Calabar, from 2019 to 2024, with a background in Biology Education. She holds a Teachers Registration Council of Nigeria (TRCN) certificate and has pursued additional certifications across different fields.",
      "Her commitment to continuous learning reflects her belief in personal development, adaptability, and professional growth.",
    ],
  },
  approach: {
    eyebrow: "My Approach",
    title: "Professionalism Goes Beyond Qualifications",
    description: "Blessing believes that professionalism is visible in the way work is approached, people are treated, and value is created.",
    principles: [
      { label: "Character", icon: "heartHandshake" },
      { label: "Competence", icon: "badgeCheck" },
      { label: "Presentation", icon: "sparkles" },
      { label: "Consistency", icon: "repeat" },
      { label: "Creating Value", icon: "gem" },
    ] satisfies ApproachPrinciple[],
    statementTitle: "Adaptable By Experience. Consistent in Purpose.",
    statementParagraphs: [
      "Her diverse experiences have taught her to remain adaptable, learn continuously, and approach every opportunity with excellence.",
      "Whether she is helping someone plan a journey, guiding visitors through a cultural experience, building a business relationship, producing a healthy drink, or coordinating professional event staff, her goal is the same:",
    ],
    statementEmphasis: "To deliver quality, create positive experiences, and leave a meaningful impact.",
    servicesLinkLabel: "See Our Services",
  },
};

// Shared with the landing page's short About section.
export const aboutDescription = aboutContent.story.paragraphs;
