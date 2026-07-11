"use client";
import { useState } from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import LeadModal from "@/components/ui/LeadModal";
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from "@/lib/content";
import { X } from "lucide-react";

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
          <div className="mb-10">
            <SectionLabel>Gallery</SectionLabel>
            <h2 id="gallery-heading" className="font-serif text-display-md text-pr-charcoal leading-tight">
              Experience<br /><em className="not-italic text-pr-gold">Platinum Royale</em>
            </h2>
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

          {/* Masonry gallery */}
          <div className="masonry-gallery">
            {filtered.map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className="masonry-item img-reveal cursor-pointer"
                onClick={() => setLightbox(img.src)}
              >
                <div className="relative w-full rounded-2xl overflow-hidden shadow-card border border-pr-beige-40"
                  style={{ height: i % 3 === 0 ? 280 : i % 3 === 1 ? 200 : 240 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button id="gallery-brochure" variant="ghost" size="lg" onClick={() => setModalOpen(true)}>
              Download Brochure
            </Button>
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
              sizes="100vw"
            />
          </div>
        </div>
      )}

      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} trigger="brochure" />
    </>
  );
}
