"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/providers/language-provider";
import { ArrowRight, ArrowLeft, Lightbulb, Hammer, Rocket, PlaneTakeoff } from "lucide-react";

export function PhilosophySection() {
  const { t, dir } = useLanguage();
  const [activeStage, setActiveStage] = useState(0);
  const isRtl = dir === "rtl";

  const icons = [Lightbulb, Hammer, Rocket, PlaneTakeoff];
  const leadTagline = isRtl ? "بُني بـهدف. صُمم ليُحلّق." : "Built with purpose. Made to fly.";
  const fullDescription = `${leadTagline} — ${t.philosophy.description}`;

  return (
    <section id="philosophy" className="w-full py-16 sm:py-24 bg-background-secondary border-y border-border transition-colors duration-200">
      <Container>
        <SectionHeading
          eyebrow={t.philosophy.eyebrow}
          title={t.philosophy.title}
          description={fullDescription}
          align="center"
        />

        {/* Interactive Desktop Stage Tracker Header */}
        <div className="hidden md:flex items-center justify-between mb-10 p-2 rounded-brand-lg bg-background-elevated border border-border backdrop-blur-md shadow-subtle">
          {t.philosophy.stages.map((stage, idx) => {
            const Icon = icons[idx];
            const isActive = activeStage === idx;
            return (
              <React.Fragment key={stage.step}>
                <button
                  onClick={() => setActiveStage(idx)}
                  className={`flex-1 flex items-center justify-center gap-3 py-3.5 px-4 rounded-brand transition-all duration-300 font-bold text-sm select-none ${
                    isActive
                      ? "bg-brand-navy text-white dark:bg-brand-teal dark:text-brand-navy shadow-card scale-[1.02]"
                      : "text-foreground-muted hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-brand-teal dark:text-brand-navy" : "text-foreground-muted"}`} />
                  <span>{stage.name}</span>
                </button>
                {idx < t.philosophy.stages.length - 1 && (
                  <div className="px-1 text-foreground-muted/40">
                    {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Stage Content Presentation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.philosophy.stages.map((stage, idx) => {
            const Icon = icons[idx];
            const isActive = activeStage === idx;
            return (
              <Card
                key={stage.step}
                onClick={() => setActiveStage(idx)}
                className={`cursor-pointer space-y-4 transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? "border-brand-teal shadow-elevated ring-2 ring-brand-teal/20 -translate-y-1 bg-background-elevated"
                    : "bg-background-elevated/60 opacity-90 hover:opacity-100"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest text-brand-teal uppercase font-mono">
                      STAGE {stage.step}
                    </span>
                    <div className={`p-2.5 rounded-full ${isActive ? "bg-brand-teal/15 text-brand-teal" : "bg-foreground/5 text-foreground-muted"}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-foreground">
                    {stage.name}
                  </h3>
                  <span className="text-xs font-bold text-brand-teal block">
                    {stage.title}
                  </span>

                  <p className="text-sm text-foreground-muted leading-relaxed font-normal">
                    {stage.desc}
                  </p>
                </div>

                <div className="pt-3 text-xs font-bold text-brand-teal uppercase tracking-wider">
                  {t.philosophy.milestoneLabel} 0{idx + 1}
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
