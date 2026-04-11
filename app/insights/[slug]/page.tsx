import { createServerClient } from "@/lib/supabase";
import { BlogPost, CATEGORY_LABELS } from "@/lib/types";
import { marked } from "marked";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 3600;

async function getPost(slug: string): Promise<BlogPost | null> {
  const supabase = createServerClient();
  const { data } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();
  return data as BlogPost | null;
}

async function getRelatedPosts(
  currentId: string,
  category: string
): Promise<BlogPost[]> {
  const supabase = createServerClient();
  const { data } = await supabase
    .from("blog_posts")
    .select("id, title, slug")
    .eq("status", "published")
    .eq("category", category)
    .neq("id", currentId)
    .limit(3);
  return (data as BlogPost[]) || [];
}

export async function generateStaticParams() {
  const supabase = createServerClient();
  const { data } = await supabase
    .from("blog_posts")
    .select("slug")
    .eq("status", "published");
  return (data || []).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return {};
  return {
    title: post.meta_title || `${post.title} | The EA Index`,
    description: post.meta_description || post.excerpt || "",
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function readingTime(content: string): string {
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / 250);
  return `${minutes} min read`;
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const contentHtml = marked(post.content);
  const related = await getRelatedPosts(post.id, post.category);

  return (
    <article className="max-w-article mx-auto px-6 py-12">
      {/* Meta */}
      <div className="flex items-center gap-3 mb-4">
        {post.published_at && (
          <time className="text-xs text-gray-400">
            {formatDate(post.published_at)}
          </time>
        )}
        {post.category && (
          <span className="text-[11px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full lowercase">
            {CATEGORY_LABELS[post.category]}
          </span>
        )}
        <span className="text-xs text-gray-400">
          {readingTime(post.content)}
        </span>
      </div>

      {/* Title */}
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-8 leading-tight tracking-tight">
        {post.title}
      </h1>

      {/* Content */}
      <div
        className="prose mb-12"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      {/* Author */}
      <p className="text-sm text-gray-400 mb-12">
        Written by the team at The EA Index
      </p>

      {/* Compare CTA */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12 text-center">
        <p className="text-sm text-gray-500 mb-3">
          Looking for the right EA service?
        </p>
        <Link href="/compare" className="btn-gradient text-sm px-6 py-2.5 inline-block">
          Compare all services side by side
        </Link>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <div className="border-t border-gray-200 pt-10">
          <h2 className="font-heading text-lg font-semibold text-navy mb-4">
            Related articles
          </h2>
          <div className="space-y-3">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/insights/${p.slug}`}
                className="block text-sm text-gray-700 hover:text-blue-600 transition-colors"
              >
                {p.title}
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
            "@type": "Article",
            headline: post.title,
            datePublished: post.published_at,
            author: {
              "@type": "Organization",
              name: "The EA Index",
            },
          }),
        }}
      />
    </article>
  );
}
