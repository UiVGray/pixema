import React from 'react';
import { MovieCard } from './MovieCard';
import { NavigationItem } from './NavigationItem';
import { SearchBar } from './SearchBar';
import { Profile } from '@/pages/Profile';
import { ReactComponent as HomeIcon } from '@/assets/home-icon.svg';
import { ReactComponent as TrendsIcon } from '@/assets/trends-icon.svg';
import { ReactComponent as FavoritesIcon } from '@/assets/favorites-icon.svg';
import { ReactComponent as SettingsIcon } from '@/assets/settings-icon.svg';

const movieData = [
  {
    title: 'Wonder Woman: 1984',
    rating: 7.6,
    genres: ['Adventure', 'Action', 'Fantasy'],
    imageUrl: '',
  },
  {
    title: 'Star Wars: The Rise of Skywalker',
    rating: 8.2,
    genres: ['Action', 'Fantasy', 'Fiction'],
    imageUrl: '',
  },
];

const navigationItems = [
  {
    icon: <HomeIcon />,
    label: 'Home',
    isActive: true,
  },
  {
    icon: <TrendsIcon />,
    label: 'Trends',
  },
  {
    icon: <FavoritesIcon />,
    label: 'Favorites',
  },
  {
    icon: <SettingsIcon />,
    label: 'Settings',
  },
];

export const MovieGallery: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  return (
    <div className="grid grid-cols-[auto_1fr] min-h-screen bg-white">
      <nav
        className="w-64 p-8 border-r border-zinc-100"
        aria-label="Main navigation"
      >
        <div className="grid gap-16">
          <div className="grid gap-x-1 text-2xl">
            <span className="text-violet-600">PIX</span>
            <span className="text-black">EMA</span>
          </div>
          <div className="grid gap-4">
            {navigationItems.map((item, index) => (
              <NavigationItem key={index} {...item} />
            ))}
          </div>
        </div>

        <footer className="mt-auto pt-8">
          <small className="text-zinc-400">© All Rights Reserved</small>
        </footer>
      </nav>

      <main className="p-8">
        <header className="grid grid-cols-[auto_1fr_auto] gap-8 items-center mb-12">
          <div className="w-96">
            <SearchBar onSearch={handleSearch} />
          </div>

          <div className="justify-self-end grid grid-cols-[auto_auto] items-center gap-8">
            <Profile initials="AL" name="Artem Lapitsky" />
            <button
              aria-label="Notifications"
              className="p-2 hover:bg-zinc-50 rounded-full"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f33193c3290630cc5135d61a9b1f2d8c4e5b51e23f3ecf67733d279499aa560c?placeholderIfAbsent=true&apiKey=e6d98c8a7a6c4cd0b0ae8df6a16a0252"
                alt=""
                aria-hidden="true"
                className="w-6 h-6"
              />
            </button>
          </div>
        </header>

        <section aria-label="Movie grid">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
            {movieData.map((movie, index) => (
              <MovieCard key={index} {...movie} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
