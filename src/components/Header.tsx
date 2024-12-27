import { User } from './User';
import { SearchBar } from './SearchBar';

export function Header() {

  return (
    <header className="flex justify-between items-center sticky top-0 z-10 w-full h-16 bg-white dark:bg-black px-8 my-8">
      <SearchBar />
      <div>
        <User firstName={'Some'} lastName={'User'} />
      </div>
    </header>
  );
}
