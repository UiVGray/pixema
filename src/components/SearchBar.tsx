import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import FilterIcon from '@/assets/icons/filter-icon.svg?react';

export function SearchBar() {
  const { query: queryParam } = useParams();
  const [query, setQuery] = useState(queryParam || '');
  const navigate = useNavigate();
  const location = useLocation();


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (query) {
      const encodedQuery = encodeURIComponent(query);
      navigate(`/search/${encodedQuery}`);
    }
  };

  return (
    <form
      className="flex items-center gap-4 px-5 py-4 bg-white rounded-xl border-2 border-zinc-400 h-14 w-4/5"
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        value={query}
        className="bg-transparent border-none outline-none text-base font-medium text-zinc-500 w-full"
        placeholder="Search movies"
        aria-label="Search movies"
        onChange={handleChange}
      />
      {location.pathname.includes('/search/') && (
        <button
          type="button"
          aria-label="Filters"
          className="p-1 hover:bg-zinc-50 rounded-full"
        >
          <FilterIcon />
        </button>
      )}
    </form>
  );
};
