import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { authed } from "../features/users/UsersSlice";

const PrivateRoute = ({ children, ...rest }) => {
  const userAuthed = useSelector(authed);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userAuthed ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
