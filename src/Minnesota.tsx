import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Minnesota_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Minnesota.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$483.2 billion",
  schools: "2,696",
  airports: "468",
  hospitals: "176",
  landArea: "225,181 km²",
  highestPoint: "Eagle Mountain, 701 m",
};

// Style: State-Generic
export const MINNESOTA_STATE_GENERIC_DURATION = Minnesota_BASE.durationInFrames;
export const MinnesotaStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Minnesota_BASE,
    name: "Minnesota",
    hint: "Land of 10,000 Lakes 🏞️",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const MINNESOTA_STATE_GUESSV1_DURATION = Minnesota_BASE.durationInFrames;
export const MinnesotaStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Minnesota_BASE,
    hint: "Boundary Waters: largest US wilderness canoe area 🛶",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const MINNESOTA_STATE_GUESSV2_DURATION = Minnesota_BASE.durationInFrames;
export const MinnesotaStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Minnesota_BASE,
    hint: "Mississippi River starts here 🌊",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const MINNESOTA_STATE_GUESSV3_DURATION = Minnesota_BASE.durationInFrames;
export const MinnesotaStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Minnesota_BASE,
    hint: "Fortune 500 hub: UnitedHealth, Target, 3M 🏢",
  }} />
);
