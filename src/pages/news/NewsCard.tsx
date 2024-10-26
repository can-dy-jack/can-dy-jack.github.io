import style from './NewsCard.module.css'
import {useEffect, useState} from "react";

export default function NewsCard() {}

export function WeiboCard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://simon.kartjim.cn/api/getNews/weibo")
      .then(res => res.json())
      .catch(e => {
        console.warn(e);
        setError(true)
      })
      .then(res => {
        setData(res ? res.data : [])
        setLoading(false);
      });
  }, []);

  return (
    <div className={style.card}>
      <div className={style.header}>
        微博热搜
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
                data.map((item, idx) => (
                  <div className={style.item} key={idx} title={item.word}>
                    <a href={`https://s.weibo.com/weibo?q=${item.word}`} target="_blank"
                       rel="noopener noreferrer">
                      {/*<img src={item.icon} alt=""/>*/}
                      <span>{idx + 1}、{item.word}</span>
                    </a>
                  </div>
                ))
            }
          </div>)
        }
      </div>
    </div>
  )
}

export function ZhihuCard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://simon.kartjim.cn/api/getNews/zhihu")
      .then(res => res.json())
      .catch(e => {
        console.warn(e);
        setError(true)
      })
      .then(res => {
        setData(res ? res.data : [])
        setLoading(false);
      });
  }, []);

  return (
    <div className={style.card}>
      <div className={style.header}>
        <a href={`https://www.zhihu.com/hot`} target="_blank"
           rel="noopener noreferrer" style={{color: "#fff"}}>
          知乎热搜
        </a>
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
                data.map((item, idx) => (
                  <div className={style.item} key={idx} title={item.target.title}>
                    <a href={`https://www.zhihu.com/question/${item.target.id}`} target="_blank"
                       rel="noopener noreferrer">
                      {/*<img src={item.icon} alt=""/>*/}
                      <span>{idx + 1}、{item.target.title}</span>
                    </a>
                  </div>
                ))
            }
          </div>)
        }
      </div>
    </div>
  )
}