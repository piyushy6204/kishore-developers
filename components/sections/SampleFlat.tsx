"use client";
import { useState } from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { SAMPLE_FLAT_IMAGES } from "@/lib/content";
import { X, ZoomIn } from "lucide-react";

export default function SampleFlat() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="sample-flat" className="section-padding bg-pr-white" aria-labelledby="sample-flat-heading">
      <div className="container-pr">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel className="mb-4 justify-center">Experience Luxury</SectionLabel>
          <h2 id="sample-flat-heading" className="font-serif text-display-md text-pr-charcoal leading-tight">
            Our Demo Flat
          </h2>
          <div className="h-0.5 w-16 bg-pr-gold mx-auto mt-6" />
        </div>

        {/* Sliding View */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 -mx-4 px-4 md:mx-0 md:px-0">
          {SAMPLE_FLAT_IMAGES.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] sm:w-[320px] md:w-[400px] snap-start relative group overflow-hidden rounded-2xl shadow-luxury-sm cursor-pointer border border-pr-beige bg-pr-off-white"
              onClick={() => setLightboxIndex(index)}
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 85vw, (max-width: 1200px) 400px, 400px"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-pr-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <ZoomIn className="text-pr-gold mb-3" size={24} />
                <p className="font-sans font-medium text-pr-white tracking-wide">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X size={32} strokeWidth={1.5} />
          </button>
          
          <div className="relative w-full max-w-5xl aspect-[4/3] sm:aspect-video rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={SAMPLE_FLAT_IMAGES[lightboxIndex].src}
              alt={SAMPLE_FLAT_IMAGES[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          
          <p className="absolute bottom-8 left-0 right-0 text-center font-sans text-sm tracking-widest uppercase text-pr-gold">
            {SAMPLE_FLAT_IMAGES[lightboxIndex].alt}
          </p>
        </div>
      )}
    </section>
  );
}
