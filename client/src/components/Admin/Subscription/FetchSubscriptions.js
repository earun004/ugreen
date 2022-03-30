import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import FileBase64 from "react-file-base64";

import {
  fetchSubscribers,
  deleteSubscriber,
} from "../../../actions/OtherActions";
import AdminHeader from "../AdminHeader";

class FetchSubscribers extends Component {
  state = { search: "" };
  componentDidMount() {
    trackPromise(this.props.fetchSubscribers());
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
            <th>{product.email}</th>
            <th>
              <a href={`mailto:${product.email}`}>
                <i className="fa fa-envelope"></i>
              </a>
            </th>
            <td>
              <i
                className="fa fa-trash"
                onClick={() => {
                  if (
                    window.confirm("Do you want to delete this subscriber?")
                  ) {
                    trackPromise(this.props.deleteSubscriber(product._id));
                    this.setState({ id: product._id });
                  }
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
          <h2 className="text-center">Subscriptions</h2>
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
                    <th scope="col">Email</th>
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
  fetchSubscribers,
  deleteSubscriber,
})(FetchSubscribers);
