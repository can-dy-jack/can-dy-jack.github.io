import {FC, ReactElement, useEffect, useRef, useState} from "react";

interface CollapseProps {
  detail: string;
  text: any;
}

const Collapse: FC<CollapseProps> = (props) => {
  const {text, detail} = props;
  const [isShow, setIsShow] = useState(false);
  const clickHead = () => {
    setIsShow(pre => !pre);
  };

  return (
    <div style={{
      marginBottom: "10px",
      background: "var(--self-collapse-bg)",
      borderRadius: "8px",
    }} className="collapse" onClick={clickHead}>
      <div style={{
        position: "relative",
        display: "flex",
        padding: "12px 16px",
        cursor: "pointer",
        alignItems: "center"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          paddingInlineEnd: "12px",
        }}>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            lineHeight: 0,
            textAlign: "center",
            verticalAlign: "-0.125rem",
          }}>
          <svg
            viewBox="0 0 1024 1024"
            focusable="false"
            data-icon="caret-right"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
            style={{
              transform: isShow ? "rotate(90deg)" : "rotate(0)",
              transition: "transform 250ms linear",
          }}
          >
            <path
              d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"></path>
          </svg>
        </span>
        </div>
        <span>{text}</span>
      </div>
      <div style={{
        maxHeight: isShow ? '100px' : '0',
        transition: "max-height 250ms linear",
        overflow: "hidden",
      }}>
        <div style={{
          padding: "0 16px 16px 16px",
        }}>
          <p style={{margin: 0, padding: 0}}>{detail}</p>
        </div>
      </div>
    </div>
  );
};

export default Collapse;