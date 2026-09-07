"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { getPublicProjects } from "@/data/projects-data";
import { useLanguage } from "@/providers/language-provider";
import { TechStackList } from "@/components/ui/tech-icon";
import { ExternalLink, Calendar, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FilterType = "all" | "platforms" | "ecommerce" | "portfolios";

export function WorkView() {
  const { t } = useLanguage();
  const publicProjects = getPublicProjects();
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filterTabs: { id: FilterType; label: string }[] = useMemo(
    () => [
      { id: "all", label: `${t.work.filterAll || "All Projects"} (${publicProjects.length})` },
      { id: "platforms", label: t.work.filterPlatforms || "Academic & Tools" },
      { id: "ecommerce", label: t.work.filterEcommerce || "E-Commerce & Menus" },
      { id: "portfolios", label: t.work.filterPortfolios || "Portfolios" },
    ],
    [t.work, publicProjects.length]
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return publicProjects;
    if (activeFilter === "ecommerce")
      return publicProjects.filter((p) => p.id === "grand-cafe" || p.category.toLowerCase().includes("commerce"));
    if (activeFilter === "portfolios")
      return publicProjects.filter((p) => p.id.includes("portfolio") || p.category.toLowerCase().includes("portfolio"));
    if (activeFilter === "platforms")
      return publicProjects.filter(
        (p) => p.id === "sinai-tech-portal" || p.id === "su-it-guide" || p.category.toLowerCase().includes("portal") || p.category.toLowerCase().includes("tool")
      );
    return publicProjects;
  }, [activeFilter, publicProjects]);

  return (
    <div className="py-20 sm:py-32 bg-background text-foreground transition-colors duration-200 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-teal/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <Container>
        <SectionHeading
          eyebrow={t.work.eyebrow}
          title={t.work.title}
          description={t.work.description}
        />

        {/* Filter Tabs */}
        <div className="mt-10 sm:mt-14 flex items-center justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-subtle max-w-full">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 select-none ${
                    isActive
                      ? "text-brand-navy shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeWorkViewTab"
                      className="absolute inset-0 bg-brand-teal rounded-xl shadow-glow -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Uniform Projects Grid - Consistent Layout for All 5 Projects */}
        <div className="mt-14 sm:mt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
            >
              {filteredProjects.map((project, index) => {
                const projectTitle = t.work.projects?.[project.id]?.title || project.title;
                const projectCategory = t.work.projects?.[project.id]?.category || project.category;
                const projectSummary = t.work.projects?.[project.id]?.summary || project.summary;
                const cleanDomain = project.liveUrl?.replace(/^https?:\/\//, "").replace(/\/$/, "");

                return (
                  <div
                    key={project.id}
                    className="group flex flex-col justify-between rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#0A182E] border border-slate-200/90 dark:border-slate-800/80 shadow-subtle hover:shadow-elevated hover:border-brand-teal/50 dark:hover:border-brand-teal/50 transition-all duration-500 overflow-hidden"
                  >
                    <div>
                      {/* Clickable Image Showcase with Studio Frame (Zero Blur, VIEW Cursor, Aspect 21:10) */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="view"
                        className="block relative bg-[#060D17] border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden select-none group/cardimg shadow-card transition-all duration-500 group-hover:shadow-glow group-hover:-translate-y-1 mb-6"
                        title={`${projectTitle} — ${t.work.visitLive}`}
                      >
                        {/* Browser Frame Header */}
                        <div className="h-10 bg-slate-100/90 dark:bg-[#071324] border-b border-slate-200 dark:border-slate-800 flex items-center px-4 gap-2">
                          <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                          </div>

                          <div className="flex-1 text-center">
                            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-white dark:bg-slate-900 rounded-full text-[10px] font-semibold text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 truncate max-w-[180px] sm:max-w-[260px]">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                              <span>{cleanDomain}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-teal-700 dark:text-brand-teal bg-teal-50 dark:bg-brand-teal/10 px-2 py-0.5 rounded border border-teal-200 dark:border-brand-teal/20">
                            <ArrowUpRight className="w-3 h-3" />
                          </div>
                        </div>

                        {/* Browser Body / Image (Aspect 21:10 prevents edge cropping!) */}
                        <div className="relative w-full aspect-[21/10] overflow-hidden bg-[#060D17] flex items-center justify-center">
                          <Image
                            src={project.coverImage}
                            alt={`${projectTitle} Showcase`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority={index < 2}
                            className="object-contain transition-transform duration-500 ease-out group-hover/cardimg:scale-[1.02]"
                            unoptimized
                          />

                          {/* Corner Floating Live Badge */}
                          <div className="absolute top-3 right-3 pointer-events-none">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/80 text-slate-900 dark:text-slate-100 font-bold text-[11px] shadow-subtle group-hover/cardimg:border-brand-teal/50 group-hover/cardimg:text-teal-600 dark:group-hover/cardimg:text-brand-teal transition-colors">
                              <span>Live Site</span>
                              <ExternalLink className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      </a>

                      {/* Content Details */}
                      <div className="space-y-3.5">
                        {/* Meta Tags Row */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200/80 dark:border-teal-800/60">
                            {projectCategory}
                          </span>
                          {project.year && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
                              <Calendar className="w-3 h-3 text-slate-500" />
                              <span>{project.year}</span>
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white group-hover:text-teal-600 dark:group-hover:text-brand-teal transition-colors tracking-tight">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            {projectTitle}
                          </a>
                        </h3>

                        {/* Summary / Description */}
                        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                          {projectSummary}
                        </p>

                        {/* Branded Tech Stack with Icons */}
                        <div className="pt-2">
                          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                            Technologies & Architecture:
                          </span>
                          <TechStackList techStack={project.techStack} fallbackTags={project.tags} />
                        </div>
                      </div>
                    </div>

                    {/* Direct Live Website Action Button */}
                    <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-slate-800/60">
                      <Button
                        href={project.liveUrl}
                        external
                        size="md"
                        className="w-full gap-2 font-bold justify-center shadow-subtle hover:shadow-md"
                      >
                        <span>{t.work.visitLive}</span>
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
}
