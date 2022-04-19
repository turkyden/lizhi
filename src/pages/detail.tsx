import { Link } from "umi";

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

export default function IndexPage() {

  return (
    <>
      <Link className="flex items-center mb-8 group hover:text-white cursor-pointer" to='/'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition transform group-hover:-translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="pl-2">返回</span>
      </Link>
      <div className='flex'>
        <img className='w-48 h-48 rounded-xl' src="https://www.lizhinb.com/wp-content/uploads/2022/01/p82667272.webp-150x150.jpg" alt="cover" />
        <div className="pl-10 flex flex-col justify-between">
          <h3 className="text-3xl text-white">梵高先生</h3>
          <div className="py-4">李志</div>
          <div className="flex space-x-4">
            <span>2007-11-12 </span>
            <span>麦田音乐</span>
            <span>发行</span>
          </div>

          <div className="flex space-x-4 pt-10">
            <div className="hover:text-white text-center tracking-widest py-2 px-6 rounded-full bg-gradient-to-r from-green-500 to-green-400 text-white cursor-pointer hover:opacity-90 transition shadow-lg shadow-green-500/50 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <span className="pl-2">播放全部</span>
            </div>
            <div className="hover:text-white text-center tracking-widest py-2 px-6 rounded-full border border-solid border-gray-500 hover:bg-gray-800 cursor-pointer flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="pl-2">收藏</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-10 pt-10">
        <div className="pb-2 cursor-pointer hover:text-green-500 text-green-500 border-0 border-solid border-b-2 border-green-500">歌曲 {ALBUM.length}</div>
        <div className="pb-2 cursor-pointer hover:text-green-500">专辑信息</div>
        <div className="pb-2 cursor-pointer hover:text-green-500">评论</div>
      </div>

      <div className="">
        <div className="flex py-4">
          <div className="w-3/5 text-gray-500 text-xs pl-2">歌曲</div>
          <div className="w-1/5 text-gray-500 text-xs">歌手</div>
          <div className="w-1/5 text-gray-500 text-xs pl-10">操作</div>
        </div>
        {
          ALBUM.map((a, i) => (
            <div className="flex py-4 hover:bg-white/5">
              <div className="w-3/5 pl-2">
                <span className="pr-4">{(i + 1) > 9 ? (i+1) : ('0' + (i + 1))}</span>
                <span>{a.title}</span>
              </div>
              <div className="w-1/5">李志</div>
              <div className="w-1/5 flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer text-gray-500 hover:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer text-gray-500 hover:text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer text-gray-500 hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </div>
          ))
        }
      </div>

      <br />
      <br />
    </>
  );
}
