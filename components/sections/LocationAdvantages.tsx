"use client";
import { useRef, useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import LeadModal from "@/components/ui/LeadModal";
import { LOCATION_ADVANTAGES, SITE } from "@/lib/content";
import { useInView } from "@/lib/useInView";
import { Building2, GraduationCap, Stethoscope, ShoppingBag, Route } from "lucide-react";

const CAT_ICONS: Record<string, React.ElementType> = {
  "IT Parks": Building2,
  "Education": GraduationCap,
  "Healthcare": Stethoscope,
  "Shopping": ShoppingBag,
  "Connectivity": Route,
};

export default function LocationAdvantages() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="location" className="section-padding bg-pr-white" aria-labelledby="location-heading">
        <div className="container-pr">
          {/* Header */}
          <div className="mb-12">
            <SectionLabel>Location</SectionLabel>
            <h2 id="location-heading" className="font-serif text-display-md text-pr-charcoal leading-tight">
              Connected To<br /><em className="not-italic text-pr-gold">Everything That Matters</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" ref={ref}>
            {/* Map */}
            <div
              className={`relative h-[400px] lg:h-full min-h-[380px] rounded-3xl overflow-hidden shadow-luxury border border-pr-beige transition-all duration-1000 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <iframe
                src={SITE.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Platinum Royale Location — Wakad, Pune"
              />
            </div>

            {/* Advantages */}
            <div
              className={`space-y-6 transition-all duration-1000 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              {LOCATION_ADVANTAGES.map((cat) => {
                const Icon = CAT_ICONS[cat.category] || Building2;
                return (
                  <div key={cat.category} className="bg-pr-off-white rounded-2xl p-5 border border-pr-beige-60">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-luxury-sm">
                        <Icon size={13} strokeWidth={1.5} className="text-pr-gold" />
                      </div>
                      <p className="font-sans text-xs font-medium uppercase tracking-widest text-pr-charcoal">
                        {cat.category}
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      {cat.items.map((item) => (
                        <div key={item.name} className="flex items-center justify-between">
                          <p className="font-sans text-xs text-pr-muted">{item.name}</p>
                          <span className="font-sans text-[10px] badge-gold px-2.5 py-0.5 rounded-full font-medium flex-shrink-0 ml-2">
                            {item.distance}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* CTA */}
              <Button id="location-visit" variant="gold" size="md" onClick={() => setModalOpen(true)}>
                Book Site Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} trigger="visit" />
    </>
  );
}
