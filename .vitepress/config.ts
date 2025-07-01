import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Nil',
  description: '',
  lang: 'pt-BR',
  srcDir: 'src',
  outDir: 'dist',
  cleanUrls: true,
  metaChunk: true,
  lastUpdated: true,
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
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tsukilabs/nil' },
      { icon: 'discord', link: 'https://discord.gg/c2kvRWJSfz' },
    ],
  },
});
