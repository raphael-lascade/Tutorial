import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Virginia_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Virginia.MP4",
  durationInFrames: 207,
  entityType: "state",
  gdp: "$664.0 billion",
  schools: "2,155",
  airports: "66",
  hospitals: "87",
  landArea: "110,787 km²",
  highestPoint: "Mount Rogers, 1,746 m",
};

// Style: State-Generic
export const VIRGINIA_STATE_GENERIC_DURATION = Virginia_BASE.durationInFrames;
export const VirginiaStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Virginia_BASE,
    name: "Virginia",
    hint: "Birthplace of 8 US presidents 🎩",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const VIRGINIA_STATE_GUESSV1_DURATION = Virginia_BASE.durationInFrames;
export const VirginiaStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Virginia_BASE,
    hint: "Colonial Williamsburg: top US history destination 🏛️",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const VIRGINIA_STATE_GUESSV2_DURATION = Virginia_BASE.durationInFrames;
export const VirginiaStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Virginia_BASE,
    hint: "Shenandoah Valley runs 322 km through VA 🌄",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const VIRGINIA_STATE_GUESSV3_DURATION = Virginia_BASE.durationInFrames;
export const VirginiaStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Virginia_BASE,
    hint: "Largest concentration of federal workers 💼",
  }} />
);
