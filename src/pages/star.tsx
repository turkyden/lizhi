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
              感谢支持！赞助仅用于网站维护，并非购买音乐费用。
            </div>
            <div className="w-full">音乐版权归【李志先生】所有！</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Star;
