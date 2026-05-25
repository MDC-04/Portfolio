import { Locale } from "@/types";

export const locales: Locale[] = ["fr", "en", "es", "ar"];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  es: "Español",
  ar: "العربية",
};

export const localeFlags: Record<Locale, string> = {
  fr: "/flags/fr.svg",
  en: "/flags/gb.svg",
  es: "/flags/es.svg",
  ar: "/flags/ma.svg",
};
