import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

import cloud_img from "../../../static/img/home/cloud.png";
import storage_img from "../../../static/img/home/storage.png";
import gpuaas_img from "../../../static/img/home/gpuaas.png";
import sw_img from "../../../static/img/home/sw_api.png";

const FeatureList = [
  {
    title: "데이터 플랫폼 기술",
    image: storage_img,
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        {/* <strong>데이터 플랫폼 기술</strong> <br /> */}
        차량 및 제조 공정 데이터의<br></br>
        수집-전처리-분석-관리를 위한<br></br>
        기술과 서비스 개발<br></br>

      </>
    ),
    //link: "https://cloud.bigdata-car.kr"
  },
  {
    title: "클라우드 기술",
    image: cloud_img,
    // Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        {/* <strong>클라우드 기술</strong> <br /> */}
        대규모 컴퓨팅 자원을 <br></br>
        클러스터링과 가상화하여 <br></br>
        SDV/SW개발 및 시뮬레이션<br></br>
        환경 제공 기술 개발

      </>
    ),
    //link: "https://portal.bigdata-car.kr"
  },
  {
    title: "원격 분산 클라우드 기술",
    image: gpuaas_img,
    // Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        {/* <strong>원격 분산 클라우드 기술</strong> <br /> */}
        자율주행차량 및 엣지장비의 <br></br>
        컴퓨팅 자원을 DePIN 기술로 <br></br>
        네트워크 연결하여 관리 및  <br></br>
        활용 하는 기술 개발

      </>
    ),
    //link: "https://ide.bigdata-car.kr"
  },
  {
    title: "원격 분산 AI 학습 기술",
    image: sw_img,
    // Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        {/* <strong>원격 분산 AI 학습 기술</strong> <br /> */}
        초거대 AI 모델을 원격의   <br></br>
        다중 장비간 연계 학습을 위한   <br></br>
        GPU, 메모리, 네트워크   <br></br>
        한계 극복 기술 개발 <br></br>
      </>
    ),
    //link: "https://api.bigdata-car.kr"
  },
];

function Feature({ image, title, description, link }) {
  return (
    // <div className={clsx("col col--4")}>
    <div className={clsx("col col--3")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <a href={link}>
          <img src={image} className={styles.featureImg} alt="icon" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
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
