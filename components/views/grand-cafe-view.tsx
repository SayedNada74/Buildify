"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/language-provider";
import { getPublicProjects } from "@/data/projects-data";
import {
  Utensils,
  Smartphone,
  Zap,
  Search,
  CheckCircle2,
  Image as ImageIcon,
  Sparkles,
} from "lucide-react";

export function GrandCafeView() {
  const { t } = useLanguage();
  const publicProjects = getPublicProjects();
  const project = publicProjects.find((p) => p.slug === "grand-cafe") || publicProjects[0];
  const caseStudy = project.caseStudy;

  return (
    <div className="py-12 sm:py-20 space-y-16 sm:space-y-24">
      {/* 01 — Case Study Hero Section */}
      <section className="w-full">
        <Container>
          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="teal" className="py-1 px-3">
                {t.work.grandCafe.category}
              </Badge>
              <Badge variant="outline" className="text-amber-700 bg-amber-50 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300">
                {t.common.contentNeeded}: Screenshots & Live Metrics
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground">
              {project.title}
            </h1>

            <p className="text-xl sm:text-2xl text-brand-teal font-semibold">
              {project.subtitle}
            </p>

            <p className="text-base sm:text-lg text-foreground-muted leading-relaxed max-w-2xl">
              {caseStudy?.overview}
            </p>

            {/* Scope Deliverables Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold bg-background-secondary border border-border px-3 py-1 rounded-full text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Showcase Media Frame */}
          <div className="mt-10 rounded-brand-xl overflow-hidden border border-border bg-brand-navy dark:bg-black relative min-h-[380px] sm:min-h-[500px] shadow-elevated">
            <Image
              src="/images/logo-full.jpeg"
              alt="Grand Café Case Study Hero"
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-brand bg-black/50 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-brand-teal uppercase tracking-wider block">
                  Grand Café Experience
                </span>
                <span className="text-xs text-slate-300">
                  Hospitality Brand Storytelling & Mobile Menu Design
                </span>
              </div>
              <Utensils className="w-5 h-5 text-brand-teal" />
            </div>
          </div>
        </Container>
      </section>

      {/* 02 — Overview, Challenge & Approach */}
      <section className="w-full bg-background-secondary py-16 border-y border-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Challenge */}
            <Card className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-extrabold text-foreground">The Challenge</h2>
              </div>
              <p className="text-sm text-foreground-muted leading-relaxed">
                {caseStudy?.challenge}
              </p>
            </Card>

            {/* Strategic Approach */}
            <Card className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-full bg-brand-teal/10 text-brand-teal">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-extrabold text-foreground">Strategic Approach</h2>
              </div>
              <p className="text-sm text-foreground-muted leading-relaxed">
                {caseStudy?.approach}
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* 03 — Design Direction & Mobile Hospitality Experience */}
      <section className="w-full">
        <Container>
          <SectionHeading
            eyebrow="Design Direction"
            title="Mobile-First Hospitality UI"
            description="Prioritizing visual appetite appeal, effortless menu navigation, and instant brand connection."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card className="space-y-3">
              <Smartphone className="w-6 h-6 text-brand-teal" />
              <h3 className="text-lg font-bold text-foreground">Mobile Menu UX</h3>
              <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                Clean item categorization, responsive touch targets, and effortless mobile browsing.
              </p>
            </Card>

            <Card className="space-y-3">
              <Zap className="w-6 h-6 text-brand-teal" />
              <h3 className="text-lg font-bold text-foreground">Fast Page Speed</h3>
              <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                Sub-second initial rendering ensuring zero friction for hungry visitors on mobile networks.
              </p>
            </Card>

            <Card className="space-y-3">
              <Search className="w-6 h-6 text-brand-teal" />
              <h3 className="text-lg font-bold text-foreground">Local SEO Readiness</h3>
              <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                Structured schema markup ensuring Grand Café stands out in local search and map listings.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* 04 — Deliverables Architecture */}
      <section className="w-full">
        <Container>
          <SectionHeading
            eyebrow="Key Scope"
            title="Engineering Deliverables"
            description="What was crafted to bring Grand Café's digital presence to life."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {caseStudy?.deliverables.map((item) => (
              <Card key={item.title} className="space-y-2">
                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <p className="text-xs text-foreground-muted">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 05 — Visual Showcase & Content Needed Disclaimer */}
      <section className="w-full">
        <Container>
          <Card variant="dark" className="p-8 sm:p-12 text-center space-y-4">
            <div className="inline-flex items-center gap-2 mx-auto">
              <ImageIcon className="w-5 h-5 text-brand-teal" />
              <Badge variant="dark">Visual Gallery Status</Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Grand Café High-Res Visual Showcase
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Official high-resolution screenshots, live menu demonstrations, and confirmed performance metrics are prepared in architecture and will be updated upon final client release.
            </p>

            <div className="pt-6">
              <Button isWhatsApp variant="dark" size="lg" showArrow>
                Inquire About Custom Hospitality Digital Work
              </Button>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}
