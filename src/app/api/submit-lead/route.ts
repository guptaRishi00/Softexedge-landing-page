import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    
    // Your Google Apps Script Web App URL from environment variable
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      throw new Error("GOOGLE_SCRIPT_URL is not defined in environment variables");
    }

    // Server-to-Server fetch completely bypasses browser CORS!
    const response = await fetch(scriptUrl, {
      method: "POST",
      body: JSON.stringify(payload),
      // Server-side allows normal content types without preflight blocks
      headers: {
        "Content-Type": "text/plain;charset=utf-8", 
      },
    });

    const result = await response.json();
    return NextResponse.json(result);
    
  } catch (error) {
    console.error("Backend Submission Error:", error);
    return NextResponse.json(
      { status: "error", message: "Failed to connect to Google Apps Script" },
      { status: 500 }
    );
  }
}
