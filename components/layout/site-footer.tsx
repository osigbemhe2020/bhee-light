import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="w-full bg-background border-t border-gray">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(120px,.6fr)_minmax(0,1.1fr)_minmax(150px,.8fr)] items-start px-4 sm:px-6 md:px-8 lg:px-[100px] py-10 lg:py-[72px] gap-8 lg:gap-12">
        <div className="flex min-w-0 flex-col gap-5">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/images/bhee-light-logo.png"
              alt="Bhee Light Logo"
              width={35}
              height={35}
              className="w-[35px] h-[35px]"
            />
            <span className="text-[16px] font-semibold text-foreground">Bhee Light 07 Unique Global Ventures</span>
          </Link>
          <p className="text-sm text-foreground w-full">
            Professional event staffing, hospitality support, travel services, business development, and natural refreshments.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-[#C62F94]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
            </svg>
            <span className="text-sm text-foreground">@bhee_light_ushers</span>
          </a>
        </div>

        <div className="flex min-w-0 flex-col gap-3.5">
          <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
          <div className="flex flex-col gap-3.5">
            <Link href="/" className="text-xs text-foreground hover:text-green transition-colors">Home</Link>
            <Link href="/about" className="text-xs text-foreground hover:text-green transition-colors">About</Link>
            <Link href="/services" className="text-xs text-foreground hover:text-green transition-colors">Services</Link>
            <Link href="/contact" className="text-xs text-foreground hover:text-green transition-colors">Contact</Link>
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-3.5">
          <h3 className="text-sm font-semibold text-foreground">Services</h3>
          <div className="flex flex-col gap-3.5">
            <Link href="/services#event-staffing" className="text-xs text-foreground hover:text-green transition-colors">Event Ushering & Guest Management</Link>
            <Link href="/services#travel-tours" className="text-xs text-foreground hover:text-green transition-colors">Travel Planning & Tour Services</Link>
            <Link href="/services#refreshments" className="text-xs text-foreground hover:text-green transition-colors">Natural Refreshments</Link>
            <Link href="/services#business-dev" className="text-xs text-foreground hover:text-green transition-colors">Business Development and Marketing</Link>
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-3.5">
          <h3 className="text-sm font-semibold text-foreground">Contact</h3>
          <div className="flex flex-col gap-3.5">
            <p className="text-xs text-foreground">Guzape Extension, Abuja, Nigeria</p>
            <p className="text-xs text-foreground">09162779962</p>
            <p className="text-xs text-foreground">blessingochuba19@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 px-4 sm:px-6 md:px-8 lg:px-[100px] py-5 border-t border-gray">
        <p className="text-xs text-foreground">
          © 2026 Bhee Light. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
