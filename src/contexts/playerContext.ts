import type { SongList } from '@/types';
import React from 'react';
import type { ReactJkMusicPlayerInstance } from 'react-jinke-music-player';

interface PlayerContextType {
  player: ReactJkMusicPlayerInstance | null;
  songList: SongList;
}

const PlayerContext = React.createContext<PlayerContextType>(undefined!);

export default PlayerContext;
