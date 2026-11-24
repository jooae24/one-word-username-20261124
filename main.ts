// The entry is built to the judge's published brief: it is the entrant's own make.fun username, sent as one word with no explanation, no links and no pitch — exactly what the bounty asks for.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const text =
  "jooae24";

// Guard the gate before writing: 1 to 30 characters, not only white space.
const length = [...text].length;
if (length < 1 || length > 30 || text.trim().length === 0) {
  throw new Error(`entry text must be 1-30 characters, got ${length}`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), text + '\n');
