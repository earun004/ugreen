import {
  // FETCH_PRODUCTS,
  // UPDATE_PRODUCT,
  // DELETE_PRODUCT,
  // ADD_PRODUCT,
  // FETCH_DAILY,
  UPDATE_COUNT_NUM,
} from "../actions/type";

const items = { ...localStorage };
const ids = JSON.parse(localStorage.getItem("cartItem"))
  ? JSON.parse(items.cartItem)
  : [];
export default (state = { count: ids.length }, action) => {
  switch (action.type) {
    case UPDATE_COUNT_NUM:
      //   console.log("calling");
      return { ...state, count: action.payload };
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
