"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { BlogPost, BlogQueueItem, Service, CATEGORY_LABELS } from "@/lib/types";
import { marked } from "marked";

type Tab = "drafts" | "published" | "queue" | "services";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("drafts");

  const [drafts, setDrafts] = useState<BlogPost[]>([]);
  const [published, setPublished] = useState<BlogPost[]>([]);
  const [queue, setQueue] = useState<BlogQueueItem[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [previewPost, setPreviewPost] = useState<BlogPost | null>(null);
  const [newTopic, setNewTopic] = useState("");
  const [newKeyword, setNewKeyword] = useState("");
  const [newCategory, setNewCategory] = useState<string>("guide");
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function checkAuth() {
    const { data } = await supabase.auth.getSession();
    if (data.session) {
      setIsAuthenticated(true);
      loadData();
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setLoginError(error.message);
    } else {
      setIsAuthenticated(true);
      loadData();
    }
  }

  async function loadData() {
    const [draftsRes, publishedRes, queueRes, servicesRes] = await Promise.all([
      supabase
        .from("blog_posts")
        .select("*")
        .in("status", ["draft", "generating"])
        .order("created_at", { ascending: false }),
      supabase
        .from("blog_posts")
        .select("*")
        .eq("status", "published")
        .order("published_at", { ascending: false }),
      supabase
        .from("blog_queue")
        .select("*")
        .order("created_at", { ascending: true }),
      supabase
        .from("services")
        .select("*")
        .order("display_order", { ascending: true }),
    ]);

    setDrafts((draftsRes.data as BlogPost[]) || []);
    setPublished((publishedRes.data as BlogPost[]) || []);
    setQueue((queueRes.data as BlogQueueItem[]) || []);
    setServices((servicesRes.data as Service[]) || []);
  }

  async function publishPost(post: BlogPost) {
    await supabase
      .from("blog_posts")
      .update({ status: "published", published_at: new Date().toISOString() })
      .eq("id", post.id);
    loadData();
  }

  async function savePost(post: BlogPost) {
    await supabase
      .from("blog_posts")
      .update({ content: post.content, title: post.title })
      .eq("id", post.id);
    setEditingPost(null);
    loadData();
  }

  async function addToQueue(e: React.FormEvent) {
    e.preventDefault();
    if (!newTopic.trim()) return;
    await supabase.from("blog_queue").insert({
      topic: newTopic,
      target_keyword: newKeyword || null,
      category: newCategory,
    });
    setNewTopic("");
    setNewKeyword("");
    loadData();
  }

  async function triggerGeneration() {
    setGenerating(true);
    try {
      const res = await fetch("/api/generate-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_CRON_SECRET || ""}`,
        },
      });
      const data = await res.json();
      if (data.ok) {
        loadData();
      }
    } finally {
      setGenerating(false);
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="max-w-sm mx-auto px-6 py-20">
        <h1 className="font-heading text-2xl font-bold text-navy mb-6">Admin Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
          />
          {loginError && (
            <p className="text-red-600 text-sm">{loginError}</p>
          )}
          <button
            type="submit"
            className="w-full btn-gradient py-2.5 text-sm font-semibold"
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-content mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading text-2xl font-bold text-navy">Admin</h1>
        <button
          onClick={() => {
            supabase.auth.signOut();
            setIsAuthenticated(false);
          }}
          className="text-sm text-gray-400 hover:text-navy"
        >
          Sign out
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-gray-200 mb-8">
        {(["drafts", "published", "queue", "services"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm capitalize border-b-2 -mb-px transition-colors ${
              activeTab === tab
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-400 hover:text-navy"
            }`}
          >
            {tab}
            {tab === "drafts" && drafts.length > 0 && (
              <span className="ml-1.5 text-xs bg-blue-600 text-white px-1.5 py-0.5 rounded-full">
                {drafts.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Drafts tab */}
      {activeTab === "drafts" && (
        <div className="space-y-4">
          {drafts.length === 0 ? (
            <p className="text-gray-400 text-sm">No drafts.</p>
          ) : (
            drafts.map((post) => (
              <div
                key={post.id}
                className="border border-gray-200 rounded-2xl p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-sm text-navy">{post.title}</h3>
                    <p className="text-xs text-gray-400 mt-1">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() => setPreviewPost(post)}
                      className="text-xs border border-gray-200 rounded-lg px-3 py-1 hover:bg-gray-50"
                    >
                      Preview
                    </button>
                    <button
                      onClick={() => setEditingPost(post)}
                      className="text-xs border border-gray-200 rounded-lg px-3 py-1 hover:bg-gray-50"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => publishPost(post)}
                      className="btn-gradient text-xs px-3 py-1"
                    >
                      Publish
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Published tab */}
      {activeTab === "published" && (
        <div className="space-y-3">
          {published.length === 0 ? (
            <p className="text-gray-400 text-sm">No published posts.</p>
          ) : (
            published.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between border-b border-gray-100 pb-3"
              >
                <div>
                  <p className="text-sm font-semibold text-navy">{post.title}</p>
                  <p className="text-xs text-gray-400">
                    {post.published_at &&
                      new Date(post.published_at).toLocaleDateString()}
                  </p>
                </div>
                <a
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  className="text-xs text-blue-600 hover:underline"
                >
                  View
                </a>
              </div>
            ))
          )}
        </div>
      )}

      {/* Queue tab */}
      {activeTab === "queue" && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-semibold text-navy">Blog Queue</h2>
            <button
              onClick={() => triggerGeneration()}
              disabled={generating}
              className="btn-gradient text-xs px-4 py-1.5 disabled:opacity-50"
            >
              {generating ? "Generating..." : "Generate next post"}
            </button>
          </div>

          {/* Add to queue */}
          <form
            onSubmit={addToQueue}
            className="flex gap-2 mb-6 flex-wrap"
          >
            <input
              type="text"
              placeholder="Topic"
              value={newTopic}
              onChange={(e) => setNewTopic(e.target.value)}
              className="flex-1 min-w-[200px] border border-gray-200 rounded-xl px-3 py-1.5 text-sm bg-white focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Target keyword"
              value={newKeyword}
              onChange={(e) => setNewKeyword(e.target.value)}
              className="w-48 border border-gray-200 rounded-xl px-3 py-1.5 text-sm bg-white focus:outline-none focus:border-blue-500"
            />
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="border border-gray-200 rounded-xl px-3 py-1.5 text-sm bg-white focus:outline-none focus:border-blue-500"
            >
              {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="btn-outline text-sm px-4 py-1.5"
            >
              Add
            </button>
          </form>

          {/* Queue list */}
          <div className="space-y-2">
            {queue.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-100 pb-2"
              >
                <div>
                  <p className="text-sm text-gray-700">{item.topic}</p>
                  <p className="text-xs text-gray-400">
                    {item.target_keyword && `Keyword: ${item.target_keyword}`}
                    {item.category && ` / ${item.category}`}
                  </p>
                </div>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                    item.status === "queued"
                      ? "bg-gray-100 text-gray-500"
                      : item.status === "done"
                      ? "bg-green-100 text-green-700"
                      : item.status === "failed"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Services tab */}
      {activeTab === "services" && (
        <div className="space-y-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex items-center justify-between border-b border-gray-100 pb-3"
            >
              <div>
                <p className="text-sm font-semibold text-navy">
                  {service.name}
                  {service.is_editors_pick && (
                    <span className="ml-2 text-[10px] bg-gradient-to-r from-blue-600 to-purple-600 text-white px-1.5 py-0.5 rounded-full font-bold">
                      Pick
                    </span>
                  )}
                </p>
                <p className="text-xs text-gray-400">
                  {service.pricing_note || "No pricing info"}
                </p>
              </div>
              <a
                href={`/services/${service.slug}`}
                target="_blank"
                className="text-xs text-blue-600 hover:underline"
              >
                View
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Preview modal */}
      {previewPost && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-article w-full max-h-[80vh] overflow-y-auto p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xl font-bold text-navy">{previewPost.title}</h2>
              <button
                onClick={() => setPreviewPost(null)}
                className="text-gray-400 hover:text-navy text-sm"
              >
                Close
              </button>
            </div>
            <div
              className="prose"
              dangerouslySetInnerHTML={{
                __html: marked(previewPost.content),
              }}
            />
          </div>
        </div>
      )}

      {/* Edit modal */}
      {editingPost && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-semibold text-navy">Edit Post</h2>
              <button
                onClick={() => setEditingPost(null)}
                className="text-gray-400 hover:text-navy text-sm"
              >
                Cancel
              </button>
            </div>
            <input
              type="text"
              value={editingPost.title}
              onChange={(e) =>
                setEditingPost({ ...editingPost, title: e.target.value })
              }
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm mb-4 bg-white focus:outline-none focus:border-blue-500"
            />
            <textarea
              value={editingPost.content}
              onChange={(e) =>
                setEditingPost({ ...editingPost, content: e.target.value })
              }
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white font-mono focus:outline-none focus:border-blue-500"
              rows={20}
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setEditingPost(null)}
                className="btn-outline text-sm px-4 py-1.5"
              >
                Cancel
              </button>
              <button
                onClick={() => savePost(editingPost)}
                className="btn-gradient text-sm px-4 py-1.5"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
