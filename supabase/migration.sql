-- The EA Index: Database Schema
-- Run this in your Supabase SQL editor

create table services (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  logo_url text,
  website_url text not null,
  affiliate_url text,
  tagline text,
  description text not null,
  price_range_low integer,
  price_range_high integer,
  pricing_note text,
  service_model text not null check (service_model in ('managed', 'direct_hire', 'fractional', 'marketplace')),
  assistant_location text not null check (assistant_location in ('us', 'latam', 'philippines', 'mixed', 'global')),
  min_commitment text,
  onboarding_speed text,
  best_for text[],
  pros text[],
  cons text[],
  rating numeric(2,1),
  is_editors_pick boolean default false,
  is_featured boolean default false,
  display_order integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  content text not null,
  excerpt text,
  target_keyword text,
  category text check (category in ('comparison', 'pricing', 'guide', 'opinion', 'review')),
  status text default 'draft' check (status in ('queued', 'generating', 'draft', 'published', 'archived')),
  published_at timestamptz,
  meta_title text,
  meta_description text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table blog_queue (
  id uuid primary key default gen_random_uuid(),
  topic text not null,
  target_keyword text,
  context text,
  category text check (category in ('comparison', 'pricing', 'guide', 'opinion', 'review')),
  status text default 'queued' check (status in ('queued', 'generating', 'done', 'failed')),
  created_at timestamptz default now()
);

create table clicks (
  id uuid primary key default gen_random_uuid(),
  service_id uuid references services(id),
  source text,
  referrer_slug text,
  created_at timestamptz default now()
);

-- Indexes
create index idx_services_slug on services(slug);
create index idx_services_display_order on services(display_order);
create index idx_blog_posts_slug on blog_posts(slug);
create index idx_blog_posts_status on blog_posts(status);
create index idx_blog_posts_published_at on blog_posts(published_at desc);
create index idx_blog_queue_status on blog_queue(status);
create index idx_clicks_service_id on clicks(service_id);
create index idx_clicks_created_at on clicks(created_at);

-- Enable RLS
alter table services enable row level security;
alter table blog_posts enable row level security;
alter table blog_queue enable row level security;
alter table clicks enable row level security;

-- Public read access for services and published blog posts
create policy "Public read services" on services for select using (true);
create policy "Public read published posts" on blog_posts for select using (status = 'published');
create policy "Insert clicks" on clicks for insert with check (true);

-- Service role has full access (used by API routes)
create policy "Service role full access services" on services for all using (auth.role() = 'service_role');
create policy "Service role full access blog_posts" on blog_posts for all using (auth.role() = 'service_role');
create policy "Service role full access blog_queue" on blog_queue for all using (auth.role() = 'service_role');
create policy "Service role full access clicks" on clicks for all using (auth.role() = 'service_role');
