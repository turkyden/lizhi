import { useEffect, useState } from 'react';
import { Link } from 'umi';

const LIVE = [
  {
    title: '2014 IO 跨年音乐会',
    post: '/post/io-封面.jpg',
  },
  {
    title: '2015 看见·北京巡回',
    post: '/post/2015看见.png',
  },
  {
    title: '2016 北京不插电',
    post: '/post/2016-unplugged.png',
  },
  {
    title: '2019 洗心革面跨年',
    post: '/post/洗心革面.png',
  },
];

interface IAlbum {
  id: string;
  cover: string;
  name: string;
}

interface IAlbumList extends Array<IAlbum> {}

interface ISong {
  artist: string;
  cover: string;
  name: string;
  url: string;
}

interface ISongList extends Array<ISong> {}

export default function IndexPage() {
  return (
    <>
      <div className="text-3xl font-bold">专辑</div>
      <div className="text-xl py-4">Hi 朋友，今日为你推荐</div>

      <div className="flex flex-wrap">
        <Link className="mr-6 mb-8 hover:text-white text-white" to={`/about`}>
          <div className="block text-white w-[410px] h-48 rounded-xl overflow-hidden">
            {/* <video className='w-full' poster='https://www.lizhi334.com/wp-content/uploads/2022/08/lizhi-20-scaled.jpeg' loop muted autoPlay>
              <source src="https://www.lizhi334.com/wp-content/uploads/2022/03/%E9%A6%96%E9%A1%B5.mp4" type='video/mp4' />
            </video> */}
            <img
              className="object-cover w-full h-48 rounded-xl transition transform hover:scale-105 cursor-pointer"
              src="/post/lizhi.jpeg"
              alt="cover"
            />
          </div>
          <div className="pt-4">我们不能失去信仰 · 李志</div>
        </Link>
        {(window.album as IAlbumList).map((v, i) => (
          <Link
            className="mr-6 mb-8 hover:text-white text-white"
            key={v.id}
            to={`/album/${v.id}`}
          >
            <img
              className="w-48 h-48 rounded-xl transition transform hover:scale-105 cursor-pointer"
              src={v.cover}
              alt="cover"
            />
            <div className="pt-4">{v.name}</div>
          </Link>
        ))}
      </div>

      <br />

      <div className="text-3xl font-bold py-6">Live 现场</div>

      <div className="flex flex-wrap">
        {LIVE.map((v, i) => (
          <Link
            className="mr-6 mb-8 hover:text-white text-white"
            key={v.title}
            to="/video"
          >
            <img
              className="w-48 h-48 rounded-xl transition transform hover:scale-110 cursor-pointer"
              src={v.post}
              alt="cover"
            />
            <div className="pt-4">{v.title}</div>
          </Link>
        ))}
      </div>

      <br />
      <br />
    </>
  );
}
