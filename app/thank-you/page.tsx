import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Thank You | Platinum Royale — Kishor Developers",
  description:
    "Thank you for your interest in Platinum Royale. Our team will be in touch with you shortly.",
  robots: "noindex, nofollow",
};

export default function ThankYouPage() {
  return (
    <>
      <StickyHeader />

      <main className="min-h-screen bg-pr-white flex flex-col">
        {/* ── Hero area ── */}
        <section
          className="flex-1 flex items-center justify-center section-padding pt-[120px] pb-20"
          aria-labelledby="thankyou-heading"
        >
          <div className="container-pr">
            <div className="max-w-lg mx-auto text-center">

              {/* Gold top accent */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px flex-1 bg-pr-beige" />
                <div className="w-2 h-2 rounded-full bg-pr-gold" />
                <div className="h-px flex-1 bg-pr-beige" />
              </div>

              {/* Logo */}
              <div className="mb-6 inline-block">
                <Image
                  src="/kishore_dev-logof.jpeg"
                  alt="Kishor Developers"
                  width={120}
                  height={52}
                  className="object-contain h-10 w-auto mx-auto"
                  priority
                />
              </div>

              {/* Brand label */}
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-pr-gold mb-3">
                Platinum Royale
              </p>

              {/* Check mark circle */}
              <div className="w-20 h-20 rounded-full bg-pr-off-white flex items-center justify-center mx-auto mb-8 shadow-luxury">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#B8976A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              {/* Heading */}
              <h1
                id="thankyou-heading"
                className="font-serif text-display-md text-pr-charcoal leading-tight mb-5"
              >
                Thank You
              </h1>

              {/* Body */}
              <p className="font-sans text-sm text-pr-muted leading-loose mb-3 max-w-sm mx-auto">
                Thank you for your interest in{" "}
                <span className="text-pr-charcoal font-medium">
                  Platinum Royale
                </span>
                .
              </p>
              <p className="font-sans text-sm text-pr-muted leading-loose mb-10 max-w-sm mx-auto">
                We have received your enquiry and our team will get in touch
                with you shortly to arrange your private site visit.
              </p>

              {/* CTA */}
              <Link
                href="/"
                id="thankyou-back-home"
                className="inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold uppercase px-10 py-4 text-sm tracking-widest bg-pr-gold text-white border border-pr-gold hover:bg-pr-gold-dark hover:border-pr-gold-dark transition-all duration-300"
              >
                Back to Home
              </Link>

              {/* Contact fallback */}
              <p className="mt-8 font-sans text-xs text-pr-muted">
                Questions? Call us at{" "}
                <a
                  href={`tel:${SITE.phone}`}
                  className="text-pr-gold hover:underline"
                >
                  {SITE.phone}
                </a>
              </p>

              {/* Gold bottom accent */}
              <div className="flex items-center justify-center gap-3 mt-10">
                <div className="h-px flex-1 bg-pr-beige" />
                <p className="font-sans text-[9px] uppercase tracking-widest text-pr-muted-light whitespace-nowrap">
                  MAHA RERA: {SITE.rera}
                </p>
                <div className="h-px flex-1 bg-pr-beige" />
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
