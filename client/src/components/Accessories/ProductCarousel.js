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
              className=" potting_soil text-white"
              style={{ textAlign: "left ", color: "#fff !important" }}
            >
              {/* <h1>Accessories</h1>
              <h4>
                Shop for 9999 and <br /> avail this offer
              </h4>
              <h5>*Terms and Conditions</h5> */}
              {/* <a
                href="/accessories#accessories"
                className="accBtn shop_btn1 my-3 d-none d-md-inline-block"
                style={{ color: "#fff" }}
              >
                Shop Now
              </a> */}

              <div className="button-container-2 accBtn">
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
