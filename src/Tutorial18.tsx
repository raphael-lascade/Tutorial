import { TutorialPart1, TutorialPart2, TutorialPart3, TutorialTemplate, getTutorialDuration, TutorialConfig } from "./TutorialTemplate";

const INTRO_DURATION = 67;   // 2.23s @ 30fps (hook-voiceover.mp3)
const MAIN_DURATION = 787;   // 26.24s @ 30fps (main-voiceover.mp3)
const OUTRO_DURATION = 76;   // 2.53s @ 30fps (Outro.mp4)

const CONFIG: TutorialConfig = {
  introDuration: INTRO_DURATION,
  mainDuration: MAIN_DURATION,
  outroDuration: OUTRO_DURATION,

  hookAudio: "Tutorial/hook-voiceover.mp3",
  mainAudio: "Tutorial/main-voiceover.mp3",
  screenRecording: "Tutorial/screen-trimmed-muted.mp4",
  introVideo: "Tutorial/sea route intro.MP4",
  outroVideo: "Tutorial/Outro.mp4",

  screenRecDurationSec: 76.0, // playbackRate ≈ 2.90x

  introVideoStartFrom: 90, // skip first 3s to reach main visual

  hookFontSize: 85,

  hookWords: [
    { text: "How do I make", highlight: false },
    { text: "Ship Route", highlight: true },
    { text: "on Travel Animator?", highlight: false },
  ],

  highlights: [],

  mainWords: [
    { text: "To", startFrame: 0, endFrame: 4 },
    { text: "create", startFrame: 4, endFrame: 13 },
    { text: "a", startFrame: 13, endFrame: 20 },
    { text: "sea", startFrame: 20, endFrame: 25 },
    { text: "or", startFrame: 25, endFrame: 34 },
    { text: "boat", startFrame: 34, endFrame: 41 },
    { text: "route,", startFrame: 41, endFrame: 50 },
    { text: "just", startFrame: 61, endFrame: 65 },
    { text: "tap", startFrame: 65, endFrame: 72 },
    { text: "your", startFrame: 72, endFrame: 79 },
    { text: "starting", startFrame: 79, endFrame: 92 },
    { text: "point", startFrame: 92, endFrame: 102 },
    { text: "and", startFrame: 102, endFrame: 111 },
    { text: "ending", startFrame: 111, endFrame: 122 },
    { text: "point", startFrame: 122, endFrame: 133 },
    { text: "on", startFrame: 133, endFrame: 142 },
    { text: "the", startFrame: 142, endFrame: 146 },
    { text: "map.", startFrame: 146, endFrame: 153 },
    { text: "Since", startFrame: 170, endFrame: 177 },
    { text: "you", startFrame: 177, endFrame: 183 },
    { text: "are", startFrame: 183, endFrame: 186 },
    { text: "crossing", startFrame: 186, endFrame: 199 },
    { text: "water,", startFrame: 199, endFrame: 212 },
    { text: "drag", startFrame: 226, endFrame: 230 },
    { text: "points", startFrame: 230, endFrame: 244 },
    { text: "along", startFrame: 244, endFrame: 253 },
    { text: "the", startFrame: 253, endFrame: 260 },
    { text: "route", startFrame: 260, endFrame: 267 },
    { text: "to", startFrame: 267, endFrame: 273 },
    { text: "give", startFrame: 273, endFrame: 278 },
    { text: "it", startFrame: 278, endFrame: 281 },
    { text: "a", startFrame: 281, endFrame: 283 },
    { text: "more", startFrame: 283, endFrame: 289 },
    { text: "natural", startFrame: 289, endFrame: 305 },
    { text: "curved", startFrame: 305, endFrame: 321 },
    { text: "path.", startFrame: 321, endFrame: 338 },
    { text: "Once", startFrame: 350, endFrame: 361 },
    { text: "you", startFrame: 361, endFrame: 367 },
    { text: "are", startFrame: 367, endFrame: 371 },
    { text: "happy", startFrame: 371, endFrame: 380 },
    { text: "with", startFrame: 380, endFrame: 387 },
    { text: "the", startFrame: 387, endFrame: 391 },
    { text: "route,", startFrame: 391, endFrame: 398 },
    { text: "long", startFrame: 414, endFrame: 420 },
    { text: "press", startFrame: 420, endFrame: 430 },
    { text: "your", startFrame: 430, endFrame: 437 },
    { text: "starting", startFrame: 437, endFrame: 449 },
    { text: "point", startFrame: 449, endFrame: 461 },
    { text: "and", startFrame: 461, endFrame: 473 },
    { text: "tap", startFrame: 473, endFrame: 482 },
    { text: "change", startFrame: 482, endFrame: 494 },
    { text: "model.", startFrame: 494, endFrame: 509 },
    { text: "Browse", startFrame: 532, endFrame: 548 },
    { text: "through", startFrame: 548, endFrame: 554 },
    { text: "the", startFrame: 554, endFrame: 559 },
    { text: "ship", startFrame: 559, endFrame: 566 },
    { text: "and", startFrame: 566, endFrame: 574 },
    { text: "boat", startFrame: 574, endFrame: 581 },
    { text: "models", startFrame: 581, endFrame: 594 },
    { text: "and", startFrame: 594, endFrame: 606 },
    { text: "pick", startFrame: 606, endFrame: 613 },
    { text: "the", startFrame: 613, endFrame: 620 },
    { text: "one", startFrame: 620, endFrame: 625 },
    { text: "you", startFrame: 625, endFrame: 630 },
    { text: "want.", startFrame: 630, endFrame: 639 },
    { text: "Then", startFrame: 639, endFrame: 660 },
    { text: "tap", startFrame: 660, endFrame: 680 },
    { text: "Preview", startFrame: 680, endFrame: 702 },
    { text: "and", startFrame: 702, endFrame: 719 },
    { text: "your", startFrame: 719, endFrame: 724 },
    { text: "sea", startFrame: 724, endFrame: 731 },
    { text: "route", startFrame: 731, endFrame: 739 },
    { text: "animation", startFrame: 739, endFrame: 748 },
    { text: "is", startFrame: 748, endFrame: 761 },
    { text: "ready.", startFrame: 761, endFrame: 787 },
  ],
};

export const TUTORIAL18_PART1_DURATION = CONFIG.introDuration;
export const TUTORIAL18_PART2_DURATION = CONFIG.mainDuration;
export const TUTORIAL18_PART3_DURATION = CONFIG.outroDuration;
export const TUTORIAL18_DURATION = getTutorialDuration(CONFIG);

export const Tutorial18Part1: React.FC = () => <TutorialPart1 config={CONFIG} />;
export const Tutorial18Part2: React.FC = () => <TutorialPart2 config={CONFIG} />;
export const Tutorial18Part3: React.FC = () => <TutorialPart3 config={CONFIG} />;
export const Tutorial18: React.FC = () => <TutorialTemplate config={CONFIG} />;
