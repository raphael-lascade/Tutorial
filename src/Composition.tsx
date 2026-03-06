import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import "./fonts";

const BLUE = "#33a4fe";
const LINE_1 = "Turn Your Last Trip";
const LINE_2 = "Into A Map Animation";
const FULL_TEXT = LINE_1 + LINE_2;
const CHAR_FRAMES = 3;
const CURSOR_BLINK_FRAMES = 16;

const Cursor: React.FC<{ frame: number }> = ({ frame }) => {
  const typingDone = frame >= FULL_TEXT.length * CHAR_FRAMES;
  const opacity = typingDone
    ? 0
    : interpolate(frame % CURSOR_BLINK_FRAMES, [0, CURSOR_BLINK_FRAMES / 2, CURSOR_BLINK_FRAMES], [1, 0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });

  return <span style={{ opacity, color: BLUE }}>|</span>;
};

export const MyComposition = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const typedChars = Math.min(FULL_TEXT.length, Math.floor(frame / CHAR_FRAMES));

  const line1Text = LINE_1.slice(0, Math.min(typedChars, LINE_1.length));
  const line2Text = typedChars > LINE_1.length
    ? LINE_2.slice(0, typedChars - LINE_1.length)
    : "";

  const cursorOnLine2 = typedChars >= LINE_1.length;

  const cardOpacity = interpolate(frame, [0, 0.3 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  const textStyle: React.CSSProperties = {
    fontFamily: "SFProRounded, sans-serif",
    fontWeight: 700,
    fontSize: 90,
    color: BLUE,
    lineHeight: 1.3,
    letterSpacing: -1,
    display: "block",
  };

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BLUE,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          opacity: cardOpacity,
          backgroundColor: "#ffffff",
          borderRadius: 32,
          padding: "64px 80px",
          maxWidth: 860,
          textAlign: "center",
        }}
      >
        {/* Line 1 */}
        <span style={textStyle}>
          {line1Text}
          {!cursorOnLine2 && <Cursor frame={frame} />}
        </span>

        {/* Line 2 - always reserve space so card doesn't resize */}
        <span style={textStyle}>
          {line2Text}
          {cursorOnLine2 && <Cursor frame={frame} />}
        </span>
      </div>
    </AbsoluteFill>
  );
};
