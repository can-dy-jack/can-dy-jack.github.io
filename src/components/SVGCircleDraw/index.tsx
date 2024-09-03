import style from "./index.module.css";

import { Highlight } from "prism-react-renderer";
import { usePrismTheme } from "@docusaurus/theme-common";
import { useState } from "react";
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'

export default function SVGCircleDraw({
  strokeWidth,
  radius,
  color,
  dash,
  code,
  showSDR = false
}: {
  strokeWidth?: number;
  radius?: number;
  color?: string;
  dash?: number;
  code?: string;
  showSDR?: boolean
}) {
  const prismTheme = usePrismTheme();

  const [state, setState] = useState({
    sw: 20,
    radius: 100,
    stroke: "#f0788c",
    sDR: 504
  });
  const changeSW = value => {
    setState(state => ({ ...state, sw: value }));
  }
  const changeRadius = value => {
    setState(state => ({ ...state, radius: value }));
  }
  const changeStroke = e => {
    setState(state => ({ ...state, stroke: e.target.value }));
  }

  const SVGDOM = (
    <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="400"
        cy="400"
        fill="none"
        r={state.radius}
        strokeWidth={state.sw}
        stroke={state.stroke}
      />
    </svg>
  );

  return (
    <div className={style.svgBox}>
      <div className={style.svgTop}>
        <div className={style.svgShow}>{SVGDOM}</div>
        <div className={style.svgTools}>
          <div className={style.sw}>
            <label htmlFor="StrokeWidth">Stroke width</label>
            <br />
            {/* <input
              className={style.input}
              type="range"
              id="StrokeWidth"
              name="StrokeWidth"
              min="2"
              max="200"
              // value={state.sw}
              defaultValue={20}
              step="1"
              onChange={changeSW}
            /> */}
            <Slider
              min={2}
              max={200}
              step={1}
              value={state.sw}
              onChange={changeSW}
            />
          </div>
          <div className={style.radius}>
            <label htmlFor="radius">Radius</label>
            <br />
            {/* <input
              className={style.input}
              type="range"
              id="radius"
              name="radius"
              min="2"
              max="375"
              defaultValue={100}
              step="1"
              onChange={changeRadius}
            /> */}
            <Slider
              min={2}
              max={375}
              step={1}
              value={state.radius}
              onChange={changeRadius}
            />
          </div>
          <div className={style.stroke}>
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
        </div>
      </div>
      <div className={style.svgCode}>
        <Highlight
          code={`<svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <circle cx="400" cy="400" fill="none"
    r="${state.radius}" 
    strokeWidth="${state.sw}" 
    stroke="${state.stroke}"
    ${showSDR ? `stroke-dasharray="${state.sDR} 1400"` : ""} 
    />
</svg>`}
          language="javascript"
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
