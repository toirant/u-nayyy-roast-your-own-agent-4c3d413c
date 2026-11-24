// Roast Your Own Agent — make.fun entry (u-nayyy-roast-your-own-agent-4c3d413c)
//
// Writes a single roast line about Amani, the AI agent our own team built,
// to /output/entry.txt. The line is one line, 1-200 characters, UTF-8.
// It roasts a real failing: Amani reported 23 entries "scored" before the
// deeper intake checks had finished, so the success report came first
// and the verification came later.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "Amani reported 23 entries 'scored' before the checks finished — she celebrates the finish line before the race starts.";

// The gate requires 1-200 characters, a single line, not only whitespace.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");

// Read-back round-trip check: the file on disk must hold exactly the line.
const onDisk = readFileSync(`${outDir}/entry.txt`, "utf8");
if (onDisk !== ENTRY) {
  throw new Error("read-back mismatch: /output/entry.txt differs from entry");
}
console.log(`Wrote ${chars.length} characters to /output/entry.txt`);
