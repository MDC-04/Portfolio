import { Skill } from "@/types";
import { techIcons, techIconsDark } from "@/data/techIcons";

export const skills: Skill[] = [
  // Frontend
  { name: "Angular", icon: techIcons["Angular"], category: "frontend", level: 90 },
  { name: "React", icon: techIcons["React"], category: "frontend", level: 92 },
  { name: "Next.js", icon: techIcons["Next.js"], category: "frontend", level: 88 },
  { name: "SolidJS", icon: techIcons["SolidJS"], category: "frontend", level: 80 },
  { name: "Leaflet", icon: techIcons["Leaflet"], category: "frontend", level: 86 },
  { name: "Google Maps", icon: techIcons["Google Maps"], category: "frontend", level: 82 },
  { name: "D3.js", icon: techIcons["D3.js"], category: "frontend", level: 78 },
  { name: "MapLibre GL JS", icon: techIcons["MapLibre GL JS"], category: "frontend", level: 80 },
  { name: "Vite", icon: techIcons["Vite"], category: "frontend", level: 82 },
  { name: "Tailwind CSS", icon: techIcons["Tailwind CSS"], category: "frontend", level: 90 },
  { name: "HTML", icon: techIcons["HTML"], category: "frontend", level: 95 },
  { name: "CSS", icon: techIcons["CSS"], category: "frontend", level: 92 },

  // Backend
  { name: "Spring Boot", icon: techIcons["Spring Boot"], category: "backend", level: 85 },
  { name: "Node.js", icon: techIcons["Node.js"], category: "backend", level: 82 },
  { name: "Express", icon: techIcons["Express"], category: "backend", level: 82 },
  { name: "Maven", icon: techIcons["Maven"], category: "backend", level: 80 },
  { name: "FastAPI", icon: techIcons["FastAPI"], category: "backend", level: 80 },
  { name: "Zod", icon: techIcons["Zod"], category: "backend", level: 78 },
  { name: "JWT", icon: techIcons["JWT"], category: "backend", level: 80 },

  // Databases
  { name: "PostgreSQL", icon: techIcons["PostgreSQL"], category: "databases", level: 85 },
  { name: "PostGIS", icon: techIcons["PostGIS"], category: "databases", level: 80 },
  { name: "MongoDB", icon: techIcons["MongoDB"], category: "databases", level: 82 },
  { name: "DynamoDB", icon: techIcons["DynamoDB"], category: "databases", level: 75 },
  { name: "Redis", icon: techIcons["Redis"], category: "databases", level: 78 },

  // Languages
  { name: "Java", icon: techIcons["Java"], category: "languages", level: 88 },
  { name: "Python", icon: techIcons["Python"], category: "languages", level: 85 },
  { name: "JavaScript", icon: techIcons["JavaScript"], category: "languages", level: 95 },
  { name: "TypeScript", icon: techIcons["TypeScript"], category: "languages", level: 90 },
  { name: "C", icon: techIcons["C"], category: "languages", level: 80 },
  { name: "C++", icon: techIcons["C++"], category: "languages", level: 78 },

  // Cloud & DevOps
  { name: "AWS", icon: techIcons["AWS"], darkIcon: techIconsDark["AWS"], category: "cloud", level: 78 },
  { name: "Docker", icon: techIcons["Docker"], category: "devops", level: 82 },
  { name: "CI/CD", icon: techIcons["CI/CD"], category: "devops", level: 80 },

  // Tools
  { name: "Git", icon: techIcons["Git"], category: "tools", level: 92 },
  { name: "GitHub", icon: techIcons["GitHub"], darkIcon: techIconsDark["GitHub"], category: "tools", level: 88 },
  { name: "GitLab", icon: techIcons["GitLab"], category: "tools", level: 84 },
  { name: "Jira", icon: techIcons["Jira"], category: "tools", level: 82 },
  { name: "Figma", icon: techIcons["Figma"], category: "tools", level: 80 },
  { name: "Confluence", icon: techIcons["Confluence"], category: "tools", level: 82 },
  { name: "LaTeX", icon: techIcons["LaTeX"], darkIcon: techIconsDark["LaTeX"], category: "tools", level: 78 },
  { name: "Agility", icon: techIcons["Agility"], category: "tools", level: 85 },
  { name: "YOLO", icon: techIcons["YOLO"], category: "tools", level: 76 },

  // Testing
  { name: "JUnit 5", icon: techIcons["JUnit 5"], category: "testing", level: 82 },
  { name: "JaCoCo", icon: techIcons["JaCoCo"], category: "testing", level: 78 },
  { name: "PIT", icon: techIcons["PIT"], category: "testing", level: 74 },
  { name: "TDD", icon: techIcons["TDD"], category: "testing", level: 80 },

  // AI
  { name: "Machine Learning", icon: techIcons["Machine Learning"], category: "ai", level: 78 },
  { name: "scikit-learn", icon: techIcons["scikit-learn"], category: "ai", level: 78 },
  { name: "Random Forest", icon: techIcons["Random Forest"], category: "ai", level: 76 },
];

export const skillCategories: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  databases: "Databases",
  languages: "Languages",
  cloud: "Cloud",
  devops: "DevOps",
  tools: "Tools",
  testing: "Testing",
  ai: "AI",
};
