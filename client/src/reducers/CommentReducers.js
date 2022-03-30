import {
  FETCH_COMMENTS,
  UPDATE_COMMENTS,
  DELETE_COMMENTS,
  ADD_COMMENTS,
} from "../actions/type";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return action.payload;
    case ADD_COMMENTS:
      return [...state, action.payload];
    case UPDATE_COMMENTS:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE_COMMENTS:
      return state.filter((state) => state._id !== action.payload);

    default:
      return state;
  }
};
