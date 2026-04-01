import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const SouthCarolina_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/South Carolina.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$327.4 billion",
  schools: "1,264",
  airports: "186",
  hospitals: "65",
  landArea: "77,897 km²",
  highestPoint: "Sassafras Mountain, 1,085 m",
};

// Style: State-Generic
export const SOUTHCAROLINA_STATE_GENERIC_DURATION = SouthCarolina_BASE.durationInFrames;
export const SouthCarolinaStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...SouthCarolina_BASE,
    name: "South Carolina",
    hint: "Myrtle Beach draws 14M+ visitors every year 🏖️",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const SOUTHCAROLINA_STATE_GUESSV1_DURATION = SouthCarolina_BASE.durationInFrames;
export const SouthCarolinaStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...SouthCarolina_BASE,
    hint: "Myrtle Beach has the most golf courses per capita ⛳",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const SOUTHCAROLINA_STATE_GUESSV2_DURATION = SouthCarolina_BASE.durationInFrames;
export const SouthCarolinaStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...SouthCarolina_BASE,
    hint: "ACE Basin: one of the largest US estuaries 🦅",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const SOUTHCAROLINA_STATE_GUESSV3_DURATION = SouthCarolina_BASE.durationInFrames;
export const SouthCarolinaStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...SouthCarolina_BASE,
    hint: "BMW & Boeing have major plants here 🚗",
  }} />
);
