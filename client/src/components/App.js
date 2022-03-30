import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import IndexBody from "./IndexBody";
import AboutUs from "./About/AboutUs";
import AdminLogin from "./Admin/AdminLogin";
import Store from "./Store/Store";
import Offers from "./Store/Offers";
import PrivateRoute from "./PrivateRouter";
import Signup from "./Login/Signup";
import Signin from "./Login/Signin";
import RedirectAdmin from "./RedirectAdmin";
import AdminHome from "./Admin/AdminHome";
import CreateProduct from "./Admin/Products/CreateProduct";
import SingleProduct from "./Products/SingleProduct";
import PottingSoil from "./PottingSoil/PottingSoil";
import PlantHealth from "./PlantHealth/HomePage";
import Seeds from "./Seeds/HomePage";
import Accessories from "./Accessories/HomePage";
import Cart from "./Cart/Cart";
import Blogs from "./Blogs/Blogs";
import AddBlogs from "./Admin/Blogs/CreateBlogs";
import SingleBlog from "./Blogs/SingleBlog";
import EDProducts from "./Admin/Products/EDProducts";
import EDBlogs from "./Admin/Blogs/EDBlogs";
import EDComments from "./Admin/Comments/fetchComments";
import FetchSubscriptions from "./Admin/Subscription/FetchSubscriptions";
import CartForm from "./Cart/CartForm";
import UserProfile from "./Account/Profile";
import ClientPrivateRoute from "./ClientPrivateRoute";
import Services from "./Services/HomePage";
import CreateServices from "./Admin/Services/CreateServices";
import SingleService from "./Services/SingleService";
import EDServices from "./Admin/Services/EDServices";
import ServiceAppointments from "./Admin/Services/Appointements";
import OrdersList from "./Admin/Orders/OrdersList";
import RegisteredUsers from "./Admin/Users/RegisteredUsers";
import FetchSingleOrder from "./Admin/Orders/FetchSingleOrder";
import FetchUserSingleOrder from "./Account/UserSingleOrder";
import Collaborations from "./Admin/Collaborations/Collaborations";
import CartSuccess from "./Cart/CartSuccess";
import CartRoute from "./CartRoutes";
import Invoice from "./Account/Invoice";
import CreateGallery from "./Admin/StoreBanner/Banners";
import ForgotPassword from "./Login/ForgotPassword";
import ScrollToTop from "./scrollTop";
import ErrorPage from "./ErrorPage";
import Headings from "./Admin/StoreBanner/Headings";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={IndexBody} />
            <Route path="/about" exact component={AboutUs} />
            <Route path="/ugadmin" exact component={AdminLogin} />
            <Route path="/store" exact component={Store} />
            <Route path="/offers" exact component={Offers} />
            {/* <Route path="/print" exact component={Example} /> */}
            <Route path="/signin" exact component={Signin} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/redirect" exact component={RedirectAdmin} />
            <Route path="/product" exact component={SingleProduct} />
            <Route path="/pottingSoil" exact component={PottingSoil} />
            <Route path="/plantHealth" exact component={PlantHealth} />
            <Route path="/seeds" exact component={Seeds} />
            <Route path="/accessories" exact component={Accessories} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/blog" exact component={Blogs} />
            <Route path="/singleBlog" exact component={SingleBlog} />
            <Route path="/cartForm" exact component={CartForm} />
            <Route path="/profile" exact component={UserProfile} />
            <Route path="/services" exact component={Services} />
            <Route path="/singleService" exact component={SingleService} />
            <Route path="/cartSuccess" exact component={CartSuccess} />
            <Route path="/invoice" exact component={Invoice} />
            <Route path="/forgotPassword" exact component={ForgotPassword} />
            <Route
              path="/userSingleOrder"
              exa
              ct
              component={FetchUserSingleOrder}
            />

            {/* <Redirect to="/" /> */}

            {/* Admin Routes */}
            <PrivateRoute path="/adminHome" exact component={AdminHome} />
            <PrivateRoute path="/addProduct" exact component={CreateProduct} />
            <PrivateRoute path="/addBlogs" exact component={AddBlogs} />
            <PrivateRoute path="/EDProducts" exact component={EDProducts} />
            <PrivateRoute path="/EDBlogs" exact component={EDBlogs} />
            <PrivateRoute
              path="/subscribeAdmin"
              exact
              component={FetchSubscriptions}
            />
            <PrivateRoute path="/EDComments" exact component={EDComments} />
            <PrivateRoute
              path="/createServices"
              exact
              component={CreateServices}
            />
            <PrivateRoute path="/EDServices" exact component={EDServices} />
            <PrivateRoute path="/orderList" exact component={OrdersList} />
            <PrivateRoute path="/add-headings" exact component={Headings} />
            <PrivateRoute
              path="/singleOrder"
              exact
              component={FetchSingleOrder}
            />
            <PrivateRoute
              path="/collaborationAdmin"
              exact
              component={Collaborations}
            />
            <PrivateRoute
              path="/createGallery"
              exact
              component={CreateGallery}
            />
            <PrivateRoute
              path="/registeredUsers"
              exact
              component={RegisteredUsers}
            />
            <PrivateRoute
              path="/appointments"
              exact
              component={ServiceAppointments}
            />

            <Route path="/*" component={ErrorPage} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default App;
