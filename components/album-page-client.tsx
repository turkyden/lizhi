'use client';

import Link from 'next/link';
import { Download, Play } from 'lucide-react';

import { usePlayer } from '@/components/player-provider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getAlbumInfo, getAlbumSongs } from '@/lib/data';

async function downloadSong(name: string, url: string) {
  const res = await fetch(url);
  const blob = await res.blob();
  const a = document.createElement('a');
  const targetUrl = window.URL.createObjectURL(blob);
  a.href = targetUrl;
  a.download = `${name}.mp3`;
  a.click();
  window.URL.revokeObjectURL(targetUrl);
}

export function AlbumPageClient({ albumId }: { albumId: string }) {
  const songs = getAlbumSongs(albumId);
  const info = getAlbumInfo(albumId.replace('专辑-', ''));
  const { playBySong } = usePlayer();

  if (!songs.length) {
    return (
      <Card>
        <CardContent className="p-8 text-center text-muted-foreground">
          未找到对应专辑。
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Link href="/" className="text-sm text-muted-foreground hover:underline">
        ← 返回首页
      </Link>

      <Card>
        <CardContent className="grid gap-6 p-6 md:grid-cols-[220px_1fr]">
          <img
            src={songs[0].cover}
            alt={albumId}
            className="h-56 w-full rounded-lg object-cover"
          />
          <div className="space-y-3">
            <h1 className="font-title text-4xl tracking-wide">
              {albumId.replace('专辑-', '')}
            </h1>
            <div className="flex flex-wrap items-center gap-2">
              <Badge>李志</Badge>
              <Badge variant="outline">{info?.year ?? '未知年份'}</Badge>
              <Badge variant="outline">{info?.publisher || '独立发行'}</Badge>
            </div>
            <Button onClick={() => playBySong(songs[0])}>
              <Play className="h-4 w-4" />
              播放该专辑
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>歌曲列表 · {songs.length} 首</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="space-y-1 p-3">
          {songs.map((song, index) => (
            <div
              key={song.url}
              className="flex items-center justify-between rounded-md px-3 py-2 transition hover:bg-muted"
            >
              <button
                type="button"
                className="flex flex-1 items-center gap-4 text-left"
                onClick={() => playBySong(song)}
              >
                <span className="w-7 text-sm text-muted-foreground">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <span className="truncate">{song.name}</span>
              </button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => void downloadSong(song.name, song.url)}
              >
                <Download className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
