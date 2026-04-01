import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Idaho_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Idaho.MP4",
  durationInFrames: 208,
  entityType: "state",
  gdp: "$120.6 billion",
  schools: "801",
  airports: "474",
  hospitals: "41",
  landArea: "216,632 km²",
  highestPoint: "Borah Peak, 3,859 m",
};

// Style: State-Generic
export const IDAHO_STATE_GENERIC_DURATION = Idaho_BASE.durationInFrames;
export const IdahoStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Idaho_BASE,
    name: "Idaho",
    hint: "Produces 1/3 of all US potatoes 🥔",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const IDAHO_STATE_GUESSV1_DURATION = Idaho_BASE.durationInFrames;
export const IdahoStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Idaho_BASE,
    hint: "Craters of the Moon: vast volcanic lava fields 🌋",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const IDAHO_STATE_GUESSV2_DURATION = Idaho_BASE.durationInFrames;
export const IdahoStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Idaho_BASE,
    hint: "Over 3,000 miles of white-water rivers 🏄",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const IDAHO_STATE_GUESSV3_DURATION = Idaho_BASE.durationInFrames;
export const IdahoStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Idaho_BASE,
    hint: "Boise is one of the fastest-growing US tech hubs 💻",
  }} />
);
