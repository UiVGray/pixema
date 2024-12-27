import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchPopularMovies } from '@/redux/movies-slice';
import { MovieCard } from './MovieCard';
import { RootState } from '@/redux/store';
import { useAppDispatch } from '@/hooks/hooks';
import { useInfiniteScroll } from '@/hooks/hooks';
import { IMovieCardProps } from '@/types/types';

export function PopularMoviesList() {
  const { listPopular: fetchedMovies, isLoaded, error } = useSelector((state: RootState) => state.movies);
  const dispatch = useAppDispatch();
  const [movies, setMovies] = useState<IMovieCardProps[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [hasFetchedPage1, setHasFetchedPage1] = useState(false);

  const loadMovies = () => {
    if (hasMore && !loading) {
      setLoading(true);
      dispatch(fetchPopularMovies(page.toString()));
    }
  };

  const { loadMoreRef } = useInfiniteScroll(loadMovies, hasMore, loading);

  useEffect(() => {
    if (page == 1 && !hasFetchedPage1) {
      loadMovies();
      setHasFetchedPage1(true);
    }
  }, [page, hasFetchedPage1]);

  const handleFetchSuccess = (newMovies: IMovieCardProps[]) => {
    if (newMovies.length > 0) {
      setMovies((prevMovies) => {
        const uniqueMovies = [
          ...prevMovies,
          ...newMovies.filter((movie) => !prevMovies.some((prevMovie) => prevMovie.id === movie.id)),
        ];
        return uniqueMovies;
      });

      setLoading(false);
      if (newMovies.length < 10) {
        setHasMore(false);
      } else {
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    if (fetchedMovies.length > 0) {
      handleFetchSuccess(fetchedMovies);
    }
  }, [fetchedMovies]);

  const renderCards = () => {
    return movies.map(movie => <MovieCard key={movie.id} {...movie} />);
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!movies || movies.length === 0) {
    return <div>Internal server error, please try again later</div>;
  }

  return (
    <>
      <section aria-label="Movie grid" className="overflow-y-auto h-[calc(100vh-100px)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {renderCards()}
        </div>
        {hasMore && (
          <div ref={loadMoreRef} className="text-center py-4 cursor-pointer">
            Load More...
          </div>
        )}
      </section>
    </>
  );
}
