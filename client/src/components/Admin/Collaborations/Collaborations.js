import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import FileBase64 from "react-file-base64";

import {
  fetchCollaboration,
  deleteCollaboration,
  updateCollaborations,
} from "../../../actions/CollaborationActions";
import AdminHeader from "../AdminHeader";

class FetchSubscribers extends Component {
  state = { search: "", status: false, id: "" };
  componentDidMount() {
    trackPromise(this.props.fetchCollaboration());
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id !== prevState.id) {
      const value = this.props.products.filter(
        (val) => val._id === this.state.id
      );
      this.setState(value[0]);
    }
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
            <th>{product.category}</th>
            <th>{product.email}</th>
            <th>{product.mobile}</th>
            <th>{product.message}</th>
            <td>
              {!product.status ? (
                <span className="text-danger">Pending</span>
              ) : (
                <span className="text-success">Answered</span>
              )}
            </td>

            <th>
              <a href={`mailto:${product.email}`}>
                <i className="fa fa-envelope"></i>
              </a>
              <a href={`tell:${product.mobile}`} className="mx-2">
                <i className="fa fa-phone"></i>
              </a>
            </th>
            <td>
              <a
                data-toggle="modal"
                data-target="#exampleModal"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  this.setState({ id: product._id });
                }}
              >
                <i className="fa fa-pen"></i>
              </a>
            </td>
            <td>
              <i
                className="fa fa-trash"
                onClick={() => {
                  if (
                    window.confirm("Do you want to delete this collaboration?")
                  ) {
                    trackPromise(this.props.deleteCollaboration(product._id));
                  }
                }}
                style={{ cursor: "pointer" }}
              ></i>
            </td>
          </tr>
        );
      });
  }

  onSubmit(e) {
    e.preventDefault();
    trackPromise(this.props.updateCollaborations(this.state.id, this.state));
    // console.log(this.state);
  }

  clearValues() {
    this.setState({
      search: "",
      status: false,
      id: "",
    });
  }

  render() {
    // console.log(this.props.products);
    return (
      <div>
        <AdminHeader />
        <div className="col-md-10 offset-md-2 ">
          <h2 className="text-center">Collaborations</h2>
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
                    <th scope="col">Name</th>
                    <th scope="col">Collaboration</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Message</th>
                    <th>Status</th>
                    <th>Actions</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>{this.renderTable()}</tbody>
              </table>
            </div>
          </div>
        </div>

        {/* modal comes here */}
        <form method="post" onSubmit={this.onSubmit.bind(this)}>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-backdrop="static"
          >
            <div
              className="modal-dialog modal-lg  modal-dialog-centered"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                    Edit Details
                  </h3>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => this.clearValues()}
                    style={{ transform: "translate(-100%,80%)" }}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <label
                        className="input-group-text"
                        HTMLfor="inputGroupSelect01"
                      >
                        Status
                      </label>
                    </div>
                    <select
                      className="custom-select"
                      id="inputGroupSelect01"
                      value={this.state.status}
                      onChange={(e) => {
                        this.setState({ status: e.target.value });
                      }}
                    >
                      <option value={false}>Pending</option>
                      <option value={true}>Answered</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn  btn-danger"
                    data-dismiss="modal"
                    onClick={() => this.clearValues()}
                  >
                    Close
                  </button>
                  <input
                    type="submit"
                    value="Save Changes"
                    className="btn btn-success"
                  />
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
    products: state.products,
  };
};

export default connect(mapStateToProps, {
  fetchCollaboration,
  deleteCollaboration,
  updateCollaborations,
})(FetchSubscribers);
