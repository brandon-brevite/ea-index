import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delegation Tactics & EA Guides | The EA Index",
  description:
    "Practical guides on delegating effectively, onboarding your EA, and getting real ROI from executive assistant services. Written for founders and executives.",
};

const tactics = [
  {
    title: "Your First Week With a New EA",
    description:
      "The onboarding checklist that sets the tone for the entire relationship. What to delegate first, how to set expectations, and the mistakes that derail most new hires.",
    href: "/tactics/first-week-with-your-ea",
  },
  {
    title: "What to Delegate to Your EA",
    description:
      "The complete list of tasks you can hand off, organized by category. Calendar, email, travel, research, personal errands, and business operations.",
    href: "/tactics/what-to-delegate",
  },
  {
    title: "Delegation Frameworks That Work",
    description:
      "Proven systems for delegating without micromanaging. The 70% rule, SOPs, Loom recordings, and async communication patterns that scale.",
    href: "/tactics/delegation-frameworks",
  },
  {
    title: "When to Upgrade Your EA",
    description:
      "The signs that you've outgrown your current setup. How to know when it's time to go from part-time to full-time, or from budget to premium.",
    href: "/tactics/when-to-upgrade",
  },
  {
    title: "Common EA Hiring Mistakes",
    description:
      "The five most expensive mistakes founders make when hiring their first executive assistant, and how to avoid every one of them.",
    href: "/tactics/common-mistakes",
  },
];

export default function TacticsIndexPage() {
  return (
    <div className="max-w-article mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4 tracking-tight">
        Delegation Tactics & EA Guides
      </h1>

      <p className="text-gray-500 text-body-lg mb-10">
        Practical playbooks for founders and executives who want to get real
        value from an executive assistant. No theory. Just what works.
      </p>

      <div className="grid gap-6">
        {tactics.map((tactic) => (
          <Link
            key={tactic.href}
            href={tactic.href}
            className="block border border-gray-200 rounded-lg p-6 hover:shadow-card-hover transition-shadow"
          >
            <h2 className="font-heading text-xl font-semibold text-navy mb-2">
              {tactic.title}
            </h2>
            <p className="text-gray-500 leading-relaxed">
              {tactic.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
