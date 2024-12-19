import { Menu } from './Menu';
import { User } from './User';
import { SearchForm } from './SearchForm';
import '@/styles/header.scss';

export function Header() {

  return (
    <header className="header">
      <div>
        <Menu />
      </div>
      <SearchForm />
      <div>
        <User />
      </div>
    </header>
  );
}
