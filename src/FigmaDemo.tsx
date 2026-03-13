import {
  AbsoluteFill,
  Audio,

  interpolate,
  OffthreadVideo,
  Sequence,
  staticFile,
  useCurrentFrame,
} from "remotion";
import "./fonts";
import { TACaptions, CaptionWord } from "./TACaptions";

// ─────────────────────────────────────────────────────────────────────────────
// Figma Design Values
// File: sTi5XMHnBXLoyYrROgTwuA  |  Page: Body & Intro
// ─────────────────────────────────────────────────────────────────────────────

// Background gradient — from Figma frame 4:63
const BG = "linear-gradient(to bottom, #00a2ff, #0739b0)";

// Screen recording area — verified via PIL alpha-channel pixel analysis of the PNG
// (Figma layer values differ; PNG actual transparent hole is the source of truth)
const SCREEN = { left: 307, top: 423, width: 498, height: 1074, radius: 55 };


// Caption vertical position — Figma frame 4:63
// Caption pill: y=327, height=75 → pill bottom = 402 → bottomOffset = 1920 - 402 = 1518
const CAPTION_BOTTOM = 1518;
const CAPTION_FONT_SIZE = 64; // px — matches Figma spec

// Intro text block — Figma frame 4:103
const INTRO_TEXT_LEFT = 93;   // x=93 in Figma
const INTRO_TEXT_TOP_SPEC = 311; // y=311 for 3-4 line layout

// Intro video — Figma frame 4:103, "Rectangle 3"
const INTRO_VID = { left: 93, top: 804, width: 402, height: 715, radius: 28 };

const TRANSITION = 15; // 0.5s at 30fps

// ─────────────────────────────────────────────────────────────────────────────
// Hook Text — word spans with optional green-pill highlight
// ─────────────────────────────────────────────────────────────────────────────
const HookText: React.FC<{
  words: { text: string; highlight: boolean }[];
  fontSize: number;
  style?: React.CSSProperties;
}> = ({ words, fontSize, style }) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: 14,
      ...style,
    }}
  >
    {words.map((word, i) => (
      <span
        key={i}
        style={{
          fontFamily: "SFProRounded, sans-serif",
          fontSize,
          fontWeight: 700,
          color: "#ffffff",
          lineHeight: 1.3,
          letterSpacing: -0.5,
          ...(word.highlight
            ? {
                backgroundColor: "#22C55E",
                borderRadius: 20,
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 22,
                paddingRight: 22,
              }
            : {}),
        }}
      >
        {word.text}
      </span>
    ))}
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Estimate rendered line count (SF Pro Rounded Bold, ~0.55 × fontSize per char)
// ─────────────────────────────────────────────────────────────────────────────
function estimateLines(
  words: { text: string; highlight: boolean }[],
  fontSize: number,
  containerWidth: number
): number {
  const charW = fontSize * 0.55;
  const gap = 14;
  const pillPad = 44; // 22×2 horizontal padding for highlighted words
  let lines = 1;
  let x = 0;
  for (const word of words) {
    const ww = word.text.length * charW + (word.highlight ? pillPad : 0);
    if (x > 0 && x + gap + ww > containerWidth) {
      lines++;
      x = ww;
    } else {
      x += (x > 0 ? gap : 0) + ww;
    }
  }
  return lines;
}

