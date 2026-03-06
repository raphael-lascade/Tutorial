import { AbsoluteFill, Audio, staticFile } from "remotion";
import "./fonts";
import {
  BG_COLORS,
  BackgroundType,
  CaptionWord,
  HighlightStyle,
  TACaptions,
} from "./TACaptions";

// ---------------------------------------------------------------------------
// Sample caption words — replace with real timed words for actual videos
// Sentence: "Create videos easily with our brand new template style"
// Timing at 30fps — each word ~22 frames (~0.7s), short pause between lines
// ---------------------------------------------------------------------------
export const SAMPLE_WORDS: CaptionWord[] = [
  { text: "Create",   startFrame: 20,  endFrame: 42  },
  { text: "videos",   startFrame: 42,  endFrame: 64  },
  { text: "easily",   startFrame: 64,  endFrame: 88  },
  { text: "with",     startFrame: 98,  endFrame: 118 },
  { text: "our",      startFrame: 118, endFrame: 136 },
  { text: "brand",    startFrame: 136, endFrame: 158 },
  { text: "new",      startFrame: 168, endFrame: 188 },
  { text: "template", startFrame: 188, endFrame: 215 },
];

interface CaptionsTemplateProps {
  highlightStyle?: HighlightStyle;
  backgroundType?: BackgroundType;
  words?: CaptionWord[];
  audioSrc?: string;
}

export const CaptionsTemplate: React.FC<CaptionsTemplateProps> = ({
  highlightStyle = "green-pill",
  backgroundType = "blue",
  words = SAMPLE_WORDS,
  audioSrc,
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor: BG_COLORS[backgroundType] }}>
      {audioSrc && <Audio src={staticFile(audioSrc)} />}
      <TACaptions
        words={words}
        highlightStyle={highlightStyle}
        backgroundType={backgroundType}
      />
    </AbsoluteFill>
  );
};
