'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { songList } from '@/lib/data';
import type { SongInfo } from '@/lib/types';

interface PlayerContextValue {
  playlist: SongInfo[];
  currentIndex: number;
  currentSong: SongInfo | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playBySong: (song: SongInfo) => void;
  playByIndex: (index: number) => void;
  togglePlay: () => void;
  next: () => void;
  prev: () => void;
  seekTo: (time: number) => void;
  setVolume: (value: number) => void;
}

const PlayerContext = createContext<PlayerContextValue | null>(null);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.8);

  const playlist = songList;

  useEffect(() => {
    audioRef.current = new Audio();
    const audio = audioRef.current;
    audio.preload = 'metadata';
    audio.volume = volume;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime || 0);
    const handleLoadedMetadata = () => setDuration(audio.duration || 0);
    const handleEnded = () => {
      setCurrentIndex((prev) => (prev + 1) % playlist.length);
      setIsPlaying(true);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audioRef.current = null;
    };
  }, [playlist.length, volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !playlist[currentIndex]) {
      return;
    }

    audio.src = playlist[currentIndex].url;
    audio.load();
    setCurrentTime(0);

    if (isPlaying) {
      void audio.play().catch(() => setIsPlaying(false));
    }
  }, [currentIndex, playlist, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (isPlaying) {
      void audio.play().catch(() => setIsPlaying(false));
      return;
    }

    audio.pause();
  }, [isPlaying]);

  const playByIndex = useCallback(
    (index: number) => {
      if (index < 0 || index >= playlist.length) {
        return;
      }
      setCurrentIndex(index);
      setIsPlaying(true);
    },
    [playlist.length],
  );

  const playBySong = useCallback(
    (song: SongInfo) => {
      const target = playlist.findIndex((item) => item.url === song.url);
      if (target >= 0) {
        playByIndex(target);
      }
    },
    [playByIndex, playlist],
  );

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  }, [playlist.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  }, [playlist.length]);

  const seekTo = useCallback((time: number) => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }
    audio.currentTime = time;
    setCurrentTime(time);
  }, []);

  const setVolume = useCallback((value: number) => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = value;
    }
    setVolumeState(value);
  }, []);

  const value = useMemo<PlayerContextValue>(
    () => ({
      playlist,
      currentIndex,
      currentSong: playlist[currentIndex] ?? null,
      isPlaying,
      currentTime,
      duration,
      volume,
      playBySong,
      playByIndex,
      togglePlay,
      next,
      prev,
      seekTo,
      setVolume,
    }),
    [
      playlist,
      currentIndex,
      isPlaying,
      currentTime,
      duration,
      volume,
      playBySong,
      playByIndex,
      togglePlay,
      next,
      prev,
      seekTo,
      setVolume,
    ],
  );

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within PlayerProvider');
  }
  return context;
}
