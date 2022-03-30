import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";

import { fetchServices } from "../../actions/OtherActions";
import { addItemToCart } from "../../actions/CartActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
toast.configure();

class MainProducts extends Component {
  componentDidMount() {
    trackPromise(this.props.fetchServices());
  }

  renderProducts() {
    return this.props.products.map((product) => {
      return (
        <div
          className="col-12 col-sm-6 col-lg-3 featureCol mb-3"
          key={product._id}
        >
          <div className="border">
            <div
              className="
                  position-relative
                  w-100
                  overflow-hidden
                  servicesImg
                  mb-n3
                "
            >
              <Link to={`/singleService?id=${product._id}`}>
                <img
                  src={product.image}
                  alt="image description "
                  className="img-fluid w-100"
                  width="100%"
                />
              </Link>
              <ul
                className="
                    list-unstyled
                    servicesButton
                    d-flex
                    justify-content-center
                    m-0
                  "
              >
                <li className="mr-2 overflow-hidden">
                  <Link
                    to={`/singleService?id=${product._id}`}
                    className="d-flex"
                  >
                    <span>Read More.</span>{" "}
                    <i className="icon-eye d-block ml-1 my-auto"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center py-2 px-2">
              <span className="title d-block mb-2">
                <a href={`/singleService?id=${product._id}`}>{product.title}</a>
              </span>
              <span className="price d-block fwEbold">
                <del>{parseInt(product.mrp)} ₹</del>
                {product.price} ₹
              </span>
            </div>
          </div>
        </div>
      );
    });
  }

  renderTopRate() {
    const count = Math.ceil(Math.random() * 10);
    const fiveProducts = this.props.products.slice(count, count + 5).reverse();
    return fiveProducts.map((product) => {
      return (
        <li className="mb-2 d-flex flex-nowrap" key={product._id}>
          <div className="alignleft">
            <Link to={`/product?id=${product._id}`}>
              <img
                src={product.image}
                alt="image description"
                className="img-fluid"
              />
            </Link>
          </div>
          <div className="description-wrap pl-1">
            <h4 className="headingVII mb-1">
              <Link to={`/product?id=${product._id}`}>{product.name}</Link>
            </h4>
            <strong className="price fwEbold d-block;">
              {product.price} ₹
            </strong>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div id="services">
        <main>
          <div
            className="
            twoColumns
            container
            pt-lg-5
            pb-lg-5
            pt-md-4
            pb-md-2
            pt-3
            pb-2
          "
          >
            <div className="row">
              <div className="col-12 col-lg-12 order-3">
                {/*  content */}
                <article id="content">
                  <div className="row">
                    {/*  featureCol */}
                    {this.renderProducts()}
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="container mb-lg-24 mb-md-16 mb-10">
            {/* <Subscription /> */}
          </div>
          {/*  footerHolder */}
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, {
  fetchServices,
})(MainProducts);
