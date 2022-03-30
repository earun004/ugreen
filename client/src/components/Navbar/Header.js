import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";

import { logout } from "../../actions/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class Header extends Component {
  state = {
    search: "",
  };

  componentDidMount() {
    $(window).on("scroll", function () {
      localStorage.setItem("uGreenVisitor", JSON.stringify(true));
      if (this.scrollY > 50) {
        $("#header").addClass("headerBg");
      } else {
        $("#header").removeClass("headerBg");
      }
    });

    $(".navbar-toggler").on("click", function (event) {
      /* Act on the event */
      $(".bar1").toggleClass("toogle");
      $(".bar3").toggleClass("toogle1");
      $(".bar2").toggleClass("toogle2");
    });
  }

  renderButton() {
    const data = JSON.parse(localStorage.getItem("profile"));
    if (!data) {
      return (
        <Link className="d-block" to="/signin">
          LogIn
        </Link>
      );
    } else if (data) {
      return (
        <a
          className="d-block"
          onClick={() => trackPromise(this.props.logout())}
        >
          Logout
        </a>
      );
    }
  }

  renderSearchList() {
    const searches = [
      { searchTerm: "About Us", link: "/about" },
      { searchTerm: "Mission & Vision", link: "/about#missionVision" },
      { searchTerm: "Certificates", link: "/about#certificates" },
      { searchTerm: "Our Management", link: "/about#management" },
      { searchTerm: "Mrs. NISHCHITA M SHETTY", link: "/about#management" },
      { searchTerm: "Mr. MAHESH G SHETTY", link: "/about#management" },
      { searchTerm: "Managing Director", link: "/about#management" },
      { searchTerm: "Director", link: "/about#management" },
      { searchTerm: "Our Team", link: "/about#ourTeam" },
      { searchTerm: "Corporate Clients", link: "/about#clients" },
      { searchTerm: "Only For You", link: "/#onlyForYou" },
      { searchTerm: "Top Sellers", link: "/#topSellers" },
      { searchTerm: "Testimonials", link: "/#testimonial" },
      { searchTerm: "Collaborate With Us", link: "/#collaborateWithUs" },
      { searchTerm: "Latest Blogs & Posts", link: "/#latestBlogs" },
      { searchTerm: "Store", link: "/store" },
      { searchTerm: "Blogs", link: "/blog" },
      { searchTerm: "Signin", link: "/signin" },
      { searchTerm: "Login", link: "/signin" },
      { searchTerm: "Account", link: "/account" },
      { searchTerm: "My Orders", link: "/account" },
      { searchTerm: "Orders List", link: "/account" },
      { searchTerm: "Home", link: "/" },
      { searchTerm: "Potting Soil", link: "/pottingSoil" },
      { searchTerm: "Plant Health", link: "/plantHealth" },
      { searchTerm: "Seeds", link: "/seeds" },
      { searchTerm: "Accessories", link: "/accessories" },
      { searchTerm: "Services", link: "/services" },
    ];
    return searches
      .filter((val) => {
        if (this.state.search === "") {
          return;
        } else if (
          val.searchTerm.toLowerCase().includes(this.state.search.toLowerCase())
        ) {
          return val;
        }
      })
      .map((search) => {
        return (
          <li
            key={search._id}
            className="list-group-item text-capitalize"
            onClick={() => {
              $(".modal").fadeOut();
              $(".modal-backdrop.show").fadeOut();
              $("body").css("overflow", "auto");
            }}
          >
            <Link to={search.link}>{search.searchTerm}</Link>
          </li>
        );
      });
  }

  render() {
    // console.log(this.props);

    // console.log(window.location.pathname);
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top position-fixed bgColor"
          id="header"
          style={{ zIndex: 10 }}
        >
          <div className="navbar-brand logo">
            <Link to="/">
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
            data-target="#navbarNav"
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

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="static-block marginLeft">
              {/* mainHolder */}
              <div className="mainHolder pt-lg-3 pt-2">
                {/* pageNav2 */}
                <nav className="navbar navbar-expand-lg navbar-light p-0 pageNav2  w-100 position-static">
                  <div className="  w-100">
                    <div className="d-block  w-100">
                      <ul className="navbar-nav text-uppercase mt-md-2 w-100 navMargin d-block">
                        <li
                          className={`nav-item ${
                            window.location.pathname === "/" ? "active" : ""
                          }`}
                        >
                          <Link className="d-block" to="/">
                            Home
                          </Link>
                        </li>
                        <li
                          className={`nav-item ${
                            window.location.pathname === "/store"
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link className="d-block" to="/store">
                            Store
                          </Link>
                        </li>
                        <li
                          className={`nav-item ${
                            window.location.pathname === "/offers"
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link className="d-block" to="/offers">
                            Offers
                          </Link>
                        </li>
                        <li
                          className={`nav-item ${
                            window.location.pathname === "/about"
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link className="d-block" to="/about">
                            About
                          </Link>
                        </li>
                        <li
                          className={`nav-item ${
                            window.location.pathname === "/blog" ? "active" : ""
                          }`}
                        >
                          <Link className="d-block" to="/blog">
                            Blog
                          </Link>
                        </li>
                        <li className={`nav-item `}>{this.renderButton()}</li>
                        <li
                          className={`nav-item ${
                            window.location.pathname === "/profile"
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link to="/profile" className="d-block">
                            Account
                          </Link>
                        </li>
                        {/* <li className="nav-item ml-0"><Link className="nav-a icon-search" "></Link></li> */}
                        <li
                          className="nav-item"
                          data-toggle="modal"
                          data-target="#searchTerm"
                        >
                          <a href="#" className="d-block">
                            <i className="fas fa-search"></i>
                          </a>
                        </li>
                        {/* {/* <li className="nav-item"><Link className="nav-a position-relative icon-cart" "><span className="num rounded d-block">2</span></Link></li>*/}
                      </ul>
                      <div className="d-none d-md-block justify-content-around text-center mt-2 header_buttons">
                        <Link
                          to="/pottingSoil"
                          className={`btn pbtn btn1 mx-1 p-2 my-2 my-lg-0 ${
                            window.location.pathname === "/pottingSoil"
                              ? "active"
                              : ""
                          }`}
                        >
                          Potting Soil
                        </Link>

                        <Link
                          to="/plantHealth"
                          className={`btn pbtn btn2 mx-1 p-2 my-2 my-lg-0 ${
                            window.location.pathname === "/plantHealth"
                              ? "active"
                              : ""
                          }`}
                        >
                          Plant Health
                        </Link>
                        <Link
                          to="/seeds"
                          className={`btn pbtn btn3 mx-1 p-2 my-2 my-lg-0 ${
                            window.location.pathname === "/seeds"
                              ? "active"
                              : ""
                          }`}
                        >
                          Seeds
                        </Link>
                        <Link
                          to="/accessories"
                          className={`btn pbtn btn4 mx-1 p-2 my-2 my-lg-0 ${
                            window.location.pathname === "/accessories"
                              ? "active"
                              : ""
                          }`}
                        >
                          Accessories
                        </Link>
                        <Link
                          to="/services"
                          className={`btn pbtn btn5 mx-1 p-2 my-2 my-lg-0 ${
                            window.location.pathname === "/services"
                              ? "active"
                              : ""
                          }`}
                        >
                          Services
                        </Link>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="d-block d-md-none w-100 mt-n2">
            <div className="d-flux justify-content-around text-center mt-3 header_buttons">
              <Link
                to="/pottingSoil"
                className={`btn btn1 mx-1 p-2 my-2   ${
                  window.location.pathname === "/pottingSoil" ? "active" : ""
                }`}
              >
                <img
                  src="images\cat_icon/potting_soil.png"
                  width="20px"
                  height="20px"
                />
                <span className="d-block">SOIL</span>
              </Link>

              <Link
                to="/plantHealth"
                className={`btn btn2 mx-1 p-2 my-2  ${
                  window.location.pathname === "/plantHealth" ? "active" : ""
                }`}
              >
                <img
                  src="images\cat_icon/planthealth.png"
                  width="20px"
                  height="20px"
                />
                <span
                  className="d-block"
                  style={{ transform: "translateX(-8px)" }}
                >
                  HEALTH
                </span>
              </Link>

              <Link
                to="/seeds"
                className={`btn btn3 mx-1 p-2 my-2  ${
                  window.location.pathname === "/seeds" ? "active" : ""
                }`}
              >
                <img
                  src="images\cat_icon/seed.png"
                  width="20px"
                  height="20px"
                />
                <span
                  className="d-block"
                  style={{ transform: "translateX(-5px)" }}
                >
                  SEEDS
                </span>
              </Link>
              <Link
                to="/accessories"
                className={`btn btn4 mx-1 p-2 my-2  ${
                  window.location.pathname === "/accessories" ? "active" : ""
                }`}
              >
                <img
                  src="images\cat_icon/accessories.png"
                  width="20px"
                  height="20px"
                />
                <span
                  className="d-block"
                  style={{ transform: "translateX(-5px)" }}
                >
                  TOOLS
                </span>
              </Link>
              <Link
                to="/services"
                className={`btn btn5 mx-1 p-2 my-2  ${
                  window.location.pathname === "/services" ? "active" : ""
                }`}
              >
                <img
                  src="images\cat_icon/services.png"
                  width="20px"
                  className="serviceHeaderImage"
                  style={{ transform: "scale(1.6)" }}
                />
                <span
                  className="d-block"
                  style={{ transform: "translateX(-10px)" }}
                >
                  SERVICE
                </span>
              </Link>
            </div>
          </div>
        </nav>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* modal starts */}
        <div
          className="modal fade "
          id="searchTerm"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              {/* <div className="modal-header">
                <h5 className="modal-title" id="FAQ">
                  
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div> */}
              <div className="modal-body">
                <div>
                  {" "}
                  <input
                    type="text"
                    className="form-control searchBox"
                    placeholder="Search Here..."
                    autoFocus
                    onChange={(e) => {
                      this.setState({ search: e.target.value });
                    }}
                  />
                </div>
                {this.state.search.length >= 1 ? (
                  <ul className="list-group">{this.renderSearchList()}</ul>
                ) : null}
              </div>
              {/* <div className="modal-footer">
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
              </div> */}
            </div>
          </div>
        </div>
        {/* modal ends */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { logout })(Header);