// ─────────────────────────────────────────────────────────────────────────────
// Part 1: Intro — adaptive layout
//
// Layout rules (Figma-derived):
//   1 line  → large font (120px), vertically centered, video centered below
//   2 lines → font 105px, even vertical spacing (text + video grouped center)
//   3 lines → font 95px, text at y=311 (top-weighted), video at y=804
//   4 lines → Figma spec: font 90px, text at y=311, video at y=804
//   no video→ text fully centered on screen at largest fitting font
// ─────────────────────────────────────────────────────────────────────────────
const FigmaIntro: React.FC<{
  hookWords: { text: string; highlight: boolean }[];
  introVideo?: string;
  introDuration: number;
}> = ({ hookWords, introVideo, introDuration }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [0, TRANSITION, introDuration - TRANSITION, introDuration],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const containerW = 1080 - INTRO_TEXT_LEFT * 2; // 894px

  if (!introVideo) {
    // No video — center text, scale font to ~100px
    return (
      <AbsoluteFill style={{ background: BG, opacity }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: INTRO_TEXT_LEFT,
            paddingRight: INTRO_TEXT_LEFT,
          }}
        >
          <HookText words={hookWords} fontSize={100} />
        </div>
      </AbsoluteFill>
    );
  }

  // Determine font size from estimated line count at a target size
  const fontSize4 = 90;
  const fontSize3 = 95;
  const fontSize2 = 105;
  const fontSize1 = 120;

  const lines4 = estimateLines(hookWords, fontSize4, containerW);
  const lines3 = estimateLines(hookWords, fontSize3, containerW);
  const lines2 = estimateLines(hookWords, fontSize2, containerW);

  // Pick the mode: 4-line spec, 3-line, 2-line, or 1-line
  if (lines4 >= 4) {
    // ── 4-line mode: Figma spec exactly ──
    return (
      <AbsoluteFill style={{ background: BG, opacity }}>
        <div
          style={{
            position: "absolute",
            top: INTRO_TEXT_TOP_SPEC,
            left: INTRO_TEXT_LEFT,
            right: INTRO_TEXT_LEFT,
          }}
        >
          <HookText words={hookWords} fontSize={fontSize4} />
        </div>
        <IntroVideoBlock top={INTRO_VID.top} src={introVideo} />
      </AbsoluteFill>
    );
  }

  if (lines3 >= 3) {
    // ── 3-line mode: text at y=311, video at y=804 ──
    return (
      <AbsoluteFill style={{ background: BG, opacity }}>
        <div
          style={{
            position: "absolute",
            top: INTRO_TEXT_TOP_SPEC,
            left: INTRO_TEXT_LEFT,
            right: INTRO_TEXT_LEFT,
          }}
        >
          <HookText words={hookWords} fontSize={fontSize3} />
        </div>
        <IntroVideoBlock top={INTRO_VID.top} src={introVideo} />
      </AbsoluteFill>
    );
  }

  if (lines2 >= 2) {
    // ── 2-line mode: group text + video, center vertically ──
    const lineH = Math.round(fontSize2 * 1.3);
    const textBlockH = lineH * 2 + 12; // 2 lines + small extra for wrapping
    const gap = 70;
    const totalH = textBlockH + gap + INTRO_VID.height;
    const groupTop = Math.round((1920 - totalH) / 2);
    const textTop = Math.max(groupTop, 300);
    const videoTop = textTop + textBlockH + gap;
    return (
      <AbsoluteFill style={{ background: BG, opacity }}>
        <div
          style={{
            position: "absolute",
            top: textTop,
            left: INTRO_TEXT_LEFT,
            right: INTRO_TEXT_LEFT,
          }}
        >
          <HookText words={hookWords} fontSize={fontSize2} />
        </div>
        <IntroVideoBlock top={videoTop} src={introVideo} centered />
      </AbsoluteFill>
    );
  }

  // ── 1-line mode: larger font, center text + video ──
  const lineH1 = Math.round(fontSize1 * 1.3);
  const gap1 = 80;
  const totalH1 = lineH1 + gap1 + INTRO_VID.height;
  const groupTop1 = Math.round((1920 - totalH1) / 2);
  const textTop1 = Math.max(groupTop1, 320);
  const videoTop1 = textTop1 + lineH1 + gap1;
  return (
    <AbsoluteFill style={{ background: BG, opacity }}>
      <div
        style={{
          position: "absolute",
          top: textTop1,
          left: INTRO_TEXT_LEFT,
          right: INTRO_TEXT_LEFT,
        }}
      >
        <HookText words={hookWords} fontSize={fontSize1} />
      </div>
      <IntroVideoBlock top={videoTop1} src={introVideo} centered />
    </AbsoluteFill>
  );
};

