"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/language-provider";
import { siteConfig } from "@/data/site-config";
import { MessageSquare, Instagram, Video } from "lucide-react";

export function ContactView() {
  const { t } = useLanguage();

  return (
    <div className="py-16 sm:py-24 space-y-12">
      <Container>
        <SectionHeading
          eyebrow={t.nav.contact}
          title={t.finalCta.question}
          description={t.finalCta.subtext}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <Card className="space-y-4 p-8 text-center flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">WhatsApp Direct</h3>
              <p className="text-sm text-foreground-muted">
                Fastest way to talk directly with our studio team.
              </p>
            </div>
            <Button isWhatsApp size="lg" className="w-full" showArrow>
              {t.nav.startProject}
            </Button>
          </Card>

          <Card className="space-y-4 p-8 text-center flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 mx-auto flex items-center justify-center">
                <Instagram className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Instagram</h3>
              <p className="text-sm text-foreground-muted">{siteConfig.contact.instagramHandle}</p>
            </div>
            <Button href={siteConfig.contact.instagram} external variant="secondary" size="md">
              Follow @buildify0
            </Button>
          </Card>

          <Card className="space-y-4 p-8 text-center flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-black/10 dark:bg-white/10 text-foreground mx-auto flex items-center justify-center">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">TikTok</h3>
              <p className="text-sm text-foreground-muted">{siteConfig.contact.tiktokHandle}</p>
            </div>
            <Button href={siteConfig.contact.tiktok} external variant="secondary" size="md">
              Follow @buildify00
            </Button>
          </Card>
        </div>
      </Container>
    </div>
  );
}
