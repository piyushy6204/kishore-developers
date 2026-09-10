"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import Button from "@/components/ui/Button";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  trigger?: "brochure" | "visit" | "exit";
}

const TRIGGER_TITLES: Record<string, string> = {
  brochure: "Download the Brochure",
  visit: "Schedule Your Site Visit",
  exit: "Before You Leave",
};
const TRIGGER_SUBTITLES: Record<string, string> = {
  brochure: "Share your details to receive the Platinum Royale project brochure.",
  visit: "Our team will connect with you to arrange a private site visit.",
  exit: "Discover Platinum Royale — starting ₹95 Lakhs. Let us send you the details.",
};

export default function LeadModal({ isOpen, onClose, trigger = "visit" }: LeadModalProps) {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);
  const [clientError, setClientError] = useState("");
  const [serverError, setServerError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setClientError("");
    setServerError("");

    // Client-side validation
    if (!form.name.trim()) {
      setClientError("Please enter your full name.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      setClientError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          config: "Premium 2 BHK",
        }),
      });

      const data: { success: boolean; message?: string } = await res.json();

      if (data.success) {
        // Redirect ONLY after backend confirms TeleCRM accepted the lead
        router.push("/thank-you");
      } else {
        setServerError(
          data.message ??
            "We could not submit your enquiry right now. Please try again."
        );
        setSubmitting(false);
      }
    } catch {
      setServerError(
        "A network error occurred. Please check your connection and try again."
      );
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={TRIGGER_TITLES[trigger]}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-pr-charcoal-60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal card */}
      <div className="relative z-10 w-full max-w-md bg-pr-white rounded-2xl shadow-luxury-lg overflow-hidden">
        {/* Gold top border */}
        <div className="h-0.5 w-full bg-pr-gold" />

        <div className="p-8 md:p-10">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-pr-muted hover:text-pr-charcoal transition-colors"
            aria-label="Close modal"
          >
            <X size={18} strokeWidth={1.5} />
          </button>

          {/* Header */}
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-pr-gold mb-2">
            Platinum Royale
          </p>
          <h2 className="font-serif text-display-sm text-pr-charcoal mb-2 leading-tight">
            {TRIGGER_TITLES[trigger]}
          </h2>
          <p className="font-sans text-sm text-pr-muted mb-7 leading-relaxed">
            {TRIGGER_SUBTITLES[trigger]}
          </p>

          {/* Errors */}
          {(clientError || serverError) && (
            <p role="alert" className="text-red-500 text-xs mb-4 font-sans">
              {clientError || serverError}
            </p>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="modal-name" className="block text-xs font-sans font-medium text-pr-muted uppercase tracking-wider mb-1.5">
                Full Name *
              </label>
              <input
                id="modal-name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                disabled={submitting}
                className="w-full bg-pr-off-white border border-pr-beige rounded-xl px-4 py-3 text-sm font-sans text-pr-charcoal placeholder:text-pr-grey focus:outline-none focus:ring-1 focus:ring-pr-gold transition disabled:opacity-60"
                required
              />
            </div>
            <div>
              <label htmlFor="modal-phone" className="block text-xs font-sans font-medium text-pr-muted uppercase tracking-wider mb-1.5">
                Mobile Number *
              </label>
              <input
                id="modal-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="10-digit mobile number"
                maxLength={10}
                disabled={submitting}
                className="w-full bg-pr-off-white border border-pr-beige rounded-xl px-4 py-3 text-sm font-sans text-pr-charcoal placeholder:text-pr-grey focus:outline-none focus:ring-1 focus:ring-pr-gold transition disabled:opacity-60"
                required
              />
            </div>
            {/* Static configuration badge */}
            <div className="bg-pr-off-white border border-pr-beige rounded-xl px-4 py-3 flex items-center justify-between">
              <span className="font-sans text-xs text-pr-muted uppercase tracking-wider">Configuration</span>
              <span className="font-sans text-sm font-medium text-pr-charcoal">Premium 2 BHK</span>
            </div>

            <Button
              type="submit"
              variant="gold"
              size="lg"
              className="w-full mt-2"
              disabled={submitting}
            >
              {submitting
                ? "Submitting…"
                : trigger === "brochure"
                ? "Send Me the Brochure"
                : "Schedule My Visit"}
            </Button>
          </form>

          {/* RERA trust */}
          <p className="mt-5 text-center font-sans text-[10px] text-pr-muted tracking-wide">
            🔒 MAHA RERA: P52100031950 · 100% Privacy Guaranteed
          </p>
        </div>
      </div>
    </div>
  );
}


