// One Line, One Chill — make.fun entry (program/v1).
// Writes a single 111-character horror sentence to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Every night I count thirteen steps to my bedroom; tonight I counted fourteen, and the fourteenth was breathing.";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${outPath}`);
