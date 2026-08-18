"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/container";
import { CustomLink } from "@/components/ui/custom-link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/language-provider";
import { FounderSignature } from "@/components/ui/founder-signature";

export function FooterShell() {
  const { t, lang } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: t.nav.work, href: "/#work" },
    { label: t.nav.about, href: "/#philosophy" },
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  return (
    <footer className="w-full bg-background-secondary text-foreground pt-20 pb-16 border-t border-border transition-colors duration-200">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-border">
          {/* Brand Identity Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo-mark.webp"
                  alt="Buildify"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-base text-foreground-muted max-w-sm leading-relaxed font-normal">
              {t.footer.description}
            </p>
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-1">
                {t.footer.philosophyTitle}
              </span>
              <p className="text-xs text-foreground-muted italic font-medium">
                "{t.footer.tagline}"
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              {t.footer.navTitle}
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base font-semibold text-foreground hover:text-brand-teal transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-teal">
              {t.footer.connectTitle}
            </h3>
            <ul className="space-y-2.5 text-base font-semibold text-foreground">
              <li>
                <CustomLink href={siteConfig.contact.instagram} external showIcon>
                  Instagram ({siteConfig.contact.instagramHandle})
                </CustomLink>
              </li>
              <li>
                <CustomLink href={siteConfig.contact.tiktok} external showIcon>
                  TikTok ({siteConfig.contact.tiktokHandle})
                </CustomLink>
              </li>
              <li>
                <CustomLink href={`https://wa.me/${siteConfig.contact.whatsappNumberOnly}`} external showIcon>
                  WhatsApp ({siteConfig.contact.whatsappNormalized})
                </CustomLink>
              </li>
            </ul>

            <div className="pt-4">
              <Button isWhatsApp size="sm" showArrow>
                {t.nav.startProject}
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="text-xs font-semibold text-foreground-muted">
              © {currentYear} Buildify Studio. {t.footer.rights}
            </p>
            <FounderSignature />
          </div>
        </div>
      </Container>
    </footer>
  );
}
