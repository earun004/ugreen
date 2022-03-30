import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";

import { fetchPlantHealth } from "../../actions/Products";
import { updateCartNum } from "../../actions/OtherActions";
import { addItemToCart } from "../../actions/CartActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class MainProducts extends Component {
  state = {
    search: "",
  };

  componentDidMount() {
    trackPromise(this.props.fetchPlantHealth());
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
                      href=""
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
              <div className="text-center py-1 px-2">
                <span className="title d-block mb-1">
                  <a href={`/product?id=${product._id}`}>{product.name}</a>
                </span>
                <span className="price d-block fwEbold">
                  <del>{parseInt(product.mrp)} ₹</del>
                  {product.price}
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
            <a href={`/product?id=${product._id}`}>
              <img
                src={product.image}
                alt="image description"
                className="img-fluid"
              />
            </a>
          </div>
          <div className="description-wrap pl-1">
            <h4 className="headingVII mb-1">
              <a href={`/product?id=${product._id}`}>{product.name}</a>
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
      <div id="plantHealth">
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
              <div className="col-12 col-lg-9 order-3">
                {/*  content */}
                <article id="content">
                  <div className="row">
                    {/*  featureCol */}
                    {this.renderProducts()}
                  </div>
                </article>
              </div>
              <div className="col-12 col-lg-3 order-1">
                {/*  sidebar */}
                <aside id="sidebar">
                  {/*  widget */}
                  <section className="widget overflow-hidden mb-9">
                    <form
                      action="javascript:void(0);"
                      className="searchForm position-relative border"
                    >
                      <fieldset>
                        {/* <input
                          type="search"
                          className="form-control"
                          placeholder="Search product..."
                        /> */}
                        <input
                          className="form-control"
                          value={this.state.search}
                          placeholder="Search By Name Here..."
                          onChange={(e) => {
                            this.setState({ search: e.target.value });
                            console.log(this.state.search);
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
                </aside>
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
  fetchPlantHealth,
  updateCartNum,
  addItemToCart,
})(MainProducts);
