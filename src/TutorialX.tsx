import { TutorialPart1, TutorialPart2, TutorialPart3, TutorialTemplate, getTutorialDuration, TutorialConfig } from "./TutorialTemplate";

const INTRO_DURATION = 92;   // 3.06s @ 30fps (hook-voiceover.mp3)
const MAIN_DURATION = 435;   // 14.5s @ 30fps (main-voiceover.mp3 is 14.03s + padding)
const OUTRO_DURATION = 76;   // 2.53s @ 30fps (Outro.mp4)

const CONFIG: TutorialConfig = {
  introDuration: INTRO_DURATION,
  mainDuration: MAIN_DURATION,
  outroDuration: OUTRO_DURATION,

  hookAudio: "TutorialX/hook-voiceover.mp3",
  mainAudio: "TutorialX/main-voiceover.mp3",
  screenRecording: "TutorialX/Screen Recording Muted.MP4",
  outroVideo: "TutorialX/Outro.mp4",

  screenRecDurationSec: 38.9, // playbackRate ≈ 2.69x

  hookWords: [
    { text: "How do I", highlight: false },
    { text: "redeem", highlight: true },
    { text: "a promo code", highlight: true },
    { text: "in Travel Animator?", highlight: false },
  ],

  highlights: [],

  mainWords: [
    { text: "From", startFrame: 0, endFrame: 6 },
    { text: "the", startFrame: 8, endFrame: 10 },
    { text: "home", startFrame: 11, endFrame: 18 },
    { text: "screen,", startFrame: 19, endFrame: 34 },
    { text: "tap", startFrame: 38, endFrame: 45 },
    { text: "the", startFrame: 47, endFrame: 49 },
    { text: "Settings", startFrame: 50, endFrame: 62 },
    { text: "button", startFrame: 63, endFrame: 71 },
    { text: "in", startFrame: 74, endFrame: 76 },
    { text: "the", startFrame: 77, endFrame: 79 },
    { text: "top", startFrame: 80, endFrame: 86 },
    { text: "right", startFrame: 88, endFrame: 94 },
    { text: "corner.", startFrame: 96, endFrame: 111 },
    { text: "Scroll", startFrame: 125, endFrame: 135 },
    { text: "down", startFrame: 137, endFrame: 144 },
    { text: "and", startFrame: 146, endFrame: 148 },
    { text: "tap", startFrame: 150, endFrame: 160 },
    { text: "Do", startFrame: 175, endFrame: 179 },
    { text: "you", startFrame: 181, endFrame: 184 },
    { text: "have", startFrame: 185, endFrame: 189 },
    { text: "a", startFrame: 190, endFrame: 191 },
    { text: "promo", startFrame: 192, endFrame: 202 },
    { text: "code.", startFrame: 204, endFrame: 216 },
    { text: "Enter", startFrame: 224, endFrame: 232 },
    { text: "your", startFrame: 233, endFrame: 237 },
    { text: "promo", startFrame: 239, endFrame: 249 },
    { text: "code", startFrame: 251, endFrame: 260 },
    { text: "and", startFrame: 261, endFrame: 265 },
    { text: "tap", startFrame: 266, endFrame: 274 },
    { text: "Claim", startFrame: 276, endFrame: 285 },
    { text: "Offer.", startFrame: 287, endFrame: 301 },
    { text: "Wait", startFrame: 313, endFrame: 320 },
    { text: "a", startFrame: 321, endFrame: 322 },
    { text: "moment", startFrame: 324, endFrame: 333 },
    { text: "and", startFrame: 334, endFrame: 338 },
    { text: "your", startFrame: 340, endFrame: 343 },
    { text: "app", startFrame: 345, endFrame: 350 },
    { text: "will", startFrame: 351, endFrame: 355 },
    { text: "be", startFrame: 356, endFrame: 358 },
    { text: "unlocked", startFrame: 360, endFrame: 373 },
    { text: "to", startFrame: 375, endFrame: 378 },
    { text: "the", startFrame: 380, endFrame: 382 },
    { text: "premium", startFrame: 383, endFrame: 395 },
    { text: "version.", startFrame: 396, endFrame: 421 },
  ],
};

export const TUTORIALX_PART1_DURATION = CONFIG.introDuration;
export const TUTORIALX_PART2_DURATION = CONFIG.mainDuration;
export const TUTORIALX_PART3_DURATION = CONFIG.outroDuration;
export const TUTORIALX_DURATION = getTutorialDuration(CONFIG);

export const TutorialXPart1: React.FC = () => <TutorialPart1 config={CONFIG} />;
export const TutorialXPart2: React.FC = () => <TutorialPart2 config={CONFIG} />;
export const TutorialXPart3: React.FC = () => <TutorialPart3 config={CONFIG} />;
export const TutorialX: React.FC = () => <TutorialTemplate config={CONFIG} />;
