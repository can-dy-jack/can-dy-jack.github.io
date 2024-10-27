import {useDoc} from "@docusaurus/plugin-content-docs/client";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {Tooltip} from 'react-tooltip'

import style from "./index.module.css"
import WeiboSvg from "@site/static/img/微博.svg"
import XSvg from "@site/static/img/推特.svg"

export default function Index() {
  const {metadata} = useDoc();
  const {siteConfig} = useDocusaurusContext();
  const currentUrl = encodeURIComponent(siteConfig.url + '' + useBaseUrl(metadata.permalink));
  const text = encodeURIComponent(metadata.title + "|" + metadata.description);
  const imgStr1 = metadata.frontMatter.img ? "&pic=" + metadata.frontMatter.img : "";
  const imgStr2 = metadata.frontMatter.img ? "&image=" + metadata.frontMatter.img : "";

  return (
    <section className={style.box}>
      <a
        className={style.link}
        href={`https://service.weibo.com/share/share.php?url=${currentUrl}&title=${text}${imgStr1}`}
        target="_blank" rel="noopener noreferrer"
        data-tooltip-id="share-btn"
        data-tooltip-content="分享到微博"
        data-tooltip-place="top"
      >
        <WeiboSvg/>
      </a>
      <a
        className={style.link}
        href={`https://twitter.com/share?url=${currentUrl}&text=${text}${imgStr2}`}
        target="_blank" rel="noopener noreferrer"
        data-tooltip-id="share-btn"
        data-tooltip-content="分享到 X"
        data-tooltip-place="top"
      >
        <XSvg/>
      </a>
      <Tooltip id="share-btn"/>
    </section>
  )
}
