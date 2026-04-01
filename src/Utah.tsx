import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Utah_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Utah.MP4",
  durationInFrames: 202,
  entityType: "state",
  gdp: "$248.9 billion",
  schools: "1,003",
  airports: "43",
  hospitals: "49",
  landArea: "219,882 km²",
  highestPoint: "Kings Peak, 4,123 m",
};

// Style: State-Generic
export const UTAH_STATE_GENERIC_DURATION = Utah_BASE.durationInFrames;
export const UtahStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Utah_BASE,
    name: "Utah",
    hint: "Home of the Great Salt Lake 🧂",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const UTAH_STATE_GUESSV1_DURATION = Utah_BASE.durationInFrames;
export const UtahStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Utah_BASE,
    hint: "Zion & Arches rank among the top US parks 🏜️",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const UTAH_STATE_GUESSV2_DURATION = Utah_BASE.durationInFrames;
export const UtahStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Utah_BASE,
    hint: "Contains 5 national parks — the Mighty Five 🌄",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const UTAH_STATE_GUESSV3_DURATION = Utah_BASE.durationInFrames;
export const UtahStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Utah_BASE,
    hint: "One of the fastest-growing US economies 📈",
  }} />
);
