import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';
import {redirects} from './redirects';

// Für einen späteren Wechsel auf eine Custom Domain (z.B. dok.smart-me.com)
// muss nur SITE_URL/BASE_URL hier bzw. static/CNAME angepasst werden.
const url = process.env.SITE_URL ?? 'https://ecarup.github.io';
const baseUrl = process.env.BASE_URL ?? '/smart-me-wiki/';

const config: Config = {
  title: 'smart-me Support',
  tagline: 'Dokumentation und Support für smart-me Produkte',
  favicon: 'img/favicon.ico',

  url,
  baseUrl,
  organizationName: 'ecarup',
  projectName: 'smart-me-wiki',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  future: {
    v4: true,
    faster: true,
  },

  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'fr', 'it'],
    localeConfigs: {
      de: {label: 'Deutsch', htmlLang: 'de-CH'},
      en: {label: 'English', htmlLang: 'en'},
      fr: {label: 'Français', htmlLang: 'fr-CH'},
      it: {label: 'Italiano', htmlLang: 'it-CH'},
    },
  },

  markdown: {
    mermaid: false,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
      onBrokenMarkdownImages: 'throw',
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          // Docs-only-Modus: Dokumentation liegt direkt unter /
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Dateinamen wie "1-phasen-zaehler.md" stammen aus den alten URLs.
          // Ohne diese Zeile würde Docusaurus die "1-" als Positionspräfix deuten.
          numberPrefixParser: false,
          editUrl: 'https://github.com/ecarup/smart-me-wiki/edit/main/',
          // Übersetzungen werden generiert – kein Edit-Link auf i18n-Dateien.
          editLocalizedFiles: false,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        language: ['de', 'en', 'fr', 'it'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarShortcutHint: false,
      },
    ],
  ],

  plugins: [
    // Redirects von den alten Google-Sites-URLs werden in redirects.ts gepflegt.
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects,
      },
    ],
  ],

  themeConfig: {
    image: 'img/smart-me-social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'smart-me Support',
      logo: {
        alt: 'smart-me',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'wikiSidebar',
          position: 'left',
          label: 'Wiki',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/ecarup/smart-me-wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'smart-me',
          items: [
            {label: 'smart-me.com', href: 'https://www.smart-me.com'},
            {label: 'Portal', href: 'https://smart-me.com/Portal'},
          ],
        },
        {
          title: 'Wiki',
          items: [
            {label: 'Mitarbeiten', href: 'https://github.com/ecarup/smart-me-wiki/blob/main/CONTRIBUTING.md'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} smart-me AG`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp', 'json', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
