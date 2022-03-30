import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import PropTypes from "prop-types";

import {
  fetchProducts,
  deleteProduct,
  updateProducts,
} from "../../../actions/Products";
import AdminHeader from "../AdminHeader";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class EDProducts extends Component {
  state = {
    search: "",
    available: "",
    benefits: "",
    description: "",
    directions: "",
    image: "",
    image1: "",
    image2: "",
    name: "",
    price: "",
    id: "",
    category: "",
    mrp: "",
    displayIn: "",
    offers: false,
  };

  componentDidMount() {
    trackPromise(this.props.fetchProducts());
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
      this.props.updateProducts(this.state.id, this.state, formData)
    );
    // console.log(this.state);
  }

  clearValues() {
    this.setState({
      search: "",
      available: "",
      benefits: "",
      description: "",
      directions: "",
      image: "",
      name: "",
      price: "",
      id: "",
      mrp: "",
      image1: "",
      image2: "",
      displayIn: "",
      category: "",
      offers: false,
    });
  }

  renderTable() {
    return this.props.products
      .filter((val) => {
        if (this.state.search === "") {
          return val;
        } else if (
          val.name.toLowerCase().includes(this.state.search.toLowerCase())
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
            <td>{product.available}</td>
            <td>{product.price}</td>
            <td>
              {!product.offers ? (
                <span className="text-danger">Not displayed</span>
              ) : (
                <span className="text-success">Displayed</span>
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
                  if (window.confirm("Do you want to delete this product?")) {
                    trackPromise(this.props.deleteProduct(product._id));
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
          <h2 className="text-center">Edit or Delete Products</h2>
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
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Available</th>
                    <th scope="col">Price</th>
                    <th scope="col">Offers page</th>
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
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <label
                            className="input-group-text"
                            HTMLfor="inputGroupSelect01"
                          >
                            Category
                          </label>
                        </div>
                        <select
                          className="custom-select"
                          id="inputGroupSelect01"
                          value={this.state.category}
                          onChange={(e) => {
                            this.setState({ category: e.target.value });
                          }}
                        >
                          <option className="disabled" selected>
                            Select Category
                          </option>
                          {/* <option value="OnlyForYou">Only For You</option>
                        <option value="BestDeals">Best Deals</option> */}
                          <option value="PottingSoil">Potting Soil</option>
                          <option value="PlantHealth">Plant Health</option>
                          <option value="Seeds">Seeds</option>
                          <option value="Accessories">Accessories</option>
                          <option selected value="Others">
                            Others
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <label
                            className="input-group-text"
                            HTMLfor="inputGroupSelect01"
                          >
                            Display in
                          </label>
                        </div>
                        <select
                          className="custom-select"
                          id="inputGroupSelect01"
                          value={this.state.displayIn}
                          onChange={(e) => {
                            this.setState({ displayIn: e.target.value });
                          }}
                        >
                          <option className="disabled" selected>
                            Select Display Category
                          </option>
                          <option value="OnlyForYou">Only For You</option>
                          <option value="BestDeals">Best Deals</option>
                          <option value="">None</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <label
                        className="input-group-text"
                        HTMLfor="inputGroupSelect01"
                      >
                        Display in offers page
                      </label>
                    </div>
                    <select
                      className="custom-select"
                      id="inputGroupSelect01"
                      value={this.state.offers}
                      onChange={(e) => {
                        this.setState({ offers: e.target.value });
                      }}
                    >
                      <option value={false}>No</option>
                      <option value={true}>Yes</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={(e) => {
                        this.setState({ name: e.target.value });
                      }}
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Available</label>
                    <input
                      type="text"
                      name="available"
                      className="form-control"
                      value={this.state.available}
                      onChange={(e) => {
                        this.setState({ available: e.target.value });
                      }}
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Selling Price</label>
                    <input
                      type="number"
                      name="price"
                      className="form-control"
                      value={this.state.price}
                      onChange={(e) => {
                        this.setState({ price: e.target.value });
                      }}
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>MRP</label>
                    <input
                      type="number"
                      name="mrp"
                      className="form-control"
                      value={this.state.mrp}
                      onChange={(e) => {
                        this.setState({ mrp: e.target.value });
                      }}
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Benefits</label>
                    <CKEditor
                      editor={ClassicEditor}
                      data={this.state.benefits}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        this.setState({ benefits: data });
                        // console.log(this.state.description);
                      }}
                    />
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
                  <div className="form-group">
                    <label>Directions</label>
                    <CKEditor
                      editor={ClassicEditor}
                      data={this.state.directions}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        this.setState({ directions: data });
                        // console.log(this.state.description);
                      }}
                    />
                  </div>

                  <div>
                    <div>
                      <label>Images: </label>
                      <br />
                      <div className="d-flex">
                        {/* <img src={this.state.image} width="200px" /> */}
                        <input
                          name="image"
                          type="file"
                          onChange={(e) => {
                            this.setState({ image: e.currentTarget.files[0] });
                          }}
                        />
                        {/* <FileBase64
                          type="file"
                          multiple={false}
                          onDone={({ base64 }) =>
                            this.setState({ image: base64 })
                          }
                          required
                        />
                        <FileBase64
                          type="file"
                          multiple={false}
                          onDone={({ base64 }) =>
                            this.setState({ image1: base64 })
                          }
                          required
                        />
                        <FileBase64
                          type="file"
                          multiple={false}
                          onDone={({ base64 }) =>
                            this.setState({ image2: base64 })
                          }
                          required
                        /> */}
                      </div>
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
    products: state.products,
  };
};

export default connect(mapStateToProps, {
  fetchProducts,
  deleteProduct,
  updateProducts,
})(EDProducts);
