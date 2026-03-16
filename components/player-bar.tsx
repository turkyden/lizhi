'use client';

import { Pause, Play, SkipBack, SkipForward, Volume2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { usePlayer } from '@/components/player-provider';

function formatDuration(time: number) {
  if (!time || Number.isNaN(time)) {
    return '00:00';
  }
  const minute = Math.floor(time / 60)
    .toString()
    .padStart(2, '0');
  const second = Math.floor(time % 60)
    .toString()
    .padStart(2, '0');
  return `${minute}:${second}`;
}

export function PlayerBar() {
  const {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,
    togglePlay,
    next,
    prev,
    seekTo,
    setVolume,
  } = usePlayer();

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-background/95 backdrop-blur">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-4 md:grid-cols-[1.4fr_1fr] md:px-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">
                {currentSong?.name ?? '请选择歌曲'}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                {(currentSong?.artist ?? '专辑').replace('专辑-', '')}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <Button size="icon" variant="ghost" onClick={prev}>
                <SkipBack />
              </Button>
              <Button size="icon" onClick={togglePlay}>
                {isPlaying ? <Pause /> : <Play />}
              </Button>
              <Button size="icon" variant="ghost" onClick={next}>
                <SkipForward />
              </Button>
            </div>
          </div>
          <div className="space-y-1">
            <Slider
              min={0}
              max={duration || 1}
              step={1}
              value={[Math.min(currentTime, duration || 0)]}
              onValueChange={(value) => seekTo(value[0] ?? 0)}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatDuration(currentTime)}</span>
              <span>{formatDuration(duration)}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 md:justify-end">
          <Volume2 className="h-4 w-4 text-muted-foreground" />
          <div className="w-full md:w-44">
            <Slider
              min={0}
              max={1}
              step={0.01}
              value={[volume]}
              onValueChange={(value) => setVolume(value[0] ?? 0.8)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
