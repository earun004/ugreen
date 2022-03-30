import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Navbar/Header";
import Carousel from "./ProductCarousel";
import MainProducts from "./MainProducts";
import { Link } from "react-router-dom";
import CartLink from "../Cart/CartLink";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import $ from "jquery";

import {
  fetchSingleService,
  createServicesForm,
} from "../../actions/OtherActions";

class Services extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    area: "",
    looking: "",
    message: "",
  };

  componentDidMount() {
    document.title = "MultiplexUrbanGreen  - Urban Garden Experts";
  }

  clearValues() {
    this.setState({
      name: "",
      email: "",
      phone: "",
      area: "",
      looking: "",
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
    return (
      <div>
        <div
          className="background_img1"
          style={{
            backgroundImage: " url(images/Urban_Images/SERVICES.png)",
          }}
        >
          <Header />
          <Carousel />
        </div>
        <div className="container mt-md-5 mt-3">
          <div className="row my-2  mb-3">
            <div className="col-12 col-md-12">
              <div className="row">
                <div className="col-md-9 col-12 order-last order-md-first">
                  <h4>LANDSCAPE GARDENING</h4>
                  <p style={{ fontSize: "1rem" }} className="text-justify">
                    Create and renovate your empty spaces into a beautiful
                    landscape. <br /> We provide end to end solutions (𝑫𝒆𝒔𝒊𝒈𝒏 𝒕𝒐
                    𝒎𝒂𝒊𝒕𝒂𝒊𝒏𝒂𝒏𝒄𝒆) for greenscapes and laying of lawns in
                    corporarte offices, residential areas, apartments, school &
                    colleges, hospitals etc.
                    <br />
                    Our expert team will inspect the site to suggest a
                    greenscape design based on the area and customer preference
                    to make your dream garden come to reality.
                  </p>
                </div>
                <div className="col-md-3 col-12 order-first order-md-last position-relative">
                  <img
                    src="images/Urban_Images/services1.jpg"
                    className="img-fluid rounded serviceImage"
                  />
                  <button
                    className="btn text-white appointmentBtn"
                    data-toggle="modal"
                    data-target="#serviceForm1"
                  >
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-2 mb-3">
            <div className="col-12 col-md-12">
              <div className="row">
                <div className="col-md-9 col-12 order-last order-md-last mb-3">
                  <h4>GARDEN MAINTENANCE</h4>
                  <p style={{ fontSize: "1rem" }}>
                    Do you already have a garden and finding it difficult to
                    manage and maintain? We, MUG with a set of dedicated and
                    expert team will come to your place and do all the necessary
                    maintenance to keep your garden lush green. We do take
                    maintenance for gardens in residences, apartments, hotels,
                    schools, and offices. Our products are organic and safe to
                    be used which gives you the best results!!
                  </p>
                </div>
                <div className="col-md-3 col-12 order-first order-md-first position-relative">
                  <img
                    src="images/Urban_Images/services2.jpg"
                    className="img-fluid rounded serviceImage float-md-left"
                  />{" "}
                  <button
                    className="btn text-white appointmentBtn moveBtn"
                    data-toggle="modal"
                    data-target="#serviceForm1"
                  >
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-2  mb-3">
            <div className="col-12 col-md-12">
              <div className="row">
                <div className="col-md-9 col-12 order-last order-md-first">
                  <h4>KITCHEN / BACKYARD GARDENING</h4>
                  <p style={{ fontSize: "1rem" }}>
                    Have an empty space around and would you like to utilize it?{" "}
                    <br />
                    Our team gives the best consultation to create a beautiful
                    patch of kitchen gardens or Lawn/ flower garden based on
                    your interest and keep your surroundings neat and clean.
                  </p>
                </div>
                <div className="col-md-3 col-12 order-first order-md-last position-relative">
                  <img
                    src="images/Urban_Images/services3.jpg"
                    className="img-fluid rounded serviceImage"
                  />
                  <button
                    className="btn text-white appointmentBtn"
                    data-toggle="modal"
                    data-target="#serviceForm1"
                  >
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-2  mb-3">
            <div className="col-12 col-md-12">
              <div className="row">
                <div className="col-md-9 col-12 order-last order-md-last">
                  <h4>BALCONY GARDENING</h4>
                  <p style={{ fontSize: "1rem" }}>
                    Transform your balcony space into a beautiful garden! Based
                    on the sunlight availability we guide, set up and maintain a
                    Garden where you can sit and relax!
                    <br />
                    We set up and maintain Vegetable, herbal, flower, indoor and
                    vertical gardens.
                  </p>
                </div>
                <div className="col-md-3 col-12 order-first order-md-first position-relative">
                  <img
                    src="images/Urban_Images/services4.jpg"
                    className="img-fluid rounded serviceImage  float-md-left"
                  />
                  <button
                    className="btn text-white appointmentBtn moveBtn"
                    data-toggle="modal"
                    data-target="#serviceForm1"
                  >
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-2  mb-3">
            <div className="col-12 col-md-12">
              <div className="row">
                <div className="col-md-9 col-12 order-last order-md-first">
                  <h4>TERRACE GARDENING</h4>
                  <p style={{ fontSize: "1rem" }}>
                    Terrace Garden is the best option for the urbanites who love
                    to have greenery around with limited space.
                    <br />
                    Our technical experts will visit the customer site and as
                    per their interest, we design, setup and maintain a terrace
                    garden filled with vegetables, fruits and flowers using Grow
                    bags, Drums, and pots.
                  </p>
                </div>
                <div className="col-md-3 col-12 order-first order-md-last position-relative">
                  <img
                    src="images/Urban_Images/services5.jpg"
                    className="img-fluid rounded serviceImage"
                  />
                  <button
                    className="btn text-white appointmentBtn"
                    data-toggle="modal"
                    data-target="#serviceForm1"
                  >
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CartLink />
        <MainProducts />
        <Footer />

        {/* modal starts */}
        <form onSubmit={this.onSubmit.bind(this)}>
          <div
            className="modal fade "
            id="serviceForm1"
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
                    className="btn btn-primary"
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

export default connect(null, { createServicesForm })(Services);
