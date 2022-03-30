import React, { Component } from "react";
import { trackPromise } from "react-promise-tracker";
import { connect } from "react-redux";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import { Chart } from "react-google-charts";

import AdminHeader from "./AdminHeader";
import { fetchOrders } from "../../actions/paymentActions";
import { fetchVisitors } from "../../actions/VisitorsActions";
import { fetchUsers } from "../../actions/auth";
import { Link } from "react-router-dom";

class AdminHome extends Component {
  componentDidMount() {
    trackPromise(this.props.fetchOrders());
    trackPromise(this.props.fetchVisitors());
    trackPromise(this.props.fetchUsers());
  }

  totalRevenue() {
    const total = this.props.orders.reduce((tot, arr) => {
      return tot + arr.orderInfo.itemsPrice;
    }, 0);
    return total;
  }

  pendingOrders() {
    const orders = [];
    this.props.orders.map((order) => {
      if (order.orderStatus === "Pending") {
        orders.push(order);
      }
    });
    return orders.length;
  }

  processingOrders() {
    const orders = [];
    this.props.orders.map((order) => {
      if (order.orderStatus === "Processing") {
        orders.push(order);
      }
    });
    return orders.length;
  }

  shippedOrders() {
    const orders = [];
    this.props.orders.map((order) => {
      if (order.orderStatus === "Shipped") {
        orders.push(order);
      }
    });
    return orders.length;
  }

  deliveredOrders() {
    const orders = [];
    this.props.orders.map((order) => {
      if (order.orderStatus === "Delivered") {
        orders.push(order);
      }
    });
    return orders.length;
  }

  canceledOrders() {
    const orders = [];
    this.props.orders.map((order) => {
      if (order.orderStatus === "Canceled") {
        orders.push(order);
      }
    });
    return orders.length;
  }

  renderGraph() {
    const orders = [];
    this.props.orders.map((order) => {
      orders.push(order._id);
    });
    // console.log(orders);
    return (
      <Sparklines data={orders}>
        <SparklinesLine color="green" />
        <SparklinesSpots />
      </Sparklines>
    );
  }

  userRegisteredMonth() {
    const month = [];
    this.props.users.map((user) => {
      const date = new Date(user.registeredOn);
      month.push(date.getMonth() + 1);
    });

    const countUnique = (month) => {
      const counts = {};
      for (var i = 0; i < month.length; i++) {
        counts[month[i]] = 1 + (counts[month[i]] || 0);
      }
      return counts;
    };
    const totalCount = countUnique(month);
    // console.log(totalCount[11]);
    return totalCount;
  }

  salesReport() {
    const month = [];
    this.props.orders.map((order) => {
      const date = new Date(order.orderInfo.createdAt);
      month.push(date.getMonth() + 1);
    });

    // console.log(month);
    const countUnique = (month) => {
      const counts = {};
      for (var i = 0; i < month.length; i++) {
        counts[month[i]] = 1 + (counts[month[i]] || 0);
      }
      return counts;
    };
    const totalCount = countUnique(month);
    // console.log(totalCount);
    return totalCount;
  }

