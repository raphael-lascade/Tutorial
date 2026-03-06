# Tutorial Video Template

A reusable [Remotion](https://remotion.dev)-based template for creating tutorial reels (9:16 vertical, 1080x1920, 30fps). Features an iPhone mockup with screen recording, animated captions, and spotlight highlights.

## What You Get

Each tutorial video has 3 parts:
1. **Intro** — Hook question text + optional intro video inside phone mockup
2. **Main content** — Screen recording in phone mockup + synced captions + spotlight highlights
3. **Outro** — Outro video (subscribe CTA, etc.)

## Prerequisites

- **Node.js** 22+ (for `--strip-types` and `--env-file` flags)
- **ffmpeg** (for processing screen recordings)
- **Python 3 + Whisper** (optional — for transcribing existing voiceovers)
- **ElevenLabs API key** (for generating TTS voiceovers)

## Quick Start

```bash
# 1. Clone and install
git clone <your-repo-url>
cd tutorial-template
npm install

# 2. Set up your API key
cp .env.example .env
# Edit .env and add your ElevenLabs API key

# 3. Preview in Remotion Studio
npm run dev
```

## Creating a New Tutorial

### Step 1: Prepare Your Assets

Create a folder in `public/` for your tutorial (e.g., `public/MyTutorial/`):

```
public/MyTutorial/
  Screen Recording.MP4     # Your screen recording (with or without audio)
  Intro.MP4                # Optional intro video
  Outro.mp4                # Outro video
```

### Step 2: Process the Screen Recording

```bash
# Get the duration
ffprobe -v error -show_entries format=duration -of csv=p=0 "public/MyTutorial/Screen Recording.MP4"

# Trim if needed (e.g., remove last few seconds with notification bar)
ffmpeg -i "public/MyTutorial/Screen Recording.MP4" -t 42 -c copy "public/MyTutorial/Screen Recording Trimmed.MP4"

# Strip audio (the template uses separate voiceover audio)
ffmpeg -i "public/MyTutorial/Screen Recording Trimmed.MP4" -an -c:v copy "public/MyTutorial/Screen Recording Muted.MP4"
```

### Step 3: Write Your Script and Generate Voiceover

Write a short hook question and a main voiceover script.

```bash
# Generate hook voiceover
node --env-file=.env --strip-types scripts/generate-voiceover.ts \
  "How do I use feature X in the app?" \
  "public/MyTutorial/hook-voiceover.mp3"

# Generate main voiceover
node --env-file=.env --strip-types scripts/generate-voiceover.ts \
  "Your full tutorial script goes here. Step by step instructions..." \
  "public/MyTutorial/main-voiceover.mp3"
```

The script prints word timings you can paste directly into your config.

### Step 4: Create Your Tutorial Component

Create `src/MyTutorial.tsx`:

```tsx
import { TutorialTemplate, getTutorialDuration, TutorialConfig } from "./TutorialTemplate";

const CONFIG: TutorialConfig = {
  // Durations (in frames at 30fps)
  introDuration: 150,   // intro section length
  mainDuration: 700,    // main content length (must cover your voiceover)
  outroDuration: 76,    // outro section length

  // Asset paths (relative to public/)
  hookAudio: "MyTutorial/hook-voiceover.mp3",
  mainAudio: "MyTutorial/main-voiceover.mp3",
  screenRecording: "MyTutorial/Screen Recording Muted.MP4",
  introVideo: "MyTutorial/Intro.MP4",       // optional
  outroVideo: "MyTutorial/Outro.mp4",

  // Screen recording actual duration in seconds
  screenRecDurationSec: 42.0,

  // Intro hook text — words with highlight: true get a green pill
  hookWords: [
    { text: "How", highlight: false },
    { text: "do", highlight: false },
    { text: "I", highlight: false },
    { text: "use", highlight: false },
    { text: "feature X", highlight: true },
    { text: "in", highlight: false },
    { text: "the", highlight: false },
    { text: "app?", highlight: false },
  ],

  // Spotlight highlights on the phone screen (canvas coordinates)
  highlights: [
    // { startFrame: 200, endFrame: 230, x: 320, y: 800, width: 200, height: 40 },
  ],

  // Word timings from generate-voiceover.ts output
  mainWords: [
    { text: "Your", startFrame: 0, endFrame: 8 },
    { text: "words", startFrame: 8, endFrame: 16 },
    { text: "here.", startFrame: 16, endFrame: 24 },
    // ... paste output from generate-voiceover.ts
  ],
};

export const MY_TUTORIAL_DURATION = getTutorialDuration(CONFIG);

export const MyTutorial: React.FC = () => {
  return <TutorialTemplate config={CONFIG} />;
};
```

### Step 5: Register in Root.tsx

```tsx
import { MyTutorial, MY_TUTORIAL_DURATION } from "./MyTutorial";

// Add inside RemotionRoot:
<Composition
  id="MyTutorial"
  component={MyTutorial}
  durationInFrames={MY_TUTORIAL_DURATION}
  fps={30}
  width={1080}
  height={1920}
/>
```

### Step 6: Preview and Render

```bash
# Preview
npm run dev

# Render
npx remotion render MyTutorial out/my-tutorial.mp4 --concurrency=2
```

## Config Reference

| Field | Type | Description |
|-------|------|-------------|
| `introDuration` | `number` | Intro section length in frames (30fps) |
| `mainDuration` | `number` | Main content length in frames |
| `outroDuration` | `number` | Outro section length in frames |
| `hookAudio` | `string` | Path to hook voiceover MP3 |
| `mainAudio` | `string` | Path to main voiceover MP3 |
| `screenRecording` | `string` | Path to muted screen recording |
| `introVideo` | `string?` | Optional intro video (text-only intro if omitted) |
| `outroVideo` | `string` | Path to outro video |
| `screenRecDurationSec` | `number` | Actual duration of screen recording in seconds |
| `hookWords` | `array` | Words for intro hook text, with `highlight` flag |
| `mainWords` | `array` | Word-level timings: `{ text, startFrame, endFrame }` |
| `highlights` | `array` | Spotlight highlights: `{ startFrame, endFrame, x, y, width, height }` |
| `hookTextTop` | `number?` | Top position for hook text (default: 140) |
| `hookFontSize` | `number?` | Font size for hook text (default: 72) |

## Duration Calculation

- `mainDuration` should be slightly longer than your voiceover duration
- The screen recording playback rate is auto-calculated: `screenRecDurationSec / (mainDuration / 30)`
- Total duration = `introDuration + mainDuration + outroDuration`

## Spotlight Highlights

Highlights create a dimmed overlay with a cutout spotlight on a UI element, plus an arrow pointer. Coordinates are in canvas space (1080x1920). To find coordinates:

1. Render a frame where the UI element is visible
2. Measure the element's position in the rendered frame
3. The phone screen area is at `left=298, top=418, width=516, height=1088`

## Project Structure

```
src/
  TutorialTemplate.tsx    # Main template component
  components/
    PhoneWithVideo.tsx     # iPhone mockup with video
    HighlightOverlay.tsx   # Spotlight highlight overlay
  TACaptions.tsx           # Animated captions component
  fonts.ts                 # Font loader (SF Pro Rounded)
  Root.tsx                 # Remotion composition registry
  Tutorial1.tsx            # Example: complex multi-segment tutorial
  Tutorial2.tsx            # Example: text-only intro tutorial
  Tutorial3.tsx            # Example: template-based tutorial

scripts/
  generate-voiceover.ts   # ElevenLabs TTS with word timings

public/
  SF Pro Rounded Font/    # Required font files
  Tutorial 1/             # Tutorial 1 assets
  Tutorial/               # Tutorial 3 assets
```

## License

UNLICENSED
