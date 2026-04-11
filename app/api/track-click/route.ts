import { createServerClient } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { service_id, source, referrer_slug } = await request.json();

    if (!service_id) {
      return NextResponse.json({ error: "service_id required" }, { status: 400 });
    }

    const supabase = createServerClient();
    await supabase.from("clicks").insert({
      service_id,
      source: source || "unknown",
      referrer_slug: referrer_slug || null,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to track click" }, { status: 500 });
  }
}
