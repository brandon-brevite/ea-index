import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | The EA Index",
  description:
    "The EA Index helps founders and executives compare remote executive assistant services. Built because finding the right EA shouldn't take months.",
};

export default function AboutPage() {
  return (
    <div className="max-w-article mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-10 tracking-tight">
        About The EA Index
      </h1>

      <div className="prose">
        <p>
          A few years ago, I started looking for a remote executive assistant. I
          figured it would take an afternoon. I was wrong. It took months.
        </p>

        <p>
          The problem wasn&apos;t a lack of options. There are dozens of EA
          services, all with polished websites, all claiming to be the best.
          The problem was getting straight answers about any of them.
        </p>

        <h2>The research took forever</h2>

        <p>
          Every service has a different pricing model. Some charge by the hour.
          Some charge a flat monthly rate. Some won&apos;t even tell you the price
          until you get on a sales call. I found myself keeping a spreadsheet
          just to compare basic information that should have been easy to find.
        </p>

        <p>
          I signed up for discovery calls with eight different services. I asked
          founders in my network who they used and what they actually paid. I
          read every review I could find. Most of the information online was
          surface-level at best, and flat-out wrong at worst. Pricing listed on
          review sites was outdated. Features had changed. Some services had
          quietly shut down or pivoted.
        </p>

        <p>
          I eventually found the right fit. But it shouldn&apos;t have taken that
          long.
        </p>

        <h2>What this site does</h2>

        <p>
          The EA Index is the resource I wish existed when I started looking. It
          puts real pricing, service models, pros, and cons for 20+ EA services
          in one place. You can filter by what matters to you and compare them
          side by side.
        </p>

        <p>
          For each service, I document the pricing tiers, assistant location,
          minimum commitment, onboarding speed, and who the service works best
          for. I list specific pros and cons based on research, user feedback,
          and direct experience where possible.
        </p>

        <p>
          The data is reviewed regularly. When services change their pricing or
          offerings, the site reflects that. Each service also has a detailed
          page with a longer writeup so you can go deeper before making a
          decision.
        </p>

        <h2>How the rankings work</h2>

        <p>
          Every service is scored on a combination of factors: value for money,
          quality of matching, flexibility of plans, speed of onboarding, and
          how well they serve their target audience. The Editor&apos;s Pick is
          chosen based on overall quality across all scoring criteria.
        </p>

        <h2>Who this is for</h2>

        <p>
          The EA Index is built for founders, executives, and business owners
          who are evaluating remote EA services. Whether you&apos;re spending
          $500 or $5,000 per month, you deserve clear information before
          committing.
        </p>

        <p>
          If you&apos;re new to hiring an EA, start with the{" "}
          <Link href="/" className="text-blue-600 hover:underline">
            comparison table
          </Link>
          . Filter by your budget and needs. Read the individual service pages
          for the ones that look like a fit. Then check the{" "}
          <Link href="/insights" className="text-blue-600 hover:underline">
            insights
          </Link>{" "}
          for deeper dives on specific topics like pricing models, delegation
          strategies, and what to expect in your first month.
        </p>

      </div>
    </div>
  );
}
