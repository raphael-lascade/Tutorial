import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Illinois_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Illinois.MP4",
  durationInFrames: 208,
  entityType: "state",
  gdp: "$1,100.8 billion",
  schools: "4,400",
  airports: "1,119",
  hospitals: "180",
  landArea: "149,998 km²",
  highestPoint: "Charles Mound, 377 m",
};

// Style: State-Generic
export const ILLINOIS_STATE_GENERIC_DURATION = Illinois_BASE.durationInFrames;
export const IllinoisStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Illinois_BASE,
    name: "Illinois",
    hint: "Home of the world's first skyscraper 🌆",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const ILLINOIS_STATE_GUESSV1_DURATION = Illinois_BASE.durationInFrames;
export const IllinoisStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Illinois_BASE,
    hint: "Chicago: birthplace of blues & house music 🎸",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const ILLINOIS_STATE_GUESSV2_DURATION = Illinois_BASE.durationInFrames;
export const IllinoisStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Illinois_BASE,
    hint: "Borders Lake Michigan for 63 miles 🌊",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const ILLINOIS_STATE_GUESSV3_DURATION = Illinois_BASE.durationInFrames;
export const IllinoisStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Illinois_BASE,
    hint: "Top 2 corn-producing state in the US 🌽",
  }} />
);
