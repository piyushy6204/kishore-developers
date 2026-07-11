"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import LeadModal from "@/components/ui/LeadModal";
import { SITE } from "@/lib/content";
import { Shield, ChevronDown } from "lucide-react";

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTrigger, setModalTrigger] = useState<"visit" | "brochure">("visit");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  const openVisit = () => { setModalTrigger("visit"); setModalOpen(true); };
  const openBrochure = () => { setModalTrigger("brochure"); setModalOpen(true); };

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex flex-col bg-pr-white overflow-hidden"
      >
        {/* Background grain texture removed for performance/404 issues */}

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* LEFT — Content */}
          <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-20 pt-28 pb-12 lg:pt-20">
            {/* Developer tag */}
            <div
              className={`flex items-center gap-3 mb-10 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <span className="block w-8 h-px bg-pr-gold" />
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-pr-gold">
                Kishor Developers Presents
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`font-serif text-display-xl text-pr-charcoal leading-[0.95] mb-6 transition-all duration-700 delay-150 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              Find Your<br />
              <em className="not-italic text-pr-gold">Place</em> In<br />
              <span className="block">Wakad&apos;s</span>
              <span className="block">Most Elegant</span>
              <span className="block">Address</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`font-sans text-sm text-pr-muted leading-relaxed max-w-md mb-8 transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Premium 2 BHK residences crafted for families who appreciate thoughtful
              design, exceptional quality, and a lifestyle that reflects their aspirations.
            </p>

            {/* Price + RERA */}
            <div
              className={`flex flex-wrap items-center gap-3 mb-10 transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="bg-pr-charcoal text-pr-white rounded-full px-5 py-2.5 flex items-baseline gap-2">
                <span className="font-sans text-[9px] uppercase tracking-widest text-pr-grey">Starting From</span>
                <span className="font-serif text-xl font-medium">{SITE.startingPrice}</span>
              </div>
              <div className="flex items-center gap-1.5 border border-pr-beige rounded-full px-4 py-2">
                <Shield size={11} strokeWidth={1.5} className="text-pr-gold" />
                <span className="font-sans text-[9px] uppercase tracking-widest text-pr-muted">
                  RERA: {SITE.rera}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-3 transition-all duration-700 delay-[400ms] ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <Button id="hero-book-visit" variant="gold" size="lg" onClick={openVisit}>
                Schedule Site Visit
              </Button>
              <Button id="hero-brochure" variant="ghost" size="lg" onClick={openBrochure}>
                Download Brochure
              </Button>
            </div>

            {/* Scroll cue */}
            <div
              className={`hidden lg:flex items-center gap-2 mt-16 transition-all duration-700 delay-500 ${mounted ? "opacity-100" : "opacity-0"}`}
            >
              <ChevronDown size={14} strokeWidth={1} className="text-pr-muted animate-bounce" />
              <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-pr-muted">Scroll to explore</span>
            </div>
          </div>

          {/* RIGHT — Image */}
          <div
            className={`relative lg:h-full h-[55vw] min-h-[380px] transition-all duration-1000 delay-200 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"}`}
          >
            {/* Main image */}
            <div className="absolute inset-0 lg:inset-4 rounded-none lg:rounded-3xl overflow-hidden">
              <Image
                src="/images/hero-render.jpg"
                alt="Platinum Royale — Premium Residences Wakad Pune"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle bottom gradient for text legibility */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating offer badge */}
            <div className="absolute top-8 right-8 z-10 bg-pr-charcoal-90 backdrop-blur-sm text-white rounded-2xl px-5 py-4 shadow-luxury-lg">
              <p className="font-sans text-[8px] uppercase tracking-[0.25em] text-pr-gold mb-1">Limited Inventory</p>
              <p className="font-serif text-lg font-medium leading-tight">Pre-Launch<br />Offer Open</p>
            </div>

            {/* Floating glass info card */}
            <div className="absolute bottom-8 left-4 right-4 lg:left-8 lg:right-auto lg:max-w-[280px] z-10 bg-white/80 backdrop-blur-md rounded-2xl px-6 py-5 shadow-glass border border-white/50">
              <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-pr-gold mb-3">Quick Info</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { l: "Location", v: "Wakad, Pune" },
                  { l: "Config", v: "2 BHK" },
                  { l: "Tower", v: "Single" },
                  { l: "RERA", v: "Registered" },
                ].map(({ l, v }) => (
                  <div key={l}>
                    <p className="font-sans text-[8px] uppercase tracking-wider text-pr-muted">{l}</p>
                    <p className="font-serif text-sm text-pr-charcoal mt-0.5">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} trigger={modalTrigger} />
    </>
  );
}
