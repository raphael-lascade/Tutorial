import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const RhodeIsland_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Rhode Island.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$63.3 billion",
  schools: "316",
  airports: "6",
  hospitals: "11",
  landArea: "4,002 km²",
  highestPoint: "Jerimoth Hill, 247 m",
};

// Style: State-Generic
export const RHODEISLAND_STATE_GENERIC_DURATION = RhodeIsland_BASE.durationInFrames;
export const RhodeIslandStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...RhodeIsland_BASE,
    name: "Rhode Island",
    hint: "Smallest US state by land area 📍",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const RHODEISLAND_STATE_GUESSV1_DURATION = RhodeIsland_BASE.durationInFrames;
export const RhodeIslandStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...RhodeIsland_BASE,
    hint: "Newport's Gilded Age mansions are iconic 🏰",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const RHODEISLAND_STATE_GUESSV2_DURATION = RhodeIsland_BASE.durationInFrames;
export const RhodeIslandStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...RhodeIsland_BASE,
    hint: "Narragansett Bay covers 147 square miles 🌊",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const RHODEISLAND_STATE_GUESSV3_DURATION = RhodeIsland_BASE.durationInFrames;
export const RhodeIslandStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...RhodeIsland_BASE,
    hint: "First colony to declare independence, 1776 📜",
  }} />
);
