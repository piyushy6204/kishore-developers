"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { useInView } from "@/lib/useInView";
import SectionLabel from "@/components/ui/SectionLabel";
import { SAMPLE_FLAT_IMAGES } from "@/lib/content";
import { X, ZoomIn } from "lucide-react";
import LeadModal from "@/components/ui/LeadModal";

export default function SampleFlat() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section ref={ref} id="sample-flat" className="section-padding bg-pr-white" aria-labelledby="sample-flat-heading">
        <div className="container-pr">
          {/* Header */}
          <div className="text-center mb-14">
            <SectionLabel align="center" className="mb-4 justify-center text-lg md:text-xl">Demo Flat</SectionLabel>
            <h2 id="sample-flat-heading" className="font-serif text-display-md text-pr-charcoal leading-tight">
              Our Demo Flat
            </h2>
            <div className="h-0.5 w-16 bg-pr-gold mx-auto mt-6" />
          </div>

          {/* Horizontal Swipe Slider */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12">
            {SAMPLE_FLAT_IMAGES.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85vw] sm:w-[320px] md:w-[400px] snap-start cursor-pointer group"
                onClick={() => setLightboxIndex(index)}
              >
                <div className="relative w-full h-[260px] md:h-[320px] rounded-2xl overflow-hidden shadow-card border border-pr-beige">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 85vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pr-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <ZoomIn className="text-pr-gold mb-2" size={20} />
                    <p className="font-sans text-sm font-medium text-pr-white tracking-wide">
                      {img.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full font-sans font-semibold uppercase transition-all duration-300 cursor-pointer whitespace-nowrap px-10 py-4 text-sm tracking-widest bg-pr-gold text-white border border-pr-gold hover:bg-pr-gold-dark hover:border-pr-gold-dark"
            >
              Book a Site Visit
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[300] bg-pr-charcoal/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
          <div className="relative w-full max-w-4xl h-[75vh] rounded-2xl overflow-hidden">
            <Image
              src={SAMPLE_FLAT_IMAGES[lightboxIndex].src}
              alt={SAMPLE_FLAT_IMAGES[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
          <p className="absolute bottom-6 left-0 right-0 text-center font-sans text-sm tracking-widest uppercase text-pr-gold">
            {SAMPLE_FLAT_IMAGES[lightboxIndex].alt}
          </p>
        </div>
      )}

      {/* Modal */}
      {modalOpen && <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />}
    </>
  );
}
