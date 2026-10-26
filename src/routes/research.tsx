import { createFileRoute } from "@tanstack/react-router";
import { ResearchSection } from "@/components/site/AcademicSections";
import { PageHeading } from "@/components/site/PageHeading";
import { academicHead } from "@/lib/page-head";

export const Route = createFileRoute("/research")({
  head: () => academicHead("Research", "Junyi Zhao’s research: Human-centered soft electronics for sensing, perception, and feedback.", "/research"),
  component: ResearchPage,
});

function ResearchPage() {
  return <main className="min-h-screen"><PageHeading title="Research" subtitle="Human-centered soft electronics for sensing, perception, and feedback." /><ResearchSection /></main>;
}
