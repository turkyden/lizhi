import { VideoPlayer } from '@/components/video-player';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function VideoPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-title text-3xl tracking-wide">
          Live 现场
        </CardTitle>
      </CardHeader>
      <CardContent>
        <VideoPlayer />
      </CardContent>
    </Card>
  );
}
