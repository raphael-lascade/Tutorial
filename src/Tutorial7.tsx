import { TutorialPart1, TutorialPart2, TutorialPart3, TutorialTemplate, getTutorialDuration, TutorialConfig } from "./TutorialTemplate";

const INTRO_DURATION = 370; // 12.33s @ 30fps (from public/Tutorial/Intro.MP4)
const MAIN_DURATION = 5037; // 167.92s @ 30fps (from public/Tutorial/Screen Recording.MP4)
const OUTRO_DURATION = 76;  // 2.53s @ 30fps (from public/Tutorial/Outro.mp4)

const CONFIG: TutorialConfig = {
  // Durations
  introDuration: INTRO_DURATION,
  mainDuration: MAIN_DURATION,
  outroDuration: OUTRO_DURATION,

  // Assets (relative to public/)
  screenRecording: "Tutorial/Screen Recording.MP4",
  introVideo: "Tutorial/Intro.MP4",
  outroVideo: "Tutorial/Outro.mp4",

  // No separate voiceovers provided yet; video audio will play as-is
  // hookAudio: "Tutorial/hook-voiceover.mp3",
  // mainAudio: "Tutorial/main-voiceover.mp3",

  // Recording length in seconds (used for playbackRate)
  screenRecDurationSec: 167.915011,

  // Hook words (placeholder — replace with your actual hook)
  hookWords: [
    { text: "Add", highlight: false },
    { text: "your", highlight: false },
    { text: "hook", highlight: true },
    { text: "text", highlight: false },
    { text: "here", highlight: false },
  ],

  // Highlights — fill in after timing review
  highlights: [],

  // Main voiceover word timings — empty until provided
  mainWords: [],
};

export const TUTORIAL7_PART1_DURATION = CONFIG.introDuration;
export const TUTORIAL7_PART2_DURATION = CONFIG.mainDuration;
export const TUTORIAL7_PART3_DURATION = CONFIG.outroDuration;
export const TUTORIAL7_DURATION = getTutorialDuration(CONFIG);

export const Tutorial7Part1: React.FC = () => <TutorialPart1 config={CONFIG} />;
export const Tutorial7Part2: React.FC = () => <TutorialPart2 config={CONFIG} />;
export const Tutorial7Part3: React.FC = () => <TutorialPart3 config={CONFIG} />;
export const Tutorial7: React.FC = () => <TutorialTemplate config={CONFIG} />;
