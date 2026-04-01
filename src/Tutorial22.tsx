import { TutorialPart1, TutorialPart2, TutorialPart3, TutorialTemplate, getTutorialDuration, TutorialConfig } from "./TutorialTemplate";

const INTRO_DURATION = 90;   // 3.0s @ 30fps (hook-voiceover.mp3 = 2.83s + buffer)
const MAIN_DURATION = 600;   // 20.0s @ 30fps (main-voiceover.mp3 = 19.69s + buffer)
const OUTRO_DURATION = 76;   // 2.53s @ 30fps (Outro.mp4)

const CONFIG: TutorialConfig = {
  introDuration: INTRO_DURATION,
  mainDuration: MAIN_DURATION,
  outroDuration: OUTRO_DURATION,

  hookAudio: "Tutorial/hook-voiceover.mp3",
  mainAudio: "Tutorial/main-voiceover.mp3",
  screenRecording: "Tutorial/Screen Recording-trimmed.mp4",
  introVideo: "Tutorial/Intro-processed.mp4",
  outroVideo: "Tutorial/Outro.mp4",

  screenRecDurationSec: 66.0, // playbackRate ≈ 3.3x

  hookTextTop: 260,
  hookFontSize: 85,
  introVideoTop: 670,
  introVideoWidth: 400,
  introVideoHeight: 680,

  hookWords: [
    { text: "Want to add", highlight: false },
    { text: "photos", highlight: true },
    { text: "along your GPX route?", highlight: false },
    { text: "Here's how.", highlight: false },
  ],

  highlights: [],

  mainWords: [
    { text: "Zoom", startFrame: 0, endFrame: 10 },
    { text: "into", startFrame: 10, endFrame: 20 },
    { text: "your", startFrame: 20, endFrame: 26 },
    { text: "route", startFrame: 26, endFrame: 34 },
    { text: "until", startFrame: 34, endFrame: 45 },
    { text: "you", startFrame: 45, endFrame: 51 },
    { text: "see", startFrame: 51, endFrame: 56 },
    { text: "the", startFrame: 56, endFrame: 61 },
    { text: "small", startFrame: 61, endFrame: 70 },
    { text: "dots.", startFrame: 70, endFrame: 98 },
    { text: "Long", startFrame: 98, endFrame: 103 },
    { text: "press", startFrame: 103, endFrame: 114 },
    { text: "any", startFrame: 114, endFrame: 123 },
    { text: "dot,", startFrame: 123, endFrame: 146 },
    { text: "tap", startFrame: 146, endFrame: 151 },
    { text: "Add", startFrame: 151, endFrame: 163, highlight: true },
    { text: "Media,", startFrame: 163, endFrame: 187, highlight: true },
    { text: "pick", startFrame: 187, endFrame: 191 },
    { text: "your", startFrame: 191, endFrame: 197 },
    { text: "style,", startFrame: 197, endFrame: 218 },
    { text: "then", startFrame: 218, endFrame: 223 },
    { text: "choose", startFrame: 223, endFrame: 231 },
    { text: "the", startFrame: 231, endFrame: 237 },
    { text: "photo", startFrame: 237, endFrame: 245 },
    { text: "you", startFrame: 245, endFrame: 251 },
    { text: "want.", startFrame: 251, endFrame: 276 },
    { text: "Set", startFrame: 276, endFrame: 283 },
    { text: "how", startFrame: 283, endFrame: 289 },
    { text: "long", startFrame: 289, endFrame: 297 },
    { text: "the", startFrame: 297, endFrame: 302 },
    { text: "image", startFrame: 302, endFrame: 311 },
    { text: "stays", startFrame: 311, endFrame: 320 },
    { text: "on", startFrame: 320, endFrame: 328 },
    { text: "screen", startFrame: 328, endFrame: 337 },
    { text: "and", startFrame: 337, endFrame: 349 },
    { text: "hit", startFrame: 349, endFrame: 354 },
    { text: "the", startFrame: 354, endFrame: 358 },
    { text: "checkmark.", startFrame: 358, endFrame: 386 },
    { text: "There's", startFrame: 386, endFrame: 393 },
    { text: "also", startFrame: 393, endFrame: 401 },
    { text: "an", startFrame: 401, endFrame: 406 },
    { text: "Add", startFrame: 406, endFrame: 411, highlight: true },
    { text: "Text", startFrame: 411, endFrame: 418, highlight: true },
    { text: "option", startFrame: 418, endFrame: 430 },
    { text: "right", startFrame: 430, endFrame: 436 },
    { text: "below", startFrame: 436, endFrame: 448 },
    { text: "if", startFrame: 448, endFrame: 460 },
    { text: "you", startFrame: 460, endFrame: 464 },
    { text: "want", startFrame: 464, endFrame: 470 },
    { text: "a", startFrame: 470, endFrame: 472 },
    { text: "caption.", startFrame: 472, endFrame: 497 },
    { text: "Hit", startFrame: 497, endFrame: 501 },
    { text: "Preview", startFrame: 501, endFrame: 515, highlight: true },
    { text: "and", startFrame: 515, endFrame: 522 },
    { text: "watch", startFrame: 522, endFrame: 529 },
    { text: "the", startFrame: 529, endFrame: 534 },
    { text: "image", startFrame: 534, endFrame: 544 },
    { text: "pop", startFrame: 544, endFrame: 552 },
    { text: "up", startFrame: 552, endFrame: 559 },
    { text: "right", startFrame: 559, endFrame: 565 },
    { text: "on", startFrame: 565, endFrame: 571 },
    { text: "your", startFrame: 571, endFrame: 574 },
    { text: "route.", startFrame: 574, endFrame: 600 },
  ],
};

export const TUTORIAL22_PART1_DURATION = CONFIG.introDuration;
export const TUTORIAL22_PART2_DURATION = CONFIG.mainDuration;
export const TUTORIAL22_PART3_DURATION = CONFIG.outroDuration;
export const TUTORIAL22_DURATION = getTutorialDuration(CONFIG);

export const Tutorial22Part1: React.FC = () => <TutorialPart1 config={CONFIG} />;
export const Tutorial22Part2: React.FC = () => <TutorialPart2 config={CONFIG} />;
export const Tutorial22Part3: React.FC = () => <TutorialPart3 config={CONFIG} />;
export const Tutorial22: React.FC = () => <TutorialTemplate config={CONFIG} />;
