"use client";

import { Service } from "@/lib/types";
import { supabase } from "@/lib/supabase";

export default function VisitButton({
  service,
  source,
}: {
  service: Service;
  source: string;
}) {
  async function handleClick() {
    await supabase.from("clicks").insert({
      service_id: service.id,
      source,
    });
  }

  return (
    <a
      href={service.affiliate_url || service.website_url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="btn-gradient inline-block text-sm font-semibold px-6 py-2.5"
    >
      Visit {service.name}
    </a>
  );
}
