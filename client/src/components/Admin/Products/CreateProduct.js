import React from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import PropTypes from "prop-types";

import { createProduct } from "../../../actions/Products";
import FileBase64 from "react-file-base64";
import AdminHeader from "../AdminHeader";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class CreateProduct extends React.Component {
  state = {
    name: "",
    image: "",
    image1: "",
    image2: "",
    description: "",
    price: "",
    available: "",
    benefits: "",
    directions: "",
    category: "",
    mrp: "",
    displayIn: "",
  };

  clearValues() {
    this.setState({
      name: "",
      description: "",
      price: "",
      available: "",
      benefits: "",
      directions: "",
      category: "",
      mrp: "",
      image1: "",
      image2: "",
      displayIn: "",
    });
  }

  onSubmit(e) {
    e.preventDefault();
    // console.log(this.state);
    let formData = new FormData();
    formData.append("photo", this.state.image);
    trackPromise(this.props.createProduct(this.state, formData));
    this.clearValues();
  }

  handleKeyDown(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  render() {
    // console.log(this.props.testimonials);
    return (
      <div>
        <AdminHeader />
        <div className="row">
          <div className="col-md-10 offset-md-2 ">
            <div className="container">
              <h2 className="text-center">Product Form</h2>
              <form action="" onSubmit={this.onSubmit.bind(this)}>
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
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>
                    Product Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control products_input"
                    value={this.state.name}
                    onChange={(e) => {
                      this.setState({ name: e.target.value });
                    }}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <label>
                        MRP <span className="text-danger">* </span>
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
                        Selling Price <span className="text-danger">* </span>
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
                <div className="form-group">
                  <label>
                    Available <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="available"
                    className="form-control products_input"
                    value={this.state.available}
                    onChange={(e) => {
                      this.setState({ available: e.target.value });
                    }}
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <label>
                    Description <span className="text-danger">*</span>
                  </label>
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
                  <label>
                    Benefits <span className="text-danger">*</span>
                  </label>
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
                  <label>
                    Directions <span className="text-danger">*</span>
                  </label>
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
                <label>
                  Image <span className="text-danger">*</span>
                </label>
                <div className="form-group">
                  {/* <FileBase64
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => this.setState({ image: base64 })}
                    required
                    className="filestyle"
                  /> */}
                  <input
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      this.setState({ image: e.currentTarget.files[0] });
                    }}
                  />
                  {/* <FileBase64
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => this.setState({ image1: base64 })}
                    required
                    className="filestyle"
                  />
                  <FileBase64
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => this.setState({ image2: base64 })}
                    required
                    className="filestyle"
                  /> */}
                </div>
                <br />
                <br />
                <input
                  type="submit"
                  value="submit"
                  className="btn btn-primary sub_btn mr-3"
                />
                <button
                  className="btn btn-danger sub_btn"
                  onClick={() => {
                    this.clearValues();
                  }}
                >
                  Clear
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProduct.propTypes = {
  aws_s3_image_url: PropTypes.string,
  msg: PropTypes.string,
  type: PropTypes.string,
};

export default connect(null, {
  createProduct,
})(CreateProduct);
