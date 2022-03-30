import React, { Component } from "react";
import { trackPromise } from "react-promise-tracker";
import { connect } from "react-redux";
import Moment from "react-moment";
import "moment-timezone";

import Header from "../Navbar/Header";
import { fetchSingleOrder } from "../../actions/paymentActions";
import Footer from "../Footer/Footer";
import MyPrintableComponent from "./MyPrintableComponent";
import "./styles.css";

class FetchUserSingleOrder extends Component {
  state = {
    id: "",
    orderStatus: "",
    update: true,
  };
  componentDidMount() {
    // console.log(this.props.match.params.id);
    const queryParams = new URLSearchParams(window.location.search);
    trackPromise(this.props.fetchSingleOrder(queryParams.get("id")));
    this.setState({
      id: queryParams.get("id"),
    });
  }

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
            <td>
              {Math.ceil(item.cost - item.cost * 0.15) >= 10000
                ? Math.ceil(item.cost - 10000 + (10000 - 10000 * 0.15))
                : Math.ceil(item.cost - item.cost * 0.15)}
            </td>
            <td>
              {Math.ceil(item.cost - item.cost * 0.15) >= 10000
                ? Math.ceil(item.cost - 10000 + (10000 - 10000 * 0.15))
                : Math.ceil(item.cost - item.cost * 0.15) * item.count}
            </td>
          </tr>
        );
      });
    }
  }

  renderOrderInfo() {
    if (this.props.SingleProduct.user === undefined) {
      return;
    } else {
      return (
        <div className="row">
          <div className="col-md-12 order-last order-md-first">
            <h3 className="my-2">
              OrderId: MUG00{this.props.SingleProduct._id + 1}
            </h3>
            <div className="container">
              <button
                className="btn btn-success float-right"
                onClick={() => this.printOrder()}
              >
                Print / Download
              </button>
              <MyPrintableComponent printableId="printme" id={this.state.id} />
            </div>
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
              <p>
                <b>Order Status: </b>
                {this.props.SingleProduct.orderStatus === "Pending" ||
                this.props.SingleProduct.orderStatus === "Canceled" ? (
                  <span className="text-danger">
                    <b>{this.props.SingleProduct.orderStatus}</b>
                  </span>
                ) : (
                  <span className="text-success">
                    <b>{this.props.SingleProduct.orderStatus}</b>
                  </span>
                )}
              </p>
              {this.props.SingleProduct.orderStatus === "Processing" ||
              this.props.SingleProduct.orderStatus === "Pending" ||
              this.props.SingleProduct.orderStatus === "Canceled" ? (
                ""
              ) : (
                <div>
                  <p>
                    <b>Tracking ID: </b>
                    {this.props.SingleProduct.trackingId}
                  </p>
                  <p>
                    <b>Contact Info: </b>
                    {this.props.SingleProduct.contactInfo}
                  </p>
                  <p>
                    <b>Delivery Partner: </b>
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
                    <b>{this.props.SingleProduct.orderInfo.paymentMode}</b>
                  </span>
                ) : (
                  <span className="text-success">
                    <b>Online payment</b>
                  </span>
                )}
              </p>
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
              <p>
                <b>Order Status: </b>
                {this.props.SingleProduct.orderStatus === "Pending" ||
                this.props.SingleProduct.orderStatus === "Canceled" ? (
                  <span className="text-danger">
                    <b>{this.props.SingleProduct.orderStatus}</b>
                  </span>
                ) : (
                  <span className="text-success">
                    <b>{this.props.SingleProduct.orderStatus}</b>
                  </span>
                )}
              </p>
              {this.props.SingleProduct.cancelReason !== undefined ? (
                <p>
                  <b>Cancel Reason: </b>
                  <span className="text-danger">
                    <b>{this.props.SingleProduct.cancelReason}</b>
                  </span>
                </p>
              ) : (
                ""
              )}
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
        </div>
      );
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

  render() {
    // console.log(this.props.SingleProduct);

    return (
      <div>
        <Header />
        <div className="container">{this.renderOrderInfo()}</div>
        <Footer />
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

export default connect(mapStateToProps, { fetchSingleOrder })(
  FetchUserSingleOrder
);
