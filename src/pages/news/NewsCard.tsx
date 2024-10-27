import style from './NewsCard.module.css'
import {useEffect, useState} from "react";
import CircleLoading from "@site/src/components/CircleLoading";
import Loading from "@site/static/img/loading.svg";

interface NewsCardProps {
  type: "weibo" | "zhihu",
  renderFunc: (item: any, idx: number) => JSX.Element,
  linkTo: string,
  title: string
}

export default function NewsCard({type, renderFunc, linkTo, title}: NewsCardProps) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = () => {
    setLoading(true);
    setError(false);
    fetch("https://simon.kartjim.cn/api/getNews/" + type)
      .then(res => res.json())
      .catch(e => {
        console.warn(e);
        setError(true);
      })
      .then(res => {
        setData(res ? res.data : [])
        setLoading(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={style.card}>
      <div className={style.header}>
        <a href={linkTo || ""} target="_blank"
           rel="noopener noreferrer" style={{color: "#fff"}}>
          {title}
        </a>
        {
          loading ?
            <CircleLoading/> :
            <Loading style={{color: "#fff", cursor: "pointer"}} onClick={getData}/>
        }
      </div>
      <div className={style.content}>
        {
          loading ? (
            <div className={style.loading}>
              <div className={style.spinner}></div>
              <div>loading......</div>
            </div>
          ) : (<div className={style.list}>
            {
              error ?
                <div className={style.error}><span>加载失败</span></div> :
                data.map(renderFunc)
            }
          </div>)
        }
      </div>
    </div>
  )
}

export function WeiboCard() {
  return (
    <NewsCard type={"weibo"} renderFunc={(item, idx) => (
      <div className={style.item} key={idx} title={item.word}>
        <a href={`https://s.weibo.com/weibo?q=${item.word}`} target="_blank"
           rel="noopener noreferrer">
          {/*<img src={item.icon} alt=""/>*/}
          <span>{idx + 1}、{item.word}</span>
        </a>
      </div>
    )} linkTo="https://s.weibo.com/top/summary"
      title="微博热搜榜"
    />
  )
}

export function ZhihuCard() {
  return (
    <NewsCard type={"zhihu"} renderFunc={(item, idx) => (
      <div className={style.item} key={idx} title={item.target.title}>
        <a href={`https://www.zhihu.com/question/${item.target.id}`} target="_blank"
           rel="noopener noreferrer">
          {/*<img src={item.icon} alt=""/>*/}
          <span>{idx + 1}、{item.target.title}</span>
        </a>
      </div>
    )} linkTo="https://www.zhihu.com/hot"
      title="知乎热榜"
     />
  )
}