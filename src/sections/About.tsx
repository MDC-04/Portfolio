"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Code2, Lightbulb, Users, BookOpen, ChevronDown, ChevronUp, GraduationCap } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeader } from "@/components/SectionHeader";
import { EducationContent } from "@/components/EducationContent";

const values = [
  { icon: Code2, key: "quality" },
  { icon: Lightbulb, key: "innovation" },
  { icon: Users, key: "collaboration" },
  { icon: BookOpen, key: "learning" },
];

export function About() {
  const t = useTranslations("about");
  const [showEducation, setShowEducation] = useState(false);

  return (
    <SectionWrapper id="about">
      <div className="section-container">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg leading-relaxed text-surface-600 dark:text-surface-300"
            >
              {t("p1")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed text-surface-600 dark:text-surface-300"
            >
              {t("p2")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg leading-relaxed text-surface-600 dark:text-surface-300"
            >
              {t("p3")}
            </motion.p>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold text-surface-900 dark:text-white">
              {t("values.title")}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value, index) => (
                <motion.div
                  key={value.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="group rounded-2xl border border-surface-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg dark:border-surface-800 dark:bg-surface-900 dark:hover:border-primary-500/30"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100 dark:bg-primary-500/10 dark:text-primary-400">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mb-1 font-semibold text-surface-900 dark:text-white">
                    {t(`values.${value.key}`)}
                  </h4>
                  <p className="text-sm text-surface-500 dark:text-surface-400">
                    {t(`values.${value.key}Desc`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-primary-200/60 bg-gradient-to-br from-white via-primary-50/50 to-surface-50 p-6 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.22)] dark:border-primary-500/20 dark:from-surface-950 dark:via-surface-900 dark:to-primary-950/20 sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_26%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_26%)]" />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-500/20">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-surface-950 dark:text-white sm:text-3xl">
                  {t("educationTitle")}
                </h3>
                <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-primary-500 via-primary-400 to-transparent" />
              </div>
            </div>
            <button
              onClick={() => setShowEducation(!showEducation)}
              className="inline-flex cursor-pointer items-center justify-center gap-2 self-start rounded-2xl border border-primary-200/70 bg-white/90 px-5 py-3 text-sm font-semibold text-surface-800 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary-300 hover:bg-primary-50/60 dark:border-surface-700 dark:bg-surface-900/90 dark:text-surface-100 dark:hover:border-primary-500/30 dark:hover:bg-surface-900 sm:self-auto"
            >
              {showEducation ? t("hideEducation") : t("seeEducation")}
              {showEducation ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>

          {showEducation && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6"
            >
              <EducationContent />
            </motion.div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
