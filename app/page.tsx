import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getAlbums, liveList } from '@/lib/data';

export default function HomePage() {
  const albums = getAlbums();

  return (
    <div className="space-y-8">
      <section>
        <h2 className="font-title text-4xl tracking-wide">Albums</h2>
        <p className="mt-2 text-muted-foreground">
          朋友，{new Date().getFullYear()} 年了，这个世界还会好么？
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <Link href="/about">
          <Card className="group overflow-hidden border-2">
            <img
              src="/post/lizhi.jpeg"
              alt="我们不能失去信仰"
              className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <CardContent className="pt-4">
              <p className="font-medium">我们不能失去信仰 · 李志</p>
            </CardContent>
          </Card>
        </Link>

        {albums.map((album) => (
          <Link key={album.id} href={`/album/${encodeURIComponent(album.id)}`}>
            <Card className="group overflow-hidden">
              <img
                src={album.cover}
                alt={album.name}
                className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <CardContent className="flex items-center justify-between pt-4">
                <p className="truncate font-medium">{album.name}</p>
                <Badge variant="outline">{album.count} 首</Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>

      <section className="space-y-4">
        <h3 className="font-title text-3xl tracking-wide">Live</h3>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {liveList.map((live) => (
            <Link key={live.name} href="/video">
              <Card className="group overflow-hidden">
                <img
                  src={live.post}
                  alt={live.name}
                  className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <CardContent className="pt-4 text-sm">{live.name}</CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
