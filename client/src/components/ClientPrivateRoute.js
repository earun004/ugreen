import React from "react";
import { Redirect, Route } from "react-router-dom";

const ClientPrivateRoute = ({ component: Component, ...rest }) => {
  // Add your own authentication on the below line.
  const isLoggedIn = localStorage.getItem("profile");
  console.log(isLoggedIn);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn === null ? (
          <Redirect
            to={{ pathname: "/signin", state: { from: props.location } }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default ClientPrivateRoute;
