"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/shared/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { NavigationItem } from "@/data/navigation";

interface SiteHeaderProps {
  activePage?: "home" | "about" | "services" | "contact";
  navItems: NavigationItem[];
}

export function SiteHeader({ activePage = "home", navItems }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-[72px] md:h-[88px] bg-background border-b border-gray z-50">
      <div className="flex items-center justify-between h-full px-4 sm:px-6 md:px-8 lg:px-[100px]">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/bhee-light-logo.png"
            alt="Bhee Light Logo"
            width={47}
            height={34}
            className="w-[47px] h-[34px]"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = activePage === item.key;
            return (
              <Link
                key={item.key}
                href={item.href}
                className="flex flex-col items-center gap-2 group"
              >
                <span className={`text-[16px] ${isActive ? "font-semibold text-green" : "font-normal text-foreground group-hover:text-green"} transition-colors`}>
                  {item.label}
                </span>
                <div className={`h-[2px] bg-orange-accent rounded-full transition-all ${isActive ? "w-[30px]" : "w-0 group-hover:w-[30px]"}`} />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          
          <a href="/contact">
            <Button>Start an Inquiry</Button>
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-foreground hover:bg-light-orange"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" className="lg:hidden absolute inset-x-0 top-full flex flex-col gap-2 bg-background border-b border-gray px-4 sm:px-6 py-4 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-4 py-3 text-[16px] transition-colors ${
                activePage === item.key ? "font-semibold text-green bg-light-orange/50" : "text-foreground hover:bg-light-orange/50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button className="mt-2 w-full">Start an Inquiry</Button>
        </nav>
      )}
    </header>
  );
}
