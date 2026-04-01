import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Ohio_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Ohio.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$873.0 billion",
  schools: "3,632",
  airports: "750",
  hospitals: "168",
  landArea: "106,056 km²",
  highestPoint: "Campbell Hill, 472 m",
};

// Style: State-Generic
export const OHIO_STATE_GENERIC_DURATION = Ohio_BASE.durationInFrames;
export const OhioStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Ohio_BASE,
    name: "Ohio",
    hint: "Birthplace of 8 US presidents 🏛️",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const OHIO_STATE_GUESSV1_DURATION = Ohio_BASE.durationInFrames;
export const OhioStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Ohio_BASE,
    hint: "Rock & Roll Hall of Fame is in Cleveland 🎸",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const OHIO_STATE_GUESSV2_DURATION = Ohio_BASE.durationInFrames;
export const OhioStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Ohio_BASE,
    hint: "Lake Erie coastline spans 312 miles 🌊",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const OHIO_STATE_GUESSV3_DURATION = Ohio_BASE.durationInFrames;
export const OhioStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Ohio_BASE,
    hint: "Major auto & aerospace manufacturing hub 🏭",
  }} />
);
