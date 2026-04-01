import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Michigan_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Michigan.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$676.0 billion",
  schools: "3,485",
  airports: "490",
  hospitals: "180",
  landArea: "250,493 km²",
  highestPoint: "Mount Arvon, 603 m",
};

// Style: State-Generic
export const MICHIGAN_STATE_GENERIC_DURATION = Michigan_BASE.durationInFrames;
export const MichiganStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Michigan_BASE,
    name: "Michigan",
    hint: "Surrounded by 4 of the 5 Great Lakes 🌊",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const MICHIGAN_STATE_GUESSV1_DURATION = Michigan_BASE.durationInFrames;
export const MichiganStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Michigan_BASE,
    hint: "Mackinac Island bans all cars 🚲",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const MICHIGAN_STATE_GUESSV2_DURATION = Michigan_BASE.durationInFrames;
export const MichiganStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Michigan_BASE,
    hint: "Has 3,288 miles of Great Lakes coastline 🏖️",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const MICHIGAN_STATE_GUESSV3_DURATION = Michigan_BASE.durationInFrames;
export const MichiganStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Michigan_BASE,
    hint: "Auto capital — birthplace of Ford Motor Co. 🚗",
  }} />
);
