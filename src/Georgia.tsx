import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Georgia_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Georgia.MP4",
  durationInFrames: 249,
  entityType: "state",
  gdp: "$835.8 billion",
  schools: "2,327",
  airports: "462",
  hospitals: "143",
  landArea: "149,977 km²",
  highestPoint: "Brasstown Bald, 1,458 m",
};

// Style: State-Generic
export const GEORGIA_STATE_GENERIC_DURATION = Georgia_BASE.durationInFrames;
export const GeorgiaStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Georgia_BASE,
    name: "Georgia",
    hint: "Atlanta has the world's busiest airport ✈️",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const GEORGIA_STATE_GUESSV1_DURATION = Georgia_BASE.durationInFrames;
export const GeorgiaStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Georgia_BASE,
    hint: "Georgia Aquarium is among the world's largest 🐳",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const GEORGIA_STATE_GUESSV2_DURATION = Georgia_BASE.durationInFrames;
export const GeorgiaStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Georgia_BASE,
    hint: "Appalachian Trail's southern terminus is here 🥾",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const GEORGIA_STATE_GUESSV3_DURATION = Georgia_BASE.durationInFrames;
export const GeorgiaStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Georgia_BASE,
    hint: "Peach & peanut capital of the South 🍑",
  }} />
);
