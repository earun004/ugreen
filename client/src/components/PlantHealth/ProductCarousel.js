import React, { Component } from "react";
import $ from "jquery";

export default class Carousel extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="joy_logo2">
            <br />
            <br />
            <br />
            <div
              className=" potting_soil text-white"
              style={{ textAlign: "left ", color: "#fff !important" }}
            >
              {/* <h1>Plant Health</h1>
              <h4>
                Shop for 9999 and <br /> avail this offer
              </h4>
              <h5>*Terms and Conditions</h5> */}
              {/* <a
                href="/plantHealth#plantHealth"
                className="plantBtn shop_btn1 my-3 d-none d-md-inline-block"
                style={{ color: "#fff", " border": " 3px solid #fff" }}
              >
                Shop Now
              </a> */}

              <div className="button-container-2 plantBtn">
                <span className="mas">Shop Now</span>
                <button
                  type="button"
                  name="Hover"
                  onClick={() => {
                    window.scrollBy(0, 600);
                  }}
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
