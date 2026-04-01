import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const California_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/California.MP4",
  durationInFrames: 205,
  entityType: "state",
  gdp: "$3,827.0 billion",
  schools: "10,326",
  airports: "2,426",
  hospitals: "342",
  landArea: "403,466 km²",
  highestPoint: "Mt. Whitney, 4,421 m",
};

// Style: State-Generic
export const CALIFORNIA_STATE_GENERIC_DURATION = California_BASE.durationInFrames;
export const CaliforniaStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...California_BASE,
    name: "California",
    hint: "5th largest economy in the world if a nation 🌍",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const CALIFORNIA_STATE_GUESSV1_DURATION = California_BASE.durationInFrames;
export const CaliforniaStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...California_BASE,
    hint: "Hollywood produces 40%+ of global film & TV 🎬",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const CALIFORNIA_STATE_GUESSV2_DURATION = California_BASE.durationInFrames;
export const CaliforniaStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...California_BASE,
    hint: "Has both the lowest & tallest US peaks 🏔️",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const CALIFORNIA_STATE_GUESSV3_DURATION = California_BASE.durationInFrames;
export const CaliforniaStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...California_BASE,
    hint: "Silicon Valley leads the world in tech 💡",
  }} />
);
