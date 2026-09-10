/**
 * app/api/enquiry/route.ts
 *
 * Next.js App Router API route — POST /api/enquiry
 *
 * Receives lead form submissions, validates them server-side,
 * and forwards to TeleCRM via the server-only lib/telecrm.ts service.
 *
 * This file runs ONLY on the server. The TeleCRM token never
 * reaches the browser or client bundle.
 */

import { NextRequest, NextResponse } from "next/server";
import { submitLeadToTeleCRM } from "@/lib/telecrm";

// ─── Constants ────────────────────────────────────────────────────────────────

const MAX_NAME_LENGTH = 100;
const MAX_PHONE_LENGTH = 15;
const MAX_CONFIG_LENGTH = 100;

// Basic Indian mobile phone: 10 digits starting with 6–9
// (also accepts 91XXXXXXXXXX and +91XXXXXXXXXX — normalised in telecrm.ts)
const PHONE_REGEX = /^(\+?91)?[6-9]\d{9}$/;

// ─── Request body type ────────────────────────────────────────────────────────

interface EnquiryBody {
  name: string;
  phone: string;
  config?: string;
  interested_project?: string;
}

// ─── POST handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // ── Parse body ─────────────────────────────────────────────────────────────
  let body: Partial<EnquiryBody>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request format.",
      },
      { status: 400 }
    );
  }

  // ── Explicit allowlist: only accept known fields ───────────────────────────
  const { name, phone, config, interested_project } = body;

  // ── Server-side validation ────────────────────────────────────────────────
  const errors: string[] = [];

  // Name
  if (!name || typeof name !== "string" || !name.trim()) {
    errors.push("Full name is required.");
  } else if (name.trim().length > MAX_NAME_LENGTH) {
    errors.push(`Name must be at most ${MAX_NAME_LENGTH} characters.`);
  }

  // Phone
  if (!phone || typeof phone !== "string" || !phone.trim()) {
    errors.push("Mobile number is required.");
  } else if (phone.length > MAX_PHONE_LENGTH) {
    errors.push("Mobile number is too long.");
  } else if (!PHONE_REGEX.test(phone.replace(/[\s\-.()\u200B]/g, ""))) {
    errors.push("Please enter a valid 10-digit Indian mobile number.");
  }

  // Config (optional)
  if (config !== undefined) {
    if (typeof config !== "string") {
      errors.push("Invalid configuration value.");
    } else if (config.length > MAX_CONFIG_LENGTH) {
      errors.push(`Configuration must be at most ${MAX_CONFIG_LENGTH} characters.`);
    }
  }

  if (errors.length > 0) {
    return NextResponse.json(
      {
        success: false,
        message: errors[0], // Return the first error to the user
      },
      { status: 422 }
    );
  }

  // ── Submit to TeleCRM ─────────────────────────────────────────────────────
  const result = await submitLeadToTeleCRM({
    name: name!.trim(),
    phone: phone!.trim(),
    ...(config ? { config: config.trim() } : {}),
    interested_project: (interested_project ?? "Platinum Royale").trim(),
  });

  if (result.success) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  return NextResponse.json(
    {
      success: false,
      message:
        result.message ??
        "We could not submit your enquiry right now. Please try again.",
    },
    { status: 502 }
  );
}

// ─── Reject unsupported methods ───────────────────────────────────────────────

export async function GET() {
  return NextResponse.json({ message: "Method not allowed." }, { status: 405 });
}
