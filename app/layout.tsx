import type { Metadata, Viewport } from "next";
import { Outfit, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site-config";
import { NavbarShell } from "@/components/layout/navbar-shell";
import { FooterShell } from "@/components/layout/footer-shell";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Preloader } from "@/components/ui/preloader";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { ThemeProvider } from "@/providers/theme-provider";
import { LanguageProvider } from "@/providers/language-provider";
import { Analytics } from "@vercel/analytics/react";

const fontSans = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const fontArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://buildify.studio"),
  title: {
    default: `${siteConfig.name} — Premium Digital Studio`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Buildify",
    "Digital Studio",
    "Web Design",
    "Web Development",
    "Performance Engineering",
    "SEO",
    "AI Search Readiness",
    "Conversion Strategy",
  ],
  authors: [{ name: "Buildify Studio" }],
  icons: {
    icon: "/favicon.webp",
    apple: "/icon.webp",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/logo-full.jpeg",
        width: 1024,
        height: 1024,
        alt: "Buildify Digital Studio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/logo-full.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F4F0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    logo: "/images/logo-full.jpeg",
    sameAs: [
      siteConfig.contact.instagram,
      siteConfig.contact.tiktok,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.whatsappNormalized,
      contactType: "customer support",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${fontSans.variable} ${fontArabic.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground flex flex-col min-h-screen transition-colors duration-200">
        <Preloader />
        <NoiseOverlay />
        <CustomCursor />
        <ScrollProgress />
        <ThemeProvider>
          <LanguageProvider>
            <NavbarShell />
            <main className="flex-1 w-full">{children}</main>
            <FooterShell />
            <FloatingWhatsApp />
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
