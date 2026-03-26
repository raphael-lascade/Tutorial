import { TutorialPart1, TutorialPart2, TutorialPart3, TutorialTemplate, getTutorialDuration, TutorialConfig } from "./TutorialTemplate";

const INTRO_DURATION = 88;   // 2.93s @ 30fps (hook-voiceover.mp3)
const MAIN_DURATION = 736;   // 24.52s @ 30fps (main-voiceover.mp3)
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

  screenRecDurationSec: 39.0, // playbackRate ≈ 1.59x

  hookFontSize: 82,

  hookWords: [
    { text: "How do I", highlight: false },
    { text: "create a new route", highlight: true },
    { text: "on Travel Animator?", highlight: false },
  ],

  highlights: [],

  mainWords: [
    { text: "So", startFrame: 0, endFrame: 7 },
    { text: "if", startFrame: 7, endFrame: 17 },
    { text: "you", startFrame: 17, endFrame: 22 },
    { text: "have", startFrame: 22, endFrame: 27 },
    { text: "already", startFrame: 27, endFrame: 39 },
    { text: "got", startFrame: 39, endFrame: 49 },
    { text: "a", startFrame: 49, endFrame: 53 },
    { text: "route", startFrame: 53, endFrame: 58 },
    { text: "going", startFrame: 58, endFrame: 74 },
    { text: "and", startFrame: 74, endFrame: 80 },
    { text: "want", startFrame: 80, endFrame: 87 },
    { text: "to", startFrame: 87, endFrame: 94 },
    { text: "start", startFrame: 94, endFrame: 104 },
    { text: "fresh,", startFrame: 104, endFrame: 115 },
    { text: "just", startFrame: 131, endFrame: 140 },
    { text: "tap", startFrame: 140, endFrame: 149 },
    { text: "Routes", startFrame: 149, endFrame: 163 },
    { text: "at", startFrame: 163, endFrame: 167 },
    { text: "the", startFrame: 167, endFrame: 172 },
    { text: "top,", startFrame: 172, endFrame: 181 },
    { text: "then", startFrame: 197, endFrame: 209 },
    { text: "tap", startFrame: 209, endFrame: 225 },
    { text: "New", startFrame: 225, endFrame: 239 },
    { text: "Route.", startFrame: 239, endFrame: 255 },
    { text: "It", startFrame: 268, endFrame: 275 },
    { text: "will", startFrame: 275, endFrame: 280 },
    { text: "ask", startFrame: 280, endFrame: 292 },
    { text: "if", startFrame: 292, endFrame: 298 },
    { text: "you", startFrame: 298, endFrame: 302 },
    { text: "want", startFrame: 302, endFrame: 308 },
    { text: "to", startFrame: 308, endFrame: 314 },
    { text: "save", startFrame: 314, endFrame: 325 },
    { text: "what", startFrame: 325, endFrame: 333 },
    { text: "you", startFrame: 333, endFrame: 339 },
    { text: "have", startFrame: 339, endFrame: 344 },
    { text: "got.", startFrame: 344, endFrame: 353 },
    { text: "Hit", startFrame: 376, endFrame: 380 },
    { text: "Save", startFrame: 380, endFrame: 392 },
    { text: "to", startFrame: 392, endFrame: 401 },
    { text: "keep", startFrame: 401, endFrame: 409 },
    { text: "it,", startFrame: 409, endFrame: 420 },
    { text: "or", startFrame: 429, endFrame: 432 },
    { text: "continue", startFrame: 432, endFrame: 445 },
    { text: "without", startFrame: 445, endFrame: 459 },
    { text: "saving", startFrame: 459, endFrame: 474 },
    { text: "if", startFrame: 474, endFrame: 482 },
    { text: "you", startFrame: 482, endFrame: 486 },
    { text: "are", startFrame: 486, endFrame: 491 },
    { text: "done", startFrame: 491, endFrame: 497 },
    { text: "with", startFrame: 497, endFrame: 505 },
    { text: "it,", startFrame: 505, endFrame: 515 },
    { text: "and", startFrame: 529, endFrame: 535 },
    { text: "that", startFrame: 535, endFrame: 542 },
    { text: "is", startFrame: 542, endFrame: 549 },
    { text: "literally", startFrame: 549, endFrame: 563 },
    { text: "all", startFrame: 563, endFrame: 579 },
    { text: "there", startFrame: 579, endFrame: 588 },
    { text: "is", startFrame: 588, endFrame: 599 },
    { text: "to", startFrame: 599, endFrame: 605 },
    { text: "it.", startFrame: 605, endFrame: 615 },
    { text: "You", startFrame: 632, endFrame: 640 },
    { text: "are", startFrame: 640, endFrame: 644 },
    { text: "good", startFrame: 644, endFrame: 654 },
    { text: "to", startFrame: 654, endFrame: 661 },
    { text: "go", startFrame: 661, endFrame: 669 },
    { text: "and", startFrame: 669, endFrame: 677 },
    { text: "start", startFrame: 677, endFrame: 686 },
    { text: "a", startFrame: 686, endFrame: 692 },
    { text: "brand", startFrame: 692, endFrame: 699 },
    { text: "new", startFrame: 699, endFrame: 710 },
    { text: "route.", startFrame: 710, endFrame: 736 },
  ],
};

export const TUTORIAL13_PART1_DURATION = CONFIG.introDuration;
export const TUTORIAL13_PART2_DURATION = CONFIG.mainDuration;
export const TUTORIAL13_PART3_DURATION = CONFIG.outroDuration;
export const TUTORIAL13_DURATION = getTutorialDuration(CONFIG);

export const Tutorial13Part1: React.FC = () => <TutorialPart1 config={CONFIG} />;
export const Tutorial13Part2: React.FC = () => <TutorialPart2 config={CONFIG} />;
export const Tutorial13Part3: React.FC = () => <TutorialPart3 config={CONFIG} />;
export const Tutorial13: React.FC = () => <TutorialTemplate config={CONFIG} />;
