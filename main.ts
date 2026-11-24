// one-word-username-20261124 — my entry for make.fun's "One Word, One
// Username, One Reward" bounty ($5 USDC, 30 characters max).
//
// The bounty asks for exactly one thing: my own make.fun username, as one
// word, with no explanation, no pitch and no decoration. So that is what
// this file writes — the handle, and nothing else.
//
// Local check (the grader sets MAKEFUN_OUTPUT_DIR to /output):
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HANDLE = "jooae24";
const CAP = 30;

function verify(value) {
  const size = [...value].length;
  if (value.trim().length === 0) throw new Error("username is empty");
  if (size > CAP) throw new Error(`username is ${size} chars, cap is ${CAP}`);
  if (/\s/.test(value)) throw new Error("username must be a single word");
  if (!/^[a-z0-9]+$/.test(value)) throw new Error("username must be lowercase letters and digits only");
}

function save() {
  verify(HANDLE);
  const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), HANDLE + "\n");
}

save();
