"use client";

import React from "react";

interface TechMeta {
  name: string;
  renderIcon: (className?: string) => React.ReactNode;
}

const TECH_DEFINITIONS: Record<string, TechMeta> = {
  react: {
    name: "React",
    renderIcon: (className = "w-3.5 h-3.5") => (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  typescript: {
    name: "TypeScript",
    renderIcon: (className = "w-3.5 h-3.5") => (
      <svg className={className} viewBox="0 0 128 128">
        <rect width="128" height="128" rx="20" fill="#3178C6" />
        <path
          d="M74.88 56.48H90.88V66.88H74.88V103.52H63.68V66.88H47.68V56.48H74.88ZM114.72 68.64C114.72 61.28 108.8 55.36 100 55.36C91.2 55.36 84.8 60.96 84.8 68.48C84.8 81.6 113.76 77.28 113.76 90.72C113.76 95.52 109.12 98.4 102.72 98.4C95.2 98.4 89.6 94.72 87.52 88.48L78.24 93.92C81.92 102.72 91.2 108.48 102.72 108.48C115.36 108.48 125.12 101.44 125.12 90.72C125.12 77.12 96.16 81.76 96.16 68.48C96.16 64.32 99.84 61.92 104.96 61.92C109.44 61.92 113.6 64 115.36 67.84L114.72 68.64Z"
          fill="white"
        />
      </svg>
    ),
  },
  cssmodules: {
    name: "CSS Modules",
    renderIcon: (className = "w-3.5 h-3.5") => (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <path d="M6 3l2.2 24.3L16 30l7.8-2.7L26 3H6z" fill="#264de4" />
        <path d="M16 27.7l6.2-2.1L23.8 5H16v22.7z" fill="#2965f1" />
        <path d="M16 11.5h4.6l-.3 3.6H16v3.2h4.3l-.5 5.5-3.8 1.1v3.3l6.5-1.9 1-11.6H16v-3.2z" fill="#fff" />
        <path d="M16 11.5H9.6l.3 3.6H16v-3.6zm0 6.8H12.3l.3 3.6H16v-3.6z" fill="#ebebeb" />
      </svg>
    ),
  },
  restapis: {
    name: "REST APIs",
    renderIcon: (className = "w-3.5 h-3.5") => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" className="stroke-emerald-600 dark:stroke-emerald-400" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" className="stroke-teal-600 dark:stroke-teal-400" />
      </svg>
    ),
  },
  supabase: {
    name: "Supabase",
    renderIcon: (className = "w-3.5 h-3.5") => (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12.9219 23.4984C12.4402 24.1681 11.3932 23.8291 11.3857 23.0076L11.2338 6.46747H2.67389C1.61485 6.46747 1.05451 5.21396 1.76189 4.42588L11.0781 0.501597C11.5598 -0.168051 12.6068 0.17094 12.6143 0.992435L12.7662 17.5325H21.3261C22.3851 17.5325 22.9455 18.786 22.2381 19.5741L12.9219 23.4984Z"
          fill="#3ECF8E"
        />
      </svg>
    ),
  },
  tailwind: {
    name: "Tailwind CSS",
    renderIcon: (className = "w-3.5 h-3.5") => (
      <svg className={className} viewBox="0 0 54 33" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.005-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },
  framermotion: {
    name: "Framer Motion",
    renderIcon: (className = "w-3.5 h-3.5") => (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#FF0055" />
      </svg>
    ),
  },
  responsiveui: {
    name: "Responsive UI",
    renderIcon: (className = "w-3.5 h-3.5") => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="12" x="3" y="4" rx="2" className="stroke-indigo-600 dark:stroke-indigo-400" />
        <path d="M7 20h10M12 16v4" className="stroke-indigo-600 dark:stroke-indigo-400" />
      </svg>
    ),
  },
  threejs: {
    name: "Three.js (WebGL)",
    renderIcon: (className = "w-3.5 h-3.5") => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1.5L2 19.5h20L12 1.5zm0 3.8l6.8 12.2H5.2L12 5.3z" className="fill-slate-900 dark:fill-white transition-colors" />
      </svg>
    ),
  },
  lenisscroll: {
    name: "Lenis Scroll",
    renderIcon: (className = "w-3.5 h-3.5") => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" className="stroke-rose-600 dark:stroke-rose-400" />
      </svg>
    ),
  },
  vite: {
    name: "Vite",
    renderIcon: (className = "w-3.5 h-3.5") => (
      <svg className={className} viewBox="0 0 32 32" fill="none">
        <path d="M29.9 5.8L16.8 29.3c-.4.7-1.3.7-1.7 0L2.1 5.8c-.5-.8.1-1.8 1-1.8h25.8c.9 0 1.5 1 1 1.8z" fill="#BD34FE" />
        <path d="M22.5 4L16 16.5l-4.2-7.2L22.5 4z" fill="#FFEA83" />
        <path d="M16 16.5l-2.2 4.1 4.5-.6-3.8 8.5 7-12H16z" fill="#FFDF00" />
      </svg>
    ),
  },
  gsap: {
    name: "GSAP",
    renderIcon: (className = "w-3.5 h-3.5") => (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#88CE02" />
        <path d="M7 12l3 3 7-7" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  javascript: {
    name: "JavaScript",
    renderIcon: (className = "w-3.5 h-3.5") => (
      <svg className={className} viewBox="0 0 128 128">
        <rect width="128" height="128" rx="20" fill="#F7DF1E" />
        <path d="M67.31 92.59c1.94 3.32 4.67 5.75 9.4 5.75 4.73 0 7.74-2.39 7.74-7.58v-43.9h12.55v44.13c0 11.75-6.84 17.07-19.46 17.07-10.47 0-16.5-5.35-19.57-12.29l9.34-3.18zm-30.82-1.39c2.31 4.02 6.01 6.94 12.02 6.94 5.36 0 8.87-2.68 8.87-6.38 0-4.44-3.51-6.01-9.43-8.5l-3.23-1.39c-9.34-4.02-15.53-9.06-15.53-19.59 0-9.8 7.58-17.09 19.32-17.09 8.32 0 14.33 3.05 18.21 9.98l-9.15 5.82c-2.03-3.6-4.71-4.9-9.06-4.9-4.16 0-7.02 2.59-7.02 5.82 0 3.97 2.4 5.45 8.04 7.86l3.23 1.39c11.09 4.71 17.1 9.79 17.1 20.33 0 11.64-9.15 17.84-21.63 17.84-12.02 0-19.42-5.73-23.01-13.68l9.24-4.45z" fill="#000" />
      </svg>
    ),
  },
  vercel: {
    name: "Vercel Serverless",
    renderIcon: (className = "w-3.5 h-3.5") => (
      <svg className={className} viewBox="0 0 76 65" fill="none">
        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" className="fill-slate-900 dark:fill-white transition-colors" />
      </svg>
    ),
  },
};

export function TechBadge({ techKey }: { techKey: string }) {
  const clean = techKey.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Match lookup
  const matchEntry = Object.entries(TECH_DEFINITIONS).find(([key]) => {
    if (key === clean) return true;
    if (clean.includes(key) || key.includes(clean)) return true;
    if (key === "threejs" && (clean.includes("three") || clean.includes("webgl"))) return true;
    if (key === "lenisscroll" && clean.includes("lenis")) return true;
    if (key === "cssmodules" && (clean.includes("css") || clean.includes("module"))) return true;
    if (key === "restapis" && (clean.includes("rest") || clean.includes("api"))) return true;
    if (key === "responsiveui" && clean.includes("responsive")) return true;
    if (key === "vercel" && (clean.includes("vercel") || clean.includes("serverless"))) return true;
    return false;
  });

  const meta = matchEntry
    ? matchEntry[1]
    : {
        name: techKey,
        renderIcon: (cls = "w-3.5 h-3.5") => (
          <span className={`w-2 h-2 rounded-full bg-brand-teal shrink-0 ${cls}`} />
        ),
      };

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold tracking-normal transition-colors select-none bg-slate-100 hover:bg-slate-200/90 text-slate-800 border border-slate-200/90 shadow-2xs dark:bg-slate-900/90 dark:hover:bg-slate-800 dark:text-slate-200 dark:border-slate-800">
      <span className="shrink-0 flex items-center justify-center">
        {meta.renderIcon("w-3.5 h-3.5")}
      </span>
      <span className="font-medium whitespace-nowrap">{meta.name}</span>
    </span>
  );
}

export function TechStackList({
  techStack,
  fallbackTags,
}: {
  techStack?: string[];
  fallbackTags?: string[];
}) {
  const items = techStack && techStack.length > 0 ? techStack : fallbackTags || [];

  return (
    <div className="flex flex-wrap gap-1.5 items-center">
      {items.map((tech) => (
        <TechBadge key={tech} techKey={tech} />
      ))}
    </div>
  );
}
