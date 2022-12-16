import React from 'react';

function Star() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex items-center space-x-10">
        <img className="w-72" src="/qrcode/wxshop.jpeg" alt="qrcode" />
        <div className="space-y-10">
          <div className="p-10 shadow-xl bg-gradient-to-r from-gray-900 to-black border-4 border-solid border-gray-500 rounded-full inline-block">
            <img
              className="w-36 shadow-2xl rounded-full"
              src="/qrcode/wxshop_qrcode.png"
              alt="qrcode"
            />
          </div>
          <div className="space-y-2 bg-gray-50/10 rounded-xl p-4">
            <div>
              送你一本李志{' '}
              <a
                className="text-pink-500 hover:text-pink-500 hover:underline"
                href="https://pan.baidu.com/s/17LHv_8gI_Ee5RJqnzSuYIg?pwd=c8af"
                target="_blank"
              >
                《吉他谱》
              </a>
            </div>
            <div>
              只需买一张鼠标垫，即可一起
              <span className="text-yellow-500">「装逼」</span>
            </div>
            <div className="w-full">
              扫码<span className="text-green-500">微信小商店</span>下单
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
