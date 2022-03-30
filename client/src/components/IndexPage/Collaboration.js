import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import $ from "jquery";

import { createCollaboration } from "../../actions/CollaborationActions";

class Collaboration extends Component {
  state = {
    name: "",
    email: "",
    mobile: "",
    category: "",
    message: "",
  };

  clearValues() {
    this.setState({
      name: "",
      email: "",
      mobile: "",
      category: "",
      message: "",
    });
  }

  onSubmit(e) {
    e.preventDefault();
    trackPromise(this.props.createCollaboration(this.state));
    this.clearValues();
    // console.log(this.state);
    $(".modal").fadeOut();
    $(".modal-backdrop.show").fadeOut();
    $("body").css("overflow", "auto");
  }

  render() {
    return (
      <div className="my-5" id="collaborateWithUs">
        <header className="col-12 mainHeader  text-center">
          <h1 className="headingIV playfair fwEblod ">Collaborate With Us</h1>
          <span className="headerBorder d-block ">
            <img
              src="images/hbdr.png"
              alt="Header Border"
              className="img-fluid img-bdr"
            />
          </span>
          <p className="mb-6">
            Multiplex Urban Green India Stretches it's arms to collaborate with
            projects to make their spaces green.
          </p>
        </header>
        <div className="custom_con mx-auto">
          <div className="row">
            <div className="col-12">
              <div className="card-deck-wrapper">
                <div className="card-deck">
                  <div className="card">
                    <img
                      className="card-img-top img-fluid"
                      src="https://urbangreen-images.s3.ap-south-1.amazonaws.com/col2.jpg"
                      alt="Card image cap"
                      style={{ height: "182px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Builders</h5>
                      <p className="card-text">
                        <b>Want to make your space greener?</b>
                        <br /> Join hands with us to beautify your space green
                        with landscape gardening.
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      className="card-img-top img-fluid"
                      src="https://urbangreen-images.s3.ap-south-1.amazonaws.com/col1.jpg"
                      alt="Card image cap"
                      style={{ height: "182px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Interior Designers</h5>
                      <p className="card-text">
                        <b>Are your clients passionate about gardening?</b>
                        <br /> We can collaborate to make your garden creative
                        and lively.
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      className="card-img-top img-fluid"
                      src="https://urbangreen-images.s3.ap-south-1.amazonaws.com/col3.png"
                      style={{ height: "182px", objectFit: "cover" }}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Retailers</h5>
                      <p className="card-text">
                        <b>
                          Are you looking for a business opportunity to market
                          Multiplex Urban Green products?
                        </b>
                        <br /> Connect with us and grow together.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 offset-md-4 my-3 btn-lg">
              <button
                className="btn btnGreen btn-block text-white"
                data-toggle="modal"
                data-target="#collaborate"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
        {/* modal starts */}
        <form onSubmit={this.onSubmit.bind(this)}>
          <div
            className="modal fade "
            id="collaborate"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="FAQ">
                    Collaborate With Us
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
                <div className="modal-body">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <label
                        className="input-group-text"
                        htmlFor="inputGroupSelect01"
                      >
                        Are you a
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
                      <option>Select your role</option>
                      <option value="Builder & Developer">
                        Builder & Developer
                      </option>
                      <option value="Interior Designer">
                        Interior Designer
                      </option>
                      <option value="Retailer">Retailer</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required
                      value={this.state.name}
                      onChange={(e) => {
                        this.setState({ name: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Mobile Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="number"
                      className="form-control"
                      required
                      value={this.state.mobile}
                      onChange={(e) => {
                        this.setState({ mobile: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Email ID <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      required
                      value={this.state.email}
                      onChange={(e) => {
                        this.setState({ email: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      value={this.state.message}
                      onChange={(e) => {
                        this.setState({ message: e.target.value });
                      }}
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer py-1">
                  <input
                    className="btn btnGreen  text-white"
                    type="submit"
                    value="Submit"
                  />
                  <button
                    type="button"
                    className="btn btn-danger text-white"
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

export default connect(null, { createCollaboration })(Collaboration);
