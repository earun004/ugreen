import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";

import { sendEmail } from "../../actions/OtherActions";

class Subscription extends Component {
  state = { email: "" };

  onSubmit(e) {
    e.preventDefault();
    trackPromise(this.props.sendEmail(this.state));
    this.setState({ email: "" });
  }

  render() {
    return (
      <div>
        {/*  subscribeSecBlock */}
        <section
          className="
              subscribeSecBlock
              bgCover
              py-5
              px-3
              mb-2
            "
          style={{
            backgroundImage: " url(./images/Urban_Images/n-bg3.jpg)",
          }}
        >
          <header className="col-12 mainHeader mb-9 text-center">
            <h1 className="headingIV playfair fwEblod mb-4">
              Subscribe to Our Newsletter
            </h1>
            <span className="headerBorder d-block mb-5">
              <img
                src="images/hbdr.png"
                alt="Header Border"
                className="img-fluid img-bdr"
              />
            </span>
            <p className="mb-3">
              Enter Your email address to join our mailing list and keep
              yourself update
            </p>
          </header>
          <form
            className="emailForm1 mx-auto overflow-hidden d-flex flex-wrap"
            onSubmit={this.onSubmit.bind(this)}
          >
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
              className="form-control px-4 border-0"
              placeholder="Enter your mail..."
              autoComplete="off"
              required
            />

            <button
              type="submit"
              className="
                  btn
                  btnTheme
                  btnShop
                  fwEbold
                  text-light
                  mx-auto
                "
              style={{
                backgroundColor: "#5ba515",
                fontSize: "1rem",
                fontWeight: "bolder",
              }}
            >
              Subscribe <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default connect(null, { sendEmail })(Subscription);
