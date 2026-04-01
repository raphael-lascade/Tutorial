import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Nevada_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Nevada.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$253.4 billion",
  schools: "762",
  airports: "139",
  hospitals: "48",
  landArea: "284,367 km²",
  highestPoint: "Boundary Peak, 4,005 m",
};

// Style: State-Generic
export const NEVADA_STATE_GENERIC_DURATION = Nevada_BASE.durationInFrames;
export const NevadaStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Nevada_BASE,
    name: "Nevada",
    hint: "Las Vegas: entertainment capital of the world 🎰",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const NEVADA_STATE_GUESSV1_DURATION = Nevada_BASE.durationInFrames;
export const NevadaStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Nevada_BASE,
    hint: "Area 51 draws over 1 million curious visitors 🛸",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const NEVADA_STATE_GUESSV2_DURATION = Nevada_BASE.durationInFrames;
export const NevadaStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Nevada_BASE,
    hint: "Driest US state — avg 9 inches of rain/year 🏜️",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const NEVADA_STATE_GUESSV3_DURATION = Nevada_BASE.durationInFrames;
export const NevadaStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Nevada_BASE,
    hint: "Tourism & gaming generate $14B+ annually 💰",
  }} />
);
