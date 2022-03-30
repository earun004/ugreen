import {
  ADD_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "./type";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export const addItemToCart =
  (id, count, cost, image, name) => async (dispatch, getState) => {
    var items = localStorage.getItem("cartItem")
      ? [...JSON.parse(localStorage.getItem("cartItem"))]
      : [];

    const filter = items.filter((val) => val.id === id);
    // console.log("calling", name);
    if (filter.length === 0) {
      items.push({ id, count, cost, image, name });
      localStorage.setItem("cartItem", JSON.stringify(items));
      toast.success("Product Added To Cart, Continue Shopping");
    } else {
      toast.error("Item already added checkout");
    }
  };

export const removeFromCart = (id) => async (dispatch) => {
  var items = localStorage.getItem("cartItem")
    ? [...JSON.parse(localStorage.getItem("cartItem"))]
    : [];
  // console.log(items);
  const filter = items.filter((val) => val.id !== id);
  // console.log(filter);
  localStorage.setItem("cartItem", JSON.stringify(filter));
};

export const updateProductCount = (id) => async (dispatch) => {
  var items = localStorage.getItem("cartItem")
    ? [...JSON.parse(localStorage.getItem("cartItem"))]
    : [];
  // console.log(items);
  const filter = items.filter((val) => val.id !== id);
  // console.log(filter);
  localStorage.setItem("cartItem", JSON.stringify(filter));
};
