"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-border">
      <div className="max-w-table mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-tight text-text">
          The EA Index
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm text-text-muted hover:text-text transition-colors"
          >
            Compare
          </Link>
          <Link
            href="/blog"
            className="text-sm text-text-muted hover:text-text transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-sm text-text-muted hover:text-text transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {menuOpen ? (
              <path d="M4 4L16 16M16 4L4 16" />
            ) : (
              <>
                <path d="M3 5H17" />
                <path d="M3 10H17" />
                <path d="M3 15H17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-3">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-text-muted hover:text-text"
          >
            Compare
          </Link>
          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-text-muted hover:text-text"
          >
            Blog
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-text-muted hover:text-text"
          >
            About
          </Link>
        </nav>
      )}
    </header>
  );
}
