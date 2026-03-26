import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  OffthreadVideo,
  Sequence,
  staticFile,
  useCurrentFrame,
} from "remotion";
import "./fonts";
import { CaptionWord, TACaptions } from "./TACaptions";

// ── Durations ──
const INTRO_DURATION = 135; // ~4.5s (hook voiceover is 4.23s + padding)
const MAIN_DURATION = 510; // ~17s (main voiceover is 16.9s)
const OUTRO_DURATION = 76; // 2.53s
const TRANSITION = 15; // 0.5s transition frames
const FPS = 30;

export const TUTORIAL2_DURATION = INTRO_DURATION + MAIN_DURATION + OUTRO_DURATION; // 721

// ── Asset paths ──
const HOOK_AUDIO = "Tutorial/hook-voiceover.mp3";
const MAIN_AUDIO = "Tutorial/main-voiceover.mp3";
const SCREEN_REC = "Tutorial/Screen Recording Muted.MP4";
const OUTRO_VIDEO = "Tutorial/Outro.mp4";
const MOCKUP_SRC = "Tutorial 1/iphone 12 pro mockup.png";

// ── Phone screen area ──
const SCREEN = { left: 298, top: 418, width: 516, height: 1088 };
const SCREEN_RADIUS = 42;

// ── Screen recording timing ──
const SCREEN_REC_DURATION_SEC = 31.0;
const MAIN_PLAYBACK_RATE = SCREEN_REC_DURATION_SEC / (MAIN_DURATION / FPS); // ~1.82x

// ── Highlight config ──
interface HighlightConfig {
  startFrame: number;
  endFrame: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

// Highlights are relative to main content start (frame 0 within main Sequence)
// Highlights are relative to main content start (frame 0 within main Sequence)
// Positions verified via PIL pixel analysis on rendered frames
// Positions mapped from original video (888x1920) → canvas via scale=0.5811
const HIGHLIGHTS: HighlightConfig[] = [
  // "settings icon" — gear ⚙ icon, original video x=799-831 y=146-179 → canvas x=762 y=503
  { startFrame: 92, endFrame: 140, x: 748, y: 489, width: 47, height: 47 },
  // "Support Forum" — row in settings list (verified via PIL text row scan at y=898)
  { startFrame: 210, endFrame: 240, x: 310, y: 878, width: 490, height: 55 },
];

// ── Main voiceover word timings (frames, 0-based within main Sequence) ──
const MAIN_WORDS: CaptionWord[] = [
  { text: "To", startFrame: 0, endFrame: 5 },
  { text: "contact", startFrame: 5, endFrame: 15 },
  { text: "support", startFrame: 15, endFrame: 28 },
  { text: "in", startFrame: 28, endFrame: 35 },
  { text: "Travel", startFrame: 35, endFrame: 44 },
  { text: "Animator,", startFrame: 44, endFrame: 61 },
  { text: "simply", startFrame: 73, endFrame: 79 },
  { text: "tap", startFrame: 79, endFrame: 86 },
  { text: "the", startFrame: 86, endFrame: 92 },
  { text: "settings", startFrame: 92, endFrame: 101 },
  { text: "icon", startFrame: 101, endFrame: 116 },
  { text: "in", startFrame: 116, endFrame: 124 },
  { text: "the", startFrame: 124, endFrame: 127 },
  { text: "top", startFrame: 127, endFrame: 133 },
  { text: "right", startFrame: 133, endFrame: 140 },
  { text: "corner.", startFrame: 140, endFrame: 152 },
  { text: "Here", startFrame: 170, endFrame: 181 },
  { text: "you", startFrame: 181, endFrame: 189 },
  { text: "will", startFrame: 189, endFrame: 192 },
  { text: "find", startFrame: 192, endFrame: 198 },
  { text: "the", startFrame: 198, endFrame: 203 },
  { text: "Support", startFrame: 203, endFrame: 212 },
  { text: "Forum", startFrame: 212, endFrame: 225 },
  { text: "option.", startFrame: 225, endFrame: 238 },
  { text: "Tap", startFrame: 264, endFrame: 273 },
  { text: "on", startFrame: 273, endFrame: 278 },
  { text: "it", startFrame: 278, endFrame: 283 },
  { text: "to", startFrame: 283, endFrame: 289 },
  { text: "open", startFrame: 289, endFrame: 297 },
  { text: "the", startFrame: 297, endFrame: 302 },
  { text: "community", startFrame: 302, endFrame: 314 },
  { text: "forum.", startFrame: 314, endFrame: 327 },
  { text: "You", startFrame: 344, endFrame: 348 },
  { text: "can", startFrame: 348, endFrame: 352 },
  { text: "log", startFrame: 352, endFrame: 357 },
  { text: "in,", startFrame: 357, endFrame: 365 },
  { text: "browse", startFrame: 374, endFrame: 379 },
  { text: "topics,", startFrame: 379, endFrame: 393 },
  { text: "ask", startFrame: 408, endFrame: 413 },
  { text: "questions,", startFrame: 413, endFrame: 428 },
  { text: "and", startFrame: 440, endFrame: 446 },
  { text: "get", startFrame: 446, endFrame: 450 },
  { text: "help", startFrame: 450, endFrame: 458 },
  { text: "directly", startFrame: 458, endFrame: 468 },
  { text: "from", startFrame: 468, endFrame: 479 },
  { text: "the", startFrame: 479, endFrame: 484 },
  { text: "team.", startFrame: 484, endFrame: 493 },
];

// ── Phone with video inside ──
const PhoneWithVideo: React.FC<{
  videoSrc: string;
  playbackRate: number;
}> = ({ videoSrc, playbackRate }) => {
  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          left: SCREEN.left,
          top: SCREEN.top,
          width: SCREEN.width,
          height: SCREEN.height,
          backgroundColor: "#000000",
          borderRadius: SCREEN_RADIUS,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: SCREEN.left,
          top: SCREEN.top,
          width: SCREEN.width,
          height: SCREEN.height,
          overflow: "hidden",
          borderRadius: SCREEN_RADIUS,
        }}
      >
        <OffthreadVideo
          src={staticFile(videoSrc)}
          playbackRate={playbackRate}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
      </div>
      <Img
        src={staticFile(MOCKUP_SRC)}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1080,
          height: 1920,
        }}
      />
    </AbsoluteFill>
  );
};

