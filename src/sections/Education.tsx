"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionHeader } from "@/components/SectionHeader";
import { EducationContent } from "@/components/EducationContent";

export function Education() {
  const tEdu = useTranslations("education");

  return (
    <SectionWrapper id="education">
      <div className="section-container">
        <SectionHeader title={tEdu("title")} subtitle={tEdu("subtitle")} />
        <EducationContent />
      </div>
    </SectionWrapper>
  );
}
