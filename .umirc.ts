import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'draco.icu',
  description: 'I see you, 遇见你',
  favicon: '/code.svg',
  logo: '/code.svg',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config
  hash: true,
  dynamicImport: {
    loading: '@/progress',
  },
  ssr: {},
  exportStatic: {},
  sitemap: {
    hostname: 'https://draco.icu',
  },
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  analytics: {
    // Google Analytics 代码，配置后会启用
    ga: 'UA-176586322-1',
    // 百度统计代码，配置后会启用
    baidu: 'c601bdebcd89b7fc076d669b78e34c6a',
  },
  headScripts: [
    {
      'crossorigin': 'anonymous',
      async: true,
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8911772601296047',
    },
  ],
});
