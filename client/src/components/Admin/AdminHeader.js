import React, { Component } from "react";
import { trackPromise } from "react-promise-tracker";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import { logout } from "../../actions/auth";

class AdminHeader extends Component {
  render() {
    return (
      <div>
        <div className="d-none d-md-block">
          <div className="adminHeader">
            <div className="row">
              <div className="col-2">
                <Link to="/adminHome" className="logo text-center">
                  <img src="images/Urban_Images/Main_logo.png" width="70px" />
                </Link>
              </div>
              <div className="col-10">
                <div className="d-flex justify-content-between align-items-center h-100 ">
                  <div>
                    <h3 className="text-white">Admin Panel</h3>
                  </div>
                  <div className="">
                    <button
                      className="btn btn-warning float-right mx-3"
                      style={{
                        padding: "0rem 0rem !important",
                        height: "50px",
                      }}
                      onClick={() => {
                        trackPromise(this.props.logout(this.props.history));
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="left-side-menu overflow-scroll position-fixed d-block mt-n3">
            <div className="slimscroll-menu">
              <div id="sidebar-menu">
                <ul className="metismenu" id="side-menu">
                  <li>
                    <Link
                      to="/adminHome"
                      className={`${
                        window.location.pathname === "/adminHome"
                          ? "active"
                          : ""
                      }`}
                    >
                      <i className="fe-airplay"></i>
                      <span> Dashboard </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/orderList"
                      className={`${
                        window.location.pathname === "/orderList"
                          ? "active"
                          : ""
                      }`}
                    >
                      <i className=" fas fa-shopping-bag"></i>
                      <span> Orders </span>
                      {/* <span className="badge badge-pink rounded-circle noti-icon-badge float-right">
                        4
                      </span> */}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/addProduct"
                      className={`${
                        window.location.pathname === "/addProduct"
                          ? "active"
                          : ""
                      }`}
                    >
                      <i className=" fas fa-cart-plus"></i>
                      <span> Add Products </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/EDProducts"
                      className={`${
                        window.location.pathname === "/EDProducts"
                          ? "active"
                          : ""
                      }`}
                    >
                      <i className="dripicons-document-edit"></i>
                      <span> Edit Products </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/createServices"
                      className={`${
                        window.location.pathname === "/createServices"
                          ? "active"
                          : ""
                      }`}
                    >
                      <i className=" fas fa-tools"></i>
                      <span> Add Services </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/EDServices"
                      className={`${
                        window.location.pathname === "/EDServices"
                          ? "active"
                          : ""
                      }`}
                    >
                      <i className="dripicons-document-edit"></i>
                      <span> Edit Services </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/addBlogs"
                      className={`${
                        window.location.pathname === "/addBlogs" ? "active" : ""
                      }`}
                    >
                      <i className=" fas fa-blog"></i>
                      <span> Add Blogs </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/EDBlogs"
                      className={`${
                        window.location.pathname === "/EDBlogs" ? "active" : ""
                      }`}
                    >
                      <i className="dripicons-document-edit"></i>
                      <span> Edit Blogs </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/createGallery"
                      className={`${
                        window.location.pathname === "/createGallery"
                          ? "active"
                          : ""
                      }`}
                    >
                      <i className="dripicons-document-edit"></i>
                      <span> Store Banners </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/subscribeAdmin"
                      className={`${
                        window.location.pathname === "/subscribeAdmin"
                          ? "active"
                          : ""
                      }`}
                    >
                      <i className="fe-book-open"></i>
                      <span> Subscriptions </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/EDComments"
                      className={`${
                        window.location.pathname === "/EDComments"
                          ? "active"
                          : ""
                      }`}
                    >
                      <i className=" far fa-comment"></i>
                      <span> Comments </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/collaborationAdmin"
                      className={`${
                        window.location.pathname === "/collaborationAdmin"
                          ? "active"
                          : ""
                      }`}
                    >
                      <i className="fe-briefcase"></i>
                      <span> Collaborations </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/add-headings"
                      className={`${
                        window.location.pathname === "/add-headings"
                          ? "active"
                          : ""
                      }`}
                    >
                      <i className="fe-briefcase"></i>
                      <span> Headings </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/appointments"
                      className={`${
                        window.location.pathname === "/appointments"
                          ? "active"
                          : ""
                      }`}
                    >
                      <i className="far fa-calendar-alt"></i>
                      <span> Appointments </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="d-block d-md-none">
          <nav
            className="navbar navbar-expand-lg navbar-light fixed-top position-fixed bgColor"
            id="header"
            style={{ zIndex: 10 }}
          >
            <div
              className="d-flex"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div className="navbar-brand logo">
                <Link to="/adminHome">
                  <img
                    src="images/Urban_Images/Main_logo.png"
                    alt="urban green"
                    className="img-fluid"
                  />
                </Link>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#adminNavbar"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="toggler-btn d-flex flex-column">
                  <span class="bar bar1"></span>
                  <span class="bar bar2"></span>
                  <span class="bar bar3"></span>
                </span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="adminNavbar">
              <div className="static-block marginLeft">
                {/* mainHolder */}
                <div className="mainHolder pt-lg-3 pt-2">
                  {/* pageNav2 */}
                  <nav className="navbar navbar-expand-lg navbar-light p-0 pageNav2  w-100 position-static">
                    <div className="  w-100">
                      <div className="d-block  w-100">
                        <ul className="navbar-nav text-uppercase mt-md-2 w-100 navMargin d-block admin-nav">
                          <li>
                            <Link
                              to="/adminHome"
                              className={`${
                                window.location.pathname === "/adminHome"
                                  ? "active"
                                  : ""
                              }`}
                            >
                              <i className="fe-airplay"></i>
                              <span> Dashboard </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/orderList"
                              className={`${
                                window.location.pathname === "/orderList"
                                  ? "active"
                                  : ""
                              }`}
                            >
                              <i className=" fas fa-shopping-bag"></i>
                              <span> Orders </span>
                              {/* <span className="badge badge-pink rounded-circle noti-icon-badge float-right">
                          4
                        </span> */}
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/addProduct"
                              className={`${
                                window.location.pathname === "/addProduct"
                                  ? "active"
                                  : ""
                              }`}
                            >
                              <i className=" fas fa-cart-plus"></i>
                              <span> Add Products </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/EDProducts"
                              className={`${
                                window.location.pathname === "/EDProducts"
                                  ? "active"
                                  : ""
                              }`}
                            >
                              <i className="dripicons-document-edit"></i>
                              <span> Edit Products </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/createServices"
                              className={`${
                                window.location.pathname === "/createServices"
                                  ? "active"
                                  : ""
                              }`}
                            >
                              <i className=" fas fa-tools"></i>
                              <span> Add Services </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/EDServices"
                              className={`${
                                window.location.pathname === "/EDServices"
                                  ? "active"
                                  : ""
                              }`}
                            >
                              <i className="dripicons-document-edit"></i>
                              <span> Edit Services </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/addBlogs"
                              className={`${
                                window.location.pathname === "/addBlogs"
                                  ? "active"
                                  : ""
                              }`}
                            >
                              <i className=" fas fa-blog"></i>
                              <span> Add Blogs </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/EDBlogs"
                              className={`${
                                window.location.pathname === "/EDBlogs"
                                  ? "active"
                                  : ""
                              }`}
                            >
                              <i className="dripicons-document-edit"></i>
                              <span> Edit Blogs </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/createGallery"
                              className={`${
                                window.location.pathname === "/createGallery"
                                  ? "active"
                                  : ""
                              }`}
                            >
                              <i className="dripicons-document-edit"></i>
                              <span> Store Banners </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/subscribeAdmin"
                              className={`${
                                window.location.pathname === "/subscribeAdmin"
                                  ? "active"
                                  : ""
                              }`}
                            >
                              <i className="fe-book-open"></i>
                              <span> Subscriptions </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/EDComments"
                              className={`${
                                window.location.pathname === "/EDComments"
                                  ? "active"
                                  : ""
                              }`}
                            >
                              <i className=" far fa-comment"></i>
                              <span> Comments </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/collaborationAdmin"
                              className={`${
                                window.location.pathname ===
                                "/collaborationAdmin"
                                  ? "active"
                                  : ""
                              }`}
                            >
                              <i className="fe-briefcase"></i>
                              <span> Collaborations </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/add-headings"
                              className={`${
                                window.location.pathname === "/add-headings"
                                  ? "active"
                                  : ""
                              }`}
                            >
                              <i className="fe-briefcase"></i>
                              <span> Headings </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/appointments"
                              className={`${
                                window.location.pathname === "/appointments"
                                  ? "active"
                                  : ""
                              }`}
                            >
                              <i className="far fa-calendar-alt"></i>
                              <span> Appointments </span>
                            </Link>
                          </li>
                          <li>
                            <a
                              onClick={() => {
                                trackPromise(
                                  this.props.logout(this.props.history)
                                );
                              }}
                            >
                              <i className="far fa-lock"></i>
                              <span> Logout </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </nav>
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { logout })(withRouter(AdminHeader));
