import { TutorialPart1, TutorialPart2, TutorialPart3, TutorialTemplate, getTutorialDuration, TutorialConfig } from "./TutorialTemplate";

const INTRO_DURATION = 93;   // 3.11s @ 30fps (hook-voiceover.mp3)
const MAIN_DURATION = 568;   // 18.95s @ 30fps (main-voiceover.mp3)
const OUTRO_DURATION = 76;   // 2.53s @ 30fps (Outro.mp4)

const CONFIG: TutorialConfig = {
  introDuration: INTRO_DURATION,
  mainDuration: MAIN_DURATION,
  outroDuration: OUTRO_DURATION,

  hookAudio: "Tutorial/hook-voiceover.mp3",
  mainAudio: "Tutorial/main-voiceover.mp3",
  screenRecording: "Tutorial/screen-trimmed-muted.mp4",
  outroVideo: "Tutorial/Outro.mp4",

  screenRecDurationSec: 43.0, // playbackRate ≈ 2.27x

  hookWords: [
    { text: "How do I", highlight: false },
    { text: "zoom in & out", highlight: true },
    { text: "when editing?", highlight: false },
  ],

  highlights: [],

  mainWords: [
    { text: "There", startFrame: 0, endFrame: 5 },
    { text: "is", startFrame: 5, endFrame: 10 },
    { text: "no", startFrame: 10, endFrame: 14 },
    { text: "direct", startFrame: 14, endFrame: 25 },
    { text: "zoom", startFrame: 25, endFrame: 32 },
    { text: "button", startFrame: 32, endFrame: 44 },
    { text: "in", startFrame: 44, endFrame: 49 },
    { text: "Travel", startFrame: 49, endFrame: 55 },
    { text: "Animator", startFrame: 55, endFrame: 70 },
    { text: "Preview,", startFrame: 70, endFrame: 83 },
    { text: "but", startFrame: 89, endFrame: 95 },
    { text: "here", startFrame: 95, endFrame: 100 },
    { text: "is", startFrame: 100, endFrame: 104 },
    { text: "the", startFrame: 104, endFrame: 107 },
    { text: "trick.", startFrame: 107, endFrame: 115 },
    { text: "Zooming", startFrame: 132, endFrame: 140 },
    { text: "is", startFrame: 140, endFrame: 146 },
    { text: "controlled", startFrame: 146, endFrame: 157 },
    { text: "by", startFrame: 157, endFrame: 164 },
    { text: "the", startFrame: 164, endFrame: 167 },
    { text: "duration", startFrame: 167, endFrame: 177 },
    { text: "setting.", startFrame: 177, endFrame: 190 },
    { text: "Make", startFrame: 208, endFrame: 212 },
    { text: "the", startFrame: 212, endFrame: 218 },
    { text: "duration", startFrame: 218, endFrame: 227 },
    { text: "shorter", startFrame: 227, endFrame: 242 },
    { text: "and", startFrame: 242, endFrame: 252 },
    { text: "the", startFrame: 252, endFrame: 256 },
    { text: "camera", startFrame: 256, endFrame: 265 },
    { text: "zooms", startFrame: 265, endFrame: 279 },
    { text: "out", startFrame: 279, endFrame: 285 },
    { text: "to", startFrame: 285, endFrame: 290 },
    { text: "fit", startFrame: 290, endFrame: 295 },
    { text: "your", startFrame: 295, endFrame: 301 },
    { text: "entire", startFrame: 301, endFrame: 313 },
    { text: "route.", startFrame: 313, endFrame: 325 },
    { text: "Make", startFrame: 335, endFrame: 339 },
    { text: "it", startFrame: 339, endFrame: 344 },
    { text: "longer", startFrame: 344, endFrame: 355 },
    { text: "and", startFrame: 355, endFrame: 368 },
    { text: "the", startFrame: 368, endFrame: 372 },
    { text: "camera", startFrame: 372, endFrame: 382 },
    { text: "zooms", startFrame: 382, endFrame: 397 },
    { text: "in", startFrame: 397, endFrame: 401 },
    { text: "for", startFrame: 401, endFrame: 408 },
    { text: "a", startFrame: 408, endFrame: 412 },
    { text: "closer,", startFrame: 412, endFrame: 422 },
    { text: "more", startFrame: 425, endFrame: 430 },
    { text: "detailed", startFrame: 430, endFrame: 440 },
    { text: "view.", startFrame: 440, endFrame: 454 },
    { text: "Just", startFrame: 470, endFrame: 476 },
    { text: "tweak", startFrame: 476, endFrame: 483 },
    { text: "the", startFrame: 483, endFrame: 490 },
    { text: "duration", startFrame: 490, endFrame: 502 },
    { text: "until", startFrame: 502, endFrame: 513 },
    { text: "you", startFrame: 513, endFrame: 518 },
    { text: "get", startFrame: 518, endFrame: 523 },
    { text: "the", startFrame: 523, endFrame: 527 },
    { text: "zoom", startFrame: 527, endFrame: 534 },
    { text: "level", startFrame: 534, endFrame: 542 },
    { text: "you", startFrame: 542, endFrame: 548 },
    { text: "want.", startFrame: 548, endFrame: 568 },
  ],
};

export const TUTORIAL17_PART1_DURATION = CONFIG.introDuration;
export const TUTORIAL17_PART2_DURATION = CONFIG.mainDuration;
export const TUTORIAL17_PART3_DURATION = CONFIG.outroDuration;
export const TUTORIAL17_DURATION = getTutorialDuration(CONFIG);

export const Tutorial17Part1: React.FC = () => <TutorialPart1 config={CONFIG} />;
export const Tutorial17Part2: React.FC = () => <TutorialPart2 config={CONFIG} />;
export const Tutorial17Part3: React.FC = () => <TutorialPart3 config={CONFIG} />;
export const Tutorial17: React.FC = () => <TutorialTemplate config={CONFIG} />;
