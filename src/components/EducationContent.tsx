"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { education } from "@/data/education";

export function EducationContent() {
  const t = useTranslations();
  const { resolvedTheme } = useTheme();
  const resolveText = (value: string) => (value.startsWith("education.") ? t(value) : value);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {education.map((edu, index) => (
        <motion.div
          key={edu.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="group rounded-2xl border border-surface-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-surface-800 dark:bg-surface-900 sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-surface-200 bg-white p-2.5 dark:border-surface-700 dark:bg-surface-800">
              {edu.logo ? (
                <Image
                  src={resolvedTheme === "dark" && edu.darkLogo ? edu.darkLogo : edu.logo}
                  alt={edu.school}
                  width={80}
                  height={80}
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="text-xl font-bold text-primary-600 dark:text-primary-400">{edu.school.charAt(0)}</span>
              )}
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-bold text-surface-900 dark:text-white">
                {edu.school}
              </h3>
              <p className="mt-1 font-medium text-primary-600 dark:text-primary-400">
                {resolveText(edu.degree)}
              </p>
              <div className="mt-2 flex flex-col gap-1.5 text-sm sm:flex-row sm:items-center sm:gap-4">
                <span className="inline-flex items-center gap-1.5 text-surface-500 dark:text-surface-400">
                  <Calendar className="h-3.5 w-3.5" />
                  {resolveText(edu.startDate)} — {resolveText(edu.endDate)}
                </span>
                <span className="inline-flex items-center gap-1.5 text-surface-500 dark:text-surface-400">
                  <MapPin className="h-3.5 w-3.5" />
                  <Image
                    src={`/flags/${edu.countryCode}.svg`}
                    alt={t(edu.location)}
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px] rounded-full object-cover"
                  />
                  {t(edu.location)}
                </span>
              </div>
              {edu.highlight && (
                <p className="mt-3 text-sm font-medium text-surface-700 dark:text-surface-200">
                  {resolveText(edu.highlight)}
                </p>
              )}
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-surface-600 dark:text-surface-300">
                {edu.descriptionKeys.map((descriptionKey) => (
                  <li key={descriptionKey} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                    <span>{t(descriptionKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
