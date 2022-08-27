import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  favicon: './favico.ico',
  hash: true,
  history: {
    type: 'hash'
  },
  headScripts: [
    'https://cdn.tailwindcss.com',
    // `
    // tailwind.config = {
    //   corePlugins: {
    //     preflight: false,
    //   }
    // }
    //`
  ],
  scripts: [
    'https://cdn.jsdelivr.net/gh/nj-lizhi/song@main/audio/list.js'
  ],
  fastRefresh: {},
});
