import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import ClientLayout from './client-layout';

export const metadata: Metadata = {
  title: '李志音乐播放器',
  description: '全网最好的李志音乐作品播放器',
  keywords: '李志，音乐作品集，专辑，播放器，逼哥，南京市民李先生，梵高先生',
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
        <Script
          src="https://testingcf.jsdelivr.net/gh/nj-lizhi/song@main/audio/list-v2.js"
          strategy="beforeInteractive"
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
