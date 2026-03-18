// src/app/api/meta-event/route.ts
import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const hash = (value: string | undefined | null) => {
      if (!value) return undefined;
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

    // 🚨 STRONGER IP EXTRACTION
    const forwardedFor = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const cfIp = req.headers.get("cf-connecting-ip");

    let ip = "";
    if (forwardedFor) {
      ip = forwardedFor.split(",")[0].trim();
    } else if (realIp) {
      ip = realIp.trim();
    } else if (cfIp) {
      ip = cfIp.trim();
    }

    const userAgent = req.headers.get("user-agent") || "";

    const payload = {
      test_event_code: "TEST5364", // Keep for testing, remove for production
      data: [
        {
          event_name: "Lead",
          event_time: Math.floor(Date.now() / 1000),
          event_id: body.eventId,
          action_source: "website",
          user_data: {
            em: body.email ? [hash(body.email)] : [],
            ph: body.phone ? [hash(body.phone)] : [],
            fn: body.first_name ? [hash(body.first_name)] : [],
            ln: body.last_name ? [hash(body.last_name)] : [],
            external_id: body.email ? [hash(body.email)] : [],

            client_ip_address: ip || undefined, // Will now safely pass the real IP
            client_user_agent: userAgent,
            fbc: body.fbc || undefined,
            fbp: body.fbp || undefined,
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
