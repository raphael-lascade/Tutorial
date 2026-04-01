import { AbsoluteFill, OffthreadVideo, staticFile, interpolate, useCurrentFrame } from "remotion";
import "./fonts";

export interface BoundariesConfig {
  video: string;                      // path in public/, e.g. "Boundaries/alaska.mp4"
  durationInFrames: number;
  entityType?: "state" | "country";   // controls "Guess The State" vs "Guess The Country"

  // Generic mode — set name to reveal it; leave undefined for guess mode
  name?: string;                      // e.g. "Alaska"

  // Subtitle: interesting fact (generic) or hint (guess) — must NOT repeat a stat below
  hint?: string;

  // Stats (all optional — use what applies to state or country)
  gdp?: string;
  schools?: string;
  airports?: string;
  hospitals?: string;
  landArea?: string;
  highestPoint?: string;

  // Country-specific (drives debate in comments)
  fuelPrice?: string;   // e.g. "$1.52 / litre"
  military?: string;    // e.g. "Rank #1 worldwide"
}

// ── Counter animation constants ─────────────────────────────────────────
const COUNTER_START = 0;    // frame 0 = starts immediately
const COUNTER_END   = 90;   // frame 90 = 3 s  (3 s of shuffling)

// ── Frames trimmed from start of source video (skip zoom-in) ─────────────
export const VIDEO_TRIM_START = 60; // 2 seconds @ 30fps

// ── Animated stat value — shuffles then settles ───────────────────────────
const AnimatedStatValue: React.FC<{ value: string }> = ({ value }) => {
  const frame = useCurrentFrame();

  // Match first number (must start with a digit, then optional commas/digits/decimal)
  const numMatch = value.match(/(\d[\d,]*(?:\.\d+)?)/);
  if (!numMatch || numMatch.index === undefined) {
    // Non-numeric value: fade in at COUNTER_START
    const op = interpolate(frame, [COUNTER_START, COUNTER_START + 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    return <span style={{ opacity: op }}>{value}</span>;
  }

  const prefix    = value.slice(0, numMatch.index);
  const suffix    = value.slice(numMatch.index + numMatch[0].length);
  const isDecimal = numMatch[0].includes(".");
  const finalNum  = parseFloat(numMatch[0].replace(/,/g, ""));
  const decimals  = isDecimal ? numMatch[0].split(".")[1].length : 0;

  const progress = interpolate(frame, [COUNTER_START, COUNTER_END], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Deterministic jitter: fades out as progress → 1
  const jitter = Math.sin(frame * 43.7) * Math.cos(frame * 19.1) * (1 - progress) * 0.35;
  const raw     = Math.max(0, finalNum * progress + finalNum * jitter);
  const display = isDecimal
    ? parseFloat(raw.toFixed(decimals)).toFixed(decimals)
    : Math.round(raw).toLocaleString("en-US");

  return <span>{prefix}{display}{suffix}</span>;
};

// ── Stat row ──────────────────────────────────────────────────────────────
const StatRow: React.FC<{ emoji: string; label: string; value?: string }> = ({ emoji, label, value }) => {
  const frame = useCurrentFrame();
  if (!value) return null;

  // Row fades in at COUNTER_START
  const opacity = interpolate(frame, [COUNTER_START, COUNTER_START + 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 8,
      background: "rgba(0,0,0,0.55)",
      borderRadius: 20,
      padding: "6px 16px",
      marginBottom: 7,
      width: "fit-content",
      opacity,
    }}>
      <span style={{ fontSize: 20 }}>{emoji}</span>
      <span style={{ color: "#86efac", fontWeight: 700, fontSize: 22, fontFamily: "SFProRounded" }}>{label}:</span>
      <span style={{ color: "white", fontWeight: 600, fontSize: 22, fontFamily: "SFProRounded" }}>
        <AnimatedStatValue value={value} />
      </span>
    </div>
  );
};

// ── Main template ─────────────────────────────────────────────────────────
export const BoundariesTemplate: React.FC<{ config: BoundariesConfig }> = ({ config }) => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  const isGuess = !config.name;
  const entity  = config.entityType === "country" ? "Country" : "State";

  return (
    <AbsoluteFill style={{ background: "#000" }}>

      {/* ── Background video ── */}
      <OffthreadVideo
        src={staticFile(config.video)}
        startFrom={VIDEO_TRIM_START}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      {/* ── Title area ── */}
      <div style={{
        position: "absolute",
        top: 170,
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 14,
        opacity: titleOpacity,
        paddingLeft: 60,
        paddingRight: 60,
      }}>

        {isGuess ? (
          <div style={{ background: "rgba(0,0,0,0.40)", borderRadius: 50, padding: "10px 28px" }}>
            <span style={{ color: "#22d3ee", fontSize: 68, fontWeight: 800, fontFamily: "SFProRounded" }}>
              Guess The {entity}
            </span>
          </div>
        ) : (
          <div style={{ background: "#22c55e", borderRadius: 50, padding: "10px 28px" }}>
            <span style={{ color: "white", fontSize: 72, fontWeight: 800, fontFamily: "SFProRounded" }}>
              {config.name}
            </span>
          </div>
        )}

        {/* Interesting fact / hint pill — brand blue #33a4fe */}
        {config.hint && (
          <div style={{ background: "rgba(51,164,254,0.85)", borderRadius: 30, padding: "8px 22px" }}>
            <span style={{ color: "white", fontSize: 32, fontWeight: 700, fontFamily: "SFProRounded" }}>
              {config.hint}
            </span>
          </div>
        )}

      </div>

      {/* ── Stats panel — safe zone (top 1080, ends ~y 1340) ── */}
      <div style={{ position: "absolute", top: 1080, left: 90 }}>
        <StatRow emoji="💰" label="GDP"           value={config.gdp} />
        <StatRow emoji="🏫" label="Schools"       value={config.schools} />
        <StatRow emoji="✈️"  label="Airports"      value={config.airports} />
        <StatRow emoji="🏥" label="Hospitals"     value={config.hospitals} />
        <StatRow emoji="🗺️"  label="Land Area"     value={config.landArea} />
        <StatRow emoji="⛰️"  label="Highest Point" value={config.highestPoint} />
        <StatRow emoji="⛽" label="Fuel Price"    value={config.fuelPrice} />
        <StatRow emoji="🪖" label="Military"      value={config.military} />
      </div>

    </AbsoluteFill>
  );
};
