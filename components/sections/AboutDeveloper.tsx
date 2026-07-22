"use client";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import { ABOUT_STATS } from "@/lib/content";
import { useInView } from "@/lib/useInView";

export default function AboutDeveloper() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <section id="about" className="section-padding bg-pr-charcoal text-pr-white overflow-hidden" aria-labelledby="about-heading">
      <div className="container-pr">
        {/* Mobile-only Header */}
        <div className="block lg:hidden text-center mb-10">
          <p className="font-sans text-lg md:text-xl uppercase tracking-[0.25em] text-pr-gold font-bold mb-4 drop-shadow-sm">
            About Kishor Developers
          </p>
          <h2 className="font-serif text-display-md text-pr-white leading-tight text-left">
            Building Trust.<br />Creating Homes.<br />
            <em className="not-italic text-pr-gold">Delivering Value.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" ref={ref}>
          {/* Left — Stats */}
          <div
            className={`grid grid-cols-2 gap-6 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {ABOUT_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-white/[0.05] border border-white/10 rounded-2xl p-7 backdrop-blur-sm"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="font-serif text-5xl md:text-6xl text-pr-gold leading-none mb-2">
                  {inView ? (
                    <>
                      {stat.value > 0 ? (
                        <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                      ) : (
                        <span>0{stat.suffix}</span>
                      )}
                    </>
                  ) : (
                    <span>0</span>
                  )}
                </div>
                <p className="font-sans text-xs text-pr-grey uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Right — Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="hidden lg:block">
              <SectionLabel>About Kishor Developers</SectionLabel>
              <h2 id="about-heading" className="font-serif text-display-md text-pr-white leading-tight mb-6 mt-2 lg:mt-0">
                Building Trust.<br />Creating Homes.<br />
                <em className="not-italic text-pr-gold">Delivering Value.</em>
              </h2>
            </div>
            <p className="font-sans text-sm text-pr-grey leading-loose mb-6 max-w-md text-justify lg:mt-0 mt-4">
              For over 25 years, Kishor Developers has been crafting homes that go beyond
              construction, homes that become the foundation of cherished memories, lasting
              relationships, and generational value.
            </p>
            <p className="font-sans text-sm text-pr-grey leading-loose max-w-md text-justify">
              With 1000+ properties delivered across Pune, our commitment to quality construction,
              timely delivery, and customer-first philosophy has earned the trust of thousands of
              families who call our projects home.
            </p>

            {/* Philosophy pills */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["Quality Construction", "Timely Delivery", "Customer First", "25+ Years Trust"].map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-[10px] uppercase tracking-widest border border-pr-gold-40 text-pr-gold rounded-full px-4 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
