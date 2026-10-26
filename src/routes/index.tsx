import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { AboutSection, NewsSection, ResearchInterestsSection, ResumeSection } from "@/components/site/AcademicSections";
import { ResearchHighlight } from "@/components/site/ResearchHighlight";
import { VisitorMap } from "@/components/site/VisitorMap";
import { academicHead } from "@/lib/page-head";

export const Route = createFileRoute("/")({
  head: () => academicHead("Junyi Zhao — Soft Electronics Researcher, Stanford University", "Meet Junyi Zhao, Postdoctoral Scholar in Chemical Engineering at Stanford University. Biography and news in human-centered soft electronics.", "/"),
  component: HomePage,
});

function HomePage() {
  return <main><Hero /><AboutSection /><ResumeSection /><ResearchInterestsSection /><ResearchHighlight /><NewsSection /><VisitorMap /></main>;
}
