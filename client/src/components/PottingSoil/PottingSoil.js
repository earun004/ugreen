import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Navbar/Header";
import Carousel from "./SoilCarousel";
import CartLink from "../Cart/CartLink";
import AllProducts from "../Store/AllProducts";

export default class PottingSoil extends Component {
  componentDidMount() {
    document.title = "MultipleUrbanGreen - Potting Soil";
  }
  render() {
    return (
      <div>
        <div
          className="background_img1"
          style={{
            backgroundImage: " url(./images/Urban_Images/pottingSolil.png)",
          }}
        >
          <Header />
          <Carousel />
        </div>
        <CartLink />
        <AllProducts id={2} />
        <Footer />
      </div>
    );
  }
}
