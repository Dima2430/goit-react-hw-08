import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navigation = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <br />
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
export default Navigation;
