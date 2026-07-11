import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

export default function SectionLabel({ children, className, align = "left" }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3 mb-4", align === "center" && "justify-center", className)}>
      <span className="font-sans text-sm font-medium uppercase tracking-[0.25em] text-pr-gold">
        {children}
      </span>
    </div>
  );
}
