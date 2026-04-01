import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const NewMexico_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/New Mexico.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$138.5 billion",
  schools: "888",
  airports: "171",
  hospitals: "55",
  landArea: "315,194 km²",
  highestPoint: "Wheeler Peak, 4,011 m",
};

// Style: State-Generic
export const NEWMEXICO_STATE_GENERIC_DURATION = NewMexico_BASE.durationInFrames;
export const NewMexicoStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...NewMexico_BASE,
    name: "New Mexico",
    hint: "Land of Enchantment — 300+ days of sunshine ☀️",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const NEWMEXICO_STATE_GUESSV1_DURATION = NewMexico_BASE.durationInFrames;
export const NewMexicoStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...NewMexico_BASE,
    hint: "Albuquerque hosts the world's largest balloon fiesta 🎈",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const NEWMEXICO_STATE_GUESSV2_DURATION = NewMexico_BASE.durationInFrames;
export const NewMexicoStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...NewMexico_BASE,
    hint: "White Sands: world's largest gypsum dunefield 🏜️",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const NEWMEXICO_STATE_GUESSV3_DURATION = NewMexico_BASE.durationInFrames;
export const NewMexicoStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...NewMexico_BASE,
    hint: "Top 3 US energy producer — oil & gas ⛽",
  }} />
);
