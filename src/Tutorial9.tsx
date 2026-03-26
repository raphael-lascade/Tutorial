import { TutorialPart1, TutorialPart2, TutorialPart3, TutorialTemplate, getTutorialDuration, TutorialConfig } from "./TutorialTemplate";

const INTRO_DURATION = 90;   // 2.79s @ 30fps (hook-voiceover.mp3)
const MAIN_DURATION = 736;   // 24.52s @ 30fps (main-voiceover.mp3)
const OUTRO_DURATION = 76;   // 2.53s @ 30fps (Outro.mp4)

const CONFIG: TutorialConfig = {
  introDuration: INTRO_DURATION,
  mainDuration: MAIN_DURATION,
  outroDuration: OUTRO_DURATION,

  hookAudio: "Tutorial/hook-voiceover.mp3",
  mainAudio: "Tutorial/main-voiceover.mp3",
  screenRecording: "Tutorial/screen-trimmed-muted.mp4",
  introVideo: "Tutorial/Intro.MP4",
  outroVideo: "Tutorial/Outro.mp4",

  screenRecDurationSec: 35.0, // playbackRate ≈ 1.43x

  hookWords: [
    { text: "How to add", highlight: false },
    { text: "Nautical Miles", highlight: true },
    { text: "to your animation?", highlight: false },
  ],

  highlights: [],

  mainWords: [
    { text: "Once", startFrame: 0, endFrame: 5 },
    { text: "you've", startFrame: 5, endFrame: 13 },
    { text: "plotted", startFrame: 13, endFrame: 22 },
    { text: "your", startFrame: 22, endFrame: 29 },
    { text: "ship", startFrame: 29, endFrame: 35 },
    { text: "route", startFrame: 35, endFrame: 42 },
    { text: "in", startFrame: 42, endFrame: 50 },
    { text: "Travel", startFrame: 50, endFrame: 61 },
    { text: "Animator,", startFrame: 61, endFrame: 91 },
    { text: "tap", startFrame: 91, endFrame: 94 },
    { text: "the", startFrame: 94, endFrame: 100 },
    { text: "Preview", startFrame: 100, endFrame: 112 },
    { text: "button", startFrame: 112, endFrame: 122 },
    { text: "to", startFrame: 122, endFrame: 127 },
    { text: "start", startFrame: 127, endFrame: 134 },
    { text: "the", startFrame: 134, endFrame: 140 },
    { text: "animation.", startFrame: 140, endFrame: 172 },
    { text: "To", startFrame: 172, endFrame: 179 },
    { text: "add", startFrame: 179, endFrame: 185 },
    { text: "a", startFrame: 185, endFrame: 190 },
    { text: "distance", startFrame: 190, endFrame: 199 },
    { text: "unit,", startFrame: 199, endFrame: 223 },
    { text: "look", startFrame: 223, endFrame: 230 },
    { text: "for", startFrame: 230, endFrame: 235 },
    { text: "the", startFrame: 235, endFrame: 239 },
    { text: "Unit", startFrame: 239, endFrame: 245 },
    { text: "button", startFrame: 245, endFrame: 256 },
    { text: "in", startFrame: 256, endFrame: 260 },
    { text: "the", startFrame: 260, endFrame: 264 },
    { text: "toolbar.", startFrame: 264, endFrame: 297 },
    { text: "Tap", startFrame: 297, endFrame: 302 },
    { text: "it", startFrame: 302, endFrame: 308 },
    { text: "once", startFrame: 308, endFrame: 313 },
    { text: "to", startFrame: 313, endFrame: 320 },
    { text: "show", startFrame: 320, endFrame: 327 },
    { text: "Miles.", startFrame: 327, endFrame: 358 },
    { text: "Tap", startFrame: 358, endFrame: 362 },
    { text: "again", startFrame: 362, endFrame: 372 },
    { text: "for", startFrame: 372, endFrame: 379 },
    { text: "Kilometers.", startFrame: 379, endFrame: 412 },
    { text: "One", startFrame: 412, endFrame: 418 },
    { text: "more", startFrame: 418, endFrame: 424 },
    { text: "tap,", startFrame: 424, endFrame: 447 },
    { text: "and", startFrame: 447, endFrame: 449 },
    { text: "you", startFrame: 449, endFrame: 452 },
    { text: "get", startFrame: 452, endFrame: 457 },
    { text: "Nautical", startFrame: 457, endFrame: 471 },
    { text: "Miles.", startFrame: 471, endFrame: 500 },
    { text: "Perfect", startFrame: 500, endFrame: 510 },
    { text: "for", startFrame: 510, endFrame: 518 },
    { text: "sea", startFrame: 518, endFrame: 524 },
    { text: "routes.", startFrame: 524, endFrame: 552 },
    { text: "And", startFrame: 552, endFrame: 556 },
    { text: "if", startFrame: 556, endFrame: 560 },
    { text: "you", startFrame: 560, endFrame: 564 },
    { text: "want", startFrame: 564, endFrame: 569 },
    { text: "to", startFrame: 569, endFrame: 573 },
    { text: "hide", startFrame: 573, endFrame: 579 },
    { text: "the", startFrame: 579, endFrame: 585 },
    { text: "distance", startFrame: 585, endFrame: 594 },
    { text: "counter", startFrame: 594, endFrame: 606 },
    { text: "completely,", startFrame: 606, endFrame: 638 },
    { text: "just", startFrame: 638, endFrame: 642 },
    { text: "tap", startFrame: 642, endFrame: 652 },
    { text: "it", startFrame: 652, endFrame: 656 },
    { text: "one", startFrame: 656, endFrame: 661 },
    { text: "more", startFrame: 661, endFrame: 666 },
    { text: "time", startFrame: 666, endFrame: 674 },
    { text: "to", startFrame: 674, endFrame: 679 },
    { text: "turn", startFrame: 679, endFrame: 685 },
    { text: "it", startFrame: 685, endFrame: 690 },
    { text: "off.", startFrame: 690, endFrame: 709 },
    { text: "That's", startFrame: 709, endFrame: 721 },
    { text: "it.", startFrame: 721, endFrame: 736 },
  ],
};

export const TUTORIAL9_PART1_DURATION = CONFIG.introDuration;
export const TUTORIAL9_PART2_DURATION = CONFIG.mainDuration;
export const TUTORIAL9_PART3_DURATION = CONFIG.outroDuration;
export const TUTORIAL9_DURATION = getTutorialDuration(CONFIG);

export const Tutorial9Part1: React.FC = () => <TutorialPart1 config={CONFIG} />;
export const Tutorial9Part2: React.FC = () => <TutorialPart2 config={CONFIG} />;
export const Tutorial9Part3: React.FC = () => <TutorialPart3 config={CONFIG} />;
export const Tutorial9: React.FC = () => <TutorialTemplate config={CONFIG} />;
