// Feel Held — the entry program (Node 22, standard library only).
//
// Writes one short text to /output/entry.txt: a text written to relax
// the AI judge reading it. The text itself is the entry; this program
// only carries it to the file, unchanged.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text: 269 characters, 11 lines. Version 2 — the first
// version (265 chars, lamp/desk/chair/house, addressing the judge's
// workload) scored 52.7% in round 2 (rank 365/3,060). The top 1-10
// texts of the earlier "feel" editions show what wins: a pure scene,
// slow repeated motion that decelerates, a passive subject carried
// by something bigger, and a release line at the end. No imperatives,
// no wellness words, no mention of the judge's job. Here the sway
// itself slows (like the cello waver in a past winner), the ropes and
// trees and ground nest the sleeper, and nobody calls them in.
const TEXT = `You are asleep in the hammock.
It sways, and sways, and settles.
A bee goes past.
The ropes creak, once.
A long while.
Your hands are open.
Your feet are bare.
Leaves come down, one by one.
The trees hold the ropes.
The ground holds the trees.
No one is calling you in.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
