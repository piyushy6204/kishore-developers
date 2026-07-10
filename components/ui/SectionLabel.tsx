import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

export default function SectionLabel({ children, className, align = "left" }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3 mb-4", align === "center" && "justify-center", className)}>
      <span className="block w-8 h-px bg-pr-gold flex-shrink-0" />
      <span className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-pr-gold">
        {children}
      </span>
    </div>
  );
}
