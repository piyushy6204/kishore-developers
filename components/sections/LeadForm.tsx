"use client";
import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { VISIT_BENEFITS, SITE } from "@/lib/content";
import { CheckCircle2, Lock, Shield } from "lucide-react";

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    config: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!/^\d{10}$/.test(form.phone)) e.phone = "Enter a valid 10-digit number.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
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

            {!submitted ? (
              <>
                <h3 className="font-serif text-2xl text-pr-charcoal mb-7 leading-tight text-center">
                  Schedule Your<br />Site Visit
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block font-sans text-[10px] uppercase tracking-widest text-pr-muted mb-2">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className={`w-full bg-pr-off-white border rounded-xl px-4 py-3 text-sm font-sans text-pr-charcoal placeholder:text-pr-grey focus:outline-none focus:ring-1 focus:ring-pr-gold transition ${errors.name ? "border-red-300" : "border-pr-beige"}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 font-sans">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block font-sans text-[10px] uppercase tracking-widest text-pr-muted mb-2">
                      Mobile Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="10-digit mobile"
                      maxLength={10}
                      className={`w-full bg-pr-off-white border rounded-xl px-4 py-3 text-sm font-sans text-pr-charcoal placeholder:text-pr-grey focus:outline-none focus:ring-1 focus:ring-pr-gold transition ${errors.phone ? "border-red-300" : "border-pr-beige"}`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 font-sans">{errors.phone}</p>}
                  </div>

                  {/* Static configuration badge */}
                  <div className="bg-pr-off-white border border-pr-beige rounded-xl px-4 py-3 flex items-center justify-between mb-4">
                    <span className="font-sans text-xs text-pr-muted uppercase tracking-wider">Configuration</span>
                    <span className="font-sans text-sm font-medium text-pr-charcoal">Premium 2 BHK</span>
                  </div>

                  <Button id="contact-submit" type="submit" variant="gold" size="lg" className="w-full">
                    Schedule Site Visit
                  </Button>
                </form>

                <p className="mt-5 text-center font-sans text-[9px] text-pr-muted tracking-wide">
                  MAHA RERA: P52100031950 · No spam. Ever.
                </p>
              </>
            ) : (
              /* Success */
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-pr-off-white flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={28} strokeWidth={1.5} className="text-pr-gold" />
                </div>
                <h3 className="font-serif text-2xl text-pr-charcoal mb-3">Thank You!</h3>
                <p className="font-sans text-sm text-pr-muted leading-relaxed">
                  Thank you, {form.name}. Our team will call you at{" "}
                  <span className="text-pr-charcoal font-medium">{form.phone}</span>{" "}
                  to confirm your visit.
                </p>
                <p className="font-sans text-xs text-pr-muted mt-6">
                  Questions? Call us at{" "}
                  <a href={`tel:${SITE.phone}`} className="text-pr-gold hover:underline">{SITE.phone}</a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
