function Star() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex items-center space-x-10">
        <img className="w-72" src="/qrcode/wxshop.png" alt="qrcode" />
        <div className="space-y-10">
          <div className="p-10 shadow-xl bg-gradient-to-r from-gray-900 to-black border-4 border-solid border-gray-500 rounded-full inline-block">
            <img
              className="w-36 shadow-2xl rounded-full animate-spin"
              src="https://testingcf.jsdelivr.net/gh/nj-lizhi/song@main/audio/梵高先生/cover.png"
              alt="qrcode"
            />
          </div>
          <div className="space-y-2 bg-gray-50/10 rounded-xl p-4">
            <div>
              送你一本李先生的{' '}
              <a
                className="text-pink-500 hover:text-pink-500 hover:underline"
                href="https://mp.weixin.qq.com/s/C4deDOeFzvR5l9Hbg4f5Gg"
                target="_blank"
              >
                《吉他谱》
              </a>
            </div>
            <div>
              如果你也玩
              <span className="text-yellow-500">「吉他」</span>
            </div>
            <div className="w-full">
              扫码<span className="text-green-500">关注我</span>交流学习
              ，赞助费仅用于网站维护
            </div>
            <div className="w-full">音乐版权归【李志先生】所有 ~</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Star;
