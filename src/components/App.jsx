import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { refreshUser } from "../redux/auth/slice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));
const RegisterPage = lazy(() => import("../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const Contacts = lazy(() => import("../pages/ContactsPage"));

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { isRefreshing } = useSelector((state) => state.auth);
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
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/contacts"
          element={isLoggedIn ? <Contacts /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Layout>
  );
};

export default App;
