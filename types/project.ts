export interface ProjectDeliverable {
  title: string;
  description: string;
}

export interface CaseStudyData {
  overview: string;
  challenge: string;
  approach: string;
  deliverables: ProjectDeliverable[];
  liveUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  summary: string;
  tags: string[];
  coverImage: string;
  heroImage?: string;
  liveUrl?: string; // Direct live deployment URL for client demo
  featured: boolean;
  draft?: boolean; // Set to true for unreleased / internal reference projects
  contentNeeded: boolean;
  caseStudy?: CaseStudyData;
}
