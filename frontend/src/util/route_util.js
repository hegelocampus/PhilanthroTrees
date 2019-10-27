import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const useLoggedIn = () => {
  return useSelector(state => state.session.isAuthenticated);
}

export const AuthRoute = ({ component: Component, ...rest }) => {
  const loggedIn = useLoggedIn();
  return (
    <Route
      {...rest}
      render={routeProps =>
        loggedIn ? (
          <Redirect to="/" />
        ) : (
          <Component {...routeProps} />
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

