"use client";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-14 text-center">
      <h2 className="section-title bg-gradient-to-r from-surface-900 via-primary-700 to-primary-500 bg-clip-text text-transparent dark:from-surface-100 dark:via-primary-400 dark:to-primary-300">
        {title}
      </h2>
      <p className="section-subtitle">{subtitle}</p>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary-500 to-primary-400" />
    </div>
  );
}
