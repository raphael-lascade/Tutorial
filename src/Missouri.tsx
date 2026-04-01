import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Missouri_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Missouri.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$428.9 billion",
  schools: "2,475",
  airports: "504",
  hospitals: "174",
  landArea: "180,533 km²",
  highestPoint: "Taum Sauk Mountain, 540 m",
};

// Style: State-Generic
export const MISSOURI_STATE_GENERIC_DURATION = Missouri_BASE.durationInFrames;
export const MissouriStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Missouri_BASE,
    name: "Missouri",
    hint: "Gateway Arch: tallest US monument 🏛️",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const MISSOURI_STATE_GUESSV1_DURATION = Missouri_BASE.durationInFrames;
export const MissouriStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Missouri_BASE,
    hint: "Branson hosts 100+ live entertainment shows 🎭",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const MISSOURI_STATE_GUESSV2_DURATION = Missouri_BASE.durationInFrames;
export const MissouriStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Missouri_BASE,
    hint: "Two of North America's greatest rivers meet here 🌊",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const MISSOURI_STATE_GUESSV3_DURATION = Missouri_BASE.durationInFrames;
export const MissouriStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Missouri_BASE,
    hint: "Anheuser-Busch hometown — beer capital 🍺",
  }} />
);
