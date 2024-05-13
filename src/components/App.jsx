import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { refreshUser } from "../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";
const HomePage = lazy(() => import("../pages/HomePage"));
const RegisterPage = lazy(() => import("../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const Contacts = lazy(() => import("../pages/ContactsPage"));

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { isRefreshing } = useSelector(selectIsRefreshing);
  const [logoutKey, setLogoutKey] = useState(0);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const handleLogout = () => {
    setLogoutKey((prevKey) => prevKey + 1);
    navigate("/");
  };

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout key={logoutKey} onLogout={handleLogout}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute>
              <RegisterPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
