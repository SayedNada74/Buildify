"use client";

import React from "react";
import Link from "next/link";
import { cn, getWhatsAppUrl } from "@/lib/utils";
import { siteConfig } from "@/data/site-config";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/providers/language-provider";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "text" | "dark";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  isWhatsApp?: boolean;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  showArrow = false,
  isWhatsApp = false,
  href,
  external = false,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const { dir, t } = useLanguage();
  const isRtl = dir === "rtl";

  const baseStyles =
    "inline-flex items-center justify-center font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-brand select-none";

  const variants = {
    primary:
      "bg-brand-navy text-white hover:bg-brand-navy/90 dark:bg-brand-teal dark:text-brand-navy dark:hover:bg-brand-teal-hover shadow-subtle hover:shadow-card hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-brand-beige-subtle text-brand-navy border border-brand-navy/20 hover:bg-brand-beige hover:border-brand-navy/40 dark:bg-white/10 dark:text-white dark:border-white/20 dark:hover:bg-white/20",
    ghost:
      "bg-transparent text-brand-navy dark:text-slate-100 hover:bg-brand-navy/10 dark:hover:bg-white/10",
    text:
      "bg-transparent text-brand-navy dark:text-slate-100 hover:text-brand-teal dark:hover:text-brand-teal p-0 h-auto underline-offset-4 hover:underline",
    dark:
      "bg-white text-brand-navy hover:bg-slate-100 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 shadow-subtle hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "text-xs px-4 py-2 gap-2",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5",
  };

  const appliedClasses = cn(
    baseStyles,
    variants[variant],
    variant !== "text" && sizes[size],
    className
  );

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
      )}
    </>
  );

  if (isWhatsApp) {
    const waUrl = getWhatsAppUrl(siteConfig.contact.whatsappRaw, t.common.whatsappMessage);
    return (
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(appliedClasses, "group")}
      >
        {content}
      </a>
    );
  }

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(appliedClasses, "group")}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cn(appliedClasses, "group")}>
        {content}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={cn(appliedClasses, "group")} {...props}>
      {content}
    </button>
  );
}
