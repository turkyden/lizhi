'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: '专辑', emoji: '💿' },
  { href: '/video', label: 'Live', emoji: '🔥' },
  { href: '/about', label: '自传', emoji: '🧑' },
  { href: '/download', label: 'APP', emoji: '📦' },
  { href: '/star', label: '赞助', emoji: '🌟' },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="space-y-2">
      {navItems.map((item) => {
        const active =
          item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 rounded-lg border px-3 py-2 text-sm transition hover:bg-muted',
              active && 'bg-foreground text-background hover:bg-foreground/90',
            )}
          >
            <span>{item.emoji}</span>
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
