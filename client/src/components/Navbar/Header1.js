import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

export default class Header1 extends Component {
  render() {
    return (
      <div className="position-fixed b-block">
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top position-fixed"
          id="header"
        >
          <div className="navbar-brand logo">
            <a href="/">
              <img
                src="images/Urban_Images/Main logo.png"
                alt="urban green"
                className="img-fluid"
              />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="static-block marginLeft">
              {/* mainHolder */}
              <div className="mainHolder pt-lg-3 pt-3">
                {/* pageNav2 */}
                <nav className="navbar navbar-expand-lg navbar-light p-0 pageNav2 position-static">
                  <div className="">
                    <div className="">
                      <ul className="navbar-nav text-uppercase mt-md-2 navMargin">
                        <li className="nav-item active">
                          <Link className="d-block" to="/">
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="d-block" to="/about">
                            About
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a className="d-block" href="shop.html">
                            Store
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="d-block" href="blog.html">
                            Blog
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="d-block"
                            data-toggle="modal"
                            data-target="#login"
                          >
                            Sign in
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="d-block" href="progress.html">
                            Account
                          </a>
                        </li>
                        {/* <li className="nav-item ml-0"><a className="nav-link icon-search"></a></li> */}
                        <li className="nav-item">
                          <a href="" className="d-block">
                            <i className="fas fa-search"></i>
                          </a>
                        </li>
                        {/* {/* <li className="nav-item"><a className="nav-link position-relative icon-cart"><span className="num rounded d-block">2</span></a></li>*/}
                      </ul>
                      <div className="d-block justify-content-around text-center mt-2 header_buttons">
                        <a href="#" className="btn btn1 mx-2 p-2 my-2 my-lg-0">
                          Potting Soil
                        </a>
                        <a href="#" className="btn btn2 mx-2 p-2 my-2 my-lg-0">
                          Plant Health
                        </a>
                        <a href="#" className="btn btn3 mx-2 p-2 my-2 my-lg-0">
                          Seeds
                        </a>
                        <a href="#" className="btn btn4 mx-2 p-2 my-2 my-lg-0">
                          Accessories
                        </a>
                        <a href="#" className="btn btn5 mx-2 p-2 my-2 my-lg-0">
                          Services
                        </a>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </nav>

        <div
          className="modal fade"
          id="login"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
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
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* modal starts here */}
        <div
          className="modal fade"
          id="user-login1"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel1"
          aria-hidden="true"
          style={{ zIndex: 100 }}
        >
          <div
            className="modal-dialog cus_modal modal-dialog-centered "
            role="document"
          >
            <div className="modal-content custom-div">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel1">
                  Login
                </h5>
                <button type="button" data-dismiss="modal">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="logo text-center">
                <a href="home">
                  <span>
                    <img
                      src="images/Urban_Images/Main logo.png"
                      width="100px"
                      height="100px"
                      alt="logo"
                      className="img-fluid"
                    />
                  </span>
                </a>
              </div>
              <div className="modal-body  mt-4 text-center">
                <form action="" method="post" className="custom_form">
                  <div className="row ">
                    <p>Welcome Back,</p>
                    <div className="col-md-12">
                      <div className="input-icons">
                        <i className="fa fa-user icon"></i>
                        <input
                          className="input-field"
                          id="form-name"
                          width="100%"
                          type="text"
                          name="name"
                          placeholder="Username *"
                          required
                        />
                      </div>
                    </div>
                    <br />
                    <div className="col-md-12">
                      <div className="input-icons">
                        <i className="fa fa-key icon"></i>
                        <input
                          className="input-field"
                          id="form-password"
                          type="password"
                          name="password"
                          placeholder="Password *"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <button>Log-in</button>
                </form>
                <br />
                <p>
                  New user? Please{" "}
                  <a href="" data-toggle="modal" data-target="#user-register1">
                    Register Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* modal starts ends here */}

        {/* modal starts */}
        <div
          className="modal fade"
          id="user-register1"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel1"
          aria-hidden="true"
        >
          <div
            className="modal-dialog cus_modal modal-dialog-centered "
            role="document"
          >
            <div className="modal-content custom-div">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel1">
                  Register
                </h5>
                <button type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="logo text-center">
                <a href="home">
                  <span>
                    <img
                      src="images/Urban_Images/Main logo.png"
                      width="100px"
                      height="100px"
                      alt="logo"
                      className="img-fluid"
                    />
                  </span>
                </a>
              </div>
              <div className="modal-body text-center">
                <form action="" method="post" className="custom_signup_form">
                  <div className="input-icons">
                    <input
                      className="input-field"
                      id="form-name"
                      width="100%"
                      type="text"
                      name="name"
                      placeholder="Username *"
                      required
                    />
                  </div>
                  <div className="input-icons">
                    <input
                      className="input-field"
                      id="form-name"
                      width="100%"
                      type="text"
                      name="name"
                      placeholder="Email *"
                      required
                    />
                  </div>
                  <div className="input-icons">
                    <input
                      className="input-field"
                      id="form-name"
                      width="100%"
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      required
                    />
                  </div>
                  <div className="input-icons">
                    <input
                      className="input-field"
                      id="form-name"
                      width="100%"
                      type="text"
                      name="name"
                      placeholder="Phone Number *"
                      required
                    />
                  </div>
                  <div className="input-icons">
                    <input
                      className="input-field"
                      id="form-name"
                      width="100%"
                      type="text"
                      name="name"
                      placeholder="Password *"
                      required
                    />
                  </div>
                  <button>Sign-up</button>
                  <p>
                    Already an user?{" "}
                    <a href="" data-dismiss="modal" aria-label="Close">
                      Sign Up
                    </a>
                  </p>
                </form>
                <br />
              </div>
            </div>
          </div>
        </div>
        {/* modal starts ends */}
      </div>
    );
  }
}
