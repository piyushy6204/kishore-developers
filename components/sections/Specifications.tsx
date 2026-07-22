"use client";
import { useRef, useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { SPECIFICATIONS } from "@/lib/content";
import { useInView } from "@/lib/useInView";
import { ChevronDown, Layers, Sofa, ChefHat, Frame, Droplets, ShieldCheck, Zap, Car, X } from "lucide-react";

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
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="specifications" className="section-padding bg-pr-off-white" aria-labelledby="specs-heading">
      <div className="container-pr">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel align="center" className="mb-4 justify-center">Specifications</SectionLabel>
          <h2 id="specs-heading" className="font-serif text-display-md text-pr-charcoal leading-tight">
            Crafted With Quality<br /><em className="not-italic text-pr-gold">In Every Detail</em>
          </h2>
          <div className="h-0.5 w-16 bg-pr-gold mx-auto mt-6" />
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
                  onClick={() => setModalOpen(true)}
                  className="w-[280px] md:w-[320px] flex-shrink-0 bg-white rounded-2xl p-6 shadow-card border border-pr-beige-60 transition-colors duration-300 hover:border-pr-gold cursor-pointer"
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest bg-pr-gold text-white hover:bg-pr-gold-dark transition-colors border border-pr-gold hover:border-pr-gold-dark rounded-full px-6 py-2.5"
          >
            View All Specifications
          </button>
        </div>
      </div>

      {/* Specifications Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="All Specifications"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-pr-charcoal-60 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
            aria-hidden="true"
          />

          {/* Modal card */}
          <div className="relative z-10 w-full max-w-3xl bg-pr-white rounded-2xl shadow-luxury-lg overflow-hidden flex flex-col max-h-[85vh]">
            {/* Gold top border */}
            <div className="h-0.5 w-full bg-pr-gold flex-shrink-0" />

            <div className="p-6 md:p-8 flex justify-between items-center border-b border-pr-beige flex-shrink-0">
              <h3 className="font-serif text-2xl text-pr-charcoal">All Specifications</h3>
              <button
                className="text-pr-muted hover:text-pr-charcoal transition-colors p-1"
                onClick={() => setModalOpen(false)}
                aria-label="Close specifications"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SPECIFICATIONS.map((spec) => {
                  const Icon = SPEC_ICONS[spec.title] || Layers;
                  return (
                    <div
                      key={spec.title}
                      className="bg-white rounded-xl p-5 flex items-start gap-4 shadow-sm border border-pr-beige-40"
                    >
                      <div className="w-10 h-10 flex-shrink-0 rounded-full bg-pr-off-white flex items-center justify-center">
                        <Icon size={18} strokeWidth={1.5} className="text-pr-gold" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg text-pr-charcoal mb-1">{spec.title}</h4>
                        <p className="font-sans text-xs text-pr-muted leading-relaxed">
                          {spec.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
