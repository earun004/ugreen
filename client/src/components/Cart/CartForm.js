import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";
import $ from "jquery";
import axios from "axios";

import Footer from "../Footer/Footer";
import Header from "../Navbar/Header";
import {
  createOrder,
  fetchAddressById,
  createAddress,
} from "../../actions/paymentActions";
import { updateCartNum } from "../../actions/OtherActions";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";

class CartForm extends Component {
  state = {
    address: "",
    city: "",
    phoneNo: "",
    pincode: "",
    country: "",
    state: "",
    company: "",
    username: "",
    userEmail: "",
    userId: "",
    orderItems: [],
    payment: {},
    itemsPrice: "",
    totalPrice: "",
    id: "",
    change: false,
    paymentMode: "",
    bgColor: "",
    discountPrice: "",
    shippingPrice: "",
  };

  async displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await trackPromise(
      fetch(
        `${window.location.origin}/razorpay/payment/${this.state.itemsPrice}`,
        {
          method: "POST",
        }
      )
    ).then((t) => t.json());

    // console.log(data);

    const options = {
      key: __DEV__ ? "rzp_live_VYjSMBZSmHijXh" : "rzp_live_VYjSMBZSmHijXh",
      redirect: true,
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "MULTIPLEX URBAN GREEN INDIA PVT LTD",
      description: "Thankyou for Shopping.",
      image: "images/Urban_Images/Main_logo.png",
      handler: function (response) {
        // console.log(response);
        //   alert(response.razorpay_payment_id);
        //   alert(response.razorpay_order_id);
        //   alert(response.razorpay_signature);
        // alert("Payment Success.");
        localStorage.setItem(
          "Payment",
          JSON.stringify({
            paymentStatus: response.razorpay_payment_id ? "Success" : "Failed",
            paymentId: response.razorpay_payment_id,
            paidAt: new Date(),
            paymentMode: "Razorpay",
            orderId: response.razorpay_order_id,
            signature: response.razorpay_signature,
          })
        );

        const postValues = {
          user: JSON.parse(sessionStorage.getItem("user")),
          orderInfo: JSON.parse(sessionStorage.getItem("orderInfo")),
          orderItems: JSON.parse(localStorage.getItem("cartItem")),
          payment: JSON.parse(localStorage.getItem("Payment")),
          orderId: Math.random().toString(36).replace("0.", ""),
          userId: JSON.parse(sessionStorage.getItem("userId")),
        };

        // const createOrder = axios.post(
        //   "https://urbangreen-backend1.azurewebsites.net/orders/",
        //   postValues
        // );
        // console.log(createOrder);
        window.location.assign("/cartSuccess");
        if (
          typeof response.razorpay_payment_id == "undefined" ||
          response.razorpay_payment_id < 1
        ) {
          alert("Sorry payment failed.");
        } else {
        }

        // trackPromise(this.props.updateCartNum());
        var settings = {
          url: `${window.location.origin}/razorpay/verification`,
          // url: "http://localhost:5000/razorpay/verification",
          method: "POST",
          timeout: 0,
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify({ response }),
        };
      },
      prefill: {
        name: this.state.username,
        email: this.state.userEmail,
        contact: this.state.phoneNo,
      },
      theme: {
        color: "#70996b",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  componentDidMount() {
    // $(window).on("load", function () {
    //   $(".colored").on("click", function () {
    //     $(this).addClass("addColor").siblings().removeClass("addColor");
    //   });
    // });

    // console.log(window.location.origin);

    const profile = JSON.parse(localStorage.getItem("profile")).user;
    // console.log(profile);
    const items = { ...localStorage };
    const price = [];
    const qnt = [];
    const ids = JSON.parse(localStorage.getItem("cartItem"))
      ? JSON.parse(items.cartItem)
      : [];

    for (let i in ids) {
      // console.log(ids[i]);
      price.push(ids[i].cost);
      qnt.push(ids[i].count);
    }
    // console.log(price, qnt);
    const total = qnt.reduce(function (r, a, i) {
      return r + a * price[i];
    }, 0);

    this.setState({
      userEmail: profile.email,
      phoneNo: profile.mobile,
      username: profile.name,
      userId: profile._id,
      totalPrice: total,
      orderItems: JSON.parse(localStorage.getItem("cartItem")),
    });
    trackPromise(this.props.fetchAddressById(profile._id));

    if (total >= 10000) {
      const discount = total - 10000;
      const discountPer = 10000 - 10000 * 0.15;
      const finalCost = discount + discountPer;
      this.setState({ discountPrice: Math.ceil(finalCost) });
    } else {
      this.setState({ discountPrice: Math.ceil(total - total * 0.15) });
    }

    if (total >= 10000) {
      const discount = total - 10000;
      const discountPer = 10000 - 10000 * 0.15;
      const finalCost = discount + discountPer;

      if (total >= 1000) {
        this.setState({ itemsPrice: Math.ceil(finalCost), shippingPrice: 0 });
      } else {
        this.setState({
          itemsPrice: Math.ceil(finalCost) + 99,
          shippingPrice: 99,
        });
      }
    } else {
      if (total >= 1000) {
        this.setState({
          itemsPrice: Math.ceil(total - total * 0.15),
          shippingPrice: 0,
        });
      } else {
        this.setState({
          itemsPrice: Math.ceil(total - total * 0.15) + 99,
          shippingPrice: 99,
        });
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id !== prevState.id) {
      const value = this.props.address.filter(
        (val) => val._id === this.state.id
      );
      const data = value[0];
      this.setState({
        address: data.address,
        city: data.city,
        phoneNo: data.phoneNo,
        pincode: data.pincode,
        country: data.country,
        state: data.state,
        company: data.company,
        username: data.username,
        userEmail: data.userEmail,
        userId: data.userId,
      });
    }
  }

  renderProductsCount() {
    const items = { ...localStorage };
    const ids = JSON.parse(localStorage.getItem("cartItem"))
      ? JSON.parse(items.cartItem)
      : [];
    return ids.length;
  }

  submitAddress(e) {
    e.preventDefault();
    // console.log(this.state);
    // console.log("Calling");
    trackPromise(this.props.createAddress(this.state));
    $(".modal").fadeOut();
    $(".modal-backdrop.show").fadeOut();
    $("body").css("overflow", "auto");
  }

  onSubmit(e) {
    e.preventDefault();

    // console.log(this.state);
    sessionStorage.setItem("userId", JSON.stringify(this.state.userId));
    sessionStorage.setItem(
      "user",
      JSON.stringify({
        address: this.state.address,
        city: this.state.city,
        phoneNo: this.state.phoneNo,
        pincode: this.state.pincode,
        country: this.state.country,
        state: this.state.state,
        company: this.state.company,
        username: this.state.username,
        userEmail: this.state.userEmail,
        userId: this.state.userId,
      })
    );
    sessionStorage.setItem(
      "orderInfo",
      JSON.stringify({
        paymentMode: this.state.paymentMode,
        itemsPrice: this.state.itemsPrice,
        totalPrice: this.state.totalPrice,
        shippingPrice: this.state.shippingPrice,
        discountPrice: this.state.discountPrice,
      })
    );

    if (this.state.paymentMode === "") {
      return;
    } else {
      this.props.history.push("/cartSuccess");
    }
    // trackPromise(this.props.createOrder(this.state, this.props.history));
    // if (this.state.change === true) {
    //   console.log("calling");
    //   trackPromise(this.props.createAddress(this.state));
    // }
    // trackPromise(this.props.updateCartNum(0));
  }

  handleChange = (e) => {
    this.setState({
      paymentMode: e.target.value,
    });
  };

  renderDeliveryAddress() {
    return this.props.address.map((address) => {
      return (
        <div
          key={address._id}
          className="p-1 my-1 border colored d-flex "
          style={{ display: "none !important" }}
          onClick={() => {
            this.setState({ id: address._id, bgColor: "red" });
            // console.log(this.state.bgColor);
          }}
          style={{ cursor: "pointer" }}
        >
          <input
            type="radio"
            name="address"
            value={address.address}
            checked={this.state.address === address.address}
            className="m-2"
            style={{ accentColor: "#436150" }}
          />
          {
            <div>
              <b>
                {address.username} {address.phoneNo}
              </b>
              <p>
                {address.address} {address.city} {address.state}{" "}
                {address.country} - {address.pincode}
              </p>
            </div>
          }
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.address);
    return (
      <div>
        <Header />
        <div className="container my-2">
          <div className="row">
            <div className="col-12 col-md-8 order-last order-md-first">
              <form onSubmit={this.onSubmit.bind(this)}>
                <div id="accordion">
                  <div className="card mb-3">
                    <div className="card-header" id="headingOne">
                      <h5 className="m-0">
                        <a
                          href="#collapseOne"
                          className="text-dark"
                          data-toggle="collapse"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Login <i className="fa fa-check text-success"></i>
                        </a>
                      </h5>
                    </div>
                  </div>

                  <div className="card mb-2">
                    <div className="card-header" id="headingThree">
                      <h5 className="m-0">
                        <a
                          href="#collapseFour"
                          className="text-dark collapsed"
                          data-toggle="collapse"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Delivery Address{" "}
                          {this.state.address === "" ? (
                            ""
                          ) : (
                            <i className="fa fa-check text-success"></i>
                          )}
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse show"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div>{this.renderDeliveryAddress()}</div>

                        {/* new accordion */}

                        <a
                          // className="btn btn-success"
                          data-toggle="modal"
                          data-target="#addAddress"
                          href="#"
                        >
                          <i className="fa fa-plus"></i> Add Address
                        </a>

                        {/* close new accordion */}
                      </div>
                    </div>
                  </div>

                  <div className="card mb-2">
                    <div className="card-header" id="headingThree">
                      <h5 className="m-0">
                        <a
                          href="#collapseThree"
                          className="text-dark collapsed"
                          data-toggle="collapse"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Select payment method
                        </a>
                        {this.state.paymentMode === "" ? (
                          ""
                        ) : (
                          <i className="fa fa-check text-success"></i>
                        )}
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div>
                          <div
                            className="radio radio-info cursor-pointer"
                            style={{ cursor: "pointer !important" }}
                          >
                            <input
                              type="radio"
                              value="Cash on Delivery"
                              id="cash"
                              onChange={this.handleChange}
                              name="paymentMode"
                              disabled={
                                this.state.address === "" ? true : false
                              }
                            />
                            <label htmlFor="cash"> Cash on Delivery</label>
                          </div>
                          <div className="radio radio-info">
                            <input
                              type="radio"
                              value="Online Payment"
                              id="online"
                              onChange={this.handleChange}
                              name="paymentMode"
                              onClick={() => {
                                this.displayRazorpay();
                                sessionStorage.setItem(
                                  "user",
                                  JSON.stringify({
                                    address: this.state.address,
                                    city: this.state.city,
                                    phoneNo: this.state.phoneNo,
                                    pincode: this.state.pincode,
                                    country: this.state.country,
                                    state: this.state.state,
                                    company: this.state.company,
                                    username: this.state.username,
                                    userEmail: this.state.userEmail,
                                    userId: this.state.userId,
                                  })
                                );
                                sessionStorage.setItem(
                                  "orderInfo",
                                  JSON.stringify({
                                    paymentMode: this.state.paymentMode,
                                    itemsPrice: this.state.itemsPrice,
                                    totalPrice: this.state.totalPrice,
                                    shippingPrice: this.state.shippingPrice,
                                    discountPrice: this.state.discountPrice,
                                  })
                                );
                                sessionStorage.setItem(
                                  "userId",
                                  JSON.stringify(this.state.userId)
                                );
                              }}
                              disabled={
                                this.state.address === "" ? true : false
                              }
                            />
                            <label htmlFor="online">
                              Others (Net Banking, UPI, Wallet, Card)
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="submit"
                  value="Place Your Order"
                  onClick={() => {
                    this.setState({
                      payment: JSON.parse(localStorage.getItem("Payment")),
                    });
                  }}
                  className="btn btn-block btnGreen text-white"
                  disabled={
                    this.state.address != "" && this.state.paymentMode !== ""
                      ? false
                      : true
                  }
                />
              </form>
            </div>
            <div className="col-12 col-md-4 order-first order-md-last">
              <div className="bordered shadow rounded text-center">
                <h3 className="pt-2">Order Summary</h3>
                <hr />
                <p className="">
                  <b>Total Products: </b>
                  <span className="text-warning">
                    {this.renderProductsCount()}
                  </span>
                </p>
                <hr />
                <p className="">
                  <b>Selling Cost: </b>
                  <span className="text-warning">{this.state.totalPrice}</span>
                </p>
                <hr />
                <p>
                  <b>Launching Offer: </b>
                  <span className="text-warning">15%</span>
                </p>
                <hr />
                <p>
                  <b>Discount Price: </b>
                  <span className="text-warning">
                    {this.state.discountPrice}
                  </span>
                </p>
                <hr />
                <p className="">
                  <b>Shipping:</b>{" "}
                  {this.state.shippingPrice == 0 ? (
                    <span className="text-success">Free</span>
                  ) : (
                    <span className="text-warning">₹ 99</span>
                  )}
                </p>
                <hr />
                <p className="pb-2">
                  <b>Total Cost: </b>
                  <span className="text-warning">
                    {this.state.discountPrice} + {this.state.shippingPrice} ={" "}
                    {this.state.itemsPrice}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />

        {/* modal starts */}
        <form onSubmit={this.submitAddress.bind(this)}>
          <div
            className="modal fade "
            id="addAddress"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="FAQ">
                    Terms of Service
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body modal_body">
                  <div className="form-group">
                    <label className="form-label">
                      Email Id <span className="text-warning">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      value={this.state.userEmail}
                      placeholder="Enter Your Email"
                      required
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Full Name <span className="text-warning">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.username}
                      placeholder="Enter Your Name"
                      required
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company</label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.company}
                      placeholder="Enter Company Name"
                      onChange={(e) => {
                        this.setState({
                          company: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Address</label>
                    <textarea
                      className="form-control"
                      placeholder="Your Address."
                      value={this.state.address}
                      onChange={(e) => {
                        this.setState({
                          address: e.target.value,
                          change: true,
                        });
                      }}
                      required
                    ></textarea>
                    <div className="row my-2">
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label className="form-label">City</label>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.city}
                            placeholder="Enter City Name"
                            onChange={(e) => {
                              this.setState({
                                city: e.target.value,
                              });
                            }}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label className="form-label">Pincode</label>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.pincode}
                            placeholder="Enter Pincode Name"
                            onChange={(e) => {
                              this.setState({
                                pincode: e.target.value,
                              });
                            }}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row my-2">
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label className="form-label">State</label>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.state}
                            placeholder="Enter State Name"
                            onChange={(e) => {
                              this.setState({
                                state: e.target.value,
                              });
                            }}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group">
                          <label className="form-label">Country</label>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.country}
                            placeholder="Enter Country Name"
                            onChange={(e) => {
                              this.setState({
                                country: e.target.value,
                              });
                            }}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Mobile Number</label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.phoneNo}
                        placeholder="Enter Country Name"
                        onChange={(e) => {
                          this.setState({
                            phoneNo: e.target.value,
                          });
                        }}
                        required
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="submit"
                    value="Save Address"
                    className="btn btn-success"
                  />
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    style={{
                      color: "#000 !important",
                      fontSize: "2rem  !important",
                      background: "transparent  !important",
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* modal ends */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    address: state.address,
  };
};

export default compose(
  connect(mapStateToProps, {
    createOrder,
    fetchAddressById,
    createAddress,
    updateCartNum,
  })
)(withRouter(CartForm));
