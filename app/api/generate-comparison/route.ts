import { createServerClient } from "@/lib/supabase";
import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

const SYSTEM_PROMPT = `You are writing a head-to-head comparison page for an independent comparison site that reviews remote executive assistant services. You write for founders, executives, and entrepreneurs.

You will receive data about two EA services. Write a thorough, fair comparison that helps the reader decide which one fits their needs.

IMPORTANT RULES:
- Present factual differences without declaring one service universally better than the other.
- Be specific about pricing, features, and tradeoffs.
- No filler, no fluff, no "in conclusion" or "in today's fast-paced world."
- No emoji.
- Direct, practical tone. Like advice from someone who has evaluated both services.
- 1500-2000 words total.
- Never use em dashes. Use commas, parentheses, or colons instead.
- Never use the words: leverage, robust, seamless, holistic, innovative, cutting-edge, elevate, streamline, utilize, comprehensive, empower.

OUTPUT FORMAT: Return a JSON object with these fields:
{
  "intro": "2-3 sentence intro paragraph (HTML string)",
  "comparison_rows": [
    { "label": "Price range", "service_a": "value", "service_b": "value" },
    { "label": "Service model", "service_a": "value", "service_b": "value" },
    { "label": "Assistant location", "service_a": "value", "service_b": "value" },
    { "label": "Best for", "service_a": "value", "service_b": "value" },
    { "label": "Min commitment", "service_a": "value", "service_b": "value" },
    { "label": "Onboarding speed", "service_a": "value", "service_b": "value" }
  ],
  "sections": [
    { "heading": "section title", "content": "HTML content" }
  ],
  "when_to_choose_a": ["reason 1", "reason 2", "reason 3", "reason 4"],
  "when_to_choose_b": ["reason 1", "reason 2", "reason 3", "reason 4"],
  "bottom_line": "2-3 sentence verdict (HTML string)"
}

Include 4-6 sections with detailed analysis. Sections should cover: pricing breakdown, service model differences, assistant quality, flexibility/contracts, and specific use cases.

Do not include anything outside the JSON object.`;

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createServerClient();

  try {
    // Get all services
    const { data: services } = await supabase
      .from("services")
      .select("*")
      .eq("is_featured", true)
      .order("display_order");

    if (!services || services.length < 2) {
      return NextResponse.json({ error: "Not enough services" }, { status: 400 });
    }

    // Check which comparisons already exist
    const vsDir = join(process.cwd(), "app/vs");
    const existingSlugs = new Set<string>();

    // Read existing VS directories
    const { readdirSync } = await import("fs");
    try {
      const dirs = readdirSync(vsDir);
      dirs.forEach((d: string) => existingSlugs.add(d));
    } catch {
      // directory may not exist
    }

    // Generate all possible pairs and find ones we haven't done
    const pairs: Array<{ a: typeof services[0]; b: typeof services[0]; slug: string }> = [];
    for (let i = 0; i < services.length; i++) {
      for (let j = i + 1; j < services.length; j++) {
        const slug = `${services[i].slug}-vs-${services[j].slug}`;
        const reverseSlug = `${services[j].slug}-vs-${services[i].slug}`;
        if (!existingSlugs.has(slug) && !existingSlugs.has(reverseSlug)) {
          pairs.push({ a: services[i], b: services[j], slug });
        }
      }
    }

    if (pairs.length === 0) {
      return NextResponse.json({ message: "All comparisons already exist" });
    }

    // Pick a random pair
    const pair = pairs[Math.floor(Math.random() * pairs.length)];

    // Call Claude API
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const userMessage = `Compare these two EA services:

SERVICE A: ${pair.a.name}
- Price: $${pair.a.price_range_low || "N/A"} - $${pair.a.price_range_high || "N/A"}/mo
- Model: ${pair.a.service_model}
- Location: ${pair.a.assistant_location}
- Best for: ${pair.a.best_for.join(", ")}
- Min commitment: ${pair.a.min_commitment || "None"}
- Onboarding: ${pair.a.onboarding_speed || "N/A"}
- Tagline: ${pair.a.tagline || "N/A"}
- Pros: ${pair.a.pros.join("; ")}
- Cons: ${pair.a.cons.join("; ")}

SERVICE B: ${pair.b.name}
- Price: $${pair.b.price_range_low || "N/A"} - $${pair.b.price_range_high || "N/A"}/mo
- Model: ${pair.b.service_model}
- Location: ${pair.b.assistant_location}
- Best for: ${pair.b.best_for.join(", ")}
- Min commitment: ${pair.b.min_commitment || "None"}
- Onboarding: ${pair.b.onboarding_speed || "N/A"}
- Tagline: ${pair.b.tagline || "N/A"}
- Pros: ${pair.b.pros.join("; ")}
- Cons: ${pair.b.cons.join("; ")}`;

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 8192,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userMessage }],
    });

    const textBlock = response.content.find((block) => block.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      throw new Error("No text response from Claude");
    }

    let rawText = textBlock.text.trim();
    if (rawText.startsWith("```")) {
      rawText = rawText.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    }
    const parsed = JSON.parse(rawText);

    // Generate the Next.js page file
    const pageContent = generatePageFile(pair.a, pair.b, parsed);

    // Write the file
    const pageDir = join(vsDir, pair.slug);
    if (!existsSync(pageDir)) {
      mkdirSync(pageDir, { recursive: true });
    }
    writeFileSync(join(pageDir, "page.tsx"), pageContent, "utf-8");

    return NextResponse.json({
      ok: true,
      slug: pair.slug,
      serviceA: pair.a.name,
      serviceB: pair.b.name,
    });
  } catch (error) {
    console.error("VS comparison generation failed:", error);
    return NextResponse.json(
      { error: "Comparison generation failed" },
      { status: 500 }
    );
  }
}

