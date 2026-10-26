import etextile from "@/assets/research/figure_3D_textile_new.png.asset.json";
import touchpad from "@/assets/research/figure_touchpadanywear-3.png.asset.json";
import handwriting from "@/assets/research/figure_Hand_writing_perovskite.webp.asset.json";
import leds from "@/assets/research/figure_Printed_perovskite_LEDs.webp.asset.json";
import sponge from "@/assets/research/figure_Soft_Sponge.webp.asset.json";
import electrodes from "@/assets/research/figure_stretchable_sponge.webp.asset.json";
import transistor from "@/assets/research/figure_Synaptic_transistors.webp.asset.json";
import memory from "@/assets/research/figure_Multimodal_artificial.webp.asset.json";
import touchpadDemo from "@/assets/research/touchpad-demo.mp4.asset.json";
import touchpadPoster from "@/assets/research/touchpad-poster.jpg.asset.json";
import touchpadDemoWebm from "@/assets/research/touchpad-demo.webm.asset.json";
import touchpadDemo2 from "@/assets/research/touchpad-2.mp4.asset.json";
import touchpadPoster2 from "@/assets/research/touchpad-2-poster.jpg.asset.json";
import touchpadDemo3 from "@/assets/research/touchpad-3.mp4.asset.json";
import touchpadPoster3 from "@/assets/research/touchpad-3-poster.jpg.asset.json";
import touchpadDemo4 from "@/assets/research/touchpad-4.mp4.asset.json";
import touchpadPoster4 from "@/assets/research/touchpad-4-poster.jpg.asset.json";
import touchpadDemo5 from "@/assets/research/touchpad-5.mp4.asset.json";
import touchpadPoster5 from "@/assets/research/touchpad-5-poster.jpg.asset.json";
import touchpadDemo6 from "@/assets/research/touchpad-6.mp4.asset.json";
import touchpadPoster6 from "@/assets/research/touchpad-6-poster.jpg.asset.json";
import touchpadWebm2 from "@/assets/research/touchpad-2.webm.asset.json";
import touchpadWebm3 from "@/assets/research/touchpad-3.webm.asset.json";
import touchpadWebm4 from "@/assets/research/touchpad-4.webm.asset.json";
import touchpadWebm5 from "@/assets/research/touchpad-5.webm.asset.json";
import touchpadWebm6 from "@/assets/research/touchpad-6.webm.asset.json";

export type ResearchFigure = { url: string; width: number; height: number };
export type ResearchDemo = { url: string; webm?: string; poster: string; width: number; height: number };

// Original project figures from https://junyi-zhao.github.io/research/.
export const researchFigures: Record<string, ResearchFigure> = {
  "https://junyi-zhao.github.io/research/3d-etextile/": { url: etextile.url, width: 1920, height: 1589 },
  "https://junyi-zhao.github.io/research/touchpadanywear/": { url: touchpad.url, width: 1920, height: 683 },
  "https://junyi-zhao.github.io/research/handwriting-perovskite/": { url: handwriting.url, width: 1910, height: 1298 },
  "https://junyi-zhao.github.io/research/perovskite-leds/": { url: leds.url, width: 2200, height: 882 },
  "https://junyi-zhao.github.io/research/sponge-sensor/": { url: sponge.url, width: 2140, height: 1434 },
  "https://junyi-zhao.github.io/research/sponge-electrodes/": { url: electrodes.url, width: 2133, height: 1600 },
  "https://junyi-zhao.github.io/research/synaptic-transistor/": { url: transistor.url, width: 1662, height: 1436 },
  "https://junyi-zhao.github.io/research/sensory-memory-system/": { url: memory.url, width: 1728, height: 1318 },
};

// Original demo clips from https://junyi-zhao.github.io/research/, keyed by project URL.
export const researchDemos: Record<string, ResearchDemo[]> = {
  "https://junyi-zhao.github.io/research/touchpadanywear/": [{
    url: touchpadDemo.url,
    webm: touchpadDemoWebm.url,
    poster: touchpadPoster.url,
    width: 800,
    height: 450,
  },
  { url: touchpadDemo2.url, webm: touchpadWebm2.url, poster: touchpadPoster2.url, width: 800, height: 450 },
  { url: touchpadDemo3.url, webm: touchpadWebm3.url, poster: touchpadPoster3.url, width: 800, height: 450 },
  { url: touchpadDemo4.url, webm: touchpadWebm4.url, poster: touchpadPoster4.url, width: 800, height: 450 },
  { url: touchpadDemo5.url, webm: touchpadWebm5.url, poster: touchpadPoster5.url, width: 800, height: 450 },
  { url: touchpadDemo6.url, webm: touchpadWebm6.url, poster: touchpadPoster6.url, width: 800, height: 450 },
  ],
};
