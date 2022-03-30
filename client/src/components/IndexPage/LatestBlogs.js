import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchThreeBlogs } from "../../actions/OtherActions";
import { trackPromise } from "react-promise-tracker";
import ReactHtmlParser from "react-html-parser";

class LatestBlogs extends Component {
  componentDidMount() {
    trackPromise(this.props.fetchThreeBlogs());
  }

  renderBlogs() {
    return this.props.products.map((blog) => {
      return (
        <div className="col-12 col-sm-6 col-lg-4" key={blog._id}>
          {/*  newsPostColumn  */}
          <div className="newsPostColumn text-center px-2 pb-2 mb-5">
            <div className="imgHolder position-relative mb-3">
              <Link to={`/singleBlog?id=${blog._id}`}>
                <img
                  src={blog.image}
                  alt="image description"
                  className="img-fluid w-100 h-100"
                />
                <time
                  className="time text-uppercase position-absolute py-2 px-1"
                  dateTime="2019-02-03 20:00"
                >
                  {" "}
                  <strong className="fwEbold d-block">{blog.date}</strong>{" "}
                  {blog.month}
                </time>
              </Link>
            </div>

            <h2 className="headingV fwEbold mb-2">
              <Link to={`/singleBlog?id=${blog._id}`}>{blog.title}</Link>
            </h2>
            <p className="mb-0 text-truncate">{blog.description1}</p>
          </div>
        </div>
      );
    });
  }
  render() {
    // console.log(this.props.products);
    return (
      <div id="latestBlogs">
        <section className="latestSec container overflow-hidden pt-xl-5 pb-xl-4 pt-lg-20 pb-lg-4 pb-md-2 pt-5">
          <div className="row">
            {/*  mainHeader  */}
            <header className="col-12 mainHeader mb-1 text-center">
              <h1 className="headingIV playfair fwEblod mb-2">
                Latest Blogs & Posts
              </h1>
              <span className="headerBorder d-block mb-2">
                <img
                  src="images/hbdr.png"
                  alt="Header Border"
                  className="img-fluid img-bdr"
                />
              </span>
              {/* <p>
                There are many variations of passages of lorem ipsum available{" "}
              </p> */}
            </header>
          </div>
          <div className="row">{this.renderBlogs()}</div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.ThreeBlogs,
  };
};

export default connect(mapStateToProps, { fetchThreeBlogs })(LatestBlogs);
