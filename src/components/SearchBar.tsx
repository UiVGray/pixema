import React from 'react';
import { ISearchBarProps } from '@/types/types';

export const SearchBar: React.FC<ISearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-[1fr_auto] items-center gap-4 px-5 py-4 bg-white rounded-xl border-2 border-zinc-400"
    >
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search movies"
        className="bg-transparent border-none outline-none text-base font-medium text-zinc-500 w-full"
        aria-label="Search movies"
      />
      <button
        type="submit"
        aria-label="Submit search"
        className="p-1 hover:bg-zinc-50 rounded-full"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8dbb3b4770c3ffbd12e73af798e2f88e5f6955f1dc6efb19a363179bb3e26df1?placeholderIfAbsent=true&apiKey=e6d98c8a7a6c4cd0b0ae8df6a16a0252"
          alt=""
          aria-hidden="true"
          className="w-6 h-6"
        />
      </button>
    </form>
  );
};
