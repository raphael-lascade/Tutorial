import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Connecticut_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Connecticut.MP4",
  durationInFrames: 307,
  entityType: "state",
  gdp: "$341.9 billion",
  schools: "1,010",
  airports: "123",
  hospitals: "27",
  landArea: "12,542 km²",
  highestPoint: "Bear Mountain, 725 m",
};

// Style: State-Generic
export const CONNECTICUT_STATE_GENERIC_DURATION = Connecticut_BASE.durationInFrames;
export const ConnecticutStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Connecticut_BASE,
    name: "Connecticut",
    hint: "Highest per-capita income of any US state 💵",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const CONNECTICUT_STATE_GUESSV1_DURATION = Connecticut_BASE.durationInFrames;
export const ConnecticutStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Connecticut_BASE,
    hint: "Mystic Seaport: the nation's top maritime museum ⚓",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const CONNECTICUT_STATE_GUESSV2_DURATION = Connecticut_BASE.durationInFrames;
export const ConnecticutStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Connecticut_BASE,
    hint: "Smallest New England state by land area 🗺️",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const CONNECTICUT_STATE_GUESSV3_DURATION = Connecticut_BASE.durationInFrames;
export const ConnecticutStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Connecticut_BASE,
    hint: "Insurance & finance capital since the 1800s 🏦",
  }} />
);
