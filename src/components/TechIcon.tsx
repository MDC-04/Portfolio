"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { techIcons, techIconsDark } from "@/data/techIcons";

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

/**
 * Renders a tech icon by name, resolved from techIcons map.
 * Falls back to the first letter if the icon file is missing.
 *
 * Usage:
 *   <TechIcon name="React" />
 *   <TechIcon name="Docker" size={24} />
 */
export function TechIcon({ name, size = 20, className = "" }: TechIconProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const iconPath = mounted && resolvedTheme === "dark" && techIconsDark[name]
    ? techIconsDark[name]
    : techIcons[name];
  const [failed, setFailed] = useState(!iconPath);

  if (failed) {
    return (
      <span
        className={`inline-flex items-center justify-center rounded bg-surface-100 text-xs font-semibold text-surface-500 dark:bg-surface-800 dark:text-surface-400 ${className}`}
        style={{ width: size, height: size, fontSize: size * 0.5 }}
      >
        {name.charAt(0)}
      </span>
    );
  }

  return (
    <Image
      src={iconPath}
      alt={name}
      width={size}
      height={size}
      className={`object-contain ${className}`}
      unoptimized
      onError={() => setFailed(true)}
      onLoad={() => setFailed(false)}
    />
  );
}
