"use client";

import React, { useState, useRef, useEffect } from "react";
import { Github, Globe, Code2 } from "lucide-react";

export function FounderSignature() {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative flex items-center z-40"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <button 
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2.5 text-[13px] sm:text-sm font-bold text-foreground hover:text-brand-teal bg-background-elevated border border-border/80 hover:border-brand-teal/50 px-4 py-2 rounded-full shadow-subtle hover:shadow-glow transition-all duration-300 cursor-pointer group focus:outline-none"
      >
        <Code2 className="w-4 h-4 text-brand-teal group-hover:animate-pulse" />
        <span>Developed by <span className="font-extrabold group-hover:text-brand-teal transition-colors">Sayed Nada</span></span>
      </button>

      {/* Pop-out Wrapper to prevent hover gap issue */}
      <div 
        className={`absolute bottom-full left-0 sm:left-auto sm:right-0 pb-3 transition-all duration-300 ease-out origin-bottom-left sm:origin-bottom-right ${
          isExpanded ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-3 min-w-[140px] bg-background-elevated border border-border rounded-xl p-3 shadow-elevated">
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal border-b border-border pb-1.5">
            Founder / Developer
          </span>
          <a 
            href="https://github.com/SayedNada74" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-xs font-bold text-foreground hover:text-brand-teal transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a 
            href="https://sayed-nada-portfolio.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-xs font-bold text-foreground hover:text-brand-teal transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span>Portfolio</span>
          </a>
        </div>
      </div>
    </div>
  );
}
