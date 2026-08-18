"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={cn("w-9 h-9 rounded-full bg-brand-navy/10 dark:bg-white/15 border border-transparent", className)} />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-teal select-none border shadow-sm",
        "bg-brand-navy/10 text-brand-navy hover:bg-brand-navy/20 border-brand-navy/20 dark:bg-white/15 dark:text-slate-100 dark:hover:bg-white/25 dark:border-white/20",
        className
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-200 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-brand-navy transition-transform duration-200" />
      )}
    </button>
  );
}
