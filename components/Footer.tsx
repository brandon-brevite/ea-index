import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-20">
      <div className="max-w-content mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-heading font-bold text-lg mb-3">The EA Index</p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Compare remote executive assistant services by price, model, and fit.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Navigate
            </p>
            <nav className="flex flex-col gap-2.5">
              <Link href="/compare" className="text-sm text-gray-300 hover:text-white transition-colors">
                Compare
              </Link>
              <Link href="/insights" className="text-sm text-gray-300 hover:text-white transition-colors">
                Insights
              </Link>
              <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                About
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Resources
            </p>
            <nav className="flex flex-col gap-2.5">
              <Link href="/vs" className="text-sm text-gray-300 hover:text-white transition-colors">
                Service comparisons
              </Link>
              <Link href="/best-tools" className="text-sm text-gray-300 hover:text-white transition-colors">
                Best tools for EAs
              </Link>
              <Link href="/tactics" className="text-sm text-gray-300 hover:text-white transition-colors">
                Delegation tactics
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Company
            </p>
            <nav className="flex flex-col gap-2.5">
              <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <a href="mailto:hello@theea.index" className="text-sm text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>

        {/* Subfooter */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} The EA Index. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Terms of service
            </Link>
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
