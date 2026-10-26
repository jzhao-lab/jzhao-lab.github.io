import { createFileRoute } from "@tanstack/react-router";
import { AllNewsSection } from "@/components/site/AcademicSections";
import { PageHeading } from "@/components/site/PageHeading";
import { academicHead } from "@/lib/page-head";

export const Route = createFileRoute("/news")({
  head: () => academicHead("News & Media", "Junyi Zhao’s news and media coverage: Research highlights, interviews, and science reporting.", "/news"),
  component: NewsPage,
});

function NewsPage() {
  return <main className="min-h-screen"><PageHeading title="News & Media" subtitle="Research in the news." /><AllNewsSection /></main>;
}