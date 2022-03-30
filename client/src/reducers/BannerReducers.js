import {
  FETCH_BANNERS,
  UPDATE_BANNER,
  DELETE_BANNER,
  ADD_BANNER,
} from "../actions/type";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_BANNERS:
      return action.payload;
    case ADD_BANNER:
      return [...state, action.payload];
    case UPDATE_BANNER:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE_BANNER:
      return state.filter((state) => state._id !== action.payload);

    default:
      return state;
  }
};
