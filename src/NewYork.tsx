import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const NewYork_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/New York.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$2,150.0 billion",
  schools: "4,812",
  airports: "581",
  hospitals: "182",
  landArea: "122,284 km²",
  highestPoint: "Mount Marcy, 1,629 m",
};

// Style: State-Generic
export const NEWYORK_STATE_GENERIC_DURATION = NewYork_BASE.durationInFrames;
export const NewYorkStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...NewYork_BASE,
    name: "New York",
    hint: "Home to the Statue of Liberty 🗽",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const NEWYORK_STATE_GUESSV1_DURATION = NewYork_BASE.durationInFrames;
export const NewYorkStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...NewYork_BASE,
    hint: "Broadway hosts 40+ world-class theaters 🎭",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const NEWYORK_STATE_GUESSV2_DURATION = NewYork_BASE.durationInFrames;
export const NewYorkStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...NewYork_BASE,
    hint: "Niagara Falls borders NY & Canada 💧",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const NEWYORK_STATE_GUESSV3_DURATION = NewYork_BASE.durationInFrames;
export const NewYorkStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...NewYork_BASE,
    hint: "Wall Street drives global finance 📈",
  }} />
);
