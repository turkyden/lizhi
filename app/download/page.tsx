import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const clients = [
  {
    platform: 'MacOS',
    url: 'https://github.com/tw93/Pake/releases/latest/download/LiZhi.dmg',
  },
  {
    platform: 'Windows',
    url: 'https://github.com/tw93/Pake/releases/latest/download/LiZhi_x64.msi',
  },
  {
    platform: 'Linux',
    url: 'https://github.com/tw93/Pake/releases/latest/download/LiZhi_amd64.deb',
  },
];

export default function DownloadPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-title text-3xl tracking-wide">
          客户端下载
        </CardTitle>
        <CardDescription>请选择对应平台下载安装包。</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-3">
        {clients.map((item) => (
          <Card key={item.platform} className="border-dashed">
            <CardHeader>
              <CardTitle className="text-lg">{item.platform}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href={item.url} target="_blank">
                  下载
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
