import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Massachusetts_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Massachusetts.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$737.9 billion",
  schools: "1,832",
  airports: "276",
  hospitals: "64",
  landArea: "27,336 km²",
  highestPoint: "Mount Greylock, 1,065 m",
};

// Style: State-Generic
export const MASSACHUSETTS_STATE_GENERIC_DURATION = Massachusetts_BASE.durationInFrames;
export const MassachusettsStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Massachusetts_BASE,
    name: "Massachusetts",
    hint: "Basketball & volleyball were both invented here 🏀",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const MASSACHUSETTS_STATE_GUESSV1_DURATION = Massachusetts_BASE.durationInFrames;
export const MassachusettsStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Massachusetts_BASE,
    hint: "Plymouth Rock & Mayflower history draws millions 🚢",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const MASSACHUSETTS_STATE_GUESSV2_DURATION = Massachusetts_BASE.durationInFrames;
export const MassachusettsStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Massachusetts_BASE,
    hint: "Cape Cod & Martha's Vineyard: iconic coasts 🏖️",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const MASSACHUSETTS_STATE_GUESSV3_DURATION = Massachusetts_BASE.durationInFrames;
export const MassachusettsStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Massachusetts_BASE,
    hint: "Home to Harvard, MIT & 100+ universities 🎓",
  }} />
);
