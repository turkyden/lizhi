import LinuxIcon from '@/assets/linux.svg';
import MacOSIcon from '@/assets/mac.svg';
import WindowsIcon from '@/assets/windows.svg';
import type { ReactElement } from 'react';
import { ReactSVG } from 'react-svg';

const platformMap: Map<string, ReactElement> = new Map([
  ['MacOS', <ReactSVG src={MacOSIcon} className="*:w-[40px] *:h-[40px]" />],
  ['Windows', <ReactSVG src={WindowsIcon} />],
  ['Linux', <ReactSVG src={LinuxIcon} />],
]);

interface DownloadButtonProps {
  platform: 'MacOS' | 'Windows' | 'Linux';
  url: string;
}

function DownloadButton(props: DownloadButtonProps) {
  return (
    <a
      href={props.url}
      className="text-white hover:text-green-500 w-48 h-48 bg-white/5 hover:bg-white/10 cursor-pointer transition rounded-full flex flex-col items-center justify-center space-y-4"
    >
      {platformMap.get(props.platform)}
      <div>{props.platform}</div>
    </a>
  );
}

export default DownloadButton;
