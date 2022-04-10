import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  headScripts: [
    'https://cdn.tailwindcss.com',
    `
    tailwind.config = {
      corePlugins: {
        preflight: false,
      }
    }
    `
  ],
  scripts: [
    'https://cdn.jsdelivr.net/gh/nj-lizhi/song@master/audio/list.js'
  ],
  fastRefresh: {},
});
