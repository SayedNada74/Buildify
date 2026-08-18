"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { VideoPlayer } from "@/components/ui/video-player";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";
import { useLanguage } from "@/providers/language-provider";
import { Sparkles, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full pt-6 pb-12 sm:pt-10 sm:pb-20 overflow-hidden bg-background text-foreground transition-colors duration-200">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-15 dark:opacity-10 pointer-events-none bg-[radial-gradient(#00A896_1px,transparent_1px)] [background-size:24px_24px]" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[calc(100vh-140px)]">
          {/* Hero Content Column */}
          <div className="lg:col-span-7 space-y-6 z-10">
            <div className="inline-flex items-center gap-2">
              <Badge variant="teal" className="gap-1.5 py-1 px-3.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
                <span>{t.hero.badge}</span>
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-normal sm:leading-tight">
              {t.hero.headlinePart1} <br />
              <span className="bg-gradient-to-r from-brand-teal via-teal-600 to-brand-navy dark:to-teal-300 bg-clip-text text-transparent">
                {t.hero.headlinePart2}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-foreground-muted max-w-xl leading-relaxed font-normal">
              {t.hero.subheadline}
            </p>

            {/* CTAs & Conversion Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticWrapper>
                <Button isWhatsApp size="lg" showArrow>
                  {t.hero.primaryCta}
                </Button>
              </MagneticWrapper>
              <MagneticWrapper>
                <Button href="#work" variant="secondary" size="lg">
                  {t.hero.secondaryCta}
                </Button>
              </MagneticWrapper>
            </div>

            {/* Trust Points */}
            <div className="pt-6 border-t border-border flex flex-wrap items-center gap-6 text-sm font-bold text-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-brand-teal flex-shrink-0" />
                <span>{t.hero.trustPoint1}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-brand-teal flex-shrink-0" />
                <span>{t.hero.trustPoint2}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-brand-teal flex-shrink-0" />
                <span>{t.hero.trustPoint3}</span>
              </div>
            </div>
          </div>

          {/* Hero Vertical Card (buildify-reveal.mp4 - 24s) scaled to fit laptop screens without scrolling */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px]">
              {/* Backing Accent Glow */}
              <div className="absolute -inset-4 rounded-brand-xl bg-gradient-to-tr from-brand-teal/20 to-brand-navy/10 dark:from-brand-teal/30 dark:to-transparent blur-2xl opacity-70 pointer-events-none" />

              {/* Framed Vertical Portrait Card */}
              <div className="relative rounded-brand-xl bg-background-elevated p-3 border border-border shadow-elevated overflow-hidden group">
                <VideoPlayer
                  src="/videos/buildify-reveal.mp4"
                  poster="/images/logo-full.jpeg"
                  aspectRatio="vertical"
                  ariaLabel="Buildify 3D Reveal Video"
                  className="rounded-brand-lg max-h-[65vh] sm:max-h-[500px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Editorial Floating Tag */}
                <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-brand bg-background-elevated/95 backdrop-blur-md border border-border shadow-subtle flex items-center justify-between">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-brand-teal block">
                      {t.hero.videoCaption}
                    </span>
                    <span className="text-xs text-foreground font-semibold">
                      {t.hero.videoSubcaption}
                    </span>
                  </div>
                  <div className="relative w-7 h-7">
                    <Image
                      src="/images/logo-mark.webp"
                      alt="Buildify Mark"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
