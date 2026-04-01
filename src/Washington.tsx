import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Washington_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Washington.MP4",
  durationInFrames: 207,
  entityType: "state",
  gdp: "$800.4 billion",
  schools: "2,494",
  airports: "135",
  hospitals: "97",
  landArea: "184,661 km²",
  highestPoint: "Mount Rainier, 4,392 m",
};

// Style: State-Generic
export const WASHINGTON_STATE_GENERIC_DURATION = Washington_BASE.durationInFrames;
export const WashingtonStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Washington_BASE,
    name: "Washington",
    hint: "Home of Microsoft and Amazon headquarters 💻",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const WASHINGTON_STATE_GUESSV1_DURATION = Washington_BASE.durationInFrames;
export const WashingtonStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Washington_BASE,
    hint: "Olympic Peninsula has a temperate rainforest 🌧️",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const WASHINGTON_STATE_GUESSV2_DURATION = Washington_BASE.durationInFrames;
export const WashingtonStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Washington_BASE,
    hint: "More glaciers than any other US state 🧊",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const WASHINGTON_STATE_GUESSV3_DURATION = Washington_BASE.durationInFrames;
export const WashingtonStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Washington_BASE,
    hint: "World's leading aerospace manufacturing hub ✈️",
  }} />
);
