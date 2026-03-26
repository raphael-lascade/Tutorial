import { TutorialPart1, TutorialPart2, TutorialPart3, TutorialTemplate, getTutorialDuration, TutorialConfig } from "./TutorialTemplate";

const INTRO_DURATION = 92;   // 3.07s @ 30fps (hook-voiceover.mp3)
const MAIN_DURATION = 493;   // 16.44s @ 30fps (main-voiceover.mp3)
const OUTRO_DURATION = 76;   // 2.53s @ 30fps (Outro.mp4)

const CONFIG: TutorialConfig = {
  introDuration: INTRO_DURATION,
  mainDuration: MAIN_DURATION,
  outroDuration: OUTRO_DURATION,

  hookAudio: "Tutorial/hook-voiceover.mp3",
  mainAudio: "Tutorial/main-voiceover.mp3",
  screenRecording: "Tutorial/screen-trimmed-muted.mp4",
  outroVideo: "Tutorial/Outro.mp4",

  screenRecDurationSec: 37.0, // playbackRate ≈ 2.25x

  hookWords: [
    { text: "How do I import", highlight: false },
    { text: "Google Maps route", highlight: true },
    { text: "into Travel Animator?", highlight: false },
  ],

  highlights: [],

  mainWords: [
    { text: "First,", startFrame: 0, endFrame: 9 },
    { text: "create", startFrame: 19, endFrame: 28 },
    { text: "your", startFrame: 28, endFrame: 37 },
    { text: "route", startFrame: 37, endFrame: 43 },
    { text: "on", startFrame: 43, endFrame: 52 },
    { text: "Google", startFrame: 52, endFrame: 61 },
    { text: "Maps,", startFrame: 61, endFrame: 70 },
    { text: "then", startFrame: 88, endFrame: 91 },
    { text: "tap", startFrame: 91, endFrame: 100 },
    { text: "Share", startFrame: 100, endFrame: 110 },
    { text: "and", startFrame: 110, endFrame: 119 },
    { text: "Copy", startFrame: 119, endFrame: 130 },
    { text: "the", startFrame: 130, endFrame: 136 },
    { text: "link.", startFrame: 136, endFrame: 146 },
    { text: "Open", startFrame: 159, endFrame: 166 },
    { text: "Travel", startFrame: 166, endFrame: 177 },
    { text: "Animator,", startFrame: 177, endFrame: 195 },
    { text: "tap", startFrame: 203, endFrame: 208 },
    { text: "the", startFrame: 208, endFrame: 214 },
    { text: "Routes", startFrame: 214, endFrame: 223 },
    { text: "button,", startFrame: 223, endFrame: 232 },
    { text: "and", startFrame: 241, endFrame: 244 },
    { text: "select", startFrame: 244, endFrame: 254 },
    { text: "Paste", startFrame: 254, endFrame: 267 },
    { text: "Google", startFrame: 267, endFrame: 279 },
    { text: "Maps", startFrame: 279, endFrame: 290 },
    { text: "link.", startFrame: 290, endFrame: 304 },
    { text: "Paste", startFrame: 317, endFrame: 324 },
    { text: "the", startFrame: 324, endFrame: 332 },
    { text: "link", startFrame: 332, endFrame: 340 },
    { text: "and", startFrame: 340, endFrame: 346 },
    { text: "tap", startFrame: 346, endFrame: 354 },
    { text: "Plot", startFrame: 354, endFrame: 364 },
    { text: "Route.", startFrame: 364, endFrame: 376 },
    { text: "Travel", startFrame: 385, endFrame: 394 },
    { text: "Animator", startFrame: 394, endFrame: 412 },
    { text: "will", startFrame: 412, endFrame: 416 },
    { text: "instantly", startFrame: 416, endFrame: 434 },
    { text: "import", startFrame: 434, endFrame: 449 },
    { text: "your", startFrame: 449, endFrame: 457 },
    { text: "entire", startFrame: 457, endFrame: 469 },
    { text: "route.", startFrame: 469, endFrame: 493 },
  ],
};

export const TUTORIAL20_PART1_DURATION = CONFIG.introDuration;
export const TUTORIAL20_PART2_DURATION = CONFIG.mainDuration;
export const TUTORIAL20_PART3_DURATION = CONFIG.outroDuration;
export const TUTORIAL20_DURATION = getTutorialDuration(CONFIG);

export const Tutorial20Part1: React.FC = () => <TutorialPart1 config={CONFIG} />;
export const Tutorial20Part2: React.FC = () => <TutorialPart2 config={CONFIG} />;
export const Tutorial20Part3: React.FC = () => <TutorialPart3 config={CONFIG} />;
export const Tutorial20: React.FC = () => <TutorialTemplate config={CONFIG} />;
