"use client";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  gold: "bg-pr-gold text-white border border-pr-gold hover:bg-pr-gold-dark hover:border-pr-gold-dark",
  outline: "bg-transparent text-pr-charcoal border border-pr-charcoal hover:bg-pr-charcoal hover:text-pr-white",
  ghost: "bg-transparent text-pr-gold border border-pr-gold hover:bg-pr-gold hover:text-white",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-5 py-2.5 text-xs tracking-widest",
  md: "px-7 py-3.5 text-xs tracking-widest",
  lg: "px-10 py-4 text-sm tracking-widest",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "gold", size = "md", className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium uppercase transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pr-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
