import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Louisiana_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Lousiana.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$318.0 billion",
  schools: "1,316",
  airports: "871",
  hospitals: "122",
  landArea: "134,649 km²",
  highestPoint: "Driskill Mountain, 163 m",
};

// Style: State-Generic
export const LOUISIANA_STATE_GENERIC_DURATION = Louisiana_BASE.durationInFrames;
export const LouisianaStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Louisiana_BASE,
    name: "Louisiana",
    hint: "Birthplace of jazz in New Orleans 🎷",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const LOUISIANA_STATE_GUESSV1_DURATION = Louisiana_BASE.durationInFrames;
export const LouisianaStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Louisiana_BASE,
    hint: "Mardi Gras draws millions to New Orleans 🎭",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const LOUISIANA_STATE_GUESSV2_DURATION = Louisiana_BASE.durationInFrames;
export const LouisianaStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Louisiana_BASE,
    hint: "Home to 1.5 million wild alligators 🐊",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const LOUISIANA_STATE_GUESSV3_DURATION = Louisiana_BASE.durationInFrames;
export const LouisianaStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Louisiana_BASE,
    hint: "New Orleans is a top US port by tonnage ⚓",
  }} />
);
