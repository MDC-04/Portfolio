"use client";

import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, FileText, Github, Globe } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { TechIcon } from "@/components/TechIcon";
import { ProjectDetails } from "@/types";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const t = useTranslations();
  const tProj = useTranslations("projects");

  const project = projects.find((p) => p.id === params.id);
  const projectKeyBase = project?.titleKey.replace(/\.title$/, "");

  let translatedDetails: ProjectDetails | undefined = project?.details;

  if (projectKeyBase) {
    try {
      translatedDetails = t.raw(`${projectKeyBase}.details`) as ProjectDetails;
    } catch {
      translatedDetails = project?.details;
    }
  }

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-surface-900 dark:text-white">
            {tProj("notFound")}
          </h1>
          <button
            onClick={() => router.push("/#projects")}
            className="mt-4 cursor-pointer text-primary-600 hover:underline dark:text-primary-400"
          >
            ← {tProj("backToProjects")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white pb-20 pt-24 dark:bg-surface-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => router.push("/#projects")}
          className="mb-8 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-surface-600 transition-colors hover:text-primary-600 dark:text-surface-400 dark:hover:text-primary-400"
        >
          <ArrowLeft className="h-4 w-4" />
          {tProj("backToProjects")}
        </motion.button>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative mb-8 h-64 overflow-hidden rounded-2xl border border-surface-200 sm:h-80 md:h-96 dark:border-surface-800"
        >
          <Image
            src={project.image}
            alt={t(project.titleKey)}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Title and links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="mb-4 text-3xl font-bold text-surface-900 sm:text-4xl dark:text-white">
            {t(project.titleKey)}
          </h1>
          <p className="mb-6 text-lg leading-relaxed text-surface-600 dark:text-surface-300">
            {t(project.descriptionKey)}
          </p>

          {/* Action links */}
          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-surface-200 bg-white px-4 py-2.5 text-sm font-medium text-surface-700 transition-all hover:border-surface-300 hover:bg-surface-50 dark:border-surface-700 dark:bg-surface-800 dark:text-surface-300 dark:hover:border-surface-600 dark:hover:bg-surface-700"
              >
                <Github className="h-4 w-4" />
                {tProj("viewCode")}
              </a>
            )}
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-primary-700"
              >
                <Globe className="h-4 w-4" />
                {tProj("viewWebsite")}
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-accent-700"
              >
                <ExternalLink className="h-4 w-4" />
                {tProj("viewDemo")}
              </a>
            )}
            {project.report && (
              <a
                href={project.report}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-amber-700"
              >
                <FileText className="h-4 w-4" />
                {tProj("viewReport")}
              </a>
            )}
          </div>
        </motion.div>

        {/* Tech Stack */}
        {translatedDetails && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10"
          >
            <h2 className="mb-5 text-xl font-bold text-surface-900 dark:text-white">
              {tProj("techStack")}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {translatedDetails.techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 rounded-xl border border-surface-200 bg-white p-4 dark:border-surface-800 dark:bg-surface-900"
                >
                  <TechIcon name={tech.name} size={28} />
                  <div>
                    <p className="text-sm font-semibold text-surface-900 dark:text-white">
                      {tech.name}
                    </p>
                    <p className="text-xs text-surface-500 dark:text-surface-400">
                      {tech.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Architecture */}
        {translatedDetails?.architecture && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10"
          >
            <h2 className="mb-4 text-xl font-bold text-surface-900 dark:text-white">
              {tProj("architecture")}
            </h2>
            <div className="rounded-xl border border-surface-200 bg-surface-50 p-5 dark:border-surface-800 dark:bg-surface-900">
              <p className="text-sm leading-relaxed text-surface-700 dark:text-surface-300">
                {translatedDetails.architecture}
              </p>
            </div>
          </motion.section>
        )}

        {/* Features */}
        {translatedDetails?.features && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-10"
          >
            <h2 className="mb-4 text-xl font-bold text-surface-900 dark:text-white">
              {tProj("features")}
            </h2>
            <ul className="space-y-2">
              {translatedDetails.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-surface-700 dark:text-surface-300"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.section>
        )}
      </div>
    </main>
  );
}