// Small helper to avoid repeating intro video markup
// centered=true horizontally centers the video (used for 1-2 line layouts)
const IntroVideoBlock: React.FC<{ top: number; src: string; centered?: boolean }> = ({
  top,
  src,
  centered,
}) => {
  const left = centered ? Math.round((1080 - INTRO_VID.width) / 2) : INTRO_VID.left;
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        width: INTRO_VID.width,
        height: INTRO_VID.height,
        borderRadius: INTRO_VID.radius,
        border: "5px solid rgba(255,255,255,0.85)",
        overflow: "hidden",
        backgroundColor: "#000000",
      }}
    >
      <OffthreadVideo
        src={staticFile(src)}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Part 2: Main Content — Figma-exact phone mockup + captions
// ─────────────────────────────────────────────────────────────────────────────
const FigmaMain: React.FC<{
  screenRecording: string;
  mainAudio: string;
  mainWords: CaptionWord[];
  mainDuration: number;
  screenRecDurationSec: number;
}> = ({ screenRecording, mainAudio, mainWords, mainDuration, screenRecDurationSec }) => {
  const frame = useCurrentFrame();
  const playbackRate = screenRecDurationSec / (mainDuration / 30);

  const blurIn = interpolate(frame, [0, TRANSITION], [8, 0], { extrapolateRight: "clamp" });
  const opacity = interpolate(
    frame,
    [0, TRANSITION, mainDuration - TRANSITION, mainDuration],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        background: BG,
        opacity,
        filter: blurIn > 0 ? `blur(${blurIn}px)` : undefined,
      }}
    >
      <Audio src={staticFile(mainAudio)} />

      {/* Screen recording — white border, rounded corners, no phone mockup */}
      <div
        style={{
          position: "absolute",
          left: SCREEN.left,
          top: SCREEN.top,
          width: SCREEN.width,
          height: SCREEN.height,
          borderRadius: SCREEN.radius,
          border: "9px solid rgba(255,255,255,0.85)",
          overflow: "hidden",
          backgroundColor: "#000000",
        }}
      >
        <OffthreadVideo
          src={staticFile(screenRecording)}
          playbackRate={playbackRate}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "0 0",
          }}
        />
      </div>

      {/* Captions — Figma: caption pill y=327-402, bottomOffset=1518, font=64 */}
      <TACaptions
        words={mainWords}
        highlightStyle="green-pill"
        backgroundType="blue"
        fontSize={CAPTION_FONT_SIZE}
        wordsPerLine={3}
        bottomOffset={CAPTION_BOTTOM}
      />
    </AbsoluteFill>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Part 3: Outro — plays video as-is, scale+fade transition in
// ─────────────────────────────────────────────────────────────────────────────
const FigmaOutro: React.FC<{ outroVideo: string; outroDuration: number }> = ({
  outroVideo,
  outroDuration: _outroDuration,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, TRANSITION], [0, 1], { extrapolateRight: "clamp" });
  const scale = interpolate(frame, [0, TRANSITION], [1.05, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ opacity, transform: `scale(${scale})` }}>
      <OffthreadVideo
        src={staticFile(outroVideo)}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </AbsoluteFill>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Config — Tutorial folder assets (most recent tutorial)
// ─────────────────────────────────────────────────────────────────────────────
const INTRO_DURATION = 120;  // 4s @ 30fps
const MAIN_DURATION  = 1060; // 35.33s
const OUTRO_DURATION = 76;   // 2.53s

const HOOK_WORDS: { text: string; highlight: boolean }[] = [
  { text: "How",    highlight: false },
  { text: "To",     highlight: false },
  { text: "Enable", highlight: true  },
  { text: "Real",   highlight: true  },
  { text: "Route?", highlight: false },
];

