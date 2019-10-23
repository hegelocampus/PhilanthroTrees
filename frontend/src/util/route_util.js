import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const useLoggedIn = () => {
  return useSelector(state => state.session.isAuthenticated);
}

export const AuthRoute = ({ component: Component, exact, props }) => {
  const loggedIn = useLoggedIn();
  console.log(loggedIn);
  return (
    <Route
      exact={exact}
      render={props =>
        !loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export const ProtectedRoute = ({ component: Component, exact, ...props }) => {
  const loggedIn = useLoggedIn();
  return (
    <Route
      exact={exact}
      render={props =>
        loggedIn ? <Component {...props} /> : <Redirect to="/home" />
      }
    />
  );
};

