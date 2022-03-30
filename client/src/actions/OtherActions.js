import axios from "axios";

import * as api from "../api";
import {
  ADD_BLOGS,
  FETCH_BLOGS,
  UPDATE_BLOGS,
  DELETE_BLOGS,
  ADD_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_THREE_PRODUCTS,
  UPDATE_COUNT_NUM,
  FETCH_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  FETCH_COMMENTS,
  UPDATE_PRODUCT_COUNT_SUB,
  DELETE_COMMENTS,
  UPDATE_COMMENTS,
} from "./type";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

// Subscription
export const sendEmail = (mailId) => async (dispatch) => {
  try {
    await api.sendEmail(mailId);
    toast.success("Thankyou For Subscribing");
    // alert("Thankyou For Subscribing");
  } catch (error) {
    console.log(error);
    toast.error("Your EmailId is Already Exist!");
    // alert("Your EmailId is Already Exist!");
  }
};

export const fetchSubscribers = () => async (dispatch) => {
  const fetchSubscribers = await api.fetchSubscribers();
  try {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: fetchSubscribers.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteSubscriber = (id) => async (dispatch) => {
  await api.deleteSubscriber(id);
  try {
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
    alert("Subscriber Deleted Successfully");
  } catch (error) {
    console.log(error);
    alert("Your Session has Been Expired. Please Logout and login again.");
  }
};

// blogs
export const createBlogs = (postValues, image) => async (dispatch) => {
  // console.log(postValues);
  try {
    const uploadImage = await axios.post("/upload", image);
    const createBlog = await api.createBlogs({
      ...postValues,
      image: uploadImage.data,
    });
    // console.log("calling");
    dispatch({
      type: ADD_BLOGS,
      payload: createBlog,
    });
    alert("Successfully Blog Added.");
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
    console.log(error.response);
    // alert("Some thing went wrong.");
  }
};

export const fetchBlogs = () => async (dispatch) => {
  const fetchBlogs = await api.fetchBlogs();
  try {
    dispatch({
      type: FETCH_BLOGS,
      payload: fetchBlogs.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateBlog = (id, postValues, image) => async (dispatch) => {
  try {
    const uploadImage = await axios.post("/upload", image);
    const updateBlog = await api.updateBlog(id, {
      ...postValues,
      image: uploadImage.data,
    });
    dispatch({
      type: UPDATE_BLOGS,
      payload: updateBlog.data,
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
      const updateBlog = await api.updateBlog(id, postValues);
      dispatch({
        type: UPDATE_BLOGS,
        payload: updateBlog.data,
      });
      alert("successfully updated");
    }
    console.log(error);
  }
};

export const deleteBlog = (id) => async (dispatch) => {
  await api.deleteBlog(id);
  try {
    dispatch({
      type: DELETE_BLOGS,
      payload: id,
    });
    alert("Blog Deleted Successfully");
  } catch (error) {
    console.log(error);
    alert("Your Session has Been Expired. Please Logout and login again.");
  }
};

export const fetchSingleBlog = (id) => async (dispatch) => {
  const fetchSingleBlog = await api.fetchSingleBlog(id);
  try {
    dispatch({
      type: FETCH_PRODUCT,
      payload: fetchSingleBlog.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchThreeBlogs = () => async (dispatch) => {
  const fetchThreeBlogs = await api.fetchThreeBlogs();
  try {
    dispatch({
      type: FETCH_THREE_PRODUCTS,
      payload: fetchThreeBlogs.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// CART COUNT
export const updateCartNum = (val) => async (dispatch) => {
  const items = { ...localStorage };
  const ids = val === 0 ? 0 : JSON.parse(items.cartItem).length;
  // console.log(ids.length);
  dispatch({
    type: UPDATE_COUNT_NUM,
    payload: ids,
  });
};

export const updateProductNum = (id, price, history) => async (dispatch) => {
  const items = { ...localStorage };
  const data = JSON.parse(localStorage.getItem("cartItem"))
    ? JSON.parse(items.cartItem)
    : [];

  data.forEach((v) => {
    if (v.id === id) {
      if (v.count === 1) {
        v.count = 1;
      } else {
        v.count = v.count - 1;
      }
    }
  });
  // console.log(data);
  localStorage.setItem("cartItem", JSON.stringify(data));
  history.push("/cart");
};

export const updateProductNumSum = (id, price, history) => async (dispatch) => {
  const items = { ...localStorage };
  const data = JSON.parse(localStorage.getItem("cartItem"))
    ? JSON.parse(items.cartItem)
    : [];

  data.forEach((v) => {
    if (v.id === id) v.count = v.count + 1;
  });
  // console.log(window.location);
  localStorage.setItem("cartItem", JSON.stringify(data));
  history.push("/cart");
};

// Comments
export const postComment = (formValues) => async (dispatch) => {
  try {
    await api.postComment(formValues);
    toast.success("Thank you for reviewing.");
    // alert("Thankyou For Subscribing");
  } catch (error) {
    console.log(error);
    toast.error("Sorry, your comment not submitted.");
    // alert("Your EmailId is Already Exist!");
  }
};

export const fetchProductComments = (id) => async (dispatch) => {
  const fetchProductComments = await api.fetchProductComments(id);
  try {
    dispatch({
      type: FETCH_COMMENTS,
      payload: fetchProductComments.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllComments = (id) => async (dispatch) => {
  const fetchAllComments = await api.fetchAllComments(id);
  try {
    dispatch({
      type: FETCH_COMMENTS,
      payload: fetchAllComments.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = (id) => async (dispatch) => {
  await api.deleteComment(id);
  try {
    dispatch({
      type: DELETE_COMMENTS,
      payload: id,
    });
    alert("Comment Deleted Successfully");
  } catch (error) {
    console.log(error);
    alert("Your Session has Been Expired. Please Logout and login again.");
  }
};

export const updateComment = (id, postValues) => async (dispatch) => {
  try {
    const updateComment = await api.updateComment(id, postValues);
    dispatch({
      type: UPDATE_COMMENTS,
      payload: updateComment.data,
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

// Services
export const createServices = (postValues, image) => async (dispatch) => {
  // console.log(postValues);
  try {
    const uploadImage = await axios.post("/upload", image);

    const createServices = await api.createServices({
      ...postValues,
      image: uploadImage.data,
    });
    // console.log("calling");
    dispatch({
      type: ADD_PRODUCT,
      payload: createServices.data,
    });
    toast.success("Successfully Product Added.");
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
    console.log(error.response);
    // alert("Some thing went wrong.");
  }
};

export const fetchServices = () => async (dispatch) => {
  const fetchServices = await api.fetchServices();
  try {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: fetchServices.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleService = (id) => async (dispatch) => {
  const fetchSingleService = await api.fetchSingleService(id);
  try {
    dispatch({
      type: FETCH_PRODUCT,
      payload: fetchSingleService.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateServices = (id, postValues, image) => async (dispatch) => {
  try {
    const uploadImage = await axios.post("/upload", image);
    const updateServices = await api.updateServices(id, {
      ...postValues,
      image: uploadImage.data,
    });
    dispatch({
      type: UPDATE_PRODUCT,
      payload: updateServices.data,
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

export const deleteService = (id) => async (dispatch) => {
  await api.deleteService(id);
  try {
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
    alert("Service Deleted Successfully");
  } catch (error) {
    console.log(error);
    alert("Your Session has Been Expired. Please Logout and login again.");
  }
};

// Services Form
export const createServicesForm = (postValues) => async (dispatch) => {
  // console.log(postValues);
  try {
    const createServicesForm = await api.createServicesForm(postValues);
    // console.log("calling");
    dispatch({
      type: ADD_PRODUCT,
      payload: createServicesForm,
    });
    toast.success("Successfully Request Submitted.");
  } catch (error) {
    console.log(error);
    if (error.response.status === 409) {
      console.log(error);
      console.log(error.response);
      toast.error("Please fill all Categories");
    } else if (error.response.status === 413) {
      console.log(error);
      console.log(error.response);
      alert("Size is To large Make sure that size is less than 2MB");
    } else {
      console.log("Error", error.message);
      alert("Sorry Something went wrong");
    }
    console.log(error.response);
    // alert("Some thing went wrong.");
  }
};

export const fetchServicesForm = () => async (dispatch) => {
  const fetchServicesForm = await api.fetchServicesForm();
  try {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: fetchServicesForm.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteServiceForm = (id) => async (dispatch) => {
  await api.deleteServiceForm(id);
  try {
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
    alert("User Deleted Successfully");
  } catch (error) {
    console.log(error);
    alert("Your Session has Been Expired. Please Logout and login again.");
  }
};
