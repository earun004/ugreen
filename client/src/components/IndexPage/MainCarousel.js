import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import { fetchHeadings } from "../../actions/HeadingActions";

class MainCarousel extends Component {
  componentDidMount() {
    trackPromise(this.props.fetchHeadings());
  }

  render() {
    console.log(this.props.headings[1]);
    if (this.props.headings.length === 0) {
      return (
        <div className="joy_logo d-block mt-4">
          <div className="banner_content ">
            <h1>15% Off*</h1>
            <h4>
              Avail this offer on
              <br /> your first purchase.
            </h4>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="joy_logo d-block mt-4">
          <div className="banner_content d-block d-lg-none text-right banner_info">
            <h1 className="text-right">{this.props.headings[0].home1}</h1>
            <h4 className="text-right">{this.props.headings[0].home2}</h4>
          </div>
          <div
            className="banner_content  d-none d-lg-block"
            style={{ width: "400px" }}
          >
            {/* carousel start */}
            <div
              className="carousel slide"
              data-ride="carousel"
              id="mycarousel"
            >
              <ol className="carousel-indicators d-none">
                <li data-target="#mycarousel" data-slide-to="0"></li>
                <li
                  data-target="#mycarousel"
                  data-slide-to="1"
                  className="active"
                ></li>
                <li data-target="#mycarousel" data-slide-to="2"></li>
              </ol>
              <div className="container-fluid carouselImg">
                <div className="carousel-inner" style={{ fontSize: "1rem" }}>
                  <div className="carousel-item  text-center">
                    <h1>{this.props.headings[0].home1}</h1>
                    <h4>{this.props.headings[0].home2}</h4>
                  </div>
                  <div className="carousel-item active text-center">
                    <h1>
                      {this.props.headings[1] === undefined
                        ? this.props.headings[0].home1
                        : this.props.headings[1].home1}
                    </h1>
                    <h4>
                      {" "}
                      {this.props.headings[1] === undefined
                        ? this.props.headings[0].home2
                        : this.props.headings[1].home2}
                    </h4>
                  </div>
                </div>
              </div>
              <a
                href="#mycarousel"
                className="carousel-control-prev"
                data-slide="prev"
              >
                <span
                  className=" fas fa-angle-left d-none"
                  style={{ fontSize: "2rem", color: "#000" }}
                ></span>
              </a>
              <a
                href="#mycarousel"
                className="carousel-control-next"
                data-slide="next"
              >
                <span
                  className=" fas fa-angle-right d-none"
                  style={{ fontSize: "2rem", color: "#000" }}
                ></span>
              </a>
            </div>
            {/* carousel end */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    headings: state.headings,
  };
};

export default connect(mapStateToProps, { fetchHeadings })(MainCarousel);
