import { defineConfig } from 'umi';

export default defineConfig({
  title: '李志音乐播放器',
  favicons: ['/favicon.png'],
  hash: true,
  history: {
    type: 'hash',
  },
  routes: [
    { path: '/', component: 'index' },
    { path: '/about', component: 'about' },
    { path: '/download', component: 'download' },
    { path: '/star', component: 'star' },
    { path: '/video', component: 'video' },
    { path: '/album/:id', component: 'album/index' },
  ],
  metas: [
    {
      name: 'keywords',
      content: '李志，音乐作品集，专辑，播放器，逼哥，南京市民李先生，梵高先生',
    },
    {
      name: 'description',
      content: '全网最好的李志音乐作品播放器',
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
    'https://testingcf.jsdelivr.net/gh/nj-lizhi/song@main/audio/list-v2.js',
  ],

  fastRefresh: true,
  tailwindcss: {},
});
