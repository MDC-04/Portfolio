"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowDown, Download, Send, FolderOpen } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary-500/10 blur-3xl dark:bg-primary-500/5" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-primary-400/10 blur-3xl dark:bg-primary-400/5" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-500/8 blur-3xl dark:bg-accent-500/3" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="section-container relative z-10 text-center">
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-6 h-44 w-44 overflow-hidden rounded-full border-4 border-primary-500/20 shadow-xl shadow-primary-500/10 sm:h-52 sm:w-52"
        >
          <Image
            src="/images/profile.jpeg"
            alt="Mohamed Dyae Chellaf"
            width={208}
            height={208}
            className="h-full w-full object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-500/20 dark:bg-primary-500/10 dark:text-primary-400">
            {t("greeting")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="bg-gradient-to-r from-surface-900 via-surface-700 to-surface-900 bg-clip-text text-transparent dark:from-white dark:via-surface-200 dark:to-white">
            {t("name")}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
            {t("title")}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-surface-500 dark:text-surface-400"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-500/30"
          >
            <FolderOpen className="h-4 w-4" />
            {t("cta.projects")}
          </a>

          <a
            href="/cv.pdf"
            download="Mohamed-Dyae-Chellaf-CV.pdf"
            className="group inline-flex cursor-pointer items-center gap-2 rounded-xl border border-surface-300 bg-white px-6 py-3 text-sm font-semibold text-surface-700 shadow-sm transition-all hover:border-surface-400 hover:bg-surface-50 dark:border-surface-700 dark:bg-surface-800 dark:text-surface-300 dark:hover:border-surface-600 dark:hover:bg-surface-700"
          >
            <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            {t("cta.cv")}
          </a>

          <a
            href="#contact"
            className="group inline-flex cursor-pointer items-center gap-2 rounded-xl border border-surface-300 bg-white px-6 py-3 text-sm font-semibold text-surface-700 shadow-sm transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 dark:border-surface-700 dark:bg-surface-800 dark:text-surface-300 dark:hover:border-primary-500/30 dark:hover:bg-primary-500/10 dark:hover:text-primary-400"
          >
            <Send className="h-4 w-4" />
            {t("cta.contact")}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          href="#projects"
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-surface-400 transition-colors hover:text-surface-600 dark:hover:text-surface-200">{t("cta.projects")}</span>
            <ArrowDown className="h-4 w-4 text-surface-400 transition-colors hover:text-surface-600 dark:hover:text-surface-200" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
