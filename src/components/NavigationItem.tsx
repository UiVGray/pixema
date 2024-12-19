import React from 'react';
import { INavigationItemProps } from '@/types/types';

export const NavigationItem: React.FC<INavigationItemProps> = ({
  icon,
  label,
  isActive = false,
}) => {

  return (
    <a
      href={`#${label.toLowerCase()}`}
      className={`
        grid grid-cols-[auto_1fr] items-center gap-5 p-3 rounded-lg transition-colors
        ${isActive
          ? "text-violet-500 bg-violet-50"
          : "text-zinc-500 hover:bg-zinc-50"
        }
      `}
      aria-current={isActive ? "page" : undefined}
    >
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        className="w-6 h-6 object-contain"
      />
      <span className="font-semibold">{label}</span>
    </a>
  );
};
