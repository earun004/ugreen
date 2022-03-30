import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import FileBase64 from "react-file-base64";

import { fetchUsers } from "../../../actions/auth";
import AdminHeader from "../AdminHeader";

class RegisteredUsers extends Component {
  state = {
    search: "",
    comment: "",
    description: "",
    id: "",
    stars: "",
    userName: "",
    approve: false,
  };

  componentDidMount() {
    trackPromise(this.props.fetchUsers());
  }

  clearValues() {
    this.setState({
      search: "",
      title: "",
      description: "",
      id: "",
      stars: "start",
    });
  }

  renderTable() {
    return this.props.users
      .filter((val) => {
        if (this.state.search === "") {
          return val;
        } else if (
          val.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
          val.email.toLowerCase().includes(this.state.search.toLowerCase())
        ) {
          return val;
        }
      })
      .map((product, index) => {
        //   console.log(product.approve);
        return (
          <tr key={product._id}>
            <th>{index + 1}</th>
            <th>{product.name}</th>
            <th>{product.email}</th>
            <th>{product.mobile}</th>
          </tr>
        );
      });
  }

  render() {
    // console.log(this.props.users);
    return (
      <div>
        <AdminHeader />
        <div className="col-md-10 offset-md-2 ">
          <h2 className="text-center">Registered Users</h2>
          <div className="container" style={{ margin: "3rem auto 1rem auto" }}>
            <div className="form-group">
              <label htmlFor="search">Search by username or email:</label>
              <input
                className="form-control"
                value={this.state.search}
                onChange={(e) => {
                  this.setState({ search: e.target.value });
                }}
                placeholder="Search by username or email."
                id="search"
              />
            </div>

            <div className="table-responsive">
              <table className="table table-striped  styled-table text-center">
                <thead>
                  <tr>
                    <th>Sl. No</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
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
    users: state.users,
  };
};

export default connect(mapStateToProps, {
  fetchUsers,
})(RegisteredUsers);
