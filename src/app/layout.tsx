import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from './client-layout';

export const metadata: Metadata = {
  title: '李志音乐播放器',
  description: '全网最好的李志音乐作品播放器',
  keywords: ['李志', '音乐作品集', '专辑', '播放器', '逼哥', '南京市民李先生', '梵高先生'],
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
