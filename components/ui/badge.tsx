import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "teal" | "dark" | "outline";
}

export function Badge({
  children,
  variant = "default",
  className,
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-background-secondary text-foreground border border-border",
    teal: "bg-brand-teal/10 text-brand-teal border border-brand-teal/20",
    dark: "bg-white/10 text-white border border-white/15",
    outline: "bg-transparent text-foreground-muted border border-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full select-none",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
