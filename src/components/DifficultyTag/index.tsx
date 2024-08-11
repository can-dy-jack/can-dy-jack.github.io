
export default function DifficultyTag({ level }) {
  return (
    <span style={{
      padding: "0.2rem 1rem",
      background: `${level === 3 ? '#fa383e26' : level === 2 ? '#fff8e6' : '#e6f6e6'}`,
      color: `${level === 3 ? '#e13238' : level === 2 ? '#e6a700' : '#009400'}`,
      display: "inline-block",
      borderRadius: "5px",
      fontSize: "1rem"
    }}>{level === 3 ? '困难' : level === 2 ? '中等' : '简单'}</span>
  )
}
