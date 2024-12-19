import React from 'react';
import { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '@/redux/movies-slice';

export function MoviesList(props: React.ReactNode) {
  const { currentPage } = useParams();
  const { list: movies, isLoaded, error, pageCount, ordering } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies({ currentPage }));
  }, [dispatch, currentPage, ordering]);

  const buildSchemePagination = (currentPage, pageCount) => {
    const prevPageNumber = +currentPage - 1;
    const nextPageNumber = +currentPage + 1;
    const scheme = [1, prevPageNumber, +currentPage, nextPageNumber, pageCount];
    const filteredScheme = scheme.filter(item => item > 0 && item <= pageCount);
    const set = new Set(filteredScheme);
    const result = Array.from(set);

    if (result[0] + 1 !== result[1]) result.splice(1, 0, '...');
    if (result.at(-2) + 1 !== result.at(-1)) result.splice(result.length - 1, 0, '...');

    return result;
  }

  const renderPaginationItems = () => {
    const scheme = buildSchemePagination(currentPage, pageCount);

    return scheme.map((item, index) => {
      return (
        <li className="page-item" key={index}>
          {item == '...' ?
            <span className="page-link">...</span> :
            <NavLink className="page-link" to={`/posts/${props.filter}/${item}`}>{item}</NavLink>
          }
        </li>
      );
    });
  }

  const renderCards = (card, filterCallback) => {
    switch (card) {
      case 'small': {
        return filterCallback ?
          posts
            .filter(filterCallback)
            .map(post => <CardSmall key={post.id} {...post} />) :
          posts
            .map(post => <CardSmall key={post.id} {...post} />);
      }

      case 'large': {
        return filterCallback ?
          posts
            .filter(filterCallback)
            .map(post => <CardLarge key={post.id} {...post} />) :
          posts
            .map(post => <CardLarge key={post.id} {...post} />);
      }

      default:
        return filterCallback ?
          posts
            .filter(filterCallback)
            .map(post => <CardNormal key={post.id} {...post} />) :
          posts
            .map(post => <CardNormal key={post.id} {...post} />);
    }
  };

  const renderSelectedCards = (filter, card) => {
    switch (filter) {
      case 'all': return renderCards(card);

      case 'favorite': return renderCards(card, post => post.isFavorite == true);

      case 'popular': return renderCards(card, post => post.rating >= 50);

      case 'my-posts': return renderCards(card);
    }
  };

  const renderPagination = () => {
    return (
      <nav>
        <ul className="pagination">
          {renderPaginationItems()}
        </ul>
      </nav>
    )
  }

  if (isLoaded) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (movies.length == 0) {
    return <div>Internal server error, please try again later</div>;
  }

  return (
    <>
      <div className="d-flex flex-column flex-wrap gap-5">{renderSelectedCards(props.filter, props.card)}</div>
      {renderPagination()}
    </>
  );
}
