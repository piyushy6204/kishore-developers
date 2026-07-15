import StickyHeader from "@/components/layout/StickyHeader";
import Footer from "@/components/layout/Footer";
import FloatingCTAs from "@/components/layout/FloatingCTAs";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ExitIntentWrapper from "@/components/ui/ExitIntentWrapper";

import Hero from "@/components/sections/Hero";
import QuickInfoStrip from "@/components/sections/QuickInfoStrip";
import ProjectOverview from "@/components/sections/ProjectOverview";
import Amenities from "@/components/sections/Amenities";
import FloorPlans from "@/components/sections/FloorPlans";
import Gallery from "@/components/sections/Gallery";
import LocationAdvantages from "@/components/sections/LocationAdvantages";
import Specifications from "@/components/sections/Specifications";
import AboutDeveloper from "@/components/sections/AboutDeveloper";
import LeadForm from "@/components/sections/LeadForm";

export default function HomePage() {
  return (
    <>
      {/* Progress bar */}
      <ScrollProgress />

      {/* Navigation */}
      <StickyHeader />

      {/* Main content */}
      <main>
        <Hero />
        <QuickInfoStrip />
        <LeadForm />
        <ProjectOverview />
        <Amenities />
        <FloorPlans />
        <Gallery />
        <LocationAdvantages />
        <Specifications />
        <AboutDeveloper />
        <LeadForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating CTAs: WhatsApp + mobile sticky */}
      <FloatingCTAs />

      {/* Exit intent modal */}
      <ExitIntentWrapper />
    </>
  );
}
