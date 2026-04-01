import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Indiana_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Indiana.MP4",
  durationInFrames: 208,
  entityType: "state",
  gdp: "$496.8 billion",
  schools: "1,917",
  airports: "795",
  hospitals: "120",
  landArea: "94,321 km²",
  highestPoint: "Hoosier Hill, 383 m",
};

// Style: State-Generic
export const INDIANA_STATE_GENERIC_DURATION = Indiana_BASE.durationInFrames;
export const IndianaStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Indiana_BASE,
    name: "Indiana",
    hint: "Home of the Indianapolis 500 race since 1911 🏎️",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const INDIANA_STATE_GUESSV1_DURATION = Indiana_BASE.durationInFrames;
export const IndianaStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Indiana_BASE,
    hint: "Indiana Dunes stretch 15 miles of lakefront 🏖️",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const INDIANA_STATE_GUESSV2_DURATION = Indiana_BASE.durationInFrames;
export const IndianaStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Indiana_BASE,
    hint: "94% of land is devoted to agriculture 🌾",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const INDIANA_STATE_GUESSV3_DURATION = Indiana_BASE.durationInFrames;
export const IndianaStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Indiana_BASE,
    hint: "Top US steel-producing state 🏭",
  }} />
);
