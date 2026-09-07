import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "sinai-tech-portal",
    slug: "sinai-tech-portal",
    title: "Sinai Tech Portal",
    subtitle: "Academic Portal & Resource Hub",
    category: "Academic Portal & Resource Hub",
    client: "Sinai University",
    year: "From Jul 2026 To Sep 2026",
    summary:
      "A comprehensive educational portal serving students and faculty at Sinai University with real-time academic resources, schedules, and developer documentation.",
    tags: ["React", "TypeScript", "CSS Modules", "REST APIs", "Supabase"],
    techStack: ["React", "TypeScript", "CSS Modules", "REST APIs", "Supabase"],
    coverImage: "/images/projects/sinai-tech-portal.png",
    liveUrl: "https://sinai-tech-portal.vercel.app/",
    featured: true,
    draft: false,
    contentNeeded: false,
    caseStudy: {
      overview: "An integrated technical knowledge and student resource platform built for modern engineering tracks.",
      challenge: "Providing structured, accessible technical roadmaps and community announcements in one central hub.",
      approach: "Built with high-speed performance architecture, responsive layout grid, and intuitive student navigation.",
      deliverables: [
        { title: "Portal Architecture", description: "Clear categorization of tech tracks and university resources." },
        { title: "Frontend Engineering", description: "Fast, responsive web platform optimized for all screen sizes." },
      ],
      liveUrl: "https://sinai-tech-portal.vercel.app/",
    },
  },
  {
    id: "grand-cafe",
    slug: "grand-cafe",
    title: "Grand Cafe Platform",
    subtitle: "E-Commerce & Digital Menu Experience",
    category: "E-Commerce & Digital Menu Experience",
    client: "Grand Café",
    year: "August 2026",
    summary:
      "An interactive digital ordering system and dynamic menu application crafted for a luxury café, featuring fluid animations and tactile product presentation.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "REST APIs", "Responsive UI"],
    techStack: ["React", "Tailwind CSS", "Framer Motion", "REST APIs", "Responsive UI"],
    coverImage: "/images/projects/grand-cafe.png",
    liveUrl: "https://grand-cafe.vercel.app/",
    featured: false,
    draft: false,
    contentNeeded: false,
    caseStudy: {
      overview:
        "Grand Café required a modern, elevated digital presence to showcase their menu and hospitality experience to online visitors.",
      challenge:
        "Transforming a traditional hospitality presence into a mobile-first digital experience optimized for speed, clarity, and search engine discoverability.",
      approach:
        "Crafted a mobile-first interface emphasizing clear typography, visual hierarchy, and fast loading performance.",
      deliverables: [
        { title: "Digital Experience Design", description: "Bespoke user interface tailored to the brand aesthetic." },
        { title: "Performance Architecture", description: "Engineered for sub-second page loads on mobile networks." },
        { title: "Localized SEO Foundation", description: "Structured metadata for local discovery." },
      ],
      liveUrl: "https://grand-cafe.vercel.app/",
    },
  },
  {
    id: "ziko-portfolio",
    slug: "ziko-portfolio",
    title: "Ziko Portfolio",
    subtitle: "Interactive Creative Developer Portfolio",
    category: "Creative Developer Portfolio",
    client: "Ziko",
    year: "May 2026",
    summary:
      "A bespoke portfolio experience highlighting smooth scroll physics, custom typography, and dynamic WebGL shaders.",
    tags: ["React", "Three.js", "Lenis Scroll", "Tailwind CSS"],
    techStack: ["React", "Three.js", "Lenis Scroll", "Tailwind CSS"],
    coverImage: "/images/projects/ziko-portfolio.png",
    liveUrl: "https://ziko-portfolio-seven.vercel.app/",
    featured: false,
    draft: false,
    contentNeeded: false,
    caseStudy: {
      overview: "A sleek personal showcase designed to highlight digital projects and technical capabilities.",
      challenge: "Building a lightweight, high-impact personal site.",
      approach: "Utilized modern responsive cards, rich typography, and seamless link actions.",
      deliverables: [
        { title: "Showcase Design", description: "Clean aesthetic for project presentation." },
        { title: "Live Link Integration", description: "Direct deployment access for client visitors." },
      ],
      liveUrl: "https://ziko-portfolio-seven.vercel.app/",
    },
  },
  {
    id: "sayed-nada-portfolio",
    slug: "sayed-nada-portfolio",
    title: "Sayed Nada Portfolio",
    subtitle: "Frontend & 3D Web Developer • Interactive 3D Portfolio",
    category: "Frontend & 3D Web Developer",
    client: "Sayed Nada",
    year: "July 2026",
    summary:
      "A responsive, component-driven portfolio featuring a 60+ FPS Three.js WebGL interactive background with viewport throttling, fluid GSAP ScrollTrigger animations, and zero-FOUC theme switching.",
    tags: ["React", "TypeScript", "Vite", "Three.js", "GSAP", "Lenis Scroll", "Tailwind CSS"],
    techStack: ["React", "TypeScript", "Vite", "Three.js", "GSAP", "Lenis Scroll", "Tailwind CSS"],
    coverImage: "/images/projects/sayed-nada.png",
    liveUrl: "https://sayed-nada-portfolio.vercel.app/",
    featured: false,
    draft: false,
    contentNeeded: false,
    caseStudy: {
      overview: "A bespoke portfolio platform built to highlight design authority and digital craft.",
      challenge: "Creating a distinct visual identity that stands out while delivering fast performance.",
      approach: "Focused on high-contrast typography, interactive micro-animations, and clean layout grid.",
      deliverables: [
        { title: "UI/UX System", description: "Custom component design and color system." },
        { title: "Frontend Engineering", description: "Responsive implementation with Next.js." },
      ],
      liveUrl: "https://sayed-nada-portfolio.vercel.app/",
    },
  },
  {
    id: "su-it-guide",
    slug: "su-it-guide",
    title: "Moodle Calendar Sync & Course Matcher",
    subtitle: "Student Productivity Tool & Sync Engine",
    category: "Student Productivity Tool",
    client: "Sinai University Students",
    year: "January 2026",
    summary:
      "Constructed a student productivity tool for Sinai University to scrape, parse, and synchronize Moodle homework assignments, lectures, and exams with Vercel serverless proxy functions and offline caching.",
    tags: ["JavaScript", "Vercel Serverless", "Tailwind CSS", "REST APIs"],
    techStack: ["JavaScript", "Vercel Serverless", "Tailwind CSS", "REST APIs"],
    coverImage: "/images/projects/su-it-guide.png",
    liveUrl: "https://su-it-guide.vercel.app/",
    featured: false,
    draft: false,
    contentNeeded: false,
    caseStudy: {
      overview: "A student productivity tool for calendar synchronization and course matching.",
      challenge: "Securely managing asynchronous API calls and bypassing CORS constraints.",
      approach: "Serverless proxy functions on Vercel with localStorage browser cache synchronization.",
      deliverables: [
        { title: "Sync Engine", description: "Scrape and parse Moodle assignments and exams." },
        { title: "Serverless Functions", description: "Proxy architecture on Vercel." },
      ],
      liveUrl: "https://su-it-guide.vercel.app/",
    },
  },
];

/**
 * Returns only ready, approved public projects (excluding drafts).
 */
export function getPublicProjects(): Project[] {
  return projectsData.filter((project) => !project.draft);
}
