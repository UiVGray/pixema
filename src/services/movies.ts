import { getMovie } from '@/utils/client';
import { moviesEndpoint, movieEndpoint, popularMoviesEndpoint, searchMoviesEndpoint } from '@/config/api';

export const requestMovies = async (page: string) => {
  try {
    const response = await getMovie(moviesEndpoint(page));

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      return {
        hasError: true,
        ...error
      };
    }
  }
}

export const requestMovie = async (movieId: string) => {
  try {
    const response = await getMovie(movieEndpoint(movieId));

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      return {
        hasError: true,
        ...error
      };
    }
  }
}

export const requestPopularMovies = async (page: string) => {
  try {
    const response = await getMovie(popularMoviesEndpoint(page));

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      return {
        hasError: true,
        ...error
      };
    }
  }
}

export const requestMoviesBySearch = async (page: string, query: string) => {
  try {
    const response = await getMovie(searchMoviesEndpoint(query, page));

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      return {
        hasError: true,
        ...error
      };
    }
  }
}