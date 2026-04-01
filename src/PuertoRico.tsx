import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const PuertoRico_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Puerto Rico.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$118.0 billion",
  schools: "858",
  airports: "30",
  hospitals: "67",
  landArea: "8,868 km²",
  highestPoint: "Cerro de Punta, 1,338 m",
};

// Style: State-Generic
export const PUERTORICO_STATE_GENERIC_DURATION = PuertoRico_BASE.durationInFrames;
export const PuertoRicoStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...PuertoRico_BASE,
    name: "Puerto Rico",
    hint: "US territory since 1898, 3.2M residents 🇵🇷",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const PUERTORICO_STATE_GUESSV1_DURATION = PuertoRico_BASE.durationInFrames;
export const PuertoRicoStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...PuertoRico_BASE,
    hint: "El Yunque: the only US tropical rainforest 🌴",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const PUERTORICO_STATE_GUESSV2_DURATION = PuertoRico_BASE.durationInFrames;
export const PuertoRicoStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...PuertoRico_BASE,
    hint: "Caribbean island with 270+ miles of coastline 🏝️",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const PUERTORICO_STATE_GUESSV3_DURATION = PuertoRico_BASE.durationInFrames;
export const PuertoRicoStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...PuertoRico_BASE,
    hint: "Pharma industry drives most of GDP 💊",
  }} />
);
