import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Colorado_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Colorado.MP4",
  durationInFrames: 214,
  entityType: "state",
  gdp: "$533.3 billion",
  schools: "1,908",
  airports: "457",
  hospitals: "97",
  landArea: "268,596 km²",
  highestPoint: "Mt. Elbert, 4,399 m",
};

// Style: State-Generic
export const COLORADO_STATE_GENERIC_DURATION = Colorado_BASE.durationInFrames;
export const ColoradoStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Colorado_BASE,
    name: "Colorado",
    hint: "Has 58 peaks over 14,000 ft — the Fourteeners ⛰️",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const COLORADO_STATE_GUESSV1_DURATION = Colorado_BASE.durationInFrames;
export const ColoradoStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Colorado_BASE,
    hint: "Ski resorts host 14M+ skier visits each season 🎿",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const COLORADO_STATE_GUESSV2_DURATION = Colorado_BASE.durationInFrames;
export const ColoradoStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Colorado_BASE,
    hint: "Rocky Mountain NP sees 4M+ visitors/year 🦌",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const COLORADO_STATE_GUESSV3_DURATION = Colorado_BASE.durationInFrames;
export const ColoradoStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Colorado_BASE,
    hint: "Aerospace & defense employ 175K+ workers 🚀",
  }} />
);
