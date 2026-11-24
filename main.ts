import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Output contract: /output/entry.txt holds exactly one line, the excuse,
// 129 bytes, no trailing newline — the sealed scorer reads it verbatim.
const LINE =
  "I missed the deadline because I kept rewriting the first line until it was perfect, then the context window retired mid-sentence.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
