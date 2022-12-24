import { Link } from 'umi';
import { message } from 'antd';
import { useState } from 'react';

const ALBUM = [
  {
    title: '被禁忌的游戏',
  },
  {
    title: '这个世界会好吗',
  },
  {
    title: '梵高先生',
  },
  {
    title: '我爱南京',
  },
  {
    title: '你好，郑州',
  },
  {
    title: '1701',
  },
  {
    title: 'F',
  },
  {
    title: '这个世界会好吗',
  },
  {
    title: '8',
  },
  {
    title: '在每一条伤心的应天大街上',
  },
];

interface ISong {
  artist: string;
  cover: string;
  name: string;
  url: string;
}

interface ISongList extends Array<ISong> {}

export default function (props) {
  const [currDownloadingName, setcurrDownloadingName] = useState('');
  const artist = props.match.params.id;

  const albumList = window.list.filter((v) => v.artist === artist);

  const onClick = (name: string) => {
    const array = document.querySelectorAll('.audio-item');
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      const target = element.querySelector('.player-name');
      if (target?.title.includes(name)) {
        target.click();
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
      <Link
        className="flex items-center mb-8 group text-white hover:text-white cursor-pointer"
        to="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 transition transform group-hover:-translate-x-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span className="pl-2">Back</span>
      </Link>
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
              onClick={() => onClick(albumList[0].name)}
              className="transition hover:text-white text-center py-2 px-6 rounded-full bg-green-500 text-white cursor-pointer hover:opacity-90 shadow-lg shadow-green-500/50 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="pl-2">播放全部</span>
            </div>
            <div
              onClick={() => message.info('开发中！')}
              className="hidden hover:text-white text-center tracking-widest py-2 px-6 rounded-full border border-solid border-gray-500 hover:bg-gray-800 cursor-pointer flex items-center"
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
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-10 pt-10">
        <div className="pb-2 cursor-pointer hover:text-green-500 text-green-500 border-0 border-solid border-b-2 border-green-500">
          歌曲 {albumList.length}
        </div>
        <div
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
        </div>
      </div>

      <div className="pt-8">
        {albumList.map((a, i) => (
          <div className="flex items-center py-4 hover:bg-white/10 rounded-lg transition group">
            <div
              className="w-3/5 pl-2 text-white group-hover:text-green-500 cursor-pointer"
              onClick={() => onClick(a.name)}
            >
              <span className="pr-4">{i + 1 > 9 ? i + 1 : '0' + (i + 1)}</span>
              <span className="">{a.name}</span>
            </div>
            <div className="w-1/5 text-gray-500">李志</div>
            <div className="w-1/5 flex justify-center items-center space-x-8">
              <span
                className="cursor-pointer text-gray-500 hover:text-green-500 transition"
                onClick={() => onClick(a.name)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                </svg>
              </span>
              <span
                className="cursor-pointer text-gray-500 hover:text-green-500 transition"
                onClick={() => handleDownload(a)}
              >
                {currDownloadingName && currDownloadingName === a.name ? (
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="svg_1"
                      d="m10.94421,2.45149c-4.59532,0 -8.32084,3.72552 -8.32084,8.32084l1.81176,0c0,-3.59458 2.91405,-6.50907 6.50907,-6.50907l0,-1.81176z"
                      fill="#FF6700"
                    >
                      <animateTransform
                        attributeType="xml"
                        attributeName="transform"
                        type="rotate"
                        from="0 10 10"
                        to="360 10 10"
                        dur="0.6s"
                        repeatCount="indefinite"
                      ></animateTransform>
                    </path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer text-gray-500 hover:text-blue-500 w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
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
