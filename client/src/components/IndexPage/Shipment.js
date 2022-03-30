import React, { Component } from "react";

export default class Shipment extends Component {
  render() {
    return (
      <div>
        <div className="container overflow-hidden  my-5">
          <div className="row header_buttons">
            <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0 text-light">
              {/* contactListColumn  */}
              <div className="btn2 contactListColumn border  overflow-hidden py-md-2 py-2  px-3 d-flex">
                <img
                  src="images/shipment.svg"
                  width="50px"
                  className="filter-white"
                />
                <div className="alignLeft pl-2">
                  <strong className="headingV fwEbold d-block mb-1 text-light">
                    Free shipping
                  </strong>
                  <p className="m-0" style={{ fontSize: "0.8rem" }}>
                    On orders over <b>999 ₹</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0 text-light">
              {/* contactListColumn  */}
              <div className="btn3 contactListColumn border  overflow-hidden  py-md-2 py-2  px-3 d-flex">
                <span className="icon icon-heart  text-light"></span>
                <div className="alignLeft pl-2">
                  <strong className="headingV fwEbold d-block mb-1 text-light">
                    100% Natural
                  </strong>
                  <p className="m-0" style={{ fontSize: "0.8rem" }}>
                    All Natural Products
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0 text-light">
              {/* contactListColumn  */}
              <div className="btn4 contactListColumn border  overflow-hidden  py-md-2 py-2  px-3 d-flex">
                <span className="icon icon-gift text-light"></span>
                <div className="alignLeft pl-2">
                  <strong className="headingV fwEbold d-block mb-1 text-light">
                    Special Gift Cards
                  </strong>
                  <p className="m-0" style={{ fontSize: "0.8rem" }}>
                    The perfect gift idea
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0 text-light">
              {/* contactListColumn  */}
              <div className="btn5 contactListColumn border  overflow-hidden  py-md-2 py-2 px-2 d-flex">
                <span
                  className="icon icon-van pl-2 pl-md-1 text-light"
                  // style={{ fontSize: "2rem" }}
                ></span>
                <div className="alignLeft pl-2">
                  <strong className="headingV fwEbold d-block mb-1 text-light">
                    PAN India Delivery
                  </strong>
                  <p className="m-0" style={{ fontSize: "0.8rem" }}>
                    Order from anywhere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
