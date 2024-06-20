import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

import portal_img from "../../../static/img/KADaP_portal.jpg";
import cloud_img from "../../../static/img/KADaP_cloud.jpg";
import market_img from "../../../static/img/KADaP_market.jpg";

const FeatureList = [
  {
    title: "자동차 데이터 포털",
    image: portal_img,
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
      자동차 데이터 포털 설명 어쩌구 저쩌구 여기는 자동차 데이터 포털이아ㅣ
      </>
    ),
    link: "https://portal.bigdata-car.kr"
  },
  {
    title: "자동차 산업 클라우드",
    image: cloud_img,
    // Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        클라우드 설명 어쩌구 저쩌구 여기는 자동차 데이터 포털이아ㅣ
      </>
    ),
    link: "https://cloud.bigdata-car.kr"
  },
  {
    title: "마켓/서비스 플레이스",
    image: market_img,
    // Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        마켓/서비스 플레이스 설명 어쩌구 저쩌구 여기는 자동차 데이터 포털이아ㅣ
      </>
    ),
    link: "https://market.bigdata-car.kr"
  },
];

function Feature({ image, title, description, link }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <a href={link}>
          <img src={image} alt="kadap_logo" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        {/* <Heading as="h3">{title}</Heading> */}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
