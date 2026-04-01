import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

// ── Data verified against official sources (March 2026) ──────────────────
const Delaware_BASE: BoundariesConfig = {
  video: "States Raw Files/USA/delaware.MP4",
  durationInFrames: 307,
  entityType: "state",
  gdp: "$103.3 billion",
  schools: "234",
  airports: "41",
  hospitals: "7",
  landArea: "5,047 km²",
  highestPoint: "Ebright Azimuth, 137 m",
};

// Style: State-Generic
export const DELAWARE_STATE_GENERIC_DURATION = Delaware_BASE.durationInFrames;
export const DelawareStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...Delaware_BASE,
    name: "Delaware",
    hint: "First state to ratify the US Constitution 📜",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const DELAWARE_STATE_GUESSV1_DURATION = Delaware_BASE.durationInFrames;
export const DelawareStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...Delaware_BASE,
    hint: "Cape Henlopen beaches draw 1M+ visitors/year 🏖️",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const DELAWARE_STATE_GUESSV2_DURATION = Delaware_BASE.durationInFrames;
export const DelawareStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...Delaware_BASE,
    hint: "Lowest highest point of any US state at 137 m 🏞️",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const DELAWARE_STATE_GUESSV3_DURATION = Delaware_BASE.durationInFrames;
export const DelawareStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...Delaware_BASE,
    hint: "65% of Fortune 500 companies incorporated here 🏢",
  }} />
);
