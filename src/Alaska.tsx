import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Alaska_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Alaska.MP4",
  durationInFrames: 202,
  entityType: "state",
  gdp: "$68.2 billion",
  schools: "494",
  airports: "1,073",
  hospitals: "21",
  landArea: "1,723,337 km²",
  highestPoint: "Denali, 6,190 m",
};

// Style: State-Generic
export const ALASKA_STATE_GENERIC_DURATION = Alaska_BASE.durationInFrames;
export const AlaskaStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Alaska_BASE,
    name: "Alaska",
    hint: "Biggest US state — larger than Texas & CA combined 🗺️",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const ALASKA_STATE_GUESSV1_DURATION = Alaska_BASE.durationInFrames;
export const AlaskaStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Alaska_BASE,
    hint: "Northern Lights visible 200+ nights/year 🌌",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const ALASKA_STATE_GUESSV2_DURATION = Alaska_BASE.durationInFrames;
export const AlaskaStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Alaska_BASE,
    hint: "Home to 3M+ lakes & 100,000+ glaciers 🏔️",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const ALASKA_STATE_GUESSV3_DURATION = Alaska_BASE.durationInFrames;
export const AlaskaStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Alaska_BASE,
    hint: "Oil funds every resident's yearly dividend 💰",
  }} />
);
