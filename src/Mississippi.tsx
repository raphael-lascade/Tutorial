import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Mississippi_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Mississipi.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$151.5 billion",
  schools: "1,032",
  airports: "237",
  hospitals: "127",
  landArea: "124,443 km²",
  highestPoint: "Woodall Mountain, 246 m",
};

// Style: State-Generic
export const MISSISSIPPI_STATE_GENERIC_DURATION = Mississippi_BASE.durationInFrames;
export const MississippiStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Mississippi_BASE,
    name: "Mississippi",
    hint: "Birthplace of the blues 🎵",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const MISSISSIPPI_STATE_GUESSV1_DURATION = Mississippi_BASE.durationInFrames;
export const MississippiStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Mississippi_BASE,
    hint: "Natchez Trace Parkway spans 444 scenic miles 🛣️",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const MISSISSIPPI_STATE_GUESSV2_DURATION = Mississippi_BASE.durationInFrames;
export const MississippiStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Mississippi_BASE,
    hint: "Mississippi River forms its western border 🌊",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const MISSISSIPPI_STATE_GUESSV3_DURATION = Mississippi_BASE.durationInFrames;
export const MississippiStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Mississippi_BASE,
    hint: "Leading US poultry & catfish producer 🐟",
  }} />
);
