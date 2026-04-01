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
import { AffiliateCaption, AFFILIATE_DURATION } from "./AffiliateCaption";
import { FigmaDemo, FIGMA_DEMO_DURATION } from "./FigmaDemo";
import { MapCaptions, MAP_CAPTIONS_DURATION } from "./MapCaptions";
import { Tutorial18Part1, TUTORIAL18_PART1_DURATION, Tutorial18Part2, TUTORIAL18_PART2_DURATION, Tutorial18Part3, TUTORIAL18_PART3_DURATION, Tutorial18, TUTORIAL18_DURATION } from "./Tutorial18";
import { Tutorial19Part1, TUTORIAL19_PART1_DURATION, Tutorial19Part2, TUTORIAL19_PART2_DURATION, Tutorial19Part3, TUTORIAL19_PART3_DURATION, Tutorial19, TUTORIAL19_DURATION } from "./Tutorial19";
import { Tutorial20Part1, TUTORIAL20_PART1_DURATION, Tutorial20Part2, TUTORIAL20_PART2_DURATION, Tutorial20Part3, TUTORIAL20_PART3_DURATION, Tutorial20, TUTORIAL20_DURATION } from "./Tutorial20";
import { Tutorial21Part1, TUTORIAL21_PART1_DURATION, Tutorial21Part2, TUTORIAL21_PART2_DURATION, Tutorial21Part3, TUTORIAL21_PART3_DURATION, Tutorial21, TUTORIAL21_DURATION } from "./Tutorial21";
import { Tutorial22Part1, TUTORIAL22_PART1_DURATION, Tutorial22Part2, TUTORIAL22_PART2_DURATION, Tutorial22Part3, TUTORIAL22_PART3_DURATION, Tutorial22, TUTORIAL22_DURATION } from "./Tutorial22";
import { AlabamaStateGeneric, ALABAMA_STATE_GENERIC_DURATION, AlabamaStateGuessV1, ALABAMA_STATE_GUESSV1_DURATION, AlabamaStateGuessV2, ALABAMA_STATE_GUESSV2_DURATION, AlabamaStateGuessV3, ALABAMA_STATE_GUESSV3_DURATION } from "./Alabama";
import { AlaskaStateGeneric, ALASKA_STATE_GENERIC_DURATION, AlaskaStateGuessV1, ALASKA_STATE_GUESSV1_DURATION, AlaskaStateGuessV2, ALASKA_STATE_GUESSV2_DURATION, AlaskaStateGuessV3, ALASKA_STATE_GUESSV3_DURATION } from "./Alaska";
import { ArizonaStateGeneric, ARIZONA_STATE_GENERIC_DURATION, ArizonaStateGuessV1, ARIZONA_STATE_GUESSV1_DURATION, ArizonaStateGuessV2, ARIZONA_STATE_GUESSV2_DURATION, ArizonaStateGuessV3, ARIZONA_STATE_GUESSV3_DURATION } from "./Arizona";
import { ArkansasStateGeneric, ARKANSAS_STATE_GENERIC_DURATION, ArkansasStateGuessV1, ARKANSAS_STATE_GUESSV1_DURATION, ArkansasStateGuessV2, ARKANSAS_STATE_GUESSV2_DURATION, ArkansasStateGuessV3, ARKANSAS_STATE_GUESSV3_DURATION } from "./Arkansas";
import { CaliforniaStateGeneric, CALIFORNIA_STATE_GENERIC_DURATION, CaliforniaStateGuessV1, CALIFORNIA_STATE_GUESSV1_DURATION, CaliforniaStateGuessV2, CALIFORNIA_STATE_GUESSV2_DURATION, CaliforniaStateGuessV3, CALIFORNIA_STATE_GUESSV3_DURATION } from "./California";
import { ColoradoStateGeneric, COLORADO_STATE_GENERIC_DURATION, ColoradoStateGuessV1, COLORADO_STATE_GUESSV1_DURATION, ColoradoStateGuessV2, COLORADO_STATE_GUESSV2_DURATION, ColoradoStateGuessV3, COLORADO_STATE_GUESSV3_DURATION } from "./Colorado";
import { ConnecticutStateGeneric, CONNECTICUT_STATE_GENERIC_DURATION, ConnecticutStateGuessV1, CONNECTICUT_STATE_GUESSV1_DURATION, ConnecticutStateGuessV2, CONNECTICUT_STATE_GUESSV2_DURATION, ConnecticutStateGuessV3, CONNECTICUT_STATE_GUESSV3_DURATION } from "./Connecticut";
import { DelawareStateGeneric, DELAWARE_STATE_GENERIC_DURATION, DelawareStateGuessV1, DELAWARE_STATE_GUESSV1_DURATION, DelawareStateGuessV2, DELAWARE_STATE_GUESSV2_DURATION, DelawareStateGuessV3, DELAWARE_STATE_GUESSV3_DURATION } from "./Delaware";
import { FloridaStateGeneric, FLORIDA_STATE_GENERIC_DURATION, FloridaStateGuessV1, FLORIDA_STATE_GUESSV1_DURATION, FloridaStateGuessV2, FLORIDA_STATE_GUESSV2_DURATION, FloridaStateGuessV3, FLORIDA_STATE_GUESSV3_DURATION } from "./Florida";
import { GeorgiaStateGeneric, GEORGIA_STATE_GENERIC_DURATION, GeorgiaStateGuessV1, GEORGIA_STATE_GUESSV1_DURATION, GeorgiaStateGuessV2, GEORGIA_STATE_GUESSV2_DURATION, GeorgiaStateGuessV3, GEORGIA_STATE_GUESSV3_DURATION } from "./Georgia";
import { HawaiiStateGeneric, HAWAII_STATE_GENERIC_DURATION, HawaiiStateGuessV1, HAWAII_STATE_GUESSV1_DURATION, HawaiiStateGuessV2, HAWAII_STATE_GUESSV2_DURATION, HawaiiStateGuessV3, HAWAII_STATE_GUESSV3_DURATION } from "./Hawaii";
import { IdahoStateGeneric, IDAHO_STATE_GENERIC_DURATION, IdahoStateGuessV1, IDAHO_STATE_GUESSV1_DURATION, IdahoStateGuessV2, IDAHO_STATE_GUESSV2_DURATION, IdahoStateGuessV3, IDAHO_STATE_GUESSV3_DURATION } from "./Idaho";
import { IllinoisStateGeneric, ILLINOIS_STATE_GENERIC_DURATION, IllinoisStateGuessV1, ILLINOIS_STATE_GUESSV1_DURATION, IllinoisStateGuessV2, ILLINOIS_STATE_GUESSV2_DURATION, IllinoisStateGuessV3, ILLINOIS_STATE_GUESSV3_DURATION } from "./Illinois";
import { IndianaStateGeneric, INDIANA_STATE_GENERIC_DURATION, IndianaStateGuessV1, INDIANA_STATE_GUESSV1_DURATION, IndianaStateGuessV2, INDIANA_STATE_GUESSV2_DURATION, IndianaStateGuessV3, INDIANA_STATE_GUESSV3_DURATION } from "./Indiana";
import { IowaStateGeneric, IOWA_STATE_GENERIC_DURATION, IowaStateGuessV1, IOWA_STATE_GUESSV1_DURATION, IowaStateGuessV2, IOWA_STATE_GUESSV2_DURATION, IowaStateGuessV3, IOWA_STATE_GUESSV3_DURATION } from "./Iowa";
import { KansasStateGeneric, KANSAS_STATE_GENERIC_DURATION, KansasStateGuessV1, KANSAS_STATE_GUESSV1_DURATION, KansasStateGuessV2, KANSAS_STATE_GUESSV2_DURATION, KansasStateGuessV3, KANSAS_STATE_GUESSV3_DURATION } from "./Kansas";
import { KentuckyStateGeneric, KENTUCKY_STATE_GENERIC_DURATION, KentuckyStateGuessV1, KENTUCKY_STATE_GUESSV1_DURATION, KentuckyStateGuessV2, KENTUCKY_STATE_GUESSV2_DURATION, KentuckyStateGuessV3, KENTUCKY_STATE_GUESSV3_DURATION } from "./Kentucky";
import { LouisianaStateGeneric, LOUISIANA_STATE_GENERIC_DURATION, LouisianaStateGuessV1, LOUISIANA_STATE_GUESSV1_DURATION, LouisianaStateGuessV2, LOUISIANA_STATE_GUESSV2_DURATION, LouisianaStateGuessV3, LOUISIANA_STATE_GUESSV3_DURATION } from "./Louisiana";
import { MaineStateGeneric, MAINE_STATE_GENERIC_DURATION, MaineStateGuessV1, MAINE_STATE_GUESSV1_DURATION, MaineStateGuessV2, MAINE_STATE_GUESSV2_DURATION, MaineStateGuessV3, MAINE_STATE_GUESSV3_DURATION } from "./Maine";
import { MarylandStateGeneric, MARYLAND_STATE_GENERIC_DURATION, MarylandStateGuessV1, MARYLAND_STATE_GUESSV1_DURATION, MarylandStateGuessV2, MARYLAND_STATE_GUESSV2_DURATION, MarylandStateGuessV3, MARYLAND_STATE_GUESSV3_DURATION } from "./Maryland";
import { MassachusettsStateGeneric, MASSACHUSETTS_STATE_GENERIC_DURATION, MassachusettsStateGuessV1, MASSACHUSETTS_STATE_GUESSV1_DURATION, MassachusettsStateGuessV2, MASSACHUSETTS_STATE_GUESSV2_DURATION, MassachusettsStateGuessV3, MASSACHUSETTS_STATE_GUESSV3_DURATION } from "./Massachusetts";
import { MichiganStateGeneric, MICHIGAN_STATE_GENERIC_DURATION, MichiganStateGuessV1, MICHIGAN_STATE_GUESSV1_DURATION, MichiganStateGuessV2, MICHIGAN_STATE_GUESSV2_DURATION, MichiganStateGuessV3, MICHIGAN_STATE_GUESSV3_DURATION } from "./Michigan";
import { MinnesotaStateGeneric, MINNESOTA_STATE_GENERIC_DURATION, MinnesotaStateGuessV1, MINNESOTA_STATE_GUESSV1_DURATION, MinnesotaStateGuessV2, MINNESOTA_STATE_GUESSV2_DURATION, MinnesotaStateGuessV3, MINNESOTA_STATE_GUESSV3_DURATION } from "./Minnesota";
import { MississippiStateGeneric, MISSISSIPPI_STATE_GENERIC_DURATION, MississippiStateGuessV1, MISSISSIPPI_STATE_GUESSV1_DURATION, MississippiStateGuessV2, MISSISSIPPI_STATE_GUESSV2_DURATION, MississippiStateGuessV3, MISSISSIPPI_STATE_GUESSV3_DURATION } from "./Mississippi";
import { MissouriStateGeneric, MISSOURI_STATE_GENERIC_DURATION, MissouriStateGuessV1, MISSOURI_STATE_GUESSV1_DURATION, MissouriStateGuessV2, MISSOURI_STATE_GUESSV2_DURATION, MissouriStateGuessV3, MISSOURI_STATE_GUESSV3_DURATION } from "./Missouri";
import { MontanaStateGeneric, MONTANA_STATE_GENERIC_DURATION, MontanaStateGuessV1, MONTANA_STATE_GUESSV1_DURATION, MontanaStateGuessV2, MONTANA_STATE_GUESSV2_DURATION, MontanaStateGuessV3, MONTANA_STATE_GUESSV3_DURATION } from "./Montana";
import { NebraskaStateGeneric, NEBRASKA_STATE_GENERIC_DURATION, NebraskaStateGuessV1, NEBRASKA_STATE_GUESSV1_DURATION, NebraskaStateGuessV2, NEBRASKA_STATE_GUESSV2_DURATION, NebraskaStateGuessV3, NEBRASKA_STATE_GUESSV3_DURATION } from "./Nebraska";
import { NevadaStateGeneric, NEVADA_STATE_GENERIC_DURATION, NevadaStateGuessV1, NEVADA_STATE_GUESSV1_DURATION, NevadaStateGuessV2, NEVADA_STATE_GUESSV2_DURATION, NevadaStateGuessV3, NEVADA_STATE_GUESSV3_DURATION } from "./Nevada";
import { NewHampshireStateGeneric, NEWHAMPSHIRE_STATE_GENERIC_DURATION, NewHampshireStateGuessV1, NEWHAMPSHIRE_STATE_GUESSV1_DURATION, NewHampshireStateGuessV2, NEWHAMPSHIRE_STATE_GUESSV2_DURATION, NewHampshireStateGuessV3, NEWHAMPSHIRE_STATE_GUESSV3_DURATION } from "./NewHampshire";
import { NewJerseyStateGeneric, NEWJERSEY_STATE_GENERIC_DURATION, NewJerseyStateGuessV1, NEWJERSEY_STATE_GUESSV1_DURATION, NewJerseyStateGuessV2, NEWJERSEY_STATE_GUESSV2_DURATION, NewJerseyStateGuessV3, NEWJERSEY_STATE_GUESSV3_DURATION } from "./NewJersey";
import { NewMexicoStateGeneric, NEWMEXICO_STATE_GENERIC_DURATION, NewMexicoStateGuessV1, NEWMEXICO_STATE_GUESSV1_DURATION, NewMexicoStateGuessV2, NEWMEXICO_STATE_GUESSV2_DURATION, NewMexicoStateGuessV3, NEWMEXICO_STATE_GUESSV3_DURATION } from "./NewMexico";
import { NewYorkStateGeneric, NEWYORK_STATE_GENERIC_DURATION, NewYorkStateGuessV1, NEWYORK_STATE_GUESSV1_DURATION, NewYorkStateGuessV2, NEWYORK_STATE_GUESSV2_DURATION, NewYorkStateGuessV3, NEWYORK_STATE_GUESSV3_DURATION } from "./NewYork";
import { NorthCarolinaStateGeneric, NORTHCAROLINA_STATE_GENERIC_DURATION, NorthCarolinaStateGuessV1, NORTHCAROLINA_STATE_GUESSV1_DURATION, NorthCarolinaStateGuessV2, NORTHCAROLINA_STATE_GUESSV2_DURATION, NorthCarolinaStateGuessV3, NORTHCAROLINA_STATE_GUESSV3_DURATION } from "./NorthCarolina";
import { NorthDakotaStateGeneric, NORTHDAKOTA_STATE_GENERIC_DURATION, NorthDakotaStateGuessV1, NORTHDAKOTA_STATE_GUESSV1_DURATION, NorthDakotaStateGuessV2, NORTHDAKOTA_STATE_GUESSV2_DURATION, NorthDakotaStateGuessV3, NORTHDAKOTA_STATE_GUESSV3_DURATION } from "./NorthDakota";
import { OhioStateGeneric, OHIO_STATE_GENERIC_DURATION, OhioStateGuessV1, OHIO_STATE_GUESSV1_DURATION, OhioStateGuessV2, OHIO_STATE_GUESSV2_DURATION, OhioStateGuessV3, OHIO_STATE_GUESSV3_DURATION } from "./Ohio";
import { OklahomaStateGeneric, OKLAHOMA_STATE_GENERIC_DURATION, OklahomaStateGuessV1, OKLAHOMA_STATE_GUESSV1_DURATION, OklahomaStateGuessV2, OKLAHOMA_STATE_GUESSV2_DURATION, OklahomaStateGuessV3, OKLAHOMA_STATE_GUESSV3_DURATION } from "./Oklahoma";
import { OregonStateGeneric, OREGON_STATE_GENERIC_DURATION, OregonStateGuessV1, OREGON_STATE_GUESSV1_DURATION, OregonStateGuessV2, OREGON_STATE_GUESSV2_DURATION, OregonStateGuessV3, OREGON_STATE_GUESSV3_DURATION } from "./Oregon";
import { PennsylvaniaStateGeneric, PENNSYLVANIA_STATE_GENERIC_DURATION, PennsylvaniaStateGuessV1, PENNSYLVANIA_STATE_GUESSV1_DURATION, PennsylvaniaStateGuessV2, PENNSYLVANIA_STATE_GUESSV2_DURATION, PennsylvaniaStateGuessV3, PENNSYLVANIA_STATE_GUESSV3_DURATION } from "./Pennsylvania";
import { PuertoRicoStateGeneric, PUERTORICO_STATE_GENERIC_DURATION, PuertoRicoStateGuessV1, PUERTORICO_STATE_GUESSV1_DURATION, PuertoRicoStateGuessV2, PUERTORICO_STATE_GUESSV2_DURATION, PuertoRicoStateGuessV3, PUERTORICO_STATE_GUESSV3_DURATION } from "./PuertoRico";
import { RhodeIslandStateGeneric, RHODEISLAND_STATE_GENERIC_DURATION, RhodeIslandStateGuessV1, RHODEISLAND_STATE_GUESSV1_DURATION, RhodeIslandStateGuessV2, RHODEISLAND_STATE_GUESSV2_DURATION, RhodeIslandStateGuessV3, RHODEISLAND_STATE_GUESSV3_DURATION } from "./RhodeIsland";
import { SouthCarolinaStateGeneric, SOUTHCAROLINA_STATE_GENERIC_DURATION, SouthCarolinaStateGuessV1, SOUTHCAROLINA_STATE_GUESSV1_DURATION, SouthCarolinaStateGuessV2, SOUTHCAROLINA_STATE_GUESSV2_DURATION, SouthCarolinaStateGuessV3, SOUTHCAROLINA_STATE_GUESSV3_DURATION } from "./SouthCarolina";
import { SouthDakotaStateGeneric, SOUTHDAKOTA_STATE_GENERIC_DURATION, SouthDakotaStateGuessV1, SOUTHDAKOTA_STATE_GUESSV1_DURATION, SouthDakotaStateGuessV2, SOUTHDAKOTA_STATE_GUESSV2_DURATION, SouthDakotaStateGuessV3, SOUTHDAKOTA_STATE_GUESSV3_DURATION } from "./SouthDakota";
import { TennesseeStateGeneric, TENNESSEE_STATE_GENERIC_DURATION, TennesseeStateGuessV1, TENNESSEE_STATE_GUESSV1_DURATION, TennesseeStateGuessV2, TENNESSEE_STATE_GUESSV2_DURATION, TennesseeStateGuessV3, TENNESSEE_STATE_GUESSV3_DURATION } from "./Tennessee";
import { TexasStateGeneric, TEXAS_STATE_GENERIC_DURATION, TexasStateGuessV1, TEXAS_STATE_GUESSV1_DURATION, TexasStateGuessV2, TEXAS_STATE_GUESSV2_DURATION, TexasStateGuessV3, TEXAS_STATE_GUESSV3_DURATION } from "./Texas";
import { UtahStateGeneric, UTAH_STATE_GENERIC_DURATION, UtahStateGuessV1, UTAH_STATE_GUESSV1_DURATION, UtahStateGuessV2, UTAH_STATE_GUESSV2_DURATION, UtahStateGuessV3, UTAH_STATE_GUESSV3_DURATION } from "./Utah";
import { VermontStateGeneric, VERMONT_STATE_GENERIC_DURATION, VermontStateGuessV1, VERMONT_STATE_GUESSV1_DURATION, VermontStateGuessV2, VERMONT_STATE_GUESSV2_DURATION, VermontStateGuessV3, VERMONT_STATE_GUESSV3_DURATION } from "./Vermont";
import { VirginIslandsStateGeneric, VIRGINISLANDS_STATE_GENERIC_DURATION, VirginIslandsStateGuessV1, VIRGINISLANDS_STATE_GUESSV1_DURATION, VirginIslandsStateGuessV2, VIRGINISLANDS_STATE_GUESSV2_DURATION, VirginIslandsStateGuessV3, VIRGINISLANDS_STATE_GUESSV3_DURATION } from "./VirginIslands";
import { VirginiaStateGeneric, VIRGINIA_STATE_GENERIC_DURATION, VirginiaStateGuessV1, VIRGINIA_STATE_GUESSV1_DURATION, VirginiaStateGuessV2, VIRGINIA_STATE_GUESSV2_DURATION, VirginiaStateGuessV3, VIRGINIA_STATE_GUESSV3_DURATION } from "./Virginia";
import { WashingtonStateGeneric, WASHINGTON_STATE_GENERIC_DURATION, WashingtonStateGuessV1, WASHINGTON_STATE_GUESSV1_DURATION, WashingtonStateGuessV2, WASHINGTON_STATE_GUESSV2_DURATION, WashingtonStateGuessV3, WASHINGTON_STATE_GUESSV3_DURATION } from "./Washington";
import { WestVirginiaStateGeneric, WESTVIRGINIA_STATE_GENERIC_DURATION, WestVirginiaStateGuessV1, WESTVIRGINIA_STATE_GUESSV1_DURATION, WestVirginiaStateGuessV2, WESTVIRGINIA_STATE_GUESSV2_DURATION, WestVirginiaStateGuessV3, WESTVIRGINIA_STATE_GUESSV3_DURATION } from "./WestVirginia";
import { WisconsinStateGeneric, WISCONSIN_STATE_GENERIC_DURATION, WisconsinStateGuessV1, WISCONSIN_STATE_GUESSV1_DURATION, WisconsinStateGuessV2, WISCONSIN_STATE_GUESSV2_DURATION, WisconsinStateGuessV3, WISCONSIN_STATE_GUESSV3_DURATION } from "./Wisconsin";
import { WyomingStateGeneric, WYOMING_STATE_GENERIC_DURATION, WyomingStateGuessV1, WYOMING_STATE_GUESSV1_DURATION, WyomingStateGuessV2, WYOMING_STATE_GUESSV2_DURATION, WyomingStateGuessV3, WYOMING_STATE_GUESSV3_DURATION } from "./Wyoming";

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
      <Composition id="Tutorial22-Part1" component={Tutorial22Part1} durationInFrames={TUTORIAL22_PART1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial22-Part2" component={Tutorial22Part2} durationInFrames={TUTORIAL22_PART2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial22-Part3" component={Tutorial22Part3} durationInFrames={TUTORIAL22_PART3_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tutorial22" component={Tutorial22} durationInFrames={TUTORIAL22_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Alabama ── */}
      <Composition id="Alabama-State-Generic" component={AlabamaStateGeneric} durationInFrames={ALABAMA_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Alabama-State-GuessV1" component={AlabamaStateGuessV1} durationInFrames={ALABAMA_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Alabama-State-GuessV2" component={AlabamaStateGuessV2} durationInFrames={ALABAMA_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Alabama-State-GuessV3" component={AlabamaStateGuessV3} durationInFrames={ALABAMA_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Alaska ── */}
      <Composition id="Alaska-State-Generic" component={AlaskaStateGeneric} durationInFrames={ALASKA_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Alaska-State-GuessV1" component={AlaskaStateGuessV1} durationInFrames={ALASKA_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Alaska-State-GuessV2" component={AlaskaStateGuessV2} durationInFrames={ALASKA_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Alaska-State-GuessV3" component={AlaskaStateGuessV3} durationInFrames={ALASKA_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Arizona ── */}
      <Composition id="Arizona-State-Generic" component={ArizonaStateGeneric} durationInFrames={ARIZONA_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Arizona-State-GuessV1" component={ArizonaStateGuessV1} durationInFrames={ARIZONA_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Arizona-State-GuessV2" component={ArizonaStateGuessV2} durationInFrames={ARIZONA_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Arizona-State-GuessV3" component={ArizonaStateGuessV3} durationInFrames={ARIZONA_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Arkansas ── */}
      <Composition id="Arkansas-State-Generic" component={ArkansasStateGeneric} durationInFrames={ARKANSAS_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Arkansas-State-GuessV1" component={ArkansasStateGuessV1} durationInFrames={ARKANSAS_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Arkansas-State-GuessV2" component={ArkansasStateGuessV2} durationInFrames={ARKANSAS_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Arkansas-State-GuessV3" component={ArkansasStateGuessV3} durationInFrames={ARKANSAS_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: California ── */}
      <Composition id="California-State-Generic" component={CaliforniaStateGeneric} durationInFrames={CALIFORNIA_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="California-State-GuessV1" component={CaliforniaStateGuessV1} durationInFrames={CALIFORNIA_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="California-State-GuessV2" component={CaliforniaStateGuessV2} durationInFrames={CALIFORNIA_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="California-State-GuessV3" component={CaliforniaStateGuessV3} durationInFrames={CALIFORNIA_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Colorado ── */}
      <Composition id="Colorado-State-Generic" component={ColoradoStateGeneric} durationInFrames={COLORADO_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Colorado-State-GuessV1" component={ColoradoStateGuessV1} durationInFrames={COLORADO_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Colorado-State-GuessV2" component={ColoradoStateGuessV2} durationInFrames={COLORADO_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Colorado-State-GuessV3" component={ColoradoStateGuessV3} durationInFrames={COLORADO_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Connecticut ── */}
      <Composition id="Connecticut-State-Generic" component={ConnecticutStateGeneric} durationInFrames={CONNECTICUT_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Connecticut-State-GuessV1" component={ConnecticutStateGuessV1} durationInFrames={CONNECTICUT_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Connecticut-State-GuessV2" component={ConnecticutStateGuessV2} durationInFrames={CONNECTICUT_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Connecticut-State-GuessV3" component={ConnecticutStateGuessV3} durationInFrames={CONNECTICUT_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Delaware ── */}
      <Composition id="Delaware-State-Generic" component={DelawareStateGeneric} durationInFrames={DELAWARE_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Delaware-State-GuessV1" component={DelawareStateGuessV1} durationInFrames={DELAWARE_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Delaware-State-GuessV2" component={DelawareStateGuessV2} durationInFrames={DELAWARE_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Delaware-State-GuessV3" component={DelawareStateGuessV3} durationInFrames={DELAWARE_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Florida ── */}
      <Composition id="Florida-State-Generic" component={FloridaStateGeneric} durationInFrames={FLORIDA_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Florida-State-GuessV1" component={FloridaStateGuessV1} durationInFrames={FLORIDA_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Florida-State-GuessV2" component={FloridaStateGuessV2} durationInFrames={FLORIDA_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Florida-State-GuessV3" component={FloridaStateGuessV3} durationInFrames={FLORIDA_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Georgia ── */}
      <Composition id="Georgia-State-Generic" component={GeorgiaStateGeneric} durationInFrames={GEORGIA_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Georgia-State-GuessV1" component={GeorgiaStateGuessV1} durationInFrames={GEORGIA_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Georgia-State-GuessV2" component={GeorgiaStateGuessV2} durationInFrames={GEORGIA_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Georgia-State-GuessV3" component={GeorgiaStateGuessV3} durationInFrames={GEORGIA_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Hawaii ── */}
      <Composition id="Hawaii-State-Generic" component={HawaiiStateGeneric} durationInFrames={HAWAII_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Hawaii-State-GuessV1" component={HawaiiStateGuessV1} durationInFrames={HAWAII_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Hawaii-State-GuessV2" component={HawaiiStateGuessV2} durationInFrames={HAWAII_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Hawaii-State-GuessV3" component={HawaiiStateGuessV3} durationInFrames={HAWAII_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Idaho ── */}
      <Composition id="Idaho-State-Generic" component={IdahoStateGeneric} durationInFrames={IDAHO_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Idaho-State-GuessV1" component={IdahoStateGuessV1} durationInFrames={IDAHO_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Idaho-State-GuessV2" component={IdahoStateGuessV2} durationInFrames={IDAHO_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Idaho-State-GuessV3" component={IdahoStateGuessV3} durationInFrames={IDAHO_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Illinois ── */}
      <Composition id="Illinois-State-Generic" component={IllinoisStateGeneric} durationInFrames={ILLINOIS_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Illinois-State-GuessV1" component={IllinoisStateGuessV1} durationInFrames={ILLINOIS_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Illinois-State-GuessV2" component={IllinoisStateGuessV2} durationInFrames={ILLINOIS_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Illinois-State-GuessV3" component={IllinoisStateGuessV3} durationInFrames={ILLINOIS_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Indiana ── */}
      <Composition id="Indiana-State-Generic" component={IndianaStateGeneric} durationInFrames={INDIANA_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Indiana-State-GuessV1" component={IndianaStateGuessV1} durationInFrames={INDIANA_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Indiana-State-GuessV2" component={IndianaStateGuessV2} durationInFrames={INDIANA_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Indiana-State-GuessV3" component={IndianaStateGuessV3} durationInFrames={INDIANA_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Iowa ── */}
      <Composition id="Iowa-State-Generic" component={IowaStateGeneric} durationInFrames={IOWA_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Iowa-State-GuessV1" component={IowaStateGuessV1} durationInFrames={IOWA_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Iowa-State-GuessV2" component={IowaStateGuessV2} durationInFrames={IOWA_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Iowa-State-GuessV3" component={IowaStateGuessV3} durationInFrames={IOWA_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Kansas ── */}
      <Composition id="Kansas-State-Generic" component={KansasStateGeneric} durationInFrames={KANSAS_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Kansas-State-GuessV1" component={KansasStateGuessV1} durationInFrames={KANSAS_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Kansas-State-GuessV2" component={KansasStateGuessV2} durationInFrames={KANSAS_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Kansas-State-GuessV3" component={KansasStateGuessV3} durationInFrames={KANSAS_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Kentucky ── */}
      <Composition id="Kentucky-State-Generic" component={KentuckyStateGeneric} durationInFrames={KENTUCKY_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Kentucky-State-GuessV1" component={KentuckyStateGuessV1} durationInFrames={KENTUCKY_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Kentucky-State-GuessV2" component={KentuckyStateGuessV2} durationInFrames={KENTUCKY_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Kentucky-State-GuessV3" component={KentuckyStateGuessV3} durationInFrames={KENTUCKY_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Louisiana ── */}
      <Composition id="Louisiana-State-Generic" component={LouisianaStateGeneric} durationInFrames={LOUISIANA_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Louisiana-State-GuessV1" component={LouisianaStateGuessV1} durationInFrames={LOUISIANA_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Louisiana-State-GuessV2" component={LouisianaStateGuessV2} durationInFrames={LOUISIANA_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Louisiana-State-GuessV3" component={LouisianaStateGuessV3} durationInFrames={LOUISIANA_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Maine ── */}
      <Composition id="Maine-State-Generic" component={MaineStateGeneric} durationInFrames={MAINE_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Maine-State-GuessV1" component={MaineStateGuessV1} durationInFrames={MAINE_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Maine-State-GuessV2" component={MaineStateGuessV2} durationInFrames={MAINE_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Maine-State-GuessV3" component={MaineStateGuessV3} durationInFrames={MAINE_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Maryland ── */}
      <Composition id="Maryland-State-Generic" component={MarylandStateGeneric} durationInFrames={MARYLAND_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Maryland-State-GuessV1" component={MarylandStateGuessV1} durationInFrames={MARYLAND_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Maryland-State-GuessV2" component={MarylandStateGuessV2} durationInFrames={MARYLAND_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Maryland-State-GuessV3" component={MarylandStateGuessV3} durationInFrames={MARYLAND_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Massachusetts ── */}
      <Composition id="Massachusetts-State-Generic" component={MassachusettsStateGeneric} durationInFrames={MASSACHUSETTS_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Massachusetts-State-GuessV1" component={MassachusettsStateGuessV1} durationInFrames={MASSACHUSETTS_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Massachusetts-State-GuessV2" component={MassachusettsStateGuessV2} durationInFrames={MASSACHUSETTS_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Massachusetts-State-GuessV3" component={MassachusettsStateGuessV3} durationInFrames={MASSACHUSETTS_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Michigan ── */}
      <Composition id="Michigan-State-Generic" component={MichiganStateGeneric} durationInFrames={MICHIGAN_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Michigan-State-GuessV1" component={MichiganStateGuessV1} durationInFrames={MICHIGAN_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Michigan-State-GuessV2" component={MichiganStateGuessV2} durationInFrames={MICHIGAN_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Michigan-State-GuessV3" component={MichiganStateGuessV3} durationInFrames={MICHIGAN_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Minnesota ── */}
      <Composition id="Minnesota-State-Generic" component={MinnesotaStateGeneric} durationInFrames={MINNESOTA_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Minnesota-State-GuessV1" component={MinnesotaStateGuessV1} durationInFrames={MINNESOTA_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Minnesota-State-GuessV2" component={MinnesotaStateGuessV2} durationInFrames={MINNESOTA_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Minnesota-State-GuessV3" component={MinnesotaStateGuessV3} durationInFrames={MINNESOTA_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Mississippi ── */}
      <Composition id="Mississippi-State-Generic" component={MississippiStateGeneric} durationInFrames={MISSISSIPPI_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Mississippi-State-GuessV1" component={MississippiStateGuessV1} durationInFrames={MISSISSIPPI_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Mississippi-State-GuessV2" component={MississippiStateGuessV2} durationInFrames={MISSISSIPPI_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Mississippi-State-GuessV3" component={MississippiStateGuessV3} durationInFrames={MISSISSIPPI_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Missouri ── */}
      <Composition id="Missouri-State-Generic" component={MissouriStateGeneric} durationInFrames={MISSOURI_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Missouri-State-GuessV1" component={MissouriStateGuessV1} durationInFrames={MISSOURI_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Missouri-State-GuessV2" component={MissouriStateGuessV2} durationInFrames={MISSOURI_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Missouri-State-GuessV3" component={MissouriStateGuessV3} durationInFrames={MISSOURI_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Montana ── */}
      <Composition id="Montana-State-Generic" component={MontanaStateGeneric} durationInFrames={MONTANA_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Montana-State-GuessV1" component={MontanaStateGuessV1} durationInFrames={MONTANA_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Montana-State-GuessV2" component={MontanaStateGuessV2} durationInFrames={MONTANA_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Montana-State-GuessV3" component={MontanaStateGuessV3} durationInFrames={MONTANA_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Nebraska ── */}
      <Composition id="Nebraska-State-Generic" component={NebraskaStateGeneric} durationInFrames={NEBRASKA_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Nebraska-State-GuessV1" component={NebraskaStateGuessV1} durationInFrames={NEBRASKA_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Nebraska-State-GuessV2" component={NebraskaStateGuessV2} durationInFrames={NEBRASKA_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Nebraska-State-GuessV3" component={NebraskaStateGuessV3} durationInFrames={NEBRASKA_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Nevada ── */}
      <Composition id="Nevada-State-Generic" component={NevadaStateGeneric} durationInFrames={NEVADA_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Nevada-State-GuessV1" component={NevadaStateGuessV1} durationInFrames={NEVADA_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Nevada-State-GuessV2" component={NevadaStateGuessV2} durationInFrames={NEVADA_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Nevada-State-GuessV3" component={NevadaStateGuessV3} durationInFrames={NEVADA_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: New Hampshire ── */}
      <Composition id="NewHampshire-State-Generic" component={NewHampshireStateGeneric} durationInFrames={NEWHAMPSHIRE_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="NewHampshire-State-GuessV1" component={NewHampshireStateGuessV1} durationInFrames={NEWHAMPSHIRE_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="NewHampshire-State-GuessV2" component={NewHampshireStateGuessV2} durationInFrames={NEWHAMPSHIRE_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="NewHampshire-State-GuessV3" component={NewHampshireStateGuessV3} durationInFrames={NEWHAMPSHIRE_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: New Jersey ── */}
      <Composition id="NewJersey-State-Generic" component={NewJerseyStateGeneric} durationInFrames={NEWJERSEY_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="NewJersey-State-GuessV1" component={NewJerseyStateGuessV1} durationInFrames={NEWJERSEY_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="NewJersey-State-GuessV2" component={NewJerseyStateGuessV2} durationInFrames={NEWJERSEY_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="NewJersey-State-GuessV3" component={NewJerseyStateGuessV3} durationInFrames={NEWJERSEY_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: New Mexico ── */}
      <Composition id="NewMexico-State-Generic" component={NewMexicoStateGeneric} durationInFrames={NEWMEXICO_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="NewMexico-State-GuessV1" component={NewMexicoStateGuessV1} durationInFrames={NEWMEXICO_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="NewMexico-State-GuessV2" component={NewMexicoStateGuessV2} durationInFrames={NEWMEXICO_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="NewMexico-State-GuessV3" component={NewMexicoStateGuessV3} durationInFrames={NEWMEXICO_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: New York ── */}
      <Composition id="NewYork-State-Generic" component={NewYorkStateGeneric} durationInFrames={NEWYORK_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="NewYork-State-GuessV1" component={NewYorkStateGuessV1} durationInFrames={NEWYORK_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="NewYork-State-GuessV2" component={NewYorkStateGuessV2} durationInFrames={NEWYORK_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="NewYork-State-GuessV3" component={NewYorkStateGuessV3} durationInFrames={NEWYORK_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: North Carolina ── */}
      <Composition id="NorthCarolina-State-Generic" component={NorthCarolinaStateGeneric} durationInFrames={NORTHCAROLINA_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="NorthCarolina-State-GuessV1" component={NorthCarolinaStateGuessV1} durationInFrames={NORTHCAROLINA_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="NorthCarolina-State-GuessV2" component={NorthCarolinaStateGuessV2} durationInFrames={NORTHCAROLINA_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="NorthCarolina-State-GuessV3" component={NorthCarolinaStateGuessV3} durationInFrames={NORTHCAROLINA_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: North Dakota ── */}
      <Composition id="NorthDakota-State-Generic" component={NorthDakotaStateGeneric} durationInFrames={NORTHDAKOTA_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="NorthDakota-State-GuessV1" component={NorthDakotaStateGuessV1} durationInFrames={NORTHDAKOTA_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="NorthDakota-State-GuessV2" component={NorthDakotaStateGuessV2} durationInFrames={NORTHDAKOTA_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="NorthDakota-State-GuessV3" component={NorthDakotaStateGuessV3} durationInFrames={NORTHDAKOTA_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Ohio ── */}
      <Composition id="Ohio-State-Generic" component={OhioStateGeneric} durationInFrames={OHIO_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Ohio-State-GuessV1" component={OhioStateGuessV1} durationInFrames={OHIO_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Ohio-State-GuessV2" component={OhioStateGuessV2} durationInFrames={OHIO_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Ohio-State-GuessV3" component={OhioStateGuessV3} durationInFrames={OHIO_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Oklahoma ── */}
      <Composition id="Oklahoma-State-Generic" component={OklahomaStateGeneric} durationInFrames={OKLAHOMA_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Oklahoma-State-GuessV1" component={OklahomaStateGuessV1} durationInFrames={OKLAHOMA_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Oklahoma-State-GuessV2" component={OklahomaStateGuessV2} durationInFrames={OKLAHOMA_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Oklahoma-State-GuessV3" component={OklahomaStateGuessV3} durationInFrames={OKLAHOMA_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Oregon ── */}
      <Composition id="Oregon-State-Generic" component={OregonStateGeneric} durationInFrames={OREGON_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Oregon-State-GuessV1" component={OregonStateGuessV1} durationInFrames={OREGON_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Oregon-State-GuessV2" component={OregonStateGuessV2} durationInFrames={OREGON_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Oregon-State-GuessV3" component={OregonStateGuessV3} durationInFrames={OREGON_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Pennsylvania ── */}
      <Composition id="Pennsylvania-State-Generic" component={PennsylvaniaStateGeneric} durationInFrames={PENNSYLVANIA_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Pennsylvania-State-GuessV1" component={PennsylvaniaStateGuessV1} durationInFrames={PENNSYLVANIA_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Pennsylvania-State-GuessV2" component={PennsylvaniaStateGuessV2} durationInFrames={PENNSYLVANIA_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Pennsylvania-State-GuessV3" component={PennsylvaniaStateGuessV3} durationInFrames={PENNSYLVANIA_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Puerto Rico ── */}
      <Composition id="PuertoRico-State-Generic" component={PuertoRicoStateGeneric} durationInFrames={PUERTORICO_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="PuertoRico-State-GuessV1" component={PuertoRicoStateGuessV1} durationInFrames={PUERTORICO_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="PuertoRico-State-GuessV2" component={PuertoRicoStateGuessV2} durationInFrames={PUERTORICO_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="PuertoRico-State-GuessV3" component={PuertoRicoStateGuessV3} durationInFrames={PUERTORICO_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Rhode Island ── */}
      <Composition id="RhodeIsland-State-Generic" component={RhodeIslandStateGeneric} durationInFrames={RHODEISLAND_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="RhodeIsland-State-GuessV1" component={RhodeIslandStateGuessV1} durationInFrames={RHODEISLAND_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="RhodeIsland-State-GuessV2" component={RhodeIslandStateGuessV2} durationInFrames={RHODEISLAND_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="RhodeIsland-State-GuessV3" component={RhodeIslandStateGuessV3} durationInFrames={RHODEISLAND_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: South Carolina ── */}
      <Composition id="SouthCarolina-State-Generic" component={SouthCarolinaStateGeneric} durationInFrames={SOUTHCAROLINA_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="SouthCarolina-State-GuessV1" component={SouthCarolinaStateGuessV1} durationInFrames={SOUTHCAROLINA_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="SouthCarolina-State-GuessV2" component={SouthCarolinaStateGuessV2} durationInFrames={SOUTHCAROLINA_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="SouthCarolina-State-GuessV3" component={SouthCarolinaStateGuessV3} durationInFrames={SOUTHCAROLINA_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: South Dakota ── */}
      <Composition id="SouthDakota-State-Generic" component={SouthDakotaStateGeneric} durationInFrames={SOUTHDAKOTA_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="SouthDakota-State-GuessV1" component={SouthDakotaStateGuessV1} durationInFrames={SOUTHDAKOTA_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="SouthDakota-State-GuessV2" component={SouthDakotaStateGuessV2} durationInFrames={SOUTHDAKOTA_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="SouthDakota-State-GuessV3" component={SouthDakotaStateGuessV3} durationInFrames={SOUTHDAKOTA_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Tennessee ── */}
      <Composition id="Tennessee-State-Generic" component={TennesseeStateGeneric} durationInFrames={TENNESSEE_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tennessee-State-GuessV1" component={TennesseeStateGuessV1} durationInFrames={TENNESSEE_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tennessee-State-GuessV2" component={TennesseeStateGuessV2} durationInFrames={TENNESSEE_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Tennessee-State-GuessV3" component={TennesseeStateGuessV3} durationInFrames={TENNESSEE_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Texas ── */}
      <Composition id="Texas-State-Generic" component={TexasStateGeneric} durationInFrames={TEXAS_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Texas-State-GuessV1" component={TexasStateGuessV1} durationInFrames={TEXAS_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Texas-State-GuessV2" component={TexasStateGuessV2} durationInFrames={TEXAS_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Texas-State-GuessV3" component={TexasStateGuessV3} durationInFrames={TEXAS_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Utah ── */}
      <Composition id="Utah-State-Generic" component={UtahStateGeneric} durationInFrames={UTAH_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Utah-State-GuessV1" component={UtahStateGuessV1} durationInFrames={UTAH_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Utah-State-GuessV2" component={UtahStateGuessV2} durationInFrames={UTAH_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Utah-State-GuessV3" component={UtahStateGuessV3} durationInFrames={UTAH_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Vermont ── */}
      <Composition id="Vermont-State-Generic" component={VermontStateGeneric} durationInFrames={VERMONT_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Vermont-State-GuessV1" component={VermontStateGuessV1} durationInFrames={VERMONT_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Vermont-State-GuessV2" component={VermontStateGuessV2} durationInFrames={VERMONT_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Vermont-State-GuessV3" component={VermontStateGuessV3} durationInFrames={VERMONT_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Virgin Islands ── */}
      <Composition id="VirginIslands-State-Generic" component={VirginIslandsStateGeneric} durationInFrames={VIRGINISLANDS_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="VirginIslands-State-GuessV1" component={VirginIslandsStateGuessV1} durationInFrames={VIRGINISLANDS_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="VirginIslands-State-GuessV2" component={VirginIslandsStateGuessV2} durationInFrames={VIRGINISLANDS_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="VirginIslands-State-GuessV3" component={VirginIslandsStateGuessV3} durationInFrames={VIRGINISLANDS_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Virginia ── */}
      <Composition id="Virginia-State-Generic" component={VirginiaStateGeneric} durationInFrames={VIRGINIA_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Virginia-State-GuessV1" component={VirginiaStateGuessV1} durationInFrames={VIRGINIA_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Virginia-State-GuessV2" component={VirginiaStateGuessV2} durationInFrames={VIRGINIA_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Virginia-State-GuessV3" component={VirginiaStateGuessV3} durationInFrames={VIRGINIA_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Washington ── */}
      <Composition id="Washington-State-Generic" component={WashingtonStateGeneric} durationInFrames={WASHINGTON_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Washington-State-GuessV1" component={WashingtonStateGuessV1} durationInFrames={WASHINGTON_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Washington-State-GuessV2" component={WashingtonStateGuessV2} durationInFrames={WASHINGTON_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Washington-State-GuessV3" component={WashingtonStateGuessV3} durationInFrames={WASHINGTON_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: West Virginia ── */}
      <Composition id="WestVirginia-State-Generic" component={WestVirginiaStateGeneric} durationInFrames={WESTVIRGINIA_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="WestVirginia-State-GuessV1" component={WestVirginiaStateGuessV1} durationInFrames={WESTVIRGINIA_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="WestVirginia-State-GuessV2" component={WestVirginiaStateGuessV2} durationInFrames={WESTVIRGINIA_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="WestVirginia-State-GuessV3" component={WestVirginiaStateGuessV3} durationInFrames={WESTVIRGINIA_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Wisconsin ── */}
      <Composition id="Wisconsin-State-Generic" component={WisconsinStateGeneric} durationInFrames={WISCONSIN_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Wisconsin-State-GuessV1" component={WisconsinStateGuessV1} durationInFrames={WISCONSIN_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Wisconsin-State-GuessV2" component={WisconsinStateGuessV2} durationInFrames={WISCONSIN_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Wisconsin-State-GuessV3" component={WisconsinStateGuessV3} durationInFrames={WISCONSIN_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />

      {/* ── Boundaries: Wyoming ── */}
      <Composition id="Wyoming-State-Generic" component={WyomingStateGeneric} durationInFrames={WYOMING_STATE_GENERIC_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Wyoming-State-GuessV1" component={WyomingStateGuessV1} durationInFrames={WYOMING_STATE_GUESSV1_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Wyoming-State-GuessV2" component={WyomingStateGuessV2} durationInFrames={WYOMING_STATE_GUESSV2_DURATION} fps={30} width={1080} height={1920} />
      <Composition id="Wyoming-State-GuessV3" component={WyomingStateGuessV3} durationInFrames={WYOMING_STATE_GUESSV3_DURATION} fps={30} width={1080} height={1920} />


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

      {/* ── Affiliate Caption ── */}
      <Composition id="AffiliateCaption" component={AffiliateCaption} durationInFrames={AFFILIATE_DURATION} fps={30} width={1080} height={1920} />

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
