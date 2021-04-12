import { defineConfig } from 'umi';

const { REACT_APP_ENV } = process.env;

const ENV: string = REACT_APP_ENV || 'prod';

const api = {
  dev: 'http://google.com',
  test: 'http://baidu.com',
  // prod: 'http://alibaba.com',
  prod: '',
};

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
  ignoreMomentLocale: true, // 忽略 moment 的 locale 文件，用于减少尺寸
  manifest: {
    basePath: '/',
  },
  define: {
    API_URL: api[ENV],
  },
});
