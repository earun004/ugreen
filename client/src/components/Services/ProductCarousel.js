import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Carousel extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="joy_logo2">
            <br />
            <br />
            <br />
            <div className="" style={{ textAlign: " left !important" }}>
              {/* <h4>
                Shop for 9999 and <br /> avail this offer
              </h4>
              <h5>*Terms and Conditions</h5> */}
              {/* <a
                href="/servicesFrontend#services"
                className="servicesBtn shop_btn1 my-3 d-none d-md-inline-block"
                style={{ color: "#fff" }}
              >
                Book an appointment
              </a> */}
              <div className="button-container-3 servicesBtn">
                <span className="mas"> Book an appointment</span>
                <button
                  type="button"
                  name="Hover"
                  onClick={() => {
                    window.scrollBy(0, 1650);
                  }}
                >
                  {" "}
                  Book an appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
