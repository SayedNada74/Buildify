"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/providers/language-provider";
import { Check } from "lucide-react";

export function WhyBuildifySection() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-16 sm:py-24 bg-background text-foreground transition-colors duration-200">
      <Container>
        <SectionHeading
          eyebrow={t.whyBuildify.eyebrow}
          title={t.whyBuildify.title}
          description={t.whyBuildify.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {t.whyBuildify.reasons.map((reason, idx) => (
            <Card
              key={reason.title}
              className="space-y-4 group hover:border-brand-teal/50 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-teal/15 text-brand-teal flex items-center justify-center font-extrabold text-sm flex-shrink-0">
                  <Check className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-brand-teal uppercase tracking-wider">
                  0{idx + 1} • {t.whyBuildify.pillarLabel}
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-foreground group-hover:text-brand-teal transition-colors">
                {reason.title}
              </h3>
              <p className="text-base text-foreground-muted font-normal leading-relaxed">
                {reason.desc}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
