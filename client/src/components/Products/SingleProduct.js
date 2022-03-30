import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

import { fetchSingleProduct, fetchFourProducts } from "../../actions/Products";
import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";
import {
  updateCartNum,
  postComment,
  fetchProductComments,
} from "../../actions/OtherActions";
import { addItemToCart } from "../../actions/CartActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartLink from "../Cart/CartLink";
toast.configure();

class SingleProduct extends Component {
  state = {
    productCount: 1,
    productName: "",
    productId: "",
    productPrice: 0,
    comment: "",
    userId: "",
    userName: "",
    url: "",
    productImage: "",
  };

  componentDidMount() {
    const queryParams = new URLSearchParams(window.location.search);
    console.log(window.location);
    trackPromise(this.props.fetchSingleProduct(queryParams.get("id")));
    trackPromise(this.props.fetchFourProducts());
    this.setState({
      productId: queryParams.get("id"),
      userName: JSON.parse(localStorage.getItem("profile"))
        ? JSON.parse(localStorage.getItem("profile")).user.name
        : "",
      userId: JSON.parse(localStorage.getItem("profile"))
        ? JSON.parse(localStorage.getItem("profile")).user._id
        : "",
      url: window.location.href,
    });
    trackPromise(this.props.fetchProductComments(queryParams.get("id")));
    // console.log(this.state);
  }

