import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const WestVirginia_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/West Virginia.MP4",
  durationInFrames: 210,
  entityType: "state",
  gdp: "$82.4 billion",
  schools: "672",
  airports: "35",
  hospitals: "57",
  landArea: "62,756 km²",
  highestPoint: "Spruce Knob, 1,482 m",
};

// Style: State-Generic
export const WESTVIRGINIA_STATE_GENERIC_DURATION = WestVirginia_BASE.durationInFrames;
export const WestVirginiaStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...WestVirginia_BASE,
    name: "West Virginia",
    hint: "Only US state entirely within the Appalachians ⛰️",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const WESTVIRGINIA_STATE_GUESSV1_DURATION = WestVirginia_BASE.durationInFrames;
export const WestVirginiaStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...WestVirginia_BASE,
    hint: "New River Gorge: newest US national park 🏞️",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const WESTVIRGINIA_STATE_GUESSV2_DURATION = WestVirginia_BASE.durationInFrames;
export const WestVirginiaStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...WestVirginia_BASE,
    hint: "New River is one of the world's oldest rivers 🌊",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const WESTVIRGINIA_STATE_GUESSV3_DURATION = WestVirginia_BASE.durationInFrames;
export const WestVirginiaStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...WestVirginia_BASE,
    hint: "Major US coal and natural gas producer ⛏️",
  }} />
);
