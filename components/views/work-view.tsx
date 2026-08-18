"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getPublicProjects } from "@/data/projects-data";
import { useLanguage } from "@/providers/language-provider";
import { ExternalLink, Sparkles } from "lucide-react";

export function WorkView() {
  const { t } = useLanguage();
  const publicProjects = getPublicProjects();

  return (
    <div className="py-20 sm:py-32 bg-background text-foreground transition-colors duration-200">
      <Container>
        <SectionHeading
          eyebrow={t.work.eyebrow}
          title={t.work.title}
          description={t.work.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 pt-12">
          {publicProjects.map((project) => (
            <Card
              key={project.id}
              className="p-0 overflow-hidden border border-border bg-background-elevated shadow-subtle group flex flex-col justify-between hover:border-brand-teal/50 hover:shadow-elevated transition-all duration-300"
            >
              <div>
                {/* Clickable Image Showcase with Browser Frame */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative bg-background-secondary border-b border-border overflow-hidden cursor-pointer group/cardimg"
                  title={`${project.title} — ${t.work.visitLive}`}
                >
                  {/* Browser Frame Header */}
                  <div className="h-9 bg-background-secondary border-b border-border flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                  </div>

                  {/* Browser Body / Image */}
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src={project.coverImage}
                      alt={`${project.title} Showcase`}
                      fill
                      className="object-contain transition-transform duration-700 group-hover/cardimg:scale-[1.03]"
                      unoptimized
                    />

                    {/* Hover Overlay Hint */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/cardimg:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-teal text-brand-navy font-bold text-xs shadow-card transform translate-y-4 group-hover/cardimg:translate-y-0 transition-transform duration-300">
                        <span>{t.work.visitLive}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </a>

                {/* Content Details */}
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="teal" className="text-xs py-1 px-3">
                      {t.work.projects?.[project.id]?.category || project.category}
                    </Badge>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/10 px-2 py-0.5 rounded-full border border-brand-teal/20">
                        <Sparkles className="w-3 h-3" />
                        <span>{t.work.featuredBadge}</span>
                      </span>
                    )}
                  </div>
                  
                  <div>
                    <span className="text-xs font-bold text-brand-teal block mb-1">
                      {project.subtitle}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground group-hover:text-brand-teal transition-colors tracking-tight">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        {t.work.projects?.[project.id]?.title || project.title}
                      </a>
                    </h2>
                  </div>
                  
                  <p className="text-sm sm:text-base text-foreground-muted leading-relaxed font-normal line-clamp-3">
                    {t.work.projects?.[project.id]?.summary || project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-background-secondary border border-border px-3 py-1 rounded-md text-foreground font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Live Website Action Button */}
              <div className="p-8 pt-0 mt-4">
                <Button
                  href={project.liveUrl}
                  external
                  size="lg"
                  className="w-full gap-2 font-bold justify-center"
                >
                  <span>{t.work.visitLive}</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
