"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ArrowUpRight, Copy, Check, Instagram, Facebook } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeader } from "@/components/SectionHeader";
import { XIcon } from "@/components/icons/XIcon";
import { contactInfo } from "@/data/social";

export function Contact() {
  const t = useTranslations("contact");
  const [copiedField, setCopiedField] = useState<"email" | "phone" | null>(null);
  const contactMailTo = `mailto:${contactInfo.email}?subject=${encodeURIComponent(t("cta.mailSubject"))}`;

  const handleCopy = async (value: string, field: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      window.setTimeout(() => setCopiedField((current) => (current === field ? null : current)), 2000);
    } catch {
      setCopiedField(null);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="section-container">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        <p className="mx-auto mb-12 max-w-2xl text-center text-surface-500 dark:text-surface-400">
          {t("description")}
        </p>

        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-5">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="rounded-2xl border border-surface-200 bg-white p-6 dark:border-surface-800 dark:bg-surface-900">
              <h3 className="mb-5 text-lg font-semibold text-surface-900 dark:text-white">
                {t("info.social")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex min-w-0 items-center gap-3 text-surface-600 transition-colors hover:text-primary-600 dark:text-surface-400 dark:hover:text-primary-400"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-500/10">
                      <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-surface-400">{t("info.email")}</p>
                      <p className="truncate text-sm font-medium">{contactInfo.email}</p>
                    </div>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(contactInfo.email, "email")}
                    className="inline-flex h-10 w-10 cursor-pointer flex-shrink-0 items-center justify-center rounded-xl border border-surface-200 text-surface-600 transition-all hover:border-surface-300 hover:text-surface-900 dark:border-surface-700 dark:text-surface-300 dark:hover:border-surface-600 dark:hover:text-white"
                    aria-label={t("info.copyEmail")}
                    title={copiedField === "email" ? t("info.copied") : t("info.copyEmail")}
                  >
                    {copiedField === "email" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3 text-surface-600 dark:text-surface-400">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-500/10">
                      <Phone className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-surface-400">{t("info.phone")}</p>
                      <p className="truncate text-sm font-medium">{contactInfo.phone}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(contactInfo.phone, "phone")}
                    className="inline-flex h-10 w-10 cursor-pointer flex-shrink-0 items-center justify-center rounded-xl border border-surface-200 text-surface-600 transition-all hover:border-surface-300 hover:text-surface-900 dark:border-surface-700 dark:text-surface-300 dark:hover:border-surface-600 dark:hover:text-white"
                    aria-label={t("info.copyPhone")}
                    title={copiedField === "phone" ? t("info.copied") : t("info.copyPhone")}
                  >
                    {copiedField === "phone" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                <div className="flex items-center gap-3 text-surface-600 dark:text-surface-400">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-500/10">
                    <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-xs text-surface-400">{t("info.location")}</p>
                    <p className="text-sm font-medium">{contactInfo.address}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-surface-200 text-surface-600 transition-all hover:border-surface-300 hover:text-surface-900 dark:border-surface-700 dark:text-surface-400 dark:hover:border-surface-600 dark:hover:text-white"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-surface-200 text-surface-600 transition-all hover:border-surface-300 hover:text-surface-900 dark:border-surface-700 dark:text-surface-400 dark:hover:border-surface-600 dark:hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-surface-200 text-surface-600 transition-all hover:border-surface-300 hover:text-surface-900 dark:border-surface-700 dark:text-surface-400 dark:hover:border-surface-600 dark:hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={contactInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-surface-200 text-surface-600 transition-all hover:border-surface-300 hover:text-surface-900 dark:border-surface-700 dark:text-surface-400 dark:hover:border-surface-600 dark:hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={contactInfo.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-surface-200 text-surface-600 transition-all hover:border-surface-300 hover:text-surface-900 dark:border-surface-700 dark:text-surface-400 dark:hover:border-surface-600 dark:hover:text-white"
                  aria-label="X"
                >
                  <XIcon className="h-4.5 w-4.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-primary-200/60 bg-gradient-to-br from-white via-primary-50/50 to-surface-50 p-6 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.22)] dark:border-primary-500/20 dark:from-surface-950 dark:via-surface-900 dark:to-primary-950/20 sm:p-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_26%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_26%)]" />
              <div className="relative flex h-full flex-col justify-between gap-8">
                <div>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-500/20">
                    <Send className="h-6 w-6" />
                  </div>
                  <h3 className="max-w-xl text-2xl font-semibold tracking-tight text-surface-950 dark:text-white sm:text-3xl">
                    {t("cta.title")}
                  </h3>
                  <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-primary-500 via-primary-400 to-transparent" />
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-surface-600 dark:text-surface-300 sm:text-base">
                    {t("cta.description")}
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="rounded-2xl border border-primary-200/70 bg-white/80 px-4 py-3 text-sm text-surface-700 shadow-sm backdrop-blur dark:border-surface-700 dark:bg-surface-900/80 dark:text-surface-200">
                    {contactInfo.email}
                  </div>
                  <a
                    href={contactMailTo}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-primary-200/70 bg-white/90 px-6 py-3 text-sm font-semibold text-surface-800 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary-300 hover:bg-primary-50/60 dark:border-surface-700 dark:bg-surface-900/90 dark:text-surface-100 dark:hover:border-primary-500/30 dark:hover:bg-surface-900"
                  >
                    {t("cta.button")}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
