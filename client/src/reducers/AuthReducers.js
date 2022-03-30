import {
  LOGOUT,
  SIGNIN,
  AUTH_ERROR,
  FETCH_LOGINS,
  ADMIN_SIGNIN,
} from "../actions/type";

export default (
  state = { authData: null, token: null, errorMessage: "" },
  action
) => {
  switch (action.type) {
    case SIGNIN:
      const token = localStorage.setItem(
        "profile",
        JSON.stringify(action.payload)
      );
      return { ...state, authData: action.payload, token };
    case ADMIN_SIGNIN:
      const adminToken = sessionStorage.setItem(
        "aprofile",
        JSON.stringify(action.payload)
      );
      return { ...state, authData: action.payload, adminToken };
    case LOGOUT:
      localStorage.removeItem("profile");
      sessionStorage.removeItem("aprofile");
      document.cookie =
        "ug-token" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      return { ...state, authData: null, token: null };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    case FETCH_LOGINS:
      return { ...state, authData: action.payload };
    default:
      return state;
  }
};
