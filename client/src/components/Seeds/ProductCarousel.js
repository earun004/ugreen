import React, { Component } from "react";

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
              className=" potting_soil text-white "
              style={{ textAlign: "right ", color: "#fff !important" }}
            >
              {/* <h1 className="mb-5">Seeds</h1>
              <h4>
                Shop for 9999 and <br /> avail this offer
              </h4>
              <h5>*Terms and Conditions</h5> */}
              {/* <a
                className="seedsBtn shop_btn1 my-3 d-none d-md-inline-block"
                style={{ color: "#fff", " border": " 3px solid #fff" }}
                href="/seeds#seeds"
              >
                Shop Now
              </a> */}

              <div className="button-container-2 seedsBtn">
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
