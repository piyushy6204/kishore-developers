"use client";
import { useEffect, useRef, useState } from "react";
import LeadModal from "@/components/ui/LeadModal";

export default function ExitIntentWrapper() {
  const [show, setShow] = useState(false);
  const fired = useRef(false);

  useEffect(() => {
    // Desktop: mouse leaves top of viewport
    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY < 10 && !fired.current) {
        fired.current = true;
        setTimeout(() => setShow(true), 300);
      }
    };
    // Mobile: show after 40s
    const timer = setTimeout(() => {
      if (!fired.current) {
        fired.current = true;
        setShow(true);
      }
    }, 40000);

    document.addEventListener("mouseleave", onMouseOut);
    return () => {
      document.removeEventListener("mouseleave", onMouseOut);
      clearTimeout(timer);
    };
  }, []);

  return (
    <LeadModal
      isOpen={show}
      onClose={() => setShow(false)}
      trigger="exit"
    />
  );
}
