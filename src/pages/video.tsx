import Back from '@/components/back';
import PlayerContext from '@/contexts/playerContext';
import Hls from 'hls.js';
import { useContext, useEffect, useRef, useState } from 'react';

const videoList = [
  {
    name: '2009-我爱南京跨年演唱会',
    url: 'https://testingcf.jsdelivr.net/gh/nj-lizhi/kn-2009-wanj@main/video/roadmap.js',
  },
  {
    name: '2014-IO跨年演唱会',
    url: 'https://testingcf.jsdelivr.net/gh/nj-lizhi/kn-2014-io@main/video/roadmap.js',
  },
  {
    name: '2015-看见北京站直播实录',
    url: 'https://testingcf.jsdelivr.net/gh/nj-lizhi/kn-2015-kj@main/video/roadmap.js',
  },
  {
    name: '2018-洗心革面跨年演唱会',
    url: 'https://testingcf.jsdelivr.net/gh/nj-lizhi/kn-2018-xxgm@main/video/roadmap.js',
  },
];

function Video() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hls = useRef<Hls | null>(null);
  const { player } = useContext(PlayerContext);

  const [index, setIndex] = useState(2);

  useEffect(() => {
    if (!videoRef.current) return;

    player?.pause();
    const video = videoRef.current;
    const videoSrc = videoList[index].url;

    if (Hls.isSupported()) {
      hls.current = new Hls();
      hls.current.loadSource(videoSrc);
      hls.current.attachMedia(video);
    } else if (video?.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
    }
  }, []);

  const handleSelect = (index: number) => {
    if (!hls.current || !videoRef.current) return;

    setIndex(index);
    hls.current.loadSource(videoList[index].url);
    hls.current.attachMedia(videoRef.current);
  };

  return (
    <>
      <Back to="/" />

      <div className="w-full h-full flex flex-col justify-center items-center">
        <div>
          {/* <div className="text-3xl font-bold pb-4">Live 现场</div> */}
          <div className="w-[800px] border-solid border-white/5 border shadow-xl">
            <video className="w-full" controls autoPlay ref={videoRef}></video>
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
