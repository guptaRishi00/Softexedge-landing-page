// src/app/api/meta-event/route.ts
import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Helper to securely hash user data to SHA-256
    const hash = (value: string | undefined | null) => {
      if (!value) return "";
      return crypto
        .createHash("sha256")
        .update(value.trim().toLowerCase())
        .digest("hex");
    };

    const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
    const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;

    if (!PIXEL_ID || !ACCESS_TOKEN) {
      return NextResponse.json(
        { error: "Missing Meta credentials" },
        { status: 500 },
      );
    }

    const payload = {
      data: [
        {
          event_name: "Lead",
          event_time: Math.floor(Date.now() / 1000),
          event_id: body.eventId, // Sent from the client for deduplication
          action_source: "website",
          user_data: {
            em: body.email ? [hash(body.email)] : [],
            ph: body.phone ? [hash(body.phone)] : [],
          },
          custom_data: {
            lead_event_source: body.source || "website",
            service_requested: body.service,
          },
        },
      ],
    };

    const response = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );

    const result = await response.json();
    return NextResponse.json({ success: true, metaResponse: result });
  } catch (error) {
    console.error("Meta CAPI Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
