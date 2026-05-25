"use client";

import { useCallback, useEffect, useState } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("");

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.scrollY + 100;

    sections.forEach((section) => {
      const el = section as HTMLElement;
      const sectionTop = el.offsetTop;
      const sectionHeight = el.offsetHeight;
      const sectionId = el.getAttribute("id") || "";

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        setActiveSection(sectionId);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return activeSection;
}
