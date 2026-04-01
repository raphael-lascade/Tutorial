import { BoundariesTemplate, BoundariesConfig } from "./BoundariesTemplate";

/**
 * NAMING CONVENTION FOR OUTPUTS
 * ─────────────────────────────────────────────────────────────────
 * State videos:
 *   [StateName]-State-Generic.mp4
 *   [StateName]-State-GuessV1.mp4  (hint: traveler/tourism fact)
 *   [StateName]-State-GuessV2.mp4  (hint: geography/nature fact)
 *   [StateName]-State-GuessV3.mp4  (hint: economy/people fact)
 *
 * Country videos:
 *   [CountryName]-Country-Generic.mp4
 *   [CountryName]-Country-GuessV1.mp4
 *   [CountryName]-Country-GuessV2.mp4
 *   [CountryName]-Country-GuessV3.mp4
 *
 * The ONLY difference between V1/V2/V3 is the `hint` (special fact).
 * ─────────────────────────────────────────────────────────────────
 */

// ── California — State demo ───────────────────────────────────────────────
const CALIFORNIA_BASE: BoundariesConfig = {
  video: "California.MP4",
  durationInFrames: 265,
  entityType: "state",
  gdp: "$3.9 trillion",
  schools: "10,474",
  airports: "284",
  hospitals: "419",
  landArea: "423,970 km²",
  highestPoint: "Mt. Whitney, 4,421 m",
};

// Style: State-Generic
export const CALIFORNIA_STATE_GENERIC_DURATION = CALIFORNIA_BASE.durationInFrames;
export const CaliforniaStateGeneric: React.FC = () => (
  <BoundariesTemplate config={{
    ...CALIFORNIA_BASE,
    name: "California",
    hint: "Home to Hollywood, Yosemite & Silicon Valley 🌟",
  }} />
);

// Style: State-GuessV1 — traveler/tourism hint
export const CALIFORNIA_STATE_GUESSV1_DURATION = CALIFORNIA_BASE.durationInFrames;
export const CaliforniaStateGuessV1: React.FC = () => (
  <BoundariesTemplate config={{
    ...CALIFORNIA_BASE,
    hint: "Welcomes over 250 million tourists every year ✈️",
  }} />
);

// Style: State-GuessV2 — geography/nature hint
export const CALIFORNIA_STATE_GUESSV2_DURATION = CALIFORNIA_BASE.durationInFrames;
export const CaliforniaStateGuessV2: React.FC = () => (
  <BoundariesTemplate config={{
    ...CALIFORNIA_BASE,
    hint: "Has the tallest peak in the contiguous US ⛰️",
  }} />
);

// Style: State-GuessV3 — economy/people hint
export const CALIFORNIA_STATE_GUESSV3_DURATION = CALIFORNIA_BASE.durationInFrames;
export const CaliforniaStateGuessV3: React.FC = () => (
  <BoundariesTemplate config={{
    ...CALIFORNIA_BASE,
    hint: "Its economy is larger than most countries 💰",
  }} />
);
