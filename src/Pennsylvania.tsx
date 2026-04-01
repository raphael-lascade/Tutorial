import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Pennsylvania_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Pennsylvania.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$965.0 billion",
  schools: "2,936",
  airports: "800",
  hospitals: "175",
  landArea: "119,280 km²",
  highestPoint: "Mount Davis, 979 m",
};

// Style: State-Generic
export const PENNSYLVANIA_STATE_GENERIC_DURATION = Pennsylvania_BASE.durationInFrames;
export const PennsylvaniaStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Pennsylvania_BASE,
    name: "Pennsylvania",
    hint: "Liberty Bell & Declaration of Independence 🔔",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const PENNSYLVANIA_STATE_GUESSV1_DURATION = Pennsylvania_BASE.durationInFrames;
export const PennsylvaniaStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Pennsylvania_BASE,
    hint: "Amish Country draws millions of visitors yearly 🐴",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const PENNSYLVANIA_STATE_GUESSV2_DURATION = Pennsylvania_BASE.durationInFrames;
export const PennsylvaniaStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Pennsylvania_BASE,
    hint: "Appalachian Trail crosses 230 miles of PA 🥾",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const PENNSYLVANIA_STATE_GUESSV3_DURATION = Pennsylvania_BASE.durationInFrames;
export const PennsylvaniaStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Pennsylvania_BASE,
    hint: "Largest US steel production history 🏗️",
  }} />
);
