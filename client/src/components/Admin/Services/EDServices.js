import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import PropTypes from "prop-types";

import {
  fetchServices,
  updateServices,
  deleteService,
} from "../../../actions/OtherActions";
import AdminHeader from "../AdminHeader";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class EDServices extends Component {
  state = {
    title: "",
    mrp: "",
    price: "",
    table: "",
    description: "",
    description1: "",
    vseeds: "",
    image: "",
    image1: "",
    image2: "",
    id: "",
    search: "",
  };

  componentDidMount() {
    trackPromise(this.props.fetchServices());
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
    trackPromise(
      this.props.updateServices(this.state.id, this.state, formData)
    );
    // console.log(this.state);
  }

  clearValues() {
    this.setState({
      title: "",
      mrp: "",
      price: "",
      table: "",
      description: "",
      description1: "",
      vseeds: "",
      image: "",
      image1: "",
      image2: "",
      id: "",
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
            <td>{product.mrp}</td>
            <td>{product.price}</td>
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
                  if (window.confirm("Do you want to delete this service?")) {
                    trackPromise(this.props.deleteService(product._id));
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
          <h2 className="text-center">Edit or Delete Services</h2>
          <div className="container" style={{ margin: "3rem auto 1rem auto" }}>
            <div className="form-group">
              <label htmlFor="search">Search By Service Name:</label>
              <input
                className="form-control"
                value={this.state.search}
                onChange={(e) => {
                  this.setState({ search: e.target.value });
                }}
                placeholder="Search By Service Name."
                id="search"
              />
            </div>

            <div className="table-responsive">
              <table className="table table-striped  styled-table text-center">
                <thead>
                  <tr>
                    <th>Sl. No</th>
                    <th scope="col">Title</th>
                    <th scope="col">MRP</th>
                    <th scope="col">Selling Price</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
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
                    <label>
                      Title <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      className="form-control products_input"
                      value={this.state.title}
                      onChange={(e) => {
                        this.setState({ title: e.target.value });
                      }}
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>
                          MRP <span className="text-danger">*</span>
                        </label>
                        <input
                          type="number"
                          name="mrp"
                          className="form-control products_input"
                          value={this.state.mrp}
                          onChange={(e) => {
                            this.setState({ mrp: e.target.value });
                          }}
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label>
                          Selling Price <span className="text-danger">*</span>
                        </label>
                        <input
                          type="number"
                          name="price"
                          className="form-control products_input"
                          value={this.state.price}
                          onChange={(e) => {
                            this.setState({ price: e.target.value });
                          }}
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label>
                      Package Info in Table{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <CKEditor
                      editor={ClassicEditor}
                      data={this.state.table}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        this.setState({ table: data });
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Description</label>
                    <CKEditor
                      editor={ClassicEditor}
                      data={this.state.description}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        this.setState({ description: data });
                      }}
                    />
                  </div>
                  {/* <div className="mb-3">
                    <label>Short Description</label>
                    <CKEditor
                      editor={ClassicEditor}
                      data={this.state.description1}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        this.setState({ description1: data });
                      }}
                    />
                  </div> */}
                  {/* <div className="mb-3">
                    <label>Variety Of Seeds</label>
                    <CKEditor
                      editor={ClassicEditor}
                      data={this.state.vseeds}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        this.setState({ vseeds: data });
                      }}
                    />
                  </div> */}
                  <label>
                    Images <span className="text-warning">*</span>
                  </label>
                  <div className="form-control d-flex">
                    {/* <FileBase64
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) => this.setState({ image: base64 })}
                      className="form-control"
                    />
                    <FileBase64
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) => this.setState({ image1: base64 })}
                      className="form-control"
                    />
                    <FileBase64
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) => this.setState({ image2: base64 })}
                      className="form-control"
                    /> */}
                    <input
                      name="image"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        this.setState({ image: e.currentTarget.files[0] });
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

EDServices.propTypes = {
  aws_s3_image_url: PropTypes.string,
  msg: PropTypes.string,
  type: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, {
  fetchServices,
  updateServices,
  deleteService,
})(EDServices);
