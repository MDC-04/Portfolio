"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, ExternalLink, FileText, Github, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";

const VISIBLE_COUNT = 6;

function ProjectCover({ image, title }: { image: string; title: string }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="relative h-48 overflow-hidden">
      {!imageFailed ? (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-500/20 via-primary-400/10 to-accent-500/20 dark:from-primary-500/10 dark:via-primary-400/5 dark:to-accent-500/10">
          <span className="text-4xl font-bold text-primary-500/30 dark:text-primary-400/20">
            {title.charAt(0)}
          </span>
        </div>
      )}
    </div>
  );
}

export function Projects() {
  const t = useTranslations();
  const tProj = useTranslations("projects");
  const tSkills = useTranslations("skills");
  const [showAll, setShowAll] = useState(false);

  const hasMore = projects.length > VISIBLE_COUNT;
  const visibleProjects = showAll ? projects : projects.slice(0, VISIBLE_COUNT);

  return (
    <SectionWrapper id="projects">
      <div className="section-container">
        <SectionHeader title={tProj("title")} subtitle={tProj("subtitle")} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={project.details ? `/projects/${project.id}` : "#"}
                prefetch={true}
                className="group relative block overflow-hidden rounded-2xl border border-surface-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-surface-800 dark:bg-surface-900"
              >
                {/* Project image */}
                <ProjectCover image={project.image} title={t(project.titleKey)} />

                {/* Content */}
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-bold text-surface-900 dark:text-white">
                    {t(project.titleKey)}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-surface-500 dark:text-surface-400">
                    {t(project.descriptionKey)}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-primary-50 px-2 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-500/10 dark:text-primary-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="mt-4 flex gap-3" onClick={(e) => e.preventDefault()}>
                    {project.github && (
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); e.preventDefault(); window.open(project.github, "_blank", "noopener,noreferrer"); }}
                        className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-surface-600 transition-colors hover:text-primary-600 dark:text-surface-400 dark:hover:text-primary-400"
                      >
                        <Github className="h-4 w-4" />
                        {tProj("viewCode")}
                      </button>
                    )}
                    {project.website && (
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); e.preventDefault(); window.open(project.website, "_blank", "noopener,noreferrer"); }}
                        className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      >
                        <Globe className="h-4 w-4" />
                        {tProj("viewWebsite")}
                      </button>
                    )}
                    {project.demo && (
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); e.preventDefault(); window.open(project.demo, "_blank", "noopener,noreferrer"); }}
                        className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {tProj("viewDemo")}
                      </button>
                    )}
                    {project.report && (
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); e.preventDefault(); window.open(project.report, "_blank", "noopener,noreferrer"); }}
                        className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-amber-600 transition-colors hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
                      >
                        <FileText className="h-4 w-4" />
                        {tProj("viewReport")}
                      </button>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-surface-300 bg-white px-5 py-2.5 text-sm font-medium text-surface-600 shadow-sm transition-all hover:border-surface-400 hover:bg-surface-50 dark:border-surface-700 dark:bg-surface-800 dark:text-surface-400 dark:hover:border-surface-600 dark:hover:bg-surface-700"
            >
              {showAll ? (
                <>
                  {tSkills("showLess")} <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  {tSkills("seeAll")} ({projects.length - VISIBLE_COUNT}+) <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
