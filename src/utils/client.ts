import axios from 'axios';
import { baseMovieURL } from '@/config/api';

const movieClient = axios.create({
  baseURL: baseMovieURL,
  timeout: 2000,
  headers: {
    'accept': 'application/json',
    'X-API-KEY': 'MPSTCGY-85V4K2Q-Q8N9R4D-AC7Q47P'
  }
});

const getMovie = movieClient.get;

export { getMovie };
