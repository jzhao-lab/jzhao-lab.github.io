import { createFileRoute } from "@tanstack/react-router";
import { ActivitiesSection } from "@/components/site/AcademicSections";
import { PageHeading } from "@/components/site/PageHeading";
import { academicHead } from "@/lib/page-head";

export const Route = createFileRoute("/activities")({
  head: () => academicHead("Activities", "Junyi Zhao’s outreach activities: BrightPath STEAM Academy summer camps and STEM mentorship during Praxis Week.", "/activities"),
  component: ActivitiesPage,
});

function ActivitiesPage() {
  return <main className="min-h-screen"><PageHeading title="Activities" subtitle="Community outreach and STEM mentorship." /><ActivitiesSection /></main>;
}
