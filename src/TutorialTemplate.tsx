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
import { CaptionWord, TACaptions } from "./TACaptions";
import { PhoneWithVideo } from "./components/PhoneWithVideo";
import { HighlightConfig, HighlightOverlay } from "./components/HighlightOverlay";

// Re-export types for convenience
export type { CaptionWord } from "./TACaptions";
export type { HighlightConfig } from "./components/HighlightOverlay";

const TRANSITION = 15; // 0.5s transition frames
const FPS = 30;
const BG_COLOR = "#33a4fe";

// ── Instagram Reels Safe Zone ──
// Verified from TikTok/Instagram Reel Safety Zones reference (House of Marketers).
// Top 250px, bottom 560px, left 90px, right 90px are overlay areas.
// Content should stay within: y=[250..1360], x=[90..990]
const SAFE = { top: 250, bottom: 560, left: 90, right: 90 };

// ── Tutorial Configuration ──
export interface TutorialConfig {
  // Durations (in frames at 30fps)
  introDuration: number;
  mainDuration: number;
  outroDuration: number;

  // Asset paths (relative to public/)
  hookAudio?: string;
  mainAudio?: string;
  screenRecording: string;
  introVideo?: string; // optional — text-only centered intro if missing
  outroVideo: string;

  // Screen recording timing
  screenRecDurationSec: number;

  // Content
  hookWords: { text: string; highlight: boolean }[];
  mainWords: CaptionWord[];
  highlights: HighlightConfig[];

  // Optional customization (defaults from Figma file sTi5XMHnBXLoyYrROgTwuA)
  hookTextTop?: number;        // default: 311
  hookFontSize?: number;       // default: 101 with video, 90 without video
  introVideoTop?: number;      // default: 804
  introVideoWidth?: number;    // default: 402
  introVideoHeight?: number;   // default: 715
  introVideoStartFrom?: number; // frames to skip at start of intro video (default: 0)
}

// ── Helper: compute total duration ──
export function getTutorialDuration(config: TutorialConfig): number {
  return config.introDuration + config.mainDuration + config.outroDuration;
}

// ── Shared: Hook Text ──
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
);

// ── Part 1: Intro Screen ──
// Two modes:
//   A) With intro video: text at top (within safe zone) + smaller video below
//      with white border and rounded corners (NO phone mockup)
//   B) Without intro video: text centered on screen, larger font
const IntroScreen: React.FC<{
  config: TutorialConfig;
}> = ({ config }) => {
  const frame = useCurrentFrame();
  const hasVideo = !!config.introVideo;

  const fadeIn = interpolate(frame, [0, TRANSITION], [0, 1], {
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [config.introDuration - TRANSITION, config.introDuration],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const opacity = fadeIn * fadeOut;

  if (hasVideo) {
    // Mode A: Text at top + intro video below (values from Figma)
    const textTop = config.hookTextTop ?? 311;
    const fontSize = config.hookFontSize ?? 101;
    const videoTop = config.introVideoTop ?? 804;
    const videoWidth = config.introVideoWidth ?? 402;
    const videoHeight = config.introVideoHeight ?? 715;
    const videoLeft = Math.round((1080 - videoWidth) / 2);
    const startFrom = config.introVideoStartFrom ?? 0;

    return (
      <AbsoluteFill style={{ backgroundColor: BG_COLOR, opacity }}>
        {/* Intro video — centered horizontally (rendered first, below text) */}
        <div
          style={{
            position: "absolute",
            top: videoTop,
            left: videoLeft,
            width: videoWidth,
            height: videoHeight,
            borderRadius: 24,
            border: "5px solid white",
            overflow: "hidden",
            backgroundColor: "#000000",
          }}
        >
          <OffthreadVideo
            src={staticFile(config.introVideo!)}
            startFrom={startFrom}
            playbackRate={1}
            muted
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Hook text — rendered after video so it always appears on top */}
        <div
          style={{
            position: "absolute",
            top: textTop,
            left: SAFE.left,
            right: SAFE.right,
          }}
        >
          <HookText words={config.hookWords} fontSize={fontSize} />
        </div>
      </AbsoluteFill>
    );
  }

  // Mode B: No video — text centered, larger font
  const fontSize = config.hookFontSize ?? 90;

  return (
    <AbsoluteFill style={{ backgroundColor: BG_COLOR, opacity }}>
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
        <HookText words={config.hookWords} fontSize={fontSize} />
      </div>
    </AbsoluteFill>
  );
};

// ── Part 2: Main Content ──
const MainContent: React.FC<{
  config: TutorialConfig;
}> = ({ config }) => {
  const frame = useCurrentFrame();
  const playbackRate = config.screenRecDurationSec / (config.mainDuration / FPS);

  const blurIn = interpolate(frame, [0, TRANSITION], [8, 0], {
    extrapolateRight: "clamp",
  });
  const opacityIn = interpolate(frame, [0, TRANSITION], [0, 1], {
    extrapolateRight: "clamp",
  });
  const opacityOut = interpolate(
    frame,
    [config.mainDuration - TRANSITION, config.mainDuration],
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
      <AbsoluteFill style={{ backgroundColor: BG_COLOR }}>
        {config.mainAudio ? <Audio src={staticFile(config.mainAudio)} /> : null}

        <PhoneWithVideo
          videoSrc={config.screenRecording}
          playbackRate={playbackRate}
        />

        <HighlightOverlay highlights={config.highlights} />

        <TACaptions
          words={config.mainWords}
          highlightStyle="green-pill"
          backgroundType="blue"
          fontSize={64}
          wordsPerLine={3}
          bottomOffset={1560}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ── Part 3: Outro ──
// Plays outro video as-is — no captions, no edits
const OutroSection: React.FC<{
  outroVideo: string;
}> = ({ outroVideo }) => {
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
        src={staticFile(outroVideo)}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </AbsoluteFill>
  );
};

// ── Standalone Part Compositions (for part-by-part approval workflow) ──
export const TutorialPart1: React.FC<{ config: TutorialConfig }> = ({ config }) => (
  <AbsoluteFill style={{ backgroundColor: BG_COLOR }}>
    {config.hookAudio ? <Audio src={staticFile(config.hookAudio)} /> : null}
    <IntroScreen config={config} />
  </AbsoluteFill>
);

export const TutorialPart2: React.FC<{ config: TutorialConfig }> = ({ config }) => (
  <MainContent config={config} />
);

export const TutorialPart3: React.FC<{ config: TutorialConfig }> = ({ config }) => (
  <OutroSection outroVideo={config.outroVideo} />
);

// ── Main TutorialTemplate Composition ──
export const TutorialTemplate: React.FC<{
  config: TutorialConfig;
}> = ({ config }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: BG_COLOR }}>
      {/* Part 1: Intro */}
      <Sequence from={0} durationInFrames={config.introDuration}>
        {config.hookAudio ? <Audio src={staticFile(config.hookAudio)} /> : null}
        <IntroScreen config={config} />
      </Sequence>

      {/* Part 2: Main content */}
      <Sequence from={config.introDuration} durationInFrames={config.mainDuration}>
        <MainContent config={config} />
      </Sequence>

      {/* Part 3: Outro */}
      <Sequence
        from={config.introDuration + config.mainDuration}
        durationInFrames={config.outroDuration}
      >
        <OutroSection outroVideo={config.outroVideo} />
      </Sequence>
    </AbsoluteFill>
  );
};
