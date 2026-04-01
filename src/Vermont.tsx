import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Vermont_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Vermont.MP4",
  durationInFrames: 202,
  entityType: "state",
  gdp: "$43.1 billion",
  schools: "306",
  airports: "17",
  hospitals: "14",
  landArea: "24,906 km²",
  highestPoint: "Mount Mansfield, 1,339 m",
};

// Style: State-Generic
export const VERMONT_STATE_GENERIC_DURATION = Vermont_BASE.durationInFrames;
export const VermontStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Vermont_BASE,
    name: "Vermont",
    hint: "Top maple syrup producer in the US 🍁",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const VERMONT_STATE_GUESSV1_DURATION = Vermont_BASE.durationInFrames;
export const VermontStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Vermont_BASE,
    hint: "Fall foliage draws millions every autumn 🍂",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const VERMONT_STATE_GUESSV2_DURATION = Vermont_BASE.durationInFrames;
export const VermontStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Vermont_BASE,
    hint: "Most forested US state by percentage 🌲",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const VERMONT_STATE_GUESSV3_DURATION = Vermont_BASE.durationInFrames;
export const VermontStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Vermont_BASE,
    hint: "Most craft breweries per capita in the US 🍺",
  }} />
);
