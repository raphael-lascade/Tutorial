import { TutorialPart1, TutorialPart2, TutorialPart3, TutorialTemplate, getTutorialDuration, TutorialConfig } from "./TutorialTemplate";

const CONFIG: TutorialConfig = {
  // Durations
  introDuration: 120,   // 4s
  mainDuration: 1060,   // 35.33s — main voiceover 34.74s + padding
  outroDuration: 76,    // 2.53s

  // Assets
  hookAudio: "Tutorial/hook-voiceover.mp3",
  mainAudio: "Tutorial/main-voiceover.mp3",
  screenRecording: "Tutorial/ScreenRecording-muted.MP4",
  introVideo: "Tutorial/Intro-trimmed.MP4",
  outroVideo: "Tutorial/Outro.mp4",

  // Recording is 51.5s, main composition is 1060 frames (35.33s)
  screenRecDurationSec: 51.5,

  // Hook words
  hookWords: [
    { text: "How", highlight: false },
    { text: "To", highlight: false },
    { text: "Enable", highlight: true },
    { text: "Real", highlight: true },
    { text: "Route?", highlight: false },
  ],

  // Layout — locked to approved values (Figma defaults differ)
  hookTextTop: 260,
  hookFontSize: 56,
  introVideoTop: 380,
  introVideoWidth: 500,
  introVideoHeight: 870,

  // Highlights — TBD after Part 2 frame analysis
  highlights: [],

  // Main voiceover word timings (Whisper, 30fps — "Root" fixed to "Route")
  mainWords: [
    { text: "Once", startFrame: 0, endFrame: 4 },
    { text: "you", startFrame: 4, endFrame: 10 },
    { text: "have", startFrame: 10, endFrame: 14 },
    { text: "plotted", startFrame: 14, endFrame: 23 },
    { text: "your", startFrame: 23, endFrame: 29 },
    { text: "route", startFrame: 29, endFrame: 37 },
    { text: "in", startFrame: 37, endFrame: 43 },
    { text: "Travel", startFrame: 43, endFrame: 53 },
    { text: "Animator,", startFrame: 53, endFrame: 71 },
    { text: "open", startFrame: 82, endFrame: 88 },
    { text: "the", startFrame: 88, endFrame: 94 },
    { text: "Preview", startFrame: 94, endFrame: 108 },
    { text: "and", startFrame: 108, endFrame: 116 },
    { text: "you", startFrame: 116, endFrame: 121 },
    { text: "will", startFrame: 121, endFrame: 124 },
    { text: "notice", startFrame: 124, endFrame: 133 },
    { text: "it", startFrame: 133, endFrame: 139 },
    { text: "shows", startFrame: 139, endFrame: 146 },
    { text: "a", startFrame: 146, endFrame: 153 },
    { text: "straight", startFrame: 153, endFrame: 160 },
    { text: "line", startFrame: 160, endFrame: 170 },
    { text: "from", startFrame: 170, endFrame: 177 },
    { text: "start", startFrame: 177, endFrame: 186 },
    { text: "to", startFrame: 186, endFrame: 193 },
    { text: "finish.", startFrame: 193, endFrame: 205 },
    { text: "To", startFrame: 216, endFrame: 223 },
    { text: "fix", startFrame: 223, endFrame: 230 },
    { text: "this,", startFrame: 230, endFrame: 239 },
    { text: "go", startFrame: 249, endFrame: 252 },
    { text: "back", startFrame: 252, endFrame: 257 },
    { text: "to", startFrame: 257, endFrame: 263 },
    { text: "the", startFrame: 263, endFrame: 266 },
    { text: "map", startFrame: 266, endFrame: 273 },
    { text: "and", startFrame: 273, endFrame: 280 },
    { text: "long", startFrame: 280, endFrame: 287 },
    { text: "press", startFrame: 287, endFrame: 298 },
    { text: "your", startFrame: 298, endFrame: 305 },
    { text: "starting", startFrame: 305, endFrame: 318 },
    { text: "destination", startFrame: 318, endFrame: 334 },
    { text: "icon.", startFrame: 334, endFrame: 352 },
    { text: "A", startFrame: 371, endFrame: 374 },
    { text: "menu", startFrame: 374, endFrame: 382 },
    { text: "will", startFrame: 382, endFrame: 390 },
    { text: "appear,", startFrame: 390, endFrame: 400 },
    { text: "tap", startFrame: 416, endFrame: 422 },
    { text: "Real", startFrame: 422, endFrame: 444 },
    { text: "Route.", startFrame: 444, endFrame: 460 },
    { text: "Your", startFrame: 471, endFrame: 478 },
    { text: "path", startFrame: 478, endFrame: 487 },
    { text: "will", startFrame: 487, endFrame: 494 },
    { text: "now", startFrame: 494, endFrame: 500 },
    { text: "follow", startFrame: 500, endFrame: 511 },
    { text: "actual", startFrame: 511, endFrame: 526 },
    { text: "roads", startFrame: 526, endFrame: 539 },
    { text: "instead", startFrame: 539, endFrame: 550 },
    { text: "of", startFrame: 550, endFrame: 554 },
    { text: "a", startFrame: 554, endFrame: 556 },
    { text: "straight", startFrame: 556, endFrame: 563 },
    { text: "line.", startFrame: 563, endFrame: 576 },
    { text: "If", startFrame: 589, endFrame: 595 },
    { text: "an", startFrame: 595, endFrame: 599 },
    { text: "alternate", startFrame: 599, endFrame: 608 },
    { text: "route", startFrame: 608, endFrame: 616 },
    { text: "is", startFrame: 616, endFrame: 621 },
    { text: "available,", startFrame: 621, endFrame: 632 },
    { text: "you", startFrame: 640, endFrame: 641 },
    { text: "can", startFrame: 641, endFrame: 646 },
    { text: "choose", startFrame: 646, endFrame: 653 },
    { text: "it.", startFrame: 653, endFrame: 661 },
    { text: "Otherwise,", startFrame: 672, endFrame: 684 },
    { text: "just", startFrame: 692, endFrame: 695 },
    { text: "go", startFrame: 695, endFrame: 702 },
    { text: "with", startFrame: 702, endFrame: 707 },
    { text: "the", startFrame: 707, endFrame: 711 },
    { text: "default.", startFrame: 711, endFrame: 721 },
    { text: "Now", startFrame: 739, endFrame: 749 },
    { text: "check", startFrame: 749, endFrame: 758 },
    { text: "the", startFrame: 758, endFrame: 765 },
    { text: "Preview", startFrame: 765, endFrame: 777 },
    { text: "again", startFrame: 777, endFrame: 785 },
    { text: "and", startFrame: 785, endFrame: 791 },
    { text: "you", startFrame: 791, endFrame: 795 },
    { text: "will", startFrame: 795, endFrame: 799 },
    { text: "see", startFrame: 799, endFrame: 805 },
    { text: "a", startFrame: 805, endFrame: 809 },
    { text: "huge", startFrame: 809, endFrame: 823 },
    { text: "difference.", startFrame: 823, endFrame: 836 },
    { text: "A", startFrame: 847, endFrame: 858 },
    { text: "smooth,", startFrame: 858, endFrame: 870 },
    { text: "realistic", startFrame: 879, endFrame: 890 },
    { text: "animation", startFrame: 890, endFrame: 906 },
    { text: "that", startFrame: 906, endFrame: 917 },
    { text: "follows", startFrame: 917, endFrame: 926 },
    { text: "real", startFrame: 926, endFrame: 938 },
    { text: "streets,", startFrame: 938, endFrame: 950 },
    { text: "making", startFrame: 964, endFrame: 968 },
    { text: "your", startFrame: 968, endFrame: 976 },
    { text: "map", startFrame: 976, endFrame: 981 },
    { text: "video", startFrame: 981, endFrame: 993 },
    { text: "look", startFrame: 993, endFrame: 1001 },
    { text: "much", startFrame: 1001, endFrame: 1008 },
    { text: "more", startFrame: 1008, endFrame: 1013 },
    { text: "professional.", startFrame: 1013, endFrame: 1028 },
  ],
};

export const TUTORIAL6_PART1_DURATION = CONFIG.introDuration;
export const TUTORIAL6_PART2_DURATION = CONFIG.mainDuration;
export const TUTORIAL6_PART3_DURATION = CONFIG.outroDuration;
export const TUTORIAL6_DURATION = getTutorialDuration(CONFIG);

export const Tutorial6Part1: React.FC = () => <TutorialPart1 config={CONFIG} />;
export const Tutorial6Part2: React.FC = () => <TutorialPart2 config={CONFIG} />;
export const Tutorial6Part3: React.FC = () => <TutorialPart3 config={CONFIG} />;
export const Tutorial6: React.FC = () => <TutorialTemplate config={CONFIG} />;
