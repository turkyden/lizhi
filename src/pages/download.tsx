import DownloadButton from '@/components/downloadButton';

function Download() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex items-center space-x-10">
        <DownloadButton
          platform="MacOS"
          url="https://github.com/tw93/Pake/releases/download/V2.5.1/LiZhi.dmg"
        />
        <DownloadButton
          platform="Windows"
          url="https://github.com/tw93/Pake/releases/download/V2.5.1/LiZhi_x64.msi"
        />
        <DownloadButton
          platform="Linux"
          url="https://github.com/tw93/Pake/releases/download/V2.5.1/LiZhi_x86_64.deb"
        />
      </div>

      <div className="pt-10">
        Tips：请选择对应的平台下载<span className="text-green-500">客户端</span>
        应用
      </div>
    </div>
  );
}

export default Download;
