import {
  FETCH_ADDRESS,
  UPDATE_ADDRESS,
  DELETE_ADDRESS,
  ADD_ADDRESS,
} from "../actions/type";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ADDRESS:
      return action.payload;
    case ADD_ADDRESS:
      return [...state, action.payload];
    case UPDATE_ADDRESS:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE_ADDRESS:
      return state.filter((state) => state._id !== action.payload);

    default:
      return state;
  }
};
