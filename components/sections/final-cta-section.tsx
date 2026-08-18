"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";
import { useLanguage } from "@/providers/language-provider";
import { siteConfig } from "@/data/site-config";
import { MessageSquare, Sparkles } from "lucide-react";

export function FinalCtaSection() {
  const { t, dir } = useLanguage();
  const isRtl = dir === "rtl";
  const tagline = isRtl ? "بُني بـهدف. صُمم ليُحلّق." : "Built with purpose. Made to fly.";

  return (
    <section id="contact" className="w-full py-20 sm:py-32 relative overflow-hidden bg-background text-foreground border-t border-border transition-colors duration-200">
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#00A896_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-teal/15 rounded-full blur-[160px] pointer-events-none" />

      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center justify-center">
            <Badge variant="teal" className="py-2 px-5 font-extrabold text-sm sm:text-base inline-flex items-center gap-2.5 shadow-sm">
              <span>{tagline}</span>
              <Sparkles className="w-4.5 h-4.5 text-brand-teal flex-shrink-0" />
            </Badge>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
            {t.finalCta.buildLine} <br />
            <span className="text-brand-teal">{t.finalCta.flyLine}</span>
          </h2>

          <p className="text-base sm:text-xl text-foreground-muted max-w-xl mx-auto leading-relaxed font-normal">
            {t.finalCta.subtext}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <MagneticWrapper>
              <Button isWhatsApp size="lg" showArrow>
                {t.finalCta.primaryCta}
              </Button>
            </MagneticWrapper>
            <MagneticWrapper>
              <Button href="#work" variant="secondary" size="lg">
                {t.finalCta.secondaryCta}
              </Button>
            </MagneticWrapper>
          </div>

          <div className="pt-6 text-sm font-semibold text-foreground-muted flex items-center justify-center gap-2">
            <span>{t.finalCta.whatsappNote}</span>
            <span className="text-foreground-muted/50">•</span>
            <div className="flex items-center gap-1.5" dir="ltr">
              {isRtl ? (
                <>
                  <MessageSquare className="w-4 h-4 text-brand-teal" />
                  <span>{siteConfig.contact.whatsappNormalized}</span>
                </>
              ) : (
                <>
                  <span>{siteConfig.contact.whatsappNormalized}</span>
                  <MessageSquare className="w-4 h-4 text-brand-teal" />
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
