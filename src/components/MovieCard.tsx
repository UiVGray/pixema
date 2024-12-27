import { Link } from 'react-router-dom';
import { IMovieCardProps } from '@/types/types';
import poster from '@/assets/poster-blob.avif';

export function MovieCard(props: IMovieCardProps) {
  const getRatingColor = (props: IMovieCardProps): string => {
    if (props.rating.imdb >= 7) return 'bg-green-600';
    if (props.rating.imdb <= 4) return 'bg-red-600';

    return 'bg-orange-500';
  };

  return (
    <article className="grid grid-rows-[auto_1fr] relative h-full w-full rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] dark:shadow-zinc-500">
      <div className="relative w-72 h-96 overflow-hidden">
        <Link to={`/${props.id}`}>
          <img
            loading="lazy"
            src={props.poster?.url || poster}
            alt={`Movie poster for ${props.name}`}
            className="object-cover w-full h-full"
          />
          <span
            className={`absolute top-4 left-4 ${getRatingColor(props)} px-2 py-0.5 rounded-md text-white font-semibold`}
            aria-label={`Rating: ${props.rating} out of 10`}
          >
            {props.rating.imdb.toFixed(1)}
          </span>
        </Link>
      </div>
      <div className="grid grid-rows-[auto_1fr] gap-2 p-4">
        <h3 className="font-bold text-neutral-800 text-lg dark:text-zinc-300">{props.name}</h3>
        <div className="grid grid-flow-col auto-cols-max gap-2 items-start">
          {props.genres.map((genre, index) => (
            <span
              key={index}
              className="text-sm font-medium text-zinc-400 bg-zinc-50 px-2 py-1 rounded dark:text-black"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
