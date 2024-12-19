import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '@/redux/movies-slice';
import { Article } from '@/components/Article';

export function Movie() {
  const { movieId } = useParams();
  const { data, isLoading, error } = useSelector(state => state.movies);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMovie(movieId));
  }, [movieId, dispatch]);

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  if (error) {
    navigate('/error');
  }

  return (
    <Article {...data} />
  );
}
