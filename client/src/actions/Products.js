import axios from "axios";

import * as api from "../api";
import {
  ADD_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  FETCH_DAILY,
  FETCH_CART_ITEMS,
  DELETE_CART_ITEM,
} from "./type";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export const createProduct = (postValues, image) => async (dispatch) => {
  try {
    const uploadImage = await axios.post("/upload", image);
    // console.log(uploadImage);
    const createPost = await api.createProduct({
      ...postValues,
      image: uploadImage.data,
    });
    // console.log(postValues);
    dispatch({
      type: ADD_PRODUCT,
      payload: createPost,
    });
    alert("Successfully Product Added.");
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
      alert("Your Session has Been Expired. Please Logout and login again.");
    }
  }
};

export const updateProducts = (id, postValues, image) => async (dispatch) => {
  try {
    const uploadImage = await axios.post("/upload", image);
    const updateProducts = await api.updateProducts(id, {
      ...postValues,
      image: uploadImage.data,
    });
    dispatch({
      type: UPDATE_PRODUCT,
      payload: updateProducts.data,
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
      const updateProducts = await api.updateProducts(id, postValues);
      dispatch({
        type: UPDATE_PRODUCT,
        payload: updateProducts.data,
      });
      alert("successfully updated");
    }
    console.log(error.response);
  }
};

export const fetchProducts = () => async (dispatch) => {
  const fetchProducts = await api.fetchProducts();
  try {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: fetchProducts.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleProduct = (id) => async (dispatch) => {
  const fetchSingleProduct = await api.fetchSingleProduct(id);
  try {
    dispatch({
      type: FETCH_PRODUCT,
      payload: fetchSingleProduct.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchFourProducts = () => async (dispatch) => {
  const fetchFourProducts = await api.fetchFourProducts();
  try {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: fetchFourProducts.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchBestDeals = () => async (dispatch) => {
  const fetchBestDeals = await api.fetchBestDeals();
  try {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: fetchBestDeals.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchPottingSoil = () => async (dispatch) => {
  const fetchPottingSoil = await api.fetchPottingSoil();
  try {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: fetchPottingSoil.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchPlantHealth = () => async (dispatch) => {
  const fetchPlantHealth = await api.fetchPlantHealth();
  try {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: fetchPlantHealth.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchSeeds = () => async (dispatch) => {
  const fetchSeeds = await api.fetchSeeds();
  try {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: fetchSeeds.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchAccessories = () => async (dispatch) => {
  const fetchAccessories = await api.fetchAccessories();
  try {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: fetchAccessories.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyDeals = () => async (dispatch) => {
  const fetchDailyDeals = await api.fetchDailyDeals();
  try {
    dispatch({
      type: FETCH_DAILY,
      payload: fetchDailyDeals.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  await api.deleteProduct(id);
  try {
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
    alert("Product Deleted Successfully");
  } catch (error) {
    console.log(error);
    alert("Your Session has Been Expired. Please Logout and login again.");
  }
};

// Cart
export const fetchCartItems = (id) => async (dispatch) => {
  const fetchCartItems = await api.fetchSingleProduct(id);
  try {
    dispatch({
      type: FETCH_CART_ITEMS,
      payload: fetchCartItems.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCartItem = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_CART_ITEM,
      payload: id,
    });
    toast.success("Product Deleted Successfully.");
  } catch (error) {
    console.log(error);
    toast.success("Sorry can't Delete Product.");
  }
};
