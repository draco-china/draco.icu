/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-12 05:27:09
 * @LastEditTime: 2021-06-13 01:10:18
 */
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
  // themeConfig: {
  //   'c-primary': '#1890ff',
  //   'c-heading': '#1890ff',
  //   'c-text': '#1890ff',
  // },
});
