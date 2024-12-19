import { createBrowserRouter } from 'react-router-dom';
import { Movie } from './pages/Movie';
import { Profile } from './pages/Profile';
import { Home } from './pages/Home';
import { Layout } from './components/Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/:movieId',
        element: <Movie />
      },
      {
        path: '/profile',
        element: <Profile />,
      }
    ]
  }
]);
