import { NavLink } from 'react-router-dom';
import { useDarkMode } from '@/config/contexts/darkMode'
import HomeIcon from '@/assets/icons/home-icon.svg?react';
import TrendsIcon from '@/assets/icons/trends-icon.svg?react';

export function Menu() {

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`flex ${darkMode ? "dark" : ""}`}>
      <aside className="sticky top-16 h-screen">
        <nav
          className="flex flex-col gap-20 h-full w-64 p-8 border-r border-zinc-100 bg-white dark:border-zinc-700 dark:bg-black"
          aria-label="Main navigation"
        >
          <div className="flex justify-center text-5xl font-extrabold">
            <span className="text-violet-600">pix</span>
            <span className="text-black dark:text-white">ema</span>
          </div>
          <ul className="flex flex-col gap-4">
            <li>
              <NavLink className="flex items-center gap-5 p-3 rounded-lg transition-colors text-zinc-500 dark:text-white hover:bg-zinc-50 dark:hover:text-violet-500 aria-[current=page]:text-violet-500 aria-[current=page]:bg-violet-50" to="/">
                <HomeIcon className="fill-current hover:fill-violet-500" />
                <span className="font-semibold">Main Page</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-center gap-5 p-3 rounded-lg transition-colors text-zinc-500 dark:text-white hover:bg-zinc-50 dark:hover:text-violet-500 aria-[current=page]:text-violet-500 aria-[current=page]:bg-violet-50" to="/popular">
                <TrendsIcon className="fill-current hover:fill-violet-500" />
                <span className="font-semibold">Trends</span>
              </NavLink>
            </li>
          </ul>

          <footer className="flex flex-col justify-center gap-8 mt-auto pt-8 text-center">
            <button
              className="bg-black text-white hover:bg-zinc-50 hover:text-violet-500 dark:bg-zinc-50 dark:text-violet-500 dark:hover:bg-black dark:hover:text-white border rounded-lg font-bold p-3 transition-duration-300"
              onClick={toggleDarkMode}
            >
              {darkMode ? 'Light' : 'Dark'}
            </button>
            <small className="text-zinc-400 dark:text-white">© All Rights Reserved</small>
          </footer>
        </nav>
      </aside>
    </div>
  );
}
