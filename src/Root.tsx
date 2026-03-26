import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { CaptionsTemplate } from "./CaptionsTemplate";
import { Tutorial5Part1, TUTORIAL5_PART1_DURATION, Tutorial5Part2, TUTORIAL5_PART2_DURATION, Tutorial5Part3, TUTORIAL5_PART3_DURATION, Tutorial5, TUTORIAL5_DURATION } from "./Tutorial5";
import { Tutorial6Part1, TUTORIAL6_PART1_DURATION, Tutorial6Part2, TUTORIAL6_PART2_DURATION, Tutorial6Part3, TUTORIAL6_PART3_DURATION, Tutorial6, TUTORIAL6_DURATION } from "./Tutorial6";
import { Tutorial7Part1, TUTORIAL7_PART1_DURATION, Tutorial7Part2, TUTORIAL7_PART2_DURATION, Tutorial7Part3, TUTORIAL7_PART3_DURATION, Tutorial7, TUTORIAL7_DURATION } from "./Tutorial7";
import { Tutorial11Part1, TUTORIAL11_PART1_DURATION, Tutorial11Part2, TUTORIAL11_PART2_DURATION, Tutorial11Part3, TUTORIAL11_PART3_DURATION, Tutorial11, TUTORIAL11_DURATION } from "./Tutorial11";
import { Tutorial12Part1, TUTORIAL12_PART1_DURATION, Tutorial12Part2, TUTORIAL12_PART2_DURATION, Tutorial12Part3, TUTORIAL12_PART3_DURATION, Tutorial12, TUTORIAL12_DURATION } from "./Tutorial12";
import { Tutorial13Part1, TUTORIAL13_PART1_DURATION, Tutorial13Part2, TUTORIAL13_PART2_DURATION, Tutorial13Part3, TUTORIAL13_PART3_DURATION, Tutorial13, TUTORIAL13_DURATION } from "./Tutorial13";
import { Tutorial14Part1, TUTORIAL14_PART1_DURATION, Tutorial14Part2, TUTORIAL14_PART2_DURATION, Tutorial14Part3, TUTORIAL14_PART3_DURATION, Tutorial14, TUTORIAL14_DURATION } from "./Tutorial14";
import { Tutorial15Part1, TUTORIAL15_PART1_DURATION, Tutorial15Part2, TUTORIAL15_PART2_DURATION, Tutorial15Part3, TUTORIAL15_PART3_DURATION, Tutorial15, TUTORIAL15_DURATION } from "./Tutorial15";
import { Tutorial16Part1, TUTORIAL16_PART1_DURATION, Tutorial16Part2, TUTORIAL16_PART2_DURATION, Tutorial16Part3, TUTORIAL16_PART3_DURATION, Tutorial16, TUTORIAL16_DURATION } from "./Tutorial16";
import { Tutorial17Part1, TUTORIAL17_PART1_DURATION, Tutorial17Part2, TUTORIAL17_PART2_DURATION, Tutorial17Part3, TUTORIAL17_PART3_DURATION, Tutorial17, TUTORIAL17_DURATION } from "./Tutorial17";
import { Tutorial10Part1, TUTORIAL10_PART1_DURATION, Tutorial10Part2, TUTORIAL10_PART2_DURATION, Tutorial10Part3, TUTORIAL10_PART3_DURATION, Tutorial10, TUTORIAL10_DURATION } from "./Tutorial10";
import { Tutorial9Part1, TUTORIAL9_PART1_DURATION, Tutorial9Part2, TUTORIAL9_PART2_DURATION, Tutorial9Part3, TUTORIAL9_PART3_DURATION, Tutorial9, TUTORIAL9_DURATION } from "./Tutorial9";
import { Tutorial8Part1, TUTORIAL8_PART1_DURATION, Tutorial8Part2, TUTORIAL8_PART2_DURATION, Tutorial8Part3, TUTORIAL8_PART3_DURATION, Tutorial8, TUTORIAL8_DURATION } from "./Tutorial8";
import { TutorialX, TutorialXPart1, TutorialXPart2, TutorialXPart3, TUTORIALX_DURATION, TUTORIALX_PART1_DURATION, TUTORIALX_PART2_DURATION, TUTORIALX_PART3_DURATION } from "./TutorialX";
import { FigmaDemo, FIGMA_DEMO_DURATION } from "./FigmaDemo";
import { MapCaptions, MAP_CAPTIONS_DURATION } from "./MapCaptions";
import { Tutorial18Part1, TUTORIAL18_PART1_DURATION, Tutorial18Part2, TUTORIAL18_PART2_DURATION, Tutorial18Part3, TUTORIAL18_PART3_DURATION, Tutorial18, TUTORIAL18_DURATION } from "./Tutorial18";
import { Tutorial19Part1, TUTORIAL19_PART1_DURATION, Tutorial19Part2, TUTORIAL19_PART2_DURATION, Tutorial19Part3, TUTORIAL19_PART3_DURATION, Tutorial19, TUTORIAL19_DURATION } from "./Tutorial19";
import { Tutorial20Part1, TUTORIAL20_PART1_DURATION, Tutorial20Part2, TUTORIAL20_PART2_DURATION, Tutorial20Part3, TUTORIAL20_PART3_DURATION, Tutorial20, TUTORIAL20_DURATION } from "./Tutorial20";
import { Tutorial21Part1, TUTORIAL21_PART1_DURATION, Tutorial21Part2, TUTORIAL21_PART2_DURATION, Tutorial21Part3, TUTORIAL21_PART3_DURATION, Tutorial21, TUTORIAL21_DURATION } from "./Tutorial21";
import {
  CaliforniaStateGeneric, CALIFORNIA_STATE_GENERIC_DURATION,
  CaliforniaStateGuessV1, CALIFORNIA_STATE_GUESSV1_DURATION,
  CaliforniaStateGuessV2, CALIFORNIA_STATE_GUESSV2_DURATION,
  CaliforniaStateGuessV3, CALIFORNIA_STATE_GUESSV3_DURATION,
} from "./BoundariesDemo";

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

      {/* ── Tutorial 11 ── */}
      <Composition id="Tutorial11-Part1" component={Tutorial11Part1} durationInFrames={TUTORIAL11_PART1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial11-Part2" component={Tutorial11Part2} durationInFrames={TUTORIAL11_PART2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial11-Part3" component={Tutorial11Part3} durationInFrames={TUTORIAL11_PART3_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial11" component={Tutorial11} durationInFrames={TUTORIAL11_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Tutorial 12 ── */}
      <Composition id="Tutorial12-Part1" component={Tutorial12Part1} durationInFrames={TUTORIAL12_PART1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial12-Part2" component={Tutorial12Part2} durationInFrames={TUTORIAL12_PART2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial12-Part3" component={Tutorial12Part3} durationInFrames={TUTORIAL12_PART3_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial12" component={Tutorial12} durationInFrames={TUTORIAL12_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Tutorial 13 ── */}
      <Composition id="Tutorial13-Part1" component={Tutorial13Part1} durationInFrames={TUTORIAL13_PART1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial13-Part2" component={Tutorial13Part2} durationInFrames={TUTORIAL13_PART2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial13-Part3" component={Tutorial13Part3} durationInFrames={TUTORIAL13_PART3_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial13" component={Tutorial13} durationInFrames={TUTORIAL13_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Tutorial 14 ── */}
      <Composition id="Tutorial14-Part1" component={Tutorial14Part1} durationInFrames={TUTORIAL14_PART1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial14-Part2" component={Tutorial14Part2} durationInFrames={TUTORIAL14_PART2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial14-Part3" component={Tutorial14Part3} durationInFrames={TUTORIAL14_PART3_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial14" component={Tutorial14} durationInFrames={TUTORIAL14_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Tutorial 15 ── */}
      <Composition id="Tutorial15-Part1" component={Tutorial15Part1} durationInFrames={TUTORIAL15_PART1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial15-Part2" component={Tutorial15Part2} durationInFrames={TUTORIAL15_PART2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial15-Part3" component={Tutorial15Part3} durationInFrames={TUTORIAL15_PART3_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial15" component={Tutorial15} durationInFrames={TUTORIAL15_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Tutorial 16 ── */}
      <Composition id="Tutorial16-Part1" component={Tutorial16Part1} durationInFrames={TUTORIAL16_PART1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial16-Part2" component={Tutorial16Part2} durationInFrames={TUTORIAL16_PART2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial16-Part3" component={Tutorial16Part3} durationInFrames={TUTORIAL16_PART3_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial16" component={Tutorial16} durationInFrames={TUTORIAL16_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Tutorial 17 ── */}
      <Composition id="Tutorial17-Part1" component={Tutorial17Part1} durationInFrames={TUTORIAL17_PART1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial17-Part2" component={Tutorial17Part2} durationInFrames={TUTORIAL17_PART2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial17-Part3" component={Tutorial17Part3} durationInFrames={TUTORIAL17_PART3_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial17" component={Tutorial17} durationInFrames={TUTORIAL17_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Tutorial 10 ── */}
      <Composition id="Tutorial10-Part1" component={Tutorial10Part1} durationInFrames={TUTORIAL10_PART1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial10-Part2" component={Tutorial10Part2} durationInFrames={TUTORIAL10_PART2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial10-Part3" component={Tutorial10Part3} durationInFrames={TUTORIAL10_PART3_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial10" component={Tutorial10} durationInFrames={TUTORIAL10_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Tutorial 9 ── */}
      <Composition id="Tutorial9-Part1" component={Tutorial9Part1} durationInFrames={TUTORIAL9_PART1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial9-Part2" component={Tutorial9Part2} durationInFrames={TUTORIAL9_PART2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial9-Part3" component={Tutorial9Part3} durationInFrames={TUTORIAL9_PART3_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial9" component={Tutorial9} durationInFrames={TUTORIAL9_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Tutorial 8 ── */}
      <Composition id="Tutorial8-Part1" component={Tutorial8Part1} durationInFrames={TUTORIAL8_PART1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial8-Part2" component={Tutorial8Part2} durationInFrames={TUTORIAL8_PART2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial8-Part3" component={Tutorial8Part3} durationInFrames={TUTORIAL8_PART3_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial8" component={Tutorial8} durationInFrames={TUTORIAL8_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Tutorial X: Manage Multiple Routes ── */}
      <Composition id="TutorialX-Part1" component={TutorialXPart1} durationInFrames={TUTORIALX_PART1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="TutorialX-Part2" component={TutorialXPart2} durationInFrames={TUTORIALX_PART2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="TutorialX-Part3" component={TutorialXPart3} durationInFrames={TUTORIALX_PART3_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="TutorialX" component={TutorialX} durationInFrames={TUTORIALX_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Tutorial 18 ── */}
      <Composition id="Tutorial18-Part1" component={Tutorial18Part1} durationInFrames={TUTORIAL18_PART1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial18-Part2" component={Tutorial18Part2} durationInFrames={TUTORIAL18_PART2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial18-Part3" component={Tutorial18Part3} durationInFrames={TUTORIAL18_PART3_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial18" component={Tutorial18} durationInFrames={TUTORIAL18_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Tutorial 19 ── */}
      <Composition id="Tutorial19-Part1" component={Tutorial19Part1} durationInFrames={TUTORIAL19_PART1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial19-Part2" component={Tutorial19Part2} durationInFrames={TUTORIAL19_PART2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial19-Part3" component={Tutorial19Part3} durationInFrames={TUTORIAL19_PART3_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial19" component={Tutorial19} durationInFrames={TUTORIAL19_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Tutorial 20: Change Starting Point (TutorialY) ── */}
      <Composition id="Tutorial20-Part1" component={Tutorial20Part1} durationInFrames={TUTORIAL20_PART1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial20-Part2" component={Tutorial20Part2} durationInFrames={TUTORIAL20_PART2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial20-Part3" component={Tutorial20Part3} durationInFrames={TUTORIAL20_PART3_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial20" component={Tutorial20} durationInFrames={TUTORIAL20_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Tutorial 21 ── */}
      <Composition id="Tutorial21-Part1" component={Tutorial21Part1} durationInFrames={TUTORIAL21_PART1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial21-Part2" component={Tutorial21Part2} durationInFrames={TUTORIAL21_PART2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial21-Part3" component={Tutorial21Part3} durationInFrames={TUTORIAL21_PART3_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial21" component={Tutorial21} durationInFrames={TUTORIAL21_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries Template — California (State) ── */}
      <Composition id="California-State-Generic" component={CaliforniaStateGeneric} durationInFrames={CALIFORNIA_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="California-State-GuessV1" component={CaliforniaStateGuessV1} durationInFrames={CALIFORNIA_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="California-State-GuessV2" component={CaliforniaStateGuessV2} durationInFrames={CALIFORNIA_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="California-State-GuessV3" component={CaliforniaStateGuessV3} durationInFrames={CALIFORNIA_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Figma Layout Demo ── */}
      <Composition id="FigmaDemo" component={FigmaDemo} durationInFrames={FIGMA_DEMO_DURATION} fps={30} width={1080} height={1920} />


      {/* ── Tutorial 6 ── */}
      <Composition id="Tutorial6-Part1" component={Tutorial6Part1} durationInFrames={TUTORIAL6_PART1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial6-Part2" component={Tutorial6Part2} durationInFrames={TUTORIAL6_PART2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial6-Part3" component={Tutorial6Part3} durationInFrames={TUTORIAL6_PART3_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial6" component={Tutorial6} durationInFrames={TUTORIAL6_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Tutorial 7 ── */}
      <Composition id="Tutorial7-Part1" component={Tutorial7Part1} durationInFrames={TUTORIAL7_PART1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial7-Part2" component={Tutorial7Part2} durationInFrames={TUTORIAL7_PART2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial7-Part3" component={Tutorial7Part3} durationInFrames={TUTORIAL7_PART3_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial7" component={Tutorial7} durationInFrames={TUTORIAL7_DURATION} fps={30} width={1080} height={1920} />

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
