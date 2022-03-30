import React from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import PropTypes from "prop-types";

import { createServices } from "../../../actions/OtherActions";
import AdminHeader from "../AdminHeader";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class CreateServices extends React.Component {
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
  };

  clearValues() {
    this.setState({
      title: "",
      mrp: "",
      price: "",
      table: "",
      description: "",
      description1: "",
      vseeds: "",
      image1: "",
      image2: "",
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("photo", this.state.image);
    trackPromise(this.props.createServices(this.state, formData));
    // this.clearValues();
    // console.log(this.state);
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <AdminHeader />
        <div className="col-md-10 offset-md-2 ">
          <div className="op-header">
            <div className="section-header text-center">
              {/* <!-- <h2 className="f2 c3">Contact us</h2> --> */}
              <h1 className="f1 fw-7 cw">Services</h1>
              {/* <h2 className="f2 c3">Select Category</h2> */}
            </div>
          </div>
          <br />
          <div className="container">
            <form action="" onSubmit={this.onSubmit.bind(this)}>
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
                  Package Info in Table <span className="text-danger">*</span>
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
              <div className="form-control">
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
                  className="form-control"
                />
                <FileBase64
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => this.setState({ image2: base64 })}
                  className="form-control"
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
    );
  }
}

CreateServices.propTypes = {
  aws_s3_image_url: PropTypes.string,
  msg: PropTypes.string,
  type: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    blogs: state.products,
  };
};

export default connect(mapStateToProps, {
  createServices,
})(CreateServices);
