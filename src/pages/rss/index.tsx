import BaseLayout from "../../components/BaseLayout"
import {useEffect, useState} from "react";
import style from "./index.module.css";

import {parseRuanyifengXML, contentData, contentItem, parseJWCXML} from "../../utils/rss";

type RSSItem = {
  name: string;
  title: string;
  description?: string;
  url: string;
  getData: () => void;
}

export default function RSSPage() {
  const RSSs: RSSItem[] = [
    {
      name: "ruanyifeng",
      title: "阮一峰的网络日志",
      url: "https://simon.kartjim.cn/api/rss/ruanyifeng",
      getData: getRuanyifengData
    },
    {
      name: "Josh W. Comeau",
      title: "Josh W. Comeau",
      url: "https://simon.kartjim.cn/api/rss/joshwcomeau",
      getData: getJWCData
    }
  ];

  const [data, setData] = useState<contentData>();
  const [showItems, setShowItems] = useState<contentItem[]>();
  const [tab, setTab] = useState<RSSItem>(RSSs[0]);

  function loadMore() {
    const idx = showItems.length;
    setShowItems(prev => [...prev, ...data.items.slice(idx, idx + 10)]);
  }

  const [loading, setLoading] = useState(true);

  const ChangeCurrentTab = (tab: RSSItem) => {
    setTab(tab);
  }

  function getRuanyifengData() {
    setLoading(true);
    fetch("https://simon.kartjim.cn/api/rss/ruanyifeng")
      .then(response => response.json())
      .then(res => {
        const temp = parseRuanyifengXML(res.data);
        setData(temp);
        setShowItems(temp.items.slice(0, 10));
        setLoading(false);
      })
  }
  function getJWCData() {
    setLoading(true);
    fetch("https://simon.kartjim.cn/api/rss/joshwcomeau")
      .then(response => response.json())
      .then(res => {
        const temp = parseJWCXML(res.data);
        setData(temp);
        setShowItems(temp.items.slice(0, 10));
        setLoading(false);
      })
  }

  useEffect(() => {
    tab.getData();
  }, [tab]);

  return(
    <BaseLayout>
      <section className={style.box}>
        <aside className={style.aside}>
          {
            RSSs.map((rss) => (
              <div
                className={style.aside_item}
                onClick={() => ChangeCurrentTab(rss)}
                key={rss.name}
                style={{
                  color: tab.name === rss.name ? 'var(--ifm-color-primary)' : '',
                  borderRightColor: tab.name === rss.name ? 'var(--ifm-color-primary)' : '',
                }}
              >
                <div className={style.aside_item_title}>{rss.title}</div>
              </div>
            ))
          }
        </aside>
        <article className={style.content}>
          {
            loading ? <div>loding...</div> : (
              <div className={style.content_box}>
                <div className={style.conten_title}>{data.title}</div>
                <div className={style.conten_subtitle}>{data.subtitle}</div>
                {/*<div>{data.updated}</div>*/}
                {
                  showItems.map((item) => {
                    return (
                      <div className={style.content_item} key={item.title}>
                        {
                          item.link && (<div className={style.img}>
                            <img src={item.link} alt=""/>
                          </div>)
                        }
                        <div className={style.title}>{item.title}</div>
                        <div className={style.published}>发布于：{
                          item.published.toLocaleString()
                        }</div>
                        {
                          item.updated && (<div className={style.updated}>最近更新于：{
                            new Date(item.updated).toLocaleString()
                          }</div>)
                        }
                        <div className={style.summary} dangerouslySetInnerHTML={{
                          __html: item.summary
                        }}></div>
                        {/*<div dangerouslySetInnerHTML={{*/}
                        {/*  __html: item.content*/}
                        {/*}}></div>*/}
                        <div className={style.readmore}>
                          <button
                            className="button button--secondary button--xs"
                            onClick={() => window.open(item.url)}
                            title={item.url}
                          >
                            阅读详情
                          </button>
                        </div>
                      </div>
                    )
                  })

                }
                {
                  data.items.length > showItems.length && (<div style={{textAlign: "center"}}>
                    <button
                      className="button button--secondary button--lg"
                      onClick={loadMore}
                    >
                      加载更多...
                    </button>
                  </div>)
                }
              </div>
            )
          }
        </article>
      </section>
    </BaseLayout>
  )
}
