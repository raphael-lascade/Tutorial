import { TutorialPart1, TutorialPart2, TutorialPart3, TutorialTemplate, getTutorialDuration, TutorialConfig } from "./TutorialTemplate";

const INTRO_DURATION = 169;   // 5.62s @ 30fps (hook-voiceover.mp3)
const MAIN_DURATION = 809;    // 26.98s @ 30fps (main-voiceover.mp3)
const OUTRO_DURATION = 76;    // 2.53s @ 30fps (Outro.mp4)

const CONFIG: TutorialConfig = {
  introDuration: INTRO_DURATION,
  mainDuration: MAIN_DURATION,
  outroDuration: OUTRO_DURATION,

  hookAudio: "Tutorial/hook-voiceover.mp3",
  mainAudio: "Tutorial/main-voiceover.mp3",
  screenRecording: "Tutorial/screen-trimmed-muted.mp4",
  introVideo: "Tutorial/Intro.mov",
  outroVideo: "Tutorial/Outro.mp4",

  screenRecDurationSec: 47.5, // playbackRate ≈ 1.76x

  hookWords: [
    { text: "How to delete", highlight: false },
    { text: "route points", highlight: true },
    { text: "& endpoints", highlight: false },
  ],

  highlights: [],

  mainWords: [
    { text: "I've", startFrame: 0, endFrame: 6 },
    { text: "got", startFrame: 6, endFrame: 9 },
    { text: "5", startFrame: 9, endFrame: 17 },
    { text: "points", startFrame: 17, endFrame: 26 },
    { text: "plotted", startFrame: 26, endFrame: 36 },
    { text: "here.", startFrame: 36, endFrame: 59 },
    { text: "To", startFrame: 59, endFrame: 61 },
    { text: "delete", startFrame: 61, endFrame: 69 },
    { text: "an", startFrame: 69, endFrame: 76 },
    { text: "intermediate", startFrame: 76, endFrame: 86 },
    { text: "point,", startFrame: 86, endFrame: 110 },
    { text: "just", startFrame: 110, endFrame: 115 },
    { text: "double", startFrame: 115, endFrame: 124 },
    { text: "tap", startFrame: 124, endFrame: 132 },
    { text: "it.", startFrame: 132, endFrame: 151 },
    { text: "And", startFrame: 151, endFrame: 155 },
    { text: "it's", startFrame: 155, endFrame: 160 },
    { text: "gone", startFrame: 160, endFrame: 166 },
    { text: "instantly.", startFrame: 166, endFrame: 197 },
    { text: "But", startFrame: 197, endFrame: 202 },
    { text: "that", startFrame: 202, endFrame: 207 },
    { text: "won't", startFrame: 207, endFrame: 214 },
    { text: "work", startFrame: 214, endFrame: 220 },
    { text: "for", startFrame: 220, endFrame: 226 },
    { text: "your", startFrame: 226, endFrame: 230 },
    { text: "start", startFrame: 230, endFrame: 239 },
    { text: "or", startFrame: 239, endFrame: 250 },
    { text: "end", startFrame: 250, endFrame: 258 },
    { text: "destination.", startFrame: 258, endFrame: 290 },
    { text: "For", startFrame: 290, endFrame: 293 },
    { text: "those,", startFrame: 293, endFrame: 303 },
    { text: "long", startFrame: 303, endFrame: 320 },
    { text: "press", startFrame: 320, endFrame: 329 },
    { text: "on", startFrame: 329, endFrame: 336 },
    { text: "the", startFrame: 336, endFrame: 340 },
    { text: "point,", startFrame: 340, endFrame: 358 },
    { text: "then", startFrame: 358, endFrame: 365 },
    { text: "drag", startFrame: 365, endFrame: 373 },
    { text: "it", startFrame: 373, endFrame: 377 },
    { text: "to", startFrame: 377, endFrame: 381 },
    { text: "the", startFrame: 381, endFrame: 385 },
    { text: "Delete", startFrame: 385, endFrame: 394 },
    { text: "Point", startFrame: 394, endFrame: 403 },
    { text: "option.", startFrame: 403, endFrame: 428 },
    { text: "You", startFrame: 428, endFrame: 432 },
    { text: "can", startFrame: 432, endFrame: 435 },
    { text: "also", startFrame: 435, endFrame: 443 },
    { text: "remove", startFrame: 443, endFrame: 451 },
    { text: "points", startFrame: 451, endFrame: 464 },
    { text: "from", startFrame: 464, endFrame: 472 },
    { text: "the", startFrame: 472, endFrame: 476 },
    { text: "Locations", startFrame: 476, endFrame: 490 },
    { text: "list.", startFrame: 490, endFrame: 518 },
    { text: "Tap", startFrame: 518, endFrame: 522 },
    { text: "Locations", startFrame: 522, endFrame: 538 },
    { text: "at", startFrame: 538, endFrame: 545 },
    { text: "the", startFrame: 545, endFrame: 547 },
    { text: "bottom.", startFrame: 547, endFrame: 567 },
    { text: "You'll", startFrame: 567, endFrame: 572 },
    { text: "see", startFrame: 572, endFrame: 577 },
    { text: "an", startFrame: 577, endFrame: 581 },
    { text: "X", startFrame: 581, endFrame: 593 },
    { text: "next", startFrame: 593, endFrame: 602 },
    { text: "to", startFrame: 602, endFrame: 610 },
    { text: "each", startFrame: 610, endFrame: 616 },
    { text: "one.", startFrame: 616, endFrame: 637 },
    { text: "Tap", startFrame: 637, endFrame: 642 },
    { text: "it", startFrame: 642, endFrame: 647 },
    { text: "to", startFrame: 647, endFrame: 652 },
    { text: "delete", startFrame: 652, endFrame: 660 },
    { text: "whichever", startFrame: 660, endFrame: 670 },
    { text: "point", startFrame: 670, endFrame: 682 },
    { text: "you", startFrame: 682, endFrame: 688 },
    { text: "want.", startFrame: 688, endFrame: 703 },
    { text: "And", startFrame: 703, endFrame: 712 },
    { text: "if", startFrame: 712, endFrame: 716 },
    { text: "you", startFrame: 716, endFrame: 719 },
    { text: "made", startFrame: 719, endFrame: 723 },
    { text: "a", startFrame: 723, endFrame: 726 },
    { text: "mistake,", startFrame: 726, endFrame: 751 },
    { text: "just", startFrame: 751, endFrame: 756 },
    { text: "tap", startFrame: 756, endFrame: 770 },
    { text: "Undo.", startFrame: 770, endFrame: 809 },
  ],
};

export const TUTORIAL11_PART1_DURATION = CONFIG.introDuration;
export const TUTORIAL11_PART2_DURATION = CONFIG.mainDuration;
export const TUTORIAL11_PART3_DURATION = CONFIG.outroDuration;
export const TUTORIAL11_DURATION = getTutorialDuration(CONFIG);

export const Tutorial11Part1: React.FC = () => <TutorialPart1 config={CONFIG} />;
export const Tutorial11Part2: React.FC = () => <TutorialPart2 config={CONFIG} />;
export const Tutorial11Part3: React.FC = () => <TutorialPart3 config={CONFIG} />;
export const Tutorial11: React.FC = () => <TutorialTemplate config={CONFIG} />;
