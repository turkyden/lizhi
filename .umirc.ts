import { defineConfig } from 'umi';

export default defineConfig({
  title: '李志(逼哥)音乐作品专属播放器',
  nodeModulesTransform: {
    type: 'none',
  },
  favicon: './favico.ico',
  hash: true,
  history: {
    type: 'hash',
  },
  metas: [
    {
      name: 'keywords',
      content: '李志，逼哥，南京市民李先生，音乐作品集，专辑，播放器',
    },
    {
      name: 'description',
      content: '全网最好用的李志(逼哥)音乐作品专属播放器',
    },
  ],
  analytics: {
    baidu: '023e4ef604935de6708edb9e61f17191',
  },
  scripts: [
    'https://cdn.jsdelivr.net/gh/nj-lizhi/song@main/audio/list.js',
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
    'https://gcore.jsdelivr.net/npm/hls.js@0.14.4/dist/hls.min.js',
    'https://gcore.jsdelivr.net/npm/dplayer@1.26.0/dist/DPlayer.min.js',
  ],
  fastRefresh: {},
});
