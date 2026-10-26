import { projects, publications } from "@/data/profile";
import { researchDemos, researchFigures, type ResearchDemo } from "@/data/research-figures";
import touchpadFigure from "@/assets/research/figure_touchpadanywear-2.png.asset.json";
import etextileHiRes from "@/assets/research/figure_3D_textile_new_1.webp.asset.json";
import handwritingHiRes from "@/assets/research/figure_Hand_writing_perovskite.png.asset.json";
import ledsHiRes from "@/assets/research/figure_Printed_perovskite_LEDs.png.asset.json";
import touchpad4Hi from "@/assets/research/touchpad-4-hi.mp4.asset.json";
import touchpad4HiWebm from "@/assets/research/touchpad-4-hi.webm.asset.json";
import touchpad4HiPoster from "@/assets/research/touchpad-4-hi-poster.jpg.asset.json";
import touchpad5Hi from "@/assets/research/touchpad-5-hi.mp4.asset.json";
import touchpad5HiWebm from "@/assets/research/touchpad-5-hi.webm.asset.json";
import touchpad5HiPoster from "@/assets/research/touchpad-5-hi-poster.jpg.asset.json";
import touchpad6Hi from "@/assets/research/touchpad-6-hi.mp4.asset.json";
import touchpad6HiWebm from "@/assets/research/touchpad-6-hi.webm.asset.json";
import touchpad6HiPoster from "@/assets/research/touchpad-6-hi-poster.jpg.asset.json";

const canonicalPaper = (url: string) => url.replace("/doi/abs/", "/doi/").replace(/\/$/, "");

// Higher-resolution media uploaded by the user, shown only in the Home slideshow.
const highlightFigureOverrides: Record<string, { url: string; width: number; height: number }> = {
  "https://junyi-zhao.github.io/research/touchpadanywear/": { url: touchpadFigure.url, width: 1920, height: 683 },
  "https://junyi-zhao.github.io/research/3d-etextile/": { url: etextileHiRes.url, width: 1920, height: 1589 },
  "https://junyi-zhao.github.io/research/handwriting-perovskite/": { url: handwritingHiRes.url, width: 1910, height: 1298 },
  "https://junyi-zhao.github.io/research/perovskite-leds/": { url: ledsHiRes.url, width: 1920, height: 769 },
};

const touchpadHiResDemos: ResearchDemo[] = [
  { url: touchpad4Hi.url, webm: touchpad4HiWebm.url, poster: touchpad4HiPoster.url, width: 800, height: 450 },
  { url: touchpad5Hi.url, webm: touchpad5HiWebm.url, poster: touchpad5HiPoster.url, width: 800, height: 450 },
  { url: touchpad6Hi.url, webm: touchpad6HiWebm.url, poster: touchpad6HiPoster.url, width: 800, height: 450 },
];

const touchpadProjectUrl = "https://junyi-zhao.github.io/research/touchpadanywear/";

// Keep the first three clips as-is and swap the last three for the higher-quality re-encodes.
const highlightDemoOverrides: Record<string, ResearchDemo[]> = {
  [touchpadProjectUrl]: [...(researchDemos[touchpadProjectUrl] ?? []).slice(0, 3), ...touchpadHiResDemos],
};

// Reuse paper records and project-keyed media rather than duplicating academic facts.
// The Home slideshow shows only the first four projects; the Research page keeps all eight.
export const researchHighlights = projects.slice(0, 4).flatMap(project => {
  const publication = publications.find(p => p.links.some(link => canonicalPaper(link.href) === canonicalPaper(project.paper)));
  const figure = highlightFigureOverrides[project.href] ?? researchFigures[project.href];
  if (!publication || !figure) return [];
  return [{ ...project, publication, figure, demos: highlightDemoOverrides[project.href] ?? researchDemos[project.href] ?? [] }];
});

export function nextHighlight(index: number, direction: number, count: number) {
  return count > 0 ? ((index + direction) % count + count) % count : 0;
}
