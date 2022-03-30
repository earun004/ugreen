import {
  FETCH_BLOGS,
  UPDATE_BLOGS,
  DELETE_BLOGS,
  ADD_BLOGS,
  FETCH_DAILY,
} from "../actions/type";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_BLOGS:
      return action.payload;
    case ADD_BLOGS:
      return [...state, action.payload];
    case UPDATE_BLOGS:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE_BLOGS:
      return state.filter((state) => state._id !== action.payload);

    default:
      return state;
  }
};
