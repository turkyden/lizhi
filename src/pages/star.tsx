import React from 'react';

function Star() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <img className="w-72" src="/qrcode/weixin.jpg" alt="qrcode" />
      <div className="pt-10">
        Tips: 打赏仅用于网站维护，并非购买资源所用，版权归【李志】所有。
      </div>
    </div>
  );
}

export default Star;
