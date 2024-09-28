import { ReactSVG } from 'react-svg';
import { Link } from 'umi';

import BackIcon from '@/assets/back.svg';

interface BackButtonProps {
  to: string;
}

function Back(props: BackButtonProps) {
  return (
    <Link
      className="mb-5 flex items-center group hover:text-white cursor-pointer text-white"
      to={props.to}
    >
      <ReactSVG
        src={BackIcon}
        className="h-4 w-4 transition transform group-hover:-translate-x-2"
      />
      <span className="pl-2">Back</span>
    </Link>
  );
}

export default Back;
