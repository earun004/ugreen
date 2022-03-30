import {
  SIGNIN,
  SIGNUP,
  LOGOUT,
  AUTH_ERROR,
  FETCH_LOGINS,
  ADMIN_SIGNIN,
  ADD_PRODUCT,
  ADD_USERS,
  FETCH_USERS,
  UPDATE_USERS,
  DELETE_USERS,
} from "./type";
import * as api from "../api/index";

export const signin = (formValues, history, id) => async (dispatch) => {
  try {
    // console.log(formValues);
    const signin = await api.signin(formValues);
    dispatch({
      type: SIGNIN,
      payload: signin.data,
    });
    const cartItems = localStorage.getItem("cartItem")
      ? JSON.parse(localStorage.getItem("cartItem"))
      : "";
    // console.log(cartItems);
    if (cartItems.length >= 1) {
      history.push("/cart");
    } else {
      history.push("/");
    }
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Invalid Email or Password",
    });
  }
};

export const adminSignin = (formValues, history) => async (dispatch) => {
  try {
    // console.log(formValues);
    const signin = await api.adminSignin(formValues);
    dispatch({
      type: ADMIN_SIGNIN,
      payload: signin.data,
    });
    history.push("/redirect");
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Invalid Email or Password",
    });
  }
};

export const signup = (formValues, history) => async (dispatch) => {
  try {
    const signup = await api.signup(formValues);
    dispatch({
      type: SIGNIN,
      payload: signup.data,
    });
    window.alert("Successfully Created.");
    history.push("/");
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: "You have already registered with this email, Try signing in!",
    });
  }
};

export const logout = (history) => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  history.push("/");
};

export const loginAttempts = (formValues) => async (dispatch) => {
  try {
    await api.loginAttempts(formValues);
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Cant't Save details",
    });
  }
};

export const fetchUser = (id) => async (dispatch) => {
  const fetchUser = await api.fetchUser(id);
  try {
    dispatch({
      type: FETCH_USERS,
      payload: fetchUser.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateUserInfo = (id, postValues) => async (dispatch) => {
  try {
    const updateUserInfo = await api.updateUserInfo(id, postValues);
    alert("Successfully updated");
    window.location.assign("/profile");
    dispatch({
      type: UPDATE_USERS,
      payload: updateUserInfo.data,
    });
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

export const sendForgotEmail = (mailId) => async (dispatch) => {
  try {
    await api.sendForgotEmail(mailId);
    alert("Please check your email to reset your password.");
  } catch (error) {
    console.log(error);
    alert("Some thing went wrong.");
  }
};

export const resetPassword =
  (email, formValues, history) => async (dispatch) => {
    try {
      const resetPassword = await api.resetPassword(email, formValues);
      // dispatch({
      //   type: SIGNIN,
      //   payload: resetPassword.data,
      // });
      window.alert("Successfully Updated you can login to your account.");
      history.push("/signin");
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: "No account found with this email.",
      });
    }
  };

export const fetchUsers = () => async (dispatch) => {
  const fetchUsers = await api.fetchUsers();
  try {
    dispatch({
      type: FETCH_USERS,
      payload: fetchUsers.data,
    });
  } catch (error) {
    console.log(error);
  }
};
