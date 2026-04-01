import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const NewJersey_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/New Jersey.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$806.9 billion",
  schools: "2,558",
  airports: "316",
  hospitals: "72",
  landArea: "22,590 km²",
  highestPoint: "High Point, 550 m",
};

// Style: State-Generic
export const NEWJERSEY_STATE_GENERIC_DURATION = NewJersey_BASE.durationInFrames;
export const NewJerseyStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...NewJersey_BASE,
    name: "New Jersey",
    hint: "Most densely populated US state 🏙️",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const NEWJERSEY_STATE_GUESSV1_DURATION = NewJersey_BASE.durationInFrames;
export const NewJerseyStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...NewJersey_BASE,
    hint: "Jersey Shore draws 20M+ beachgoers per year 🏖️",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const NEWJERSEY_STATE_GUESSV2_DURATION = NewJersey_BASE.durationInFrames;
export const NewJerseyStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...NewJersey_BASE,
    hint: "127 miles of Atlantic Ocean coastline 🌊",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const NEWJERSEY_STATE_GUESSV3_DURATION = NewJersey_BASE.durationInFrames;
export const NewJerseyStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...NewJersey_BASE,
    hint: "Pharma capital: HQ to J&J and Merck 💊",
  }} />
);
