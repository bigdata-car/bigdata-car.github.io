import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

import cloud_img from "../../../static/img/home/cloud.png";
import storage_img from "../../../static/img/home/storage.png";
import gpuaas_img from "../../../static/img/home/gpuaas.png";
import sw_img from "../../../static/img/home/sw_api.png";

const FeatureList = [
  {
    title: "클라우드",
    image: cloud_img,
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
      {/* <strong>클라우드</strong> <br /> */}
      <br />
      SW/SDV 개발을 위한 1,096개 가상머신 <br />
      사용자 목적에 맞는 OS / SW 선택 <br />
      자체 개발 Web 인터페이스 제공
      </>
    ),
    link: "https://cloud.bigdata-car.kr"
  },
  {
    title: "스토리지",
    image: storage_img,
    // Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
      {/* <strong>스토리지</strong> <br /> */}
      <br />
      개별 저장공간 지원 및 <br />
      기관별 최대 7,000TB 저장공간 <br />
      S3 호환 업로드/다운로드 환경 제공 <br />
      소스코드(git), 컨테이너(harbor) 저장 가능
      </>
    ),
    link: "https://portal.bigdata-car.kr"
  },
  {
    title: "GPUaaS",
    image: gpuaas_img,
    // Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
      {/* <strong>GPUaaS</strong> <br /> */}
      <br />
      AI 개발 학습을 위한 MLOps 솔루션 <br />
      보유 GPU(H100, A100, L40S) 및 공유 GPU(B200, 4080) 등 180 여대 GPU 활용 <br />
      Web 인터페이스 제공
      </>
    ),
    link: "https://ide.bigdata-car.kr"
  },
  {
    title: "SW/API",
    image: sw_img,
    // Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
      {/* <strong>SW/API</strong> <br /> */}
      <br />
      SW 개발에 필요한 툴, AI 모델, <br />
      알고리즘을 Web 또는 API 형태 제공 <br />
      LLM 모델 (약 600종) 신청 후 바로 사용 가능 <br />
      </>
    ),
    link: "https://api.bigdata-car.kr"
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
