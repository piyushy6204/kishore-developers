import { QUICK_INFO } from "@/lib/content";
import { MapPin, Home, IndianRupee, Shield, CalendarDays } from "lucide-react";

const ICONS = [MapPin, Home, IndianRupee, Shield, CalendarDays];

export default function QuickInfoStrip() {
  return (
    <section className="relative z-20 -mt-8 container-pr" aria-label="Project quick information">
      <div className="bg-white-90 backdrop-blur-md rounded-2xl shadow-luxury border border-pr-beige-60 px-6 py-5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 divide-x divide-pr-beige-60">
          {QUICK_INFO.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={item.label}
                className="flex flex-col items-center text-center px-4 py-2"
              >
                <Icon size={16} strokeWidth={1.5} className="text-pr-gold mb-2" />
                <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-pr-muted mb-1">
                  {item.label}
                </p>
                <p className="font-serif text-base text-pr-charcoal leading-tight">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
