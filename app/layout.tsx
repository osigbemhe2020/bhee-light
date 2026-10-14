import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Bhee Light - Professional Event Support & Quality Refreshments",
  description: "Bhee Light Unique Global Ventures provides professional event staffing, hospitality support, travel and tour services, business development solutions, and natural refreshments.",
  icons: {
    icon: "/images/bhee-light-logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lato.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
