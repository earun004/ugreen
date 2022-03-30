import React from "react";
import { trackPromise } from "react-promise-tracker";
import { connect } from "react-redux";
import Moment from "react-moment";
import "moment-timezone";

import { fetchSingleOrder } from "../../actions/paymentActions";

class MyPrintableComponent extends React.Component {
  componentDidMount() {
    trackPromise(this.props.fetchSingleOrder(this.props.id));
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

  renderInvoice() {
    if (this.props.SingleProduct.orderInfo === undefined) {
      return;
    } else {
      return (
        <div className="row">
          <div className="col-12 p-3 d-flex justify-content-between">
            {/* <p><b>Invoice No:</b></p> */}
            <div>
              <h4>
                <b>Order Id: </b>
                MUG00{this.props.SingleProduct._id}
              </h4>
              <h4>
                <b>Order Date: </b>
                <Moment format=" DD-MMM-YYYY, hh:mm:ss A">
                  {this.props.SingleProduct.orderInfo.createdAt}
                </Moment>
              </h4>
            </div>
            <div>
              <h4>
                <b>Invoice Number: </b>
                INV00{this.props.SingleProduct._id}
              </h4>
              <h4>
                <b>Invoice Date: </b>
                <Moment format=" DD-MMM-YYYY, hh:mm:ss A">
                  {this.props.SingleProduct.orderInfo.createdAt}
                </Moment>
              </h4>
            </div>
          </div>
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped  styled-table text-left">
                <thead>
                  <tr>
                    <th>Billing Info:</th>
                    <th>Shipping Info:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
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
                      <p></p>
                    </td>

                    <td>
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
                      <p></p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr style={{ height: "5px", borderTop: "2px dashed black" }} />
              <table className="table table-striped  styled-table text-left">
                <thead>
                  <tr>
                    <th>Payment Method</th>
                    <th>Shipping Info:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <b>Payment Mode: </b>
                        {this.props.SingleProduct.orderInfo.paymentMode ===
                        "Cash on Delivery"
                          ? "Cash on Delivery"
                          : "Online Payment"}
                      </p>
                    </td>
                    <td>
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
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12">
            <h4>Order Items</h4>
            <div>
              <table className="table table-striped  styled-table text-left">
                <thead>
                  <tr>
                    <th>Sl. No</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>{this.renderOderItems()}</tbody>
              </table>
              <div className="text-right">
                <h5>
                  Subtotal: ₹{this.props.SingleProduct.orderInfo.itemsPrice}
                </h5>
                <h5>
                  Grand Total: ₹{this.props.SingleProduct.orderInfo.itemsPrice}
                </h5>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div id={this.props.printableId}>
        <h2>Multiplex Urban Green India Pvt Ltd.</h2>
        {this.renderInvoice()}
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
  MyPrintableComponent
);
