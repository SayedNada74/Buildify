import React from "react";
import { cn } from "@/lib/utils";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel: string;
  children: React.ReactNode;
  variant?: "default" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
}

export function IconButton({
  ariaLabel,
  children,
  variant = "default",
  size = "md",
  className,
  ...props
}: IconButtonProps) {
  const variants = {
    default: "bg-brand-beige-subtle text-brand-navy border border-brand-navy/10 hover:bg-brand-navy/5",
    ghost: "bg-transparent text-brand-navy hover:bg-brand-navy/5",
    dark: "bg-white/10 text-white border border-white/15 hover:bg-white/20",
  };

  const sizes = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
  };

  return (
    <button
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 select-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
