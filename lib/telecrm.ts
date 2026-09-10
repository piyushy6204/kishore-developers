/**
 * lib/telecrm.ts
 *
 * Server-only helper for submitting leads to the TeleCRM Async API.
 * Never import this from a React component or any "use client" file.
 *
 * Environment variables required (server-side only):
 *   TELECRM_ENTERPRISE_ID  — from TeleCRM → Settings → Website and API
 *   TELECRM_ASYNC_TOKEN    — an Async-typed Bearer token from TeleCRM
 */

const TELECRM_API_TIMEOUT_MS = 8_000;

// ─── Types ────────────────────────────────────────────────────────────────────

export interface TeleCRMLeadPayload {
  /** Full name of the enquirer */
  name: string;
  /** Normalised phone number, e.g. "919876543210" */
  phone: string;
  /** Optional configuration string, e.g. "Premium 2 BHK" */
  config?: string;
}

export interface TeleCRMResult {
  success: boolean;
  /** Safe, user-facing message. Only present on failure. */
  message?: string;
}

// ─── Phone normalisation ──────────────────────────────────────────────────────

/**
 * Normalises an Indian mobile phone number to the 12-digit format
 * expected by TeleCRM: 91XXXXXXXXXX (no + prefix).
 *
 * Accepts:
 *   9876543210       → 919876543210
 *   919876543210     → 919876543210
 *   +919876543210    → 919876543210
 *
 * Returns null for clearly invalid numbers.
 */
export function normaliseIndianPhone(raw: string): string | null {
  // Strip all whitespace, dashes, dots
  const cleaned = raw.replace(/[\s\-.()\u200B]/g, "");

  // Strip leading +
  const stripped = cleaned.startsWith("+") ? cleaned.slice(1) : cleaned;

  // Must be digits only at this point
  if (!/^\d+$/.test(stripped)) return null;

  let digits: string;

  if (stripped.startsWith("91") && stripped.length === 12) {
    // Already in 91XXXXXXXXXX form
    digits = stripped;
  } else if (stripped.length === 10) {
    // 10-digit local number
    digits = "91" + stripped;
  } else {
    // Not a valid Indian mobile
    return null;
  }

  // Validate: 91 + 10 digits, where the 10-digit part starts with 6–9
  if (!/^91[6-9]\d{9}$/.test(digits)) return null;

  return digits;
}

// ─── Core service function ────────────────────────────────────────────────────

/**
 * Submits a lead to the TeleCRM Async API.
 *
 * @param payload - Validated lead data from the API route
 * @returns TeleCRMResult with success flag and optional user-facing message
 */
export async function submitLeadToTeleCRM(
  payload: TeleCRMLeadPayload
): Promise<TeleCRMResult> {
  // ── Environment validation ─────────────────────────────────────────────────
  const enterpriseId = process.env.TELECRM_ENTERPRISE_ID;
  const asyncToken = process.env.TELECRM_ASYNC_TOKEN;

  if (!enterpriseId || !asyncToken) {
    console.error(
      "[TeleCRM] Missing environment variables: TELECRM_ENTERPRISE_ID or TELECRM_ASYNC_TOKEN"
    );
    return {
      success: false,
      message: "We could not submit your enquiry right now. Please try again.",
    };
  }

  // ── Phone normalisation ────────────────────────────────────────────────────
  const normalisedPhone = normaliseIndianPhone(payload.phone);
  if (!normalisedPhone) {
    return {
      success: false,
      message: "Please enter a valid 10-digit Indian mobile number.",
    };
  }

  // ── Build TeleCRM payload ──────────────────────────────────────────────────
  // Field API names MUST match TeleCRM → Settings → Lead Fields → API name.
  // Defaults below are the standard TeleCRM field names.
  // Verify against the Platinum Royale workspace before going live.
  const teleCRMBody: Record<string, unknown> = {
    fields: {
      name: payload.name.trim(),
      phone: normalisedPhone,
      // Only include config if it's non-empty and a recognised custom field exists
      // in the TeleCRM workspace. Comment out if the field doesn't exist there.
      ...(payload.config ? { property_type: payload.config } : {}),
    },
  };

  const apiUrl = `https://next-api.telecrm.in/enterprise/${enterpriseId}/autoupdatelead`;

  // ── HTTP request with timeout ──────────────────────────────────────────────
  const controller = new AbortController();
  const timeoutId = setTimeout(
    () => controller.abort(),
    TELECRM_API_TIMEOUT_MS
  );

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${asyncToken}`,
      },
      body: JSON.stringify(teleCRMBody),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    // ── HTTP error codes ─────────────────────────────────────────────────────
    if (response.status === 401) {
      console.error(
        "[TeleCRM] 401 Unauthorized — check TELECRM_ASYNC_TOKEN (must be an Async token, not Sync)"
      );
      return {
        success: false,
        message: "We could not submit your enquiry right now. Please try again.",
      };
    }

    if (response.status === 429) {
      console.error("[TeleCRM] 429 Rate limit exceeded");
      return {
        success: false,
        message:
          "We are experiencing high demand. Please wait a moment and try again.",
      };
    }

    if (!response.ok) {
      console.error(`[TeleCRM] HTTP ${response.status} error`);
      return {
        success: false,
        message: "We could not submit your enquiry right now. Please try again.",
      };
    }

    // ── Parse response ────────────────────────────────────────────────────────
    let json: unknown;
    try {
      const rawText = await response.text();
      try {
        json = JSON.parse(rawText);
      } catch (parseErr) {
        console.error("[TeleCRM] Failed to parse JSON response. Raw text:", rawText);
        return {
          success: false,
          message: "We could not submit your enquiry right now. Please try again.",
        };
      }
    } catch {
      console.error("[TeleCRM] Failed to read response text.");
      return {
        success: false,
        message: "We could not submit your enquiry right now. Please try again.",
      };
    }

    // TeleCRM Async API success: { "status": "QUEUED" }
    if (
      typeof json === "object" &&
      json !== null &&
      (json as Record<string, unknown>)["status"] === "QUEUED"
    ) {
      return { success: true };
    }

    console.error("[TeleCRM] Unexpected response body:", json);
    return {
      success: false,
      message: "We could not submit your enquiry right now. Please try again.",
    };
  } catch (err) {
    clearTimeout(timeoutId);

    if (err instanceof Error && err.name === "AbortError") {
      console.error("[TeleCRM] Request timed out after", TELECRM_API_TIMEOUT_MS, "ms");
      return {
        success: false,
        message:
          "The request took too long. Please check your connection and try again.",
      };
    }

    console.error("[TeleCRM] Network or unexpected error:", err);
    return {
      success: false,
      message: "We could not submit your enquiry right now. Please try again.",
    };
  }
}
