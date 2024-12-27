import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Movie } from './pages/Movie';
import { MoviesPopular } from './pages/MoviesPopular';
import { MoviesSearch } from './pages/MoviesSearch';
import { ErrorPage } from './pages/ErrorPage';
import { Layout } from './components/Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'popular',
        element: <MoviesPopular />
      },
      {
        path: 'search/:query/',
        element: <MoviesSearch />
      },
      {
        path: '/:movieId',
        element: <Movie />
      },
      {
        path: '/error',
        element: <ErrorPage />
      },
    ]
  }
]);
