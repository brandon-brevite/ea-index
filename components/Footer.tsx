import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-table mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} The EA Index
        </p>
        <nav className="flex items-center gap-6">
          <Link
            href="/about"
            className="text-sm text-text-muted hover:text-text transition-colors"
          >
            About
          </Link>
          <Link
            href="/disclosure"
            className="text-sm text-text-muted hover:text-text transition-colors"
          >
            Affiliate disclosure
          </Link>
        </nav>
      </div>
    </footer>
  );
}
