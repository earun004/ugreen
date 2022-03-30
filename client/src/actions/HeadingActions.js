import {
  ADD_HEADING,
  FETCH_HEADING,
  UPDATE_HEADING,
  DELETE_HEADING,
} from "./type";
import * as api from "../api/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export const createHeading = (postValues) => async (dispatch) => {
  // console.log(postValues);
  try {
    const createHeading = await api.createHeading(postValues);
    // console.log("calling");
    dispatch({
      type: ADD_HEADING,
      payload: createHeading.data,
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

export const fetchHeadings = () => async (dispatch) => {
  const fetchHeadings = await api.fetchHeadings();
  try {
    dispatch({
      type: FETCH_HEADING,
      payload: fetchHeadings.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteHeading = (id) => async (dispatch) => {
  await api.deleteHeading(id);
  try {
    dispatch({
      type: DELETE_HEADING,
      payload: id,
    });
    alert("Heading Deleted Successfully");
  } catch (error) {
    console.log(error);
    alert("Your Session has Been Expired. Please Logout and login again.");
  }
};

export const updateHeading = (id, postValues) => async (dispatch) => {
  try {
    const updateHeading = await api.updateHeading(id, postValues);
    dispatch({
      type: UPDATE_HEADING,
      payload: updateHeading.data,
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
