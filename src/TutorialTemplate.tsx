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

// ── Tutorial Configuration ──
export interface TutorialConfig {
  // Durations (in frames at 30fps)
  introDuration: number;
  mainDuration: number;
  outroDuration: number;

  // Asset paths (relative to public/)
  hookAudio: string;
  mainAudio: string;
  screenRecording: string;
  introVideo?: string; // optional — text-only intro if missing
  outroVideo: string;

  // Screen recording timing
  screenRecDurationSec: number;

  // Content
  hookWords: { text: string; highlight: boolean }[];
  mainWords: CaptionWord[];
  highlights: HighlightConfig[];

  // Optional customization
  hookTextTop?: number; // default: 140
  hookFontSize?: number; // default: 72
}

// ── Helper: compute total duration ──
export function getTutorialDuration(config: TutorialConfig): number {
  return config.introDuration + config.mainDuration + config.outroDuration;
}

// ── Part 1: Intro Screen ──
const IntroScreen: React.FC<{
  config: TutorialConfig;
}> = ({ config }) => {
  const frame = useCurrentFrame();

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

  const textTop = config.hookTextTop ?? 140;
  const fontSize = config.hookFontSize ?? 72;

  return (
    <AbsoluteFill style={{ backgroundColor: BG_COLOR, opacity }}>
      {/* Hook text */}
      <div
        style={{
          position: "absolute",
          top: textTop,
          left: 50,
          right: 50,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 14,
        }}
      >
        {config.hookWords.map((word, i) => (
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

      {/* Phone mockup with intro video (if provided) */}
      {config.introVideo && (
        <PhoneWithVideo videoSrc={config.introVideo} playbackRate={1} />
      )}
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
        <Audio src={staticFile(config.mainAudio)} />

        <PhoneWithVideo
          videoSrc={config.screenRecording}
          playbackRate={playbackRate}
        />

        <HighlightOverlay highlights={config.highlights} />

        <TACaptions
          words={config.mainWords}
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

// ── Main TutorialTemplate Composition ──
export const TutorialTemplate: React.FC<{
  config: TutorialConfig;
}> = ({ config }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: BG_COLOR }}>
      {/* Part 1: Intro */}
      <Sequence from={0} durationInFrames={config.introDuration}>
        <Audio src={staticFile(config.hookAudio)} />
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
