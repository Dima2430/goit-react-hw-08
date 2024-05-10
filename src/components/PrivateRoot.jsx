import { Route, Navigate, Routes } from "react-router-dom";

// PrivateRoute for authenticated users
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Routes>
    <Route
      {...rest}
      element={
        // Check if the user is authenticated, if yes, render the component, if not, navigate to login
        localStorage.getItem("token") ? (
          <Component />
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
  </Routes>
);
export default PrivateRoute;
