import {
  ADD_ORDERS,
  FETCH_ORDERS,
  UPDATE_ORDERS,
  FETCH_PRODUCT,
} from "../actions/type";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return action.payload;
    case ADD_ORDERS:
      return [...state, action.payload];
    case UPDATE_ORDERS:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    // case DELETE_PRODUCT:
    //   return state.filter((state) => state._id !== action.payload);

    default:
      return state;
  }
};
