import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import $ from "jquery";

import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";
import {
  fetchSingleService,
  createServicesForm,
} from "../../actions/OtherActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartLink from "../Cart/CartLink";
toast.configure();

class SingleBlog extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    area: "",
    looking: "",
    message: "",
  };

  componentDidMount() {
    const queryParams = new URLSearchParams(window.location.search);
    trackPromise(this.props.fetchSingleService(queryParams.get("id")));
    // console.log(this.state);
  }

  clearValues() {
    this.setState({
      name: "",
      email: "",
      phone: "",
      area: "",
      looking: "",
      date: "",
      message: "",
    });
  }

  onSubmit(e) {
    e.preventDefault();
    trackPromise(this.props.createServicesForm(this.state));
    this.clearValues();
    // console.log(this.state);
    $(".modal").fadeOut();
    $(".modal-backdrop.show").fadeOut();
    $("body").css("overflow", "auto");
  }

  render() {
    // console.log(this.props.SingleProduct);
    return (
      <div>
        <Header />
        <CartLink />
        {/* <h1>Fetch Single Product</h1> */}
        <main className="my-3">
          {/*  introBannerHolder */}

          {/*  twoColumns */}
          <div
            className="
            twoColumns
            container
            pt-xl-23
            pb-xl-20
            pt-lg-20
            pb-lg-20
            py-md-16 py-10
          "
          >
            <div className="row mb-6">
              <div className="col-12 col-lg-6">
                {/*  productSliderImage */}
                <div className="mb-lg-0 mb-4">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators d-none">
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        className="active"
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                      ></li>
                    </ol>
                    <div className="carousel-inner" data-interval="2000">
                      <div className="carousel-item active">
                        <a
                          href={this.props.SingleProduct.image}
                          className="img-thumbnail"
                          data-lightbox="#single-image"
                        >
                          <img
                            id="single-image"
                            src={this.props.SingleProduct.image}
                            alt="image-1"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="carousel-item">
                        <a
                          href={
                            this.props.SingleProduct.image1 === ""
                              ? this.props.SingleProduct.image
                              : this.props.SingleProduct.image1
                          }
                          className="img-thumbnail"
                          data-lightbox="#single-image"
                        >
                          <img
                            id="single-image"
                            src={
                              this.props.SingleProduct.image1 === ""
                                ? this.props.SingleProduct.image
                                : this.props.SingleProduct.image1
                            }
                            alt="image-1"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="carousel-item">
                        <a
                          href={
                            this.props.SingleProduct.image2 === ""
                              ? this.props.SingleProduct.image
                              : this.props.SingleProduct.image2
                          }
                          className="img-thumbnail"
                          data-lightbox="#single-image"
                        >
                          <img
                            id="single-image"
                            src={
                              this.props.SingleProduct.image2 === ""
                                ? this.props.SingleProduct.image
                                : this.props.SingleProduct.image2
                            }
                            alt="image-1"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev text-dark"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="mdi mdi-skip-previous"
                        aria-hidden="true"
                        style={{ fontSize: "2rem" }}
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next text-dark"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="mdi mdi-skip-next text-black"
                        aria-hidden="true"
                        style={{
                          color: "red !important",
                          backgroundColor: "blue !important",
                          fontSize: "2rem",
                        }}
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                  <div className="mb-2 mt-4 d-none d-lg-block">
                    <h5>
                      <b>Description: </b>
                    </h5>

                    <div style={{ fontSize: "0.8rem" }}>
                      {" "}
                      {ReactHtmlParser(this.props.SingleProduct.description)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                {/*  productTextHolder */}
                <div className="productTextHolder overflow-hidden">
                  <h4 className="fwEbold mb-2 text-capitalize">
                    {this.props.SingleProduct.title}
                  </h4>
                  <strong className=" d-block mb-2 text-green">
                    <del style={{ color: "#b5b5b5" }}>
                      {" "}
                      ₹{this.props.SingleProduct.mrp}
                    </del>
                    <span className="  fwEbold">
                      <span className="ml-2">
                        ₹{this.props.SingleProduct.price}{" "}
                      </span>
                    </span>
                  </strong>
                  <div className="mb-0 mt-3">
                    <h4 className="mb-4">This Package includes: </h4> <br />
                    <table width="100%" className="text-left">
                      {/* <thead>
                        <tr>
                          <th>Material</th>
                          <th>Quantity</th>
                        </tr>
                      </thead> */}
                    </table>
                    <div
                      style={{ width: "100% !important" }}
                      className="serviceTable mt-n4"
                    >
                      {ReactHtmlParser(this.props.SingleProduct.table)}

                      <table width="100%">
                        <tbody>
                          {/* <tr className="p-3 mb-2 border">
                            <td className="text-center">
                              <b>MRP</b>
                            </td>
                            <td>{this.props.SingleProduct.mrp}</td>
                          </tr>
                          <tr className="p-3 mb-2 border">
                            <td className="text-center">
                              <b>Selling Price</b>
                            </td>
                            <td>{this.props.SingleProduct.price}</td>
                          </tr> */}
                          <tr className="mx-auto">
                            <td>
                              <button
                                className="btn btn-block btnTheme text-white text-center  my-2"
                                data-toggle="modal"
                                data-target="#serviceForm"
                                style={{ transform: "translateX(3%)" }}
                              >
                                Book An Appointment
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 my-2 d-block d-lg-none">
                <div className="mb-2">
                  <b>Description: </b> <br />
                  {ReactHtmlParser(this.props.SingleProduct.description)}
                </div>
                {/* <div  className="mb-2">
                  <b>Variety Of Seeds: </b> <br />
                  {ReactHtmlParser(this.props.SingleProduct.vseeds)}
                </div> */}
              </div>
            </div>
          </div>
        </main>
        <Footer />

        {/* modal starts */}
        <form onSubmit={this.onSubmit.bind(this)}>
          <div
            className="modal fade "
            id="serviceForm"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="FAQ">
                    REQUEST FOR A FREE CONSULTATION
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body modal_body">
                  <p>
                    If you are interested in Setting up of a Garden and are not
                    sure on how to proceed, You can take our experts suggestion
                    and assistance on what to grow, How to grow and where to
                    start with your gardening Journey
                  </p>
                  <p>
                    <b>
                      To Book a slot with our Experts please fill the details
                      given below:
                    </b>
                    <br />
                    <strong className="text-danger">
                      (Available only for Bengaluru Residents)
                    </strong>
                  </p>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <label
                        className="input-group-text"
                        HTMLfor="inputGroupSelect01"
                      >
                        What are you looking for:
                      </label>
                    </div>
                    <select
                      className="custom-select"
                      id="inputGroupSelect01"
                      value={this.state.looking}
                      onChange={(e) => {
                        this.setState({ looking: e.target.value });
                      }}
                    >
                      <option>Select Category</option>
                      <option value="Terrace Gardening">
                        Terrace Gardening
                      </option>
                      <option value="Balcony Gardening">
                        Balcony Gardening
                      </option>
                      <option value="Kitchen Gardening">
                        Kitchen Gardening
                      </option>
                      <option value="Vertical Gardening">
                        Vertical Gardening
                      </option>
                      <option value="Landscape Gardening">
                        Landscape Gardening
                      </option>
                      <option selected value="Garden Maintenance services">
                        Garden Maintenance services
                      </option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      required
                      value={this.state.name}
                      onChange={(e) => {
                        this.setState({ name: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Email Id <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email Id"
                      required
                      value={this.state.email}
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Phone Number"
                      required
                      value={this.state.phone}
                      onChange={(e) => {
                        this.setState({ phone: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Area <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Area"
                      required
                      value={this.state.area}
                      onChange={(e) => {
                        this.setState({ area: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      className="form-control"
                      placeholder="Your Message"
                      value={this.state.message}
                      onChange={(e) => {
                        this.setState({ message: e.target.value });
                      }}
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btnTheme text-white"
                  />
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    style={{
                      color: "#000 !important",
                      fontSize: "2rem  !important",
                      background: "transparent  !important",
                    }}
                  >
                    Close
                  </button>
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
    SingleProduct: state.SingleProduct,
  };
};

export default connect(mapStateToProps, {
  fetchSingleService,
  createServicesForm,
})(SingleBlog);
