import React from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import PropTypes from "prop-types";

import {
  createStoreBanner,
  fetchStoreBanner,
  deleteStoreBanner,
} from "../../../actions/StorBannerActions";
import AdminHeader from "../AdminHeader";
import FileBase64 from "react-file-base64";

class CreateGallery extends React.Component {
  state = {
    image: "",
    displayedIn: "",
  };

  componentDidMount() {
    trackPromise(this.props.fetchStoreBanner());
  }

  onSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("photo", this.state.image);
    // console.log(this.state.image);
    // this.props.uploadImage(formData);
    trackPromise(this.props.createStoreBanner(formData, this.state));
    // this.setState({ thumbnail: "" });
  }

  renderTable() {
    return this.props.gallery.map((gallery, index) => {
      return (
        <tr key={gallery._id}>
          <td>{index + 1}</td>
          <td>
            <img src={gallery.image} width="200px" />
          </td>
          <td>
            <a
              onClick={() => {
                if (window.confirm("Do you want to delete this Image?")) {
                  trackPromise(this.props.deleteStoreBanner(gallery._id));
                }
              }}
              style={{ cursor: "pointer" }}
            >
              <i className="fa fa-trash fa-2x"></i>
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
    // console.log(this.props.welcome);
    return (
      <div>
        <AdminHeader />

        <div className="col-md-10 offset-md-2 ">
          <div className="op-header">
            <div className="section-header text-center">
              <h1 className="f2 c3">Add Images to Gallery</h1>
              {/* <h2 className="f2 c3">Select Category</h2> */}
            </div>
          </div>
          <br />
          <div className="container">
            <form action="" onSubmit={this.onSubmit.bind(this)}>
              <div>
                <label>
                  Image <span className="text-danger">*</span>
                </label>
                <div className="">
                  {/* <FileBase64
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => this.setState({ image: base64 })}
                    required
                    className="form-control"
                  /> */}
                  <input
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      this.setState({ image: e.currentTarget.files[0] });
                      console.log(e.currentTarget.files[0]);
                    }}
                  />
                </div>

                <div className="input-group mb-3 w-50 mt-2">
                  <div className="input-group-prepend">
                    <label
                      className="input-group-text"
                      HTMLfor="inputGroupSelect01"
                    >
                      Display In
                    </label>
                  </div>
                  <select
                    className="custom-select"
                    id="inputGroupSelect01"
                    value={this.state.displayedIn}
                    onChange={(e) => {
                      this.setState({ displayedIn: e.target.value });
                    }}
                  >
                    <option className="disabled" selected>
                      Select Page
                    </option>
                    {/* <option value="OnlyForYou">Only For You</option>
                        <option value="BestDeals">Best Deals</option> */}
                    <option value="StorePage">Store Page</option>
                    <option value="OffersPage">Offers Page</option>
                  </select>
                </div>

                {/* <div className="input-group mb-3 w-50 mt-3">
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
                    value={this.state.displayedIn}
                    onChange={(e) => {
                      this.setState({ displayedIn: e.target.value });
                    }}
                  >
                    <option value="storePage">Store Page</option>
                    <option value="offersPage">Offers Page</option>
                  </select>
                </div> */}
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>Image Preview</h2>
            </div>
            <br />
            <div className="table-responsive">
              <table className="table table-striped styled-table text-center">
                <thead>
                  <tr>
                    <th>Sl. No</th>
                    <th>Image</th>
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

CreateGallery.propTypes = {
  aws_s3_image_url: PropTypes.string,
  msg: PropTypes.string,
  type: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    gallery: state.banners,
  };
};

export default connect(mapStateToProps, {
  createStoreBanner,
  fetchStoreBanner,
  deleteStoreBanner,
})(CreateGallery);
