import { defineConfig } from 'umi';

export default defineConfig({
  title: '李志 BB 音乐作品播放器',
  nodeModulesTransform: {
    type: 'none',
  },
  favicon: '/favico.png',
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
    `
    if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
      window.alert('暂不支持移动端，请用电脑装逼！');
    }
    `,
    'https://gcore.jsdelivr.net/gh/nj-lizhi/song@main/audio/list-v1.js',
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
  ],
  fastRefresh: {},
});
