import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";

import Footer from "./Footer/Footer";
import BestSeller from "./IndexPage/BestSeller";
import DailyDeals from "./IndexPage/DailyDeals";
import LatestBlogs from "./IndexPage/LatestBlogs";
import MainCarousel from "./IndexPage/MainCarousel";
import Shipment from "./IndexPage/Shipment";
import Testimonial from "./IndexPage/Testimonial";
import Header from "./Navbar/Header";
import { Link } from "react-router-dom";
import CartLink from "./Cart/CartLink";
import Collaboration from "./IndexPage/Collaboration";
import { AddVisitors } from "../actions/VisitorsActions";

class IndexBody extends Component {
  componentDidMount() {
    document.title =
      "Online urban Garden Store, Seeds Agricultural Products | MultiplexUrbanGreen ";
    if (!localStorage.getItem("uGreenVisitor")) {
      trackPromise(this.props.AddVisitors());
    } else {
      return;
    }
  }

  render() {
    return (
      <div>
        <div className="background_img">
          <Header />
          <MainCarousel />
        </div>
        <CartLink />
        <Shipment />
        <DailyDeals />
        <BestSeller />
        <Testimonial />
        <Collaboration />
        <LatestBlogs />
        <Footer />
      </div>
    );
  }
}

export default connect(null, { AddVisitors })(IndexBody);
