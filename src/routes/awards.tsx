import { createFileRoute } from "@tanstack/react-router";
import { AwardsSection } from "@/components/site/AcademicSections";
import { PageHeading } from "@/components/site/PageHeading";
import { academicHead } from "@/lib/page-head";

export const Route = createFileRoute("/awards")({
  head: () => academicHead("Awards", "Junyi Zhao’s awards: Honors and recognition across research and academic work.", "/awards"),
  component: AwardsPage,
});

function AwardsPage() {
  return <main className="min-h-screen"><PageHeading title="Awards" subtitle="Honors and recognition across research and academic work." /><AwardsSection /></main>;
}
