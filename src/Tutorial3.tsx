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
const INTRO_DURATION = 150; // 5s (hook voiceover 3.02s + intro video 4.67s)
const MAIN_DURATION = 700; // ~23.3s (main voiceover is 22.71s + padding)
const OUTRO_DURATION = 76; // 2.53s
const TRANSITION = 15; // 0.5s transition frames
const FPS = 30;

export const TUTORIAL3_DURATION = INTRO_DURATION + MAIN_DURATION + OUTRO_DURATION; // 926

// ── Asset paths ──
const HOOK_AUDIO = "Tutorial/hook-voiceover.mp3";
const MAIN_AUDIO = "Tutorial/main-voiceover.mp3";
const INTRO_VIDEO = "Tutorial/Intro.MP4";
const SCREEN_REC = "Tutorial/Screen Recording Muted.MP4";
const OUTRO_VIDEO = "Tutorial/Outro.mp4";
const MOCKUP_SRC = "Tutorial 1/iphone 12 pro mockup.png";

// ── Phone screen area ──
const SCREEN = { left: 298, top: 418, width: 516, height: 1088 };
const SCREEN_RADIUS = 42;

// ── Screen recording timing ──
const SCREEN_REC_DURATION_SEC = 42.0;
const MAIN_PLAYBACK_RATE = SCREEN_REC_DURATION_SEC / (MAIN_DURATION / FPS); // ~1.83x

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
// Positions verified via PIL pixel analysis on rendered composition frames
const HIGHLIGHTS: HighlightConfig[] = [
  // "Invert Route" — bottom option in routes menu
  // White text at x=347-508,y=1443-1455 (verified via PIL on rendered frame)
  { startFrame: 447, endFrame: 480, x: 320, y: 1428, width: 200, height: 40 },
];

// ── Main voiceover word timings (frames, 0-based within main Sequence) ──
const MAIN_WORDS: CaptionWord[] = [
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

// ── Part 1: Intro Screen (hook text + phone with intro video) ──
const IntroScreen: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, TRANSITION], [0, 1], {
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [INTRO_DURATION - TRANSITION, INTRO_DURATION],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const opacity = fadeIn * fadeOut;

  const hookWords = [
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
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: "#33a4fe", opacity }}>
      {/* Hook text at top */}
      <div
        style={{
          position: "absolute",
          top: 140,
          left: 50,
          right: 50,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 14,
        }}
      >
        {hookWords.map((word, i) => (
          <span
            key={i}
            style={{
              fontFamily: "SFProRounded, sans-serif",
              fontSize: 72,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.3,
              letterSpacing: -0.5,
              ...(word.highlight
                ? {
                    backgroundColor: "#22C55E",
                    borderRadius: 14,
                    paddingTop: 6,
                    paddingBottom: 6,
                    paddingLeft: 20,
                    paddingRight: 20,
                  }
                : {}),
            }}
          >
            {word.text}
          </span>
        ))}
      </div>

      {/* Phone mockup with intro video */}
      <PhoneWithVideo videoSrc={INTRO_VIDEO} playbackRate={1} />
    </AbsoluteFill>
  );
};

// ── Part 2: Main Content Wrapper (handles blur-in transition) ──
const MainContent: React.FC = () => {
  const frame = useCurrentFrame();

  const blurIn = interpolate(frame, [0, TRANSITION], [8, 0], {
    extrapolateRight: "clamp",
  });
  const opacityIn = interpolate(frame, [0, TRANSITION], [0, 1], {
    extrapolateRight: "clamp",
  });
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

// ── Main Tutorial3 Composition ──
export const Tutorial3: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#33a4fe" }}>
      {/* Part 1: Intro — hook text + phone mockup with intro video */}
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
