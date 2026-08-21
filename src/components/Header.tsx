"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  ["#hero", "Home"],
  ["#gryve", "GRYVE"],
  ["#olavano", "olavano"],
  ["#projects", "Projecten"],
  ["#contact", "Contact"],
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
            : "py-4"
        }`}
      >
        <a href="#hero" className="flex items-center hover:opacity-80 z-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/olavano_logo.webp"
            alt="OlavAno Logo"
            className="h-8 sm:h-10 w-auto select-none"
          />
        </a>

        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
          <ul className="bg-nav text-white px-8 py-2.5 rounded-full shadow-lg flex items-center gap-8 text-sm font-medium border border-slate-700/50">
            {NAV_ITEMS.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-primary transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden z-20">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-slate-800 hover:text-primary p-2 transition-colors"
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className="hidden md:block w-10" />
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-slate-900 transition-all duration-500 md:hidden flex flex-col items-center justify-center ${
          menuOpen ? "" : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white/80 hover:text-white p-2 transition-colors"
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav className="flex flex-col items-center gap-8">
          {NAV_ITEMS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold text-white hover:text-primary transition-colors tracking-tight"
            >
              {label === "GRYVE" ? "Gryve" : label === "olavano" ? "OlavAno" : label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-8 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-[#7ab53e] transition-all hover:scale-105 shadow-lg"
          >
            Neem contact op
          </a>
        </nav>
      </div>
    </>
  );
}
