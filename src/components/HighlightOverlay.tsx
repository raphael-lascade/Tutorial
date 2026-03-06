import { interpolate, useCurrentFrame } from "remotion";

export interface HighlightConfig {
  startFrame: number;
  endFrame: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

export const HighlightOverlay: React.FC<{
  highlights: HighlightConfig[];
}> = ({ highlights }) => {
  const frame = useCurrentFrame();

  const activeHl = highlights.find(
    (hl) => frame >= hl.startFrame && frame <= hl.endFrame,
  );
  if (!activeHl) return null;

  const progress = frame - activeHl.startFrame;
  const fadeIn = interpolate(progress, [0, 8], [0, 1], {
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [activeHl.endFrame - 5, activeHl.endFrame],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const opacity = fadeIn * fadeOut;

  const cx = activeHl.x + activeHl.width / 2;
  const pad = 16;
  const br = 16;
  const featherBlur = 6;

  const maskId = `spot-${activeHl.startFrame}`;
  const filterId = `blur-${activeHl.startFrame}`;

  const arrowX = cx;
  const arrowY = activeHl.y + activeHl.height + pad + 30;
  const arrowW = 28;
  const arrowH = 60;

  return (
    <>
      <svg
        width="1080"
        height="1920"
        viewBox="0 0 1080 1920"
        style={{ position: "absolute", top: 0, left: 0, opacity, pointerEvents: "none" }}
      >
        <defs>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation={featherBlur} />
          </filter>
          <mask id={maskId}>
            <rect width="1080" height="1920" fill="white" />
            <rect
              x={activeHl.x - pad}
              y={activeHl.y - pad}
              width={activeHl.width + pad * 2}
              height={activeHl.height + pad * 2}
              rx={br}
              ry={br}
              fill="black"
              filter={`url(#${filterId})`}
            />
          </mask>
        </defs>
        <rect
          width="1080"
          height="1920"
          fill="rgba(0,0,0,0.55)"
          mask={`url(#${maskId})`}
        />
      </svg>
      <svg
        width="1080"
        height="1920"
        viewBox="0 0 1080 1920"
        style={{ position: "absolute", top: 0, left: 0, opacity, pointerEvents: "none" }}
      >
        <g transform={`translate(${arrowX}, ${arrowY})`}>
          <line x1="0" y1="0" x2="0" y2={arrowH} stroke="white" strokeWidth="6" strokeLinecap="round" />
          <polyline
            points={`${-arrowW / 2},${arrowW / 2} 0,0 ${arrowW / 2},${arrowW / 2}`}
            fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
          />
        </g>
      </svg>
    </>
  );
};
