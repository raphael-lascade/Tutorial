/**
 * Tutorial Voiceover Generator
 * ----------------------------
 * Calls ElevenLabs TTS with word-level timestamps, saves the MP3 and
 * prints word timing data you can paste into your TutorialConfig.
 *
 * Usage:
 *   1. Add ELEVENLABS_API_KEY=your_key to a .env file in the project root
 *   2. Run:
 *      node --env-file=.env --strip-types scripts/generate-voiceover.ts \
 *        "Your script text here" \
 *        public/YourTutorial/voiceover.mp3
 *
 * The script will print word timings as a TypeScript array you can copy
 * directly into your tutorial config's `mainWords` or use however needed.
 */

import { writeFileSync, mkdirSync } from "fs";
import { dirname } from "path";

// ── Config ──────────────────────────────────────────────────────────────────

const VOICE_ID = "JBFqnCBsd6RMkjVDRZzb"; // Male voice
const FPS = 30;

// ── Types ────────────────────────────────────────────────────────────────────

type ElevenLabsResponse = {
  audio_base64: string;
  alignment: {
    characters: string[];
    character_start_times_seconds: number[];
    character_end_times_seconds: number[];
  };
};

type CaptionWord = {
  text: string;
  startFrame: number;
  endFrame: number;
};

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Groups character-level alignment data into word-level timing */
function parseWords(alignment: ElevenLabsResponse["alignment"]): CaptionWord[] {
  const { characters, character_start_times_seconds, character_end_times_seconds } =
    alignment;

  const words: CaptionWord[] = [];
  let currentWord = "";
  let wordStartSec = 0;
  let lastCharIdx = -1;

  for (let i = 0; i < characters.length; i++) {
    const char = characters[i];
    const isSeparator = char === " " || char === "." || char === "," || char === "!";

    if (isSeparator) {
      if (currentWord.length > 0) {
        // Append trailing punctuation to the word
        if (char === "." || char === "," || char === "!") {
          currentWord += char;
          lastCharIdx = i;
        }
        words.push({
          text: currentWord,
          startFrame: Math.round(wordStartSec * FPS),
          endFrame: Math.round(character_end_times_seconds[lastCharIdx] * FPS),
        });
        currentWord = "";
      }
    } else {
      if (currentWord.length === 0) {
        wordStartSec = character_start_times_seconds[i];
      }
      currentWord += char;
      lastCharIdx = i;
    }
  }

  // flush last word
  if (currentWord.length > 0 && lastCharIdx >= 0) {
    words.push({
      text: currentWord,
      startFrame: Math.round(wordStartSec * FPS),
      endFrame: Math.round(character_end_times_seconds[lastCharIdx] * FPS),
    });
  }

  return words;
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function generate() {
  const script = process.argv[2];
  const outputPath = process.argv[3] || "public/voiceover.mp3";

  if (!script) {
    console.error("Usage: node --env-file=.env --strip-types scripts/generate-voiceover.ts <script> [output.mp3]");
    process.exit(1);
  }

  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    console.error("ELEVENLABS_API_KEY not found. Add it to .env and run with --env-file=.env");
    process.exit(1);
  }

  console.log("Generating voiceover...");
  console.log(`Script: "${script.substring(0, 80)}${script.length > 80 ? "..." : ""}"`);

  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}/with-timestamps`,
    {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        text: script,
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
          style: 0.3,
        },
      }),
    },
  );

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`ElevenLabs API error ${response.status}: ${err}`);
  }

  const data = (await response.json()) as ElevenLabsResponse;

  // Save MP3
  const audioBuffer = Buffer.from(data.audio_base64, "base64");
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, audioBuffer);
  console.log(`Audio saved: ${outputPath}`);

  // Parse and print words
  const words = parseWords(data.alignment);
  const durationSec = data.alignment.character_end_times_seconds[
    data.alignment.character_end_times_seconds.length - 1
  ];

  console.log(`Duration: ${durationSec.toFixed(2)}s | Words: ${words.length}`);
  console.log("\n// Paste this into your TutorialConfig mainWords:");
  console.log("mainWords: [");
  for (const w of words) {
    console.log(`  { text: ${JSON.stringify(w.text)}, startFrame: ${w.startFrame}, endFrame: ${w.endFrame} },`);
  }
  console.log("]");
}

generate().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
