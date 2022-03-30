import {
  ADD_ORDERS,
  FETCH_ORDERS,
  UPDATE_ORDERS,
  FETCH_PRODUCT,
  ADD_ADDRESS,
  FETCH_ADDRESS,
  UPDATE_ADDRESS,
  DELETE_ADDRESS,
} from "./type";
import * as api from "../api/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export const createOrder = (postValues) => async (dispatch) => {
  try {
    const createOrder = await api.createOrder(postValues);
    // console.log(postValues);
    dispatch({
      type: ADD_ORDERS,
      payload: createOrder.data,
    });
    // alert("Your order is successfully placed.");
    localStorage.removeItem("Payment");
    localStorage.removeItem("cartItem");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("orderInfo");
    // history.push("/store");
  } catch (error) {
    console.log(error);
    if (error.response.status === 409) {
      console.log(error);
      console.log(error.response);
      alert("Please fill all Categories. And your order is not yet placed.");
    } else if (error.response.status === 413) {
      console.log(error);
      console.log(error.response);
      alert("Size is To large Make sure that size is less than 2MB");
    } else {
      console.log("Error", error.message);
      alert("Sorry can't place your order");
    }
  }
};

export const fetchOrders = () => async (dispatch) => {
  const fetchOrders = await api.fetchOrders();
  try {
    dispatch({
      type: FETCH_ORDERS,
      payload: fetchOrders.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleOrder = (id) => async (dispatch) => {
  const fetchSingleOrder = await api.fetchSingleOrder(id);
  try {
    dispatch({
      type: FETCH_PRODUCT,
      payload: fetchSingleOrder.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateOrder = (id, postValues) => async (dispatch) => {
  try {
    const updateOrder = await api.updateOrder(id, postValues);
    dispatch({
      type: UPDATE_ORDERS,
      payload: updateOrder.data,
    });
    alert("Successfully updated");
  } catch (error) {
    if (error.response.status === 409) {
      console.log(error);
      console.log(error.response);
      alert("Please fill all Categories");
    } else if (error.response.status === 413) {
      console.log(error);
      console.log(error.response);
      alert("Size is To large Make sure that size is less than 2MB");
    } else {
      console.log("Error", error.message);
      alert("Your Session has Been Expired. Please Logout and login again.");
    }
    console.log(error);
  }
};

export const fetchUserOrder = (id) => async (dispatch) => {
  const fetchUserOrder = await api.fetchUserOrder(id);
  try {
    dispatch({
      type: FETCH_ORDERS,
      payload: fetchUserOrder.data,
    });
  } catch (error) {
    console.log(error);
  }
};

//Address

export const createAddress = (postValues) => async (dispatch) => {
  try {
    const createAddress = await api.createAddress(postValues);
    // console.log(postValues);
    dispatch({
      type: ADD_ADDRESS,
      payload: createAddress.data,
    });
    toast.success("Address Successfully added.");
  } catch (error) {
    console.log(error);
    if (error.response.status === 409) {
      console.log(error);
      console.log(error.response);
      alert("Please fill all Categories");
    } else if (error.response.status === 413) {
      console.log(error);
      console.log(error.response);
      alert("Size is To large Make sure that size is less than 2MB");
    } else {
      console.log("Error", error.message);
      alert("Sorry can't place your order");
    }
  }
};

export const fetchAddressById = (id) => async (dispatch) => {
  const fetchAddressById = await api.fetchAddressById(id);
  // console.log(fetchAddressById.data);
  try {
    dispatch({
      type: FETCH_ADDRESS,
      payload: fetchAddressById.data,
    });
  } catch (error) {
    console.log(error);
  }
};
