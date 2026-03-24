'use client';

import BackIcon from '@/assets/back.svg';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';

interface BackButtonProps {
  to: string;
}

function Back(props: BackButtonProps) {
  return (
    <Link
      className="mb-5 flex items-center group hover:text-white cursor-pointer text-white"
      href={props.to}
    >
      <ReactSVG
        src={BackIcon}
        className="h-4 w-4 transition transform group-hover:-translate-x-2"
      />
      <span className="pl-2">返回</span>
    </Link>
  );
}

export default Back;
