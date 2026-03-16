import { AlbumPageClient } from '@/components/album-page-client';

export default async function AlbumPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const albumId = decodeURIComponent(id);

  return <AlbumPageClient albumId={albumId} />;
}
