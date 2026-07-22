"use client";
import { useRef } from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { HIGHLIGHTS } from "@/lib/content";
import { useInView } from "@/lib/useInView";

export default function ProjectOverview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.15 });

  return (
    <>
      <section id="overview" className="section-padding bg-pr-off-white" aria-labelledby="overview-heading">
        <div className="container-pr">
          {/* Mobile-only Header */}
          <div className="block lg:hidden mb-8 text-center">
            <p className="font-sans text-lg md:text-xl uppercase tracking-[0.25em] text-pr-gold font-bold mb-4 drop-shadow-sm">
              Discover Platinum Royale
            </p>
            <h2 className="font-serif text-display-md text-pr-charcoal leading-tight text-left">
              A Home That<br />Celebrates Modern<br /><em className="text-pr-gold not-italic">Living</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center" ref={ref}>
            {/* Image side */}
            <div
              className={`relative transition-all duration-1000 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <div className="relative h-[500px] md:h-[620px] rounded-3xl overflow-hidden shadow-luxury-lg img-reveal">
                <Image
                  src="/night_life.png"
                  alt="Platinum Royale Project Overview — Wakad Pune"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-pr-charcoal text-white rounded-2xl px-6 py-5 shadow-luxury-lg max-w-[200px]">
                <p className="font-sans text-[9px] uppercase tracking-widest text-pr-gold mb-1">Development</p>
                <p className="font-serif text-xl leading-tight">Exclusive<br />Single Tower</p>
              </div>
            </div>

            {/* Content side */}
            <div
              className={`transition-all duration-1000 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {/* Desktop Header */}
              <div className="hidden lg:block">
                <SectionLabel>Discover Platinum Royale</SectionLabel>
                <h2 id="overview-heading" className="font-serif text-display-md text-pr-charcoal mb-6 leading-tight">
                  A Home That<br />Celebrates Modern<br /><em className="text-pr-gold not-italic">Living</em>
                </h2>
              </div>

              <p className="font-sans text-sm text-pr-muted leading-loose mb-10 max-w-md text-justify">
                More than just a residence, Platinum Royale is a thoughtfully curated lifestyle destination.
                Designed with elegant architecture, intelligent planning, and premium finishes,
                every home reflects comfort, sophistication, and lasting value.
              </p>

              {/* Highlight cards — 2-column grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {HIGHLIGHTS.map((item, i) => (
                  <div
                    key={item.title}
                    className={`border-l-2 border-pr-gold pl-4 py-1 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: `${300 + i * 80}ms` }}
                  >
                    <p className="font-sans text-sm font-medium text-pr-charcoal mb-1">{item.title}</p>
                    <p className="font-sans text-xs text-pr-muted leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              <div className="text-center lg:text-left mt-2">
                <a
                  id="overview-brochure"
                  href="/brochure/platinum-royale-brochure.pdf"
                  download="Platinum-Royale-Brochure.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold uppercase transition-all duration-300 cursor-pointer whitespace-nowrap px-7 py-3.5 text-xs tracking-widest bg-pr-gold text-white border border-pr-gold hover:bg-pr-gold-dark hover:border-pr-gold-dark"
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