  renderProducts() {
    return this.props.products.map((product) => {
      return (
        <div
          className="col-12 col-sm-6 col-md-3 featureCol mb-3"
          key={product._id}
        >
          <div className="border">
            <div
              className="
              imgHolder
              position-relative
              w-100
              overflow-hidden
            "
            >
              <a href={`/product?id=${product._id}`}>
                <img
                  src={product.image}
                  alt="image description"
                  className="img-fluid w-100"
                />
              </a>
              <ul
                className="
                list-unstyled
                postHoverLinskList
                d-flex
                justify-content-center
                m-0
              "
              >
                {/* <li className="mr-2 overflow-hidden">
                  <a
                    href=" "
                    className="icon-heart d-block"
                  ></a>
                </li> */}
                <li className="mr-2 overflow-hidden">
                  <a
                    onClick={() => {
                      this.props.addItemToCart(
                        product._id,
                        1,
                        product.price,
                        product.image,
                        product.name
                      );
                      this.props.updateCartNum();
                    }}
                    style={{ cursor: "pointer" }}
                    className="icon-cart d-block"
                  ></a>
                </li>
                <li className="mr-2 overflow-hidden">
                  <a
                    href={`/product?id=${product._id}`}
                    className="icon-eye d-block"
                  ></a>
                </li>
              </ul>
            </div>
            <div className="text-center py-2 px-2">
              <span className="title d-block mb-2">
                <a href={`/product?id=${product._id}`}>{product.name}</a>
              </span>
              <span className="price d-block fwEbold">
                <del> ₹ {parseInt(product.mrp)}</del>₹ {product.price}
              </span>

              {product.category === "DailyDeals" ? (
                <span
                  className="
                      hotOffer
                      fwEbold
                      text-uppercase text-white
                      position-absolute
                      d-block
                    "
                >
                  HOT
                </span>
              ) : null}
              {product.category === "BestDeals" ? (
                <span
                  className="
                      hotOffer
                      green
                      fwEbold
                      text-uppercase text-white
                      position-absolute
                      d-block
                      ml-8
                    "
                >
                  Sale
                </span>
              ) : null}
            </div>
          </div>
        </div>
      );
    });
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.state.productCount >= 1) {
      this.props.addItemToCart(
        this.state.productId,
        this.state.productCount,
        this.state.productPrice,
        this.state.productImage,
        this.state.productName
      );
      this.props.updateCartNum();
    }
  }

  submitComments(e) {
    e.preventDefault();
    // console.log(this.state);
    trackPromise(this.props.postComment(this.state));
    this.setState({ comment: "" });
  }

  renderComments() {
    if (this.props.comments.length === 0) {
      return <h4>No comments yet on this product.</h4>;
    } else {
      return this.props.comments.map((comment) => {
        if (comment.approve) {
          return (
            <article
              className="commentArea overflow-hidden d-block mb-2"
              key={comment._id}
            >
              <div className="txtHolder border px-2 py-2">
                <span className="commentDate d-block mb-2 text-capitalize">
                  {comment.userName}
                </span>
                <p className="mb-1">{comment.comment} </p>
              </div>
            </article>
          );
        }
      });
    }
  }

  render() {
    // console.log(this.props.SingleProduct);
    return (
      <div>
        <Header />
        <CartLink />
        {/* <h1>Fetch Single Product</h1> */}
        <main className="my-3">
          {/*  introBannerHolder */}

          {/*  twoColumns */}
          <div
            className="
            twoColumns
            container
            pt-xl-23
            pb-xl-20
            pt-lg-20
            pb-lg-20
            py-md-16 py-10
          "
          >
            <div className="row mb-6">
              <div className="col-12 col-lg-4 order-lg-1">
                {/*  productSliderImage */}
                <div className="mb-lg-0 mb-4">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        className="active"
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                      ></li>
                    </ol>
                    <div className="carousel-inner" data-interval="2000">
                      <div className="carousel-item active">
                        <a
                          href={this.props.SingleProduct.image}
                          className="img-thumbnail"
                          data-lightbox="#single-image"
                        >
                          <img
                            id="single-image"
                            src={this.props.SingleProduct.image}
                            alt="image-1"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="carousel-item">
                        <a
                          href={
                            this.props.SingleProduct.image1 === ""
                              ? this.props.SingleProduct.image
                              : this.props.SingleProduct.image1
                          }
                          className="img-thumbnail"
                          data-lightbox="#single-image"
                        >
                          <img
                            id="single-image"
                            src={
                              this.props.SingleProduct.image1 === ""
                                ? this.props.SingleProduct.image
                                : this.props.SingleProduct.image1
                            }
                            alt="image-1"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="carousel-item">
                        <a
                          href={
                            this.props.SingleProduct.image2 === ""
                              ? this.props.SingleProduct.image
                              : this.props.SingleProduct.image2
                          }
                          className="img-thumbnail"
                          data-lightbox="#single-image"
                        >
                          <img
                            id="single-image"
                            src={
                              this.props.SingleProduct.image2 === ""
                                ? this.props.SingleProduct.image
                                : this.props.SingleProduct.image2
                            }
                            alt="image-1"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </div>
                    <a
                      className="carousel-control-prev text-dark"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="mdi mdi-skip-previous"
                        aria-hidden="true"
                        style={{ fontSize: "2rem" }}
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next text-dark"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="mdi mdi-skip-next text-black"
                        aria-hidden="true"
                        style={{
                          color: "red !important",
                          backgroundColor: "blue !important",
                          fontSize: "2rem",
                        }}
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 order-lg-3">
                {/*  productTextHolder */}
                <div className="productTextHolder overflow-hidden">
                  <h3 className="fwEbold mb-2 text-capitalize">
                    {this.props.SingleProduct.name}
                  </h3>
                  {/* <ul className="list-unstyled ratingList d-flex flex-nowrap mb-2">
                    <li className="mr-2">
                      <a href=" ">
                        <i className="fas fa-star"></i>
                      </a>
                    </li>
                    <li className="mr-2">
                      <a href=" ">
                        <i className="fas fa-star"></i>
                      </a>
                    </li>
                    <li className="mr-2">
                      <a href=" ">
                        <i className="fas fa-star"></i>
                      </a>
                    </li>
                    <li className="mr-2">
                      <a href=" ">
                        <i className="fas fa-star"></i>
                      </a>
                    </li>
                    <li className="mr-2">
                      <a href=" ">
                        <i className="far fa-star"></i>
                      </a>
                    </li>
                    <li>( 5 customer reviews )</li>
                  </ul> */}
                  <strong
                    className=" d-block mb-2 text-green"
                    style={{ fontSize: "1rem" }}
                  >
                    <del style={{ color: "#b5b5b5" }}>
                      {" "}
                      ₹{this.props.SingleProduct.mrp}
                    </del>
                    <span className="  fwEbold">
                      <span className="ml-2">
                        ₹{this.props.SingleProduct.price}{" "}
                      </span>
                    </span>
                  </strong>
                  <p className="mb-2">
                    <b>Available: </b> <br />
                    {this.props.SingleProduct.available}
                  </p>
                  <div style={{ fontSize: "1rem" }}>
                    <b>Benefits: </b> <br />
                    <div className="benefitsHeight">
                      {ReactHtmlParser(this.props.SingleProduct.benefits)}
                    </div>
                  </div>
                  <form action="" onSubmit={this.onSubmit.bind(this)}>
                    <div className="holder overflow-hidden d-flex flex-wrap mb-3 cart-number">
                      <a
                        className="cart_btn"
                        onClick={() => {
                          if (this.state.productCount === 1) {
                            this.setState({
                              productCount: 1,
                            });
                          } else {
                            this.setState({
                              productCount: this.state.productCount - 1,
                            });
                          }
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <i className="fa fa-minus"></i>
                      </a>
                      <input
                        type="text"
                        min={1}
                        name="productCount"
                        className="text-center p-n1 mx-md-n4 mx-0"
                        value={this.state.productCount}
                        onChange={(e) => {
                          this.setState({ productCount: e.target.value });
                        }}
                        disabled
                      />
                      <a
                        onClick={() => {
                          if (this.state.productCount === 10) {
                            this.setState({
                              productCount: 10,
                            });
                          } else {
                            this.setState({
                              productCount: this.state.productCount + 1,
                            });
                          }
                          this.setState({
                            // productName: this.props.SingleProduct.name,
                            productId: this.props.SingleProduct._id,
                            productPrice: this.props.SingleProduct.price,
                            productImage: this.props.SingleProduct.image,
                            productName: this.props.SingleProduct.name,
                          });
                        }}
                        className="cart_btn mr-2"
                        style={{ cursor: "pointer" }}
                      >
                        <i className="fa fa-plus"></i>
                      </a>

                      <button
                        type="submit"
                        className="
                          btn
                          btnTheme
                          btnShop
                          fwEbold
                          text-white
                          md-round
                          py-2
                          px-2
                          py-md-1
                          px-md-1
                          my-2
                          my-lg-0
                        "
                        onClick={() => {
                          this.setState({
                            productId: this.props.SingleProduct._id,
                            productPrice: this.props.SingleProduct.price,
                            productImage: this.props.SingleProduct.image,
                            productName: this.props.SingleProduct.name,
                          });
                        }}
                      >
                        Add To Cart <i className="fas fa-arrow-right ml-2"></i>
                      </button>
                    </div>
                  </form>
                  <p className="d-block d-lg-none">SHARE THIS PRODUCT:</p>
                  <ul
                    className="
                    list-unstyled
                    socialNetwork
                    d-flex
                    flex-wrap
                    mb-sm-11 mb-4
                  "
                  >
                    <li className="text-uppercase mr-5 d-none d-lg-block">
                      SHARE THIS PRODUCT:
                    </li>

                    <li className="mr-4">
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${this.state.url}`}
                        className="fab fa-facebook-f"
                        target="_blank"
                      ></a>
                    </li>
                    <li className="mr-4">
                      <a
                        href={`https://web.whatsapp.com/send?text= Please Visit ${this.state.url}`}
                        data-action="share/whatsapp/share"
                        target="_blank"
                        className="fab fa-whatsapp d-lg-block d-none"
                      ></a>
                      <a
                        href={`whatsapp://send?text= Please Visit ${this.state.url}`}
                        data-action="share/whatsapp/share"
                        target="_blank"
                        className="fab fa-whatsapp d-block d-lg-none"
                      ></a>
                    </li>
                    <li className="mr-4">
                      <a
                        href={`https://twitter.com/share?text=Multiplex+Urban+Green+Products&url=${this.state.url}&hashtags=#MultiplexUrbanGreen`}
                        className="fab fa-twitter"
                        target="_blank"
                      ></a>
                    </li>
                    <li className="mr-4">
                      <a
                        href={`https://pinterest.com/pin/create/button/?url=${this.state.url}&description=Multiplex+Urban+Green+Products`}
                        className="fab fa-pinterest-p"
                        target="_blank"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container my-3">
            <div className="row">
              <div className="col-12">
                <div className="mb-2">
                  <ul
                    className="nav nav-tabs d-flex
                  justify-content-center
                  mb-2"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active "
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Description
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Reviews
                      </a>
                    </li>
                  </ul>
                  <div
                    className="tab-content border p-3 tabBody"
                    id="myTabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div style={{ fontSize: "1rem" }}>
                        <b>Description: </b>
                        {ReactHtmlParser(this.props.SingleProduct.description)}
                      </div>
                      <div style={{ fontSize: "1rem" }}>
                        <b>Directions: </b>
                        {ReactHtmlParser(this.props.SingleProduct.directions)}
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      {this.renderComments()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* commenting */}
          <div className="container">
            {localStorage.getItem("profile") ? (
              <div className="p-1 text-center">
                <form action="" onSubmit={this.submitComments.bind(this)}>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Write Your Review...."
                      value={this.state.comment}
                      onChange={(e) => {
                        this.setState({
                          comment: e.target.value,
                          productName: this.props.SingleProduct.name,
                        });
                      }}
                      required
                    ></textarea>
                  </div>
                  <input
                    type="hidden"
                    value={this.state.productId}
                    name="product"
                  />
                  <input
                    type="hidden"
                    value={this.state.userId}
                    name="userName"
                  />
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-outline-primary"
                  />
                </form>
              </div>
            ) : (
              <div className="p-1 text-center text-danger">
                <h4 className="text-danger">Please Login to write a review.</h4>
              </div>
            )}
          </div>
          {/*  featureSec */}
          <section
            className="
            featureSec
            container
            overflow-hidden
            pt-xl-12
            pb-xl-29
            pt-lg-10
            pb-lg-14
            pt-md-8
            pb-md-10
            py-5
          "
          >
            <div className="row">
              {/*  mainHeader */}

              <header className="col-12 mainHeader mb-0 text-center">
                <h1 className="headingIV playfair fwEblod mb-1">
                  Related products
                </h1>
                <span className="headerBorder d-block mb-1 text-center">
                  <img
                    src="images/hbdr.png"
                    alt="Header Border"
                    className="img-fluid img-bdr mt-2"
                  />
                </span>
              </header>
            </div>
            <div className="row">
              {/*  featureCol */}
              <div className="container w-75">
                <div className="row">{this.renderProducts()}</div>
              </div>
            </div>
          </section>
          <div className="container mb-lg-24 mb-md-16 mb-10">
            {/*  subscribeSecBlock */}
            {/* <Subscription /> */}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    SingleProduct: state.SingleProduct,
    products: state.products,
    comments: state.comments,
  };
};

export default connect(mapStateToProps, {
  fetchSingleProduct,
  fetchFourProducts,
  updateCartNum,
  postComment,
  fetchProductComments,
  addItemToCart,
})(SingleProduct);
