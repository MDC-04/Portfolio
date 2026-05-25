"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeader } from "@/components/SectionHeader";
import { skills } from "@/data/skills";
import { SkillCategory } from "@/types";

const VISIBLE_COUNT = 10;

function SkillIcon({ name, icon, darkIcon }: { name: string; icon: string; darkIcon?: string }) {
  const { resolvedTheme } = useTheme();
  const [failed, setFailed] = useState(false);
  const src = resolvedTheme === "dark" && darkIcon ? darkIcon : icon;

  return (
    <div className="mb-3 flex h-12 w-12 mx-auto items-center justify-center rounded-xl bg-surface-50 dark:bg-surface-800">
      {!failed ? (
        <Image
          key={src}
          src={src}
          alt={name}
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
          unoptimized
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="flex h-8 w-8 items-center justify-center text-2xl font-bold text-primary-600 dark:text-primary-400">
          {name.charAt(0)}
        </span>
      )}
    </div>
  );
}

const categories: SkillCategory[] = [
  "frontend",
  "backend",
  "databases",
  "languages",
  "cloud",
  "devops",
  "tools",
  "testing",
  "ai",
];

export function Skills() {
  const t = useTranslations("skills");
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("frontend");
  const [showAll, setShowAll] = useState(false);

  const filteredSkills = skills.filter((s) => s.category === activeCategory);

  const hasMore = filteredSkills.length > VISIBLE_COUNT;
  const visibleSkills = showAll ? filteredSkills : filteredSkills.slice(0, VISIBLE_COUNT);

  const handleCategoryChange = (cat: SkillCategory) => {
    setActiveCategory(cat);
    setShowAll(false);
  };

  return (
    <SectionWrapper id="skills">
      <div className="section-container">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        {/* Category filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary-600 text-white shadow-md shadow-primary-500/25"
                  : "bg-surface-100 text-surface-600 hover:bg-surface-200 dark:bg-surface-800 dark:text-surface-400 dark:hover:bg-surface-700"
              }`}
            >
              {t(`categories.${cat}`)}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div layout className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <AnimatePresence mode="popLayout">
            {visibleSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl border border-surface-200 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg dark:border-surface-800 dark:bg-surface-900 dark:hover:border-primary-500/30"
              >
                <SkillIcon name={skill.name} icon={skill.icon} darkIcon={skill.darkIcon} />
                <h3 className="text-sm font-semibold text-surface-900 dark:text-white">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* See all / Show less button */}
        {hasMore && (
          <motion.div layout className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-surface-300 bg-white px-5 py-2.5 text-sm font-medium text-surface-600 shadow-sm transition-all hover:border-surface-400 hover:bg-surface-50 dark:border-surface-700 dark:bg-surface-800 dark:text-surface-400 dark:hover:border-surface-600 dark:hover:bg-surface-700"
            >
              {showAll ? (
                <>
                  {t("showLess")} <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  {t("seeAll")} ({filteredSkills.length - VISIBLE_COUNT}+) <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  );
}
