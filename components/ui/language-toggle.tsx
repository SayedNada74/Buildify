"use client";

import React from "react";
import { useLanguage } from "@/providers/language-provider";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-3 py-1.5 text-sm font-extrabold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-teal select-none border group",
        "bg-background-elevated hover:bg-background-secondary border-border hover:border-brand-teal/50 shadow-sm",
        className
      )}
      aria-label={lang === "en" ? "التبديل إلى العربية" : "Switch to English"}
      title={lang === "en" ? "التبديل إلى العربية" : "Switch to English"}
    >
      <Globe className="w-4 h-4 text-foreground-muted group-hover:text-brand-teal transition-colors flex-shrink-0" />
      <span className={cn(
        "uppercase tracking-wider text-brand-teal",
        lang === "en" ? "font-arabic" : "font-sans"
      )}>
        {lang === "en" ? "ع" : "EN"}
      </span>
    </button>
  );
}
