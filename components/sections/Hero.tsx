"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import LeadModal from "@/components/ui/LeadModal";
import { SITE } from "@/lib/content";
import { Shield } from "lucide-react";

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  return (
    <>
      {/* Full-viewport hero — image fills entire section, text overlaid */}
      <section
        id="hero"
        className="relative w-full min-h-[95svh] md:min-h-screen overflow-hidden bg-pr-charcoal"
        aria-label="Platinum Royale Hero"
      >
        {/* Background image — Desktop */}
        <Image
          src="/hero_image.png"
          alt="Platinum Royale — Premium Residences Wakad Pune"
          fill
          className="hidden md:block object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Background image — Mobile */}
        <Image
          src="/hero_ff.png"
          alt="Platinum Royale — Premium Residences Wakad Pune"
          fill
          className="block md:hidden object-cover object-center"
          priority
          sizes="100vw"
        />

        {/* Dark gradient overlay — Desktop only */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        {/* Bottom gradient — Desktop only */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {/* Mobile-only top darkening removed as per request to keep image clear */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent md:hidden" /> */}

        {/* Content — sits below fixed header using pt-[80px], shifted up on mobile */}
        <div className="hidden md:flex relative z-10 flex-col justify-center min-h-screen pt-[80px] px-6 md:px-16 lg:px-24 pb-16 md:pb-16">
          <div className="max-w-2xl">
            {/* Developer tag */}
            <div
              className={`flex items-center gap-3 mb-8 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <span className="font-sans text-base md:text-lg uppercase tracking-[0.3em] text-pr-gold font-semibold drop-shadow-lg" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
                Kishor Developers Presents
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`font-serif text-display-lg text-white leading-[0.95] mb-6 transition-all duration-700 delay-150 drop-shadow-2xl ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ textShadow: '0 4px 24px rgba(0,0,0,0.75)' }}
            >
              Find Your<br />
              <em className="not-italic text-pr-gold">Place</em> In<br />
              <span className="block">Wakad&apos;s</span>
              <span className="block">Most Elegant</span>
              <span className="block">Address</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`font-sans text-sm text-white/80 leading-relaxed max-w-lg mb-8 transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Premium 2 BHK residences crafted for families who appreciate thoughtful
              design, exceptional quality, and a lifestyle that reflects their aspirations.
            </p>

            {/* Price + RERA badges */}
            <div
              className={`flex flex-wrap items-center gap-3 mb-10 transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="bg-pr-gold text-white rounded-full px-5 py-2.5 flex items-baseline gap-2">
                <span className="font-sans text-[9px] uppercase tracking-widest text-white/70">Starting From</span>
                <span className="font-serif text-xl font-medium">{SITE.startingPrice}</span>
              </div>
              <div className="flex items-center gap-1.5 border border-white/30 rounded-full px-4 py-2 backdrop-blur-sm">
                <Shield size={11} strokeWidth={1.5} className="text-pr-gold" />
                <span className="font-sans text-[9px] uppercase tracking-widest text-white/80">
                  RERA: {SITE.rera}
                </span>
              </div>
            </div>


          </div>

          {/* Bottom-right floating badge */}
          <div
            className={`absolute bottom-10 right-6 md:right-16 z-10 bg-pr-charcoal-90 backdrop-blur-sm text-white rounded-2xl px-5 py-4 shadow-luxury-lg transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <p className="font-sans text-[8px] uppercase tracking-[0.25em] text-pr-gold mb-1">Limited Inventory</p>
            <p className="font-serif text-lg font-medium leading-tight">Pre-Launch<br />Offer Open</p>
          </div>
        </div>
      </section>

      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} trigger="visit" />
    </>
  );
}
