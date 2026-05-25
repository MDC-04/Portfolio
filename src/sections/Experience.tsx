"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase } from "lucide-react";
import Image from "next/image";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeader } from "@/components/SectionHeader";
import { TechIcon } from "@/components/TechIcon";
import { experiences } from "@/data/experiences";

function formatDate(dateStr: string, t: ReturnType<typeof useTranslations>): string {
  if (dateStr.startsWith("experiences.")) {
    return t(dateStr) as string;
  }
  const [year, month] = dateStr.split("-");
  return `${t(`common.months.${month}`)} ${year}`;
}

export function Experience() {
  const t = useTranslations();
  const tExp = useTranslations("experience");

  return (
    <SectionWrapper id="experience">
      <div className="section-container">
        <SectionHeader title={tExp("title")} subtitle={tExp("subtitle")} />

        <div className="relative mx-auto max-w-3xl pl-8 sm:pl-10">
          {/* Timeline line — passes through center of dots */}
          <div className="pointer-events-none absolute bottom-0 left-[16px] top-0 z-0 w-0.5 bg-primary-300 dark:bg-primary-500/50 sm:left-[20px]" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 mb-10"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[21px] top-7 z-20 h-3 w-3 rounded-full border-2 border-primary-500 bg-white dark:bg-surface-950 sm:-left-[25px]" />

              <div className="group rounded-2xl border border-surface-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-surface-800 dark:bg-surface-900">
                {/* Header with logo */}
                <div className="mb-4">
                  <div className="mb-3 flex items-start gap-4">
                    {/* Company logo */}
                    {exp.logo && (
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={48}
                        height={48}
                        className="h-12 w-12 flex-shrink-0 rounded-xl object-contain"
                      />
                    )}
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-primary-500" />
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="transition-colors hover:text-primary-700 hover:underline dark:hover:text-primary-300"
                            >
                              {exp.company}
                            </a>
                          ) : (
                            exp.company
                          )} {"·"} {t(exp.type)}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-surface-900 dark:text-white">
                        {t(exp.position)}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 text-sm sm:flex-row sm:items-center sm:gap-4">
                    <span className="inline-flex items-center gap-1.5 text-surface-600 dark:text-surface-300">
                      <Calendar className="h-4 w-4 text-primary-500" />
                      {formatDate(exp.startDate, t)} — {formatDate(exp.endDate, t)}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-medium text-surface-700 dark:text-surface-200">
                      <MapPin className="h-4 w-4 text-primary-500" />
                      <Image
                        src={`/flags/${exp.countryCode}.svg`}
                        alt={t(exp.location)}
                        width={18}
                        height={18}
                        className="h-[18px] w-[18px] rounded-full object-cover"
                      />
                      {t(exp.location)}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2">
                  {exp.descriptionKeys.map((key, i) => (
                    <li key={i} className="flex gap-2 text-sm text-surface-600 dark:text-surface-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-400" />
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>

                {exp.technologies.length > 0 && (
                  <div className="mt-5 border-t border-surface-100 pt-4 dark:border-surface-800">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-2 rounded-full bg-surface-50 px-3 py-1.5 text-xs font-medium text-surface-700 dark:bg-surface-800 dark:text-surface-200"
                        >
                          <TechIcon name={tech} size={16} />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
