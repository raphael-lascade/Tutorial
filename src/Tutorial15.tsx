import { TutorialPart1, TutorialPart2, TutorialPart3, TutorialTemplate, getTutorialDuration, TutorialConfig } from "./TutorialTemplate";

const INTRO_DURATION = 96;   // 3.20s @ 30fps (hook-voiceover.mp3)
const MAIN_DURATION = 517;   // 17.23s @ 30fps (main-voiceover.mp3)
const OUTRO_DURATION = 76;   // 2.53s @ 30fps (Outro.mp4)

const CONFIG: TutorialConfig = {
  introDuration: INTRO_DURATION,
  mainDuration: MAIN_DURATION,
  outroDuration: OUTRO_DURATION,

  hookAudio: "Tutorial/hook-voiceover.mp3",
  mainAudio: "Tutorial/main-voiceover.mp3",
  screenRecording: "Tutorial/screen-trimmed-muted.mp4",
  outroVideo: "Tutorial/Outro.mp4",

  screenRecDurationSec: 25.5, // playbackRate ≈ 1.48x

  hookFontSize: 80,

  hookWords: [
    { text: "How do I set the", highlight: false },
    { text: "starting & ending", highlight: true },
    { text: "point correctly?", highlight: false },
  ],

  highlights: [],

  mainWords: [
    { text: "To", startFrame: 0, endFrame: 4 },
    { text: "set", startFrame: 4, endFrame: 10 },
    { text: "your", startFrame: 10, endFrame: 14 },
    { text: "starting", startFrame: 14, endFrame: 25 },
    { text: "and", startFrame: 25, endFrame: 30 },
    { text: "ending", startFrame: 30, endFrame: 38 },
    { text: "points", startFrame: 38, endFrame: 49 },
    { text: "accurately,", startFrame: 49, endFrame: 69 },
    { text: "tap", startFrame: 86, endFrame: 89 },
    { text: "the", startFrame: 89, endFrame: 95 },
    { text: "Locations", startFrame: 95, endFrame: 112 },
    { text: "button", startFrame: 112, endFrame: 123 },
    { text: "at", startFrame: 123, endFrame: 128 },
    { text: "the", startFrame: 128, endFrame: 133 },
    { text: "bottom", startFrame: 133, endFrame: 140 },
    { text: "of", startFrame: 140, endFrame: 145 },
    { text: "the", startFrame: 145, endFrame: 148 },
    { text: "screen.", startFrame: 148, endFrame: 158 },
    { text: "Type", startFrame: 175, endFrame: 183 },
    { text: "in", startFrame: 183, endFrame: 188 },
    { text: "your", startFrame: 188, endFrame: 192 },
    { text: "starting", startFrame: 192, endFrame: 203 },
    { text: "location,", startFrame: 203, endFrame: 220 },
    { text: "then", startFrame: 232, endFrame: 239 },
    { text: "add", startFrame: 239, endFrame: 247 },
    { text: "your", startFrame: 247, endFrame: 253 },
    { text: "destination", startFrame: 253, endFrame: 268 },
    { text: "the", startFrame: 268, endFrame: 279 },
    { text: "same", startFrame: 279, endFrame: 287 },
    { text: "way.", startFrame: 287, endFrame: 297 },
    { text: "Travel", startFrame: 315, endFrame: 326 },
    { text: "Animator", startFrame: 326, endFrame: 343 },
    { text: "will", startFrame: 343, endFrame: 348 },
    { text: "pin", startFrame: 348, endFrame: 356 },
    { text: "the", startFrame: 356, endFrame: 363 },
    { text: "exact", startFrame: 363, endFrame: 373 },
    { text: "places", startFrame: 373, endFrame: 388 },
    { text: "you", startFrame: 388, endFrame: 396 },
    { text: "want,", startFrame: 396, endFrame: 407 },
    { text: "so", startFrame: 418, endFrame: 425 },
    { text: "your", startFrame: 425, endFrame: 431 },
    { text: "route", startFrame: 431, endFrame: 438 },
    { text: "starts", startFrame: 438, endFrame: 450 },
    { text: "and", startFrame: 450, endFrame: 463 },
    { text: "ends", startFrame: 463, endFrame: 477 },
    { text: "in", startFrame: 477, endFrame: 484 },
    { text: "the", startFrame: 484, endFrame: 487 },
    { text: "right", startFrame: 487, endFrame: 493 },
    { text: "spot.", startFrame: 493, endFrame: 517 },
  ],
};

export const TUTORIAL15_PART1_DURATION = CONFIG.introDuration;
export const TUTORIAL15_PART2_DURATION = CONFIG.mainDuration;
export const TUTORIAL15_PART3_DURATION = CONFIG.outroDuration;
export const TUTORIAL15_DURATION = getTutorialDuration(CONFIG);

export const Tutorial15Part1: React.FC = () => <TutorialPart1 config={CONFIG} />;
export const Tutorial15Part2: React.FC = () => <TutorialPart2 config={CONFIG} />;
export const Tutorial15Part3: React.FC = () => <TutorialPart3 config={CONFIG} />;
export const Tutorial15: React.FC = () => <TutorialTemplate config={CONFIG} />;
