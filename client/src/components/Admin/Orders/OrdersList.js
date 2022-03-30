import React, { Component } from "react";
import { trackPromise } from "react-promise-tracker";
import { connect } from "react-redux";
import Moment from "react-moment";
import "moment-timezone";
import { Link } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar } from "react-date-range";
import { DateRangePicker } from "react-date-range";

import { fetchOrders } from "../../../actions/paymentActions";
import AdminHeader from "../AdminHeader";
import { ExportToExcel } from "./ExportToExcel";

class OrdersList extends Component {
  state = {
    update: true,
    search: "",
    fileName:
      "MUG Sales Report " +
      new Date().getDate() +
      "-" +
      parseInt(new Date().getMonth() + 1) +
      "-" +
      new Date().getFullYear() +
      " " +
      new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ":" +
      new Date().getSeconds(),

    data: {},
  };

  componentDidMount() {
    trackPromise(this.props.fetchOrders());
    this.setState({ update: false });
    const date = new Date();
    const prev = new Date("11-11-2021");
    console.log(date > prev);
  }

  handleSelect(date) {
    console.log(date); // native Date object
  }

  renderTable() {
    return this.props.orders
      .filter((val) => {
        if (this.state.search === "") {
          return val;
        } else if (
          val.user.username
            .toLowerCase()
            .includes(this.state.search.toLowerCase()) ||
          val.orderStatus
            .toLowerCase()
            .includes(this.state.search.toLowerCase()) ||
          val.user.userEmail
            .toLowerCase()
            .includes(this.state.search.toLowerCase())
        ) {
          // console.log(val._id);
          return val;
        }
      })
      .reverse()
      .map((order, index) => {
        return (
          <tr key={order._id}>
            <td>{index + 1}</td>
            <td>
              <Moment format=" DD-MMM-YYYY, hh:mm:ss A">
                {order.orderInfo.createdAt}
              </Moment>
            </td>
            <td>MUG00{order._id + 1}</td>
            <td>INV00{order._id + 1}</td>
            <td>{order.user === undefined ? "" : order.user.username}</td>
            <td>{order.orderItems.length}</td>
            <td>{order.orderInfo.itemsPrice}</td>
            <td>
              {order.orderInfo.paymentMode === "Cash on Delivery" &&
              order.payment === undefined ? (
                <span className="text-warning">
                  <b>COD</b>
                </span>
              ) : (
                <span className="text-success">
                  <b>Online payment</b>
                </span>
              )}
            </td>
            <td>
              {order.orderStatus === "Pending" ||
              order.orderStatus === "Canceled" ? (
                <span className="text-danger">{order.orderStatus}</span>
              ) : (
                <span className="text-success">{order.orderStatus}</span>
              )}
            </td>
            <td>
              <ul
                className="d-flex justify-content-around w-75 my-auto"
                style={{ listStyle: "none" }}
              >
                <li>
                  <a
                    href={`/singleOrder?id=${order._id}`}
                    className="btn btn-sm btn-primary "
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                </li>
                {/* <li>
                <a
                  style={{ cursor: "pointer" }}
                  className="btn btn-sm btn-danger text-white"
                >
                  <i className="fa fa-trash"></i>
                </a>
              </li> */}
              </ul>
            </td>
          </tr>
        );
      });
  }

  renderExcelData() {
    // Excel Info
    const orders = [];
    this.props.orders.map((order) => {
      orders.push({
        "Order Id": "MUG00" + order._id + 1,
        "Invoice Number": "INV00" + order._id + 1,
        "No. of items ordered": order.orderItems.length,
        "Original Price": order.orderInfo.totalPrice,
        "Discount Price (15%)": order.orderInfo.discountPrice,
        "Shipping Price": order.orderInfo.shippingPrice,
        "Total Price": order.orderInfo.itemsPrice,
        "Order Status": order.orderStatus,
        "Payment Mode":
          order.orderInfo.paymentMode === "Cash on Delivery" &&
          order.payment === undefined
            ? "COD"
            : "Online payment",
        "Ordered At":
          new Date(order.orderInfo.createdAt).getDate() +
          "-" +
          parseInt(new Date(order.orderInfo.createdAt).getMonth() + 1) +
          "-" +
          new Date(order.orderInfo.createdAt).getFullYear() +
          " " +
          new Date(order.orderInfo.createdAt).getHours() +
          ":" +
          new Date(order.orderInfo.createdAt).getMinutes() +
          ":" +
          new Date(order.orderInfo.createdAt).getSeconds(),
        "Cancel Reason": order.cancelReason,
        Comments: order.comments,
        Transportation: order.contactInfo,
        "Mode of Transport": order.modeOfTransport,
        "Customer Name": order.user.username,
        "Customer Number": order.user.phoneNo,
        "Customer Email Id": order.user.userEmail,
        "Customer Address":
          order.user.address +
          order.user.company +
          order.user.city +
          order.user.state +
          order.user.country +
          "-" +
          order.user.pincode,
      });
    });
    return orders;
  }

  render() {
    return (
      <div>
        <AdminHeader />
        <div className="col-md-10 offset-md-2 ">
          <h2 className="text-center">Order List</h2>
          <div className="">
            <div className="">
              <div className="form-group">
                <label htmlFor="search">Search By User Name or Email ID:</label>
                <input
                  className="form-control"
                  value={this.state.search}
                  onChange={(e) => {
                    this.setState({ search: e.target.value });
                  }}
                  placeholder="Search By User Name or Email ID."
                  id="search"
                />
              </div>
              <div className="row">
                <div className="col-12 col-md-8">
                  <div className="input-group mb-3 w-50 my-2">
                    <div className="input-group-prepend">
                      <label
                        className="input-group-text"
                        HTMLfor="inputGroupSelect01"
                      >
                        Search By Order Status
                      </label>
                    </div>
                    <select
                      className="custom-select"
                      id="inputGroupSelect01"
                      value={this.state.search}
                      onChange={(e) => {
                        this.setState({ search: e.target.value });
                      }}
                    >
                      <option value="">All</option>
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Canceled">Canceled</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>
                </div>
                {/* <DateRangePicker
                  ranges={[selectionRange]}
                  onChange={this.handleSelect}
                /> */}
                {/* <Calendar date={new Date()} onChange={this.handleSelect} /> */}
                <div className="col-12 col-md-4 text-center">
                  <ExportToExcel
                    apiData={this.renderExcelData()}
                    fileName={this.state.fileName}
                  />
                </div>
              </div>
              <table className="table table-striped  styled-table text-center">
                <thead>
                  <tr>
                    <th>Sl. No</th>
                    <th>Date</th>
                    <th>Order Id</th>
                    <th>Invoice No.</th>
                    <th>Name</th>
                    <th>No. of Items</th>
                    <th>Amount</th>
                    <th>Payment Mode</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>{this.renderTable()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

export default connect(mapStateToProps, { fetchOrders })(OrdersList);
