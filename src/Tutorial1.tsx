import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  OffthreadVideo,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import "./fonts";
import { CaptionWord, TACaptions } from "./TACaptions";

// ── Asset paths ──
const AUDIO_SRC = "Tutorial 1/ElevenLabs_2026-03-05T08_53_07_Jadon - PRO Voiceover_pvc_sp100_s50_sb75_v3.mp3";
const MOCKUP_SRC = "Tutorial 1/iphone 12 pro mockup.png";
const COMMENT_SRC = "Tutorial 1/comment.png";
const VIDEO_FINAL = "Tutorial 1/Final Output.MP4";
const VIDEO_STEP1 = "Tutorial 1/step 1.mov";
const VIDEO_STEP2 = "Tutorial 1/step 2.mov";
const VIDEO_STEP3 = "Tutorial 1/step 3.mov";
const VIDEO_STEP4 = "Tutorial 1/step 4.mov";
const SFX_SOUNDS = ["sfx-pop1.wav", "sfx-ding.wav", "sfx-swish.wav"];

// ── Phone screen area ──
// Sized to stay within the phone's outer edge but cover all transparent screen pixels.
// borderRadius on the container matches the phone's outer corner curve.
const SCREEN = { left: 298, top: 418, width: 516, height: 1088 };
const SCREEN_RADIUS = 42;

// ── Highlight Styles ──
// "spotlight" — dims + blurs everything except the highlighted area with feathered edges
// "red-border" — pulsing red border box around the element
// "glow" — soft colored glow around the highlight area
type HighlightStyle = "spotlight" | "red-border" | "glow";

interface HighlightConfig {
  startFrame: number;
  endFrame: number;
  // Canvas coordinates (1080x1920)
  x: number;
  y: number;
  width: number;
  height: number;
}

const HIGHLIGHT_STYLE: HighlightStyle = "spotlight";

const HIGHLIGHTS: HighlightConfig[] = [
  // Line 4: "search box" — highlight both search input fields (y=515..630)
  { startFrame: 734, endFrame: 789, x: 330, y: 515, width: 460, height: 115 },
  // Line 5: "rearrange" — highlight all location list rows (y=815..1015)
  { startFrame: 860, endFrame: 920, x: 330, y: 815, width: 440, height: 205 },
  // Line 7: "use this toggle" — highlight Place Labels row (y=1040..1075)
  { startFrame: 1212, endFrame: 1240, x: 310, y: 1038, width: 460, height: 40 },
];

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
  const featherBlur = 6; // small feather for soft edges without losing the cutout

  const maskId = `spot-${activeHl.startFrame}`;
  const filterId = `blur-${activeHl.startFrame}`;

  // Arrow below highlight
  const arrowX = cx;
  const arrowY = activeHl.y + activeHl.height + pad + 30;
  const arrowW = 28;
  const arrowH = 60;

  return (
    <>
      {/* Dark overlay with rounded-rect cutout */}
      <svg
        width="1080"
        height="1920"
        viewBox="0 0 1080 1920"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity,
          pointerEvents: "none",
        }}
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

      {/* White rounded arrow pointing up toward highlighted area */}
      <svg
        width="1080"
        height="1920"
        viewBox="0 0 1080 1920"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity,
          pointerEvents: "none",
        }}
      >
        <g transform={`translate(${arrowX}, ${arrowY})`}>
          {/* Arrow shaft */}
          <line
            x1="0" y1="0"
            x2="0" y2={arrowH}
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Arrow head (chevron pointing up) */}
          <polyline
            points={`${-arrowW / 2},${arrowW / 2} 0,0 ${arrowW / 2},${arrowW / 2}`}
            fill="none"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </>
  );
};

// ── Line timings (frames at 30fps, from Whisper transcription) ──
// Each line has: startFrame, endFrame (segment boundary), video, original video duration
interface LineConfig {
  startFrame: number;
  endFrame: number;
  video: string | null;
  videoDurationSec: number;
  words: CaptionWord[];
  isTextOnly?: boolean;
  showComment?: boolean;
}

