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
  title: "KADaP",
  // tagline: "KADaP Manual",
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
        // docs: {
        //   sidebarPath: './sidebars.js',
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   blogTitle: "First-trial",
        //   blogSidebarTitle: "First-trial sidebar",
        //   // blogSidebarCount: 2
        // },
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
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "lecture",
    //     path: "lecture",
    //     routeBasePath: "/lecture",
    //     sidebarPath: "./sidebars.js",
    //     // Please change this to your repo.
    //     // Remove this to remove the "edit this page" links.
    //     editUrl:
    //       "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
    //   },
    // ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "blog2",
        routeBasePath: "blog2",
        path: "./blog2",
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    // [
    //   {
    //     id: "my-blog2",
    //     routeBasePath: "my-blog2",
    //     editUrl:
    //       "https://github.com/facebook/docusaurus/edit/master/website/my-blog2",
    //     postsPerPage: 2,
    //     feedOptions: {
    //       type: "all",
    //       copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
    //     },
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
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        // title: "KADaP",
        logo: {
          alt: "KADaP",
          src: "img/kadaplogo.jpg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "defaultSidebar",
            position: "left",
            label: "Docs",
          },
          {
            // type: "docSidebar",
            // sidebarId: "defaultSidebar",
            to: "/manual/intro",
            position: "left",
            label: "Manual",
          },
          // {
          //   // type: "docSidebar",
          //   // sidebarId: "defaultSidebar",
          //   to: "/lecture/intro",
          //   position: "left",
          //   label: "Lecture",
          // },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/blog2", label: "LLM 정리", position: "left" },
          {
            href: "https://github.com/bigdata-car",
            label: "GitHub",
            position: "right",
          },
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
            title: "Blog",
            items: [
              {
                label: "KADaP Tech Blog",
                href: "/blog2",
              },
              // {
              //   label: "Discord",
              //   href: "https://discordapp.com/invite/docusaurus",
              // },
              // {
              //   label: "Twitter",
              //   href: "https://twitter.com/docusaurus",
              // },
            ],
          },
          {
            title: "KADaP",
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
                label: "마켓/서비스 플레이스",
                to: "https://market.bigdata-car.kr",
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
