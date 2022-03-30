import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import Moment from "react-moment";
import "moment-timezone";

import {
  fetchServicesForm,
  deleteServiceForm,
} from "../../../actions/OtherActions";
import AdminHeader from "../AdminHeader";

class ServiceAppointments extends Component {
  state = { search: "" };
  componentDidMount() {
    trackPromise(this.props.fetchServicesForm());
  }

  renderTable() {
    return this.props.products
      .filter((val) => {
        if (this.state.search === "") {
          return val;
        } else if (
          val.email.toLowerCase().includes(this.state.search.toLowerCase())
        ) {
          return val;
        }
      })
      .map((product, index) => {
        return (
          <tr key={product._id}>
            <th>{index + 1}</th>
            <th>{product.name}</th>
            <th>
              <Moment format=" DD-MMM-YYYY, hh:mm:ss A">{product.date}</Moment>
            </th>
            <th>{product.email}</th>
            <th>{product.phone}</th>
            <th>{product.looking}</th>
            <th>{product.area}</th>
            <th>{product.message}</th>
            <th>
              <a href={`mailto:${product.email}`}>
                <i className="fa fa-envelope"></i>
              </a>
            </th>
            <td>
              <i
                className="fa fa-trash"
                onClick={() => {
                  trackPromise(this.props.deleteServiceForm(product._id));
                  this.setState({ id: product._id });
                }}
                style={{ cursor: "pointer" }}
              ></i>
            </td>
          </tr>
        );
      });
  }

  render() {
    // console.log(this.props.products);
    return (
      <div>
        <AdminHeader />
        <div className="col-md-10 offset-md-2 ">
          <h2 className="text-center">Appointments</h2>
          <div className="container" style={{ margin: "3rem auto 1rem auto" }}>
            <div className="form-group">
              <label htmlFor="search">Search By Email Id:</label>
              <input
                className="form-control"
                value={this.state.search}
                onChange={(e) => {
                  this.setState({ search: e.target.value });
                }}
                placeholder="Search By Email Id."
                id="search"
              />
            </div>

            <div className="table-responsive">
              <table className="table table-striped  styled-table text-center">
                <thead>
                  <tr>
                    <th>Sl. No</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile No.</th>
                    <th scope="col">Looking For</th>
                    <th scope="col">Area</th>
                    <th scope="col">Message</th>
                    <th>Reply</th>
                    <th>Delete</th>
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
    products: state.products,
  };
};

export default connect(mapStateToProps, {
  fetchServicesForm,
  deleteServiceForm,
})(ServiceAppointments);
