import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "dark" | "outline";
  hoverable?: boolean;
}

export function Card({
  children,
  variant = "default",
  hoverable = true,
  className,
  ...props
}: CardProps) {
  const variants = {
    default:
      "bg-white dark:bg-background-elevated border border-brand-navy/10 dark:border-white/15 text-brand-navy dark:text-slate-100 shadow-subtle",
    elevated:
      "bg-white dark:bg-background-elevated border border-brand-navy/10 dark:border-white/15 text-brand-navy dark:text-slate-100 shadow-card",
    dark:
      "bg-brand-navy dark:bg-black/60 text-white border border-white/15 shadow-subtle",
    outline:
      "bg-transparent border border-brand-navy/15 dark:border-white/20 text-brand-navy dark:text-slate-100",
  };

  return (
    <div
      className={cn(
        "rounded-brand-lg p-6 sm:p-8 transition-all duration-300",
        variants[variant],
        hoverable && "hover:shadow-card hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
