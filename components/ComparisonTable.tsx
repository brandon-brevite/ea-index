"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Service,
  ServiceModel,
  AssistantLocation,
  SERVICE_MODEL_LABELS,
  LOCATION_LABELS,
} from "@/lib/types";
import { supabase } from "@/lib/supabase";

type SortKey = "price_low" | "price_high" | "rating";

function formatPrice(service: Service): string {
  if (!service.price_range_low && !service.price_range_high) {
    return "Contact for pricing";
  }
  const low = service.price_range_low
    ? `$${service.price_range_low.toLocaleString()}`
    : "";
  const high = service.price_range_high
    ? `$${service.price_range_high.toLocaleString()}`
    : "";
  if (low && high) return `${low} - ${high}/mo`;
  if (low) return `${low}/mo`;
  return `${high}/mo`;
}

function RatingStars({ rating }: { rating: number | null }) {
  if (!rating) return <span className="text-text-muted text-sm">N/A</span>;
  return (
    <span className="text-sm font-medium text-text">
      {rating.toFixed(1)}
      <span className="text-text-muted">/5</span>
    </span>
  );
}

async function trackClick(serviceId: string) {
  await supabase.from("clicks").insert({
    service_id: serviceId,
    source: "comparison_table",
  });
}

export default function ComparisonTable({
  services,
}: {
  services: Service[];
}) {
  const [sortBy, setSortBy] = useState<SortKey>("rating");
  const [filterModel, setFilterModel] = useState<ServiceModel | "all">("all");
  const [filterLocation, setFilterLocation] = useState<
    AssistantLocation | "all"
  >("all");
  const [filterBestFor, setFilterBestFor] = useState<string>("all");

  const filtered = useMemo(() => {
    let result = [...services];

    if (filterModel !== "all") {
      result = result.filter((s) => s.service_model === filterModel);
    }
    if (filterLocation !== "all") {
      result = result.filter((s) => s.assistant_location === filterLocation);
    }
    if (filterBestFor !== "all") {
      result = result.filter((s) => s.best_for.includes(filterBestFor));
    }

    // Always keep Noire at top
    const noire = result.filter((s) => s.is_editors_pick);
    const rest = result.filter((s) => !s.is_editors_pick);

    rest.sort((a, b) => {
      switch (sortBy) {
        case "price_low":
          return (a.price_range_low ?? 99999) - (b.price_range_low ?? 99999);
        case "price_high":
          return (b.price_range_high ?? 0) - (a.price_range_high ?? 0);
        case "rating":
          return (b.rating ?? 0) - (a.rating ?? 0);
        default:
          return a.display_order - b.display_order;
      }
    });

    return [...noire, ...rest];
  }, [services, sortBy, filterModel, filterLocation, filterBestFor]);

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <select
          value={filterModel}
          onChange={(e) =>
            setFilterModel(e.target.value as ServiceModel | "all")
          }
          className="text-sm border border-border rounded-md px-3 py-1.5 bg-bg text-text focus:outline-none focus:border-accent"
        >
          <option value="all">All models</option>
          {Object.entries(SERVICE_MODEL_LABELS).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>

        <select
          value={filterLocation}
          onChange={(e) =>
            setFilterLocation(e.target.value as AssistantLocation | "all")
          }
          className="text-sm border border-border rounded-md px-3 py-1.5 bg-bg text-text focus:outline-none focus:border-accent"
        >
          <option value="all">All locations</option>
          {Object.entries(LOCATION_LABELS).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>

        <select
          value={filterBestFor}
          onChange={(e) => setFilterBestFor(e.target.value)}
          className="text-sm border border-border rounded-md px-3 py-1.5 bg-bg text-text focus:outline-none focus:border-accent"
        >
          <option value="all">Best for: anyone</option>
          <option value="founders">Founders</option>
          <option value="executives">Executives</option>
          <option value="enterprise">Enterprise</option>
          <option value="solopreneurs">Solopreneurs</option>
          <option value="small business">Small business</option>
          <option value="teams">Teams</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortKey)}
          className="text-sm border border-border rounded-md px-3 py-1.5 bg-bg text-text focus:outline-none focus:border-accent"
        >
          <option value="rating">Sort: Rating</option>
          <option value="price_low">Sort: Price (low to high)</option>
          <option value="price_high">Sort: Price (high to low)</option>
        </select>
      </div>

      {/* Table */}
      <div className="table-scroll overflow-x-auto -mx-6 px-6">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="text-xs font-medium text-text-muted uppercase tracking-wider pb-3 pr-4">
                Service
              </th>
              <th className="text-xs font-medium text-text-muted uppercase tracking-wider pb-3 pr-4">
                Price
              </th>
              <th className="text-xs font-medium text-text-muted uppercase tracking-wider pb-3 pr-4 hidden sm:table-cell">
                Model
              </th>
              <th className="text-xs font-medium text-text-muted uppercase tracking-wider pb-3 pr-4 hidden md:table-cell">
                Location
              </th>
              <th className="text-xs font-medium text-text-muted uppercase tracking-wider pb-3 pr-4 hidden lg:table-cell">
                Best for
              </th>
              <th className="text-xs font-medium text-text-muted uppercase tracking-wider pb-3 pr-4">
                Rating
              </th>
              <th className="text-xs font-medium text-text-muted uppercase tracking-wider pb-3">
                &nbsp;
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((service, i) => (
              <tr
                key={service.id}
                className={`border-b border-border-light ${
                  service.is_editors_pick
                    ? "bg-accent-light border-l-2 border-l-accent"
                    : i % 2 === 1
                    ? "bg-row-alt"
                    : ""
                }`}
              >
                <td className="py-4 pr-4">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="font-medium text-text hover:text-accent transition-colors"
                    >
                      {service.name}
                    </Link>
                    {service.is_editors_pick && (
                      <span className="text-[10px] font-medium uppercase tracking-wider bg-accent text-white px-2 py-0.5 rounded-full whitespace-nowrap">
                        Editor&apos;s Pick
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-4 pr-4 text-sm whitespace-nowrap">
                  {formatPrice(service)}
                </td>
                <td className="py-4 pr-4 text-sm text-text-muted hidden sm:table-cell">
                  {SERVICE_MODEL_LABELS[service.service_model]}
                </td>
                <td className="py-4 pr-4 text-sm text-text-muted hidden md:table-cell">
                  {LOCATION_LABELS[service.assistant_location]}
                </td>
                <td className="py-4 pr-4 hidden lg:table-cell">
                  <div className="flex flex-wrap gap-1">
                    {service.best_for.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-text-muted bg-border-light px-2 py-0.5 rounded-full capitalize"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-4 pr-4">
                  <RatingStars rating={service.rating} />
                </td>
                <td className="py-4">
                  <a
                    href={service.affiliate_url || service.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClick(service.id)}
                    className="text-sm font-medium border border-accent text-accent hover:bg-accent hover:text-white px-4 py-1.5 rounded-md transition-colors whitespace-nowrap"
                  >
                    Visit site
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-text-muted py-12 text-sm">
          No services match your filters.
        </p>
      )}

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <p className="text-text-muted text-sm mb-2">
          Not sure which is right for you?
        </p>
        <a
          href="https://noireea.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-accent hover:underline"
        >
          Talk to Noire about your needs
        </a>
      </div>
    </div>
  );
}
