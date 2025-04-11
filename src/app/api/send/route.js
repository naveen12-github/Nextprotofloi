import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, subject, message } = await req.json();
  console.log("Received:", { email, subject, message });

  // Just return a fake success response (no actual email sent)
  return NextResponse.json({
    success: true,
    message: "Your message was received successfully (no email sent).",
    data: {
      email,
      subject,
      message,
    },
  });
}
