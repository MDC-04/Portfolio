/**
 * Single source of truth for all tech icons.
 * Store the full path including extension.
 * If you add a non-.svg icon, update the extension here.
 *
 * Usage:
 *   import { techIcons } from "@/data/techIcons";
 *   const icon = techIcons["React"]; // "/icons/react.png"
 */
export const techIcons: Record<string, string> = {
  // Frontend
  Angular: "/icons/angular.png",
  React: "/icons/react.png",
  "Next.js": "/icons/next.svg",
  SolidJS: "/icons/solid.png",
  TypeScript: "/icons/typescript.png",
  JavaScript: "/icons/js.png",
  "Tailwind CSS": "/icons/tailwind.png",
  HTML: "/icons/html.webp",
  CSS: "/icons/css.webp",
  Leaflet: "/icons/leaflet.png",
  "Google Maps": "/icons/google.png",

  // Backend
  Java: "/icons/java.png",
  "Spring Boot": "/icons/spring.svg",
  Python: "/icons/python.png",
  "Node.js": "/icons/node.png",
  Maven: "/icons/maven.svg",
  Express: "/icons/express.png",
  FastAPI: "/icons/fastapi.webp",

  // Databases
  PostgreSQL: "/icons/postgresql.png",
  MongoDB: "/icons/mongodb.png",
  DynamoDB: "/icons/dynamodb.png",
  PostGIS: "/icons/postgis.png",
  Redis: "/icons/redis.png",

  // Cloud & DevOps
  AWS: "/icons/aws.webp",
  Docker: "/icons/docker.webp",
  "CI/CD": "/icons/cicd.webp",
  Vite: "/icons/vite.png",

  // Tools
  Git: "/icons/git.png",
  GitHub: "/icons/github_w.png",
  GitLab: "/icons/gitlab.png",
  Jira: "/icons/jira.png",
  Figma: "/icons/figma.png",
  Confluence: "/icons/confluence.png",
  LaTeX: "/icons/latex-w.png",
  Agility: "/icons/agilite.png",

  // Languages
  C: "/icons/c.webp",
  "C++": "/icons/cpp.webp",

  // Other (projects)
  YOLO: "/icons/yolo.png",
  "D3.js": "/icons/d3.png",
  "JUnit 5": "/icons/junit.png",
  TDD: "/icons/tdd.png",
  JaCoCo: "/icons/jacoco.png",
  PIT: "/icons/pit.png",
  JWT: "/icons/jwt.png",
  Zod: "/icons/zod.png",
  "Machine Learning": "/icons/ml.png",
  "scikit-learn": "/icons/scikit.png",
  "Random Forest": "/icons/random-forest.png",
  "MapLibre GL JS": "/icons/maplibregl.png",
  "MapLibre GL": "/icons/maplibregl.png",
};

/**
 * Dark mode icon overrides.
 * Only add entries here for icons that need a different file in dark mode.
 */
export const techIconsDark: Record<string, string> = {
  AWS: "/icons/aws-b.png",
  GitHub: "/icons/github_b.png",
  LaTeX: "/icons/latex-b.png",
};
