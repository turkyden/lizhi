import { Link, useLocation } from 'umi';

interface SidebarItemProps {
  emoji: string;
  text: string;
  to: string;
}

function SidebarItem(props: SidebarItemProps) {
  const location = useLocation();

  return (
    <Link
      to={props.to}
      className={`block text-white hover:text-white transition py-1 px-4 rounded hover:bg-gray-800 cursor-pointer ${
        ((props.to === '/' && location.pathname === '/') ||
          (props.to !== '/' && location.pathname.startsWith(props.to))) &&
        '!bg-green-500 shadow shadow-green-500/50'
      }`}
    >
      {props.emoji}
      <span className="pl-4">{props.text}</span>
    </Link>
  );
}

export default SidebarItem;
