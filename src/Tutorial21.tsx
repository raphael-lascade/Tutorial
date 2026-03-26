import { TutorialPart1, TutorialPart2, TutorialPart3, TutorialTemplate, getTutorialDuration, TutorialConfig } from "./TutorialTemplate";

const INTRO_DURATION = 75;   // 2.51s @ 30fps (hook-voiceover.mp3)
const MAIN_DURATION = 430;   // 14.35s @ 30fps (main-voiceover.mp3)
const OUTRO_DURATION = 76;   // 2.53s @ 30fps (Outro.mp4)

const CONFIG: TutorialConfig = {
  introDuration: INTRO_DURATION,
  mainDuration: MAIN_DURATION,
  outroDuration: OUTRO_DURATION,

  hookAudio: "Tutorial/hook-voiceover.mp3",
  mainAudio: "Tutorial/main-voiceover.mp3",
  screenRecording: "Tutorial/screen-trimmed-muted.mp4",
  outroVideo: "Tutorial/Outro.mp4",

  screenRecDurationSec: 23.0, // playbackRate ≈ 1.61x

  hookWords: [
    { text: "How Do I Remove", highlight: false },
    { text: "An Image", highlight: true },
    { text: "In Travel Animator?", highlight: false },
  ],

  highlights: [],

  mainWords: [
    { text: "To", startFrame: 0, endFrame: 4 },
    { text: "remove", startFrame: 4, endFrame: 13 },
    { text: "an", startFrame: 13, endFrame: 19 },
    { text: "image", startFrame: 19, endFrame: 25 },
    { text: "from", startFrame: 25, endFrame: 32 },
    { text: "a", startFrame: 32, endFrame: 37 },
    { text: "waypoint,", startFrame: 37, endFrame: 50 },
    { text: "long", startFrame: 65, endFrame: 72 },
    { text: "press", startFrame: 72, endFrame: 81 },
    { text: "the", startFrame: 81, endFrame: 88 },
    { text: "waypoint", startFrame: 88, endFrame: 104 },
    { text: "and", startFrame: 104, endFrame: 110 },
    { text: "select", startFrame: 110, endFrame: 121 },
    { text: "Add", startFrame: 121, endFrame: 131 },
    { text: "Media.", startFrame: 131, endFrame: 143 },
    { text: "You", startFrame: 159, endFrame: 166 },
    { text: "will", startFrame: 166, endFrame: 169 },
    { text: "see", startFrame: 169, endFrame: 173 },
    { text: "the", startFrame: 173, endFrame: 178 },
    { text: "image", startFrame: 178, endFrame: 185 },
    { text: "you", startFrame: 185, endFrame: 191 },
    { text: "already", startFrame: 191, endFrame: 200 },
    { text: "added.", startFrame: 200, endFrame: 215 },
    { text: "Tap", startFrame: 230, endFrame: 238 },
    { text: "the", startFrame: 238, endFrame: 244 },
    { text: "Remove", startFrame: 244, endFrame: 252 },
    { text: "option", startFrame: 252, endFrame: 267 },
    { text: "in", startFrame: 267, endFrame: 272 },
    { text: "the", startFrame: 272, endFrame: 276 },
    { text: "top", startFrame: 276, endFrame: 282 },
    { text: "left", startFrame: 282, endFrame: 289 },
    { text: "corner,", startFrame: 289, endFrame: 302 },
    { text: "then", startFrame: 307, endFrame: 311 },
    { text: "tap", startFrame: 311, endFrame: 322 },
    { text: "Save.", startFrame: 322, endFrame: 334 },
    { text: "That", startFrame: 353, endFrame: 361 },
    { text: "is", startFrame: 361, endFrame: 365 },
    { text: "it,", startFrame: 365, endFrame: 372 },
    { text: "the", startFrame: 383, endFrame: 388 },
    { text: "image", startFrame: 388, endFrame: 395 },
    { text: "is", startFrame: 395, endFrame: 401 },
    { text: "removed.", startFrame: 401, endFrame: 430 },
  ],
};

export const TUTORIAL21_PART1_DURATION = CONFIG.introDuration;
export const TUTORIAL21_PART2_DURATION = CONFIG.mainDuration;
export const TUTORIAL21_PART3_DURATION = CONFIG.outroDuration;
export const TUTORIAL21_DURATION = getTutorialDuration(CONFIG);

export const Tutorial21Part1: React.FC = () => <TutorialPart1 config={CONFIG} />;
export const Tutorial21Part2: React.FC = () => <TutorialPart2 config={CONFIG} />;
export const Tutorial21Part3: React.FC = () => <TutorialPart3 config={CONFIG} />;
export const Tutorial21: React.FC = () => <TutorialTemplate config={CONFIG} />;
