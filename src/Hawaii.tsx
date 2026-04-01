import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Hawaii_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Hawaii.MP4",
  durationInFrames: 193,
  entityType: "state",
  gdp: "$111.7 billion",
  schools: "295",
  airports: "46",
  hospitals: "22",
  landArea: "16,635 km²",
  highestPoint: "Mauna Kea, 4,207 m",
};

// Style: State-Generic
export const HAWAII_STATE_GENERIC_DURATION = Hawaii_BASE.durationInFrames;
export const HawaiiStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Hawaii_BASE,
    name: "Hawaii",
    hint: "Only US state entirely composed of islands 🏝️",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const HAWAII_STATE_GUESSV1_DURATION = Hawaii_BASE.durationInFrames;
export const HawaiiStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Hawaii_BASE,
    hint: "Tourism generates 20%+ of Hawaii's total GDP 🌺",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const HAWAII_STATE_GUESSV2_DURATION = Hawaii_BASE.durationInFrames;
export const HawaiiStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Hawaii_BASE,
    hint: "Mauna Kea is taller than Everest from its base 🌋",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const HAWAII_STATE_GUESSV3_DURATION = Hawaii_BASE.durationInFrames;
export const HawaiiStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Hawaii_BASE,
    hint: "Military spending is 10%+ of state GDP 🪖",
  }} />
);
