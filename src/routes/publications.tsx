import { createFileRoute } from "@tanstack/react-router";
import { PublicationsSection } from "@/components/site/AcademicSections";
import { PageHeading } from "@/components/site/PageHeading";
import { academicHead } from "@/lib/page-head";

export const Route = createFileRoute("/publications")({
  head: () => academicHead("Publications", "Junyi Zhao’s publications: Journal articles, conference papers, and patents.", "/publications"),
  component: PublicationsPage,
});

function PublicationsPage() {
  return <main className="min-h-screen"><PageHeading title="Publications" subtitle="Journal articles, conference papers, and patents." /><PublicationsSection /></main>;
}
