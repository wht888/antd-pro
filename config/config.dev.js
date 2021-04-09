import { defineConfig } from 'umi';
import { rest } from './defaultSettings';
export default defineConfig({
  ...rest,
  define: {
    'process.env.API_URL': 'http://google.com',
  },
});
