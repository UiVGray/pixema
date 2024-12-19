import React from 'react';
import { IMovieCardProps } from '@/types/types';

export const MovieCard: React.FC<IMovieCardProps> = ({
  title,
  rating,
  genres,
  imageUrl,
  alt,
}) => {
  const getRatingColor = (rating: number): string => {
    if (rating >= 7) return 'bg-green-600';
    if (rating >= 5) return 'bg-amber-500';

    return 'bg-orange-500';
  };

  return (
    <article className="grid grid-rows-[auto_1fr] h-full rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
      <div className="relative aspect-[0.745] overflow-hidden">
        <img
          loading="lazy"
          src={imageUrl}
          alt={alt || `Movie poster for ${title}`}
          className="object-cover w-full h-full"
        />
        <span
          className={`absolute top-4 left-4 ${getRatingColor(
            rating
          )} px-2 py-0.5 rounded-md text-white font-semibold`}
          aria-label={`Rating: ${rating} out of 10`}
        >
          {rating.toFixed(1)}
        </span>
      </div>
      <div className="grid grid-rows-[auto_1fr] gap-2 p-4">
        <h3 className="font-bold text-neutral-800 text-lg">{title}</h3>
        <div className="grid grid-flow-col auto-cols-max gap-2 items-start">
          {genres.map((genre, index) => (
            <span
              key={index}
              className="text-sm font-medium text-zinc-400 bg-zinc-50 px-2 py-1 rounded"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
