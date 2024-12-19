import { Outlet, NavLink, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Title } from '@/components/Title';
import { fetchMovies } from '@/redux/movies-slice';

export function Home() {

  const { ordering } = useSelector(state => state.movies);
  const { query } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeSelectOption = (event) => {
    dispatch(fetchMovies({ currentPage: 1, ordering: event.target.value }));

    location.pathname.includes('/search/') ?
      navigate(`/search/${query}/1/?ordering=${ordering}`) :
      navigate(`/posts/all/1/?ordering=${ordering}`);
  }

  if (location.pathname.includes('/search/')) {
    return (
      <>
        <Title>Blog | Posts | Search</Title>
        <div className="d-flex justify-content-between align-items-center gap-3 text-truncate fs-5">
          <label htmlFor="order-select" className="pb-3">Order by:</label>
          <select name="order-select" id="orderSelect" className="form-select fs-5 mb-3"
            onChange={handleChangeSelectOption}>
            <option value="date">Date</option>
            <option value="title">Title</option>
            <option value="text">Text</option>
            <option value="lesson_num">Lesson Number</option>
          </select>
        </div>
        <Outlet />
      </>
    );
  }

  return (
    <>
      <Title>Blog | Posts</Title>
      <div className="d-flex gap-2 mb-4">
        <NavLink to="/posts/all/1" className="category link-dark">All</NavLink>
        <NavLink to="/posts/favorite/1" className="category link-dark">My Favorite</NavLink>
        <NavLink to="/posts/popular/1" className="category link-dark">Popular</NavLink>
        <NavLink to="/posts/my-posts/1" className="category link-dark">My Posts</NavLink>
      </div>
      <div className="d-flex justify-content-between align-items-center gap-3 text-truncate fs-5">
        <label htmlFor="order-select" className="pb-3">Order by:</label>
        <select name="order-select" id="orderSelect" className="form-select fs-5 mb-3"
          onChange={handleChangeSelectOption}>
          <option value="date">Date</option>
          <option value="title">Title</option>
          <option value="text">Text</option>
          <option value="lesson_num">Lesson Number</option>
        </select>
      </div>
      <Outlet />
    </>
  );
}
