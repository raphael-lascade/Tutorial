import { staticFile } from "remotion";

const fontUrl = staticFile("SF Pro Rounded Font/SF-Pro-Rounded-Bold.otf");

// Load font without delayRender to avoid timeout issues during rendering.
// The font loads fast from the local static server.
const style = document.createElement("style");
style.textContent = `
  @font-face {
    font-family: "SFProRounded";
    src: url("${fontUrl}") format("opentype");
    font-weight: 700;
    font-style: normal;
    font-display: block;
  }
`;
document.head.appendChild(style);