function generatePageFile(
  serviceA: { name: string; slug: string },
  serviceB: { name: string; slug: string },
  data: {
    intro: string;
    comparison_rows: Array<{ label: string; service_a: string; service_b: string }>;
    sections: Array<{ heading: string; content: string }>;
    when_to_choose_a: string[];
    when_to_choose_b: string[];
    bottom_line: string;
  }
): string {
  const escapeJsx = (s: string) => s.replace(/`/g, "\\`").replace(/\$/g, "\\$");

  return `import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "${serviceA.name} vs ${serviceB.name}: Which EA Service Is Better? | The EA Index",
  description: "A detailed comparison of ${serviceA.name} and ${serviceB.name}. Pricing, service model, assistant quality, and who each is best for.",
};

export default function Page() {
  return (
    <div className="max-w-article mx-auto px-6 py-12">
      <Link href="/vs" className="text-sm text-blue-600 hover:underline mb-6 inline-block">
        &larr; All comparisons
      </Link>

      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6 tracking-tight">
        ${serviceA.name} vs ${serviceB.name}
      </h1>

      <div className="prose mb-10" dangerouslySetInnerHTML={{ __html: \`${escapeJsx(data.intro)}\` }} />

      {/* Comparison table */}
      <div className="overflow-x-auto mb-12">
        <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider py-3 px-4" />
              <th className="text-left text-sm font-semibold text-navy py-3 px-4">${serviceA.name}</th>
              <th className="text-left text-sm font-semibold text-navy py-3 px-4">${serviceB.name}</th>
            </tr>
          </thead>
          <tbody>
            ${data.comparison_rows
              .map(
                (row) => `<tr className="border-t border-gray-100">
              <td className="text-sm font-medium text-gray-700 py-3 px-4">${row.label}</td>
              <td className="text-sm text-gray-600 py-3 px-4">${row.service_a}</td>
              <td className="text-sm text-gray-600 py-3 px-4">${row.service_b}</td>
            </tr>`
              )
              .join("\n            ")}
          </tbody>
        </table>
      </div>

      {/* Sections */}
      <div className="prose mb-12">
        ${data.sections
          .map(
            (s) => `<h2>${s.heading}</h2>
        <div dangerouslySetInnerHTML={{ __html: \`${escapeJsx(s.content)}\` }} />`
          )
          .join("\n        ")}
      </div>

      {/* When to choose */}
      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6">
          <h3 className="font-heading font-semibold text-navy mb-3">When to choose ${serviceA.name}</h3>
          <ul className="space-y-2">
            ${data.when_to_choose_a.map((r) => `<li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-blue-500 mt-0.5 shrink-0">+</span>${r}</li>`).join("\n            ")}
          </ul>
          <Link href="/services/${serviceA.slug}" className="text-sm text-blue-600 hover:underline mt-4 inline-block">
            Read full ${serviceA.name} review &rarr;
          </Link>
        </div>
        <div className="bg-purple-50/50 border border-purple-100 rounded-xl p-6">
          <h3 className="font-heading font-semibold text-navy mb-3">When to choose ${serviceB.name}</h3>
          <ul className="space-y-2">
            ${data.when_to_choose_b.map((r) => `<li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-purple-500 mt-0.5 shrink-0">+</span>${r}</li>`).join("\n            ")}
          </ul>
          <Link href="/services/${serviceB.slug}" className="text-sm text-blue-600 hover:underline mt-4 inline-block">
            Read full ${serviceB.name} review &rarr;
          </Link>
        </div>
      </div>

      {/* Bottom line */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
        <h3 className="font-heading font-semibold text-navy mb-2">The bottom line</h3>
        <div className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: \`${escapeJsx(data.bottom_line)}\` }} />
      </div>

      <Link href="/vs" className="text-sm text-blue-600 hover:underline">
        &larr; Back to all comparisons
      </Link>
    </div>
  );
}
`;
}

// Vercel cron handler
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return POST(request);
}
