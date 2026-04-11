import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Tools to Work With Your EA | The EA Index",
  description:
    "Recommended software tools for working effectively with a remote executive assistant. Communication, project management, scheduling, passwords, and email.",
};

const guides = [
  {
    title: "Communication Tools",
    description:
      "The right async and real-time communication setup so nothing falls through the cracks.",
    href: "/best-tools/communication",
    icon: "💬",
  },
  {
    title: "Project Management Tools",
    description:
      "Track tasks, deadlines, and recurring workflows without micromanaging your EA.",
    href: "/best-tools/project-management",
    icon: "📋",
  },
  {
    title: "Scheduling Tools",
    description:
      "Let your EA own your calendar without the back-and-forth of manual coordination.",
    href: "/best-tools/scheduling",
    icon: "📅",
  },
  {
    title: "Password Sharing Tools",
    description:
      "Share account access securely without texting passwords or using shared docs.",
    href: "/best-tools/password-sharing",
    icon: "🔐",
  },
  {
    title: "Email Management Tools",
    description:
      "Set up inbox delegation, triage systems, and the tools that make email handoff work.",
    href: "/best-tools/email-management",
    icon: "📧",
  },
];

export default function BestToolsPage() {
  return (
    <div className="max-w-article mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4 tracking-tight">
        Best Tools to Work With Your EA
      </h1>

      <p className="text-gray-500 text-lg mb-10 max-w-2xl">
        Hiring an EA is step one. Setting up the right tools is step two. These
        guides cover the software that actually matters when you&apos;re working
        with a remote executive assistant — and how to configure each one so
        your EA can hit the ground running.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group block border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all"
          >
            <div className="text-3xl mb-3">{guide.icon}</div>
            <h2 className="font-heading text-xl font-semibold text-navy mb-2 group-hover:text-blue-600 transition-colors">
              {guide.title}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              {guide.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
