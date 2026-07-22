"use client";
import { useState } from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from "@/lib/content";
import { X } from "lucide-react";
import LeadModal from "@/components/ui/LeadModal";

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filtered =
    active === "All" ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === active);

  return (
    <>
      <section id="gallery" className="section-padding bg-pr-off-white" aria-labelledby="gallery-heading">
        <div className="container-pr">
          {/* Header */}
          <div className="text-center mb-14">
            <SectionLabel align="center" className="mb-4 justify-center">Gallery</SectionLabel>
            <h2 id="gallery-heading" className="font-serif text-display-md text-pr-charcoal leading-tight">
              Experience<br /><em className="not-italic text-pr-gold">Platinum Royale</em>
            </h2>
            <div className="h-0.5 w-16 bg-pr-gold mx-auto mt-6" />
          </div>

          {/* Category filter */}
          <div className="flex gap-2 flex-wrap mb-10">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-sans text-[10px] uppercase tracking-[0.2em] rounded-full px-4 py-2 border transition-all duration-300 cursor-pointer ${
                  active === cat
                    ? "bg-pr-charcoal text-white border-pr-charcoal"
                    : "bg-transparent text-pr-muted border-pr-beige hover:border-pr-charcoal"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Horizontal Swipe Gallery */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12">
            {filtered.map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center cursor-pointer group"
                onClick={() => setLightbox(img.src)}
              >
                <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-card border border-pr-beige-40">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className={`transition-transform duration-700 group-hover:scale-105 ${img.src.includes('enterance_lobby') || img.src.includes('lifestyle_space') || img.src.includes('fitness_area') || img.src.includes('night_life') ? 'object-contain' : 'object-cover'}`}
                    sizes="(max-width: 768px) 85vw, 600px"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold uppercase transition-all duration-300 cursor-pointer whitespace-nowrap px-10 py-4 text-sm tracking-widest bg-pr-gold text-white border border-pr-gold hover:bg-pr-gold-dark hover:border-pr-gold-dark"
            >
              Book a Site Visit
            </button>
            <a
              id="gallery-brochure"
              href="/brochure/platinum-royale-brochure.pdf"
              download="Platinum-Royale-Brochure.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold uppercase transition-all duration-300 cursor-pointer whitespace-nowrap px-10 py-4 text-sm tracking-widest bg-transparent text-pr-gold border border-pr-gold hover:bg-pr-gold hover:text-white"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[300] bg-pr-charcoal-90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
          <div className="relative w-full max-w-4xl h-[75vh] rounded-2xl overflow-hidden">
            <Image
              src={lightbox}
              alt="Gallery preview"
              fill
              className="object-contain"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        </div>
      )}

      {/* Modal */}
      {modalOpen && <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />}
    </>
  );
}
