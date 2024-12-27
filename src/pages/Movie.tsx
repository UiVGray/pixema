import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchMovie } from '@/redux/movies-slice';
import { Article } from '@/components/Article';
import { RootState } from '@/redux/store';
import { useAppDispatch } from '@/hooks/hooks';

export function Movie() {
  const { movieId: movieIdParam } = useParams();
  const { data, isLoaded, error } = useSelector((state: RootState) => state.movies);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const movieId = String(movieIdParam) || '1';

  useEffect(() => {
    dispatch(fetchMovie(movieId));
  }, [movieId, dispatch]);

  if (!isLoaded) {
    return (
      <div>Loading...</div>
    );
  }

  if (error) {
    navigate('/error');
  }

  return data ? <Article {...data} /> : <div>No Movie Data Available</div>;
}
