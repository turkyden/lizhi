import Link from 'next/link';
import { Music2 } from 'lucide-react';

import { SidebarNav } from '@/components/sidebar-nav';
import { PlayerBar } from '@/components/player-bar';

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 pb-40 pt-6 md:grid-cols-[280px_1fr] md:px-6">
        <aside className="md:sticky md:top-6 md:h-[calc(100vh-3rem)]">
          <div className="rounded-2xl border bg-card p-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-xl border p-2">
                <Music2 className="h-5 w-5" />
              </div>
              <div>
                <h1 className="font-serif text-2xl font-semibold">李志</h1>
                <p className="text-xs text-muted-foreground">
                  Music Archive Player
                </p>
              </div>
            </div>
            <SidebarNav />
            <Link
              href="https://github.com/turkyden/lizhi"
              target="_blank"
              className="mt-8 block rounded-lg border px-3 py-2 text-sm hover:bg-muted"
            >
              Github 仓库
            </Link>
          </div>
        </aside>
        <main>{children}</main>
      </div>
      <PlayerBar />
    </div>
  );
}
