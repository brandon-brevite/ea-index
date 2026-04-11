import { createServerClient } from "@/lib/supabase";
import { BlogPost, CATEGORY_LABELS } from "@/lib/types";
import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog | The EA Index",
  description:
    "Articles about executive assistant services, pricing, hiring, and delegation for founders and executives.",
};

async function getPosts(page: number): Promise<{ posts: BlogPost[]; total: number }> {
  const supabase = createServerClient();
  const perPage = 10;
  const from = (page - 1) * perPage;
  const to = from + perPage - 1;

  const { data, count } = await supabase
    .from("blog_posts")
    .select("*", { count: "exact" })
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .range(from, to);

  return { posts: (data as BlogPost[]) || [], total: count || 0 };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogIndex({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = parseInt(searchParams.page || "1", 10);
  const { posts, total } = await getPosts(page);
  const totalPages = Math.ceil(total / 10);

  return (
    <div className="max-w-article mx-auto px-6 py-12">
      <h1 className="font-serif text-3xl sm:text-4xl text-text mb-10">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-text-muted text-body">No posts yet. Check back soon.</p>
      ) : (
        <div className="space-y-10">
          {posts.map((post) => (
            <article key={post.id} className="border-b border-border-light pb-8">
              <div className="flex items-center gap-3 mb-2">
                {post.published_at && (
                  <time className="text-xs text-text-muted">
                    {formatDate(post.published_at)}
                  </time>
                )}
                {post.category && (
                  <span className="text-[11px] text-text-muted bg-border-light px-2 py-0.5 rounded-full lowercase">
                    {CATEGORY_LABELS[post.category]}
                  </span>
                )}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <h2 className="font-serif text-xl text-text group-hover:text-accent transition-colors mb-2">
                  {post.title}
                </h2>
              </Link>
              {post.excerpt && (
                <p className="text-sm text-text-muted line-clamp-2">
                  {post.excerpt}
                </p>
              )}
            </article>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-12">
          {page > 1 && (
            <Link
              href={`/blog?page=${page - 1}`}
              className="text-sm text-accent hover:underline"
            >
              Previous
            </Link>
          )}
          <span className="text-sm text-text-muted">
            Page {page} of {totalPages}
          </span>
          {page < totalPages && (
            <Link
              href={`/blog?page=${page + 1}`}
              className="text-sm text-accent hover:underline"
            >
              Next
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