const LINES: LineConfig[] = [
  // Line 1: comment overlay + Final Output
  {
    startFrame: 0,
    endFrame: 221,
    video: VIDEO_FINAL,
    videoDurationSec: 17.67,
    showComment: true,
    words: [
      { text: "How", startFrame: 0, endFrame: 6 },
      { text: "do", startFrame: 6, endFrame: 9 },
      { text: "I", startFrame: 9, endFrame: 14 },
      { text: "add", startFrame: 14, endFrame: 22 },
      { text: "multiple", startFrame: 22, endFrame: 32 },
      { text: "stops,", startFrame: 32, endFrame: 47 },
      { text: "slash", startFrame: 61, endFrame: 68 },
      { text: "waypoints,", startFrame: 68, endFrame: 89 },
      { text: "so", startFrame: 97, endFrame: 99 },
      { text: "every", startFrame: 99, endFrame: 110 },
      { text: "stop", startFrame: 110, endFrame: 121 },
      { text: "shows", startFrame: 121, endFrame: 131 },
      { text: "up,", startFrame: 131, endFrame: 144 },
      { text: "not", startFrame: 151, endFrame: 158 },
      { text: "just", startFrame: 158, endFrame: 167 },
      { text: "the", startFrame: 167, endFrame: 172 },
      { text: "final", startFrame: 172, endFrame: 181 },
      { text: "destination?", startFrame: 181, endFrame: 199 },
    ],
  },
  // Line 2: text-only (no phone, no video)
  {
    startFrame: 221,
    endFrame: 340,
    video: null,
    videoDurationSec: 0,
    isTextOnly: true,
    words: [
      { text: "There", startFrame: 221, endFrame: 235 },
      { text: "are", startFrame: 235, endFrame: 238 },
      { text: "two", startFrame: 238, endFrame: 245 },
      { text: "ways", startFrame: 245, endFrame: 254 },
      { text: "to", startFrame: 254, endFrame: 260 },
      { text: "add", startFrame: 260, endFrame: 266 },
      { text: "locations", startFrame: 266, endFrame: 284 },
      { text: "in", startFrame: 284, endFrame: 292 },
      { text: "Travel", startFrame: 292, endFrame: 303 },
      { text: "Animator.", startFrame: 303, endFrame: 320 },
    ],
  },
  // Line 3: step 1
  {
    startFrame: 340,
    endFrame: 684,
    video: VIDEO_STEP1,
    videoDurationSec: 51.24,
    words: [
      { text: "One", startFrame: 340, endFrame: 350 },
      { text: "is", startFrame: 350, endFrame: 355 },
      { text: "by", startFrame: 355, endFrame: 359 },
      { text: "plotting", startFrame: 359, endFrame: 370 },
      { text: "using", startFrame: 370, endFrame: 381 },
      { text: "your", startFrame: 381, endFrame: 388 },
      { text: "fingers.", startFrame: 388, endFrame: 397 },
      { text: "You", startFrame: 415, endFrame: 419 },
      { text: "can", startFrame: 419, endFrame: 422 },
      { text: "easily", startFrame: 422, endFrame: 432 },
      { text: "start", startFrame: 432, endFrame: 444 },
      { text: "by", startFrame: 444, endFrame: 452 },
      { text: "adding", startFrame: 452, endFrame: 461 },
      { text: "the", startFrame: 461, endFrame: 467 },
      { text: "starting", startFrame: 467, endFrame: 479 },
      { text: "and", startFrame: 479, endFrame: 490 },
      { text: "ending", startFrame: 490, endFrame: 499 },
      { text: "destination", startFrame: 499, endFrame: 518 },
      { text: "by", startFrame: 518, endFrame: 530 },
      { text: "tapping", startFrame: 530, endFrame: 539 },
      { text: "on", startFrame: 539, endFrame: 547 },
      { text: "the", startFrame: 547, endFrame: 551 },
      { text: "location", startFrame: 551, endFrame: 566 },
      { text: "and", startFrame: 566, endFrame: 578 },
      { text: "drag", startFrame: 578, endFrame: 587 },
      { text: "to", startFrame: 587, endFrame: 595 },
      { text: "plot", startFrame: 595, endFrame: 601 },
      { text: "points", startFrame: 601, endFrame: 614 },
      { text: "between", startFrame: 614, endFrame: 628 },
      { text: "start", startFrame: 628, endFrame: 640 },
      { text: "and", startFrame: 640, endFrame: 652 },
      { text: "end.", startFrame: 652, endFrame: 662 },
    ],
  },
  // Line 4: step 2
  {
    startFrame: 684,
    endFrame: 789,
    video: VIDEO_STEP2,
    videoDurationSec: 23.95,
    words: [
      { text: "More", startFrame: 684, endFrame: 693 },
      { text: "efficient", startFrame: 693, endFrame: 706 },
      { text: "method", startFrame: 706, endFrame: 718 },
      { text: "would", startFrame: 718, endFrame: 725 },
      { text: "be", startFrame: 725, endFrame: 730 },
      { text: "to", startFrame: 730, endFrame: 734 },
      { text: "add", startFrame: 734, endFrame: 742 },
      { text: "via", startFrame: 742, endFrame: 751 },
      { text: "search", startFrame: 751, endFrame: 760 },
      { text: "box", startFrame: 760, endFrame: 770 },
      { text: "like", startFrame: 770, endFrame: 779 },
      { text: "this.", startFrame: 779, endFrame: 789 },
    ],
  },
  // Line 5: step 3
  {
    startFrame: 789,
    endFrame: 992,
    video: VIDEO_STEP3,
    videoDurationSec: 11.01,
    words: [
      { text: "If", startFrame: 789, endFrame: 811 },
      { text: "you", startFrame: 811, endFrame: 815 },
      { text: "have", startFrame: 815, endFrame: 820 },
      { text: "a", startFrame: 820, endFrame: 823 },
      { text: "lot", startFrame: 823, endFrame: 830 },
      { text: "of", startFrame: 830, endFrame: 833 },
      { text: "places,", startFrame: 833, endFrame: 844 },
      { text: "you", startFrame: 857, endFrame: 859 },
      { text: "can", startFrame: 859, endFrame: 863 },
      { text: "even", startFrame: 863, endFrame: 871 },
      { text: "rearrange", startFrame: 871, endFrame: 886 },
      { text: "the", startFrame: 886, endFrame: 896 },
      { text: "locations", startFrame: 896, endFrame: 912 },
      { text: "like", startFrame: 912, endFrame: 923 },
      { text: "this", startFrame: 923, endFrame: 931 },
      { text: "according", startFrame: 931, endFrame: 948 },
      { text: "to", startFrame: 948, endFrame: 958 },
      { text: "your", startFrame: 958, endFrame: 961 },
      { text: "need.", startFrame: 961, endFrame: 973 },
    ],
  },
  // Line 6: Final Output
  {
    startFrame: 992,
    endFrame: 1162,
    video: VIDEO_FINAL,
    videoDurationSec: 17.67,
    words: [
      { text: "Now", startFrame: 992, endFrame: 999 },
      { text: "to", startFrame: 999, endFrame: 1006 },
      { text: "make", startFrame: 1006, endFrame: 1011 },
      { text: "sure", startFrame: 1011, endFrame: 1019 },
      { text: "every", startFrame: 1019, endFrame: 1031 },
      { text: "stop", startFrame: 1031, endFrame: 1042 },
      { text: "shows", startFrame: 1042, endFrame: 1051 },
      { text: "up", startFrame: 1051, endFrame: 1060 },
      { text: "like", startFrame: 1060, endFrame: 1066 },
      { text: "this,", startFrame: 1066, endFrame: 1073 },
      { text: "you", startFrame: 1085, endFrame: 1088 },
      { text: "can", startFrame: 1088, endFrame: 1091 },
      { text: "enable", startFrame: 1091, endFrame: 1102 },
      { text: "place", startFrame: 1102, endFrame: 1116 },
      { text: "labels", startFrame: 1116, endFrame: 1126 },
      { text: "option.", startFrame: 1126, endFrame: 1141 },
    ],
  },
  // Line 7: step 4
  {
    startFrame: 1162,
    endFrame: 1559,
    video: VIDEO_STEP4,
    videoDurationSec: 132.05,
    words: [
      { text: "To", startFrame: 1162, endFrame: 1166 },
      { text: "turn", startFrame: 1166, endFrame: 1173 },
      { text: "on", startFrame: 1173, endFrame: 1179 },
      { text: "place", startFrame: 1179, endFrame: 1187 },
      { text: "labels,", startFrame: 1187, endFrame: 1201 },
      { text: "use", startFrame: 1212, endFrame: 1217 },
      { text: "this", startFrame: 1217, endFrame: 1225 },
      { text: "toggle.", startFrame: 1225, endFrame: 1236 },
      { text: "Then", startFrame: 1250, endFrame: 1256 },
      { text: "choose", startFrame: 1256, endFrame: 1264 },
      { text: "from", startFrame: 1264, endFrame: 1274 },
      { text: "six", startFrame: 1274, endFrame: 1284 },
      { text: "different", startFrame: 1284, endFrame: 1297 },
      { text: "label", startFrame: 1297, endFrame: 1307 },
      { text: "styles", startFrame: 1307, endFrame: 1321 },
      { text: "and", startFrame: 1321, endFrame: 1333 },
      { text: "seven", startFrame: 1333, endFrame: 1344 },
      { text: "color", startFrame: 1344, endFrame: 1354 },
      { text: "options", startFrame: 1354, endFrame: 1369 },
      { text: "and", startFrame: 1369, endFrame: 1382 },
      { text: "play", startFrame: 1382, endFrame: 1390 },
      { text: "around", startFrame: 1390, endFrame: 1399 },
      { text: "with", startFrame: 1399, endFrame: 1406 },
      { text: "the", startFrame: 1406, endFrame: 1411 },
      { text: "customization", startFrame: 1411, endFrame: 1424 },
      { text: "options", startFrame: 1424, endFrame: 1453 },
      { text: "and", startFrame: 1453, endFrame: 1462 },
      { text: "export", startFrame: 1462, endFrame: 1474 },
      { text: "your", startFrame: 1474, endFrame: 1481 },
      { text: "video", startFrame: 1481, endFrame: 1493 },
      { text: "and", startFrame: 1493, endFrame: 1504 },
      { text: "publish", startFrame: 1504, endFrame: 1514 },
      { text: "it", startFrame: 1514, endFrame: 1522 },
      { text: "to", startFrame: 1522, endFrame: 1526 },
      { text: "your", startFrame: 1526, endFrame: 1530 },
      { text: "socials.", startFrame: 1530, endFrame: 1553 },
    ],
  },
];

