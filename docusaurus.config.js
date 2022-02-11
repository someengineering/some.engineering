/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const a11yEmoji = require('@fec/remark-a11y-emoji');

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
  organizationName: 'someengineering',
  projectName: 'some.engineering',
  deploymentBranch: 'gh-pages',
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
        blog: {
          blogTitle: 'Blog',
          blogDescription: 'Some Engineering Inc. blog',
          blogSidebarTitle: 'Posts',
          path: 'blog',
          routeBasePath: 'blog',
          archiveBasePath: null,
          showReadingTime: true,
          remarkPlugins: [a11yEmoji],
        },
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
        path: 'jobs',
        routeBasePath: 'jobs',
        archiveBasePath: null,
        showReadingTime: false,
        remarkPlugins: [a11yEmoji],
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html'],
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      autoCollapseSidebarCategories: true,
      metadata: [
        {
          name: 'keywords',
          content:
            'some engineering, some engineer, resoto, sre, cloud, cloud services, cloud providers, aws, amazon web services, gcp, google cloud platform, azure, docker, kubernetes, k8s, devops, prometheus, infrastructure, resource tool, multicloud, metrics, python, terraform, vsphere, finops, risotto',
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
          alt: 'Some Engineering Inc. Logo',
          src: 'img/logo-xs.svg',
        },
        items: [
          { to: '/about', label: 'About', position: 'left' },
          {
            label: 'Products',
            position: 'left',
            type: 'dropdown',
            items: [
              {
                label: 'Resoto',
                href: 'https://resoto.com',
              },
            ],
          },
          { to: '/handbook', label: 'Handbook', position: 'left' },
          // { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/jobs', label: 'Jobs', position: 'left' },
          { to: '/contact', label: 'Contact', position: 'left' },
          {
            label: 'GitHub',
            href: 'https://github.com/someengineering',
            position: 'right',
            className: 'header-icon-link header-github-link',
            'aria-label': 'GitHub',
          },
          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/company/someengineering',
            position: 'right',
            className: 'header-icon-link header-linkedin-link',
            'aria-label': 'LinkedIn',
          },
          // {
          //   label: 'Twitter',
          //   href: 'https://twitter.com/someengineering',
          //   position: 'right',
          //   className: 'header-icon-link header-twitter-link',
          //   'aria-label': 'Twitter',
          // },
          {
            label: 'Discord',
            href: 'https://discord.gg/someengineering',
            position: 'right',
            className: 'header-icon-link header-discord-link',
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
                label: 'GitHub',
                href: 'https://github.com/someengineering',
              },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/someengineering',
              // },
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
        logo: {
          alt: 'Deploys by Netlify',
          src: 'https://netlify.com/img/global/badges/netlify-color-accent.svg',
          width: 114,
          height: 51,
          href: 'https://netlify.com',
        },
        copyright: `<span aria-label="owl" role="img" class="lg-screens-only">🦉</span> Copyright © ${new Date().getFullYear()} Some Engineering Inc. Built with <a href="https://docusaurus.io" target="_blank" rel="noopener noreferrer">Docusaurus</a>. <span aria-label="dinosaur" role="img" class="lg-screens-only">🦖</span>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
