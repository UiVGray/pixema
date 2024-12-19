import { getMovie } from '@/utils/client';
import { moviesEndpoint, movieEndpoint } from '@/config/api';

export const requestMovies = async (params = {}) => {
  try {
    const response = await getMovie(moviesEndpoint, { params });

    return response.data;
  } catch (error) {
    return {
      hasError: true,
      ...error
    };
  }
}

export const requestMovie = async (movieId) => {
  try {
    const response = await getMovie(movieEndpoint(movieId));

    return response.data;
  } catch (error) {
    return {
      hasError: true,
      ...error
    };
  }
}