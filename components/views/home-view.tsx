"use client";

import React from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { ClientsMarquee } from "@/components/sections/clients-marquee";
import { ServicesMarquee } from "@/components/sections/services-marquee";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { ServicesSection } from "@/components/sections/services-section";
import { BeyondSurfaceSection } from "@/components/sections/beyond-surface-section";
import { WorkSection } from "@/components/sections/work-section";
import { WhyBuildifySection } from "@/components/sections/why-buildify-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function HomeView() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* 01 — Hero Section (No reveal wrapper to avoid delay above the fold) */}
      <HeroSection />

      {/* 02 — Infinite Animated Services Ticker Marquee */}
      <ServicesMarquee />

      {/* 03 — Selected Work (Featured Showcase) */}
      <ScrollReveal>
        <WorkSection />
      </ScrollReveal>

      {/* 04 — Infinite Client Logos Marquee */}
      <ScrollReveal yOffset={20}>
        <ClientsMarquee />
      </ScrollReveal>

      {/* 05 — BUILD + FLY: From Idea to Flight */}
      <ScrollReveal>
        <PhilosophySection />
      </ScrollReveal>

      {/* 06 — What We Build (5 Focused Core Services) */}
      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>

      {/* 07 — Built Beyond the Surface (6 Streamlined Capabilities) */}
      <ScrollReveal>
        <BeyondSurfaceSection />
      </ScrollReveal>

      {/* 08 — Why Buildify (Studio Pillars & Differentiators) */}
      <ScrollReveal>
        <WhyBuildifySection />
      </ScrollReveal>

      {/* 09 — AEO & Search Readiness FAQ Section */}
      <ScrollReveal>
        <FaqSection />
      </ScrollReveal>

      {/* 10 — Final High-Impact Conversion CTA Banner */}
      <ScrollReveal yOffset={30}>
        <FinalCtaSection />
      </ScrollReveal>
    </div>
  );
}
