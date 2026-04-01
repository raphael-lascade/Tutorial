import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Nebraska_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Nebraska.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$183.8 billion",
  schools: "1,098",
  airports: "239",
  hospitals: "115",
  landArea: "200,520 km²",
  highestPoint: "Panorama Point, 1,655 m",
};

// Style: State-Generic
export const NEBRASKA_STATE_GENERIC_DURATION = Nebraska_BASE.durationInFrames;
export const NebraskaStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Nebraska_BASE,
    name: "Nebraska",
    hint: "Sandhills: 20,000 sq miles of rolling dunes 🌾",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const NEBRASKA_STATE_GUESSV1_DURATION = Nebraska_BASE.durationInFrames;
export const NebraskaStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Nebraska_BASE,
    hint: "Chimney Rock: the Oregon Trail's iconic landmark 🪨",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const NEBRASKA_STATE_GUESSV2_DURATION = Nebraska_BASE.durationInFrames;
export const NebraskaStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Nebraska_BASE,
    hint: "Platte River hosts 80% of sandhill cranes 🦩",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const NEBRASKA_STATE_GUESSV3_DURATION = Nebraska_BASE.durationInFrames;
export const NebraskaStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Nebraska_BASE,
    hint: "Top US beef & corn producer 🌽",
  }} />
);
