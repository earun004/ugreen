import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import $ from "jquery";

import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";
import CartLink from "../Cart/CartLink";
import { fetchUserOrder } from "../../actions/paymentActions";
import { fetchUser, updateUserInfo } from "../../actions/auth";
import { Link } from "react-router-dom";

class UserProfile extends Component {
  state = { name: "", mobile: 0, id: "", prevPassword: "", password: "" };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("profile"))
      ? JSON.parse(localStorage.getItem("profile")).user
      : "";
    if (user === "") {
      return;
    } else {
      trackPromise(this.props.fetchUserOrder(user._id));
      trackPromise(this.props.fetchUser(user._id));
    }

    // Password hide and show
    $(".show").on("click", () => {
      if ($(".password").prop("type") === "password") {
        $(".password").attr("type", "text");
        $(".show").addClass("bi-eye-fill-color");
      } else {
        $(".password").attr("type", "password");
        $(".show").removeClass("bi-eye-fill-color");
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id !== prevState.id) {
      const arr = [this.props.users];
      const value = arr.filter((val) => val._id === this.state.id);
      this.setState({ mobile: value[0].mobile, name: value[0].name });
    }
  }

  renderTable() {
    return this.props.orders.reverse().map((order, index) => {
      return (
        <tr key={order._id}>
          <td>{index + 1}</td>
          <td>MUG00{order._id + 1}</td>
          <td>{order.orderItems.length}</td>
          <td>{order.orderInfo.itemsPrice}</td>
          <td>
            {order.orderStatus === "Pending" ||
            order.orderStatus === "Canceled" ? (
              <span className="text-danger">{order.orderStatus}</span>
            ) : (
              <span className="text-success">{order.orderStatus}</span>
            )}
          </td>
          <td>
            {
              <Link
                to={`/userSingleOrder?id=${order._id}`}
                className="btn btn-sm btnGreen text-white "
              >
                <i className="fa fa-eye"></i>
              </Link>
            }
          </td>
        </tr>
      );
    });
  }

  renderUserInfo() {
    const user = JSON.parse(localStorage.getItem("profile"))
      ? this.props.users
      : "";
    if (!user) {
      return <h4 className="text-danger">Please Login to Your Account.</h4>;
    } else {
      return (
        <div>
          <div className="float-right">
            <button
              data-toggle="modal"
              data-target="#editProfile"
              className="btn btn-success"
              onClick={() => {
                this.setState({ id: user._id });
              }}
            >
              <i className="fa fa-pen"></i>
            </button>
          </div>
          <div className="my-2 mb-4">
            <p>
              <b>Name: </b>
              {user.name}
            </p>
            <p>
              <b>Email: </b>
              {user.email}
            </p>
            <p>
              <b>Mobile Number: </b>
              {user.mobile}
            </p>
            {/* <p>
              <b>Joined On: </b>
              {new Date(user.registeredOn).toLocaleString(undefined, {
                timeZone: "Asia/Kolkata",
              })}
            </p> */}
          </div>
          <h3 id="orderHistory">Order History</h3>
          <div className="table-responsive">
            <table className="table table-striped  styled-table text-center">
              <thead>
                <tr>
                  <th>Sl. No</th>
                  <th>Order Id</th>
                  <th>Num of Items</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>More</th>
                </tr>
              </thead>
              <tbody>{this.renderTable()}</tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  onSubmit(e) {
    e.preventDefault();
    trackPromise(this.props.updateUserInfo(this.state.id, this.state));
    $(".modal").fadeOut();
    $(".modal-backdrop.show").fadeOut();
    $("body").css("overflow", "auto");
  }

  render() {
    // console.log(this.props.orders);
    return (
      <div>
        <Header />
        <CartLink />
        <div className="container">
          <h3>User Information</h3>
          {this.renderUserInfo()}
        </div>
        <Footer />

        {/* modal starts */}
        <form method="post" onSubmit={this.onSubmit.bind(this)}>
          <div
            className="modal fade "
            id="editProfile"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="FAQ">
                    Update Profile
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
                <div className="modal-body">
                  <div className="form-group">
                    <label>
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.name}
                      onChange={(e) => {
                        this.setState({ name: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Mobile Number<span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      value={this.state.mobile}
                      onChange={(e) => {
                        this.setState({ mobile: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group position-relative">
                    <label>Password</label>
                    <i className="fas fa-eye bi bi-eye-fill show"></i>
                    <input
                      type="password"
                      className="form-control password"
                      value={this.state.password}
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="submit"
                    value="Submit"
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
    users: state.users,
    orders: state.orders,
  };
};

export default connect(mapStateToProps, {
  fetchUserOrder,
  fetchUser,
  updateUserInfo,
})(UserProfile);
