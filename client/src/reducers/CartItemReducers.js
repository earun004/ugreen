import {
  FETCH_CART_ITEMS,
  DELETE_CART_ITEM,
  ADD_PRODUCT_TO_CART,
} from "../actions/type";

export default (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case FETCH_CART_ITEMS:
      const item = action.payload;
      const isItemExist = state.cartItems.find((val) => val._id === item._id);

      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i._id === isItemExist._id ? item : i
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }

    case ADD_PRODUCT_TO_CART:
      const data = action.payload;
      console.log(data);
      return localStorage.setItem(
        "cartItems",
        JSON.stringify({
          ...state,
          cartItems: [...state.cartItems, data],
        })
      );

    case DELETE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i._id !== action.payload),
      };

    default:
      return state;
  }
};
