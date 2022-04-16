import { useState } from 'react'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import './index.css'

const LIVE = [
  {
    title: '2009 我爱南京',
    post: 'https://www.lizhinb.com/wp-content/uploads/2022/01/%E6%88%91%E7%88%B1%E5%8D%97%E4%BA%AC-%E5%B0%81%E9%9D%A2-150x150.jpg'
  },
  {
    title: '2014 IO 跨年音乐会',
    post: 'https://www.lizhinb.com/wp-content/uploads/2022/01/Cover-150x150.jpg'
  },
  {
    title: '2015 看见·北京巡回',
    post: 'https://www.lizhinb.com/wp-content/uploads/2022/01/2015%E7%9C%8B%E8%A7%81-150x150.png'
  },
  {
    title: '2019 洗心革面跨年',
    post: 'https://www.lizhinb.com/wp-content/uploads/2022/01/%E6%B4%97%E5%BF%83%E9%9D%A9%E9%9D%A2-150x150.png'
  },
]

const ALBUM = [
  {
    title: '被禁忌的游戏',
    post: 'https://www.lizhinb.com/wp-content/uploads/2022/01/%E8%A2%AB%E7%A6%81%E5%BF%8C%E7%9A%84%E6%B8%B8%E6%88%8F%E5%B0%81%E9%9D%A2-150x150.jpg'
  },
  {
    title: '这个世界会好吗',
    post: 'https://www.lizhinb.com/wp-content/uploads/2022/01/p82667254.webp-150x150.jpg'
  },
  {
    title: '梵高先生',
    post: 'https://www.lizhinb.com/wp-content/uploads/2022/01/p82667272.webp-150x150.jpg'
  },
  {
    title: '我爱南京',
    post: 'https://www.lizhinb.com/wp-content/uploads/2022/01/%E6%88%91%E7%88%B1%E5%8D%97%E4%BA%AC-%E5%B0%81%E9%9D%A2-150x150.jpg'
  },
  {
    title: '你好，郑州',
    post: 'https://www.lizhinb.com/wp-content/uploads/2022/01/%E4%BD%A0%E5%A5%BD%E9%83%91%E5%B7%9E-%E5%B0%81%E9%9D%A2-150x150.jpg'
  },
  {
    title: '1701',
    post: 'https://www.lizhinb.com/wp-content/uploads/2022/01/p82667259.webp-150x150.jpg'
  },
  {
    title: 'F',
    post: 'https://www.lizhinb.com/wp-content/uploads/2022/01/p82667270.webp-150x150.jpg'
  },
  {
    title: '这个世界会好吗',
    post: 'https://www.lizhinb.com/wp-content/uploads/2022/01/%E8%BF%99%E4%B8%AA%E4%B8%96%E7%95%8C%E4%BC%9A%E5%A5%BD%E5%90%97-%E3%80%8A%E9%97%AF%E5%85%A5%E8%80%85-Red-Amnesia%E3%80%8B%E7%94%B5%E5%BD%B1%E5%AE%A3%E4%BC%A0%E6%9B%B2-150x150.jpg'
  },
  {
    title: '8',
    post: 'https://www.lizhinb.com/wp-content/uploads/2022/01/%E6%9D%8E%E5%BF%97-%E6%95%B0%E9%B8%AD%E5%AD%90-mp3-image-150x150.png'
  },
  {
    title: '在每一条伤心的应天大街上',
    post: 'https://www.lizhinb.com/wp-content/uploads/2022/01/2016-150x150.jpg'
  },
]

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
    theme: 'dark',
    locale: 'zh_CN',
    showMediaSession: true,
    autoPlay: true,
    toggleMode: false,
    mode: 'full',
    showLyric: true,
    className: 'backdrop-blur-md'
  }

  return (
    <div className='w-screen h-screen bg-black text-white pl-64'>
      <div className='fixed top-0 left-0 w-64 h-screen p-10 pb-0 flex flex-col justify-between'>

        <div>
          <h2 className='text-white text-3xl'>李志</h2>
          <p className='text-lg pt-2'>南京市民李先生 · B 哥</p>

          <h3 className='text-gray-500 text-sm'>所有作品</h3>
          <ul className='p-0 m-0 list-none py-2 space-y-2'>
            <li className='py-1 px-4 rounded hover:bg-gray-500 bg-gradient-to-t from-green-800 to-green-500 text-white cursor-pointer'>🔢<span className='pl-2'>全部</span></li>
            <li className='py-1 px-4 rounded hover:bg-gray-500 cursor-pointer'>💿<span className='pl-2'>专辑</span></li>
            <li className='py-1 px-4 rounded hover:bg-gray-500 cursor-pointer'>⚡<span className='pl-2'>Live</span></li>
          </ul>

          <br />

          <h3 className='text-gray-500 text-sm'>我的歌单</h3>
          <ul className='p-0 m-0 list-none py-2'>
            <li className='py-1 px-4 rounded hover:bg-gray-500 cursor-pointer'>🧡<span className='pl-2'>收藏</span></li>
          </ul>
        </div>

        <img className='w-36 opacity-50' src={require('@/assets/lizhi.png')} alt="" />
      </div>
      <div className='w-[100% - 256px] h-screen overflow-y-auto p-10'>
      
        <div className='text-3xl font-bold'>Live 现场</div>
        <div className='text-xl pt-6 pb-4'>Hi 逼粉，今日为你推荐</div>

        <div className='flex'>
          <div className='mr-6'>
            <div className='w-[410px] h-48 rounded-xl overflow-hidden'>
              <video className='w-full' loop muted autoPlay>
                <source src="https://www.lizhinb.com/wp-content/uploads/2022/03/%E9%A6%96%E9%A1%B5.mp4" type='video/mp4' />
              </video>
            </div>
            <div className='py-2'>我们不能失去信仰 · 李志</div>
          </div>
          {
            LIVE.map((v, i) => (
              <div className='mr-6 mb-8'>
                <img className='w-48 h-48 rounded-xl transition transform hover:scale-105 cursor-pointer' src={v.post} alt="cover" />
                <div className='py-2'>{v.title}</div>
              </div>
            ))
          }
        </div>

        <br />


        <div className='text-3xl font-bold pb-6'>专辑</div>

        <div className='flex flex-wrap'>
          {
            ALBUM.map((v, i) => (
              <div className='mr-6 mb-8'>
                <img className='w-48 h-48 rounded-xl transition transform hover:scale-105 cursor-pointer' src={v.post} alt="cover" />
                <div className='py-2'>{v.title}</div>
              </div>
            ))
          }
        </div>

        <br />
        <br />
      </div>
      <ReactJkMusicPlayer {...options} />
      <a id="github-link" style={{
        position: 'absolute',
        top: 0,
        right: 0,
        color: 'white'
      }} href="https://github.com/turkyden/lizhi-app" title="Follow me on GitHub" aria-label="Follow me on GitHub" rel="noopener" target="_blank">
        <svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true">
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{ transformOrigin: "130px 106px"}} className="octo-arm"></path>
          <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor"></path>
        </svg>
      </a>
    </div>
  );
}
