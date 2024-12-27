export const baseMovieURL: string = 'https://api.kinopoisk.dev';
export const moviesEndpoint = (page: string) => {
  return `/v1.4/movie?page=${page}&limit=10&selectFields=id&selectFields=name&selectFields=rating&selectFields=poster&selectFields=year&selectFields=genres&notNullFields=name&notNullFields=poster.url&notNullFields=genres.name&notNullFields=year&notNullFields=rating.imdb&sortField=year&sortType=-1&year=2000-2024&rating.imdb=8-10`;
};
export const movieEndpoint = (movieId: string) => {
  return '/v1.4/movie/' + `${movieId}`;
};
export const popularMoviesEndpoint = (page: string) => {
  return `/v1.4/movie?page=${page}&limit=10&selectFields=id&selectFields=name&selectFields=rating&selectFields=poster&selectFields=year&selectFields=genres&notNullFields=name&notNullFields=poster.url&notNullFields=genres.name&notNullFields=year&notNullFields=rating.imdb&sortField=rating.imdb&sortType=-1&year=2022-2024&rating.imdb=8-10`;
};
export const searchMoviesEndpoint = (encodedQuery: string, page: string) => {
  return `/v1.4/movie/search?page=${page}&limit=10&query=` + `${encodedQuery}`;
};

