export interface SongInfo {
  name: string;
  artist: string;
  url: string;
  cover: string;
}

export type SongList = SongInfo[];

export interface AlbumInfo {
  name: string;
  cover: string;
  year: number | null;
  publisher: string;
}

export interface LiveInfo {
  name: string;
  post: string;
  url: string;
}
