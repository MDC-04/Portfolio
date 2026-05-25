"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { locales, localeNames, localeFlags } from "@/i18n/config";
import { setUserLocale } from "@/i18n/locale";
import { Locale } from "@/types";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const t = useTranslations();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocaleChange = async (locale: Locale) => {
    await setUserLocale(locale);
    setIsOpen(false);
    router.refresh();
  };
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-surface-200 bg-white/80 backdrop-blur-sm transition-all hover:border-primary-300 hover:bg-primary-50 hover:shadow-sm dark:border-surface-700 dark:bg-surface-800/80 dark:hover:border-primary-500/50 dark:hover:bg-surface-700"
        aria-label={t("aria.changeLanguage")}
      >
        <Globe className="h-4 w-4 text-surface-600 dark:text-surface-400" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full z-50 mt-2 min-w-[140px] overflow-hidden rounded-xl border border-surface-200 bg-white/90 py-1 shadow-lg backdrop-blur-xl dark:border-surface-700 dark:bg-surface-800/90"
          >
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLocaleChange(locale)}
                className="flex w-full cursor-pointer items-center gap-2.5 px-3 py-2 text-sm transition-colors hover:bg-surface-100 dark:hover:bg-surface-700"
              >
                <span className="text-base">
                  <Image
                    src={localeFlags[locale]}
                    alt={localeNames[locale]}
                    width={20}
                    height={20}
                    className="h-5 w-5 rounded-sm object-cover"
                  />
                </span>
                <span className="text-surface-700 dark:text-surface-300">
                  {localeNames[locale]}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
