import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Arizona_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Arizona.MP4",
  durationInFrames: 205,
  entityType: "state",
  gdp: "$530.1 billion",
  schools: "2,427",
  airports: "998",
  hospitals: "75",
  landArea: "295,234 km²",
  highestPoint: "Humphreys Peak, 3,851 m",
};

// Style: State-Generic
export const ARIZONA_STATE_GENERIC_DURATION = Arizona_BASE.durationInFrames;
export const ArizonaStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Arizona_BASE,
    name: "Arizona",
    hint: "Grand Canyon draws 6M+ visitors annually 🏜️",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const ARIZONA_STATE_GUESSV1_DURATION = Arizona_BASE.durationInFrames;
export const ArizonaStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Arizona_BASE,
    hint: "Sedona's red rocks are a global wellness hotspot 🧘",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const ARIZONA_STATE_GUESSV2_DURATION = Arizona_BASE.durationInFrames;
export const ArizonaStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Arizona_BASE,
    hint: "Sonoran Desert has 2,000+ plant species 🌵",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const ARIZONA_STATE_GUESSV3_DURATION = Arizona_BASE.durationInFrames;
export const ArizonaStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Arizona_BASE,
    hint: "Semiconductor hub — home to Intel & TSMC 💻",
  }} />
);
