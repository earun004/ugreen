import React from "react";
import { Redirect, Route } from "react-router-dom";

const CartRoute = ({ component: Component, ...rest }) => {
  // Add your own authentication on the below line.
  const isLoggedIn = sessionStorage.getItem("orderInfo")
    ? JSON.parse(sessionStorage.getItem("orderInfo"))
    : "";
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/store", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default CartRoute;
