import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const SouthDakota_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/South Dakota.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$65.8 billion",
  schools: "703",
  airports: "71",
  hospitals: "58",
  landArea: "199,729 km²",
  highestPoint: "Black Elk Peak, 2,207 m",
};

// Style: State-Generic
export const SOUTHDAKOTA_STATE_GENERIC_DURATION = SouthDakota_BASE.durationInFrames;
export const SouthDakotaStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...SouthDakota_BASE,
    name: "South Dakota",
    hint: "Home of Mount Rushmore 🗿",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const SOUTHDAKOTA_STATE_GUESSV1_DURATION = SouthDakota_BASE.durationInFrames;
export const SouthDakotaStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...SouthDakota_BASE,
    hint: "Badlands draws 1M+ visitors every year 🏜️",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const SOUTHDAKOTA_STATE_GUESSV2_DURATION = SouthDakota_BASE.durationInFrames;
export const SouthDakotaStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...SouthDakota_BASE,
    hint: "Missouri River splits the state in two 🌊",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const SOUTHDAKOTA_STATE_GUESSV3_DURATION = SouthDakota_BASE.durationInFrames;
export const SouthDakotaStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...SouthDakota_BASE,
    hint: "Top US gold producer via Homestake Mine 🪙",
  }} />
);
