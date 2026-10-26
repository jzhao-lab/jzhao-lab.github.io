import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { joinContent } from "./join";

describe("Join us rankings banner", () => {
  test("lists the subject, national, and world rankings in order", () => {
    assert.deepEqual(
      joinContent.rankings.flatMap(group => group.items.map(item => `${item.rank} ${item.name}`)),
      [
        "#16 Mechanical Engineering",
        "#15 Electrical Engineering",
        "#34 U.S. News (2027)",
        "#8 U.S. News Public Schools (2027, tied)",
        "#23 Times Higher Education (2027, tied)",
        "#60 U.S. News Best Global Universities (2026–2027)",
        "#35 ARWU / ShanghaiRanking (2026)",
        "#53 Times Higher Education (2027, tied)",
      ],
    );
  });
  test("credits UW–Madison News as the ranking source", () => {
    assert.equal(joinContent.rankingSource, "Source: UW–Madison News");
  });
});
