import { TutorialPart1, TutorialPart2, TutorialPart3, TutorialTemplate, getTutorialDuration, TutorialConfig } from "./TutorialTemplate";

const INTRO_DURATION = 117;  // 3.90s @ 30fps (hook-voiceover.mp3)
const MAIN_DURATION = 553;   // 18.44s @ 30fps (main-voiceover.mp3)
const OUTRO_DURATION = 76;   // 2.53s @ 30fps (Outro.mp4)

const CONFIG: TutorialConfig = {
  introDuration: INTRO_DURATION,
  mainDuration: MAIN_DURATION,
  outroDuration: OUTRO_DURATION,

  hookAudio: "Tutorial/hook-voiceover.mp3",
  mainAudio: "Tutorial/main-voiceover.mp3",
  screenRecording: "Tutorial/screen-trimmed-muted.mp4",
  outroVideo: "Tutorial/Outro.mp4",

  screenRecDurationSec: 31.0, // playbackRate ≈ 1.68x

  hookWords: [
    { text: "How do I", highlight: false },
    { text: "edit a saved trip", highlight: true },
    { text: "after creating it?", highlight: false },
  ],

  highlights: [],

  mainWords: [
    { text: "To", startFrame: 0, endFrame: 5 },
    { text: "edit", startFrame: 5, endFrame: 13 },
    { text: "a", startFrame: 13, endFrame: 17 },
    { text: "saved", startFrame: 17, endFrame: 28 },
    { text: "route,", startFrame: 28, endFrame: 36 },
    { text: "tap", startFrame: 51, endFrame: 54 },
    { text: "the", startFrame: 54, endFrame: 60 },
    { text: "Routes", startFrame: 60, endFrame: 67 },
    { text: "button", startFrame: 67, endFrame: 76 },
    { text: "from", startFrame: 76, endFrame: 82 },
    { text: "the", startFrame: 82, endFrame: 87 },
    { text: "home", startFrame: 87, endFrame: 92 },
    { text: "screen", startFrame: 92, endFrame: 103 },
    { text: "and", startFrame: 103, endFrame: 111 },
    { text: "select", startFrame: 111, endFrame: 121 },
    { text: "Load", startFrame: 121, endFrame: 134 },
    { text: "Route.", startFrame: 134, endFrame: 143 },
    { text: "You", startFrame: 158, endFrame: 164 },
    { text: "will", startFrame: 164, endFrame: 167 },
    { text: "see", startFrame: 167, endFrame: 174 },
    { text: "all", startFrame: 174, endFrame: 184 },
    { text: "your", startFrame: 184, endFrame: 188 },
    { text: "saved", startFrame: 188, endFrame: 199 },
    { text: "routes,", startFrame: 199, endFrame: 209 },
    { text: "tap", startFrame: 223, endFrame: 226 },
    { text: "the", startFrame: 226, endFrame: 233 },
    { text: "one", startFrame: 233, endFrame: 238 },
    { text: "you", startFrame: 238, endFrame: 242 },
    { text: "want", startFrame: 242, endFrame: 248 },
    { text: "to", startFrame: 248, endFrame: 253 },
    { text: "edit.", startFrame: 253, endFrame: 261 },
    { text: "It", startFrame: 278, endFrame: 287 },
    { text: "will", startFrame: 287, endFrame: 290 },
    { text: "load", startFrame: 290, endFrame: 299 },
    { text: "right", startFrame: 299, endFrame: 307 },
    { text: "into", startFrame: 307, endFrame: 314 },
    { text: "the", startFrame: 314, endFrame: 319 },
    { text: "map", startFrame: 319, endFrame: 326 },
    { text: "so", startFrame: 326, endFrame: 334 },
    { text: "you", startFrame: 334, endFrame: 339 },
    { text: "can", startFrame: 339, endFrame: 343 },
    { text: "make", startFrame: 343, endFrame: 348 },
    { text: "any", startFrame: 348, endFrame: 357 },
    { text: "changes", startFrame: 357, endFrame: 371 },
    { text: "you", startFrame: 371, endFrame: 377 },
    { text: "want.", startFrame: 377, endFrame: 387 },
    { text: "When", startFrame: 407, endFrame: 413 },
    { text: "you", startFrame: 413, endFrame: 416 },
    { text: "are", startFrame: 416, endFrame: 419 },
    { text: "done,", startFrame: 419, endFrame: 428 },
    { text: "you", startFrame: 440, endFrame: 442 },
    { text: "can", startFrame: 442, endFrame: 446 },
    { text: "either", startFrame: 446, endFrame: 452 },
    { text: "save", startFrame: 452, endFrame: 462 },
    { text: "it", startFrame: 462, endFrame: 466 },
    { text: "as", startFrame: 466, endFrame: 470 },
    { text: "a", startFrame: 470, endFrame: 473 },
    { text: "new", startFrame: 473, endFrame: 478 },
    { text: "route", startFrame: 478, endFrame: 488 },
    { text: "or", startFrame: 488, endFrame: 502 },
    { text: "replace", startFrame: 502, endFrame: 514 },
    { text: "the", startFrame: 514, endFrame: 522 },
    { text: "existing", startFrame: 522, endFrame: 534 },
    { text: "one.", startFrame: 534, endFrame: 553 },
  ],
};

export const TUTORIAL16_PART1_DURATION = CONFIG.introDuration;
export const TUTORIAL16_PART2_DURATION = CONFIG.mainDuration;
export const TUTORIAL16_PART3_DURATION = CONFIG.outroDuration;
export const TUTORIAL16_DURATION = getTutorialDuration(CONFIG);

export const Tutorial16Part1: React.FC = () => <TutorialPart1 config={CONFIG} />;
export const Tutorial16Part2: React.FC = () => <TutorialPart2 config={CONFIG} />;
export const Tutorial16Part3: React.FC = () => <TutorialPart3 config={CONFIG} />;
export const Tutorial16: React.FC = () => <TutorialTemplate config={CONFIG} />;
