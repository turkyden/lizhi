import { useEffect, useRef, useState } from 'react';
import { Link } from 'umi';
import Hls from 'hls.js';

const videoList = [
  {
    name: '2009-我爱南京跨年演唱会',
    url: 'https://gcore.jsdelivr.net/gh/nj-lizhi/kn-2009-wanj@main/video/roadmap.js',
  },
  {
    name: '2014-IO跨年演唱会',
    url: 'https://gcore.jsdelivr.net/gh/nj-lizhi/kn-2014-io@main/video/roadmap.js',
  },
  {
    name: '2015-看见北京站直播实录',
    url: 'https://gcore.jsdelivr.net/gh/nj-lizhi/kn-2015-kj@main/video/roadmap.js',
  },
  {
    name: '2018-洗心革面跨年演唱会',
    url: 'https://gcore.jsdelivr.net/gh/nj-lizhi/kn-2018-xxgm@main/video/roadmap.js',
  },
];

function Video() {
  const ref = useRef<HTMLMediaElement>();

  const hls = useRef(null);

  const [index, setIndex] = useState(2);

  useEffect(() => {
    document.querySelector('.music-player-audio')?.pause();
    const video = ref.current;
    const videoSrc = videoList[index].url;
    if (Hls.isSupported()) {
      hls.current = new Hls();
      hls.current.loadSource(videoSrc);
      hls.current.attachMedia(video);
    } else if (video?.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
    }
  }, []);

  const handleSelect = (index) => {
    setIndex(index);
    hls.current.loadSource(videoList[index].url);
    hls.current.attachMedia(ref.current);
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
        <span className="pl-2">Back</span>
      </Link>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div>
          {/* <div className="text-3xl font-bold pb-4">Live 现场</div> */}
          <div className="w-[800px] border-solid border-white/5 border shadow-xl">
            <video
              className="w-full"
              controls
              autoplay="autoplay"
              ref={ref}
            ></video>
          </div>
          <div className="pt-10 grid grid-cols-2 gap-2">
            {videoList.map((v, k) => (
              <div
                key={k}
                className={`col-span-1 py-2 bg-white/10 px-4 cursor-pointer hover:bg-white/20 transition ${
                  index === k && 'text-green-500'
                }`}
                onClick={() => handleSelect(k)}
              >
                VOL . {v.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
