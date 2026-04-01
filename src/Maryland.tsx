import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Maryland_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Maryland.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$515.0 billion",
  schools: "1,408",
  airports: "297",
  hospitals: "49",
  landArea: "32,133 km²",
  highestPoint: "Hoye Crest, 1,024 m",
};

// Style: State-Generic
export const MARYLAND_STATE_GENERIC_DURATION = Maryland_BASE.durationInFrames;
export const MarylandStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Maryland_BASE,
    name: "Maryland",
    hint: "Famous for Chesapeake Bay blue crabs 🦀",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const MARYLAND_STATE_GUESSV1_DURATION = Maryland_BASE.durationInFrames;
export const MarylandStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Maryland_BASE,
    hint: "Annapolis is the US sailing capital ⛵",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const MARYLAND_STATE_GUESSV2_DURATION = Maryland_BASE.durationInFrames;
export const MarylandStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Maryland_BASE,
    hint: "Chesapeake Bay is the largest US estuary 🌊",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const MARYLAND_STATE_GUESSV3_DURATION = Maryland_BASE.durationInFrames;
export const MarylandStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Maryland_BASE,
    hint: "Home to NIH, FDA & Johns Hopkins 🔬",
  }} />
);
