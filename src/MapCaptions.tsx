import { AbsoluteFill, Audio, staticFile } from "remotion";
import "./fonts";
import { CaptionWord, TACaptions } from "./TACaptions";

// Word timestamps from Whisper transcription of map.wav
// Frames = Math.round(seconds * 30)
const WORDS: CaptionWord[] = [
  { text: "Turn",         startFrame: 0,   endFrame: 7   },
  { text: "this",         startFrame: 7,   endFrame: 13  },
  { text: "into",         startFrame: 13,  endFrame: 37  },
  { text: "this.",        startFrame: 37,  endFrame: 47  },
  { text: "First,",       startFrame: 92,  endFrame: 104 },
  { text: "copy",         startFrame: 112, endFrame: 118 },
  { text: "the",          startFrame: 118, endFrame: 122 },
  { text: "root",         startFrame: 122, endFrame: 126 },
  { text: "link",         startFrame: 126, endFrame: 131 },
  { text: "you",          startFrame: 131, endFrame: 137 },
  { text: "want",         startFrame: 137, endFrame: 140 },
  { text: "to",           startFrame: 140, endFrame: 145 },
  { text: "animate",      startFrame: 145, endFrame: 152 },
  { text: "from",         startFrame: 152, endFrame: 158 },
  { text: "Google",       startFrame: 158, endFrame: 164 },
  { text: "Maps.",        startFrame: 164, endFrame: 179 },
  { text: "Then,",        startFrame: 179, endFrame: 187 },
  { text: "install",      startFrame: 187, endFrame: 194 },
  { text: "this",         startFrame: 194, endFrame: 200 },
  { text: "app",          startFrame: 200, endFrame: 205 },
  { text: "on",           startFrame: 205, endFrame: 208 },
  { text: "your",         startFrame: 208, endFrame: 211 },
  { text: "phone",        startFrame: 211, endFrame: 218 },
  { text: "from",         startFrame: 218, endFrame: 223 },
  { text: "App",          startFrame: 223, endFrame: 227 },
  { text: "Store",        startFrame: 227, endFrame: 234 },
  { text: "or",           startFrame: 234, endFrame: 240 },
  { text: "Play",         startFrame: 240, endFrame: 245 },
  { text: "Store",        startFrame: 245, endFrame: 252 },
  { text: "or",           startFrame: 252, endFrame: 259 },
  { text: "just",         startFrame: 259, endFrame: 263 },
  { text: "comment",      startFrame: 263, endFrame: 272 },
  { text: "map.",         startFrame: 272, endFrame: 296 },
  { text: "After",        startFrame: 296, endFrame: 302 },
  { text: "opening",      startFrame: 302, endFrame: 310 },
  { text: "the",          startFrame: 310, endFrame: 316 },
  { text: "app,",         startFrame: 316, endFrame: 325 },
  { text: "click",        startFrame: 325, endFrame: 328 },
  { text: "on",           startFrame: 328, endFrame: 332 },
  { text: "this",         startFrame: 332, endFrame: 336 },
  { text: "icon",         startFrame: 336, endFrame: 346 },
  { text: "and",          startFrame: 346, endFrame: 355 },
  { text: "then",         startFrame: 355, endFrame: 359 },
  { text: "on",           startFrame: 359, endFrame: 362 },
  { text: "the",          startFrame: 362, endFrame: 366 },
  { text: "paste",        startFrame: 366, endFrame: 373 },
  { text: "google",       startFrame: 373, endFrame: 381 },
  { text: "maps",         startFrame: 381, endFrame: 389 },
  { text: "link",         startFrame: 389, endFrame: 400 },
  { text: "option.",      startFrame: 400, endFrame: 421 },
  { text: "Paste",        startFrame: 421, endFrame: 424 },
  { text: "the",          startFrame: 424, endFrame: 430 },
  { text: "root",         startFrame: 430, endFrame: 435 },
  { text: "link",         startFrame: 435, endFrame: 441 },
  { text: "we",           startFrame: 441, endFrame: 445 },
  { text: "copied",       startFrame: 445, endFrame: 452 },
  { text: "earlier",      startFrame: 452, endFrame: 466 },
  { text: "in",           startFrame: 466, endFrame: 470 },
  { text: "this",         startFrame: 470, endFrame: 475 },
  { text: "box",          startFrame: 475, endFrame: 479 },
  { text: "and",          startFrame: 479, endFrame: 488 },
  { text: "click",        startFrame: 488, endFrame: 494 },
  { text: "plot",         startFrame: 494, endFrame: 505 },
  { text: "root",         startFrame: 505, endFrame: 512 },
  { text: "and",          startFrame: 512, endFrame: 521 },
  { text: "you",          startFrame: 521, endFrame: 524 },
  { text: "will",         startFrame: 524, endFrame: 528 },
  { text: "get",          startFrame: 528, endFrame: 531 },
  { text: "the",          startFrame: 531, endFrame: 536 },
  { text: "root",         startFrame: 536, endFrame: 541 },
  { text: "plotted",      startFrame: 541, endFrame: 550 },
  { text: "in",           startFrame: 550, endFrame: 557 },
  { text: "seconds.",     startFrame: 557, endFrame: 578 },
  { text: "Finally,",     startFrame: 578, endFrame: 592 },
  { text: "click",        startFrame: 592, endFrame: 594 },
  { text: "on",           startFrame: 594, endFrame: 599 },
  { text: "preview",      startFrame: 599, endFrame: 607 },
  { text: "to",           startFrame: 607, endFrame: 614 },
  { text: "see",          startFrame: 614, endFrame: 619 },
  { text: "your",         startFrame: 619, endFrame: 622 },
  { text: "animation",    startFrame: 622, endFrame: 632 },
  { text: "and",          startFrame: 632, endFrame: 645 },
  { text: "export",       startFrame: 645, endFrame: 655 },
  { text: "it",           startFrame: 655, endFrame: 660 },
  { text: "after",        startFrame: 660, endFrame: 670 },
  { text: "making",       startFrame: 670, endFrame: 677 },
  { text: "your",         startFrame: 677, endFrame: 683 },
  { text: "adjustments.", startFrame: 683, endFrame: 720 },
];

export const MAP_CAPTIONS_DURATION = 720; // 24 seconds @ 30fps

export const MapCaptions: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#33a4fe" }}>
      <Audio src={staticFile("map.wav")} />
      <TACaptions
        words={WORDS}
        highlightStyle="green-pill"
        backgroundType="blue"
        fontSize={68}
        wordsPerLine={3}
        bottomOffset={340}
      />
    </AbsoluteFill>
  );
};
