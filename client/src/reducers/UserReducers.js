import {
  ADD_USERS,
  FETCH_USERS,
  UPDATE_USERS,
  DELETE_USERS,
} from "../actions/type";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    case ADD_USERS:
      return [...state, action.payload];
    case UPDATE_USERS:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE_USERS:
      return state.filter((state) => state._id !== action.payload);

    default:
      return state;
  }
};
