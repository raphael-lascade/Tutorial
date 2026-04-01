import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Maine_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/Maine.MP4",
  durationInFrames: 211,
  entityType: "state",
  gdp: "$93.7 billion",
  schools: "593",
  airports: "280",
  hospitals: "33",
  landArea: "91,646 km²",
  highestPoint: "Mount Katahdin, 1,607 m",
};

// Style: State-Generic
export const MAINE_STATE_GENERIC_DURATION = Maine_BASE.durationInFrames;
export const MaineStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Maine_BASE,
    name: "Maine",
    hint: "Supplies over 80% of all US lobster 🦞",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const MAINE_STATE_GUESSV1_DURATION = Maine_BASE.durationInFrames;
export const MaineStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Maine_BASE,
    hint: "First US state to see the sunrise each day 🌅",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const MAINE_STATE_GUESSV2_DURATION = Maine_BASE.durationInFrames;
export const MaineStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Maine_BASE,
    hint: "90% of the state is covered by forest 🌲",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const MAINE_STATE_GUESSV3_DURATION = Maine_BASE.durationInFrames;
export const MaineStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Maine_BASE,
    hint: "Nation's largest wild blueberry producer 🫐",
  }} />
);
