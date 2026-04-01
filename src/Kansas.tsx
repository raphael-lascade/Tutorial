import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Kansas_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Kansas.MP4",
  durationInFrames: 208,
  entityType: "state",
  gdp: "$224.9 billion",
  schools: "1,348",
  airports: "591",
  hospitals: "137",
  landArea: "213,096 km²",
  highestPoint: "Mount Sunflower, 1,231 m",
};

// Style: State-Generic
export const KANSAS_STATE_GENERIC_DURATION = Kansas_BASE.durationInFrames;
export const KansasStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Kansas_BASE,
    name: "Kansas",
    hint: "Geographic center of the contiguous US 🗺️",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const KANSAS_STATE_GUESSV1_DURATION = Kansas_BASE.durationInFrames;
export const KansasStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Kansas_BASE,
    hint: "Wichita is the Air Capital of the World ✈️",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const KANSAS_STATE_GUESSV2_DURATION = Kansas_BASE.durationInFrames;
export const KansasStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Kansas_BASE,
    hint: "Tallgrass Prairie National Preserve is here 🌾",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const KANSAS_STATE_GUESSV3_DURATION = Kansas_BASE.durationInFrames;
export const KansasStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Kansas_BASE,
    hint: "Largest US wheat producer for decades 🌾",
  }} />
);
