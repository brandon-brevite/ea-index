export interface Service {
  id: string;
  name: string;
  slug: string;
  logo_url: string | null;
  website_url: string;
  affiliate_url: string | null;
  tagline: string | null;
  description: string;
  price_range_low: number | null;
  price_range_high: number | null;
  pricing_note: string | null;
  service_model: "managed" | "direct_hire" | "fractional" | "marketplace";
  assistant_location: "us" | "latam" | "philippines" | "mixed" | "global";
  min_commitment: string | null;
  onboarding_speed: string | null;
  best_for: string[];
  pros: string[];
  cons: string[];
  rating: number | null;
  is_editors_pick: boolean;
  is_featured: boolean;
  trustpilot_rating: number | null;
  trustpilot_url: string | null;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  target_keyword: string | null;
  category: "comparison" | "pricing" | "guide" | "opinion" | "review";
  status: "queued" | "generating" | "draft" | "published" | "archived";
  published_at: string | null;
  meta_title: string | null;
  meta_description: string | null;
  created_at: string;
  updated_at: string;
}

export interface BlogQueueItem {
  id: string;
  topic: string;
  target_keyword: string | null;
  context: string | null;
  category: "comparison" | "pricing" | "guide" | "opinion" | "review";
  status: "queued" | "generating" | "done" | "failed";
  created_at: string;
}

export interface Click {
  id: string;
  service_id: string;
  source: string;
  referrer_slug: string | null;
  created_at: string;
}

export type ServiceModel = Service["service_model"];
export type AssistantLocation = Service["assistant_location"];
export type BlogCategory = BlogPost["category"];

export const SERVICE_MODEL_LABELS: Record<ServiceModel, string> = {
  managed: "Managed",
  direct_hire: "Direct Hire",
  fractional: "Fractional",
  marketplace: "Marketplace",
};

export const LOCATION_LABELS: Record<AssistantLocation, string> = {
  us: "US-based",
  latam: "Remote",
  philippines: "Remote",
  mixed: "Remote",
  global: "Remote",
};

export const BEST_FOR_OPTIONS = [
  "founders",
  "executives",
  "enterprise",
  "solopreneurs",
  "small business",
  "teams",
] as const;

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  comparison: "Comparison",
  pricing: "Pricing",
  guide: "Guide",
  opinion: "Opinion",
  review: "Review",
};
