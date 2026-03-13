import { AbsoluteFill, OffthreadVideo, staticFile } from "remotion";

// Screen recording position — left=307, top=423, width=498, height=1074
// White border + borderRadius=55. No phone mockup.
export const SCREEN = { left: 307, top: 423, width: 498, height: 1074 };

export const PhoneWithVideo: React.FC<{
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
          borderRadius: 55,
          border: "9px solid rgba(255,255,255,0.85)",
          overflow: "hidden",
          backgroundColor: "#000000",
        }}
      >
        <OffthreadVideo
          src={staticFile(videoSrc)}
          playbackRate={playbackRate}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "0 0",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
