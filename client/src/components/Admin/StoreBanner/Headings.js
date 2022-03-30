import React from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import PropTypes from "prop-types";

import {
  createHeading,
  fetchHeadings,
  updateHeading,
  deleteHeading,
} from "../../../actions/HeadingActions";
import AdminHeader from "../AdminHeader";
import FileBase64 from "react-file-base64";

class Headings extends React.Component {
  state = {
    id: "",
    home1: "",
    home2: "",
    title1: "",
    title2: "",
  };

  componentDidMount() {
    trackPromise(this.props.fetchHeadings());
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id !== prevState.id) {
      const value = this.props.headings.filter(
        (val) => val._id === this.state.id
      );
      this.setState(value[0]);
    }
  }

  onSubmit(e) {
    e.preventDefault();
    // console.log(this.state);
    if (this.props.headings.length >= 2) {
      alert(
        "You can add only two heading forms. If you want to add please delete and add again."
      );
    } else {
      trackPromise(this.props.createHeading(this.state));
      this.setState({
        home1: "",
        home2: "",
        title1: "",
        title2: "",
      });
    }
  }

  clearValues() {
    this.setState({
      home1: "",
      home2: "",
      title1: "",
      title2: "",
    });
  }

  updateForm(e) {
    e.preventDefault();
    trackPromise(this.props.updateHeading(this.state.id, this.state));
    // console.log(this.state);
  }

  renderTable() {
    return this.props.headings.map((heading, index) => {
      return (
        <tr key={heading._id}>
          <td>{index + 1}</td>
          <td>
            <h4>{heading.home1}</h4>
          </td>
          <td>
            <h4>{heading.home2}</h4>
          </td>
          <td>
            <h4>{heading.title1}</h4>
          </td>
          <td>
            <h4>{heading.title2}</h4>
          </td>
          <td>
            <a
              data-toggle="modal"
              data-target="#exampleModal"
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.setState({ id: heading._id });
              }}
            >
              <i className="fa fa-pen mt-2"></i>
            </a>
          </td>
          <td>
            <a
              onClick={() => {
                if (window.confirm("Do you want to delete headings?")) {
                  trackPromise(this.props.deleteHeading(heading._id));
                }
              }}
              style={{ cursor: "pointer" }}
            >
              <i className="fa fa-trash mt-2"></i>
            </a>
          </td>
        </tr>
      );
    });
  }

  handleKeyDown(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  render() {
    // console.log(this.props.headings);
    return (
      <div>
        <AdminHeader />

        <div className="col-md-10 offset-md-2 ">
          <div className="op-header">
            <div className="section-header text-center">
              <h1 className="f2 c3">Add and Edit Headings</h1>
              {/* <h2 className="f2 c3">Select Category</h2> */}
            </div>
          </div>
          <br />
          <div className="container">
            <form action="" onSubmit={this.onSubmit.bind(this)}>
              <div className="form-group">
                <label>
                  Home page heading 1 <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex: 15% off*"
                  required
                  value={this.state.home1}
                  onChange={(e) => {
                    this.setState({ home1: e.target.value });
                  }}
                />
              </div>

              <div className="form-group">
                <label>
                  Home page heading 2 <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex: Avail this offer on your first purchase."
                  required
                  value={this.state.home2}
                  onChange={(e) => {
                    this.setState({ home2: e.target.value });
                  }}
                />
              </div>

              <div className="form-group">
                <label>
                  Title 1 <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex: Top Sellers"
                  required
                  value={this.state.title1}
                  onChange={(e) => {
                    this.setState({ title1: e.target.value });
                  }}
                />
              </div>

              <div className="form-group">
                <label>
                  Title 2 <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex: Only For You"
                  required
                  value={this.state.title2}
                  onChange={(e) => {
                    this.setState({ title2: e.target.value });
                  }}
                />
              </div>
              <input
                type="submit"
                value="Submit"
                className="btn py-n3 btn-primary "
              />
            </form>
            <br />
            <br />
            <br />

            <br />
            <div className="table-responsive">
              <table className="table table-striped styled-table text-center">
                <thead>
                  <tr>
                    <th>Sl. No</th>
                    <th>Home Page heading 1</th>
                    <th>Home Page heading sub heading</th>
                    <th>Title 1</th>
                    <th>Title 2</th>
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
        <form method="post" onSubmit={this.updateForm.bind(this)}>
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
                  <div className="form-group">
                    <label>
                      Home page heading 1 <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ex: 15% off*"
                      required
                      value={this.state.home1}
                      onChange={(e) => {
                        this.setState({ home1: e.target.value });
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Home page heading 2 <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ex: Avail this offer on your first purchase."
                      required
                      value={this.state.home2}
                      onChange={(e) => {
                        this.setState({ home2: e.target.value });
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Title 1 <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ex: Top Sellers"
                      required
                      value={this.state.title1}
                      onChange={(e) => {
                        this.setState({ title1: e.target.value });
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      Title 2 <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ex: Only For You"
                      required
                      value={this.state.title2}
                      onChange={(e) => {
                        this.setState({ title2: e.target.value });
                      }}
                    />
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

Headings.propTypes = {
  aws_s3_image_url: PropTypes.string,
  msg: PropTypes.string,
  type: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    headings: state.headings,
  };
};

export default connect(mapStateToProps, {
  createHeading,
  fetchHeadings,
  updateHeading,
  deleteHeading,
})(Headings);
