import { createServerClient } from "@/lib/supabase";
import { Service } from "@/lib/types";
import ComparisonTable from "@/components/ComparisonTable";

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

export default async function Home() {
  const services = await getServices();

  return (
    <div className="max-w-table mx-auto px-6 py-12">
      <p className="text-text-muted text-body mb-10 max-w-2xl">
        We compared {services.length || 12} remote executive assistant services
        by price, service model, and who they&apos;re best for. Updated April
        2026.
      </p>

      <ComparisonTable services={services} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "The EA Index",
            url: process.env.NEXT_PUBLIC_SITE_URL,
            description:
              "Independent comparison site for remote executive assistant services.",
          }),
        }}
      />
    </div>
  );
}
