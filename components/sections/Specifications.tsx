"use client";
import { useRef, useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { SPECIFICATIONS } from "@/lib/content";
import { useInView } from "@/lib/useInView";
import { ChevronDown, Layers, Sofa, ChefHat, Frame, Droplets, ShieldCheck, Zap, Car } from "lucide-react";

const SPEC_ICONS: Record<string, React.ElementType> = {
  Structure: Layers,
  Flooring: Sofa,
  Kitchen: ChefHat,
  Windows: Frame,
  Bathroom: Droplets,
  Security: ShieldCheck,
  Electrical: Zap,
  Parking: Car,
};

export default function Specifications() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="specifications" className="section-padding bg-pr-off-white" aria-labelledby="specs-heading">
      <div className="container-pr">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel align="center">Specifications</SectionLabel>
          <h2 id="specs-heading" className="font-serif text-display-md text-pr-charcoal leading-tight">
            Crafted With Quality<br /><em className="not-italic text-pr-gold">In Every Detail</em>
          </h2>
        </div>

        {/* Infinite Marquee Cards */}
        <div className="relative w-full overflow-hidden mt-10 flex group" ref={ref}>
          {/* Fading edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-pr-off-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-pr-off-white to-transparent z-10 pointer-events-none" />

          <div
            className={`flex gap-6 min-w-max py-4 px-3 transition-opacity duration-1000 ${inView ? "animate-marquee opacity-100" : "opacity-0"}`}
          >
            {[...SPECIFICATIONS, ...SPECIFICATIONS].map((spec, i) => {
              const Icon = SPEC_ICONS[spec.title] || Layers;
              return (
                <div
                  key={`${spec.title}-${i}`}
                  className="w-[280px] md:w-[320px] flex-shrink-0 bg-white rounded-2xl p-6 shadow-card border border-pr-beige-60 transition-colors duration-300 hover:border-pr-gold"
                >
                  <div className="w-12 h-12 rounded-full bg-pr-gold-10 flex items-center justify-center mb-4 transition-colors duration-300 hover:bg-pr-gold-20">
                    <Icon size={20} strokeWidth={1.5} className="text-pr-gold" />
                  </div>
                  <h3 className="font-serif text-lg text-pr-charcoal mb-2">{spec.title}</h3>
                  <p className="font-sans text-sm text-pr-muted leading-relaxed">{spec.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
