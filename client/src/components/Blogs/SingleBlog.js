import React, { Component } from "react";
import Header from "../Navbar/Header";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";

import Footer from "../Footer/Footer";
import { fetchSingleBlog } from "../../actions/OtherActions";
import CartLink from "../Cart/CartLink";
import ReactHtmlParser from "react-html-parser";

class SingleBlog extends Component {
  componentDidMount() {
    // const queryParams = new URLSearchParams(window.location.search);
    // console.log(queryParams.get("id"));
    const queryParams = new URLSearchParams(window.location.search);
    trackPromise(this.props.fetchSingleBlog(queryParams.get("id")));
  }
  render() {
    // console.log(this.props.SingleProduct);
    return (
      <div>
        <Header />
        <CartLink />
        <div className="container">
          <div className="newsBlogColumn mb-9">
            <div className="imgHolder mb-6">
              <img
                src={this.props.SingleProduct.image}
                alt="image description"
                className="img-fluid"
              />
            </div>
            <div className="textHolder d-flex align-items-start mb-1">
              <time
                className="time text-center text-uppercase py-sm-3 py-1 px-1"
                dateTime="2019-02-03 20:00"
              >
                <strong className="fwEbold d-block mb-1">
                  {this.props.SingleProduct.date}
                </strong>{" "}
                {this.props.SingleProduct.month}
              </time>
              <div className="alignLeft pl-6 w-100">
                <h2 className="headingV fwEbold m-3 text-capitalize">
                  {this.props.SingleProduct.title}
                </h2>
                {/* <span className="postBy d-block pb-6 mb-3">Post by: Jane doe</span> */}
              </div>
            </div>
            <div className="my-2">{this.props.SingleProduct.description1}</div>
            {ReactHtmlParser(this.props.SingleProduct.description)}
          </div>
        </div>
        <Footer />
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
  fetchSingleBlog,
})(SingleBlog);
