import { COUNT_VISITORS } from "../actions/type";

export default (state = [], action) => {
  switch (action.type) {
    case COUNT_VISITORS:
      return action.payload;
    // case CREATE_ARTICLE:
    //   return [...state, action.payload];
    // case DELETE_ARTICLE:
    //   return state.filter((state) => state._id !== action.payload);
    // case UPDATE_ARTICLES:
    //   return state.map((post) =>
    //     post._id === action.payload._id ? action.payload : post
    //   );
    default:
      return state;
  }
};
