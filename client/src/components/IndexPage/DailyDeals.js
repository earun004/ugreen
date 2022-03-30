import React, { Component } from "react";
import { connect } from "react-redux";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import ReactHtmlParser from "react-html-parser";
import { fetchDailyDeals } from "../../actions/Products";
import { addItemToCart } from "../../actions/CartActions";
import {
  updateCartNum,
  fetchProductComments,
  postComment,
} from "../../actions/OtherActions";
import { fetchHeadings } from "../../actions/HeadingActions";
import { trackPromise } from "react-promise-tracker";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class DailyDeals extends Component {
  state = {
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
    update: true,
    update: true,
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      600: {
        items: 6,
      },
    },
    breakPoints: [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2 },
      { width: 768, itemsToShow: 4 },
      { width: 1200, itemsToShow: 6 },
    ],
  };

  componentDidMount() {
    trackPromise(this.props.fetchDailyDeals());
    trackPromise(this.props.fetchHeadings());
    this.setState({ update: false });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id !== prevState.id) {
      const value = this.props.products.filter(
        (val) => val._id === this.state.id
      );
      this.setState(value[0]);
      // console.log(value[0]);
      // console.log(this.state);
    }
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
      if (!this.props.comments) {
        return;
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
  }

  render() {
    // console.log(this.props.comments);
    return (
      <div id="topSellers">
        <section className="dealSecHolder container-fluid overflow-hidden py-xl-12 py-lg-10 py-md-8 py-5 mt-n5">
          {/* <!-- mainHeader --> */}
          <header className="col-12 mainHeader  text-center">
            <h1
              className="headingIV playfair fwEblod "
              style={{ textTransform: "capitalize" }}
            >
              {/* {this.props.headings.length === 0
                ? "Top Sellers"
                : this.props.headings[0].title1} */}
              Top Sellers
            </h1>
            <span className="headerBorder d-block ">
              <img
                src="images/hbdr.png"
                alt="Header Border"
                className="img-fluid img-bdr"
              />
            </span>
            <p className="mb-6">
              Here's a quick look at our top selling products
            </p>
          </header>
          <div className="container-fluid">
            <Carousel
              breakPoints={this.state.breakPoints}
              enableAutoPlay
              autoPlaySpeed={5000} // same time
              loop
              showArrows={false}
              showEmptySlots={true}
            >
              {this.props.products.map((product) => (
                <Item key={product._id}>
                  <div className="item" key={product._id}>
                    <div
                      onClick={() => {
                        this.setState({
                          id: product._id,
                          productId: product._id,
                        });
                        trackPromise(
                          this.props.fetchProductComments(product._id)
                        );
                        // console.log("this is calling");
                      }}
                    >
                      {/* featureCol  */}
                      <div className="featureCol position-relative w-100 px-3 mb-sm-8 mb-6">
                        <div className="border">
                          <div className="imgHolder position-relative w-100 overflow-hidden">
                            <Link
                              // data-toggle="modal"
                              // data-target="#productInfo2"
                              to={`/offers`}
                              style={{ cursor: "pointer" }}
                            >
                              <img
                                src={product.image}
                                alt="image description"
                                className="img-fluid w-100 imgSize "
                              />
                            </Link>
                            <ul className="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
                              {/* <li className="mr-2 overflow-hidden">
                      <a
                       
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
                                    // alert("added");
                                  }}
                                  style={{ cursor: "pointer" }}
                                  className="icon-cart d-block"
                                ></a>
                              </li>
                              <li className="mr-2 overflow-hidden ">
                                <Link
                                  to={`/offers`}
                                  // data-toggle="modal"
                                  // data-target="#productInfo2"
                                  className="icon-eye d-block"
                                ></Link>
                              </li>
                            </ul>
                          </div>
                          <div className="text-center py-1 px-2">
                            <span className="title d-block mb-1">
                              <marquee direction="left" scrollamount="3">
                                <Link
                                  to={`/offers`}
                                  // data-toggle="modal"
                                  // data-target="#productInfo1"
                                >
                                  {product.name}
                                </Link>
                              </marquee>
                            </span>
                            <span className="price d-block fwEbold">
                              <del> ₹{parseInt(product.mrp)}</del>₹
                              {product.price}
                            </span>

                            {/* <span className="hotOffer fwEbold text-uppercase text-white position-absolute d-block">
                              OFF
                            </span> */}
                            <span className="hotOffer green fwEbold text-uppercase text-white position-absolute d-block">
                              Sale
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Item>
              ))}
            </Carousel>
          </div>
        </section>

        {/* modal starts */}
        <div
          className="modal fade "
          id="productInfo2"
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
                                <h4 className="text-danger">
                                  Please Login to write a review.
                                </h4>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.DailyDeals,
    comments: state.comments,
    headings: state.headings,
  };
};

export default connect(mapStateToProps, {
  fetchDailyDeals,
  updateCartNum,
  fetchProductComments,
  postComment,
  addItemToCart,
  fetchHeadings,
})(DailyDeals);
