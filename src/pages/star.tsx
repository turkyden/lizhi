import React from 'react';

function Star() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex items-center space-x-10">
        <img className="w-72" src="/qrcode/wxshop.jpeg" alt="qrcode" />
        <div className="space-y-10">
          <img
            className="w-48 shadow-xl rounded-lg"
            src="/qrcode/wxshop_qrcode.png"
            alt="qrcode"
          />
          <div className="space-y-2 bg-gray-50/10 rounded-xl p-4">
            <div className="w-full">
              感谢支持！<span className="text-green-500">微信小商店</span>
              ，赞助费将用于网站维护。
            </div>
            <div className="w-full">音乐版权归【李志先生】所有 ~</div>
            <div>
              只需买一张鼠标垫，即可成为{' '}
              <span className="text-yellow-500">VIP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Star;
