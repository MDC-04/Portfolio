"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, Instagram, Facebook } from "lucide-react";
import { XIcon } from "@/components/icons/XIcon";
import { contactInfo } from "@/data/social";

export function Footer() {
  const t = useTranslations();
  const tFooter = useTranslations("footer");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-surface-200 bg-surface-50 dark:border-surface-800 dark:bg-surface-900/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Brand */}
          <div>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              className="inline-flex items-baseline text-2xl font-extrabold tracking-[-0.045em] text-surface-900 dark:text-white"
            >
              <span>MDC</span>
              <span className="ml-0.5 text-primary-500">.</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-surface-500 dark:text-surface-400">
              Mohamed Dyae Chellaf — {tFooter("tagline")}
            </p>
          </div>

          {/* Social */}
          <div className="md:ml-auto md:text-right">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-surface-900 dark:text-white">
              {t("contact.title")}
            </h3>
            <div className="flex gap-3 md:justify-end">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-200 text-surface-500 transition-all hover:border-surface-300 hover:text-surface-900 dark:border-surface-700 dark:text-surface-400 dark:hover:border-surface-600 dark:hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-200 text-surface-500 transition-all hover:border-surface-300 hover:text-surface-900 dark:border-surface-700 dark:text-surface-400 dark:hover:border-surface-600 dark:hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-200 text-surface-500 transition-all hover:border-surface-300 hover:text-surface-900 dark:border-surface-700 dark:text-surface-400 dark:hover:border-surface-600 dark:hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-200 text-surface-500 transition-all hover:border-surface-300 hover:text-surface-900 dark:border-surface-700 dark:text-surface-400 dark:hover:border-surface-600 dark:hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={contactInfo.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-200 text-surface-500 transition-all hover:border-surface-300 hover:text-surface-900 dark:border-surface-700 dark:text-surface-400 dark:hover:border-surface-600 dark:hover:text-white"
                aria-label="X"
              >
                <XIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-200 text-surface-500 transition-all hover:border-surface-300 hover:text-surface-900 dark:border-surface-700 dark:text-surface-400 dark:hover:border-surface-600 dark:hover:text-white"
                aria-label={t("contact.info.email")}
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="fixed bottom-6 right-6 z-40 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primary-600 text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-700 hover:shadow-xl"
        aria-label={tFooter("backToTop")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
}
