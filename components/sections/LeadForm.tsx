"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { VISIT_BENEFITS, SITE } from "@/lib/content";
import { CheckCircle2, Lock, Shield } from "lucide-react";

export default function LeadForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    config: "Premium 2 BHK",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = (): Record<string, string> => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!/^[6-9]\d{9}$/.test(form.phone.trim()))
      e.phone = "Enter a valid 10-digit mobile number.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          config: form.config,
          interested_project: "Platinum Royale",
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

  return (
    <section id="contact" className="section-padding bg-pr-white" aria-labelledby="contact-heading">
      <div className="container-pr">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Benefits */}
          <div className="hidden lg:block">
            <SectionLabel>Book Your Visit</SectionLabel>
            <h2 id="contact-heading" className="font-serif text-display-md text-pr-charcoal leading-tight mb-6">
              Discover Your<br />Future Home At<br />
              <em className="not-italic text-pr-gold">Platinum Royale</em>
            </h2>
            <p className="font-sans text-sm text-pr-muted leading-loose mb-8 max-w-sm">
              Schedule a private site visit and receive all the details you need to make the right decision.
            </p>
            <div className="space-y-3">
              {VISIT_BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 size={16} strokeWidth={1.5} className="text-pr-gold flex-shrink-0" />
                  <p className="font-sans text-sm text-pr-charcoal">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Trust bar */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <Shield size={14} strokeWidth={1.5} className="text-pr-gold" />
                <p className="font-sans text-[10px] uppercase tracking-widest text-pr-muted">RERA Registered</p>
              </div>
              <div className="flex items-center gap-2">
                <Lock size={14} strokeWidth={1.5} className="text-pr-gold" />
                <p className="font-sans text-[10px] uppercase tracking-widest text-pr-muted">100% Privacy</p>
              </div>
            </div>
          </div>

          {/* Right — Form card */}
          <div className="bg-pr-white rounded-3xl border border-pr-beige shadow-luxury-lg p-8 md:p-10">
            {/* Gold top border */}
            <div className="h-0.5 w-12 bg-pr-gold rounded-full mb-6 mx-auto" />

            <h3 className="font-serif text-2xl text-pr-charcoal mb-7 leading-tight text-center">
              Schedule Your<br />Site Visit
            </h3>

            {/* Server-side error */}
            {serverError && (
              <div
                role="alert"
                className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-sans text-xs text-red-600"
              >
                {serverError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block font-sans text-xs font-medium uppercase tracking-wider text-pr-muted mb-2">
                  Full Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  disabled={submitting}
                  className={`w-full bg-pr-off-white border rounded-xl px-4 py-3 text-sm font-sans text-pr-charcoal placeholder:text-pr-charcoal/40 focus:outline-none focus:ring-1 focus:ring-pr-gold transition disabled:opacity-60 ${errors.name ? "border-red-300" : "border-pr-beige"}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 font-sans">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="contact-phone" className="block font-sans text-xs font-medium uppercase tracking-wider text-pr-muted mb-2">
                  Mobile Number *
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="10-digit mobile"
                  maxLength={10}
                  disabled={submitting}
                  className={`w-full bg-pr-off-white border rounded-xl px-4 py-3 text-sm font-sans text-pr-charcoal placeholder:text-pr-charcoal/40 focus:outline-none focus:ring-1 focus:ring-pr-gold transition disabled:opacity-60 ${errors.phone ? "border-red-300" : "border-pr-beige"}`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 font-sans">{errors.phone}</p>}
              </div>

              {/* Configuration badge */}
              <div className="bg-pr-off-white border border-pr-beige rounded-xl px-4 py-3 flex items-center justify-between mb-4">
                <span className="font-sans text-xs text-pr-muted uppercase tracking-wider">Configuration</span>
                <span className="font-sans text-xs text-pr-muted">|</span>
                <span className="font-sans text-sm font-medium text-pr-charcoal">Premium 2 BHK</span>
              </div>

              <Button
                id="contact-submit"
                type="submit"
                variant="gold"
                size="lg"
                className="w-full"
                disabled={submitting}
              >
                {submitting ? "Submitting…" : "Schedule Site Visit"}
              </Button>
            </form>

            <p className="mt-5 text-center font-sans text-[9px] text-pr-muted tracking-wide">
              MAHA RERA: P52100031950 · No spam. Ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
