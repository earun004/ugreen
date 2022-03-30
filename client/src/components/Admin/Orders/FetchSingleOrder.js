import React, { Component } from "react";
import { trackPromise } from "react-promise-tracker";
import { connect } from "react-redux";
import Moment from "react-moment";
import "moment-timezone";

import AdminHeader from "../AdminHeader";
import { fetchSingleOrder, updateOrder } from "../../../actions/paymentActions";
import MyPrintableComponent from "../../Account/MyPrintableComponent";
import "../../Account/styles.css";
import { Link } from "react-router-dom";

class FetchSingleOrder extends Component {
  state = {
    id: "",
    orderStatus: "",
    update: true,
    trackingId: "",
    modeOfTransport: "",
    contactInfo: "",
    comment: "",
    cancelReason: "",
  };

  componentDidMount() {
    const queryParams = new URLSearchParams(window.location.search);
    trackPromise(this.props.fetchSingleOrder(queryParams.get("id")));
    this.setState({
      id: queryParams.get("id"),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.SingleProduct !== this.props.SingleProduct) {
      this.setState({ orderStatus: this.props.SingleProduct.orderStatus });
    }
  }

  printOrder = () => {
    const printableElements = document.getElementById("printme").innerHTML;
    const orderHTML =
      "<html><head><title></title></head><body>" +
      printableElements +
      "</body></html>";
    const oldPage = document.body.innerHTML;
    document.body.innerHTML = orderHTML;
    window.print();
    document.body.innerHTML = oldPage;
  };

  renderOderItems() {
    // console.log(this.props.SingleProduct.orderItems);

    if (this.props.SingleProduct.orderItems === undefined) {
      return;
    } else {
      return this.props.SingleProduct.orderItems.map((item, index) => {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>
              <img src={item.image} width="80px" />
            </td>
            <td className="text-capitalize">{item.name}</td>
            <td>{item.count}</td>
            <td>{item.cost}</td>
            <td>{parseInt(item.cost) * item.count}</td>
          </tr>
        );
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    trackPromise(this.props.updateOrder(this.state.id, this.state));
    // console.log(this.state);
  }

  renderShippedInfo() {
    if (this.state.orderStatus === "Shipped") {
      // alert("shipped");
      return (
        <div>
          <div className="form-group">
            <label>
              Tracking ID <span className="text-danger">*</span>
            </label>
            <input
              className="form-control"
              placeholder="Tracking ID"
              required
              value={this.props.trackingId}
              onChange={(e) => {
                this.setState({ trackingId: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label>
              Mode of transport <span className="text-danger">*</span>
            </label>
            <input
              className="form-control"
              placeholder="Mode of transport"
              required
              value={this.props.modeOfTransport}
              onChange={(e) => {
                this.setState({ modeOfTransport: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label>
              Contact Info <span className="text-danger">*</span>
            </label>
            <input
              className="form-control"
              placeholder="Contact Info"
              required
              value={this.props.contactInfo}
              onChange={(e) => {
                this.setState({ contactInfo: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label>Comments</label>
            <textarea
              className="form-control"
              placeholder="Comment"
              value={this.props.comment}
              onChange={(e) => {
                this.setState({ comment: e.target.value });
              }}
            ></textarea>
          </div>
        </div>
      );
    } else {
      return;
    }
  }

  renderCancelInfo() {
    return (
      <div>
        <div className="form-group">
          <label>
            Cancel Reason <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Cancel Reason"
            value={this.props.cancelReason}
            onChange={(e) => {
              this.setState({ cancelReason: e.target.value });
            }}
            required
          />
        </div>
        <div className="form-group">
          <label>Comments</label>
          <textarea
            className="form-control"
            placeholder="Comment"
            value={this.props.comment}
            onChange={(e) => {
              this.setState({ comment: e.target.value });
            }}
          ></textarea>
        </div>
      </div>
    );
  }

  renderOptions() {
    if (this.state.orderStatus === "Processing") {
      return (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" HTMLfor="inputGroupSelect01">
                Order Status
              </label>
            </div>
            <select
              className="custom-select"
              id="inputGroupSelect01"
              value={this.state.orderStatus}
              onChange={(e) => {
                this.setState({ orderStatus: e.target.value });
              }}
            >
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Canceled">Canceled</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
          {this.renderShippedInfo()}
        </div>
      );
    } else if (this.state.orderStatus === "Pending") {
      return (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" HTMLfor="inputGroupSelect01">
                Order Status
              </label>
            </div>
            <select
              className="custom-select"
              id="inputGroupSelect01"
              value={this.state.orderStatus}
              onChange={(e) => {
                this.setState({ orderStatus: e.target.value });
              }}
            >
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Canceled">Canceled</option>
            </select>
          </div>
        </div>
      );
    } else if (this.state.orderStatus === "Shipped") {
      return (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" HTMLfor="inputGroupSelect01">
                Order Status
              </label>
            </div>
            <select
              className="custom-select"
              id="inputGroupSelect01"
              value={this.state.orderStatus}
              onChange={(e) => {
                this.setState({ orderStatus: e.target.value });
              }}
            >
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Canceled">Canceled</option>
            </select>
          </div>
          {this.renderShippedInfo()}
        </div>
      );
    } else if (this.state.orderStatus === "Delivered") {
      return (
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" HTMLfor="inputGroupSelect01">
              Order Status
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            value={this.state.orderStatus}
            onChange={(e) => {
              this.setState({ orderStatus: e.target.value });
            }}
          >
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      );
    } else if (this.state.orderStatus === "Canceled") {
      return (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" HTMLfor="inputGroupSelect01">
                Order Status
              </label>
            </div>
            <select
              className="custom-select"
              id="inputGroupSelect01"
              value={this.state.orderStatus}
              onChange={(e) => {
                this.setState({ orderStatus: e.target.value });
              }}
            >
              <option value="Canceled">Canceled</option>
              {/* <option value="Delivered">Delivered</option> */}
            </select>
          </div>
          {this.renderCancelInfo()}
        </div>
      );
    }
  }

  renderUserInfo() {
    if (this.props.SingleProduct.user === undefined) {
      return;
    } else {
      return (
        <div className="row">
          <div className="col-md-9 order-last order-md-first">
            <h3 className="my-2">
              <b>OrderId:</b> MUGOO {this.props.SingleProduct._id + 1}
            </h3>
            {this.props.SingleProduct.cancelReason === undefined ||
            this.props.SingleProduct.cancelReason === "" ? (
              ""
            ) : (
              <div className="mb-2">
                <h5 className="text-danger">Order Canceled</h5>
                <b>Cancel Reason: </b>
                <span className="text-danger">
                  <b>{this.props.SingleProduct.cancelReason}</b>
                </span>
              </div>
            )}
            <div>
              <h4>Shipping Info</h4>
              <p>
                <b>Name: </b>
                {this.props.SingleProduct.user.username}
              </p>
              <p>
                <b>Phone: </b>
                {this.props.SingleProduct.user.phoneNo}
              </p>
              <p>
                <b>Email: </b>
                {this.props.SingleProduct.user.userEmail}
              </p>
              <p>
                <b>Address: </b>
                {this.props.SingleProduct.user.address}{" "}
                {this.props.SingleProduct.user.city}{" "}
                {this.props.SingleProduct.user.state}{" "}
                {this.props.SingleProduct.user.country} -{" "}
                {this.props.SingleProduct.user.pincode}
              </p>
              <p>
                <b>Company: </b>
                {this.props.SingleProduct.user.company}
              </p>
              <p>
                <b>Actual Price: </b>
                {this.props.SingleProduct.orderInfo.totalPrice}
              </p>
              <p>
                <b>Discount Price: </b>
                {this.props.SingleProduct.orderInfo.discountPrice}
              </p>
              <p>
                <b>Shipping Price: </b>
                {this.props.SingleProduct.orderInfo.shippingPrice}
              </p>
              <p>
                <b>Total Price: </b>
                {this.props.SingleProduct.orderInfo.discountPrice} +{" "}
                {this.props.SingleProduct.orderInfo.shippingPrice} ={" "}
                {this.props.SingleProduct.orderInfo.itemsPrice}
              </p>
              {this.props.SingleProduct.orderStatus === "Processing" ||
              this.props.SingleProduct.orderStatus === "Pending" ||
              this.props.SingleProduct.orderStatus === "Canceled" ? (
                ""
              ) : (
                <div>
                  <p>
                    <b>Package Tracking ID: </b>
                    {this.props.SingleProduct.trackingId}
                  </p>
                  <p>
                    <b>Package Contact Info: </b>
                    {this.props.SingleProduct.contactInfo}
                  </p>
                  <p>
                    <b>Package Delivery Partner: </b>
                    {this.props.SingleProduct.modeOfTransport}
                  </p>
                </div>
              )}
            </div>
            <hr />
            <div className="my-2">
              <h4>Payment</h4>
              <p>
                <b>Payment Mode: </b>
                {this.props.SingleProduct.orderInfo.paymentMode ===
                  "Cash on Delivery" &&
                this.props.SingleProduct.payment === undefined ? (
                  <span className="text-warning">
                    <b>COD</b>
                  </span>
                ) : (
                  <span className="text-success">
                    <b>Online payment</b>
                  </span>
                )}
              </p>
              {this.props.SingleProduct.payment != null ? (
                <div>
                  <h5>Razorpay Details</h5>
                  <p>
                    <b>Razorpay Id: </b>
                    {this.props.SingleProduct.payment.orderId}
                    <br />
                    <b>Paid At: </b>
                    <Moment format=" DD-MMM-YYYY, hh:mm:ss A">
                      {this.props.SingleProduct.payment.paidAt}
                    </Moment>
                    <br />
                    <b>RazorPay Payment Id: </b>
                    {this.props.SingleProduct.payment.paymentId}
                    <br />
                    <b>Payment Status: </b>
                    {this.props.SingleProduct.payment.paymentStatus ===
                    "Success" ? (
                      <span className="text-success">
                        {this.props.SingleProduct.payment.paymentStatus}
                      </span>
                    ) : (
                      <span className="text-danger">
                        {this.props.SingleProduct.payment.paymentStatus}
                      </span>
                    )}
                    <br />
                  </p>
                </div>
              ) : null}
              <p>
                <b>Discount Price: </b>
                {this.props.SingleProduct.orderInfo.itemsPrice}
              </p>
              <p>
                <b>Ordered At: </b>
                <Moment format=" DD-MMM-YYYY, hh:mm:ss A">
                  {this.props.SingleProduct.orderInfo.createdAt}
                </Moment>
              </p>
            </div>
            <hr />
            <div className="my-2">
              <h4>Order Items</h4>
              <div>
                <table width="100%" className="text-center">
                  <thead>
                    <tr>
                      <th>Sl. No</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderOderItems()}</tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-3 order-first order-md-last">
            <form onSubmit={this.onSubmit.bind(this)}>
              {this.renderOptions()}
              <input type="submit" value="Submit" className="btn btn-success" />
            </form>
            <div>
              <button
                className="btn btn-warning my-2"
                onClick={() => this.printOrder()}
              >
                Print Invoice
              </button>
              <MyPrintableComponent printableId="printme" id={this.state.id} />
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    // console.log(this.props.SingleProduct);

    return (
      <div>
        <AdminHeader />
        <div className="col-md-10 offset-md-2 ">
          <div className="container">
            <Link className="btn btn-primary " to="/orderList">
              <i className="fa fa-arrow-left"></i> Back
            </Link>
            {this.renderUserInfo()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    SingleProduct: state.SingleProduct,
    orders: state.products,
  };
};

export default connect(mapStateToProps, { fetchSingleOrder, updateOrder })(
  FetchSingleOrder
);
