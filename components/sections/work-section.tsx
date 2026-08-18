"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { useLanguage } from "@/providers/language-provider";
import { getPublicProjects } from "@/data/projects-data";
import { ExternalLink, Sparkles } from "lucide-react";

export function WorkSection() {
  const { t } = useLanguage();
  const publicProjects = getPublicProjects();

  return (
    <section id="work" className="w-full py-20 sm:py-32 bg-background text-foreground transition-colors duration-200">
      <Container>
        <SectionHeading
          eyebrow={t.work.eyebrow}
          title={t.work.title}
          description={t.work.description}
        />

        <div className="mt-16 sm:mt-24 space-y-24 sm:space-y-32">
          {publicProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center group"
              >
                {/* Image Showcase (with Browser Frame) */}
                <div
                  className={`lg:col-span-7 relative ${
                    isEven ? "lg:order-first" : "lg:order-last"
                  }`}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl overflow-hidden border border-border shadow-elevated bg-background-elevated transition-transform duration-500 hover:shadow-glow hover:-translate-y-2"
                    title={`${project.title} — ${t.work.visitLive}`}
                  >
                    {/* Browser Frame Header */}
                    <div className="h-10 bg-background-secondary border-b border-border flex items-center px-4 gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <div className="flex-1 text-center">
                        <div className="inline-block px-3 py-1 bg-background rounded-md text-[10px] font-medium text-foreground-muted border border-border truncate max-w-[200px] sm:max-w-[300px]">
                          {project.liveUrl?.replace(/^https?:\/\//, "")}
                        </div>
                      </div>
                    </div>

                    {/* Browser Body / Image */}
                    <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-background overflow-hidden group/img">
                      <ParallaxImage
                        src={project.coverImage}
                        alt={`${project.title} Showcase`}
                        priority={index === 0}
                      />
                      
                      {/* Hover Overlay Hint */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                        <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-teal text-brand-navy font-extrabold text-sm shadow-card transform translate-y-4 group-hover/img:translate-y-0 transition-transform duration-300">
                          <span>{t.work.visitLive}</span>
                          <ExternalLink className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-5 flex flex-col space-y-6 sm:space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="teal" className="py-1 px-3 shadow-sm">
                        {t.work.projects?.[project.id]?.category || project.category}
                      </Badge>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/10 px-2.5 py-1 rounded-full border border-brand-teal/20">
                          <Sparkles className="w-3 h-3" />
                          <span>{t.work.featuredBadge}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground group-hover:text-brand-teal transition-colors tracking-tight leading-tight mb-3">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        {t.work.projects?.[project.id]?.title || project.title}
                      </a>
                    </h3>
                    
                    <p className="text-base sm:text-lg text-foreground-muted leading-relaxed font-normal">
                      {t.work.projects?.[project.id]?.summary || project.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold bg-background-secondary text-foreground px-3 py-1.5 rounded-md border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Button
                      href={project.liveUrl}
                      external
                      size="lg"
                      className="gap-2 font-bold w-full sm:w-auto justify-center"
                    >
                      <span>{t.work.visitLive}</span>
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