const MAIN_WORDS: CaptionWord[] = [
  { text: "Once",        startFrame: 0,    endFrame: 4    },
  { text: "you",         startFrame: 4,    endFrame: 10   },
  { text: "have",        startFrame: 10,   endFrame: 14   },
  { text: "plotted",     startFrame: 14,   endFrame: 23   },
  { text: "your",        startFrame: 23,   endFrame: 29   },
  { text: "route",       startFrame: 29,   endFrame: 37   },
  { text: "in",          startFrame: 37,   endFrame: 43   },
  { text: "Travel",      startFrame: 43,   endFrame: 53   },
  { text: "Animator,",   startFrame: 53,   endFrame: 71   },
  { text: "open",        startFrame: 82,   endFrame: 88   },
  { text: "the",         startFrame: 88,   endFrame: 94   },
  { text: "Preview",     startFrame: 94,   endFrame: 108  },
  { text: "and",         startFrame: 108,  endFrame: 116  },
  { text: "you",         startFrame: 116,  endFrame: 121  },
  { text: "will",        startFrame: 121,  endFrame: 124  },
  { text: "notice",      startFrame: 124,  endFrame: 133  },
  { text: "it",          startFrame: 133,  endFrame: 139  },
  { text: "shows",       startFrame: 139,  endFrame: 146  },
  { text: "a",           startFrame: 146,  endFrame: 153  },
  { text: "straight",    startFrame: 153,  endFrame: 160  },
  { text: "line",        startFrame: 160,  endFrame: 170  },
  { text: "from",        startFrame: 170,  endFrame: 177  },
  { text: "start",       startFrame: 177,  endFrame: 186  },
  { text: "to",          startFrame: 186,  endFrame: 193  },
  { text: "finish.",     startFrame: 193,  endFrame: 205  },
  { text: "To",          startFrame: 216,  endFrame: 223  },
  { text: "fix",         startFrame: 223,  endFrame: 230  },
  { text: "this,",       startFrame: 230,  endFrame: 239  },
  { text: "go",          startFrame: 249,  endFrame: 252  },
  { text: "back",        startFrame: 252,  endFrame: 257  },
  { text: "to",          startFrame: 257,  endFrame: 263  },
  { text: "the",         startFrame: 263,  endFrame: 266  },
  { text: "map",         startFrame: 266,  endFrame: 273  },
  { text: "and",         startFrame: 273,  endFrame: 280  },
  { text: "long",        startFrame: 280,  endFrame: 287  },
  { text: "press",       startFrame: 287,  endFrame: 298  },
  { text: "your",        startFrame: 298,  endFrame: 305  },
  { text: "starting",    startFrame: 305,  endFrame: 318  },
  { text: "destination", startFrame: 318,  endFrame: 334  },
  { text: "icon.",       startFrame: 334,  endFrame: 352  },
  { text: "A",           startFrame: 371,  endFrame: 374  },
  { text: "menu",        startFrame: 374,  endFrame: 382  },
  { text: "will",        startFrame: 382,  endFrame: 390  },
  { text: "appear,",     startFrame: 390,  endFrame: 400  },
  { text: "tap",         startFrame: 416,  endFrame: 422  },
  { text: "Real",        startFrame: 422,  endFrame: 444  },
  { text: "Route.",      startFrame: 444,  endFrame: 460  },
  { text: "Your",        startFrame: 471,  endFrame: 478  },
  { text: "path",        startFrame: 478,  endFrame: 487  },
  { text: "will",        startFrame: 487,  endFrame: 494  },
  { text: "now",         startFrame: 494,  endFrame: 500  },
  { text: "follow",      startFrame: 500,  endFrame: 511  },
  { text: "actual",      startFrame: 511,  endFrame: 526  },
  { text: "roads",       startFrame: 526,  endFrame: 539  },
  { text: "instead",     startFrame: 539,  endFrame: 550  },
  { text: "of",          startFrame: 550,  endFrame: 554  },
  { text: "a",           startFrame: 554,  endFrame: 556  },
  { text: "straight",    startFrame: 556,  endFrame: 563  },
  { text: "line.",       startFrame: 563,  endFrame: 576  },
  { text: "If",          startFrame: 589,  endFrame: 595  },
  { text: "an",          startFrame: 595,  endFrame: 599  },
  { text: "alternate",   startFrame: 599,  endFrame: 608  },
  { text: "route",       startFrame: 608,  endFrame: 616  },
  { text: "is",          startFrame: 616,  endFrame: 621  },
  { text: "available,",  startFrame: 621,  endFrame: 632  },
  { text: "you",         startFrame: 640,  endFrame: 641  },
  { text: "can",         startFrame: 641,  endFrame: 646  },
  { text: "choose",      startFrame: 646,  endFrame: 653  },
  { text: "it.",         startFrame: 653,  endFrame: 661  },
  { text: "Otherwise,",  startFrame: 672,  endFrame: 684  },
  { text: "just",        startFrame: 692,  endFrame: 695  },
  { text: "go",          startFrame: 695,  endFrame: 702  },
  { text: "with",        startFrame: 702,  endFrame: 707  },
  { text: "the",         startFrame: 707,  endFrame: 711  },
  { text: "default.",    startFrame: 711,  endFrame: 721  },
  { text: "Now",         startFrame: 739,  endFrame: 749  },
  { text: "check",       startFrame: 749,  endFrame: 758  },
  { text: "the",         startFrame: 758,  endFrame: 765  },
  { text: "Preview",     startFrame: 765,  endFrame: 777  },
  { text: "again",       startFrame: 777,  endFrame: 785  },
  { text: "and",         startFrame: 785,  endFrame: 791  },
  { text: "you",         startFrame: 791,  endFrame: 795  },
  { text: "will",        startFrame: 795,  endFrame: 799  },
  { text: "see",         startFrame: 799,  endFrame: 805  },
  { text: "a",           startFrame: 805,  endFrame: 809  },
  { text: "huge",        startFrame: 809,  endFrame: 823  },
  { text: "difference.", startFrame: 823,  endFrame: 836  },
  { text: "A",           startFrame: 847,  endFrame: 858  },
  { text: "smooth,",     startFrame: 858,  endFrame: 870  },
  { text: "realistic",   startFrame: 879,  endFrame: 890  },
  { text: "animation",   startFrame: 890,  endFrame: 906  },
  { text: "that",        startFrame: 906,  endFrame: 917  },
  { text: "follows",     startFrame: 917,  endFrame: 926  },
  { text: "real",        startFrame: 926,  endFrame: 938  },
  { text: "streets,",    startFrame: 938,  endFrame: 950  },
  { text: "making",      startFrame: 964,  endFrame: 968  },
  { text: "your",        startFrame: 968,  endFrame: 976  },
  { text: "map",         startFrame: 976,  endFrame: 981  },
  { text: "video",       startFrame: 981,  endFrame: 993  },
  { text: "look",        startFrame: 993,  endFrame: 1001 },
  { text: "much",        startFrame: 1001, endFrame: 1008 },
  { text: "more",        startFrame: 1008, endFrame: 1013 },
  { text: "professional.",startFrame: 1013, endFrame: 1028 },
];

