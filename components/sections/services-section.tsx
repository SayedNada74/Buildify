"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/language-provider";
import {
  Layout,
  Target,
  ShoppingBag,
  Layers,
  Smartphone,
} from "lucide-react";

export function ServicesSection() {
  const { t } = useLanguage();

  const serviceIcons: Record<string, React.ElementType> = {
    "web-design-development": Layout,
    "landing-pages": Target,
    ecommerce: ShoppingBag,
    "saas-platforms": Layers,
    "ui-ux-design": Smartphone,
  };

  return (
    <section id="services" className="w-full py-16 sm:py-24 bg-background text-foreground transition-colors duration-200">
      <Container>
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
        />

        {/* Editorial Varying Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
          {t.services.items.map((item, index) => {
            const Icon = serviceIcons[item.id] || Layout;
            const isFeatured = index === 0;
            const colSpan = isFeatured ? "md:col-span-12" : "md:col-span-6";

            return (
              <Card
                key={item.id}
                className={`${colSpan} group relative flex flex-col justify-between p-8 hover:border-brand-teal/40 transition-all duration-300`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-brand bg-background-secondary text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold font-mono text-foreground/20 group-hover:text-brand-teal transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="pt-2">
                    <Badge variant="teal" className="mb-2">
                      {item.outcome}
                    </Badge>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground group-hover:text-brand-teal transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-base text-foreground-muted leading-relaxed font-normal">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-bold text-foreground uppercase tracking-wider">
                    {t.services.craftLabel}
                  </span>
                  <span className="text-brand-teal text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Section Footer CTA */}
        <div className="mt-12 text-center">
          <Button isWhatsApp size="lg" showArrow>
            {t.nav.startProject}
          </Button>
        </div>
      </Container>
    </section>
  );
}
