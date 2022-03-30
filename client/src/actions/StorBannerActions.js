import * as api from "../api";
import {
  FETCH_BANNERS,
  UPDATE_BANNER,
  DELETE_BANNER,
  ADD_BANNER,
} from "./type";
import axios from "axios";

export const createStoreBanner = (image, postValues) => async (dispatch) => {
  try {
    const uploadImage = await axios.post("/upload", image);
    // // console.log(postValues);
    const createPost = await api.createStoreBanner({
      ...postValues,
      image: uploadImage.data,
    });
    // console.log(postValues);

    // console.log(uploadImage);
    // const createPost = await api.createStoreBanner({
    //   ...postValues,
    //   image: uploadImage.data,
    // });
    dispatch({
      type: ADD_BANNER,
      payload: createPost.data,
    });
    alert("Successfully Banner Added.");
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

export const fetchStoreBanner = () => async (dispatch) => {
  const fetchStoreBanner = await api.fetchStoreBanner();
  try {
    dispatch({
      type: FETCH_BANNERS,
      payload: fetchStoreBanner.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchOfferBanners = () => async (dispatch) => {
  const fetchOfferBanners = await api.fetchOfferBanners();
  try {
    dispatch({
      type: FETCH_BANNERS,
      payload: fetchOfferBanners.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchStoreBanners = () => async (dispatch) => {
  const fetchStoreBanners = await api.fetchStoreBanners();
  try {
    dispatch({
      type: FETCH_BANNERS,
      payload: fetchStoreBanners.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteStoreBanner = (id) => async (dispatch) => {
  await api.deleteStoreBanner(id);
  try {
    dispatch({
      type: DELETE_BANNER,
      payload: id,
    });
    alert("Banner Deleted Successfully");
  } catch (error) {
    console.log(error);
    alert("Your Session has Been Expired. Please Logout and login again.");
  }
};
