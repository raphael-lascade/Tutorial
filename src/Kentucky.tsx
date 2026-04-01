import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Kentucky_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Kentucky.MP4",
  durationInFrames: 208,
  entityType: "state",
  gdp: "$283.3 billion",
  schools: "1,544",
  airports: "338",
  hospitals: "94",
  landArea: "104,659 km²",
  highestPoint: "Black Mountain, 1,264 m",
};

// Style: State-Generic
export const KENTUCKY_STATE_GENERIC_DURATION = Kentucky_BASE.durationInFrames;
export const KentuckyStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Kentucky_BASE,
    name: "Kentucky",
    hint: "Horse capital of the world, home of the Derby 🐎",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const KENTUCKY_STATE_GUESSV1_DURATION = Kentucky_BASE.durationInFrames;
export const KentuckyStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Kentucky_BASE,
    hint: "95% of the world's bourbon is made here 🥃",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const KENTUCKY_STATE_GUESSV2_DURATION = Kentucky_BASE.durationInFrames;
export const KentuckyStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Kentucky_BASE,
    hint: "Mammoth Cave is the world's longest cave 🕳️",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const KENTUCKY_STATE_GUESSV3_DURATION = Kentucky_BASE.durationInFrames;
export const KentuckyStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Kentucky_BASE,
    hint: "Major Toyota & Ford manufacturing state 🚗",
  }} />
);
