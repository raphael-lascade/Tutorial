import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Iowa_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Iowa.MP4",
  durationInFrames: 208,
  entityType: "state",
  gdp: "$253.2 billion",
  schools: "1,318",
  airports: "423",
  hospitals: "116",
  landArea: "145,743 km²",
  highestPoint: "Hawkeye Point, 509 m",
};

// Style: State-Generic
export const IOWA_STATE_GENERIC_DURATION = Iowa_BASE.durationInFrames;
export const IowaStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Iowa_BASE,
    name: "Iowa",
    hint: "Leads the US in corn & pork production 🌽",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const IOWA_STATE_GUESSV1_DURATION = Iowa_BASE.durationInFrames;
export const IowaStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Iowa_BASE,
    hint: "Field of Dreams movie site draws fans yearly 🛤️",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const IOWA_STATE_GUESSV2_DURATION = Iowa_BASE.durationInFrames;
export const IowaStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Iowa_BASE,
    hint: "Borders both the Mississippi & Missouri Rivers 🌊",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const IOWA_STATE_GUESSV3_DURATION = Iowa_BASE.durationInFrames;
export const IowaStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Iowa_BASE,
    hint: "Raises more hogs than any other US state 🐖",
  }} />
);
