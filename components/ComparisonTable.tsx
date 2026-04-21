"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Service,
  ServiceModel,
  SERVICE_MODEL_LABELS,
  LOCATION_LABELS,
} from "@/lib/types";
import { supabase } from "@/lib/supabase";

type SortKey = "price_low" | "price_high";

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
  const [sortBy, setSortBy] = useState<SortKey>("price_low");
  const [filterModel, setFilterModel] = useState<ServiceModel | "all">("all");
  const [filterLocation, setFilterLocation] = useState<string>("all");
  const [filterBestFor, setFilterBestFor] = useState<string>("all");

  const filtered = useMemo(() => {
    let result = [...services];

    if (filterModel !== "all") {
      result = result.filter((s) => s.service_model === filterModel);
    }
    if (filterLocation === "us") {
      result = result.filter((s) => s.assistant_location === "us");
    } else if (filterLocation === "remote") {
      result = result.filter((s) => s.assistant_location !== "us");
    }
    if (filterBestFor !== "all") {
      result = result.filter((s) => s.best_for.includes(filterBestFor));
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case "price_low":
          return (a.price_range_low ?? 99999) - (b.price_range_low ?? 99999);
        case "price_high":
          return (b.price_range_high ?? 0) - (a.price_range_high ?? 0);
        default:
          return a.display_order - b.display_order;
      }
    });

    return result;
  }, [services, sortBy, filterModel, filterLocation, filterBestFor]);

  const selectClasses =
    "text-sm font-medium border border-gray-200 rounded-pill px-4 py-2 bg-white text-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all cursor-pointer appearance-none";

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <select
          value={filterModel}
          onChange={(e) =>
            setFilterModel(e.target.value as ServiceModel | "all")
          }
          className={selectClasses}
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
          onChange={(e) => setFilterLocation(e.target.value)}
          className={selectClasses}
        >
          <option value="all">All locations</option>
          <option value="us">US-based</option>
          <option value="remote">Remote</option>
        </select>

        <select
          value={filterBestFor}
          onChange={(e) => setFilterBestFor(e.target.value)}
          className={selectClasses}
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
          className={selectClasses}
        >
          <option value="price_low">Sort: Price (low to high)</option>
          <option value="price_high">Sort: Price (high to low)</option>
        </select>
      </div>

      {/* Table */}
      <div className="table-scroll overflow-x-auto -mx-6 px-6">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-card overflow-hidden min-w-[800px]">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-3.5 px-5 text-left">
                  Service
                </th>
                <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-3.5 px-5 text-left">
                  Price
                </th>
                <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-3.5 px-5 text-left hidden sm:table-cell">
                  Model
                </th>
                <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-3.5 px-5 text-left hidden md:table-cell">
                  Location
                </th>
                <th className="text-xs font-semibold text-gray-400 uppercase tracking-wider py-3.5 px-5 text-left hidden lg:table-cell">
                  Best for
                </th>
                <th className="py-3.5 px-5">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((service, i) => {
                const rank = i + 1;
                return (
                <tr
                  key={service.id}
                  className={`border-b border-gray-100 last:border-b-0 transition-colors hover:bg-blue-50/30 ${
                    i % 2 === 1 ? "bg-gray-50/30" : ""
                  }`}
                >
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-semibold text-gray-400 min-w-[18px]">
                        {`${rank}.`}
                      </span>
                      <Link
                        href={`/services/${service.slug}`}
                        className="font-semibold text-navy hover:text-blue-600 transition-colors"
                      >
                        {service.name}
                      </Link>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-sm font-medium text-gray-700 whitespace-nowrap">
                    {formatPrice(service)}
                  </td>
                  <td className="py-4 px-5 text-sm text-gray-500 hidden sm:table-cell">
                    {SERVICE_MODEL_LABELS[service.service_model]}
                  </td>
                  <td className="py-4 px-5 text-sm text-gray-500 hidden md:table-cell">
                    {LOCATION_LABELS[service.assistant_location]}
                  </td>
                  <td className="py-4 px-5 hidden lg:table-cell">
                    <div className="flex flex-wrap gap-1.5">
                      {service.best_for.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full capitalize"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-5">
                    <a
                      href={service.affiliate_url || service.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackClick(service.id)}
                      className="btn-gradient text-xs font-semibold px-5 py-2 whitespace-nowrap inline-block"
                    >
                      Visit site
                    </a>
                  </td>
                </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-16 text-sm">
          No services match your filters.
        </p>
      )}

    </div>
  );
}
