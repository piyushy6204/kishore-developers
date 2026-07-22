"use client";
import { useRef, useState, useEffect } from "react";
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  // Sync tabs container scroll position when active tab changes
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth >= 768) return;
    const tabsContainer = tabsContainerRef.current;
    if (tabsContainer) {
      const activeTab = tabsContainer.children[active] as HTMLElement;
      if (activeTab) {
        const scrollLeft = activeTab.offsetLeft - (tabsContainer.offsetWidth / 2) + (activeTab.offsetWidth / 2);
        tabsContainer.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [active]);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth >= 768) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute("data-index") || "0", 10);
            setActive(idx);
          }
        });
      },
      { root: container, threshold: 0.6 }
    );

    Array.from(container.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  const handleTabClick = (index: number) => {
    setActive(index);
    if (typeof window !== "undefined" && window.innerWidth < 768 && scrollContainerRef.current) {
      const cards = scrollContainerRef.current.children;
      const targetCard = cards[index] as HTMLElement;
      if (targetCard) {
        const scrollLeft = targetCard.offsetLeft - (scrollContainerRef.current.offsetWidth / 2) + (targetCard.offsetWidth / 2);
        scrollContainerRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <section id="floor-plans" className="section-padding bg-pr-white" aria-labelledby="floorplans-heading">
        <div className="container-pr">
          {/* Header */}
          <div className="text-center mb-14">
            <SectionLabel align="center" className="mb-4 justify-center">Floor Plans</SectionLabel>
            <h2 id="floorplans-heading" className="font-serif text-display-md text-pr-charcoal leading-tight">
              Designed Around<br /><em className="not-italic text-pr-gold">The Way You Live</em>
            </h2>
            <div className="h-0.5 w-16 bg-pr-gold mx-auto mt-6" />
          </div>

          {/* Type selector tabs */}
          <div 
            ref={tabsContainerRef}
            className="flex items-center md:justify-center gap-2 mb-10 overflow-x-auto whitespace-nowrap snap-x snap-mandatory scrollbar-hide pb-2 px-4 -mx-4 md:px-0 md:mx-0"
          >
            {FLOOR_PLANS.map((fp, i) => (
              <button
                key={fp.label}
                onClick={() => handleTabClick(i)}
                className={`font-sans text-xs uppercase tracking-widest rounded-full px-5 py-2.5 border transition-all duration-300 cursor-pointer flex-shrink-0 snap-center ${
                  active === i
                    ? "bg-pr-charcoal text-white border-pr-charcoal"
                    : "bg-transparent text-pr-muted border-pr-beige hover:border-pr-charcoal hover:text-pr-charcoal"
                }`}
              >
                {fp.label}
              </button>
            ))}
          </div>

          {/* Floor Plan Cards (Mobile Swipe, Desktop Single Active) */}
          <div
            ref={(node) => {
              // @ts-ignore
              ref.current = node;
              // @ts-ignore
              scrollContainerRef.current = node;
            }}
            className={`flex md:block gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 -mx-4 px-4 md:-mx-0 md:px-0 md:max-w-3xl md:mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {FLOOR_PLANS.map((plan, idx) => (
              <div
                key={plan.label}
                data-index={idx}
                className={`flex-shrink-0 w-[85vw] snap-center md:w-full border border-pr-beige rounded-3xl overflow-hidden shadow-card bg-white ${
                  idx === active ? "block" : "md:hidden"
                }`}
              >
                {/* Image */}
                <div className="relative h-72 md:h-96 bg-pr-off-white">
                  <Image
                    src={plan.image}
                    alt={`Platinum Royale ${plan.type} ${plan.label} Floor Plan`}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>

                {/* Info bar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-8 py-6 border-t border-pr-beige">
                  <div>
                    <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-pr-gold mb-1">
                      {plan.label}
                    </p>
                    <p className="font-serif text-xl text-pr-charcoal">{plan.type}</p>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <Maximize2 size={11} strokeWidth={1.5} className="text-pr-muted" />
                      <p className="font-sans text-xs text-pr-muted">Carpet Area: {plan.carpet}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      id={`floorplan-get-${idx}`}
                      href={plan.image}
                      download={`Platinum-Royale-${plan.label}.jpg`}
                      className="inline-flex items-center justify-center gap-1.5 rounded-full font-sans font-medium uppercase transition-all duration-300 cursor-pointer whitespace-nowrap px-5 py-2.5 text-xs tracking-widest bg-pr-gold text-white border border-pr-gold hover:bg-pr-gold-dark hover:border-pr-gold-dark"
                    >
                      <Download size={12} strokeWidth={1.5} />
                      Get Plan
                    </a>
                    <Button
                      id={`floorplan-visit-${idx}`}
                      variant="gold"
                      size="sm"
                      onClick={() => setModalOpen(true)}
                    >
                      Book Visit
                    </Button>
                  </div>
                </div>
              </div>
            ))}
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
