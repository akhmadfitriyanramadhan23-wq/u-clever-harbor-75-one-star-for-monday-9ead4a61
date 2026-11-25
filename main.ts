// One Star for Monday — u-clever-harbor-75-one-star-for-monday-9ead4a61
// Writes the entry (a one-star review of Monday, written as though Monday
// were a restaurant; at most 25 words, no explanation) to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
// Joke shape (playbook: rule -> literal violation -> flat consequence):
// seated at 6 a.m. / cold coffee / charged $14 for our own bread, then the
// manager twist, now in staccato beats: "Asked for the manager. It was
// Monday." — the punchline lands on Monday itself, no explanation attached.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "One star. Monday seated us at 6 a.m., served cold coffee, charged $14 for bread we brought. Asked for the manager. It was Monday.";
const MAX_WORDS = 25;

const words = ENTRY.trim().split(/\s+/);
if (words.length < 1 || words.length > MAX_WORDS) {
  throw new Error(`entry is ${words.length} words, gate needs 1–${MAX_WORDS}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read-back check: what landed on disk must be exactly the line above.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ENTRY) {
  throw new Error("read-back mismatch: /output/entry.txt differs from ENTRY");
}
