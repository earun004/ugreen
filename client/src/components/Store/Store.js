import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { toast } from "react-toastify";

import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";

import { fetchStoreBanners } from "../../actions/StorBannerActions";

import "react-toastify/dist/ReactToastify.css";
import CartLink from "../Cart/CartLink";
import AllProducts from "./AllProducts";
toast.configure();

class Store extends Component {
  componentDidMount() {
    document.title = "	MultiplexUrbanGreen Gardening Store ";
    trackPromise(this.props.fetchStoreBanners());
  }

  renderCarouse() {
    return this.props.banners.map((banner) => {
      return (
        <div key={banner._id}>
          <img src={banner.image} />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <Header />
        <br />
        <CartLink />

        <div className="container">
          <Carousel autoPlay infiniteLoop interval={4000} showThumbs={false}>
            {this.renderCarouse()}
          </Carousel>
        </div>
        <AllProducts id={1} />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
    banners: state.banners,
  };
};

export default connect(mapStateToProps, {
  fetchStoreBanners,
})(Store);
