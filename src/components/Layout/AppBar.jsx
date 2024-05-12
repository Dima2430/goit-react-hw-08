// import Navigation from "../Navigation";
import UserMenu from "./UserMenu";
import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";

export const AppBar = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <header>
      {/* <Navigation /> */}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
