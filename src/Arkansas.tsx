import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Arkansas_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Arkansas.MP4",
  durationInFrames: 205,
  entityType: "state",
  gdp: "$178.1 billion",
  schools: "1,101",
  airports: "311",
  hospitals: "81",
  landArea: "137,732 km²",
  highestPoint: "Magazine Mountain, 839 m",
};

// Style: State-Generic
export const ARKANSAS_STATE_GENERIC_DURATION = Arkansas_BASE.durationInFrames;
export const ArkansasStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Arkansas_BASE,
    name: "Arkansas",
    hint: "Walmart was founded here in Rogers, 1962 🛒",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const ARKANSAS_STATE_GUESSV1_DURATION = Arkansas_BASE.durationInFrames;
export const ArkansasStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Arkansas_BASE,
    hint: "Buffalo National River: America's first national river 🛶",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const ARKANSAS_STATE_GUESSV2_DURATION = Arkansas_BASE.durationInFrames;
export const ArkansasStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Arkansas_BASE,
    hint: "Ozark highlands cover half the state 🌲",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const ARKANSAS_STATE_GUESSV3_DURATION = Arkansas_BASE.durationInFrames;
export const ArkansasStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Arkansas_BASE,
    hint: "#1 US broiler chicken producer 🐔",
  }} />
);
