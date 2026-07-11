"use client";
import { SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-pr-charcoal text-pr-off-white">
      {/* Gold divider */}
      <div className="h-px w-full bg-pr-gold-40" />

      <div className="container-pr py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-pr-gold mb-3">
              Kishor Developers
            </p>
            <h3 className="font-serif text-3xl font-light text-pr-white mb-4 leading-tight">
              Platinum Royale
            </h3>
            <p className="font-sans text-xs text-pr-grey leading-relaxed">
              Premium 2 BHK Residences<br />
              Wakad, Pune – 411057
            </p>
            <p className="font-sans text-[10px] text-pr-taupe mt-4 tracking-wide">
              MAHA RERA Reg. No.: {SITE.rera}
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-pr-gold mb-5">
              Get In Touch
            </p>
            <div className="space-y-3">
              <p className="font-sans text-xs text-pr-grey">
                <span className="text-pr-muted-light block mb-0.5">Phone</span>
                {SITE.phone}
              </p>
              <p className="font-sans text-xs text-pr-grey">
                <span className="text-pr-muted-light block mb-0.5">Email</span>
                {SITE.email}
              </p>
              <p className="font-sans text-xs text-pr-grey">
                <span className="text-pr-muted-light block mb-0.5">Site Office</span>
                {SITE.siteAddress}
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-pr-gold mb-5">
              Quick Links
            </p>
            <div className="space-y-2">
              {["Overview", "Amenities", "Floor Plans", "Gallery", "Location", "Contact"].map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    const el = document.getElementById(l.toLowerCase().replace(" ", "-"));
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block font-sans text-xs text-pr-grey hover:text-pr-gold transition-colors cursor-pointer"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-sans text-[10px] text-pr-taupe leading-relaxed max-w-2xl">
            <strong className="text-pr-grey">Disclaimer:</strong> All details including price, area, configuration, and amenities are indicative and subject to change without notice. Images shown are for representation purposes only. This communication is not an offer or invitation to purchase. Buyers are advised to do their own due diligence before making any purchase decision. MAHA RERA: {SITE.rera}
          </p>
          <p className="font-sans text-[10px] text-pr-taupe flex-shrink-0">
            © {new Date().getFullYear()} Kishor Developers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
