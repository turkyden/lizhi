'use client';

import Hls from 'hls.js';
import { useEffect, useRef, useState } from 'react';

import { liveList } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const current = liveList[activeIndex];

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(current.url);
      hls.attachMedia(video);
      hlsRef.current = hls;
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = current.url;
    }

    return () => {
      hlsRef.current?.destroy();
      hlsRef.current = null;
    };
  }, [activeIndex]);

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-xl border bg-black">
        <video
          ref={videoRef}
          controls
          autoPlay
          className="aspect-video w-full"
        />
      </div>
      <div className="grid gap-2 md:grid-cols-2">
        {liveList.map((item, idx) => (
          <Button
            key={item.name}
            variant={idx === activeIndex ? 'default' : 'outline'}
            className="justify-start"
            onClick={() => setActiveIndex(idx)}
          >
            VOL. {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
