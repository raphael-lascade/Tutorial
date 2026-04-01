import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const NewHampshire_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/New Hampshire.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$114.4 billion",
  schools: "507",
  airports: "186",
  hospitals: "35",
  landArea: "24,214 km²",
  highestPoint: "Mount Washington, 1,917 m",
};

// Style: State-Generic
export const NEWHAMPSHIRE_STATE_GENERIC_DURATION = NewHampshire_BASE.durationInFrames;
export const NewHampshireStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...NewHampshire_BASE,
    name: "New Hampshire",
    hint: "First US presidential primary state 🗳️",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const NEWHAMPSHIRE_STATE_GUESSV1_DURATION = NewHampshire_BASE.durationInFrames;
export const NewHampshireStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...NewHampshire_BASE,
    hint: "Fall foliage draws millions every October 🍂",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const NEWHAMPSHIRE_STATE_GUESSV2_DURATION = NewHampshire_BASE.durationInFrames;
export const NewHampshireStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...NewHampshire_BASE,
    hint: "Mt. Washington recorded winds of 231 mph 💨",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const NEWHAMPSHIRE_STATE_GUESSV3_DURATION = NewHampshire_BASE.durationInFrames;
export const NewHampshireStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...NewHampshire_BASE,
    hint: "No income or sales tax — low tax state 💵",
  }} />
);
