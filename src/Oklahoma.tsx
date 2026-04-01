import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Oklahoma_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Oklahoma.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$255.9 billion",
  schools: "1,781",
  airports: "441",
  hospitals: "124",
  landArea: "181,038 km²",
  highestPoint: "Black Mesa, 1,516 m",
};

// Style: State-Generic
export const OKLAHOMA_STATE_GENERIC_DURATION = Oklahoma_BASE.durationInFrames;
export const OklahomaStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Oklahoma_BASE,
    name: "Oklahoma",
    hint: "Land run of 1889 opened the territory 🏇",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const OKLAHOMA_STATE_GUESSV1_DURATION = Oklahoma_BASE.durationInFrames;
export const OklahomaStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Oklahoma_BASE,
    hint: "Route 66 crosses the entire state 🛣️",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const OKLAHOMA_STATE_GUESSV2_DURATION = Oklahoma_BASE.durationInFrames;
export const OklahomaStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Oklahoma_BASE,
    hint: "Prairie tallgrass preserves over 40,000 acres 🌾",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const OKLAHOMA_STATE_GUESSV3_DURATION = Oklahoma_BASE.durationInFrames;
export const OklahomaStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Oklahoma_BASE,
    hint: "Top 5 US state for oil production 🛢️",
  }} />
);
