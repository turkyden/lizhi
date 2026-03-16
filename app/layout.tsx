import type { Metadata } from 'next';
import { Bebas_Neue, Noto_Serif_SC } from 'next/font/google';

import { AppShell } from '@/components/app-shell';
import { PlayerProvider } from '@/components/player-provider';

import './globals.css';

const titleFont = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-title',
});

const bodyFont = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: '李志 · BB',
  description: '李志音乐作品在线播放器，Next.js + Shadcn + TailwindCSS 重构版',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${titleFont.variable} ${bodyFont.variable} font-body`}>
        <PlayerProvider>
          <AppShell>{children}</AppShell>
        </PlayerProvider>
      </body>
    </html>
  );
}
