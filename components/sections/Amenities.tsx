"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import LeadModal from "@/components/ui/LeadModal";
import { AMENITIES } from "@/lib/content";
import { useInView } from "@/lib/useInView";
import {
  DoorOpen, Sun, Dumbbell, Baby, Leaf, Car,
  Droplets, Zap, ShieldCheck,
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
  const [modalOpen, setModalOpen] = useState(false);

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
            sizes="100vw"
          />
          <div className="absolute inset-0 flex items-end p-8">
            <div>
              <SectionLabel className="mb-2">Section 04</SectionLabel>
              <h2 id="amenities-heading" className="font-serif text-display-md text-white leading-tight">
                Every Amenity.<br />Every Comfort.<br /><em className="not-italic text-pr-gold-light">Every Day.</em>
              </h2>
            </div>
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-pr-charcoal/70 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="container-pr" ref={ref}>
          {/* Amenities grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-12">
            {AMENITIES.map((item, i) => {
              const Icon = ICON_MAP[item.icon] || Leaf;
              return (
                <div
                  key={item.name}
                  className={`group bg-white rounded-2xl p-7 flex flex-col items-center text-center shadow-card border border-pr-beige-40 cursor-default transition-all duration-[400ms] hover:shadow-card-hover hover:-translate-y-1 hover:border-pr-gold-30 ${
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
          <div className="text-center">
            <Button id="amenities-visit" variant="gold" size="lg" onClick={() => setModalOpen(true)}>
              Schedule Site Visit
            </Button>
          </div>
        </div>
      </section>

      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} trigger="visit" />
    </>
  );
}
