import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Wisconsin_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Wisconsin.MP4",
  durationInFrames: 210,
  entityType: "state",
  gdp: "$380.2 billion",
  schools: "2,387",
  airports: "97",
  hospitals: "126",
  landArea: "169,635 km²",
  highestPoint: "Timms Hill, 595 m",
};

// Style: State-Generic
export const WISCONSIN_STATE_GENERIC_DURATION = Wisconsin_BASE.durationInFrames;
export const WisconsinStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Wisconsin_BASE,
    name: "Wisconsin",
    hint: "Produces 25% of all US cheese 🧀",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const WISCONSIN_STATE_GUESSV1_DURATION = Wisconsin_BASE.durationInFrames;
export const WisconsinStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Wisconsin_BASE,
    hint: "Door County is the Cape Cod of the Midwest 🌊",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const WISCONSIN_STATE_GUESSV2_DURATION = Wisconsin_BASE.durationInFrames;
export const WisconsinStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Wisconsin_BASE,
    hint: "Has over 15,000 lakes 🏞️",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const WISCONSIN_STATE_GUESSV3_DURATION = Wisconsin_BASE.durationInFrames;
export const WisconsinStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Wisconsin_BASE,
    hint: "Leads the US in dairy farming output 🐄",
  }} />
);
