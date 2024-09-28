import Back from '@/components/back';
import PlayerContext from '@/contexts/playerContext';
import type { SongInfo, SongList } from '@/types';
import { useContext, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useParams } from 'umi';

import DownloadIcon from '@/assets/download.svg';
import LoadingIcon from '@/assets/loading.svg';
import LargePlayIcon from '@/assets/play-large.svg';
import PlayIcon from '@/assets/play.svg';

interface ISong {
  artist: string;
  cover: string;
  name: string;
  url: string;
}

export default function () {
  const [currDownloadingName, setcurrDownloadingName] = useState('');
  const { player, songList } = useContext(PlayerContext);
  const params = useParams();
  const artist = params.id as string;

  const albumList = (window as unknown as { list: SongList }).list?.filter(
    (v) => v.artist === artist,
  );

  if (!albumList) return <></>;

  const onClick = (info: SongInfo) => {
    if (!player || !player.playByIndex) return;

    for (let i = 0; i < songList.length; i++) {
      if (songList[i].url === info.url) {
        player.playByIndex(i);
        return;
      }
    }
  };

  const handleDownload = async ({ name, url }: ISong) => {
    setcurrDownloadingName(name);
    try {
      let res = await fetch(url);
      let blob = await res.blob();
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style.display = 'none';
      // 使用获取到的blob对象创建的url
      const targetUrl = window.URL.createObjectURL(blob);
      a.href = targetUrl;
      // 指定下载的文件名
      a.download = name;
      a.click();
      document.body.removeChild(a);
      // 移除blob对象的url
      window.URL.revokeObjectURL(url);
    } catch (e) {
      alert(`下载音乐: "${name}" 失败`);
    }
    setcurrDownloadingName('');
  };
  return (
    <>
      <Back to="/" />

      <div className="flex">
        <img
          className="w-48 h-48 rounded-xl"
          src={albumList[0].cover}
          alt="cover"
        />
        <div className="pl-10 space-y-4">
          <h3 className="text-3xl text-white">{artist.replace('专辑-', '')}</h3>
          <div className="pt-4">李志</div>
          <div className="flex space-x-4">
            <span>2007-11-12 </span>
            <span>麦田音乐</span>
            <span>发行</span>
          </div>

          <div className="flex space-x-4 pt-4">
            <div
              onClick={() => onClick(albumList[0])}
              className="transition hover:text-white text-center py-2 px-6 rounded-full bg-green-500 text-white cursor-pointer hover:opacity-90 shadow-lg shadow-green-500/50 flex items-center"
            >
              <ReactSVG src={PlayIcon} className="h-4 w-4" />
              <span className="pl-2">播放全部</span>
            </div>
            {/* <div
              onClick={() => message.info('开发中！')}
              className="hidden hover:text-white text-center tracking-widest py-2 px-6 rounded-full border border-solid border-gray-500 hover:bg-gray-800 cursor-pointer items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="pl-2">收藏</span>
            </div> */}
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-10 pt-10">
        <div className="pb-2 cursor-pointer hover:text-green-500 text-green-500 border-0 border-solid border-b-2 border-green-500">
          歌曲 {albumList.length}
        </div>
        {/* <div
          className="hidden pb-2 cursor-not-allowed"
          onClick={() => message.info('开发中！')}
        >
          专辑信息
        </div>
        <div
          className="hidden pb-2 cursor-not-allowed"
          onClick={() => message.info('开发中！')}
        >
          评论
        </div> */}
      </div>

      <div className="pt-8">
        {albumList.map((a, i) => (
          <div
            className="flex items-center py-4 hover:bg-white/10 rounded-lg transition group"
            key={i}
          >
            <div
              className="w-3/5 pl-2 text-white group-hover:text-green-500 cursor-pointer"
              onClick={() => onClick(a)}
            >
              <span className="pr-4 text-gray-400">
                {i + 1 > 9 ? i + 1 : '0' + (i + 1)}
              </span>
              <span className="">{a.name}</span>
            </div>
            <div className="w-1/5 text-gray-500">李志</div>
            <div className="w-1/5 flex justify-center items-center space-x-8">
              <span
                className="cursor-pointer text-gray-500 hover:text-green-500 transition"
                onClick={() => onClick(a)}
              >
                <ReactSVG src={LargePlayIcon} className="w-6 h-6" />
              </span>
              <span
                className="cursor-pointer text-gray-500 hover:text-green-500 transition"
                onClick={() => handleDownload(a)}
              >
                {currDownloadingName && currDownloadingName === a.name ? (
                  <ReactSVG src={LoadingIcon} />
                ) : (
                  <ReactSVG
                    src={DownloadIcon}
                    className="cursor-pointer text-gray-500 hover:text-blue-500 w-6 h-6"
                  />
                )}
              </span>
            </div>
          </div>
        ))}
      </div>

      <br />
      <br />
    </>
  );
}
