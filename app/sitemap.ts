import { MetadataRoute } from "next";
import { createServerClient } from "@/lib/supabase";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.theeaindex.com";
  const supabase = createServerClient();

  const [servicesRes, postsRes] = await Promise.all([
    supabase.from("services").select("slug, updated_at"),
    supabase
      .from("blog_posts")
      .select("slug, published_at")
      .eq("status", "published"),
  ]);

  const services = servicesRes.data || [];
  const posts = postsRes.data || [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quiz`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    // Resource indexes
    {
      url: `${baseUrl}/vs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/best-tools`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tactics`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // VS pages
    ...["athena-vs-boldly", "belay-vs-time-etc", "zirtual-vs-fancy-hands", "noire-vs-athena", "myoutdesk-vs-stealth-agents", "persona-vs-proassisting"].map((slug) => ({
      url: `${baseUrl}/vs/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    // Best tools pages
    ...["communication", "project-management", "scheduling", "password-sharing", "email-management"].map((slug) => ({
      url: `${baseUrl}/best-tools/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    // Tactics pages
    ...["first-week-with-your-ea", "what-to-delegate", "delegation-frameworks", "when-to-upgrade", "common-mistakes"].map((slug) => ({
      url: `${baseUrl}/tactics/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...services.map((s) => ({
      url: `${baseUrl}/services/${s.slug}`,
      lastModified: new Date(s.updated_at),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...posts.map((p) => ({
      url: `${baseUrl}/insights/${p.slug}`,
      lastModified: new Date(p.published_at),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
