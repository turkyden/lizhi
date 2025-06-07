import GithubLink from '@/components/githubLink';
import SidebarItem from '@/components/sidebarItem';
import PlayerContext from '@/contexts/playerContext';
import type { SongList } from '@/types';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useEffect, useRef, useState } from 'react';
import 'react-cmdk/dist/cmdk.css';
import CommandPalette, {
  filterItems,
  getItemIndex,
  useHandleOpenCommandPalette,
} from 'react-cmdk/src/index';
import ReactJkMusicPlayer, {
  type ReactJkMusicPlayerAudioListProps,
  type ReactJkMusicPlayerInstance,
  type ReactJkMusicPlayerProps,
} from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import { useLocation, useOutlet } from 'umi';
import './index.css';

import ZhuangB from '@/assets/lizhi.png';

const songList = (window as unknown as { list: SongList }).list || [];

const audioLists: ReactJkMusicPlayerAudioListProps[] = songList.map((v) => {
  return {
    name: `${v.name} · ${v.artist}`.replace('专辑-', ''),
    musicSrc: v.url,
    cover: v.cover,
    singer: '李志',
  };
});

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
  showDownload: !window.location.href.includes('from=pake'),
};

export default function Layout() {
  const [active, setActive] = useState('all');

  const [page, setPage] = useState<'root' | 'albums'>('root');
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState('');
  const playerInstance = useRef<ReactJkMusicPlayerInstance | null>(null);
  const location = useLocation();
  const outlet = useOutlet();

  useHandleOpenCommandPalette(setOpen);

  useEffect(() => {
    // @ts-ignore
    document
      .querySelector('.music-player-panel')
      .classList.add('backdrop-blur-md');
    // @ts-ignore
    document
      .querySelector('.audio-lists-panel')
      .classList.add('backdrop-blur-md');
  }, []);

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
            href: '/#/video',
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
          // {
          //   id: 'star',
          //   children: '赞助我们',
          //   icon: 'StarIcon',
          //   href: '/#/star',
          // },
        ],
      },
    ],
    search,
  );

  return (
    <div className="w-screen h-screen bg-black text-white pl-64">
      <SpeedInsights />
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

          {/* <br />

          <h3 className="text-gray-500 text-sm mt-8 mb-4">友情赞助</h3>
          <div className="space-y-2">
            <SidebarItem emoji='🧡' text='好物' to='/star'/>
          </div> */}
        </div>

        <img className="w-36 opacity-50" src={ZhuangB} alt="" />
      </div>

      <div className="w-[100% - 256px] h-screen overflow-y-auto px-8 py-10">
        <PlayerContext.Provider
          value={{ player: playerInstance.current, songList }}
        >
          {outlet}
        </PlayerContext.Provider>
      </div>
      <ReactJkMusicPlayer
        {...options}
        getAudioInstance={(instance) => {
          playerInstance.current = instance;
        }}
      />

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
          {/* Projects page */}
          <CommandPalette.FreeSearchAction />
        </CommandPalette.Page>
      </CommandPalette>
    </div>
  );
}
