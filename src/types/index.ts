export type Locale = "fr" | "en" | "es" | "ar";

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: string;
  darkIcon?: string;
  category: SkillCategory;
  level: number;
}

export type SkillCategory =
  | "frontend"
  | "backend"
  | "databases"
  | "languages"
  | "cloud"
  | "devops"
  | "tools"
  | "testing"
  | "ai";

export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  position: string;
  type: string;
  startDate: string;
  endDate: string;
  location: string;
  countryCode: string;
  technologies: string[];
  descriptionKeys: string[];
  logo?: string;
}

export interface Education {
  id: string;
  school: string;
  location: string;
  countryCode: string;
  degree: string;
  startDate: string;
  endDate: string;
  highlight?: string;
  descriptionKeys: string[];
  logo?: string;
  darkLogo?: string;
}

export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  website?: string;
  report?: string;
  screenshots?: string[];
  details?: ProjectDetails;
}

export interface ProjectDetails {
  features: string[];
  architecture?: string;
  techStack: { name: string; role: string }[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
