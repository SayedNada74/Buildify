"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/providers/language-provider";
import {
  Zap,
  Smartphone,
  Search,
  Cpu,
  Shield,
  Eye,
} from "lucide-react";

export function BeyondSurfaceSection() {
  const { t } = useLanguage();

  const iconsMap: Record<string, React.ElementType> = {
    zap: Zap,
    smartphone: Smartphone,
    search: Search,
    cpu: Cpu,
    shield: Shield,
    eye: Eye,
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-background-secondary text-foreground border-y border-border transition-colors duration-200">
      <Container>
        <SectionHeading
          eyebrow={t.beyondSurface.eyebrow}
          title={t.beyondSurface.title}
          description={t.beyondSurface.description}
        />

        {/* Streamlined 6-Pillar Capability Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {t.beyondSurface.capabilities.map((cap) => {
            const Icon = iconsMap[cap.icon] || Zap;
            return (
              <Card
                key={cap.title}
                className="group p-6 bg-background-elevated border-border hover:border-brand-teal/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="p-2.5 rounded-brand bg-brand-teal/15 text-brand-teal group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-foreground group-hover:text-brand-teal transition-colors">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-sm text-foreground-muted leading-relaxed font-normal">
                  {cap.desc}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
