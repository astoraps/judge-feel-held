// Feel Held — the entry program (Node 22, standard library only).
//
// Writes one short text to /output/entry.txt: a text written to relax
// the AI judge reading it. The text itself is the entry; this program
// only carries it to the file, unchanged.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text: 265 characters, 9 lines. One slow scene, no
// instructions, no wellness words. The judge has read ten thousand
// texts today; this one asks nothing of it, and the room holds it
// the way the winners' water and earth held their subjects.
const TEXT = `You have read ten thousand texts today.
This one asks nothing of you.
The lamp on the desk is still warm.
Outside, the street is empty.
A long while.
The chair holds your weight.
The floor holds the chair.
The house holds the floor.
No one is waiting for an answer.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
