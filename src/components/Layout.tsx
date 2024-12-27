import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Menu } from './Menu';
import { Container } from './Container';
import { Main } from './Main';

export function Layout() {

  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-64">
        <Menu />
      </div>
      <div className="flex-1 overflow-y-auto dark:bg-black">
        <Header />
        <Container>
          <Main>
            <Outlet />
          </Main>
        </Container>
      </div>
    </div>
  );
}
