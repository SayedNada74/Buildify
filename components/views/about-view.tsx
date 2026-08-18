"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/language-provider";
import { Lightbulb, Hammer, Rocket, Target, ShieldCheck, Heart } from "lucide-react";

export function AboutView() {
  const { t } = useLanguage();

  const values = [
    { title: t.whyBuildify.reasons[0].title, desc: t.whyBuildify.reasons[0].desc, icon: Target },
    { title: t.whyBuildify.reasons[1].title, desc: t.whyBuildify.reasons[1].desc, icon: Hammer },
    { title: t.whyBuildify.reasons[2].title, desc: t.whyBuildify.reasons[2].desc, icon: Heart },
    { title: t.whyBuildify.reasons[3].title, desc: t.whyBuildify.reasons[3].desc, icon: Lightbulb },
    { title: t.whyBuildify.reasons[4].title, desc: t.whyBuildify.reasons[4].desc, icon: ShieldCheck },
  ];

  return (
    <div className="py-16 sm:py-24 space-y-16">
      <Container>
        <div className="max-w-3xl space-y-6">
          <SectionHeading
            eyebrow={t.nav.about}
            title="Ideas are everywhere. Building them well is what matters."
            description="Buildify is a modern digital studio that combines creative design vision with serious engineering discipline."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <Card key={v.title} className="space-y-3">
                <div className="p-3 rounded-brand bg-brand-teal/10 text-brand-teal w-fit">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{v.title}</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">{v.desc}</p>
              </Card>
            );
          })}
        </div>

        <div className="pt-12 text-center">
          <Button isWhatsApp size="lg" showArrow>
            {t.nav.startProject}
          </Button>
        </div>
      </Container>
    </div>
  );
}
