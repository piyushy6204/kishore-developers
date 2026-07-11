"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import LeadModal from "@/components/ui/LeadModal";
import { FLOOR_PLANS } from "@/lib/content";
import { useInView } from "@/lib/useInView";
import { Download, Maximize2 } from "lucide-react";

export default function FloorPlans() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const [active, setActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="floor-plans" className="section-padding bg-pr-white" aria-labelledby="floorplans-heading">
        <div className="container-pr">
          {/* Header */}
          <div className="text-center mb-14">
            <SectionLabel align="center">Floor Plans</SectionLabel>
            <h2 id="floorplans-heading" className="font-serif text-display-md text-pr-charcoal leading-tight">
              Designed Around<br /><em className="not-italic text-pr-gold">The Way You Live</em>
            </h2>
          </div>

          {/* Type selector tabs */}
          <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
            {FLOOR_PLANS.map((fp, i) => (
              <button
                key={fp.label}
                onClick={() => setActive(i)}
                className={`font-sans text-xs uppercase tracking-widest rounded-full px-5 py-2.5 border transition-all duration-300 cursor-pointer ${
                  active === i
                    ? "bg-pr-charcoal text-white border-pr-charcoal"
                    : "bg-transparent text-pr-muted border-pr-beige hover:border-pr-charcoal hover:text-pr-charcoal"
                }`}
              >
                {fp.label}
              </button>
            ))}
          </div>

          {/* Active plan card */}
          <div
            ref={ref}
            className={`max-w-3xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="border border-pr-beige rounded-3xl overflow-hidden shadow-card bg-white">
              {/* Image */}
              <div className="relative h-72 md:h-96 bg-pr-off-white">
                <Image
                  src={FLOOR_PLANS[active].image}
                  alt={`Platinum Royale ${FLOOR_PLANS[active].type} ${FLOOR_PLANS[active].label} Floor Plan`}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>

              {/* Info bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-8 py-6 border-t border-pr-beige">
                <div>
                  <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-pr-gold mb-1">
                    {FLOOR_PLANS[active].label}
                  </p>
                  <p className="font-serif text-xl text-pr-charcoal">{FLOOR_PLANS[active].type}</p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <Maximize2 size={11} strokeWidth={1.5} className="text-pr-muted" />
                    <p className="font-sans text-xs text-pr-muted">Carpet Area: {FLOOR_PLANS[active].carpet}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    id={`floorplan-get-${active}`}
                    variant="ghost"
                    size="sm"
                    onClick={() => setModalOpen(true)}
                    className="flex items-center gap-1.5"
                  >
                    <Download size={12} strokeWidth={1.5} />
                    Get Plan
                  </Button>
                  <Button
                    id={`floorplan-visit-${active}`}
                    variant="gold"
                    size="sm"
                    onClick={() => setModalOpen(true)}
                  >
                    Book Visit
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* All floor plan cards — desktop only */}
          <div className="hidden md:grid grid-cols-4 gap-4 mt-8">
            {FLOOR_PLANS.map((fp, i) => (
              <button
                key={fp.label}
                onClick={() => setActive(i)}
                className={`group rounded-2xl border p-5 text-left cursor-pointer transition-all duration-300 ${
                  active === i
                    ? "border-pr-gold bg-pr-off-white shadow-card"
                    : "border-pr-beige bg-white hover:border-pr-gold hover:shadow-card"
                }`}
              >
                <p className="font-sans text-[9px] uppercase tracking-widest text-pr-gold mb-1">{fp.label}</p>
                <p className="font-serif text-sm text-pr-charcoal">{fp.type}</p>
                <p className="font-sans text-[10px] text-pr-muted mt-1">{fp.carpet}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} trigger="brochure" />
    </>
  );
}
