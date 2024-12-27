import { Outlet } from 'react-router-dom';
import { MoviesList } from '@/components/MoviesList';

export function Home() {

  return (
    <>
      <MoviesList />
      <Outlet />
    </>
  );
}