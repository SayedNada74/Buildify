"use client";

import React from "react";
import { useLanguage } from "@/providers/language-provider";
import { Sparkles } from "lucide-react";

export function ServicesMarquee() {
  const { lang } = useLanguage();

  const marqueeItems =
    lang === "ar"
      ? [
          "تصميم وتطوير المواقع",
          "صفحات الهبوط عالية التأثير",
          "المتاجر والتجارة الإلكترونية",
          "منصات الـ SaaS والأنظمة الرقمية",
          "تصميم واجهات وتجربة المستخدم UI/UX",
          "الأداء والسرعة الفائقة",
          "أساسيات الـ SEO والظهور",
          "تصميم متجاوب بالكامل للجوّال",
        ]
      : [
          "Web Design & Development",
          "High-Impact Landing Pages",
          "E-Commerce Experiences",
          "SaaS & Digital Platforms",
          "UI/UX Design Systems",
          "Sub-Second Performance & Speed",
          "Technical & Local SEO",
          "Mobile-First Architecture",
        ];

  // Repeat items for continuous seamless loop
  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="relative w-full overflow-hidden bg-background-secondary border-y border-border py-4 sm:py-5 select-none transition-colors duration-200">
      {/* Edge Gradients Fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-background-secondary to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-background-secondary to-transparent z-10" />

      {/* Animated Marquee Container */}
      <div className="flex animate-marquee items-center gap-4 sm:gap-8">
        {duplicatedItems.map((item, idx) => (
          <div
            key={`${item}-${idx}`}
            className="flex items-center gap-3 flex-shrink-0 px-3 py-1 rounded-full bg-background-elevated/80 border border-border shadow-subtle text-foreground text-xs sm:text-sm font-extrabold tracking-wide uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-teal flex-shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
