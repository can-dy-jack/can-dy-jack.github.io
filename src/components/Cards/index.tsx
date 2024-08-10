import styles from "./index.module.css";
import Link from "@docusaurus/Link";

const posts = [
    {
        url: "/docs/GIT/intro",
        title: "常用Git命令",
        desc: "本文总结了一些常用的git命令"
    },
    {
        url: "#",
        title: "grid布局学习笔记",
        desc: "本文系统的介绍了 Grid 的基本内容，包括网格容器的所有属性和网格项的所有属性以及他们的简单使用，还有相关的函数 repeat() 等和特殊单位 fr 等"
    },
];

function Cards() {
    return (
        <div className={styles.cards}>
            {
                posts.map(post => (
                    <Link href={post.url} className={styles.card}>
                        <div className={styles.title}>{post.title}</div>
                        <div className={styles.desc}>{post.desc}</div>
                        <div className={styles.corner}>
                            <svg className={styles.arrow} width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff">
                                <path d="M4.03132 8.91684L19.508 4.58337C19.8835 4.47824 20.2294 4.82421 20.1243 5.19967L15.7908 20.6763C15.6642 21.1284 15.0407 21.1726 14.8517 20.7429L11.6034 13.3605C11.5531 13.246 11.4616 13.1546 11.3471 13.1042L3.96477 9.85598C3.53507 9.66692 3.57926 9.04342 4.03132 8.91684Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Cards;