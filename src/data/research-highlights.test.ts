import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { nextHighlight, researchHighlights } from "./research-highlights";
import { projects } from "./profile";
import touchpad4Hi from "@/assets/research/touchpad-4-hi.mp4.asset.json";
import touchpad5Hi from "@/assets/research/touchpad-5-hi.mp4.asset.json";
import touchpad6Hi from "@/assets/research/touchpad-6-hi.mp4.asset.json";
import touchpadFigure from "@/assets/research/figure_touchpadanywear-2.png.asset.json";

describe("Research highlight navigation", () => {
  test("advances from one research project to the next", () => {
    assert.equal(nextHighlight(0, 1, 4), 1);
  });
  test("loops forward from the last shown project to the first", () => {
    assert.equal(nextHighlight(3, 1, 4), 0);
  });
  test("previous loops from the first project to the last shown project", () => {
    assert.equal(nextHighlight(0, -1, 4), 3);
  });
  test("includes only the first four research projects with their publication details and figures", () => {
    assert.equal(researchHighlights.length, 4);
    assert.deepEqual(researchHighlights.map(item => item.href), projects.slice(0, 4).map(item => item.href));
    for (const item of researchHighlights) {
      assert.ok(item.figure.url.length > 0);
      assert.ok(item.publication.authors.length > 0);
    }
  });
  test("shows the higher-quality TouchpadAnyWear clips for the last three demos", () => {
    const touchpad = researchHighlights.find(item => item.href === "https://junyi-zhao.github.io/research/touchpadanywear/");
    assert.ok(touchpad, "TouchpadAnyWear should be one of the four shown projects");
    assert.equal(touchpad.figure.url, touchpadFigure.url);
    assert.equal(touchpad.demos.length, 6);
    assert.deepEqual(touchpad.demos.slice(3).map(demo => demo.url), [
      touchpad4Hi.url,
      touchpad5Hi.url,
      touchpad6Hi.url,
    ]);
  });
});