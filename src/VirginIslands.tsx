import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const VirginIslands_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Virgin Islands.MP4",
  durationInFrames: 191,
  entityType: "state",
  gdp: "$4.2 billion",
  schools: "32",
  airports: "2",
  hospitals: "2",
  landArea: "347 km²",
  highestPoint: "Crown Mountain, 474 m",
};

// Style: State-Generic
export const VIRGINISLANDS_STATE_GENERIC_DURATION = VirginIslands_BASE.durationInFrames;
export const VirginIslandsStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...VirginIslands_BASE,
    name: "Virgin Islands",
    hint: "Only US territory to drive on the left 🚗",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const VIRGINISLANDS_STATE_GUESSV1_DURATION = VirginIslands_BASE.durationInFrames;
export const VirginIslandsStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...VirginIslands_BASE,
    hint: "St. John has 60% national park land 🏝️",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const VIRGINISLANDS_STATE_GUESSV2_DURATION = VirginIslands_BASE.durationInFrames;
export const VirginIslandsStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...VirginIslands_BASE,
    hint: "Coral Bay is one of the Caribbean's oldest ports ⚓",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const VIRGINISLANDS_STATE_GUESSV3_DURATION = VirginIslands_BASE.durationInFrames;
export const VirginIslandsStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...VirginIslands_BASE,
    hint: "Tourism accounts for ~80% of GDP 🌴",
  }} />
);
