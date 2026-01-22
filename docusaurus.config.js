// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "자동차 산업계를 위한 IT 인프라를 지원합니다.",
  // tagline: "자동차 데이터 플랫폼은 IT/SW 기술력으로 자동차 산업의 디지털 전환(DX)과 지능화(AX)를 이끄는 통합 데이터 플랫폼입니다.",
  //컨텐츠 위치 : ./src/components/index.js
  favicon: "img/kadap.jpg",

  // Set the production url of your site here
  url: "https://bigdata-car.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "bigdata-car", // Usually your GitHub org/user name.
  projectName: "bigdata-car.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "manual",
        path: "manual",
        routeBasePath: "/manual",
        sidebarPath: "./sidebars.js",
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl:
          "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "usecase",
        routeBasePath: "usecase",
        path: "./usecase",
        blogTitle: '자동차 데이터 활용 사례',
        blogDescription: 'KADaP를 활용한 다양한 데이터 분석 및 서비스 개발 사례를 소개합니다.',
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "faq",
        routeBasePath: "faq",
        path: "./faq",
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    // [
    //   "@docusaurus/plugin-content-blog",
    //   {
    //     id: "publications",
    //     routeBasePath: "publications",
    //     path: "./publications",
    //     remarkPlugins: [remarkMath],
    //     rehypePlugins: [rehypeKatex],
    //   },
    // ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/kadap.jpg",
      navbar: {
        // title: "KADaP",
        logo: {
          alt: "KADaP",
          src: "img/logo_light.png",
          srcDark: "img/logo_dark.png",
        },
        items: [
          // { to: "/blog", label: "News", position: "left" },
          {
            to: "/manual/intro",
            position: "left",
            label: "Manual",
          },
          { to: "/usecase", label: "UseCase", position: "left" },
          { to: "/faq", label: "FAQ", position: "left" },
          {
            href: "https://github.com/bigdata-car",
            label: "GitHub",
            position: "right",
          },
          // { to: "/publications", label: "Publications", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "KADaP 사용 메뉴얼",
                to: "/manual/intro",
              },
            ],
          },
          {
            title: "서비스",
            items: [
              {
                label: "자동차 데이터 포털",
                to: "https://portal.bigdata-car.kr",
              },
              {
                label: "자동차 산업 클라우드",
                to: "https://cloud.bigdata-car.kr",
              },
              {
                label: "GPUaaS",
                to: "https://ide.bigdata-car.kr",
              },
              {
                label: "마켓 플레이스",
                to: "https://api.bigdata-car.kr",
              },
              {
                label: "자동차 산업 에이전트",
                to: "https://agent.bigdata-car.kr",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KATECH(Korea Automotive Technology Institute) All right reserved`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
