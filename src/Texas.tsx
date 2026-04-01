import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Texas_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Texas.MP4",
  durationInFrames: 229,
  entityType: "state",
  gdp: "$2,355.8 billion",
  schools: "9,265",
  airports: "299",
  hospitals: "621",
  landArea: "695,662 km²",
  highestPoint: "Guadalupe Peak, 2,667 m",
};

// Style: State-Generic
export const TEXAS_STATE_GENERIC_DURATION = Texas_BASE.durationInFrames;
export const TexasStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Texas_BASE,
    name: "Texas",
    hint: "Largest state in the contiguous US 🤠",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const TEXAS_STATE_GUESSV1_DURATION = Texas_BASE.durationInFrames;
export const TexasStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Texas_BASE,
    hint: "San Antonio's River Walk is a top US attraction 🌊",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const TEXAS_STATE_GUESSV2_DURATION = Texas_BASE.durationInFrames;
export const TexasStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Texas_BASE,
    hint: "Has 3 distinct climate zones 🌵",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const TEXAS_STATE_GUESSV3_DURATION = Texas_BASE.durationInFrames;
export const TexasStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Texas_BASE,
    hint: "Leads the US in total energy production ⚡",
  }} />
);
