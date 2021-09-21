import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: 'Test',
  themeConfig: {
    logo: 'black.svg',
    logoDark: 'white.svg',
  },
});