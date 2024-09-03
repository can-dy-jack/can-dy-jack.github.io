import styles from "./index.module.css";
import Link from "@docusaurus/Link";

type PostsType = {
    url: string,
    title: string,
    desc: string,
    active?: boolean
}

const posts: PostsType[] = [
    {
        url: "/docs/工程化/eslint/",
        title: "ESLint 原理",
        desc: "eslint工作原理解析；知识点涉及AST、babel、ESLint的使用方式和实现原理",
    },
    {
        url: "/docs/GIT/intro",
        title: "常用Git命令",
        desc: "本文总结了一些常用的git命令"
    },
    {
        url: "/docs/leetcode/1035/",
        title: "算法题目：不相交的线",
        desc: "LeetCode 1035. 不相交的线 -- 动态规划解题",
        active: true
    },
    {
        url: "/docs/leetcode/307/",
        title: "算法题目：区域和检索 - 数组可修改",
        desc: "LeetCode 307。线段树的设计与应用",
    },
    {
        url: "/docs/leetcode/算法与数据结构/线段树/",
        title: "数据结构之线段树",
        active: true,
        desc: "线段树可以在 O(logN) 的时间复杂度内实现单点修改、区间修改、区间查询（区间求和，求区间最大值，求区间最小值）等操作。"
    },
    {
        url: "/docs/leetcode/3152/",
        title: "算法题目：特殊数组 ",
        desc: "LeetCode 3152. 特殊数组 II - 前缀和、动态规划",
    },
];

function Cards() {
    return (
        <div className={styles.cards}>
            {
                posts.map(post => (
                    <Link href={post.url} className={styles.card + (post.active ? " " + styles.active : "")} key={post.title}>
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