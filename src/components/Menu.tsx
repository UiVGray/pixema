import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export function Menu() {
  const [opened, setOpened] = useState(false);

  const toggleBurgerIcon = () => {
    setOpened(opened => !opened);
  }

  let buttonClassName = "burger border-end border-light";
  let menuClassName = "navbar menu-closed";

  if (opened) {
    buttonClassName += " burger-opened";
    menuClassName = "navbar menu-opened";
  }

  return (
    <>
      <div className={buttonClassName} onClick={toggleBurgerIcon}>
        <div className="lines">
          <div className="lines-item"></div>
          <div className="lines-item"></div>
          <div className="lines-item"></div>
        </div>
      </div>
      <nav className={menuClassName}>
        <ul className="navbar-nav d-flex ms-1">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Main Page</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/posts/all/1">Posts</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/posts/create">New Post</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="auth/signin">Sign In</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="auth/signup">Sign Up</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
