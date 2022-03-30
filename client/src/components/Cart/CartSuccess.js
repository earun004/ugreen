import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Navbar/Header";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";

import { createOrder } from "../../actions/paymentActions";
import { updateCartNum } from "../../actions/OtherActions";
import { Link } from "react-router-dom";

class CartSuccess extends Component {
  state = {
    user: JSON.parse(sessionStorage.getItem("user")),
    orderInfo: JSON.parse(sessionStorage.getItem("orderInfo")),
    orderItems: JSON.parse(localStorage.getItem("cartItem")),
    payment: JSON.parse(localStorage.getItem("Payment")),
    orderId: Math.random().toString(36).replace("0.", ""),
    userId: JSON.parse(sessionStorage.getItem("userId")),
  };
  componentDidMount() {
    // console.log(this.state);
    trackPromise(this.props.createOrder(this.state));
    trackPromise(this.props.updateCartNum(0));
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container text-center">
          <img src="images/success.gif" width="40%" />
          <h2>Thank you for ordering</h2>
          <Link
            to="/store"
            className="btn btn-lg mb-5 mt-3 btn-outline-success"
          >
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}
export default connect(null, { createOrder, updateCartNum })(CartSuccess);
