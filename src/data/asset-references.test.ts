import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const sourceDirectory = fileURLToPath(new URL("../", import.meta.url));
const assetDirectory = join(sourceDirectory, "assets");

test("all asset imports resolve after page-based organization", () => {
  let references = 0;
  for (const entry of readdirSync(sourceDirectory, { recursive: true })) {
    if (typeof entry !== "string" || !/\.(tsx?|css)$/.test(entry)) continue;
    const text = readFileSync(join(sourceDirectory, entry), "utf8");
    for (const match of text.matchAll(/["']@\/assets\/([^"']+)["']/g)) {
      references += 1;
      assert.ok(existsSync(join(assetDirectory, match[1])), `${entry}: missing ${match[1]}`);
    }
  }
  assert.ok(references > 0, "the site must reference its assets");
});

test("hosted asset pointers remain internal and contain valid file metadata", () => {
  const pointers = readdirSync(assetDirectory, { recursive: true }).filter((entry): entry is string => typeof entry === "string" && entry.endsWith(".asset.json"));
  assert.ok(pointers.length > 0);
  for (const entry of pointers) {
    const pointer = JSON.parse(readFileSync(join(assetDirectory, entry), "utf8"));
    assert.ok(pointer.url.startsWith("/assets/"), entry);
    assert.ok(pointer.size > 0, entry);
    const localFile = fileURLToPath(new URL(`../../public${decodeURIComponent(pointer.url)}`, import.meta.url));
    assert.ok(existsSync(localFile), `Missing bundled file: ${pointer.url}`);
    assert.equal(pointer.version, 1, entry);
  }
});