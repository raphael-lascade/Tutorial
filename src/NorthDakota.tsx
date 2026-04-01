import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const NorthDakota_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/North Dakota.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$77.9 billion",
  schools: "511",
  airports: "356",
  hospitals: "46",
  landArea: "178,711 km²",
  highestPoint: "White Butte, 1,069 m",
};

// Style: State-Generic
export const NORTHDAKOTA_STATE_GENERIC_DURATION = NorthDakota_BASE.durationInFrames;
export const NorthDakotaStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...NorthDakota_BASE,
    name: "North Dakota",
    hint: "Sunflower capital of the United States 🌻",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const NORTHDAKOTA_STATE_GUESSV1_DURATION = NorthDakota_BASE.durationInFrames;
export const NorthDakotaStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...NorthDakota_BASE,
    hint: "Theodore Roosevelt NP: untamed badlands 🦬",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const NORTHDAKOTA_STATE_GUESSV2_DURATION = NorthDakota_BASE.durationInFrames;
export const NorthDakotaStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...NorthDakota_BASE,
    hint: "Badlands cut by the Little Missouri River 🏜️",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const NORTHDAKOTA_STATE_GUESSV3_DURATION = NorthDakota_BASE.durationInFrames;
export const NorthDakotaStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...NorthDakota_BASE,
    hint: "Top US producer of oil & wheat 🛢️",
  }} />
);
