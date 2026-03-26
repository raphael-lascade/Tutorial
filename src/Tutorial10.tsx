import { TutorialPart1, TutorialPart2, TutorialPart3, TutorialTemplate, getTutorialDuration, TutorialConfig } from "./TutorialTemplate";

const INTRO_DURATION = 93;   // 3.07s @ 30fps (hook-voiceover.mp3)
const MAIN_DURATION = 872;   // 29.07s @ 30fps (main-voiceover.mp3)
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

  screenRecDurationSec: 58.5, // playbackRate ≈ 2.01x

  hookWords: [
    { text: "How to show", highlight: false },
    { text: "distance travelled", highlight: true },
    { text: "on your animation?", highlight: false },
  ],

  introVideoStartFrom: 60, // skip first 2 seconds (zoom-in)

  highlights: [],

  mainWords: [
    { text: "Once", startFrame: 0, endFrame: 5 },
    { text: "you've", startFrame: 5, endFrame: 13 },
    { text: "plotted", startFrame: 13, endFrame: 22 },
    { text: "your", startFrame: 22, endFrame: 28 },
    { text: "route", startFrame: 28, endFrame: 35 },
    { text: "in", startFrame: 35, endFrame: 40 },
    { text: "Travel", startFrame: 40, endFrame: 49 },
    { text: "Animator,", startFrame: 49, endFrame: 79 },
    { text: "tap", startFrame: 79, endFrame: 82 },
    { text: "Preview.", startFrame: 82, endFrame: 118 },
    { text: "Notice", startFrame: 118, endFrame: 123 },
    { text: "there's", startFrame: 123, endFrame: 132 },
    { text: "no", startFrame: 132, endFrame: 136 },
    { text: "distance", startFrame: 136, endFrame: 146 },
    { text: "counter", startFrame: 146, endFrame: 157 },
    { text: "showing", startFrame: 157, endFrame: 169 },
    { text: "yet.", startFrame: 169, endFrame: 194 },
    { text: "To", startFrame: 194, endFrame: 200 },
    { text: "add", startFrame: 200, endFrame: 206 },
    { text: "one,", startFrame: 206, endFrame: 227 },
    { text: "tap", startFrame: 227, endFrame: 233 },
    { text: "the", startFrame: 233, endFrame: 239 },
    { text: "Unit", startFrame: 239, endFrame: 247 },
    { text: "button", startFrame: 247, endFrame: 257 },
    { text: "in", startFrame: 257, endFrame: 262 },
    { text: "the", startFrame: 262, endFrame: 266 },
    { text: "toolbar.", startFrame: 266, endFrame: 297 },
    { text: "Your", startFrame: 297, endFrame: 301 },
    { text: "first", startFrame: 301, endFrame: 309 },
    { text: "tap", startFrame: 309, endFrame: 317 },
    { text: "shows", startFrame: 317, endFrame: 328 },
    { text: "Miles.", startFrame: 328, endFrame: 359 },
    { text: "Tap", startFrame: 359, endFrame: 364 },
    { text: "again", startFrame: 364, endFrame: 375 },
    { text: "for", startFrame: 375, endFrame: 383 },
    { text: "Kilometers.", startFrame: 383, endFrame: 427 },
    { text: "One", startFrame: 427, endFrame: 435 },
    { text: "more", startFrame: 435, endFrame: 442 },
    { text: "tap", startFrame: 442, endFrame: 450 },
    { text: "gives", startFrame: 450, endFrame: 458 },
    { text: "you", startFrame: 458, endFrame: 464 },
    { text: "Nautical", startFrame: 464, endFrame: 475 },
    { text: "Miles.", startFrame: 475, endFrame: 503 },
    { text: "Great", startFrame: 503, endFrame: 511 },
    { text: "if", startFrame: 511, endFrame: 520 },
    { text: "your", startFrame: 520, endFrame: 525 },
    { text: "route", startFrame: 525, endFrame: 533 },
    { text: "involves", startFrame: 533, endFrame: 544 },
    { text: "a", startFrame: 544, endFrame: 551 },
    { text: "ship", startFrame: 551, endFrame: 557 },
    { text: "or", startFrame: 557, endFrame: 565 },
    { text: "boat", startFrame: 565, endFrame: 572 },
    { text: "crossing.", startFrame: 572, endFrame: 601 },
    { text: "And", startFrame: 601, endFrame: 605 },
    { text: "if", startFrame: 605, endFrame: 609 },
    { text: "you", startFrame: 609, endFrame: 612 },
    { text: "want", startFrame: 612, endFrame: 617 },
    { text: "to", startFrame: 617, endFrame: 622 },
    { text: "remove", startFrame: 622, endFrame: 628 },
    { text: "the", startFrame: 628, endFrame: 635 },
    { text: "distance", startFrame: 635, endFrame: 644 },
    { text: "counter", startFrame: 644, endFrame: 654 },
    { text: "completely,", startFrame: 654, endFrame: 685 },
    { text: "just", startFrame: 685, endFrame: 688 },
    { text: "tap", startFrame: 688, endFrame: 697 },
    { text: "it", startFrame: 697, endFrame: 701 },
    { text: "one", startFrame: 701, endFrame: 706 },
    { text: "more", startFrame: 706, endFrame: 711 },
    { text: "time", startFrame: 711, endFrame: 720 },
    { text: "to", startFrame: 720, endFrame: 725 },
    { text: "turn", startFrame: 725, endFrame: 731 },
    { text: "it", startFrame: 731, endFrame: 736 },
    { text: "off.", startFrame: 736, endFrame: 757 },
    { text: "That's", startFrame: 757, endFrame: 767 },
    { text: "all", startFrame: 767, endFrame: 770 },
    { text: "it", startFrame: 770, endFrame: 775 },
    { text: "takes", startFrame: 775, endFrame: 781 },
    { text: "to", startFrame: 781, endFrame: 790 },
    { text: "show", startFrame: 790, endFrame: 794 },
    { text: "the", startFrame: 794, endFrame: 799 },
    { text: "distance", startFrame: 799, endFrame: 808 },
    { text: "travelled", startFrame: 808, endFrame: 824 },
    { text: "on", startFrame: 824, endFrame: 831 },
    { text: "your", startFrame: 831, endFrame: 835 },
    { text: "animation.", startFrame: 835, endFrame: 872 },
  ],
};

export const TUTORIAL10_PART1_DURATION = CONFIG.introDuration;
export const TUTORIAL10_PART2_DURATION = CONFIG.mainDuration;
export const TUTORIAL10_PART3_DURATION = CONFIG.outroDuration;
export const TUTORIAL10_DURATION = getTutorialDuration(CONFIG);

export const Tutorial10Part1: React.FC = () => <TutorialPart1 config={CONFIG} />;
export const Tutorial10Part2: React.FC = () => <TutorialPart2 config={CONFIG} />;
export const Tutorial10Part3: React.FC = () => <TutorialPart3 config={CONFIG} />;
export const Tutorial10: React.FC = () => <TutorialTemplate config={CONFIG} />;
