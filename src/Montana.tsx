import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Montana_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Montana.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$74.7 billion",
  schools: "821",
  airports: "304",
  hospitals: "76",
  landArea: "381,154 km²",
  highestPoint: "Granite Peak, 3,901 m",
};

// Style: State-Generic
export const MONTANA_STATE_GENERIC_DURATION = Montana_BASE.durationInFrames;
export const MontanaStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Montana_BASE,
    name: "Montana",
    hint: "Big Sky Country — 4th largest US state 🏔️",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const MONTANA_STATE_GUESSV1_DURATION = Montana_BASE.durationInFrames;
export const MontanaStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Montana_BASE,
    hint: "Glacier NP has 700+ miles of hiking trails 🥾",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const MONTANA_STATE_GUESSV2_DURATION = Montana_BASE.durationInFrames;
export const MontanaStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Montana_BASE,
    hint: "More cattle than people live here 🐄",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const MONTANA_STATE_GUESSV3_DURATION = Montana_BASE.durationInFrames;
export const MontanaStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Montana_BASE,
    hint: "Booming economy driven by energy & ranching ⛽",
  }} />
);
