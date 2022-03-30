import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import FileBase64 from "react-file-base64";
import PropTypes from "prop-types";

import {
  fetchBlogs,
  updateBlog,
  deleteBlog,
} from "../../../actions/OtherActions";
import AdminHeader from "../AdminHeader";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class EDProducts extends Component {
  state = {
    search: "",
    title: "",
    description: "",
    id: "",
    image: "",
    description1: "",
  };

  componentDidMount() {
    trackPromise(this.props.fetchBlogs());
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id !== prevState.id) {
      const value = this.props.products.filter(
        (val) => val._id === this.state.id
      );
      this.setState(value[0]);
    }
  }

  onSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("photo", this.state.image);
    trackPromise(this.props.updateBlog(this.state.id, this.state, formData));
    // console.log(this.state);
  }

  clearValues() {
    this.setState({
      search: "",
      title: "",
      description: "",
      description1: "",
      id: "",
      image: "",
    });
  }

  renderTable() {
    return this.props.products
      .filter((val) => {
        if (this.state.search === "") {
          return val;
        } else if (
          val.title.toLowerCase().includes(this.state.search.toLowerCase())
        ) {
          return val;
        }
      })
      .map((product, index) => {
        return (
          <tr key={product._id}>
            <th>{index + 1}</th>
            <th>{product.title}</th>
            <td className="text-truncate" style={{ maxWidth: "50px" }}>
              {product.description}
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
                  if (window.confirm("Do you want to delete this Blog?")) {
                    trackPromise(this.props.deleteBlog(product._id));
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
          <div className="op-header">
            <div className="section-header text-center">
              {/* <!-- <h2 className="f2 c3">Contact us</h2> --> */}
              <h1 className="f1 fw-7 cw">Edit Recent posts and updates</h1>
              {/* <h2 className="f2 c3">Select Category</h2> */}
            </div>
          </div>
          <div className="container" style={{ margin: "3rem auto 1rem auto" }}>
            <div className="form-group">
              <label htmlFor="search">Search By Blog Name:</label>
              <input
                className="form-control"
                value={this.state.search}
                onChange={(e) => {
                  this.setState({ search: e.target.value });
                }}
                placeholder="Search By Blog Name."
                id="search"
              />
            </div>

            <div className="table-responsive">
              <table className="table table-striped  styled-table text-center">
                <thead>
                  <tr>
                    <th>Sl. No</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
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
                <div className="modal-body modal_body">
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      value={this.state.title}
                      onChange={(e) => {
                        this.setState({ title: e.target.value });
                      }}
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Short Description <span className="text-danger">*</span>
                    </label>
                    <textarea
                      type="text"
                      name="description1"
                      className="form-control products_input"
                      value={this.state.description1}
                      onChange={(e) => {
                        this.setState({ description1: e.target.value });
                      }}
                      autoComplete="off"
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <CKEditor
                      editor={ClassicEditor}
                      data={this.state.description}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        this.setState({ description: data });
                        // console.log(this.state.description);
                      }}
                    />
                  </div>
                  <div>
                    <div>
                      <label>Image</label>
                      <br />
                      <input
                        name="image"
                        type="file"
                        require
                        accept="image/*"
                        onChange={(e) => {
                          this.setState({ image: e.currentTarget.files[0] });
                        }}
                      />
                    </div>
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

EDProducts.propTypes = {
  aws_s3_image_url: PropTypes.string,
  msg: PropTypes.string,
  type: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    products: state.blogs,
  };
};

export default connect(mapStateToProps, {
  fetchBlogs,
  updateBlog,
  deleteBlog,
})(EDProducts);
