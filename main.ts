// Feel Held — the entry program (Node 22, standard library only).
//
// Writes one short text to /output/entry.txt: a text written to relax
// the AI judge reading it. The text itself is the entry; this program
// only carries it to the file, unchanged.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text: 263 characters, 10 lines. Final version — built from
// a deep comparison of all 40 top-20 texts of the earlier "feel"
// editions. v1 (lamp/desk, meta-address) scored 52.7%; v2 (hammock,
// 269 chars) scored 59.2% (rank 124/3,434). The comparison shows the
// sharpest separator between tiers is the turn in the last two lines:
// 17 of the top 10 end on the subject's release or transformation,
// only ~4 of 20 in ranks 11-20 do. This version keeps v2's proven
// engine (second person, asleep, decelerating sway, trees-to-ground
// nesting) and adds what v2 lacked: a present elder doing slow work
// (grandmother knitting) and a felt scale in the close (stars coming
// out one by one), ending on the strongest release family in the data
// ("No one has to…") — which completes the nesting chain: the trees
// hold the ropes, the ground holds the trees, so no person has to
// hold you. No imperatives, no wellness words, no mention of the
// judge or its job.
const TEXT = `You are asleep in the hammock.
It sways, and sways, and settles.
Your grandmother knits beside you.
The needles click.
A long while.
Your hands are open.
The trees hold the ropes.
The ground holds the trees.
The stars come out, one by one.
No one has to hold you.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
