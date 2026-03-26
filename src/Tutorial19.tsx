import { TutorialPart1, TutorialPart2, TutorialPart3, TutorialTemplate, getTutorialDuration, TutorialConfig } from "./TutorialTemplate";

const INTRO_DURATION = 75;   // 2.51s @ 30fps (hook-voiceover.mp3)
const MAIN_DURATION = 403;   // 13.42s @ 30fps (main-voiceover.mp3)
const OUTRO_DURATION = 76;   // 2.53s @ 30fps (Outro.mp4)

const CONFIG: TutorialConfig = {
  introDuration: INTRO_DURATION,
  mainDuration: MAIN_DURATION,
  outroDuration: OUTRO_DURATION,

  hookAudio: "Tutorial/hook-voiceover.mp3",
  mainAudio: "Tutorial/main-voiceover.mp3",
  screenRecording: "Tutorial/screen-trimmed-muted.mp4",
  introVideo: "Tutorial/Intro.mov",
  outroVideo: "Tutorial/Outro.mp4",

  screenRecDurationSec: 26.0, // playbackRate ≈ 1.94x

  hookFontSize: 85,

  hookWords: [
    { text: "How to hide the", highlight: false },
    { text: "Travel Path", highlight: true },
    { text: "in Travel Animator?", highlight: false },
  ],

  highlights: [],

  mainWords: [
    { text: "To", startFrame: 0, endFrame: 5 },
    { text: "hide", startFrame: 5, endFrame: 11 },
    { text: "the", startFrame: 11, endFrame: 16 },
    { text: "travel", startFrame: 16, endFrame: 25 },
    { text: "path", startFrame: 25, endFrame: 33 },
    { text: "in", startFrame: 33, endFrame: 41 },
    { text: "Travel", startFrame: 41, endFrame: 52 },
    { text: "Animator,", startFrame: 52, endFrame: 71 },
    { text: "tap", startFrame: 85, endFrame: 88 },
    { text: "the", startFrame: 88, endFrame: 94 },
    { text: "Path", startFrame: 94, endFrame: 101 },
    { text: "option", startFrame: 101, endFrame: 113 },
    { text: "from", startFrame: 113, endFrame: 119 },
    { text: "the", startFrame: 119, endFrame: 124 },
    { text: "Settings", startFrame: 124, endFrame: 131 },
    { text: "panel.", startFrame: 131, endFrame: 145 },
    { text: "Toggle", startFrame: 163, endFrame: 172 },
    { text: "it", startFrame: 172, endFrame: 176 },
    { text: "off,", startFrame: 176, endFrame: 182 },
    { text: "then", startFrame: 193, endFrame: 200 },
    { text: "tap", startFrame: 200, endFrame: 211 },
    { text: "the", startFrame: 211, endFrame: 217 },
    { text: "Checkmark", startFrame: 217, endFrame: 230 },
    { text: "to", startFrame: 230, endFrame: 237 },
    { text: "apply.", startFrame: 237, endFrame: 248 },
    { text: "That", startFrame: 265, endFrame: 272 },
    { text: "is", startFrame: 272, endFrame: 277 },
    { text: "it.", startFrame: 277, endFrame: 284 },
    { text: "Your", startFrame: 296, endFrame: 301 },
    { text: "animation", startFrame: 301, endFrame: 317 },
    { text: "will", startFrame: 317, endFrame: 326 },
    { text: "now", startFrame: 326, endFrame: 334 },
    { text: "play", startFrame: 334, endFrame: 345 },
    { text: "without", startFrame: 345, endFrame: 355 },
    { text: "showing", startFrame: 355, endFrame: 366 },
    { text: "the", startFrame: 366, endFrame: 372 },
    { text: "Path", startFrame: 372, endFrame: 380 },
    { text: "line.", startFrame: 380, endFrame: 403 },
  ],
};

export const TUTORIAL19_PART1_DURATION = CONFIG.introDuration;
export const TUTORIAL19_PART2_DURATION = CONFIG.mainDuration;
export const TUTORIAL19_PART3_DURATION = CONFIG.outroDuration;
export const TUTORIAL19_DURATION = getTutorialDuration(CONFIG);

export const Tutorial19Part1: React.FC = () => <TutorialPart1 config={CONFIG} />;
export const Tutorial19Part2: React.FC = () => <TutorialPart2 config={CONFIG} />;
export const Tutorial19Part3: React.FC = () => <TutorialPart3 config={CONFIG} />;
export const Tutorial19: React.FC = () => <TutorialTemplate config={CONFIG} />;
