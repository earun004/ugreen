import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./AuthReducers";
import productReducers from "./ProductReducers";
import SingleProduct from "./SingleProduct";
import DailyDeals from "./Deals/DailyDealsReducers";
import CartItems from "./CartItemReducers";
import BlogReducers from "./BlogReducers";
import ThreeBlogs from "./Deals/ThreeBlogs";
import cartCount from "./CartCount";
import comments from "./CommentReducers";
import productCount from "./UpdateProductNum";
import banners from "./BannerReducers";
import visitors from "./VisitorReducers";
import orders from "./OrderReducers";
import users from "./UserReducers";
import address from "./AddressRoutes";
import headings from "./HeadingReducers";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  products: productReducers,
  SingleProduct,
  DailyDeals,
  CartItems,
  blogs: BlogReducers,
  ThreeBlogs,
  cartCount,
  comments,
  productCount,
  banners,
  visitors,
  orders,
  users,
  address,
  headings,
});
