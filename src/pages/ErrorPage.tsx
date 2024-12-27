import { Link } from 'react-router-dom';
import { Title } from '@/components/Title';

export function ErrorPage() {
  return (
    <>
      <Title>Oops! Something went wrong...</Title>
      <p><Link to="/">Go to main page</Link></p>
    </>
  );
}
