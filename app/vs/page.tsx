import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EA Service Comparisons | The EA Index",
  description:
    "Head-to-head comparisons of the most popular remote executive assistant services. See pricing, features, and recommendations side by side.",
};

const comparisons = [
  {
    slug: "athena-vs-boldly",
    serviceA: "Athena",
    serviceB: "Boldly",
    description:
      "Philippines-based managed service vs US-based fractional assistants. Two different approaches to premium EA support.",
  },
  {
    slug: "belay-vs-time-etc",
    serviceA: "BELAY",
    serviceB: "Time Etc",
    description:
      "Two US-based fractional services at very different price points. Budget vs premium and what you get for the difference.",
  },
  {
    slug: "zirtual-vs-fancy-hands",
    serviceA: "Zirtual",
    serviceB: "Fancy Hands",
    description:
      "Monthly managed plans vs pay-per-task marketplace. Which model works better for light-to-moderate EA needs?",
  },
  {
    slug: "noire-vs-athena",
    serviceA: "Noire",
    serviceB: "Athena",
    description:
      "Our Editor's Pick against the most well-known managed EA service. A close look at what separates them.",
  },
  {
    slug: "myoutdesk-vs-stealth-agents",
    serviceA: "MyOutDesk",
    serviceB: "Stealth Agents",
    description:
      "Two Philippines-based managed services with similar pricing. The differences are in the details.",
  },
  {
    slug: "persona-vs-proassisting",
    serviceA: "Persona",
    serviceB: "ProAssisting",
    description:
      "Global direct-hire talent vs US-based fractional support. Two high-end options for executives who demand the best.",
  },
];

export default function VSIndexPage() {
  return (
    <div className="max-w-article mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4 tracking-tight">
        EA Service Comparisons
      </h1>
      <p className="text-gray-500 mb-10 text-lg">
        Head-to-head breakdowns of popular executive assistant services. Each
        comparison covers pricing, service model, assistant quality, and who each
        service is best for.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {comparisons.map((c) => (
          <Link
            key={c.slug}
            href={`/vs/${c.slug}`}
            className="block border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-sm transition-all"
          >
            <h2 className="font-heading text-lg font-semibold text-navy mb-2">
              {c.serviceA} vs {c.serviceB}
            </h2>
            <p className="text-gray-500 text-sm">{c.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <Link href="/" className="text-blue-600 hover:underline text-sm">
          &larr; Back to all services
        </Link>
      </div>
    </div>
  );
}
