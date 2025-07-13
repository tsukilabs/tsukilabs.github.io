import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Call of Nil',
  description: '',
  lang: 'en-US',
  srcDir: 'src',
  outDir: 'dist',
  cleanUrls: true,
  metaChunk: true,
  lastUpdated: false,
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  sitemap: {
    hostname: 'https://nil.dev.br',
  },

  vite: {
    build: {
      emptyOutDir: true,
      minify: true,
      target: 'es2015',
    },
  },

  themeConfig: {
    logo: '/favicon.png',
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tsukilabs/nil' },
      { icon: 'discord', link: 'https://discord.gg/c2kvRWJSfz' },
    ],
  },
});
