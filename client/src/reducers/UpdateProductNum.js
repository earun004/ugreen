import {
  // FETCH_PRODUCTS,
  // UPDATE_PRODUCT,
  // DELETE_PRODUCT,
  // ADD_PRODUCT,
  // FETCH_DAILY,
  UPDATE_PRODUCT_COUNT_SUB,
} from "../actions/type";

const data = { ...localStorage };
export default (state = { count: 0 }, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT_COUNT_SUB:
      //   console.log("calling");
      return {
        ...state,
        count: action.payload,
      };
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
