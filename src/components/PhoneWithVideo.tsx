import { AbsoluteFill, Img, OffthreadVideo, staticFile } from "remotion";

// Screen boundary verified via PIL alpha-channel pixel analysis.
// PAD extends slightly beyond the transparent screen area so the phone
// frame PNG (rendered on top) fully covers any edge imprecision.
const PAD = 6;
export const SCREEN = { left: 308, top: 462, width: 498, height: 1036 };
export const MOCKUP_SRC = "Tutorial 1/iphone 12 pro mockup.png";

export const PhoneWithVideo: React.FC<{
  videoSrc: string;
  playbackRate: number;
}> = ({ videoSrc, playbackRate }) => {
  const left = SCREEN.left - PAD;
  const top = SCREEN.top - PAD;
  const width = SCREEN.width + PAD * 2;
  const height = SCREEN.height + PAD * 2;

  return (
    <AbsoluteFill>
      {/* Black fill behind video — covers entire screen area */}
      <div
        style={{
          position: "absolute",
          left,
          top,
          width,
          height,
          backgroundColor: "#000000",
        }}
      />
      {/* Video — no borderRadius, phone mockup PNG handles corner clipping */}
      <div
        style={{
          position: "absolute",
          left,
          top,
          width,
          height,
          overflow: "hidden",
        }}
      >
        <OffthreadVideo
          src={staticFile(videoSrc)}
          playbackRate={playbackRate}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
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
