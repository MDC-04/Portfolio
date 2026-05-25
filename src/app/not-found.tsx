import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFoundPage");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-6xl font-bold text-surface-900 dark:text-white">404</h1>
      <p className="mb-8 text-lg text-surface-500 dark:text-surface-400">
        {t("title")}
      </p>
      <Link
        href="/"
        className="rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
      >
        {t("goHome")}
      </Link>
    </div>
  );
}
