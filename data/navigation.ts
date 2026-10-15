export type NavigationItem = {
  href: string;
  label: string;
  key: "home" | "about" | "services" | "contact";
};

const navigationItems: NavigationItem[] = [
  { href: "/", label: "Home", key: "home" },
  { href: "/about", label: "About Us", key: "about" },
  { href: "/services", label: "Services", key: "services" },
  { href: "/contact", label: "Contact Us", key: "contact" },
];

export async function getNavigationItems(): Promise<NavigationItem[]> {
  return navigationItems;
}
