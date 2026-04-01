import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Florida_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/florida.MP4",
  durationInFrames: 249,
  entityType: "state",
  gdp: "$1,624.6 billion",
  schools: "4,229",
  airports: "1,363",
  hospitals: "207",
  landArea: "139,670 km²",
  highestPoint: "Britton Hill, 105 m",
};

// Style: State-Generic
export const FLORIDA_STATE_GENERIC_DURATION = Florida_BASE.durationInFrames;
export const FloridaStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Florida_BASE,
    name: "Florida",
    hint: "Most visited US state — 130M+ tourists/year ☀️",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const FLORIDA_STATE_GUESSV1_DURATION = Florida_BASE.durationInFrames;
export const FloridaStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Florida_BASE,
    hint: "Walt Disney World: world's most visited theme park 🎢",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const FLORIDA_STATE_GUESSV2_DURATION = Florida_BASE.durationInFrames;
export const FloridaStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Florida_BASE,
    hint: "Everglades: alligators & crocodiles coexist 🐊",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const FLORIDA_STATE_GUESSV3_DURATION = Florida_BASE.durationInFrames;
export const FloridaStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Florida_BASE,
    hint: "3rd largest state economy in the US 📈",
  }} />
);
