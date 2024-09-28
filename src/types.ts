export interface SongInfo {
  name: string;
  artist: string;
  url: string;
  cover: string;
}

/** @see https://github.com/nj-lizhi/song/blob/main/audio/list-v2.js */
export type SongList = SongInfo[];
