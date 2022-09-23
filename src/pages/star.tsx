import React from 'react';

function Star() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <img className="w-72" src="/qrcode/weixin.jpg" alt="qrcode" />
      <div className="py-10">
        感谢支持！打赏仅用于网站开发与维护，并非购买音乐资源，版权归【李志先生】所有。
      </div>
      <a
        href="https://github.com/turkyden/lizhi-app/stargazers"
        target="_blank"
      >
        <img
          src="https://reporoster.com/stars/turkyden/lizhi-app"
          alt="stars"
        />
      </a>
    </div>
  );
}

export default Star;
