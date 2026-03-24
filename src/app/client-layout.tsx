'use client';

import GithubLink from '@/components/githubLink';
import SidebarItem from '@/components/sidebarItem';
import PlayerContext from '@/contexts/playerContext';
import type { SongList } from '@/types';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useEffect, useRef, useState } from 'react';
import 'react-cmdk/dist/cmdk.css';
import CommandPalette, {
  filterItems,
  getItemIndex,
  useHandleOpenCommandPalette,
} from 'react-cmdk';
import ReactJkMusicPlayer, {
  type ReactJkMusicPlayerAudioListProps,
  type ReactJkMusicPlayerInstance,
  type ReactJkMusicPlayerProps,
} from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import Script from 'next/script';

import ZhuangB from '@/assets/lizhi.png';
import Image from 'next/image';

type WindowWithList = Window & { list?: SongList };

function getWindowSongList(): SongList {
  return (window as WindowWithList).list ?? [];
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState<'root' | 'albums'>('root');
  const [songList, setSongList] = useState<SongList>([]);
  const [showDownload, setShowDownload] = useState(true);
  const playerInstance = useRef<ReactJkMusicPlayerInstance | null>(null);

  useHandleOpenCommandPalette(setOpen);

  // Called when the external song list script has finished loading
  const handleScriptLoad = () => {
    setSongList(getWindowSongList());
  };

  useEffect(() => {
    setShowDownload(!window.location.href.includes('from=pake'));
    // Handle case where the script loaded before this component mounted
    setSongList(getWindowSongList());
  }, []);

  useEffect(() => {
    const panel = document.querySelector('.music-player-panel');
    const audioPanel = document.querySelector('.audio-lists-panel');
    if (panel) panel.classList.add('backdrop-blur-md');
    if (audioPanel) audioPanel.classList.add('backdrop-blur-md');
  }, [songList]);

  const audioLists: ReactJkMusicPlayerAudioListProps[] = songList.map((v) => ({
    name: `${v.name} · ${v.artist}`.replace('专辑-', ''),
    musicSrc: v.url,
    cover: v.cover,
    singer: '李志',
  }));

  const options: ReactJkMusicPlayerProps = {
    audioLists,
    theme: 'dark',
    locale: 'zh_CN',
    showMediaSession: false,
    autoPlay: false,
    toggleMode: false,
    mode: 'full',
    showLyric: false,
    showThemeSwitch: false,
    showReload: false,
    showDownload: showDownload,
  };

  const filteredItems = filterItems(
    [
      {
        heading: 'Home',
        id: 'home',
        items: [
          {
            id: 'home',
            children: '首页',
            icon: 'HomeIcon',
            href: '/',
          },
          {
            id: 'live',
            children: '现场',
            icon: 'SunIcon',
            href: '/video',
          },
          {
            id: 'albums',
            children: '专辑',
            icon: 'MapIcon',
            closeOnSelect: false,
            onClick: () => {
              setPage('albums');
            },
          },
        ],
      },
      {
        heading: 'Other',
        id: 'advanced',
        items: [
          {
            id: 'developer',
            children: '参与贡献',
            icon: 'CodeBracketIcon',
            target: '_blank',
            href: 'https://github.com/turkyden/lizhi-app',
          },
        ],
      },
    ],
    search,
  );

  return (
    <div className="w-screen h-screen bg-black text-white pl-64">
      <Script
        src="https://testingcf.jsdelivr.net/gh/nj-lizhi/song@main/audio/list-v2.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
      <SpeedInsights />
      <Analytics />
      <div className="fixed top-0 left-0 w-64 h-screen p-10 pb-0 flex flex-col justify-between">
        <div>
          <h2 className="text-white text-3xl mb-4 font-bold">李志</h2>

          <div
            onClick={() => setOpen(true)}
            className="bg-gray-900 mb-4 relative pointer-events-auto cursor-pointer"
          >
            <div className="w-full flex items-center text-sm leading-6 text-gray-400 rounded-md ring-1 ring-gray-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-gray-600 bg-gray-800 highlight-white/5 hover:bg-gray-700">
              <svg
                width="24"
                height="24"
                fill="none"
                aria-hidden="true"
                className="mr-3 flex-none"
              >
                <path
                  d="m19 19-3.5-3.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <circle
                  cx="11"
                  cy="11"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></circle>
              </svg>
              Search...
              <span className="ml-auto pl-3 flex-none text-xs font-semibold">
                ⌘K
              </span>
            </div>
          </div>

          <h3 className="text-gray-500 text-sm py-1"></h3>
          <div className="space-y-4">
            <SidebarItem emoji="💿" text="专辑" to="/" />
            <SidebarItem emoji="🔥" text="Live" to="/video" />
            <SidebarItem emoji="🧑" text="自传" to="/about" />
            <SidebarItem emoji="📦" text="APP" to="/download" />
            <SidebarItem emoji="🌟" text="赞助" to="/star" />
          </div>
        </div>

        <Image
          className="w-36 opacity-50"
          src={ZhuangB}
          alt=""
          width={144}
          height={144}
        />
      </div>

      <div className="w-[100% - 256px] h-screen overflow-y-auto px-8 py-10">
        <PlayerContext.Provider
          value={{ player: playerInstance.current, songList }}
        >
          {children}
        </PlayerContext.Provider>
      </div>

      {audioLists.length > 0 && (
        <ReactJkMusicPlayer
          {...options}
          getAudioInstance={(instance) => {
            playerInstance.current = instance;
          }}
        />
      )}

      <GithubLink />

      <CommandPalette
        onChangeSearch={setSearch}
        onChangeOpen={setOpen}
        search={search}
        isOpen={open}
        page={page}
      >
        <CommandPalette.Page id="root">
          {filteredItems.length ? (
            filteredItems.map((list) => (
              <CommandPalette.List key={list.id} heading={list.heading}>
                {list.items.map(({ id, ...rest }) => (
                  <CommandPalette.ListItem
                    key={id}
                    index={getItemIndex(filteredItems, id)}
                    {...rest}
                  />
                ))}
              </CommandPalette.List>
            ))
          ) : (
            <CommandPalette.FreeSearchAction />
          )}
        </CommandPalette.Page>

        <CommandPalette.Page id="albums">
          <CommandPalette.FreeSearchAction />
        </CommandPalette.Page>
      </CommandPalette>
    </div>
  );
}
