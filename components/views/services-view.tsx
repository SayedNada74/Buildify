"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/language-provider";
import { servicesData } from "@/data/services-data";
import { Layout, Target, ShoppingBag, Layers, Smartphone } from "lucide-react";

export function ServicesView() {
  const { t } = useLanguage();

  const serviceIcons: Record<string, React.ElementType> = {
    "web-design-development": Layout,
    "landing-pages": Target,
    ecommerce: ShoppingBag,
    "saas-platforms": Layers,
    "ui-ux-design": Smartphone,
  };

  return (
    <div className="py-16 sm:py-24 space-y-16">
      <Container>
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
          {servicesData.map((service, index) => {
            const Icon = serviceIcons[service.id] || Layout;
            const isFeatured = index === 0;
            const colSpan = isFeatured ? "md:col-span-12" : "md:col-span-6";

            return (
              <Card
                key={service.id}
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
                      {service.businessOutcome}
                    </Badge>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground group-hover:text-brand-teal transition-colors">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-2 pt-2">
                    {service.capabilities.map((cap) => (
                      <div key={cap.title} className="text-xs text-foreground font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                        <span>{cap.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-border flex items-center justify-between">
                  <Button isWhatsApp size="sm">
                    {t.nav.startProject}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
