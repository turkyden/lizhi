import { useState } from 'react'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import './index.css'

const audioLists = window.list?.map(v => {
  return {
    name: `${v.name} · ${v.artist}`.replace('专辑-', ''),
    musicSrc: v.url,
    cover: v.cover,
    singer: '李志'
  }
})

export default function IndexPage() {

  const options = {
    audioLists,
    theme: 'light',
    locale: 'zh_CN',
    showMediaSession: true,
    autoPlay: true,
    toggleMode: false,
    mode: 'full',
    showLyric: true
  }

  return (
    <div className='w-screen h-screen pl-64'>
      <div className='fixed top-0 left-0 w-64 bg-gray-100 h-full p-10'>
        <h2 className=''>李志</h2>
        <p>南京市民李先生 · B 哥</p>

        <h3>所有作品</h3>
        <ul className='p-0 m-0 list-none py-2 space-y-2'>
          <li className='py-1 px-4 rounded hover:bg-gray-200 bg-gradient-to-t from-green-600 to-green-400 text-white cursor-pointer'>🔢<span className='pl-2'>全部</span></li>
          <li className='py-1 px-4 rounded hover:bg-gray-200 cursor-pointer'>💿<span className='pl-2'>专辑</span></li>
          <li className='py-1 px-4 rounded hover:bg-gray-200 cursor-pointer'>⚡<span className='pl-2'>Live</span></li>
        </ul>

        <br />

        <h3>我的歌单</h3>
        <ul className='p-0 m-0 list-none py-2'>
          <li className='py-1 px-4 rounded hover:bg-gray-200 cursor-pointer'>🧡<span className='pl-2'>收藏</span></li>
        </ul>
      </div>
      <div className='w-[100% - 256px] h-full bg-gray-50 flex flex-col justify-center items-center'>
        <img className='w-64 h-64 shadow-2xl' src={require('@/assets/bg.jpeg')} alt="cover" />
      </div>
      <ReactJkMusicPlayer {...options} />,
    </div>
  );
}
