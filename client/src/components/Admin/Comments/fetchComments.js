import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import FileBase64 from "react-file-base64";

import {
  fetchAllComments,
  updateComment,
  deleteComment,
} from "../../../actions/OtherActions";
import AdminHeader from "../AdminHeader";

class EDComments extends Component {
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
    trackPromise(this.props.fetchAllComments());
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id !== prevState.id) {
      const value = this.props.comments.filter(
        (val) => val._id === this.state.id
      );
      this.setState(value[0]);
    }
  }

  onSubmit(e) {
    e.preventDefault();
    trackPromise(this.props.updateComment(this.state.id, this.state));
    // console.log(this.state);
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
    return this.props.comments
      .filter((val) => {
        if (this.state.search === "") {
          return val;
        } else if (
          val.productName
            .toLowerCase()
            .includes(this.state.search.toLowerCase())
        ) {
          return val;
        }
      })
      .map((product, index) => {
        //   console.log(product.approve);
        return (
          <tr key={product._id}>
            <th>{index + 1}</th>
            <th>{product.userName}</th>
            <th>{product.productName}</th>
            <th>{product.comment}</th>
            <td>
              {!product.approve ? (
                <span className="text-danger">Not Approved</span>
              ) : (
                <span className="text-success">Approved</span>
              )}
            </td>
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
                  if (window.confirm("Do you want to delete this Comment?")) {
                    trackPromise(this.props.deleteComment(product._id));
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
    // console.log(this.props.comments);
    return (
      <div>
        <AdminHeader />
        <div className="col-md-10 offset-md-2 ">
          <h2 className="text-center">Comments</h2>
          <div className="container" style={{ margin: "3rem auto 1rem auto" }}>
            <div className="form-group">
              <label htmlFor="search">Search By Product Name:</label>
              <input
                className="form-control"
                value={this.state.search}
                onChange={(e) => {
                  this.setState({ search: e.target.value });
                }}
                placeholder="Search By Product Name."
                id="search"
              />
            </div>

            <div className="table-responsive">
              <table className="table table-striped  styled-table text-center">
                <thead>
                  <tr>
                    <th>Sl. No</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Comment</th>
                    <th scope="col">Status</th>
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
                        Approve Status
                      </label>
                    </div>
                    <select
                      className="custom-select"
                      id="inputGroupSelect01"
                      value={this.state.approve}
                      onChange={(e) => {
                        this.setState({ approve: e.target.value });
                      }}
                    >
                      <option value={true}>Agree</option>
                      <option value={false}>Disagree</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>User Name</label>
                    <input
                      type="text"
                      name="userName"
                      className="form-control"
                      value={this.state.userName}
                      onChange={(e) => {
                        this.setState({ userName: e.target.value });
                      }}
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Comment</label>
                    <textarea
                      type="text"
                      name="comment"
                      className="form-control"
                      value={this.state.comment}
                      onChange={(e) => {
                        this.setState({ comment: e.target.value });
                      }}
                      autoComplete="off"
                      row="3"
                      columns="5"
                    ></textarea>
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
    comments: state.comments,
  };
};

export default connect(mapStateToProps, {
  fetchAllComments,
  updateComment,
  deleteComment,
})(EDComments);
