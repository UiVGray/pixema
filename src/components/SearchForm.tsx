import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '@/styles/search-form.scss';

export function SearchForm() {
  const { query: queryParam } = useParams();
  const [query, setQuery] = useState(queryParam || '');
  const navigate = useNavigate();

  const handleChangeInput = (event) => {
    setQuery(event.target.value);
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (query) {
      const encodedQuery = encodeURIComponent(query);
      navigate(`/posts/search/${encodedQuery}/1`);
    }
  }

  return (
    <form className="search-form d-flex align-items-center" onSubmit={handleSubmitForm}>
      <input type="search" className="form-control me-2 h-50" placeholder="Search..."
        value={query} onChange={handleChangeInput} />
      <button className="btn" type="submit">Search</button>
    </form>
  );
}
