import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  favicon: './favico.ico',
  hash: true,
  history: {
    type: 'hash',
  },
  headScripts: [
    'https://cdn.tailwindcss.com',
    'https://cdn.jsdelivr.net/gh/nj-lizhi/song@main/audio/list.js',
    'https://gcore.jsdelivr.net/npm/hls.js@0.14.4/dist/hls.min.js',
    'https://gcore.jsdelivr.net/npm/dplayer@1.26.0/dist/DPlayer.min.js',
    `
    const groupBy = (arr, fn) =>
      arr
        .map(typeof fn === 'function' ? fn : val => val[fn])
        .reduce((acc, val, i) => {
          acc[val] = (acc[val] || []).concat(arr[i]);
          return acc;
        }, {});
    const obj = groupBy(window.list, 'artist');
    window.album = Object.keys(obj).map(a => ({
      id: a,
      name: a.replace('专辑-', ''),
      cover: obj[a][1]['cover']
    }));
    `,
    // `
    // tailwind.config = {
    //   corePlugins: {
    //     preflight: false,
    //   }
    // }
    //`
  ],
  scripts: [],
  fastRefresh: {},
});
