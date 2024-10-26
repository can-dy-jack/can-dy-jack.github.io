import { Highlight } from "prism-react-renderer";
import { usePrismTheme } from "@docusaurus/theme-common";
import { useState } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import "./index.scss";

export default function SVGCircleDraw({
  showSW = false,
  showRadius = false,
  showStroke = false,
  showSDR = false,
  isRound = false,
  showOffset = false,
  showAnimate = false,
  isDashAnimate = false,
}: {
  showSDR?: boolean;
  showSW?: boolean;
  showRadius?: boolean;
  showStroke?: boolean;
  isRound?: boolean;
  showOffset?: boolean;
  showAnimate?: boolean;
  isDashAnimate?: boolean;
}) {
  const prismTheme = usePrismTheme();

  const [state, setState] = useState({
    sw: 10,
    radius: 50,
    stroke: "#f0788c",
    sDR: 100,
    offset: 0,
    speed: 1.5,
    easing: "linear",
  });
  const changeSW = (value) => {
    setState((state) => ({ ...state, sw: value }));
  };
  const changeRadius = (value) => {
    setState((state) => ({ ...state, radius: value }));
  };
  const changeStroke = (e) => {
    setState((state) => ({ ...state, stroke: e.target.value }));
  };
  const changeSDR = (value) => {
    setState((state) => ({ ...state, sDR: value }));
  };
  const changeOffset = (value) => {
    setState((state) => ({ ...state, offset: value }));
  };

  const SVGDOM = (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="100"
        cy="100"
        fill="none"
        r={state.radius}
        strokeWidth={state.sw}
        stroke={state.stroke}
        strokeDasharray={showSDR ? state.sDR + " 315" : ""}
        strokeLinecap={isRound ? "round" : "inherit"}
        strokeDashoffset={showOffset ? state.offset : 0}
        style={
          showAnimate
            ? {
                transformOrigin: "center",
                // animation: "spin 4s ease-in infinite",
                animation: `${isDashAnimate ? "b" : "a"} ${
                  state.speed
                }s ${state.easing} infinite`,
                animationDirection: isDashAnimate ? "alternate" : "normal",
              }
            : {}
        }
        className={isDashAnimate ? "SVGCircleDraw2" : "SVGCircleDraw"}
      />
    </svg>
  );

  let styleStr = "";
  if (isDashAnimate) {
    styleStr = `<style>
  @keyframes dash-spin {
    from {
      stroke-dasharray: 0 315;
    }
    to {
      stroke-dasharray: 315 400;
    }
  }
  .spin {
    animation: dash-spin ${state.speed}s ${state.easing} infinite;
    animation-direction: alternate;
  }
</style>`;
  } else if (showAnimate) {
    styleStr = `<style>
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .spin {
    transform-origin: center;
    animation: spin ${state.speed}s ${state.easing} infinite;
  }
</style>`;
  }
  const svgStr =
    `r = "${state.radius}" strokeWidth = "${state.sw}" stroke = "${state.stroke}"` +
    `${showSDR ? `\n    stroke-dasharray="${state.sDR} 315"` : ""}` +
    `${isRound ? `\n    stroke-linecap="round"` : ""}` +
    `${
      showOffset || isDashAnimate
        ? `\n    stroke-dashoffset="${state.offset}"`
        : ""
    }` +
    `${showAnimate ? `\n    class="spin"` : ""}`;

  return (
    <div className="svgBox">
      <div className="svgTop">
        <div className="svgShow">{SVGDOM}</div>
        <div className="svgTools">
          {showSW && (
            <div className="sw">
              <span>Stroke width</span>
              <Slider
                min={1}
                max={80}
                step={1}
                value={state.sw}
                onChange={changeSW}
              />
            </div>
          )}
          {showRadius && (
            <div className="radius">
              <span>Radius</span>
              <Slider
                min={1}
                max={90}
                step={1}
                value={state.radius}
                onChange={changeRadius}
              />
            </div>
          )}
          {showStroke && (
            <div className="stroke">
              <label htmlFor="stroke">stroke: </label>
              <input
                type="color"
                id="stroke"
                name="stroke"
                value={state.stroke}
                // defaultValue={"#f0788c"}
                onChange={changeStroke}
              />
            </div>
          )}
          {showSDR && (
            <div className="sdr">
              <span>stroke-dasharray: </span>
              <Slider
                min={0}
                max={315}
                step={1}
                value={state.sDR}
                onChange={changeSDR}
              />
            </div>
          )}
          {showOffset && (
            <div className="offset">
              <span>stroke-dashoffset: </span>
              <Slider
                min={-300}
                max={300}
                step={1}
                value={state.offset}
                onChange={changeOffset}
              />
            </div>
          )}
          {showAnimate && (
            <div className="speed">
              <span>Animation speed: </span>
              <Slider
                min={0.2}
                max={10}
                step={0.1}
                value={state.speed}
                onChange={(value) =>
                  setState((state) => ({
                    ...state,
                    speed: Math.round(value * 10) / 10,
                  }))
                }
              />
            </div>
          )}
          {showAnimate && (
            <div className="aesing">
              <span>Easing: </span>
              <select
                name="easing"
                defaultValue={state.easing}
                onChange={(e) =>
                  setState((state) => ({ ...state, easing: e.target.value }))
                }
              >
                <option value="linear">linear</option>
                <option value="ease-in">ease-in</option>
                <option value="ease-out">ease-out</option>
                <option value="ease-in-out">ease-in-out</option>
              </select>
            </div>
          )}
        </div>
      </div>
      <div className="svgCode">
        <Highlight
          code={`${styleStr}<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle 
    cx="100" cy="100" fill="none"
    ${svgStr}  />
</svg>`}
          language="html"
          theme={prismTheme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre>
              <code>
                {tokens.map((line, i) => (
                  <span key={i}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                    <br />
                  </span>
                ))}
              </code>
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}
