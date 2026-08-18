"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/providers/language-provider";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = lang === "ar" ? [
    {
      q: "إيه اللي بيقدمه استوديو بيلدفاي؟",
      a: "إحنا استوديو رقمي بيحول فكرتك لموقع أو تطبيق احترافي، متصمم ومبرمج صح عشان يزود مبيعاتك ويكبر البزنس بتاعك.",
    },
    {
      q: "إيه أنواع المواقع اللي بتعملوها؟",
      a: "بنعمل مواقع للشركات، صفحات هبوط (Landing Pages) بتركز على المبيعات، متاجر إلكترونية سريعة، وأنظمة ويب متكاملة.",
    },
    {
      q: "ممكن تبنوا أنظمة أو تطبيقات ويب معقدة؟",
      a: "أكيد، بنصمم ونبرمج تطبيقات ويب وأنظمة (SaaS) قوية جداً وقابلة للتوسع وتستحمل ضغط الشغل بأمان عالي.",
    },
    {
      q: "هل بتظبطوا المواقع لمحركات البحث (SEO)؟",
      a: "طبعاً، كل موقع بنبنيه بيبقى متأسس صح وسريع جداً، ومكتوب بكود نظيف يخلي جوجل يقرأه بسهولة ويطلعه في النتائج الأولى.",
    },
    {
      q: "هل بتدعموا المواقع باللغة العربية بالكامل؟",
      a: "اللغة العربية عندنا مش مجرد ترجمة، إحنا بنصمم واجهات مخصصة للعربي (RTL) بخطوط شيك ومريحة جداً للعين.",
    },
    {
      q: "هل المواقع بتشتغل كويس على الموبايل؟",
      a: "أكيد، إحنا بنصمم للموبايل أولاً (Mobile-First) عشان نضمن إن الموقع يكون شكله تحفة وسريع على أي شاشة، سواء موبايل أو لابتوب.",
    },
    {
      q: "ممكن أضيف ميزات ذكاء اصطناعي (AI) لموقعي؟",
      a: "أيوة، بنقدر ندمج أدوات ذكاء اصطناعي في موقعك، وبنجهزه كمان علشان محركات بحث الذكاء الاصطناعي (AEO) تفهمه وتقترحه للناس.",
    },
    {
      q: "إزاي أبدأ معاكم؟",
      a: "الموضوع بسيط جداً: اضغط على 'ابدأ مشروعك' أو تواصل معانا على الواتساب على طول، وهنرد عليك فوراً نتناقش في فكرتك.",
    },
  ] : [
    {
      q: "What does Buildify do?",
      a: "Buildify is a modern digital studio that transforms ambitious ideas into high-performance, custom digital products engineered for growth.",
    },
    {
      q: "What kind of websites do you build?",
      a: "We build business websites, high-impact landing pages, e-commerce stores, hospitality experiences, and custom web applications.",
    },
    {
      q: "Can Buildify build web applications?",
      a: "Yes. We design and engineer scalable web applications and SaaS platforms tailored to custom workflows and security requirements.",
    },
    {
      q: "Do you optimize websites for SEO?",
      a: "Yes. Every Buildify product includes technical SEO foundations, clean heading structure, fast performance, and structured schema markup.",
    },
    {
      q: "Do you support Arabic websites?",
      a: "Yes. Arabic is a first-class experience at Buildify, featuring bespoke RTL layouts, typography, and mirrored interaction design.",
    },
    {
      q: "Are all websites responsive?",
      a: "Yes. We design with a mobile-first philosophy ensuring fluid performance across mobile phones, tablets, laptops, and displays.",
    },
    {
      q: "Can Buildify add AI features?",
      a: "Yes. We integrate practical AI features and structure content for modern AI-powered search answer engines (AEO).",
    },
    {
      q: "How do we start a project?",
      a: "Starting is simple: click 'Start a Project' to launch a direct WhatsApp conversation with our team about your goals.",
    },
  ];

  // FAQPage JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-background-secondary border-y border-border">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Container>
        <SectionHeading
          eyebrow={lang === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
          title={lang === "ar" ? "إجابات شريعة عن بيلدفاي" : "Clear Answers About Buildify"}
          description={lang === "ar" ? "كل ما تحتاج معرفته عن خدماتنا، طريقة عملنا، وكيف نبدأ مشروعك." : "Everything you need to know about our services, process, and how to start."}
          align="center"
        />

        <div className="max-w-3xl mx-auto space-y-4 pt-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Card
                key={faq.q}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="cursor-pointer p-5 sm:p-6 transition-all duration-200 hover:border-brand-teal/40"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                      {faq.q}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-foreground-muted transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-brand-teal" : ""
                    }`}
                  />
                </div>

                {isOpen && (
                  <div className="pt-4 mt-4 border-t border-border animate-in fade-in duration-200">
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
