import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import ReactHtmlParser from "react-html-parser";
import ShareLink from "react-facebook-share-link";
import { Link } from "react-router-dom";

import {
  fetchProducts,
  fetchPlantHealth,
  fetchPottingSoil,
  fetchSeeds,
  fetchAccessories,
} from "../../actions/Products";
import {
  updateCartNum,
  fetchProductComments,
  postComment,
} from "../../actions/OtherActions";
import { addItemToCart } from "../../actions/CartActions";

class AllProducts extends Component {
  state = {
    search: "",
    image: "",
    id: "",
    name: "",
    image1: "",
    image2: "",
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
    // console.log(`${window.location.origin}/product?id=${this.state._id}`);
    if (this.props.id === 1) {
      trackPromise(this.props.fetchProducts());
    } else if (this.props.id === 2) {
      trackPromise(this.props.fetchPottingSoil());
    } else if (this.props.id === 3) {
      trackPromise(this.props.fetchPlantHealth());
    } else if (this.props.id === 4) {
      trackPromise(this.props.fetchSeeds());
    } else if (this.props.id === 5) {
      trackPromise(this.props.fetchAccessories());
    }

    console.log(window.location);

    this.setState({
      userName: JSON.parse(localStorage.getItem("profile"))
        ? JSON.parse(localStorage.getItem("profile")).user.name
        : "",
      userId: JSON.parse(localStorage.getItem("profile"))
        ? JSON.parse(localStorage.getItem("profile")).user._id
        : "",
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id !== prevState.id) {
      const value = this.props.products.filter(
        (val) => val._id === this.state.id
      );
      this.setState(value[0]);

      // console.log(this.state);
    }
  }

  renderProducts() {
    return this.props.products
      .filter((val) => {
        if (this.state.search === "") {
          return val;
        } else if (
          val.name.toLowerCase().includes(this.state.search.toLowerCase())
        ) {
          return val;
        }
      })
      .map((product) => {
        return (
          <div
            className="col-12 col-sm-6 col-lg-4 featureCol mb-3"
            id="AllProducts"
            key={product._id}
            // onClick={() => {
            //   this.setState({ id: product._id, productId: product._id });
            //   trackPromise(this.props.fetchProductComments(product._id));
            // }}
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
                <Link to={`/product?id=${product._id}`} target="_blanck">
                  <img
                    src={product.image}
                    alt="image description"
                    className="img-fluid w-100"
                    // data-toggle="modal"
                    // data-target="#productInfo"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
                <ul
                  className="
                list-unstyled
                postHoverLinskList
                d-flex
                justify-content-center
                m-0
              "
                >
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
                    <Link
                      to={`/product?id=${product._id}`}
                      target="_blank"
                      // data-toggle="modal"
                      // data-target="#productInfo"
                      className="icon-eye d-block"
                    ></Link>
                  </li>
                </ul>
              </div>
              <div className="text-center py-2 px-2">
                <span className="title d-block mb-2">
                  <marquee direction="left" scrollamount="3">
                    <Link to={`/product?id=${product._id}`} target="_blank">
                      {product.name}
                    </Link>
                  </marquee>
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
                    OFF
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

  renderTopRate() {
    const count = 3;
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
                // onClick={() => {
                //   this.setState({ id: product._id, productId: product._id });
                //   trackPromise(this.props.fetchProductComments(product._id));
                // }}
              />
            </Link>
          </div>
          <div className="text-left py-1 px-2">
            <span className="title d-block mb-1">
              <Link
                to={`/product?id=${product._id}`}
                // data-toggle="modal"
                // data-target="#productInfo"
                style={{ cursor: "pointer" }}
                // onClick={() => {
                //   this.setState({ id: product._id, productId: product._id });
                //   trackPromise(this.props.fetchProductComments(product._id));
                // }}
              >
                {product.name}
              </Link>
            </span>
            <span className="price d-block fwEbold">
              <del
                className="text-muted mr-2"
                style={{ fontWeight: "lighter" }}
              >
                {" "}
                ₹ {parseInt(product.mrp)}
              </del>
              ₹ {product.price}
            </span>
          </div>
        </li>
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

  submitComments(e) {
    e.preventDefault();
    // console.log(this.state);
    trackPromise(this.props.postComment(this.state));
    this.setState({ comment: "" });
  }

  render() {
    return (
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
          <div className="row mt-n3">
            <div className="col-12 col-lg-9 order-3">
              {/*  content */}
              <article id="content">
                <div className="row">
                  {/*  featureCol */}
                  {this.renderProducts()}

                  <div className="col-12 pt-3 mb-lg-0 mb-md-6 mb-3">
                    {/*  pagination */}
                  </div>
                </div>
              </article>
            </div>
            <div className="col-12 col-lg-3 order-1">
              {/*  sidebar */}
              <aside id="sidebar">
                {/*  widget */}
                <section className="widget overflow-hidden mb-9">
                  <form className="searchForm position-relative border">
                    <fieldset>
                      <input
                        className="form-control"
                        value={this.state.search}
                        placeholder="Search By Name Here..."
                        onChange={(e) => {
                          this.setState({ search: e.target.value });
                          // console.log(this.state.search);
                        }}
                      />
                      <button className="position-absolute">
                        <i className="icon-search"></i>
                      </button>
                    </fieldset>
                  </form>
                </section>

                {/*  widget */}
                <section className="widget mb-9">
                  <h3 className="headingVII fwEbold text-uppercase mb-6">
                    top rate
                  </h3>
                  <ul className="list-unstyled recentListHolder mb-0 overflow-hidden">
                    {this.renderTopRate()}
                  </ul>
                </section>
                {/*  widget */}
              </aside>
            </div>
          </div>
        </div>
        <div className="container mb-lg-24 mb-md-16 mb-10">
          {/*  subscribeSecBlock */}
          {/* <Subscription /> */}
        </div>
        {/*  footerHolder */}

        {/* modal starts */}
        <div
          className="modal fade "
          id="productInfo"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title text-capitalize" id="FAQ">
                  {this.state.name}
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body modal_body">
                <div className="row">
                  <div className="col-12 col-lg-4 order-lg-1">
                    {/*  productSliderImage */}
                    <div className="mb-lg-0 mb-4">
                      <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-ride="carousel"
                      >
                        <ol className="carousel-indicators d-none">
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
                              href={this.state.image}
                              className="img-thumbnail"
                              data-lightbox="#single-image"
                            >
                              <img
                                id="single-image"
                                src={this.state.image}
                                alt="image-1"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                          <div className="carousel-item">
                            <a
                              href={
                                this.state.image1 === ""
                                  ? this.state.image
                                  : this.state.image1
                              }
                              className="img-thumbnail"
                              data-lightbox="#single-image"
                            >
                              <img
                                id="single-image"
                                src={
                                  this.state.image1 === ""
                                    ? this.state.image
                                    : this.state.image1
                                }
                                alt="image-1"
                                className="img-fluid"
                              />
                            </a>
                          </div>
                          <div className="carousel-item">
                            <a
                              href={
                                this.state.image2 === ""
                                  ? this.state.image
                                  : this.state.image2
                              }
                              className="img-thumbnail"
                              data-lightbox="#single-image"
                            >
                              <img
                                id="single-image"
                                src={
                                  this.state.image2 === ""
                                    ? this.state.image
                                    : this.state.image2
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
                      <ul
                        className="
                    list-unstyled
                    socialNetwork
                    d-none
                    d-lg-flex
                    flex-wrap
                    mb-sm-11 mt-3
                    shareBtns
                  "
                      >
                        <li className="text-uppercase mr-2">SHARE PRODUCT:</li>
                        <li className="mr-1">
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}/product?id=${this.state._id}`}
                            className="fab fa-facebook-f"
                            target="_blank"
                          ></a>
                        </li>
                        <li className="mr-2">
                          <a
                            href={`https://web.whatsapp.com/send?text= Please Visit ${window.location.origin}/product?id=${this.state._id}`}
                            data-action="share/whatsapp/share"
                            target="_blank"
                            className="fab fa-whatsapp d-lg-block d-none"
                          ></a>
                          <a
                            href={`whatsapp://send?text= Please Visit http://ad-test.easygov.co.in/PanAdvertisement`}
                            data-action="share/whatsapp/share"
                            target="_blank"
                            className="fab fa-whatsapp d-block d-lg-none"
                          ></a>
                        </li>
                        <li className="mr-2">
                          <a
                            href={`https://twitter.com/share?text=Multiplex+Urban+Green+Products&url=${window.location.origin}/product?id=${this.state._id}?hashtags=#MultiplexUrbanGreen`}
                            className="fab fa-twitter"
                            target="_blank"
                          ></a>
                        </li>
                        <li className="mr-2">
                          <a
                            href={`http://pinterest.com/pin/create/button/?url=${window.location.origin}/product?id=${this.state._id}&description=Multiplex+Urban+Green+Products`}
                            className="fab fa-pinterest-p"
                            target="_blank"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-lg-8 order-lg-3">
                    {/*  productTextHolder */}
                    <div className="productTextHolder overflow-hidden">
                      <strong
                        className=" d-block mb-2 text-green"
                        style={{ fontSize: "1rem" }}
                      >
                        <del style={{ color: "#b5b5b5" }}>
                          {" "}
                          ₹{this.state.mrp}
                        </del>
                        <span className="  fwEbold">
                          <span className="ml-2">₹{this.state.price} </span>
                        </span>
                      </strong>
                      <p className="mb-2">
                        <b>Available: </b> <br />
                        {this.state.available}
                      </p>
                      <div style={{ fontSize: "1rem" }}>
                        <b>Benefits: </b> <br />
                        <div className="benefitsHeight">
                          {ReactHtmlParser(this.state.benefits)}
                        </div>
                      </div>
                      <form action="" onSubmit={this.onSubmit.bind(this)}>
                        <div className="holder overflow-hidden d-flex flex-wrap cart-number">
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
                              if (this.state.productCount === 30) {
                                this.setState({
                                  productCount: 30,
                                });
                              } else {
                                this.setState({
                                  productCount: this.state.productCount + 1,
                                });
                              }
                              this.setState({
                                // productName: this.state.name,
                                productId: this.state._id,
                                productPrice: this.state.price,
                                productImage: this.state.image,
                                productName: this.state.name,
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
                          cartBtn
                          fwEbold
                          text-white
                          md-round
                          py-1
                          px-1
                          py-md-1
                          px-md-1
                          my-2
                          my-lg-0
                        "
                            onClick={() => {
                              this.setState({
                                productId: this.state._id,
                                productPrice: this.state.price,
                                productImage: this.state.image,
                                productName: this.state.name,
                              });
                            }}
                            style={{ borderRadius: "5px" }}
                          >
                            Add To Cart{" "}
                            <i className="fas fa-arrow-right ml-2"></i>
                          </button>
                        </div>
                      </form>
                      <ul
                        className="
                    list-unstyled
                    socialNetwork
                    d-flex
                    d-lg-none
                    flex-wrap
                    mb-sm-11 mb-4
                    
                  "
                      >
                        <li className="text-uppercase mr-2">
                          SHARE THIS PRODUCT:
                        </li>
                        <li className="mr-2">
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                            className="fab fa-facebook-f"
                            target="_blank"
                          ></a>
                        </li>
                        <li className="mr-2">
                          <a
                            href={`whatsapp://send?text=${window.location.href}`}
                            data-action="share/whatsapp/share"
                            target="_blank"
                            className="fab fa-whatsapp"
                          ></a>
                        </li>
                        <li className="mr-2">
                          <a
                            href={`http://twitter.com/share?text=Multiplex+Urban+Green+Products&url=${window.location.href}&hashtags=#MultiplexUrbanGreen`}
                            className="fab fa-twitter"
                            target="_blank"
                          ></a>
                        </li>
                        <li className="mr-2">
                          <a
                            href={`http://pinterest.com/pin/create/button/?url=${window.location.href}&description=Multiplex+Urban+Green+Products`}
                            className="fab fa-pinterest-p"
                            target="_blank"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="container mt-0 mb-lg-n2">
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
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="comment-tab"
                              data-toggle="tab"
                              href="#comment"
                              role="tab"
                              aria-controls="comment"
                              aria-selected="false"
                            >
                              Comments
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
                            <div style={{ fontSize: "0.8rem" }}>
                              <b>Description: </b>
                              {ReactHtmlParser(this.state.description)}
                            </div>
                            <div style={{ fontSize: "0.8rem" }}>
                              <b>Directions: </b>
                              {ReactHtmlParser(this.state.directions)}
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
                          <div
                            className="tab-pane fade"
                            id="comment"
                            role="tabpanel"
                            aria-labelledby="comment-tab"
                          >
                            {localStorage.getItem("profile") ? (
                              <div className="p-1 text-center">
                                <form
                                  action=""
                                  onSubmit={this.submitComments.bind(this)}
                                >
                                  <div className="form-group">
                                    <textarea
                                      className="form-control"
                                      rows="4"
                                      placeholder="Write Your Review...."
                                      value={this.state.comment}
                                      onChange={(e) => {
                                        this.setState({
                                          comment: e.target.value,
                                          productName: this.state.name,
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
                                <a href="/signin">
                                  <h4 className="text-danger">
                                    Please Login to write a review.
                                  </h4>
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* commenting */}
                {/* <div className="container">
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
                                productName: this.state.name,
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
                      <h4 className="text-danger">
                        Please Login to write a review.
                      </h4>
                    </div>
                  )}
                </div> */}
              </div>
              <div className="modal-footer">
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
              </div>
            </div>
          </div>
        </div>
        {/* modal ends */}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    comments: state.comments,
  };
};

export default connect(mapStateToProps, {
  fetchProducts,
  fetchPlantHealth,
  updateCartNum,
  addItemToCart,
  fetchProductComments,
  postComment,
  fetchPottingSoil,
  fetchSeeds,
  fetchAccessories,
})(AllProducts);
