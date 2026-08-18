"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { useLanguage } from "@/providers/language-provider";
import { Menu, X } from "lucide-react";

export function NavbarShell() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Escape key listener & Body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: t.nav.work, href: "/#work" },
    { label: t.nav.about, href: "/#philosophy" },
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  return (
    <>
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-xl border-b border-border shadow-subtle transition-colors duration-200">
      <Container>
        <div className="flex items-center justify-between h-24 sm:h-26">
          {/* Logo Mark & Wordmark */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 overflow-hidden transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/images/logo-mark.webp"
                alt="Buildify Mark"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base sm:text-lg font-extrabold text-foreground hover:text-brand-teal dark:hover:text-brand-teal transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Action Controls (Language, Theme, CTA) */}
          <div className="hidden md:flex items-center gap-3.5">
            <LanguageToggle />
            <ThemeToggle />
            <Button isWhatsApp size="md" showArrow>
              {t.nav.startProject}
            </Button>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex md:hidden items-center gap-2.5">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 text-foreground bg-background-secondary border border-border rounded-brand focus:outline-none focus:ring-2 focus:ring-brand-teal"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-brand-teal" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>
    </header>

    {/* Mobile Accessible Drawer Shell (Moved outside header to avoid backdrop-filter fixed positioning bug) */}
    {mobileMenuOpen && (
      <div className="md:hidden fixed inset-x-0 top-[96px] sm:top-[104px] bottom-0 z-40 bg-background/98 backdrop-blur-2xl border-b border-border px-6 pt-6 pb-10 flex flex-col justify-between overflow-y-auto">
        <div className="flex flex-col space-y-4 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl sm:text-3xl font-extrabold text-foreground hover:text-brand-teal py-3 transition-colors border-b border-border"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="pt-6 space-y-4 border-t border-border">
          <Button isWhatsApp size="lg" className="w-full" showArrow>
            {t.nav.startProject}
          </Button>
          <div className="text-center text-xs font-bold text-foreground-muted">
            {siteConfig.contact.instagramHandle} • {siteConfig.contact.tiktokHandle}
          </div>
        </div>
      </div>
    )}
    </>
  );
}
