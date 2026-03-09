import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { CaptionsTemplate } from "./CaptionsTemplate";

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
