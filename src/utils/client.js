import axios from 'axios';
import { baseMovieURL } from '@/config/api';

const movieClient = axios.create({
  baseMovieURL,
  timeout: 2000,
  withCredentials: false
});

const getMovie = movieClient.get;

export { getMovie };
