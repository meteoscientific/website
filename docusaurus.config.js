// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MeteoScientific',
  tagline: 'Integrating Sensors Into Your World',
  favicon: 'img/metsci_favicon.ico',

  // Set the production url of your site here
  url: 'https://www.meteoscientific.com', // Updated to your domain
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/', // Updated to the root

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'meteoscientific', // Updated to your GitHub org/user name
  projectName: 'website', // Updated to your repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/meteoscientific/website/tree/main/', // Updated URL
        },
        blog: {
          path: './blog', 
          routeBasePath: 'blog',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/meteoscientific/website/tree/main/', // Updated URL
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Blog Posts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/meteoscientific-social-card.jpg',
      navbar: {
        title: 'MeteoScientific',
        logo: {
          alt: 'MetSci Logo',
          src: 'img/metsci_logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          { to: '/faq', label: 'FAQ', position: 'left' }, 
      { to: '/about', label: 'About', position: 'left' }, 
      { to: '/pricing', label: 'Pricing', position: 'left' }, 
          {
            href: 'https://github.com/meteoscientific/website', // Updated URL
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@meteoscientific',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/4fR5QAq6Vc',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/meteoscientific',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/meteoscientific/website', // Updated URL
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MeteoScientific, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
