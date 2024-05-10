import { Route, Navigate, Routes } from "react-router-dom";

// RestrictedRoute for unauthenticated users
const RestrictedRoute = ({ component: Component, ...rest }) => (
  <Routes>
    <Route
      {...rest}
      element={
        // Check if the user is not authenticated, if yes, render the component, if not, navigate to contacts
        !localStorage.getItem("token") ? (
          <Component />
        ) : (
          <Navigate to="/contacts" replace />
        )
      }
    />
  </Routes>
);

export default RestrictedRoute;
