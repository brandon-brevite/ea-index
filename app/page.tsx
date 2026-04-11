import { createServerClient } from "@/lib/supabase";
import { Service } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 3600;

async function getServices(): Promise<Service[]> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("is_featured", true)
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching services:", error);
    return [];
  }
  return data as Service[];
}

const FEATURED_SLUGS = ["noire", "athena", "boldly", "time-etc", "double"];

function StarRating({ rating }: { rating: number | null }) {
  if (!rating) return null;
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.25;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < full
              ? "text-yellow-400"
              : i === full && hasHalf
              ? "text-yellow-300"
              : "text-gray-200"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
      <span className="text-sm text-gray-500 ml-1">{rating.toFixed(1)}</span>
    </div>
  );
}

export default async function Home() {
  const services = await getServices();
  const serviceCount = services.length || 22;

  const featured = FEATURED_SLUGS.map((slug) =>
    services.find((s) => s.slug === slug)
  ).filter(Boolean) as Service[];

  // Fallback: if we can't match slugs, take the first 5
  const displayServices = featured.length >= 4 ? featured : services.slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="max-w-content mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="max-w-3xl flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Free comparison tool
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-navy leading-[1.1] tracking-tight mb-6">
                Find the right executive
                <br />
                assistant service
              </h1>

              <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mb-10">
                Isn&apos;t it time you stopped doing everything yourself?
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/quiz" className="btn-gradient text-base px-8 py-3.5">
                  Find my match
                </Link>
                <Link
                  href="/compare"
                  className="btn-outline text-base px-8 py-3.5"
                >
                  Browse all services
                </Link>
              </div>
            </div>

            <div className="flex-shrink-0 w-full md:w-[380px] lg:w-[440px]">
              <Image
                src="/hero-ea.avif"
                alt="Executive assistant at work"
                width={440}
                height={587}
                className="rounded-2xl shadow-lg object-cover w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white">
        <div className="max-w-content mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-14">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy tracking-tight">
              How it works
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Three steps to finding the right EA service for your workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                step: "01",
                title: "Tell us what you need",
                description:
                  "Take a 2-minute quiz about your budget, hours, and preferences.",
              },
              {
                step: "02",
                title: "Get matched",
                description:
                  "We recommend the best-fit services based on your answers.",
              },
              {
                step: "03",
                title: "Compare and decide",
                description:
                  "Review detailed breakdowns, pricing, and real pros and cons.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 font-heading font-bold text-sm mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-gray-50">
        <div className="max-w-content mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-14">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy tracking-tight">
              Featured services
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Top-rated EA services across different models and price points.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayServices.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="bg-white border border-gray-200 rounded-2xl shadow-card p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-200 group relative"
              >
                {service.is_editors_pick && (
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
                    Editor&apos;s Pick
                  </span>
                )}
                <h3 className="font-heading text-lg font-semibold text-navy mb-1 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
                {service.tagline && (
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                    {service.tagline}
                  </p>
                )}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                  <span className="text-sm font-medium text-navy">
                    {service.price_range_low && service.price_range_high
                      ? `$${service.price_range_low}–$${service.price_range_high}/mo`
                      : "Contact for pricing"}
                  </span>
                  <StarRating rating={service.rating} />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/compare"
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center gap-1"
            >
              Browse all {serviceCount}+ services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Compare */}
      <section className="bg-white">
        <div className="max-w-content mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-14">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy tracking-tight">
              What we compare
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              No more guesswork. We break down the details that actually matter.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Pricing",
                description:
                  "Real numbers, not 'contact us.' Monthly costs, hourly rates, and what's included at each tier.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: "Service model",
                description:
                  "Managed vs fractional vs marketplace vs direct hire — and what each model actually means for your day-to-day.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Assistant quality",
                description:
                  "US-based vs offshore, vetting process, experience level, and how replacements work if it's not a fit.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Flexibility",
                description:
                  "Contract length, minimums, onboarding speed, and how easy it is to scale up, pause, or cancel.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border border-gray-200 rounded-2xl shadow-card p-6"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 mb-4">
                  {card.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Preview */}
      <section className="bg-gray-50">
        <div className="max-w-content mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-14">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy tracking-tight">
              Resources
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Guides, head-to-head comparisons, and tool recommendations to help you get more from your EA.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                href: "/vs",
                title: "Head-to-head comparisons",
                description:
                  "Athena vs Boldly, Belay vs Time Etc, and more side-by-side breakdowns of popular EA services.",
              },
              {
                href: "/best-tools",
                title: "Best tools for EAs",
                description:
                  "Recommended software for scheduling, project management, communication, and more.",
              },
              {
                href: "/tactics",
                title: "Delegation tactics",
                description:
                  "Frameworks, first-week playbooks, and common mistakes to avoid when working with an EA.",
              },
            ].map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="bg-white border border-gray-200 rounded-2xl shadow-card p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-200 group"
              >
                <h3 className="font-heading text-lg font-semibold text-navy mb-2 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {resource.description}
                </p>
                <span className="text-blue-600 text-sm font-medium mt-4 inline-flex items-center gap-1">
                  Explore
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white">
        <div className="max-w-content mx-auto px-6 py-16 md:py-24">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy tracking-tight mb-4">
              Not sure where to start?
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Answer a few quick questions and we will recommend the best EA services for your needs, budget, and workflow.
            </p>
            <Link href="/quiz" className="btn-gradient text-base px-8 py-3.5">
              Take the quiz
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "The EA Index",
            url: process.env.NEXT_PUBLIC_SITE_URL,
            description:
              "Comparison tool for remote executive assistant services.",
          }),
        }}
      />
    </>
  );
}