// ── Highlight Overlay (spotlight style) ──
const HighlightOverlay: React.FC = () => {
  const frame = useCurrentFrame();

  const activeHl = HIGHLIGHTS.find(
    (hl) => frame >= hl.startFrame && frame <= hl.endFrame,
  );
  if (!activeHl) return null;

  const progress = frame - activeHl.startFrame;
  const fadeIn = interpolate(progress, [0, 8], [0, 1], {
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [activeHl.endFrame - 5, activeHl.endFrame],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const opacity = fadeIn * fadeOut;

  const cx = activeHl.x + activeHl.width / 2;
  const pad = 16;
  const br = 16;
  const featherBlur = 6;

  const maskId = `spot-${activeHl.startFrame}`;
  const filterId = `blur-${activeHl.startFrame}`;

  const arrowX = cx;
  const arrowY = activeHl.y + activeHl.height + pad + 30;
  const arrowW = 28;
  const arrowH = 60;

  return (
    <>
      <svg
        width="1080"
        height="1920"
        viewBox="0 0 1080 1920"
        style={{ position: "absolute", top: 0, left: 0, opacity, pointerEvents: "none" }}
      >
        <defs>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation={featherBlur} />
          </filter>
          <mask id={maskId}>
            <rect width="1080" height="1920" fill="white" />
            <rect
              x={activeHl.x - pad}
              y={activeHl.y - pad}
              width={activeHl.width + pad * 2}
              height={activeHl.height + pad * 2}
              rx={br}
              ry={br}
              fill="black"
              filter={`url(#${filterId})`}
            />
          </mask>
        </defs>
        <rect
          width="1080"
          height="1920"
          fill="rgba(0,0,0,0.55)"
          mask={`url(#${maskId})`}
        />
      </svg>
      <svg
        width="1080"
        height="1920"
        viewBox="0 0 1080 1920"
        style={{ position: "absolute", top: 0, left: 0, opacity, pointerEvents: "none" }}
      >
        <g transform={`translate(${arrowX}, ${arrowY})`}>
          <line x1="0" y1="0" x2="0" y2={arrowH} stroke="white" strokeWidth="6" strokeLinecap="round" />
          <polyline
            points={`${-arrowW / 2},${arrowW / 2} 0,0 ${arrowW / 2},${arrowW / 2}`}
            fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
          />
        </g>
      </svg>
    </>
  );
};

// ── Part 1: Intro Screen (text-only, no intro video) ──
const IntroScreen: React.FC = () => {
  const frame = useCurrentFrame();

  // Fade in
  const fadeIn = interpolate(frame, [0, TRANSITION], [0, 1], {
    extrapolateRight: "clamp",
  });
  // Dissolve out (transition to Part 2)
  const fadeOut = interpolate(
    frame,
    [INTRO_DURATION - TRANSITION, INTRO_DURATION],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const opacity = fadeIn * fadeOut;

  const hookWords = [
    { text: "Where", highlight: false },
    { text: "do", highlight: false },
    { text: "I", highlight: false },
    { text: "find", highlight: false },
    { text: "help/about", highlight: false },
    { text: "info,", highlight: false },
    { text: "and", highlight: false },
    { text: "how", highlight: false },
    { text: "do", highlight: false },
    { text: "I", highlight: false },
    { text: "contact", highlight: false },
    { text: "support?", highlight: true },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: "#33a4fe", opacity }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 18,
          }}
        >
          {hookWords.map((word, i) => (
            <span
              key={i}
              style={{
                fontFamily: "SFProRounded, sans-serif",
                fontSize: 90,
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.35,
                letterSpacing: -0.5,
                ...(word.highlight
                  ? {
                      backgroundColor: "#22C55E",
                      borderRadius: 16,
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 28,
                      paddingRight: 28,
                    }
                  : {}),
              }}
            >
              {word.text}
            </span>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── Part 2: Main Content Wrapper (handles blur-in transition) ──
const MainContent: React.FC = () => {
  const frame = useCurrentFrame();

  // Blur-in transition from Part 1
  const blurIn = interpolate(frame, [0, TRANSITION], [8, 0], {
    extrapolateRight: "clamp",
  });
  const opacityIn = interpolate(frame, [0, TRANSITION], [0, 1], {
    extrapolateRight: "clamp",
  });
  // Fade-out transition to Part 3
  const opacityOut = interpolate(
    frame,
    [MAIN_DURATION - TRANSITION, MAIN_DURATION],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const opacity = opacityIn * opacityOut;

  return (
    <AbsoluteFill
      style={{
        opacity,
        filter: blurIn > 0 ? `blur(${blurIn}px)` : undefined,
      }}
    >
      <AbsoluteFill style={{ backgroundColor: "#33a4fe" }}>
        <Audio src={staticFile(MAIN_AUDIO)} />

        <PhoneWithVideo
          videoSrc={SCREEN_REC}
          playbackRate={MAIN_PLAYBACK_RATE}
        />

        <HighlightOverlay />

        <TACaptions
          words={MAIN_WORDS}
          highlightStyle="green-pill"
          backgroundType="blue"
          fontSize={68}
          wordsPerLine={3}
          bottomOffset={1560}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ── Part 3: Outro ──
const Outro: React.FC = () => {
  const frame = useCurrentFrame();

  // Scale-up + fade-in transition from Part 2
  const scaleIn = interpolate(frame, [0, TRANSITION], [1.05, 1], {
    extrapolateRight: "clamp",
  });
  const opacityIn = interpolate(frame, [0, TRANSITION], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        opacity: opacityIn,
        transform: `scale(${scaleIn})`,
      }}
    >
      <OffthreadVideo
        src={staticFile(OUTRO_VIDEO)}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </AbsoluteFill>
  );
};

// ── Main Tutorial2 Composition ──
export const Tutorial2: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#33a4fe" }}>
      {/* Part 1: Intro — centered hook text + voiceover */}
      <Sequence from={0} durationInFrames={INTRO_DURATION}>
        <Audio src={staticFile(HOOK_AUDIO)} />
        <IntroScreen />
      </Sequence>

      {/* Part 2: Main content — phone mockup + screen recording + captions */}
      <Sequence from={INTRO_DURATION} durationInFrames={MAIN_DURATION}>
        <MainContent />
      </Sequence>

      {/* Part 3: Outro — play as-is */}
      <Sequence from={INTRO_DURATION + MAIN_DURATION} durationInFrames={OUTRO_DURATION}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};
