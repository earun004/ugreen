import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { toast } from "react-toastify";

import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";

import { fetchOfferBanners } from "../../actions/StorBannerActions";

import "react-toastify/dist/ReactToastify.css";
import CartLink from "../Cart/CartLink";
import OffersProducts from "./OffersProducts";
toast.configure();

class Offers extends Component {
  componentDidMount() {
    // document.title = "MultiplexUrbanGreen Gardening Store";
    trackPromise(this.props.fetchOfferBanners());
  }

  renderCarouse() {
    return this.props.banners.map((banner) => {
      if (banner.displayedIn === "OffersPage") {
        return (
          <div key={banner._id}>
            <img src={banner.image} />
          </div>
        );
      }
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
        <OffersProducts />
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
  fetchOfferBanners,
})(Offers);
