import {
  ADD_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "./type";
import * as api from "../api/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export const createCollaboration = (postValues) => async (dispatch) => {
  // console.log(postValues);
  try {
    const createCollaboration = await api.createCollaboration(postValues);
    // console.log("calling");
    dispatch({
      type: ADD_PRODUCT,
      payload: createCollaboration.data,
    });
    toast.success("Successfully Enquiry Submitted.");
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

export const fetchCollaboration = () => async (dispatch) => {
  const fetchCollaboration = await api.fetchCollaboration();
  try {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: fetchCollaboration.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCollaboration = (id) => async (dispatch) => {
  await api.deleteCollaboration(id);
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

export const updateCollaborations = (id, postValues) => async (dispatch) => {
  try {
    const updateCollaborations = await api.updateCollaborations(id, postValues);
    dispatch({
      type: UPDATE_PRODUCT,
      payload: updateCollaborations.data,
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