// Collect all words for TACaptions (excluding Line 2 which uses custom rendering)
const ALL_CAPTION_WORDS: CaptionWord[] = LINES.flatMap((line) =>
  line.isTextOnly ? [] : line.words,
);

// ── Phone with video inside ──
const PhoneWithVideo: React.FC<{
  videoSrc: string;
  playbackRate: number;
  durationInFrames: number;
}> = ({ videoSrc, playbackRate, durationInFrames }) => {
  return (
    <AbsoluteFill>
      {/* Black backing — fills any sub-pixel gaps between video and bezel */}
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
      {/* Video clipped to screen area, behind mockup */}
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
      {/* Phone mockup overlay — hides video overflow and black backing */}
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

// ── Line 2: Large centered text ──
const TextOnlyLine: React.FC<{ words: CaptionWord[] }> = ({ words }) => {
  const frame = useCurrentFrame();
  const lineStart = words[0].startFrame;
  // frame is relative to Sequence start; word timings are absolute
  const absFrame = frame + lineStart;
  const activeIdx = words.findIndex(
    (w) => absFrame >= w.startFrame && absFrame < w.endFrame,
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 60,
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
        }}
      >
        {words.map((word, i) => {
          const isActive = i === activeIdx;
          return (
            <span
              key={i}
              style={{
                fontFamily: "SFProRounded, sans-serif",
                fontSize: 80,
                fontWeight: 700,
                lineHeight: 1.3,
                letterSpacing: -0.5,
                color: isActive ? "#ffffff" : "#ffffff",
                backgroundColor: isActive ? "#22C55E" : "transparent",
                borderRadius: isActive ? 14 : 0,
                paddingTop: isActive ? 8 : 0,
                paddingBottom: isActive ? 8 : 0,
                paddingLeft: isActive ? 24 : 0,
                paddingRight: isActive ? 24 : 0,
                marginLeft: isActive ? -24 : 0,
                marginRight: isActive ? -24 : 0,
              }}
            >
              {word.text}
            </span>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ── Main Tutorial1 Composition ──
export const Tutorial1: React.FC = () => {
  const FPS = 30;

  return (
    <AbsoluteFill style={{ backgroundColor: "#33a4fe" }}>
      {/* Audio */}
      <Audio src={staticFile(AUDIO_SRC)} />

      {/* Render each line as a Sequence */}
      {LINES.map((line, i) => {
        const duration = line.endFrame - line.startFrame;
        const lineDurationSec = duration / FPS;

        if (line.isTextOnly) {
          // Line 2: large centered text, no phone
          return (
            <Sequence
              key={i}
              from={line.startFrame}
              durationInFrames={duration}
            >
              <TextOnlyLine words={line.words} />
            </Sequence>
          );
        }

        const playbackRate = line.video
          ? line.videoDurationSec / lineDurationSec
          : 1;

        return (
          <Sequence
            key={i}
            from={line.startFrame}
            durationInFrames={duration}
          >
            {/* Phone + video */}
            {line.video && (
              <PhoneWithVideo
                videoSrc={line.video}
                playbackRate={playbackRate}
                durationInFrames={duration}
              />
            )}

            {/* Comment overlay on Line 1 — centered on screen */}
            {line.showComment && (
              <Img
                src={staticFile(COMMENT_SRC)}
                style={{
                  position: "absolute",
                  left: (1080 - 724) / 2,
                  top: (1920 - 344) / 2,
                  width: 724,
                  height: 344,
                }}
              />
            )}
          </Sequence>
        );
      })}

      {/* Different SFX at each highlight moment */}
      {HIGHLIGHTS.map((hl, i) => (
        <Sequence key={`sfx-${i}`} from={hl.startFrame} durationInFrames={15}>
          <Audio src={staticFile(SFX_SOUNDS[i % SFX_SOUNDS.length])} volume={0.5} />
        </Sequence>
      ))}

      {/* Highlight overlays on UI elements */}
      <HighlightOverlay />

      {/* Green-pill captions within Instagram Reels safe zone */}
      {/* Safe zone: top 250px, bottom 320px, left 60px, right 120px */}
      {/* bottomOffset=1560 → bottom of text at y=360, top of text ~y=270 (inside safe zone) */}
      <TACaptions
        words={ALL_CAPTION_WORDS}
        highlightStyle="green-pill"
        backgroundType="blue"
        fontSize={68}
        wordsPerLine={3}
        bottomOffset={1560}
      />
    </AbsoluteFill>
  );
};
