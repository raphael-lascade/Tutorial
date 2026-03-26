import { TutorialPart1, TutorialPart2, TutorialPart3, TutorialTemplate, getTutorialDuration, TutorialConfig } from "./TutorialTemplate";

const CONFIG: TutorialConfig = {
  // Durations
  introDuration: 205,  // 6.83s — hook voiceover 6.46s + padding
  mainDuration: 1040,  // 34.67s — main voiceover 34.37s + padding
  outroDuration: 76,   // 2.53s

  // Assets
  hookAudio: "Tutorial/hook-voiceover.mp3",
  mainAudio: "Tutorial/main-voiceover.mp3",
  screenRecording: "Tutorial/ScreenRecording-muted.MP4",
  introVideo: "Tutorial/Intro.MP4",
  outroVideo: "Tutorial/Outro.mp4",

  // Recording is 95.11s, main composition is 1040 frames (34.67s)
  screenRecDurationSec: 95.11,

  // Hook words
  hookWords: [
    { text: "How", highlight: false },
    { text: "do", highlight: false },
    { text: "I", highlight: false },
    { text: "export", highlight: true },
    { text: "my", highlight: false },
    { text: "animation", highlight: false },
    { text: "in", highlight: false },
    { text: "HD", highlight: false },
    { text: "or", highlight: false },
    { text: "4K,", highlight: true },
    { text: "save", highlight: true },
    { text: "it", highlight: false },
    { text: "to", highlight: false },
    { text: "my", highlight: false },
    { text: "gallery,", highlight: false },
    { text: "and", highlight: false },
    { text: "then", highlight: false },
    { text: "share", highlight: true },
    { text: "it?", highlight: false },
  ],

  // Highlights — TBD after Part 2 frame analysis
  highlights: [],

  // Main voiceover word timings (Whisper, 30fps, "4K" manually fixed)
  mainWords: [
    { text: "Once", startFrame: 0, endFrame: 12 },
    { text: "your", startFrame: 12, endFrame: 19 },
    { text: "route", startFrame: 19, endFrame: 25 },
    { text: "is", startFrame: 25, endFrame: 31 },
    { text: "ready,", startFrame: 31, endFrame: 40 },
    { text: "tap", startFrame: 50, endFrame: 53 },
    { text: "the", startFrame: 53, endFrame: 59 },
    { text: "Preview", startFrame: 59, endFrame: 70 },
    { text: "button", startFrame: 70, endFrame: 80 },
    { text: "in", startFrame: 80, endFrame: 85 },
    { text: "the", startFrame: 85, endFrame: 88 },
    { text: "bottom", startFrame: 88, endFrame: 96 },
    { text: "right", startFrame: 96, endFrame: 103 },
    { text: "corner.", startFrame: 103, endFrame: 118 },
    { text: "In", startFrame: 145, endFrame: 152 },
    { text: "the", startFrame: 152, endFrame: 155 },
    { text: "Preview", startFrame: 155, endFrame: 166 },
    { text: "screen,", startFrame: 166, endFrame: 177 },
    { text: "you", startFrame: 187, endFrame: 189 },
    { text: "can", startFrame: 189, endFrame: 193 },
    { text: "watch", startFrame: 193, endFrame: 199 },
    { text: "your", startFrame: 199, endFrame: 206 },
    { text: "animation", startFrame: 206, endFrame: 220 },
    { text: "play", startFrame: 220, endFrame: 230 },
    { text: "out.", startFrame: 230, endFrame: 241 },
    { text: "You'll", startFrame: 266, endFrame: 278 },
    { text: "notice", startFrame: 278, endFrame: 288 },
    { text: "an", startFrame: 288, endFrame: 296 },
    { text: "HD", startFrame: 296, endFrame: 304 },
    { text: "button", startFrame: 304, endFrame: 317 },
    { text: "in", startFrame: 317, endFrame: 322 },
    { text: "the", startFrame: 322, endFrame: 325 },
    { text: "settings,", startFrame: 325, endFrame: 337 },
    { text: "tap", startFrame: 348, endFrame: 352 },
    { text: "it", startFrame: 352, endFrame: 357 },
    { text: "and", startFrame: 357, endFrame: 361 },
    { text: "select", startFrame: 361, endFrame: 370 },
    { text: "4K", startFrame: 370, endFrame: 383 },
    { text: "for", startFrame: 383, endFrame: 390 },
    { text: "a", startFrame: 390, endFrame: 393 },
    { text: "higher", startFrame: 393, endFrame: 401 },
    { text: "quality", startFrame: 401, endFrame: 415 },
    { text: "export.", startFrame: 415, endFrame: 428 },
    { text: "When", startFrame: 452, endFrame: 468 },
    { text: "you're", startFrame: 468, endFrame: 473 },
    { text: "happy,", startFrame: 473, endFrame: 482 },
    { text: "tap", startFrame: 492, endFrame: 499 },
    { text: "Export.", startFrame: 499, endFrame: 512 },
    { text: "The", startFrame: 543, endFrame: 551 },
    { text: "app", startFrame: 551, endFrame: 558 },
    { text: "will", startFrame: 558, endFrame: 562 },
    { text: "start", startFrame: 562, endFrame: 570 },
    { text: "saving", startFrame: 570, endFrame: 580 },
    { text: "your", startFrame: 580, endFrame: 587 },
    { text: "video,", startFrame: 587, endFrame: 598 },
    { text: "just", startFrame: 607, endFrame: 611 },
    { text: "keep", startFrame: 611, endFrame: 617 },
    { text: "the", startFrame: 617, endFrame: 622 },
    { text: "screen", startFrame: 622, endFrame: 629 },
    { text: "on", startFrame: 629, endFrame: 636 },
    { text: "while", startFrame: 636, endFrame: 643 },
    { text: "it", startFrame: 643, endFrame: 649 },
    { text: "processes.", startFrame: 649, endFrame: 665 },
    { text: "Once", startFrame: 698, endFrame: 710 },
    { text: "it's", startFrame: 710, endFrame: 716 },
    { text: "done,", startFrame: 716, endFrame: 722 },
    { text: "your", startFrame: 731, endFrame: 733 },
    { text: "video", startFrame: 733, endFrame: 743 },
    { text: "is", startFrame: 743, endFrame: 751 },
    { text: "automatically", startFrame: 751, endFrame: 766 },
    { text: "saved", startFrame: 766, endFrame: 780 },
    { text: "to", startFrame: 780, endFrame: 788 },
    { text: "your", startFrame: 788, endFrame: 792 },
    { text: "gallery.", startFrame: 792, endFrame: 803 },
    { text: "You'll", startFrame: 823, endFrame: 840 },
    { text: "also", startFrame: 840, endFrame: 848 },
    { text: "see", startFrame: 848, endFrame: 857 },
    { text: "a", startFrame: 857, endFrame: 860 },
    { text: "Share", startFrame: 860, endFrame: 868 },
    { text: "button,", startFrame: 868, endFrame: 877 },
    { text: "so", startFrame: 877, endFrame: 887 },
    { text: "you", startFrame: 887, endFrame: 890 },
    { text: "can", startFrame: 890, endFrame: 895 },
    { text: "send", startFrame: 895, endFrame: 901 },
    { text: "it", startFrame: 901, endFrame: 905 },
    { text: "straight", startFrame: 905, endFrame: 914 },
    { text: "to", startFrame: 914, endFrame: 921 },
    { text: "Instagram,", startFrame: 921, endFrame: 936 },
    { text: "TikTok,", startFrame: 947, endFrame: 952 },
    { text: "or", startFrame: 952, endFrame: 974 },
    { text: "anywhere", startFrame: 974, endFrame: 986 },
    { text: "you'd", startFrame: 986, endFrame: 995 },
    { text: "like.", startFrame: 995, endFrame: 1003 },
  ],
};

export const TUTORIAL5_PART1_DURATION = CONFIG.introDuration;
export const TUTORIAL5_PART2_DURATION = CONFIG.mainDuration;
export const TUTORIAL5_PART3_DURATION = CONFIG.outroDuration;
export const TUTORIAL5_DURATION = getTutorialDuration(CONFIG);

export const Tutorial5Part1: React.FC = () => <TutorialPart1 config={CONFIG} />;
export const Tutorial5Part2: React.FC = () => <TutorialPart2 config={CONFIG} />;
export const Tutorial5Part3: React.FC = () => <TutorialPart3 config={CONFIG} />;
export const Tutorial5: React.FC = () => <TutorialTemplate config={CONFIG} />;
