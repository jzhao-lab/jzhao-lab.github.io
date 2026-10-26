import etextile from "@/assets/research/original-figure_3D_textile_new.png.asset.json";
import touchpad from "@/assets/research/original-figure_touchpadanywear.png.asset.json";
import handwriting from "@/assets/research/original-figure_Hand_writing_perovskite.png.asset.json";
import leds from "@/assets/research/original-figure_Printed_perovskite_LEDs.png.asset.json";
import gif1 from "@/assets/research/original-touchpad_1.gif.asset.json";
import gif2 from "@/assets/research/original-touchpad_2.gif.asset.json";
import gif3 from "@/assets/research/original-touchpad_3.gif.asset.json";
import gif4 from "@/assets/research/original-touchpad_4.gif.asset.json";
import gif5 from "@/assets/research/original-touchpad_5.gif.asset.json";
import gif6 from "@/assets/research/original-touchpad_6.gif.asset.json";
import type { ResearchFigure } from "@/data/research-figures";

// Untouched source PNGs retain their alpha channels and original backgrounds.
export const highlightFigures: Record<string, ResearchFigure> = {
  "https://junyi-zhao.github.io/research/3d-etextile/": { url: etextile.url, width: 4235, height: 3506 },
  "https://junyi-zhao.github.io/research/touchpadanywear/": { url: touchpad.url, width: 4212, height: 1498 },
  "https://junyi-zhao.github.io/research/handwriting-perovskite/": { url: handwriting.url, width: 1910, height: 1298 },
  "https://junyi-zhao.github.io/research/perovskite-leds/": { url: leds.url, width: 2660, height: 1066 },
};

export const highlightGifs: Record<string, string[]> = {
  "https://junyi-zhao.github.io/research/touchpadanywear/": [gif1.url, gif2.url, gif3.url, gif4.url, gif5.url, gif6.url],
};