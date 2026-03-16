import albumInfoList from '@/src/assets/albumInfo.json';
import songs from '@/src/assets/nj-lizhi.json';
import type { AlbumInfo, LiveInfo, SongInfo } from '@/lib/types';

export const songList = songs as SongInfo[];
export const albumMeta = albumInfoList as AlbumInfo[];

export const liveList: LiveInfo[] = [
  {
    name: '2009-我爱南京跨年演唱会',
    post: '/post/我爱南京-封面.jpg',
    url: 'https://testingcf.jsdelivr.net/gh/nj-lizhi/kn-2009-wanj@main/video/roadmap.js',
  },
  {
    name: '2014-IO跨年演唱会',
    post: '/post/io-封面.jpg',
    url: 'https://testingcf.jsdelivr.net/gh/nj-lizhi/kn-2014-io@main/video/roadmap.js',
  },
  {
    name: '2015-看见北京站直播实录',
    post: '/post/2015看见.png',
    url: 'https://testingcf.jsdelivr.net/gh/nj-lizhi/kn-2015-kj@main/video/roadmap.js',
  },
  {
    name: '2018-洗心革面跨年演唱会',
    post: '/post/洗心革面.png',
    url: 'https://testingcf.jsdelivr.net/gh/nj-lizhi/kn-2018-xxgm@main/video/roadmap.js',
  },
];

export function getAlbums() {
  const grouped = new Map<string, SongInfo[]>();
  for (const song of songList) {
    const key = song.artist;
    const list = grouped.get(key) ?? [];
    list.push(song);
    grouped.set(key, list);
  }

  return Array.from(grouped.entries())
    .map(([id, list]) => ({
      id,
      name: id.replace('专辑-', ''),
      cover: list[0]?.cover ?? '',
      count: list.length,
    }))
    .sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'));
}

export function getAlbumSongs(albumId: string) {
  return songList.filter((song) => song.artist === albumId);
}

export function getAlbumInfo(name: string) {
  return albumMeta.find((item) => item.name === name) ?? null;
}
