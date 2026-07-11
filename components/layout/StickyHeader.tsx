"use client";
import { useEffect, useState, useCallback } from "react";
import Button from "@/components/ui/Button";
import LeadModal from "@/components/ui/LeadModal";
import { NAV_LINKS } from "@/lib/content";
import { Menu, X } from "lucide-react";

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-pr-white/95 backdrop-blur-md shadow-luxury-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-pr flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col leading-none">
            <span className="font-serif text-lg font-medium text-pr-charcoal tracking-tight">
              Platinum Royale
            </span>
            <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-pr-gold mt-0.5">
              by Kishor Developers
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`font-sans text-xs uppercase tracking-widest transition-colors duration-200 cursor-pointer ${
                  activeSection === link.href
                    ? "text-pr-gold"
                    : "text-pr-muted hover:text-pr-charcoal"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Button
              variant="gold"
              size="sm"
              className="hidden md:inline-flex"
              onClick={() => setModalOpen(true)}
              id="header-book-visit"
            >
              Book Visit
            </Button>
            <button
              className="lg:hidden text-pr-charcoal p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {menuOpen && (
          <div className="lg:hidden bg-pr-white border-t border-pr-beige py-6 px-6 space-y-4 shadow-luxury">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left font-sans text-xs uppercase tracking-widest text-pr-muted hover:text-pr-gold transition-colors py-2 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="gold"
              size="sm"
              className="w-full mt-2"
              onClick={() => { setModalOpen(true); setMenuOpen(false); }}
              id="header-mobile-book-visit"
            >
              Book Site Visit
            </Button>
          </div>
        )}
      </header>

      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} trigger="visit" />
    </>
  );
}
