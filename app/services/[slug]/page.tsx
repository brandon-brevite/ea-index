import { createServerClient } from "@/lib/supabase";
import { Service, BlogPost, SERVICE_MODEL_LABELS, LOCATION_LABELS } from "@/lib/types";
import { marked } from "marked";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import VisitButton from "@/components/VisitButton";

export const revalidate = 3600;

async function getService(slug: string): Promise<Service | null> {
  const supabase = createServerClient();
  const { data } = await supabase
    .from("services")
    .select("*")
    .eq("slug", slug)
    .single();
  return data as Service | null;
}

async function getRelatedPosts(serviceName: string): Promise<BlogPost[]> {
  const supabase = createServerClient();
  const { data } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published")
    .or(`title.ilike.%${serviceName}%,content.ilike.%${serviceName}%`)
    .limit(3);
  return (data as BlogPost[]) || [];
}

export async function generateStaticParams() {
  const supabase = createServerClient();
  const { data } = await supabase.from("services").select("slug");
  return (data || []).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = await getService(params.slug);
  if (!service) return {};

  const priceText =
    service.price_range_low && service.price_range_high
      ? `$${service.price_range_low.toLocaleString()}-$${service.price_range_high.toLocaleString()}/month`
      : "Contact for pricing";

  return {
    title: `${service.name} Review: Pricing, Pros, Cons | The EA Index`,
    description: `${service.name} costs ${priceText}. Here's what you get, who it's for, and what to watch out for.`,
  };
}

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = await getService(params.slug);
  if (!service) notFound();

  const relatedPosts = await getRelatedPosts(service.name);
  const descriptionHtml = marked(service.description);

  const priceDisplay =
    service.price_range_low && service.price_range_high
      ? `$${service.price_range_low.toLocaleString()} - $${service.price_range_high.toLocaleString()}/mo`
      : "Contact for pricing";

  return (
    <div className="max-w-article mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy tracking-tight">
            {service.name}
          </h1>
          {service.is_editors_pick && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2.5 py-0.5 rounded-full">
              Editor&apos;s Pick
            </span>
          )}
        </div>
        {service.tagline && (
          <p className="text-gray-500 text-body">{service.tagline}</p>
        )}
      </div>

      {/* Price */}
      <div className="text-2xl font-bold text-navy mb-8">{priceDisplay}</div>

      {/* Trustpilot */}
      {service.trustpilot_rating && (
        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center gap-1.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 1L12.94 6.96L19.5 7.91L14.75 12.54L15.88 19.07L10 16L4.12 19.07L5.25 12.54L0.5 7.91L7.06 6.96L10 1Z" fill="#00B67A"/>
            </svg>
            <span className="text-sm font-semibold text-gray-700">{service.trustpilot_rating.toFixed(1)}</span>
            <span className="text-sm text-gray-400">on Trustpilot</span>
          </div>
          {service.trustpilot_url && (
            <a
              href={service.trustpilot_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline"
            >
              View reviews
            </a>
          )}
        </div>
      )}

      {/* Quick facts */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-10 grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
            Service model
          </p>
          <p className="text-sm font-semibold text-gray-700">
            {SERVICE_MODEL_LABELS[service.service_model]}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
            Assistant location
          </p>
          <p className="text-sm font-semibold text-gray-700">
            {LOCATION_LABELS[service.assistant_location]}
          </p>
        </div>
        {service.min_commitment && (
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
              Minimum commitment
            </p>
            <p className="text-sm font-semibold text-gray-700">{service.min_commitment}</p>
          </div>
        )}
        {service.onboarding_speed && (
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
              Onboarding speed
            </p>
            <p className="text-sm font-semibold text-gray-700">{service.onboarding_speed}</p>
          </div>
        )}
      </div>

      {/* Description */}
      <div
        className="prose mb-10"
        dangerouslySetInnerHTML={{ __html: descriptionHtml }}
      />

      {/* Pros */}
      {service.pros.length > 0 && (
        <div className="mb-8">
          <h2 className="font-heading text-lg font-semibold text-navy mb-3">
            What works well
          </h2>
          <ul className="space-y-2">
            {service.pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-teal mt-0.5 shrink-0 font-bold">+</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Cons */}
      {service.cons.length > 0 && (
        <div className="mb-10">
          <h2 className="font-heading text-lg font-semibold text-navy mb-3">
            What to watch out for
          </h2>
          <ul className="space-y-2">
            {service.cons.map((con, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-gray-400 mt-0.5 shrink-0">-</span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA */}
      <VisitButton service={service} source="service_page" />

      {/* Back link */}
      <div className="mt-8">
        <Link
          href="/"
          className="text-sm text-blue-600 hover:underline"
        >
          Compare with other services
        </Link>
      </div>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <div className="mt-16 pt-10 border-t border-gray-200">
          <h2 className="font-heading text-lg font-semibold text-navy mb-4">
            Related articles
          </h2>
          <div className="space-y-3">
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                href={`/insights/${post.slug}`}
                className="block text-sm text-gray-700 hover:text-blue-600 transition-colors"
              >
                {post.title}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: {
              "@type": "Product",
              name: service.name,
              url: service.website_url,
            },
            reviewRating: service.rating
              ? {
                  "@type": "Rating",
                  ratingValue: service.rating,
                  bestRating: 5,
                }
              : undefined,
            author: {
              "@type": "Organization",
              name: "The EA Index",
            },
          }),
        }}
      />
    </div>
  );
}
