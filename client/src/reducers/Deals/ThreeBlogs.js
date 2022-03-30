import {
  FETCH_PRODUCTS,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  FETCH_THREE_PRODUCTS,
} from "../../actions/type";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_THREE_PRODUCTS:
      return action.payload;
    //   case ADD_PRODUCT:
    //     return [...state, action.payload];
    //   case UPDATE_PRODUCT:
    //     return state.map((post) =>
    //       post._id === action.payload._id ? action.payload : post
    //     );
    //   case DELETE_PRODUCT:
    //     return state.filter((state) => state._id !== action.payload);

    default:
      return state;
  }
};
