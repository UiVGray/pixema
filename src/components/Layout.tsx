import { Outlet } from 'react-router-dom';
import { Container } from './Container';
import { Header } from './Header';
import { Main } from './Main';
import '@/styles/layout.scss';

export function Layout() {

  return (
    <div className="layout">
      <Header />
      <Container>
        <Main>
          <Outlet />
        </Main>
      </Container>
    </div>
  );
}
