/* ============================================================
   Shared TypeScript types and interfaces for the entire
   portfolio application.

   Content types live here so that data files and components
   share a single source of truth. Update here when a data
   shape changes; TypeScript will surface all affected sites.
   ============================================================ */

/* --- Theme ------------------------------------------------- */

export type Theme = 'light' | 'dark';

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

/* --- Navigation -------------------------------------------- */

export interface NavItem {
  label: string;
  href: string;
  /** True when this nav item has a dropdown or sub-navigation */
  hasChildren?: boolean;
  children?: NavItem[];
}

/* --- Skills / Expertise ------------------------------------ */

export type SkillCategory =
  | 'Software Development'
  | 'Design'
  | 'Tools & Platforms'
  | 'Soft Skills';

export interface Skill {
  name: string;
  category: SkillCategory;
  /** Optional proficiency level 1–5 */
  level?: number;
}

export interface SkillGroup {
  category: SkillCategory;
  skills: Skill[];
}

/* --- Projects ---------------------------------------------- */

export type ProjectStatus = 'Completed' | 'In Progress' | 'Concept';

export type ProjectCategory =
  | 'Web Development'
  | 'Mobile'
  | 'Design System'
  | 'Open Source'
  | 'Tool'
  | 'Other';

export interface Project {
  id: string;
  title: string;
  description: string;
  /** Longer detail shown on individual project page */
  longDescription?: string;
  category: ProjectCategory;
  status: ProjectStatus;
  /** Array of technology or tool names */
  technologies: string[];
  /** Path to the project cover image — relative to /public */
  image?: string;
  imageAlt?: string;
  githubUrl?: string;
  liveUrl?: string;
  /** Whether to feature this project on the homepage */
  featured: boolean;
  /** ISO date string: YYYY-MM-DD */
  startDate?: string;
  endDate?: string;
}

/* --- Graphic Design ---------------------------------------- */

export type DesignCategory =
  | 'Branding'
  | 'Print'
  | 'Digital'
  | 'UI/UX'
  | 'Illustration'
  | 'Motion';

export interface DesignProject {
  id: string;
  title: string;
  description: string;
  category: DesignCategory;
  /** Tools used, e.g. Illustrator, Figma */
  tools: string[];
  /** Array of image paths relative to /public */
  images: string[];
  coverImage: string;
  coverImageAlt: string;
  featured: boolean;
  year: number;
}

/* --- Ventures ---------------------------------------------- */

export type VentureStatus = 'Active' | 'In Development' | 'Past';

export interface Venture {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: VentureStatus;
  /** Industry or sector */
  industry: string;
  logo?: string;
  url?: string;
  /** ISO year string */
  founded?: string;
  featured: boolean;
}

/* --- Work Experience --------------------------------------- */

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  /** Short description of the company */
  companyDescription?: string;
  /** Key responsibilities or achievements — shown as bullet points */
  highlights: string[];
  startDate: string;
  /** Leave undefined for current role */
  endDate?: string;
  location: string;
  /** Remote | On-site | Hybrid */
  workType: 'Remote' | 'On-site' | 'Hybrid';
  companyLogo?: string;
  technologies?: string[];
}

/* --- Education --------------------------------------------- */

export interface Education {
  id: string;
  institution: string;
  qualification: string;
  /** Field of study */
  field: string;
  startYear: number;
  /** Leave undefined if ongoing */
  endYear?: number;
  description?: string;
  logo?: string;
}

/* --- Certifications ---------------------------------------- */

export interface Certification {
  id: string;
  title: string;
  issuingOrganisation: string;
  /** ISO date string */
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  logo?: string;
}

/* --- Achievements ------------------------------------------ */

export type AchievementCategory =
  | 'Award'
  | 'Recognition'
  | 'Publication'
  | 'Speaking'
  | 'Community';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: AchievementCategory;
  year: number;
  organisation?: string;
}

/* --- Insights (blog-style) --------------------------------- */

export type InsightTag = string;

export interface Insight {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  /** Full body content — markdown string for future rendering */
  content?: string;
  tags: InsightTag[];
  /** ISO date string */
  publishedDate: string;
  /** Estimated read time in minutes */
  readingTime: number;
  featured: boolean;
  coverImage?: string;
  coverImageAlt?: string;
}

/* --- Contact ----------------------------------------------- */

export interface SocialLink {
  platform: string;
  url: string;
  /** Accessible label for screen readers */
  ariaLabel: string;
}

/* --- Shared component props -------------------------------- */

/** Props accepted by any component that renders a section heading */
export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Horizontal alignment — defaults to 'left' */
  align?: 'left' | 'center';
}
