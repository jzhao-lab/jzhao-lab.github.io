import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { projects } from "./profile";

const touchpad = projects.find(project => project.href === "https://junyi-zhao.github.io/research/touchpadanywear/");

describe("Research page project links", () => {
  test("links the TouchpadAnyWear project to the full-text ACM DOI page", () => {
    assert.ok(touchpad, "TouchpadAnyWear should be one of the research projects");
    assert.equal(touchpad.paper, "https://dl.acm.org/doi/10.1145/3654777.3676344");
  });
  test("adds both TouchpadAnyWear videos under the project description", () => {
    assert.ok(touchpad);
    assert.deepEqual(touchpad.videos, [
      { label: "Video", href: "https://www.youtube.com/watch?v=zUDNC0jHle4" },
      { label: "UIST-2024 Oral Video", href: "https://www.youtube.com/watch?v=QlZGT1EEAWI" },
    ]);
  });
  test("keeps every other project without video links", () => {
    const withVideos = projects.filter(project => project.videos?.length);
    assert.deepEqual(withVideos.map(project => project.href), ["https://junyi-zhao.github.io/research/touchpadanywear/"]);
  });
});
