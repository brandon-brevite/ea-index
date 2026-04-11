"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const TOP_SERVICES = [
  { name: "Athena", slug: "athena", price: "$3,000-$3,600/mo" },
  { name: "Boldly", slug: "boldly", price: "$2,520-$5,040/mo" },
  { name: "ProAssisting", slug: "proassisting", price: "$3,300-$6,000/mo" },
  { name: "Persona", slug: "persona", price: "$3,000-$5,000/mo" },
  { name: "Time Etc", slug: "time-etc", price: "$390-$1,560/mo" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "nav-blur border-b border-gray-200/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-heading font-bold text-xl tracking-tight text-navy">
          The EA Index
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Compare mega-dropdown */}
          <div className="relative group">
            <Link
              href="/compare"
              className="text-sm font-medium text-gray-500 hover:text-navy transition-colors flex items-center gap-1"
            >
              Compare
              <svg width="10" height="10" viewBox="0 0 10 10" className="mt-0.5 opacity-50">
                <path d="M2 4L5 7L8 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </Link>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg py-3 w-[300px]">
                {/* Editor's Choice */}
                <Link
                  href="/services/noire"
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50/50 transition-colors"
                >
                  <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
                    Editor&apos;s Pick
                  </span>
                  <span className="text-sm font-semibold text-navy">Noire</span>
                  <span className="text-xs text-gray-400 ml-auto">$3,000-$3,500/mo</span>
                </Link>

                <div className="border-t border-gray-100 my-1.5" />

                {/* Numbered top services */}
                {TOP_SERVICES.map((svc, i) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-xs font-bold text-gray-300 w-4 text-right shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-sm text-gray-700 hover:text-navy">{svc.name}</span>
                    <span className="text-xs text-gray-400 ml-auto">{svc.price}</span>
                  </Link>
                ))}

                <div className="border-t border-gray-100 mt-1.5 pt-1.5">
                  <Link
                    href="/compare"
                    className="block px-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50/50 transition-colors"
                  >
                    View all services &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Resources dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium text-gray-500 hover:text-navy transition-colors flex items-center gap-1">
              Resources
              <svg width="10" height="10" viewBox="0 0 10 10" className="mt-0.5 opacity-50">
                <path d="M2 4L5 7L8 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg py-2 min-w-[200px]">
                <Link href="/vs" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-navy transition-colors">
                  Service comparisons
                </Link>
                <Link href="/best-tools" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-navy transition-colors">
                  Best tools for EAs
                </Link>
                <Link href="/tactics" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-navy transition-colors">
                  Delegation tactics
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/insights"
            className="text-sm font-medium text-gray-500 hover:text-navy transition-colors"
          >
            Insights
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-500 hover:text-navy transition-colors"
          >
            About
          </Link>
          <Link
            href="/quiz"
            className="btn-gradient text-sm px-5 py-2"
          >
            Find my match
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 -mr-2 text-navy"
          aria-label="Toggle menu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <path d="M5 5L17 17M17 5L5 17" />
            ) : (
              <>
                <path d="M3 6H19" />
                <path d="M3 11H19" />
                <path d="M3 16H19" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-gray-200/60 px-6 py-5 flex flex-col gap-4 nav-blur">
          {/* Compare section */}
          <div>
            <Link
              href="/compare"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600 hover:text-navy"
            >
              Compare all services
            </Link>
            <div className="mt-3 pl-2 flex flex-col gap-2">
              <Link href="/services/noire" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="inline-flex items-center text-[8px] font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-purple-600 text-white px-1.5 py-0.5 rounded-full">
                  Pick
                </span>
                Noire
              </Link>
              {TOP_SERVICES.slice(0, 3).map((svc, i) => (
                <Link key={svc.slug} href={`/services/${svc.slug}`} onClick={() => setMenuOpen(false)} className="text-sm text-gray-500 hover:text-navy">
                  {i + 1}. {svc.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-100 pt-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-2">Resources</p>
            <div className="flex flex-col gap-3 pl-2">
              <Link href="/vs" onClick={() => setMenuOpen(false)} className="text-sm text-gray-600 hover:text-navy">
                Service comparisons
              </Link>
              <Link href="/best-tools" onClick={() => setMenuOpen(false)} className="text-sm text-gray-600 hover:text-navy">
                Best tools for EAs
              </Link>
              <Link href="/tactics" onClick={() => setMenuOpen(false)} className="text-sm text-gray-600 hover:text-navy">
                Delegation tactics
              </Link>
            </div>
          </div>
          <Link
            href="/insights"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-gray-600 hover:text-navy"
          >
            Insights
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-gray-600 hover:text-navy"
          >
            About
          </Link>
          <Link
            href="/quiz"
            className="btn-gradient text-sm px-5 py-2.5 text-center mt-1"
          >
            Find my match
          </Link>
        </nav>
      )}
    </header>
  );
}
