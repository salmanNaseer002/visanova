import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mailer";

// ─── Simple in-memory rate limiter ────────────────────────────────────────────
// Allows max 3 submissions per IP within a 10-minute window.
// On Vercel each instance resets, but this stops trivial abuse within one instance.
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;

  entry.count += 1;
  return false;
}

// ─── Field validators ─────────────────────────────────────────────────────────

const VALID_VISA_TYPES = [
  "UK Visit Visa",
  "Student Visa",
  "Europe / Schengen Visa",
  "Immigration Consultation",
  "Tourist Visa",
  "Business Visa",
  "Documentation Assistance",
  "Other",
];

function validateFields(body: Record<string, unknown>): string | null {
  const { name, email, visaType, message, phone } = body as Record<string, string>;

  if (!name?.trim() || name.trim().length < 2) return "Please enter your full name.";
  if (name.trim().length > 100) return "Name is too long.";

  if (!email?.trim()) return "Please enter your email address.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email address.";
  if (email.length > 254) return "Email address is too long.";

  if (phone && !/^[\d\s\+\-\(\)]{0,20}$/.test(phone)) return "Please enter a valid phone number.";

  if (!visaType || !VALID_VISA_TYPES.includes(visaType)) return "Please select a valid visa type.";

  if (!message?.trim() || message.trim().length < 10) return "Message must be at least 10 characters.";
  if (message.trim().length > 2000) return "Message must be under 2000 characters.";

  return null; // all valid
}

// ─── POST handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // 1. Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait a few minutes and try again." },
      { status: 429 }
    );
  }

  // 2. Parse body
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // 3. Honeypot — bots fill hidden fields, humans don't
  if (body._trap) {
    // Silently accept but don't send — looks legitimate to bots
    return NextResponse.json({ success: true });
  }

  // 4. Server-side validation
  const validationError = validateFields(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 422 });
  }

  // 5. Ensure SMTP credentials are configured
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error("SMTP credentials are not configured in environment variables.");
    return NextResponse.json(
      { error: "Email service is not configured. Please contact us directly." },
      { status: 503 }
    );
  }

  // 6. Send email
  try {
    await sendContactEmail({
      name: (body.name as string).trim(),
      email: (body.email as string).trim().toLowerCase(),
      phone: ((body.phone as string) ?? "").trim(),
      visaType: body.visaType as string,
      message: (body.message as string).trim(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: unknown) {
    // Log the full error server-side so it appears in Vercel/terminal logs
    const smtpError = err as { message?: string; code?: string; response?: string; responseCode?: number };
    console.error("━━━ SMTP ERROR ━━━");
    console.error("Message  :", smtpError?.message);
    console.error("Code     :", smtpError?.code);
    console.error("Response :", smtpError?.response);
    console.error("Resp.Code:", smtpError?.responseCode);
    console.error("Full err :", err);
    console.error("━━━━━━━━━━━━━━━━━━");

    // In development, surface the real error to the browser for easier debugging
    const isDev = process.env.NODE_ENV === "development";
    return NextResponse.json(
      {
        error: isDev
          ? `SMTP Error: ${smtpError?.message ?? "Unknown error"} (code: ${smtpError?.code ?? "?"}, response: ${smtpError?.response ?? "?"})`
          : "We couldn't send your message right now. Please try WhatsApp or email us directly at info@visanova.co.uk.",
      },
      { status: 500 }
    );
  }
}

// Reject non-POST methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