  render() {
    // console.log(this.props.orders);
    return (
      <div>
        <AdminHeader />
        <div className="row my-3">
          <div className="col-md-10 offset-md-2">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-sm-6">
                  <div className="card-box widget-box-two widget-two-custom ">
                    <div className="media">
                      <div className="avatar-lg rounded-circle bgDarkGreen widget-two-icon align-self-center">
                        <i className="fe-user-check avatar-title font-30 text-white"></i>
                      </div>
                      <Link to="/registeredUsers">
                        <div className="wigdet-two-content media-body">
                          <p
                            className="m-0 text-uppercase font-weight-medium text-truncate"
                            title="Statistics"
                          >
                            Registered Users
                          </p>
                          <h3 className="font-weight-medium my-2">
                            <span data-plugin="counterup">
                              {this.props.users.length}
                            </span>
                          </h3>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-sm-6">
                  <div className="card-box widget-box-two widget-two-custom">
                    <div className="media">
                      <div className="avatar-lg rounded-circle bgDarkGreen widget-two-icon align-self-center">
                        <i className="mdi mdi-currency-inr avatar-title font-30 text-white"></i>
                      </div>

                      <div className="wigdet-two-content media-body">
                        <p
                          className="m-0 text-uppercase font-weight-medium text-truncate"
                          title="Statistics"
                        >
                          Total Revenue
                        </p>
                        <h3 className="font-weight-medium my-2">
                          ₹{" "}
                          <span data-plugin="counterup">
                            {this.totalRevenue()}
                          </span>
                        </h3>
                        {/* <p className="m-0">Jan - Apr 2019</p> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-sm-6">
                  <Link to="/createGallery">
                    <div className="card-box widget-box-two widget-two-custom ">
                      <div className="media">
                        <div className="avatar-lg rounded-circle bgDarkGreen widget-two-icon align-self-center">
                          <i className="mdi mdi-image-frame avatar-title font-30 text-white"></i>
                        </div>

                        <div className="wigdet-two-content media-body">
                          <p
                            className="m-0 text-uppercase font-weight-medium text-truncate"
                            title="Statistics"
                          >
                            Banners
                          </p>
                          <h4 className="font-weight-medium my-2">
                            <span data-plugin="counterup">Add Images</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-xl-3 col-sm-6">
                  <div className="card-box widget-box-two widget-two-custom ">
                    <div className="media">
                      <div className="avatar-lg rounded-circle bgDarkGreen widget-two-icon align-self-center">
                        <i className="dripicons-user-group avatar-title font-30 text-white"></i>
                      </div>

                      <div className="wigdet-two-content media-body">
                        <p
                          className="m-0 text-uppercase font-weight-medium text-truncate"
                          title="Statistics"
                        >
                          TOTAL VISITORS
                        </p>
                        <h3 className="font-weight-medium my-2">
                          <span data-plugin="counterup">
                            {this.props.visitors.length === 0
                              ? null
                              : this.props.visitors[0].count}
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 col-sm-6">
                  <div className="card-box widget-box-two widget-two-custom  customCart">
                    <div className="media">
                      <div className="avatar-lg rounded-circle bgDarkGreen widget-two-icon align-self-center">
                        <i className="dripicons-shopping-bag avatar-title font-30 text-white"></i>
                      </div>

                      <Link to="/orderList">
                        <div className="wigdet-two-content media-body">
                          <p
                            className="m-0 text-uppercase font-weight-medium text-truncate"
                            title="Statistics"
                          >
                            Orders
                          </p>
                          <h3 className="font-weight-medium my-2">
                            <span data-plugin="counterup">
                              {this.props.orders.length}
                            </span>
                          </h3>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-2 col-sm-6">
                  <div className="card-box widget-box-two widget-two-custom customCart">
                    <div className="media">
                      <div className="avatar-lg rounded-circle bgDarkGreen  widget-two-icon align-self-center">
                        <i className="fe-clipboard avatar-title font-30 text-white"></i>
                      </div>

                      <div className="wigdet-two-content media-body">
                        <p
                          className="m-0 text-uppercase font-weight-medium text-truncate"
                          title="Statistics"
                        >
                          Pending
                        </p>
                        <h3 className="font-weight-medium my-2">
                          <span data-plugin="counterup">
                            {this.pendingOrders()}
                          </span>
                        </h3>
                        {/* <p className="m-0">Jan - Apr 2019</p> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-2 col-sm-6">
                  <div className="card-box widget-box-two widget-two-custom  customCart">
                    <div className="media">
                      <div className="avatar-lg rounded-circle bgDarkGreen  widget-two-icon align-self-center">
                        <i className="fe-command avatar-title font-30 text-white"></i>
                      </div>
                      <div className="wigdet-two-content media-body">
                        <p
                          className="m-0 text-uppercase font-weight-medium text-truncate"
                          title="Statistics"
                          style={{ fontSize: "0.7rem" }}
                        >
                          Processed
                        </p>
                        <h3 className="font-weight-medium my-2">
                          <span data-plugin="counterup">
                            {this.processingOrders()}
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-2 col-sm-6">
                  <div className="card-box widget-box-two widget-two-custom  customCart">
                    <div className="media">
                      <div className="avatar-lg rounded-circle bgDarkGreen widget-two-icon align-self-center">
                        <i className="fe-truck avatar-title font-30 text-white"></i>
                      </div>

                      <div className="wigdet-two-content media-body">
                        <p
                          className="m-0 text-uppercase font-weight-medium text-truncate"
                          title="Statistics"
                        >
                          Shipped
                        </p>
                        <h3 className="font-weight-medium my-2">
                          <span data-plugin="counterup">
                            {this.shippedOrders()}
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-2 col-sm-6">
                  <div className="card-box widget-box-two widget-two-custom  customCart">
                    <div className="media">
                      <div className="avatar-lg rounded-circle bgDarkGreen widget-two-icon align-self-center">
                        <i className="fe-inbox  avatar-title font-30 text-white"></i>
                      </div>

                      <div className="wigdet-two-content media-body">
                        <p
                          className="m-0 text-uppercase font-weight-medium text-truncate"
                          title="Statistics"
                          style={{ fontSize: "0.7rem" }}
                        >
                          Delivered
                        </p>
                        <h3 className="font-weight-medium my-2">
                          <span data-plugin="counterup">
                            {this.deliveredOrders()}
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-2 col-sm-6">
                  <div className="card-box widget-box-two widget-two-custom  customCart">
                    <div className="media">
                      <div className="avatar-lg rounded-circle bgDarkGreen widget-two-icon align-self-center">
                        <i className="mdi mdi-close-outline avatar-title font-30 text-white"></i>
                      </div>

                      <div className="wigdet-two-content media-body">
                        <p
                          className="m-0 text-uppercase font-weight-medium text-truncate"
                          title="Statistics"
                          style={{ fontSize: "0.7rem" }}
                        >
                          Canceled
                        </p>
                        <h3 className="font-weight-medium my-2">
                          <span data-plugin="counterup">
                            {this.canceledOrders()}
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container d-md-block d-none">
              <div className="row">
                {/* <div className="col-6">{this.renderGraph()}</div> */}
                <div className="col-12 col-md-4">
                  <Chart
                    width={"500px"}
                    height={"300px"}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ["Task", "Orders Status"],
                      ["Pending", this.pendingOrders()],
                      ["Process", this.processingOrders()],
                      ["Shipped", this.shippedOrders()],
                      ["Delivered", this.deliveredOrders()],
                      ["Canceled", this.canceledOrders()],
                    ]}
                    options={{
                      title: "Orders Report",
                      // Just add this option
                      is3D: true,
                    }}
                    rootProps={{ "data-testid": "2" }}
                  />
                </div>
                <div className="col-12 col-md-4">
                  <Chart
                    width={"450px"}
                    height={"300px"}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ["Months", "Sales"],
                      ["1", this.salesReport()[1]],
                      ["2", this.salesReport()[2]],
                      ["3", this.salesReport()[3]],
                      ["4", this.salesReport()[4]],
                      ["5", this.salesReport()[5]],
                      ["6", this.salesReport()[6]],
                      ["7", this.salesReport()[7]],
                      ["8", this.salesReport()[8]],
                      ["9", this.salesReport()[9]],
                      ["10", this.salesReport()[10]],
                      ["11", this.salesReport()[11]],
                      ["12", this.salesReport()[12]],
                    ]}
                    options={{
                      // Material design options
                      chart: {
                        title: "Sales Report",
                        subtitle: "Sales Report: 2021-2022",
                      },
                    }}
                    // For tests
                    rootProps={{ "data-testid": "2" }}
                  />
                  {/* {console.log(this.userRegisteredMonth()[11])} */}
                </div>
                <div className="col-12 col-md-4">
                  <Chart
                    width={"500px"}
                    height={"300px"}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ["Task", "Users Registered"],
                      ["January", this.userRegisteredMonth()[1]],
                      ["February", this.userRegisteredMonth()[2]],
                      ["March", this.userRegisteredMonth()[3]],
                      ["April", this.userRegisteredMonth()[4]],
                      ["May", this.userRegisteredMonth()[5]],
                      ["June", this.userRegisteredMonth()[6]],
                      ["July", this.userRegisteredMonth()[7]],
                      ["August", this.userRegisteredMonth()[8]],
                      ["September", this.userRegisteredMonth()[9]],
                      ["October", this.userRegisteredMonth()[10]],
                      ["November", this.userRegisteredMonth()[11]],
                      ["December", this.userRegisteredMonth()[12]],
                    ]}
                    options={{
                      title: "User Report",
                      // Just add this option
                      is3D: true,
                    }}
                    rootProps={{ "data-testid": "2" }}
                  />
                  {/* {console.log(this.userRegisteredMonth()[11])} */}
                </div>
              </div>
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
    visitors: state.visitors,
    users: state.users,
  };
};

export default connect(mapStateToProps, {
  fetchOrders,
  fetchVisitors,
  fetchUsers,
})(AdminHome);
