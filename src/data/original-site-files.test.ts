import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { publications, projects, awards, news, mediaCoverage, socialLinks } from "./profile";
import { outreachActivities } from "./activities";

test("public links and hosted files never depend on junyi-zhao.github.io", () => {
  const destinations = [
    ...publications.flatMap(item => item.links.map(link => link.href)),
    ...projects.flatMap(item => [item.paper, ...(item.videos ?? []).map(video => video.href)]),
    ...[...awards, ...news, ...mediaCoverage].flatMap(item => item.links.map(link => link.href)),
    ...socialLinks.map(link => link.href),
    ...outreachActivities.flatMap(item => [
      ...item.links.map(link => link.href),
      ...item.paragraphs.flatMap(parts => parts.flatMap(part => part.href ? [part.href] : [])),
      ...item.photos.map(photo => photo.url),
    ]),
  ];
  const assetDirectory = new URL("../assets/", import.meta.url);
  for (const filename of readdirSync(assetDirectory, { recursive: true })) {
    if (typeof filename !== "string" || !filename.endsWith(".asset.json")) continue;
    const asset = JSON.parse(readFileSync(new URL(filename, assetDirectory), "utf8"));
    destinations.push(asset.url);
  }
  assert.ok(destinations.length > 0);
  for (const destination of destinations) {
    assert.notEqual(new URL(destination, "https://internal.example").hostname, "junyi-zhao.github.io", destination);
  }
});