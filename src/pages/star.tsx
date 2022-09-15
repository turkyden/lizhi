import React from 'react';

function Star() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <img className="w-72" src="/qrcode/weixin.jpg" alt="qrcode" />
      <div className="py-10">
        感谢支持！打赏仅用于网站维护，并非购买音乐费用，版权归【李志先生】所有。
      </div>
      <a href="https://reporoster.com/stars/turkyden/lizhi-app" target="_blank">
        <img
          src="https://github.com/turkyden/lizhi-app/stargazers"
          alt="stars"
        />
      </a>
    </div>
  );
}

export default Star;
