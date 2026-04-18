"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/resume", label: "Resume" },
  { href: "/blogs", label: "Blogs" },
  { href: "/lifestyle", label: "Lifestyle" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-black tracking-[-0.04em] text-foreground font-headline uppercase"
        >
          GG
        </Link>

        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`font-headline tracking-tighter font-bold uppercase text-sm transition-colors duration-300 ${
                  isActive
                    ? "text-foreground border-b-2 border-primary-container pb-1"
                    : "text-muted hover:text-primary"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/gaurav-goyal-4a850a173/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-primary-container text-on-primary-container px-6 py-2 rounded-md font-label text-xs font-bold uppercase tracking-widest active:scale-95 transition-transform"
          >
            Contact
          </a>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4 border-t border-outline-variant/20">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`block font-headline tracking-tighter font-bold uppercase text-sm py-2 transition-colors ${
                  isActive ? "text-foreground" : "text-muted"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="https://www.linkedin.com/in/gaurav-goyal-4a850a173/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-container text-on-primary-container px-6 py-2 rounded-md font-label text-xs font-bold uppercase tracking-widest"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
