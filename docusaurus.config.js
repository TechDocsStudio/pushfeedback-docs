// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsDark');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PushFeedback docs',
  tagline: 'Feedback widget for your website',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // Set the production url of your site here
  url: 'https://docs.pushfeedback.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // This moves your docs to the root domain
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],
  plugins: [
    [
      'docusaurus-pushfeedback',{
        project: 'wlkz1eomrs',
        buttonStyle: 'dark',
        buttonPosition: 'bottom-right',
        modalPosition: 'bottom-right',
        successMessage: "Your input helps us improve every day."
      }
    ],
    'docusaurus-plugin-image-zoom',
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/image.png',
      navbar: {
        logo: {
          alt: 'PushFeedback',
          src: 'img/PushFeedback-Logo.png',
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },    
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} PushFeedback.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoom: {
        selector: '.markdown img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      }
    }),
    scripts: [
      'https://www.googletagmanager.com/gtag/js?id=G-1TMTNMCLSX',
      '/analytics.js',
    ],
    headTags: [
      {
        tagName: 'link',
        attributes: {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css',
        },
      },
      {
        tagName: 'script',
        attributes: {
          type: 'module',
          src: 'https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js',
        },
      },
    ],
  };



module.exports = config;