// ─────────────────────────────────────────────────────────────────────────────
// Composition
// ─────────────────────────────────────────────────────────────────────────────
export const FIGMA_DEMO_DURATION = INTRO_DURATION + MAIN_DURATION + OUTRO_DURATION;

export const FigmaDemo: React.FC = () => (
  <AbsoluteFill style={{ background: BG }}>
    {/* Part 1 — Intro */}
    <Sequence from={0} durationInFrames={INTRO_DURATION}>
      <Audio src={staticFile("Tutorial/hook-voiceover.mp3")} />
      <FigmaIntro
        hookWords={HOOK_WORDS}
        introVideo="Tutorial/Intro-trimmed.MP4"
        introDuration={INTRO_DURATION}
      />
    </Sequence>

    {/* Part 2 — Main content */}
    <Sequence from={INTRO_DURATION} durationInFrames={MAIN_DURATION}>
      <FigmaMain
        screenRecording="Tutorial/ScreenRecording-muted.MP4"
        mainAudio="Tutorial/main-voiceover.mp3"
        mainWords={MAIN_WORDS}
        mainDuration={MAIN_DURATION}
        screenRecDurationSec={51.5}
      />
    </Sequence>

    {/* Part 3 — Outro */}
    <Sequence from={INTRO_DURATION + MAIN_DURATION} durationInFrames={OUTRO_DURATION}>
      <FigmaOutro outroVideo="Tutorial/Outro.mp4" outroDuration={OUTRO_DURATION} />
    </Sequence>
  </AbsoluteFill>
);
