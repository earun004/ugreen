import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";

import { fetchBlogs } from "../../actions/OtherActions";
import { trackPromise } from "react-promise-tracker";
import CartLink from "../Cart/CartLink";
import ReactHtmlParser from "react-html-parser";

class Blogs extends Component {
  state = { search: "" };
  componentDidMount() {
    trackPromise(this.props.fetchBlogs());
    document.title = "MultiplexUrbanGarden - URBAN GARDENING FOR BEGINEERS";
  }

  renderBlogTitle() {
    return this.props.products.reverse().map((product) => {
      return (
        <li key={product._id}>
          <Link to={`/singleBlog?id=${product._id}`} className="py-2 d-block">
            {product.title}
          </Link>
        </li>
      );
    });
  }

  renderArchiveList() {
    return this.props.products.reverse().map((product) => {
      return (
        <li key={product._id}>
          <Link to={`/singleBlog?id=${product._id}`} className="py-2 d-block">
            <span className="text-capitalize">{product.month}</span>{" "}
            {product.date}
          </Link>
        </li>
      );
    });
  }

  renderProducts() {
    return this.props.products
      .filter((val) => {
        if (this.state.search === "") {
          return val;
        } else if (
          val.title.toLowerCase().includes(this.state.search.toLowerCase())
        ) {
          return val;
        }
      })
      .map((product) => {
        return (
          <article id="content" key={product._id}>
            {/* newsBlogColumn */}
            <div className="newsBlogColumn mb-md-4 mb-2">
              <div className="imgHolder position-relative mb-6">
                <Link to={`/singleBlog?id=${product._id}`}>
                  <img
                    src={product.image}
                    alt="image description"
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="textHolder d-flex align-items-start">
                <time className="time text-center text-uppercase py-2 text-center px-2">
                  <strong className="fwEbold d-block mb-1">
                    {product.date}
                  </strong>{" "}
                  {product.month}
                </time>
                <div className="alignLeft pl-sm-6 pl-3">
                  <h2 className="headingV fwEbold mb-2 text-capitalize">
                    <Link to={`/singleBlog?id=${product._id}`}>
                      {product.title}
                    </Link>
                  </h2>
                  <marquee direction="left" scrollamount="6">
                    {product.description1}
                  </marquee>
                </div>
              </div>
            </div>
          </article>
        );
      });
  }

  render() {
    // console.log(this.props.products);
    return (
      <div>
        <Header />
        <CartLink />
        <section
          className="introBannerHolder d-flex w-100 bgCover"
          style={{
            backgroundImage: "url(images/Urban_Images/b-bg7.jpg)",
            marginTop: "2.3rem",
            backgroundSize: "revert",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12  pt-5 text-center">
                <h1 className="headingIV fwEbold playfair mb-4">Blog</h1>
                <ul
                  className="
                    list-unstyled
                    breadCrumbs
                    d-flex
                    justify-content-center
                  "
                >
                  <li
                    className="mr-2"
                    style={{
                      fontSize: "1.3rem",
                    }}
                  >
                    <p style={{ fontSize: "1.3rem", fontWeight: "lighter" }}>
                      For Urban Gardeners...
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div
          className="
            twoColumns
            container
            py-3
          "
        >
          <div className="row">
            <div className="col-12 col-lg-3">
              {/* sidebar */}
              <aside id="sidebar">
                {/* widget */}
                <section className="widget overflow-hidden mb-md-9 mb-6">
                  <h3 className="headingVII fwEbold text-uppercase mb-4">
                    Search
                  </h3>
                  <form className="searchForm position-relative border">
                    <fieldset>
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
                {/* widget */}
                <section className="widget overflow-hidden mb-md-9 mb-6">
                  <h3 className="headingVII fwEbold text-uppercase mb-1">
                    RECENT POSTS
                  </h3>
                  <ul className="list-unstyled recentPostList mb-0">
                    {this.renderBlogTitle()}
                  </ul>
                </section>

                {/* widget */}
                <section className="widget overflow-hidden mb-md-6 mb-3 mt-2">
                  <h3 className="headingVII fwEbold text-uppercase mb-1">
                    ARCHIVES
                  </h3>
                  <ul className="list-unstyled archiveList mb-0">
                    {this.renderArchiveList()}
                  </ul>
                </section>
              </aside>
            </div>
            <div className="col-12 col-lg-9">
              {/*  content  */}
              <div className="row">
                <div className="col-12">{this.renderProducts()}</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.blogs,
  };
};

export default connect(mapStateToProps, { fetchBlogs })(Blogs);
