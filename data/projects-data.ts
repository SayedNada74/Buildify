import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "grand-cafe",
    slug: "grand-cafe",
    title: "Grand Café",
    subtitle: "Restaurant Digital Hospitality Experience",
    category: "Restaurant & Hospitality",
    client: "Grand Café",
    summary:
      "A bespoke digital experience built around brand storytelling, responsive menu discovery, and online customer engagement.",
    tags: ["Web Design", "Development", "Hospitality", "SEO", "Responsive UX"],
    coverImage: "/images/projects/grand-cafe.png",
    liveUrl: "https://grand-cafe.vercel.app/",
    featured: true,
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
    id: "sayed-nada-portfolio",
    slug: "sayed-nada-portfolio",
    title: "Sayed Nada Portfolio",
    subtitle: "Creative Personal Branding & Portfolio",
    category: "Personal Portfolio",
    client: "Sayed Nada",
    summary:
      "A high-end personal portfolio website engineered around editorial typography, smooth interactions, and career achievements.",
    tags: ["UI/UX Design", "Portfolio", "Personal Brand", "Motion"],
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
    title: "SU IT Guide",
    subtitle: "Academic Guide & Student Digital Portal",
    category: "Educational Platform",
    client: "Suez University IT Students",
    summary:
      "A comprehensive academic and digital guide platform designed for computer science and IT university students.",
    tags: ["EdTech Platform", "Web Portal", "Student UX", "Information Architecture"],
    coverImage: "/images/projects/su-it-guide.png",
    liveUrl: "https://su-it-guide.vercel.app/",
    featured: false,
    draft: false,
    contentNeeded: false,
    caseStudy: {
      overview: "An academic platform aggregating study resources, course roadmaps, and college guidelines.",
      challenge: "Organizing vast educational content into an easy, mobile-friendly navigation tree.",
      approach: "Structured clean categorization, fast search discoverability, and accessible layout.",
      deliverables: [
        { title: "Information Architecture", description: "Streamlined student resource categorization." },
        { title: "Web Platform Development", description: "Fast, light, accessible student portal." },
      ],
      liveUrl: "https://su-it-guide.vercel.app/",
    },
  },
  {
    id: "ziko-portfolio",
    slug: "ziko-portfolio",
    title: "Ziko Portfolio",
    subtitle: "Creative Product & Skills Showcase",
    category: "Personal Portfolio",
    client: "Ziko",
    summary:
      "A modern digital showcase focused on creative skills, project portfolio, and interactive user experience.",
    tags: ["Personal Brand", "Creative Web", "UX Systems"],
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
];

/**
 * Returns only ready, approved public projects (excluding drafts).
 */
export function getPublicProjects(): Project[] {
  return projectsData.filter((project) => !project.draft);
}
