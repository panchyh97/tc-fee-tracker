'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
}

export const SidebarMenuItem = ({ path, icon, title }: Props) => {
  const currentPath = usePathname();

  return (
    <div className="flex flex-col">
      <div className="mt-auto">
        <Link href={path} passHref>
          <div className={`
            flex-shrink-0 w-full px-2 flex items-center py-2 hover:bg-white transition-all ease-linear duration-150
            ${currentPath === path ? 'bg-white text-blue-600' : 'text-gray-900'}
          `}>
            <div>
              {icon}
            </div>
            <span className={`ml-2 text-lg font-bold transition-all ease-linear duration-150 leading-5
                ${currentPath === path ? 'text-blue-600' : 'text-gray-900'}
              `}>{title}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
