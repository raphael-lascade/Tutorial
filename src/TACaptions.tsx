import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export type CaptionWord = {
  text: string;
  startFrame: number;
  endFrame: number;
};

export type HighlightStyle = "yellow-text" | "green-pill";
export type BackgroundType = "blue" | "black" | "white" | "transparent" | "green";

// Color tokens for each background + highlight style combo
const THEMES: Record<
  BackgroundType,
  {
    text: string;
    "yellow-text": { activeText: string };
    "green-pill": { activeText: string; activeBg: string };
  }
> = {
  blue: {
    text: "#ffffff",
    "yellow-text": { activeText: "#FFD600" },
    "green-pill": { activeText: "#ffffff", activeBg: "#22C55E" },
  },
  black: {
    text: "#ffffff",
    "yellow-text": { activeText: "#FFD600" },
    "green-pill": { activeText: "#ffffff", activeBg: "#22C55E" },
  },
  white: {
    text: "#1a1a1a",
    "yellow-text": { activeText: "#D97706" },
    "green-pill": { activeText: "#ffffff", activeBg: "#16A34A" },
  },
  transparent: {
    text: "#ffffff",
    "yellow-text": { activeText: "#FFD600" },
    "green-pill": { activeText: "#ffffff", activeBg: "#22C55E" },
  },
  green: {
    text: "#ffffff",
    "yellow-text": { activeText: "#FFD600" },
    "green-pill": { activeText: "#ffffff", activeBg: "#22C55E" },
  },
};

const BG_COLORS: Record<BackgroundType, string> = {
  blue: "#33a4fe",
  black: "#111111",
  white: "#ffffff",
  transparent: "transparent",
  green: "#00FF00",
};

interface TACaptionsProps {
  words: CaptionWord[];
  highlightStyle: HighlightStyle;
  backgroundType?: BackgroundType;
  fontSize?: number;
  wordsPerLine?: number;
  fontFamily?: string;
  bottomOffset?: number;
}

export const TACaptions: React.FC<TACaptionsProps> = ({
  words,
  highlightStyle,
  backgroundType = "blue",
  fontSize = 68,
  wordsPerLine = 3,
  fontFamily = "SFProRounded, sans-serif",
  bottomOffset = 340,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const theme = THEMES[backgroundType];

  // Group words into lines of wordsPerLine
  const lines: CaptionWord[][] = [];
  for (let i = 0; i < words.length; i += wordsPerLine) {
    lines.push(words.slice(i, i + wordsPerLine));
  }

  // Find which line is currently active
  const currentLineIndex = lines.findIndex((line) => {
    const lineStart = line[0].startFrame;
    const lineEnd = line[line.length - 1].endFrame;
    return frame >= lineStart && frame < lineEnd;
  });

  if (currentLineIndex === -1) return null;

  const currentLine = lines[currentLineIndex];
  const lineStart = currentLine[0].startFrame;

  // Spring entrance when a new line appears - slide up + fade in
  const entrance = spring({
    frame: frame - lineStart,
    fps,
    config: { damping: 200 },
  });
  const opacity = entrance;
  const translateY = interpolate(entrance, [0, 1], [24, 0]);

  // Active word = currently spoken
  const activeWord = currentLine.find(
    (w) => frame >= w.startFrame && frame < w.endFrame,
  );

  return (
    <div
      style={{
        position: "absolute",
        bottom: bottomOffset,
        left: 60,
        right: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        {currentLine.map((word, i) => {
          const isActive = word === activeWord;
          const isPill = highlightStyle === "green-pill";
          const pillTheme = theme["green-pill"];
          const yellowTheme = theme["yellow-text"];

          return (
            <span
              key={i}
              style={{
                fontFamily,
                fontSize,
                fontWeight: 700,
                lineHeight: 1.3,
                letterSpacing: -0.5,
                color: isActive
                  ? isPill
                    ? pillTheme.activeText
                    : yellowTheme.activeText
                  : theme.text,
                backgroundColor:
                  isActive && isPill ? pillTheme.activeBg : "transparent",
                borderRadius: isActive && isPill ? 12 : 0,
                paddingTop: isActive && isPill ? 6 : 0,
                paddingBottom: isActive && isPill ? 6 : 0,
                paddingLeft: isActive && isPill ? 22 : 0,
                paddingRight: isActive && isPill ? 22 : 0,
                // Keep layout stable - compensate pill padding so words don't shift
                marginLeft: isActive && isPill ? -22 : 0,
                marginRight: isActive && isPill ? -22 : 0,
              }}
            >
              {word.text}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export { BG_COLORS };
