import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";
const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav className={css.nav}>
      <h2 className={css.title}>Get started</h2>
      <ul className={css.list}>
        <li>
          <NavLink className={buildLinkClass} to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to="/register">
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;
