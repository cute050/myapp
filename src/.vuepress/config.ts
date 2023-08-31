import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  theme,
  plugins: [
    copyCodePlugin({
      locales: {
        "/": {
          // 覆盖复制按钮标签文字
          copy: "复制此段代码",
        },

        "/xx/": {
          // 在这里完整设置 `mm-NN` 的多语言配置
        },
      },
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
