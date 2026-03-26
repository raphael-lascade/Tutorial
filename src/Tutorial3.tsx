import { TutorialTemplate, getTutorialDuration, TutorialConfig } from "./TutorialTemplate";

const CONFIG: TutorialConfig = {
  // Durations
  introDuration: 150, // 5s (hook voiceover 3.02s + intro video 4.67s)
  mainDuration: 700, // ~23.3s (main voiceover is 22.71s + padding)
  outroDuration: 76, // 2.53s

  // Assets
  hookAudio: "Tutorial/hook-voiceover.mp3",
  mainAudio: "Tutorial/main-voiceover.mp3",
  screenRecording: "Tutorial/Screen Recording Muted.MP4",
  introVideo: "Tutorial/Intro.MP4",
  outroVideo: "Tutorial/Outro.mp4",

  // Screen recording timing
  screenRecDurationSec: 42.0,

  // Intro hook text
  hookWords: [
    { text: "How", highlight: false },
    { text: "do", highlight: false },
    { text: "I", highlight: false },
    { text: "invert", highlight: true },
    { text: "my", highlight: false },
    { text: "route", highlight: true },
    { text: "in", highlight: false },
    { text: "the", highlight: false },
    { text: "Travel", highlight: false },
    { text: "Animator", highlight: false },
    { text: "app?", highlight: false },
  ],

  // Highlights (canvas coordinates, verified via PIL analysis)
  highlights: [
    // "Invert Route" — bottom option in routes menu
    { startFrame: 447, endFrame: 480, x: 320, y: 1428, width: 200, height: 40 },
  ],

  // Main voiceover word timings (frames, 0-based within main Sequence)
  mainWords: [
    { text: "After", startFrame: 0, endFrame: 8 },
    { text: "plotting", startFrame: 8, endFrame: 16 },
    { text: "your", startFrame: 16, endFrame: 23 },
    { text: "route", startFrame: 23, endFrame: 31 },
    { text: "in", startFrame: 31, endFrame: 37 },
    { text: "Travel", startFrame: 37, endFrame: 45 },
    { text: "Animator,", startFrame: 45, endFrame: 62 },
    { text: "tap", startFrame: 73, endFrame: 79 },
    { text: "Preview", startFrame: 79, endFrame: 94 },
    { text: "in", startFrame: 94, endFrame: 99 },
    { text: "the", startFrame: 99, endFrame: 102 },
    { text: "bottom", startFrame: 102, endFrame: 109 },
    { text: "right", startFrame: 109, endFrame: 117 },
    { text: "corner", startFrame: 117, endFrame: 129 },
    { text: "to", startFrame: 129, endFrame: 138 },
    { text: "check", startFrame: 138, endFrame: 145 },
    { text: "your", startFrame: 145, endFrame: 150 },
    { text: "animation.", startFrame: 150, endFrame: 163 },
    { text: "You'll", startFrame: 184, endFrame: 191 },
    { text: "realize", startFrame: 191, endFrame: 201 },
    { text: "you've", startFrame: 201, endFrame: 211 },
    { text: "actually", startFrame: 211, endFrame: 220 },
    { text: "plotted", startFrame: 220, endFrame: 229 },
    { text: "the", startFrame: 229, endFrame: 236 },
    { text: "route", startFrame: 236, endFrame: 244 },
    { text: "in", startFrame: 244, endFrame: 249 },
    { text: "the", startFrame: 249, endFrame: 253 },
    { text: "wrong", startFrame: 253, endFrame: 258 },
    { text: "direction.", startFrame: 258, endFrame: 271 },
    { text: "To", startFrame: 293, endFrame: 298 },
    { text: "quickly", startFrame: 298, endFrame: 306 },
    { text: "fix", startFrame: 306, endFrame: 315 },
    { text: "this,", startFrame: 315, endFrame: 323 },
    { text: "go", startFrame: 333, endFrame: 337 },
    { text: "back", startFrame: 337, endFrame: 343 },
    { text: "to", startFrame: 343, endFrame: 347 },
    { text: "the", startFrame: 347, endFrame: 351 },
    { text: "Home", startFrame: 351, endFrame: 356 },
    { text: "screen", startFrame: 356, endFrame: 365 },
    { text: "and", startFrame: 365, endFrame: 374 },
    { text: "tap", startFrame: 374, endFrame: 382 },
    { text: "Routes", startFrame: 382, endFrame: 392 },
    { text: "at", startFrame: 392, endFrame: 396 },
    { text: "the", startFrame: 396, endFrame: 399 },
    { text: "top.", startFrame: 399, endFrame: 407 },
    { text: "From", startFrame: 424, endFrame: 429 },
    { text: "the", startFrame: 429, endFrame: 434 },
    { text: "menu,", startFrame: 434, endFrame: 441 },
    { text: "select", startFrame: 447, endFrame: 452 },
    { text: "Invert", startFrame: 452, endFrame: 469 },
    { text: "Route.", startFrame: 469, endFrame: 476 },
    { text: "Your", startFrame: 493, endFrame: 497 },
    { text: "route", startFrame: 497, endFrame: 505 },
    { text: "is", startFrame: 505, endFrame: 509 },
    { text: "now", startFrame: 509, endFrame: 515 },
    { text: "flipped", startFrame: 515, endFrame: 522 },
    { text: "the", startFrame: 522, endFrame: 528 },
    { text: "right", startFrame: 528, endFrame: 535 },
    { text: "way.", startFrame: 535, endFrame: 545 },
    { text: "Head", startFrame: 559, endFrame: 564 },
    { text: "back", startFrame: 564, endFrame: 570 },
    { text: "to", startFrame: 570, endFrame: 575 },
    { text: "Preview", startFrame: 575, endFrame: 589 },
    { text: "to", startFrame: 589, endFrame: 595 },
    { text: "confirm", startFrame: 595, endFrame: 606 },
    { text: "everything", startFrame: 606, endFrame: 617 },
    { text: "looks", startFrame: 617, endFrame: 626 },
    { text: "correct.", startFrame: 626, endFrame: 637 },
    { text: "That's", startFrame: 653, endFrame: 664 },
    { text: "it!", startFrame: 664, endFrame: 668 },
  ],
};

export const TUTORIAL3_DURATION = getTutorialDuration(CONFIG);

export const Tutorial3: React.FC = () => {
  return <TutorialTemplate config={CONFIG} />;
};
