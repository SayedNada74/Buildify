"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { useLanguage } from "@/providers/language-provider";
import { Compass, PlaneTakeoff, Sparkles } from "lucide-react";

export function BrandVideoSection() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-20 sm:py-28 bg-background-secondary text-foreground border-y border-border overflow-hidden relative transition-colors duration-200">
      {/* Background Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-teal/15 rounded-full blur-[160px] pointer-events-none" />

      <Container>
        <div className="max-w-5xl mx-auto space-y-12 relative z-10">
          {/* Header Copy */}
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-extrabold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.brandVideo.eyebrow}</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              {t.brandVideo.statement}
            </h2>

            <p className="text-base sm:text-xl text-foreground-muted max-w-2xl mx-auto font-normal leading-relaxed">
              {t.brandVideo.subtext}
            </p>
          </div>

          {/* High-End Bespoke Brand Vision Showcase Container */}
          <div className="relative rounded-brand-xl bg-background-elevated border border-border shadow-elevated overflow-hidden group">
            {/* 3D Architectural Artpiece Banner */}
            <div className="relative w-full aspect-[16/9] min-h-[320px] sm:min-h-[440px] overflow-hidden">
              <Image
                src="/images/brand-vision-banner.png"
                alt="Buildify Brand Vision — Built with Purpose, Made to Fly"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-elevated/90 via-background-elevated/20 to-transparent" />
            </div>

            {/* Twin Studio Vision Pillars Grid Overlay */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-background-elevated/90 backdrop-blur-md border-t border-border">
              {/* Pillar 1: Built With Purpose */}
              <div className="flex items-start gap-4 p-5 rounded-brand bg-background-secondary/80 border border-border hover:border-brand-teal/40 transition-all duration-300">
                <div className="p-3 rounded-brand bg-brand-teal/15 text-brand-teal flex-shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold text-foreground">
                    {t.brandVideo.purposeTitle}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed font-normal">
                    {t.brandVideo.purposeDesc}
                  </p>
                </div>
              </div>

              {/* Pillar 2: Made To Fly */}
              <div className="flex items-start gap-4 p-5 rounded-brand bg-background-secondary/80 border border-border hover:border-brand-teal/40 transition-all duration-300">
                <div className="p-3 rounded-brand bg-brand-teal/15 text-brand-teal flex-shrink-0">
                  <PlaneTakeoff className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold text-foreground">
                    {t.brandVideo.flightTitle}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed font-normal">
                    {t.brandVideo.flightDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Alias export for backward compatibility
export const BrandVisionSection = BrandVideoSection;
