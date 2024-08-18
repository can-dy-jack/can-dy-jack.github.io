import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '前端相关知识',
    Svg: require('@site/static/img/home1.svg').default,
    description: (
      <>
        这里是我的最新个人博客，我将在这里分享我在学习前端的过程中总结的知识和技能，分享给大家。
      </>
    ),
  },
  {
    title: '个人博客',
    Svg: require('@site/static/img/home2.svg').default,
    description: (
      <>
        在这里，我也将总结我之前在其它平台发布的和以后将要发布的文章。
      </>
    ),
  },
  {
    title: '关于我',
    Svg: require('@site/static/img/home3.svg').default,
    description: (
      <div className='self-feature'>
        <div>邮箱: jjack_chen3@163.com</div>
        <div>微信: 15856941255</div>
        <div>QQ: 2696369915</div>
        <div>GitHub: <Link href='https://github.com/can-dy-jack'>@can-dy-jack</Link></div>
        <div>力扣: <Link href='https://leetcode.cn/u/kartjim/'>@kartjim</Link></div>
      </div>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
