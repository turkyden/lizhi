import { useEffect, useRef, useState } from 'react';
import { Link } from 'umi';

const videoList = [
  {
    name: '2009-我爱南京跨年演唱会',
    url: 'https://gcore.jsdelivr.net/gh/nj-lizhi/kn-2009-wanj@main/video/playlist.m3u8',
  },
  {
    name: '2014-IO跨年演唱会',
    url: 'https://gcore.jsdelivr.net/gh/nj-lizhi/kn-2014-io@main/video/playlist.m3u8',
  },
  {
    name: '2015-看见北京站直播实录',
    url: 'https://gcore.jsdelivr.net/gh/nj-lizhi/kn-2015-kj@main/video/playlist.m3u8',
  },
  {
    name: '2018-洗心革面跨年演唱会',
    url: 'https://gcore.jsdelivr.net/gh/nj-lizhi/kn-2018-xxgm@main/video/playlist.m3u8',
  },
];

function Video() {
  const ref = useRef(null);

  const dp = useRef(null);

  const [index, setIndex] = useState(3);

  useEffect(() => {
    document.querySelector('.music-player-audio')?.pause();
    dp.current = new window.DPlayer({
      container: ref.current,
      autoplay: true,
      video: {
        url: videoList[index].url,
        type: 'hls',
        autoplay: true,
      },
    });
    //dp.current.template.menu.remove();
  }, []);

  const handleSelect = (index) => {
    setIndex(index);
    dp.current.switchVideo({ url: videoList[index].url });
    dp.current.play();
  };

  return (
    <>
      <Link
        className="fixed flex items-center group hover:text-white cursor-pointer text-white"
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
        <span className="pl-2">返回</span>
      </Link>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div>
          <div className="text-3xl font-bold pb-4">Live 现场</div>
          <div className="w-[800px] border-solid border-white/5 border shadow-xl">
            <div ref={ref}></div>
          </div>
          <div className="pt-10 flex flex-wrap">
            {videoList.map((v, k) => (
              <div
                key={k}
                className={`w-1/2 py-2 px-4 rounded-full cursor-pointer hover:text-green-500 hover:underline ${
                  index === k && 'text-green-500'
                }`}
                onClick={() => handleSelect(k)}
              >
                # {v.name}
              </div>
            ))}
          </div>
        </div>
        <style>
          {`.react-jinke-music-player-main{ display: none !important }`}
        </style>
      </div>
    </>
  );
}

export default Video;
