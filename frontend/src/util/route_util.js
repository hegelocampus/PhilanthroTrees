import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const useLoggedIn = () => {
  return useSelector(state => state.session.isAuthenticated);
}

export const AuthRoute = ({
  authComponent: AuthComponent,
  protectedComponent: ProtectedComponent,
  ...rest
}) => {
  const loggedIn = useLoggedIn();
  return (
    <Route
      {...rest}
      render={routeProps =>
        loggedIn ? (
          <ProtectedComponent {...routeProps} />
        ) : (
          <AuthComponent />
        )
      }
    />
  );
}

export const ProtectedRoute = ({ component: Component, ...rest}) => {
  const loggedIn = useLoggedIn();
  return (
    <Route
      {...rest}
      render={routeProps =>
        loggedIn ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to="/home" />
        )
      }
    />
  );
};

