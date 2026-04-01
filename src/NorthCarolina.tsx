import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const NorthCarolina_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/North Carolina.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$767.0 billion",
  schools: "2,716",
  airports: "420",
  hospitals: "120",
  landArea: "126,161 km²",
  highestPoint: "Mount Mitchell, 2,037 m",
};

// Style: State-Generic
export const NORTHCAROLINA_STATE_GENERIC_DURATION = NorthCarolina_BASE.durationInFrames;
export const NorthCarolinaStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...NorthCarolina_BASE,
    name: "North Carolina",
    hint: "First in flight — Wright Brothers, 1903 ✈️",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const NORTHCAROLINA_STATE_GUESSV1_DURATION = NorthCarolina_BASE.durationInFrames;
export const NorthCarolinaStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...NorthCarolina_BASE,
    hint: "Outer Banks: 200 miles of barrier islands 🏖️",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const NORTHCAROLINA_STATE_GUESSV2_DURATION = NorthCarolina_BASE.durationInFrames;
export const NorthCarolinaStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...NorthCarolina_BASE,
    hint: "Blue Ridge Parkway spans 469 scenic miles 🌄",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const NORTHCAROLINA_STATE_GUESSV3_DURATION = NorthCarolina_BASE.durationInFrames;
export const NorthCarolinaStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...NorthCarolina_BASE,
    hint: "Research Triangle is a top US tech hub 💻",
  }} />
);
