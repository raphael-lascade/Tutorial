import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Tennessee_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Tennessee.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$432.2 billion",
  schools: "1,799",
  airports: "78",
  hospitals: "123",
  landArea: "109,153 km²",
  highestPoint: "Clingmans Dome, 2,025 m",
};

// Style: State-Generic
export const TENNESSEE_STATE_GENERIC_DURATION = Tennessee_BASE.durationInFrames;
export const TennesseeStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Tennessee_BASE,
    name: "Tennessee",
    hint: "Birthplace of country music 🎸",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const TENNESSEE_STATE_GUESSV1_DURATION = Tennessee_BASE.durationInFrames;
export const TennesseeStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Tennessee_BASE,
    hint: "Graceland hosts 600,000+ visitors per year 🎶",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const TENNESSEE_STATE_GUESSV2_DURATION = Tennessee_BASE.durationInFrames;
export const TennesseeStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Tennessee_BASE,
    hint: "Great Smoky Mtns: most visited US national park 🌿",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const TENNESSEE_STATE_GUESSV3_DURATION = Tennessee_BASE.durationInFrames;
export const TennesseeStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Tennessee_BASE,
    hint: "Major US auto manufacturing hub 🚗",
  }} />
);
