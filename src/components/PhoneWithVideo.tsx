import { AbsoluteFill, Img, OffthreadVideo, staticFile } from "remotion";

export const SCREEN = { left: 298, top: 418, width: 516, height: 1088 };
export const SCREEN_RADIUS = 42;
export const MOCKUP_SRC = "Tutorial 1/iphone 12 pro mockup.png";

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
