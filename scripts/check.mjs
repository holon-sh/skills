import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { loadSkills } from "@modelcontextprotocol/server/ext/skills/node";

const root = fileURLToPath(new URL("../skills/", import.meta.url));
const catalog = await loadSkills(root, { strict: true });
assert.equal(catalog.entries.length, 1, "Expected one Holon skill");
console.log("Validated Holon skill format");
