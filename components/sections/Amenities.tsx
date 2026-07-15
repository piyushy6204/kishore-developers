"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { AMENITIES } from "@/lib/content";
import { useInView } from "@/lib/useInView";
import {
  DoorOpen, Sun, Dumbbell, Baby, Leaf, Car,
  Droplets, Zap, ShieldCheck, X
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  gate: DoorOpen,
  sun: Sun,
  dumbbell: Dumbbell,
  playground: Baby,
  leaf: Leaf,
  car: Car,
  droplet: Droplets,
  zap: Zap,
  shield: ShieldCheck,
};

export default function Amenities() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const [amenitiesModalOpen, setAmenitiesModalOpen] = useState(false);

  return (
    <>
      <section id="amenities" className="section-padding bg-pr-off-white" aria-labelledby="amenities-heading">
        {/* Hero amenity image */}
        <div className="relative h-64 md:h-80 mb-16 overflow-hidden mx-4 md:mx-8 rounded-3xl shadow-luxury-lg img-reveal">
          <Image
            src="/images/amenities-hero.jpg"
            alt="Platinum Royale Amenities — Sky Deck and Lifestyle"
            fill
            className="object-cover"
            sizes="95vw"
          />
          <div className="absolute inset-0 flex items-end p-8 pb-12 md:pb-16">
            <div className="relative z-10">
              <h2 id="amenities-heading" className="font-serif text-display-md text-white leading-tight drop-shadow-md">
                Every Amenity.<br />Every Comfort.<br />Every Day.
              </h2>
            </div>
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-pr-charcoal/70 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="container-pr" ref={ref}>
          {/* Amenities horizontal scroll */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 -mx-4 px-4 md:mx-0 md:px-0">
            {AMENITIES.map((item, i) => {
              const Icon = ICON_MAP[item.icon] || Leaf;
              return (
                <div
                  key={item.name}
                  onClick={() => setAmenitiesModalOpen(true)}
                  className={`flex-shrink-0 w-[65vw] sm:w-[250px] snap-start group bg-white rounded-2xl p-7 flex flex-col items-center text-center shadow-card border border-pr-beige-40 cursor-pointer transition-all duration-[400ms] hover:shadow-card-hover hover:-translate-y-1 hover:border-pr-gold-30 ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${i * 60}ms`, transitionDuration: "500ms" }}
                >
                  <div className="w-12 h-12 rounded-full bg-pr-off-white flex items-center justify-center mb-4 group-hover:bg-pr-beige transition-colors duration-300">
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="text-pr-taupe group-hover:text-pr-gold transition-colors duration-300"
                    />
                  </div>
                  <p className="font-sans text-xs font-medium text-pr-charcoal leading-snug">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-4">
            <button
              onClick={() => setAmenitiesModalOpen(true)}
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-pr-gold hover:text-pr-gold-dark transition-colors border border-pr-gold/30 hover:border-pr-gold rounded-full px-6 py-2.5"
            >
              View All Amenities
            </button>
          </div>
        </div>
      </section>

      {/* Amenities Modal */}
      {amenitiesModalOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="All Amenities"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-pr-charcoal-60 backdrop-blur-sm"
            onClick={() => setAmenitiesModalOpen(false)}
            aria-hidden="true"
          />

          {/* Modal card */}
          <div className="relative z-10 w-full max-w-2xl bg-pr-white rounded-2xl shadow-luxury-lg overflow-hidden flex flex-col max-h-[85vh]">
            {/* Gold top border */}
            <div className="h-0.5 w-full bg-pr-gold flex-shrink-0" />

            <div className="p-6 md:p-8 flex justify-between items-center border-b border-pr-beige flex-shrink-0">
              <h3 className="font-serif text-2xl text-pr-charcoal">All Amenities</h3>
              <button
                className="text-pr-muted hover:text-pr-charcoal transition-colors p-1"
                onClick={() => setAmenitiesModalOpen(false)}
                aria-label="Close amenities"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {AMENITIES.map((item) => {
                  const Icon = ICON_MAP[item.icon] || Leaf;
                  return (
                    <div
                      key={item.name}
                      className="bg-white rounded-xl p-5 flex flex-col items-center text-center shadow-sm border border-pr-beige-40"
                    >
                      <div className="w-10 h-10 rounded-full bg-pr-off-white flex items-center justify-center mb-3">
                        <Icon size={18} strokeWidth={1.5} className="text-pr-gold" />
                      </div>
                      <p className="font-sans text-xs font-medium text-pr-charcoal leading-snug">
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
