import { Link } from 'umi'

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
      <div className='text-3xl font-bold'>Live 现场</div>
      <div className='text-xl pt-6 pb-4'>Hi 逼粉，今日为你推荐</div>

      <div className='flex'>
        <div className='mr-6'>
          <div className='w-[410px] h-48 rounded-xl overflow-hidden'>
            <video className='w-full' loop muted autoPlay>
              <source src="https://www.lizhinb.com/wp-content/uploads/2022/03/%E9%A6%96%E9%A1%B5.mp4" type='video/mp4' />
            </video>
          </div>
          <div className='pt-4'>我们不能失去信仰 · 李志</div>
        </div>
        {
          LIVE.map((v, i) => (
            <Link className='mr-6 mb-8 hover:text-white' to="/detail">
              <img className='w-48 h-48 rounded-xl transition transform hover:scale-110 cursor-pointer' src={v.post} alt="cover" />
              <div className='pt-4'>{v.title}</div>
            </Link>
          ))
        }
      </div>

      <br />


      <div className='text-3xl font-bold pb-6'>专辑</div>

      <div className='flex flex-wrap'>
        {
          ALBUM.map((v, i) => (
            <Link className='mr-6 mb-8 hover:text-white' to="/detail">
              <img className='w-48 h-48 rounded-xl transition transform hover:scale-110 cursor-pointer' src={v.post} alt="cover" />
              <div className='pt-4'>{v.title}</div>
            </Link>
          ))
        }
      </div>

      <br />
      <br />
    </>
  );
}
