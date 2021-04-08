import { defineConfig } from 'umi';
import { Spin } from 'antd';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {}, // 热更新
  dynamicImport: {
    // loading: '加载中...'
  }, // 按需加载组件
  hash: true, // 避免浏览器加载缓存
  history: {
    type: 'hash', // hash模式，浏览器地址带#号
  },
  // antd:{},
  // 配置antd语言
  // locale:{
  //   default: 'zh-CN',
  //   antd: true,
  //   baseNavigator: true,
  // }
  ignoreMomentLocale: true, // 忽略 moment 的 locale 文件，用于减少尺寸
  manifest: {
    basePath: '/',
  },
});
