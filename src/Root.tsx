import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { CaptionsTemplate } from "./CaptionsTemplate";
import { Tutorial5Part1, TUTORIAL5_PART1_DURATION, Tutorial5Part2, TUTORIAL5_PART2_DURATION, Tutorial5Part3, TUTORIAL5_PART3_DURATION, Tutorial5, TUTORIAL5_DURATION } from "./Tutorial5";
import { Tutorial6Part1, TUTORIAL6_PART1_DURATION, Tutorial6Part2, TUTORIAL6_PART2_DURATION, Tutorial6Part3, TUTORIAL6_PART3_DURATION, Tutorial6, TUTORIAL6_DURATION } from "./Tutorial6";
import { FigmaDemo, FIGMA_DEMO_DURATION } from "./FigmaDemo";
import { MapCaptions, MAP_CAPTIONS_DURATION } from "./MapCaptions";

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

      {/* ── Map Captions ── */}
      <Composition
        id="MapCaptions"
        component={MapCaptions}
        durationInFrames={MAP_CAPTIONS_DURATION}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* ── Tutorial 5: Part 1 (standalone approval) ── */}
      <Composition
        id="Tutorial5-Part1"
        component={Tutorial5Part1}
        durationInFrames={TUTORIAL5_PART1_DURATION}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* ── Tutorial 5: Part 2 (standalone approval) ── */}
      <Composition
        id="Tutorial5-Part2"
        component={Tutorial5Part2}
        durationInFrames={TUTORIAL5_PART2_DURATION}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* ── Tutorial 5: Part 3 (standalone approval) ── */}
      <Composition
        id="Tutorial5-Part3"
        component={Tutorial5Part3}
        durationInFrames={TUTORIAL5_PART3_DURATION}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* ── Tutorial 5: Full video ── */}
      <Composition
        id="Tutorial5"
        component={Tutorial5}
        durationInFrames={TUTORIAL5_DURATION}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* ── Figma Layout Demo ── */}
      <Composition id="FigmaDemo" component={FigmaDemo} durationInFrames={FIGMA_DEMO_DURATION} fps={30} width={1080} height={1920} />


      {/* ── Tutorial 6 ── */}
      <Composition id="Tutorial6-Part1" component={Tutorial6Part1} durationInFrames={TUTORIAL6_PART1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial6-Part2" component={Tutorial6Part2} durationInFrames={TUTORIAL6_PART2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial6-Part3" component={Tutorial6Part3} durationInFrames={TUTORIAL6_PART3_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial6" component={Tutorial6} durationInFrames={TUTORIAL6_DURATION} fps={30} width={1080} height={1920} />

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
