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

        {/* Accordion */}
        <div className="max-w-2xl mx-auto space-y-2" ref={ref}>
          {SPECIFICATIONS.map((spec, i) => {
            const Icon = SPEC_ICONS[spec.title] || Layers;
            const isOpen = open === i;
            return (
              <div
                key={spec.title}
                className={`bg-white rounded-2xl border transition-all duration-[400ms] overflow-hidden ${isOpen ? "border-pr-gold shadow-card" : "border-pr-beige-60 shadow-card"} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isOpen ? "bg-pr-gold-10" : "bg-pr-off-white group-hover:bg-pr-beige"}`}>
                      <Icon size={15} strokeWidth={1.5} className={`transition-colors duration-300 ${isOpen ? "text-pr-gold" : "text-pr-taupe"}`} />
                    </div>
                    <span className="font-sans text-sm font-medium text-pr-charcoal text-left">{spec.title}</span>
                  </div>
                  <ChevronDown
                    size={16}
                    strokeWidth={1.5}
                    className={`text-pr-muted transition-transform duration-300 flex-shrink-0 ml-2 ${isOpen ? "rotate-180 text-pr-gold" : ""}`}
                  />
                </button>

                {/* Expandable content */}
                <div
                  className={`overflow-hidden transition-all duration-[400ms] ${isOpen ? "max-h-24 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-6 pb-5 pl-[4.25rem]">
                    <p className="font-sans text-sm text-pr-muted leading-relaxed">{spec.detail}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
