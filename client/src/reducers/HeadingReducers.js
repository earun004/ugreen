import {
  DELETE_HEADING,
  FETCH_HEADING,
  ADD_HEADING,
  UPDATE_HEADING,
} from "../actions/type";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_HEADING:
      return action.payload;
    case ADD_HEADING:
      return [...state, action.payload];
    case DELETE_HEADING:
      return state.filter((state) => state._id !== action.payload);
    case UPDATE_HEADING:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    default:
      return state;
  }
};
