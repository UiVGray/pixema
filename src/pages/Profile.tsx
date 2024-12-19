import React from 'react';
import { IProfileProps } from '@/types/types';

export const Profile: React.FC<IProfileProps> = ({ initials, name }) => {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-5">
      <div
        className="w-14 h-14 bg-violet-500 rounded-xl grid place-items-center"
        aria-hidden="true"
      >
        <span className="text-xl font-bold tracking-wider text-white">
          {initials}
        </span>
      </div>
      <span className="font-semibold text-neutral-800">{name}</span>
    </div>
  );
};
