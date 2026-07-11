"use client";
import { useState } from "react";
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
  const [form, setForm] = useState({ name: "", phone: "", config: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || form.phone.length < 10) {
      setError("Please enter a valid name and 10-digit phone number.");
      return;
    }
    setError("");
    setSubmitted(true);
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

          {!submitted ? (
            <>
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

              {/* Error */}
              {error && (
                <p className="text-red-500 text-xs mb-4 font-sans">{error}</p>
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
                    className="w-full bg-pr-off-white border border-pr-beige rounded-xl px-4 py-3 text-sm font-sans text-pr-charcoal placeholder:text-pr-grey focus:outline-none focus:ring-1 focus:ring-pr-gold transition"
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
                    className="w-full bg-pr-off-white border border-pr-beige rounded-xl px-4 py-3 text-sm font-sans text-pr-charcoal placeholder:text-pr-grey focus:outline-none focus:ring-1 focus:ring-pr-gold transition"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="modal-config" className="block text-xs font-sans font-medium text-pr-muted uppercase tracking-wider mb-1.5">
                    Preferred Configuration
                  </label>
                  <select
                    id="modal-config"
                    value={form.config}
                    onChange={(e) => setForm({ ...form, config: e.target.value })}
                    className="w-full bg-pr-off-white border border-pr-beige rounded-xl px-4 py-3 text-sm font-sans text-pr-charcoal focus:outline-none focus:ring-1 focus:ring-pr-gold transition appearance-none"
                  >
                    <option value="">Select configuration</option>
                    <option value="2bhk-type1">Premium 2 BHK – Type 1</option>
                    <option value="2bhk-type2">Premium 2 BHK – Type 2</option>
                    <option value="2bhk-type3">Premium 2 BHK – Type 3</option>
                    <option value="2bhk-type4">Premium 2 BHK – Type 4</option>
                  </select>
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full mt-2">
                  {trigger === "brochure" ? "Send Me the Brochure" : "Schedule My Visit"}
                </Button>
              </form>

              {/* RERA trust */}
              <p className="mt-5 text-center font-sans text-[10px] text-pr-muted tracking-wide">
                🔒 MAHA RERA: P52100031950 · 100% Privacy Guaranteed
              </p>
            </>
          ) : (
            /* Success state */
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-pr-off-white flex items-center justify-center mx-auto mb-5">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B8976A" strokeWidth="1.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-pr-charcoal mb-2">
                {trigger === "brochure" ? "Brochure Sent!" : "Visit Confirmed!"}
              </h3>
              <p className="font-sans text-sm text-pr-muted leading-relaxed">
                Thank you, {form.name}. Our team will contact you on{" "}
                <span className="text-pr-charcoal font-medium">{form.phone}</span> shortly.
              </p>
              {trigger === "brochure" && (
                <a
                  href="/brochure/platinum-royale-brochure.pdf"
                  download
                  className="inline-flex items-center gap-2 mt-6 font-sans text-xs uppercase tracking-widest text-pr-gold underline underline-offset-4 hover:text-pr-gold-dark transition"
                >
                  Click here to download brochure
                </a>
              )}
              <button
                onClick={onClose}
                className="mt-6 font-sans text-xs uppercase tracking-widest text-pr-muted hover:text-pr-charcoal transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
