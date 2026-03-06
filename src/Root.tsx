import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { CaptionsTemplate } from "./CaptionsTemplate";
import { Tutorial1 } from "./Tutorial1";
import { Tutorial2, TUTORIAL2_DURATION } from "./Tutorial2";
import { Tutorial3, TUTORIAL3_DURATION } from "./Tutorial3";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={MyComposition}
        durationInFrames={210}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* ── Tutorial 1: Travel Animator waypoints tutorial ── */}
      <Composition
        id="Tutorial1"
        component={Tutorial1}
        durationInFrames={1559}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* ── Tutorial 2: Help/About & Contact Support ── */}
      <Composition
        id="Tutorial2"
        component={Tutorial2}
        durationInFrames={TUTORIAL2_DURATION}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* ── Tutorial 3: Invert Route ── */}
      <Composition
        id="Tutorial3"
        component={Tutorial3}
        durationInFrames={TUTORIAL3_DURATION}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* ── TA Captions: Blue background ── */}
      <Composition
        id="TACaption-Blue-GreenPill"
        component={CaptionsTemplate}
        durationInFrames={240}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{ highlightStyle: "green-pill" as const, backgroundType: "blue" as const }}
      />
      <Composition
        id="TACaption-Blue-YellowText"
        component={CaptionsTemplate}
        durationInFrames={240}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{ highlightStyle: "yellow-text" as const, backgroundType: "blue" as const }}
      />

      {/* ── TA Captions: Black background ── */}
      <Composition
        id="TACaption-Black-GreenPill"
        component={CaptionsTemplate}
        durationInFrames={240}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{ highlightStyle: "green-pill" as const, backgroundType: "black" as const }}
      />
      <Composition
        id="TACaption-Black-YellowText"
        component={CaptionsTemplate}
        durationInFrames={240}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{ highlightStyle: "yellow-text" as const, backgroundType: "black" as const }}
      />

    </>
  );
};
