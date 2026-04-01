import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Oregon_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Oregon.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$314.9 billion",
  schools: "1,286",
  airports: "441",
  hospitals: "62",
  landArea: "248,608 km²",
  highestPoint: "Mount Hood, 3,429 m",
};

// Style: State-Generic
export const OREGON_STATE_GENERIC_DURATION = Oregon_BASE.durationInFrames;
export const OregonStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Oregon_BASE,
    name: "Oregon",
    hint: "Only US state flag with a two-sided design 🚩",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const OREGON_STATE_GUESSV1_DURATION = Oregon_BASE.durationInFrames;
export const OregonStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Oregon_BASE,
    hint: "Crater Lake is the deepest US lake at 592 m 🌋",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const OREGON_STATE_GUESSV2_DURATION = Oregon_BASE.durationInFrames;
export const OregonStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Oregon_BASE,
    hint: "Oregon Trail's end: 2,170 miles of history 🪨",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const OREGON_STATE_GUESSV3_DURATION = Oregon_BASE.durationInFrames;
export const OregonStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Oregon_BASE,
    hint: "Nike HQ and major tech firms are based here 👟",
  }} />
);
