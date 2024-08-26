import style from "./index.module.css";

function BiliBiliPlayer({ bvid, title }: { bvid: string; title?: string }) {
  return (
    <>
      <div className="audio-player">
        <div className="audio-player-box">
          <iframe
            className={style.bilibili}
            src={
              `//player.bilibili.com/player.html?isOutside=true&bvid=${bvid}&page=1&high_quality=1`
            }
            allowFullScreen
            scrolling="no"
          ></iframe>
        </div>

        {title && <div style={{
          fontSize: "0.9em",
          textAlign: "center",
          lineHeight: "1.2",
          margin: "5px",
        }}>{title}</div>}
      </div>
    </>
  );
}

export default BiliBiliPlayer;
