/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const a11yEmoji = require('@fec/remark-a11y-emoji');
const oembed = require('remark-plugin-oembed');

const isProd =
  process.env.NODE_ENV !== 'development' &&
  !!process.env.NETLIFY &&
  process.env.CONTEXT !== 'deploy-preview';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Some Engineering Inc.',
  tagline:
    'Our mission is to make cloud infrastructure searchable and accessible. We are pioneering a new category of software: infrastructure intelligence.',
  url: 'https://some.engineering',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  stylesheets: [
    {
      rel: 'preload',
      href: 'https://cdn.some.engineering/fonts/Barlow.woff2',
      as: 'font',
      type: 'font/woff2',
      crossorigin: true,
    },
  ],
  scripts: isProd
    ? [
        {
          src: 'https://some.engineering/js/script.js',
          defer: true,
          'data-domain': 'some.engineering',
        },
      ]
    : [],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'handbook',
          routeBasePath: 'handbook',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/someengineering/some.engineering/edit/main',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          remarkPlugins: [a11yEmoji],
        },
        blog: false,
        // blog: {
        //   blogTitle: 'Blog',
        //   blogDescription: 'Some Engineering Inc. blog',
        //   blogSidebarTitle: 'Posts',
        //   blogSidebarCount: 'ALL',
        //   path: 'blog',
        //   routeBasePath: 'blog',
        //   archiveBasePath: null,
        //   showReadingTime: true,
        //   remarkPlugins: [a11yEmoji],
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'jobs',
        blogTitle: 'Jobs',
        blogDescription: 'Some Engineering Inc. career opportunities',
        blogSidebarTitle: 'Current Openings',
        blogSidebarCount: 'ALL',
        path: 'jobs',
        routeBasePath: 'jobs',
        archiveBasePath: null,
        showReadingTime: false,
        feedOptions: {
          type: 'all',
          copyright: `Copyright © ${new Date().getFullYear()} Some Engineering Inc.`,
        },
        remarkPlugins: [a11yEmoji],
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'podcasts',
        blogTitle: 'Podcasts',
        blogDescription: 'Some Engineering Inc. podcasts',
        blogSidebarTitle: 'Episodes',
        blogSidebarCount: 'ALL',
        path: 'podcasts',
        routeBasePath: 'podcasts',
        archiveBasePath: null,
        showReadingTime: false,
        feedOptions: {
          type: 'all',
          copyright: `Copyright © ${new Date().getFullYear()} Some Engineering Inc.`,
        },
        remarkPlugins: [a11yEmoji, oembed],
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      metadata: [
        {
          name: 'keywords',
          content:
            'some engineering, some engineer, resoto, sre, cloud, cloud services, cloud providers, aws, amazon web services, gcp, google cloud platform, azure, docker, kubernetes, k8s, devops, prometheus, infrastructure, resource tool, multicloud, metrics, python, terraform, vsphere, finops, risotto, podcast',
        },
      ],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      announcementBar: {
        id: 'announcementBar-1', // Increment on change
        content:
          '<span aria-label="sparkle" role="img" class="lg-screens-only">✨</span> Interested in helping to build the next generation of infrastructure management tools? <a href="/jobs"><em>We\'re hiring!</em></a> <span aria-label="sparkle" role="img" class="lg-screens-only">✨</span>',
      },
      navbar: {
        hideOnScroll: true,
        title: 'Some Engineering Inc.',
        logo: {
          alt: '',
          src: 'img/logo-xs.svg',
        },
        items: [
          { to: '/about', label: 'About', position: 'right' },
          {
            label: 'Products',
            position: 'right',
            type: 'dropdown',
            items: [
              {
                label: 'Resoto',
                href: 'https://resoto.com',
              },
            ],
          },
          { to: '/handbook', label: 'Handbook', position: 'right' },
          // { to: '/blog', label: 'Blog', position: 'right' },
          { to: '/podcasts', label: 'Podcasts', position: 'right' },
          { to: '/jobs', label: 'Jobs', position: 'right' },
          {
            label: 'GitHub',
            href: 'https://github.com/someengineering',
            position: 'left',
            className: 'navbar-icon-link navbar-github-link',
            'aria-label': 'GitHub',
          },
          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/company/someengineering',
            position: 'left',
            className: 'navbar-icon-link navbar-linkedin-link',
            'aria-label': 'LinkedIn',
          },
          {
            label: 'Discord',
            href: 'https://discord.gg/someengineering',
            position: 'left',
            className: 'navbar-icon-link navbar-discord-link',
            'aria-label': 'Discord',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Products',
            items: [
              {
                label: 'Resoto',
                href: 'https://resoto.com',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Code of Conduct',
                to: '/code-of-conduct',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/someengineering',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/someengineering',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Handbook',
                to: '/handbook',
              },
              {
                label: 'Jobs',
                to: '/jobs',
              },
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'Podcasts',
                to: '/podcasts',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/someengineering',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy Policy',
                to: '/privacy',
              },
              {
                label: 'Terms and Conditions',
                href: '/terms',
              },
            ],
          },
        ],
        copyright: `<span aria-label="owl" role="img" class="lg-screens-only">🦉</span> Copyright © ${new Date().getFullYear()} Some Engineering Inc. Built with <a href="https://docusaurus.io" target="_blank" rel="noopener noreferrer">Docusaurus</a>. <span aria-label="dinosaur" role="img" class="lg-screens-only">🦖</span>`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
      },
    }),
};

module.exports = config;
