import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Wyoming_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Wyoming.MP4",
  durationInFrames: 210,
  entityType: "state",
  gdp: "$47.1 billion",
  schools: "365",
  airports: "42",
  hospitals: "29",
  landArea: "253,335 km²",
  highestPoint: "Gannett Peak, 4,207 m",
};

// Style: State-Generic
export const WYOMING_STATE_GENERIC_DURATION = Wyoming_BASE.durationInFrames;
export const WyomingStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Wyoming_BASE,
    name: "Wyoming",
    hint: "First US state to grant women's suffrage 🗳️",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const WYOMING_STATE_GUESSV1_DURATION = Wyoming_BASE.durationInFrames;
export const WyomingStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Wyoming_BASE,
    hint: "Yellowstone: America's first national park 🌋",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const WYOMING_STATE_GUESSV2_DURATION = Wyoming_BASE.durationInFrames;
export const WyomingStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Wyoming_BASE,
    hint: "Over half the world's geysers are found here ♨️",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const WYOMING_STATE_GUESSV3_DURATION = Wyoming_BASE.durationInFrames;
export const WyomingStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Wyoming_BASE,
    hint: "Least populous US state, lowest tax burden 💵",
  }} />
);
