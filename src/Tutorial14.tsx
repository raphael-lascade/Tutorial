import { TutorialPart1, TutorialPart2, TutorialPart3, TutorialTemplate, getTutorialDuration, TutorialConfig } from "./TutorialTemplate";

const INTRO_DURATION = 98;    // 3.25s @ 30fps (hook-voiceover.mp3)
const MAIN_DURATION = 1098;   // 36.59s @ 30fps (main-voiceover.mp3)
const OUTRO_DURATION = 76;    // 2.53s @ 30fps (Outro.mp4)

const CONFIG: TutorialConfig = {
  introDuration: INTRO_DURATION,
  mainDuration: MAIN_DURATION,
  outroDuration: OUTRO_DURATION,

  hookAudio: "Tutorial/hook-voiceover.mp3",
  mainAudio: "Tutorial/main-voiceover.mp3",
  screenRecording: "Tutorial/screen-trimmed-muted.mp4",
  introVideo: "Tutorial/Intro.MP4",
  outroVideo: "Tutorial/Outro.mp4",

  screenRecDurationSec: 81.0, // playbackRate ≈ 2.21x

  introVideoStartFrom: 60, // skip 2s zoom-out at start

  hookFontSize: 78,

  hookWords: [
    { text: "How do I draw", highlight: false },
    { text: "curves & turns", highlight: true },
    { text: "instead of a direct line?", highlight: false },
  ],

  highlights: [],

  mainWords: [
    { text: "Travel", startFrame: 0, endFrame: 11 },
    { text: "Animator", startFrame: 11, endFrame: 28 },
    { text: "draws", startFrame: 28, endFrame: 37 },
    { text: "straight", startFrame: 37, endFrame: 49 },
    { text: "lines", startFrame: 49, endFrame: 61 },
    { text: "between", startFrame: 61, endFrame: 74 },
    { text: "waypoints", startFrame: 74, endFrame: 97 },
    { text: "by", startFrame: 97, endFrame: 104 },
    { text: "default,", startFrame: 104, endFrame: 118 },
    { text: "but", startFrame: 131, endFrame: 142 },
    { text: "to", startFrame: 142, endFrame: 146 },
    { text: "get", startFrame: 146, endFrame: 151 },
    { text: "realistic", startFrame: 151, endFrame: 164 },
    { text: "curves", startFrame: 164, endFrame: 179 },
    { text: "and", startFrame: 179, endFrame: 186 },
    { text: "turns,", startFrame: 186, endFrame: 195 },
    { text: "just", startFrame: 214, endFrame: 218 },
    { text: "tap", startFrame: 218, endFrame: 230 },
    { text: "and", startFrame: 230, endFrame: 239 },
    { text: "drag", startFrame: 239, endFrame: 248 },
    { text: "any", startFrame: 248, endFrame: 262 },
    { text: "part", startFrame: 262, endFrame: 271 },
    { text: "of", startFrame: 271, endFrame: 275 },
    { text: "the", startFrame: 275, endFrame: 278 },
    { text: "route", startFrame: 278, endFrame: 284 },
    { text: "to", startFrame: 284, endFrame: 291 },
    { text: "create", startFrame: 291, endFrame: 299 },
    { text: "a", startFrame: 299, endFrame: 305 },
    { text: "new", startFrame: 305, endFrame: 310 },
    { text: "point.", startFrame: 310, endFrame: 320 },
    { text: "You", startFrame: 335, endFrame: 340 },
    { text: "can", startFrame: 340, endFrame: 343 },
    { text: "keep", startFrame: 343, endFrame: 350 },
    { text: "adding", startFrame: 350, endFrame: 360 },
    { text: "and", startFrame: 360, endFrame: 367 },
    { text: "dragging", startFrame: 367, endFrame: 375 },
    { text: "points", startFrame: 375, endFrame: 388 },
    { text: "to", startFrame: 388, endFrame: 395 },
    { text: "shape", startFrame: 395, endFrame: 401 },
    { text: "the", startFrame: 401, endFrame: 408 },
    { text: "path", startFrame: 408, endFrame: 415 },
    { text: "exactly", startFrame: 415, endFrame: 431 },
    { text: "the", startFrame: 431, endFrame: 439 },
    { text: "way", startFrame: 439, endFrame: 444 },
    { text: "you", startFrame: 444, endFrame: 449 },
    { text: "want.", startFrame: 449, endFrame: 458 },
    { text: "Tap", startFrame: 481, endFrame: 485 },
    { text: "Preview,", startFrame: 485, endFrame: 511 },
    { text: "and", startFrame: 524, endFrame: 533 },
    { text: "you", startFrame: 533, endFrame: 536 },
    { text: "will", startFrame: 536, endFrame: 540 },
    { text: "see", startFrame: 540, endFrame: 545 },
    { text: "the", startFrame: 545, endFrame: 550 },
    { text: "route", startFrame: 550, endFrame: 556 },
    { text: "now", startFrame: 556, endFrame: 565 },
    { text: "follows", startFrame: 565, endFrame: 578 },
    { text: "a", startFrame: 578, endFrame: 585 },
    { text: "natural", startFrame: 585, endFrame: 598 },
    { text: "curved", startFrame: 598, endFrame: 615 },
    { text: "path.", startFrame: 615, endFrame: 627 },
    { text: "No", startFrame: 643, endFrame: 649 },
    { text: "more", startFrame: 649, endFrame: 656 },
    { text: "straight", startFrame: 656, endFrame: 664 },
    { text: "lines,", startFrame: 664, endFrame: 679 },
    { text: "and", startFrame: 694, endFrame: 704 },
    { text: "if", startFrame: 704, endFrame: 709 },
    { text: "you", startFrame: 709, endFrame: 712 },
    { text: "want", startFrame: 712, endFrame: 718 },
    { text: "an", startFrame: 718, endFrame: 722 },
    { text: "even", startFrame: 722, endFrame: 728 },
    { text: "faster", startFrame: 728, endFrame: 742 },
    { text: "way,", startFrame: 742, endFrame: 752 },
    { text: "just", startFrame: 752, endFrame: 770 },
    { text: "long", startFrame: 770, endFrame: 782 },
    { text: "press", startFrame: 782, endFrame: 793 },
    { text: "your", startFrame: 793, endFrame: 800 },
    { text: "starting", startFrame: 800, endFrame: 811 },
    { text: "point", startFrame: 811, endFrame: 821 },
    { text: "and", startFrame: 821, endFrame: 834 },
    { text: "drag", startFrame: 834, endFrame: 842 },
    { text: "it", startFrame: 842, endFrame: 849 },
    { text: "to", startFrame: 849, endFrame: 854 },
    { text: "the", startFrame: 854, endFrame: 857 },
    { text: "Real", startFrame: 857, endFrame: 866 },
    { text: "Route", startFrame: 866, endFrame: 874 },
    { text: "option.", startFrame: 874, endFrame: 893 },
    { text: "Travel", startFrame: 907, endFrame: 920 },
    { text: "Animator", startFrame: 920, endFrame: 938 },
    { text: "will", startFrame: 938, endFrame: 943 },
    { text: "automatically", startFrame: 943, endFrame: 959 },
    { text: "snap", startFrame: 959, endFrame: 974 },
    { text: "the", startFrame: 974, endFrame: 981 },
    { text: "route", startFrame: 981, endFrame: 988 },
    { text: "to", startFrame: 988, endFrame: 995 },
    { text: "the", startFrame: 995, endFrame: 998 },
    { text: "most", startFrame: 998, endFrame: 1005 },
    { text: "realistic", startFrame: 1005, endFrame: 1022 },
    { text: "road-following", startFrame: 1022, endFrame: 1047 },
    { text: "path", startFrame: 1047, endFrame: 1059 },
    { text: "available.", startFrame: 1059, endFrame: 1098 },
  ],
};

export const TUTORIAL14_PART1_DURATION = CONFIG.introDuration;
export const TUTORIAL14_PART2_DURATION = CONFIG.mainDuration;
export const TUTORIAL14_PART3_DURATION = CONFIG.outroDuration;
export const TUTORIAL14_DURATION = getTutorialDuration(CONFIG);

export const Tutorial14Part1: React.FC = () => <TutorialPart1 config={CONFIG} />;
export const Tutorial14Part2: React.FC = () => <TutorialPart2 config={CONFIG} />;
export const Tutorial14Part3: React.FC = () => <TutorialPart3 config={CONFIG} />;
export const Tutorial14: React.FC = () => <TutorialTemplate config={CONFIG} />;
