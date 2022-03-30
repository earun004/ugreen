import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="">
            <br />
            <br />
            <br />
            <div
              className="text-white"
              style={{
                textAlign: "left ",
                color: "#fff !important",
              }}
            >
              {/* <h1 className="pottingText">Potting Soil</h1>
              <h4 className="text-white">
                Shop for 9999 and <br /> avail this offer
              </h4>
              <h5 className="text-white mb-1">*Terms and Conditions</h5> */}
              {/* <a
                href="/pottingSoil#pottingSoil"
                className="shop_btn1 pottingBtn my-3 d-none d-md-inline-block"
                style={{
                  color: " #fff",
                  " border": " 3px solid #fff",
                }}
              >
                Shop Now
              </a> */}
              <div className="button-container-2 pottingBtn">
                <span className="mas">Shop Now</span>
                <button
                  onClick={() => {
                    window.scrollBy(0, 600);
                  }}
                  type="button"
                  name="Hover"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
