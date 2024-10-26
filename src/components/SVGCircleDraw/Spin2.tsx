import "./spin2.css";

export default function Spin2() {
  return (
    <div
      style={{
        height: "400px",
        width: "400px",
      }}
    >
      <svg
        style={{
          width: "100%",
          height: "100%",
        }}
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="spin2"
          cx="400"
          cy="400"
          fill="none"
          r="200"
          strokeWidth="50"
          stroke="#E3876F"
          strokeDasharray="189 1400"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
