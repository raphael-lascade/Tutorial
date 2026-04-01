import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
// GDP:          $325.3B — BEA / FRED (ALNGSP), 2024 annual
// Schools:      1,524   — NCES CCD Table 2, SY 2023-24
// Airports:     73      — FAA NPIAS 2025-2029
// Hospitals:    106     — Alabama Hospital Association, Oct 2024 (community hospitals)
// Land Area:    131,486 km² — US Census Bureau
// Highest Pt:   Cheaha Mountain, 735 m — USGS

const ALABAMA_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Alabama.MP4",
  durationInFrames: 202,
  entityType: "state",
  gdp: "$325.3 billion",
  schools: "1,524",
  airports: "73",
  hospitals: "106",
  landArea: "131,486 km²",
  highestPoint: "Cheaha Mountain, 735 m",
};

// Style: State-Generic
export const ALABAMA_STATE_GENERIC_DURATION = ALABAMA_BASE.durationInFrames;
export const AlabamaStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...ALABAMA_BASE,
    name: "Alabama",
    hint: "Birthplace of the Saturn V rocket 🚀",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const ALABAMA_STATE_GUESSV1_DURATION = ALABAMA_BASE.durationInFrames;
export const AlabamaStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...ALABAMA_BASE,
    hint: "Has the world's largest golf trail — 11 sites and 468 holes ⛳",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const ALABAMA_STATE_GUESSV2_DURATION = ALABAMA_BASE.durationInFrames;
export const AlabamaStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...ALABAMA_BASE,
    hint: "Its rivers hold 60% of North America's freshwater mussel species 🌊",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const ALABAMA_STATE_GUESSV3_DURATION = ALABAMA_BASE.durationInFrames;
export const AlabamaStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...ALABAMA_BASE,
    hint: "2nd largest producer of broiler chickens in the US 🐔",
  }} />
);
