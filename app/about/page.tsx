import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-title text-3xl tracking-wide">
          我们不能失去信仰
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm leading-7 text-muted-foreground">
        <p>
          这个站点收录了李志音乐作品与现场视频，数据来自公开互联网资源，仅用于音乐传播与学习交流。
        </p>
        <p>
          如果你会前端开发，可以基于同样的曲库资源继续 DIY
          自己的播放器；如果你是听众，希望这些歌在某个夜晚也能陪你走一段路。
        </p>
        <p>
          感谢所有贡献者对项目的维护，也感谢每一位在评论区、Issue 或 PR
          里留下痕迹的人。
        </p>
      </CardContent>
    </Card>
  );
}
