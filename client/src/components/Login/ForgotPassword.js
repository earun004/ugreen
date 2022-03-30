import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import { reduxForm, Field } from "redux-form";

import { resetPassword } from "../../actions/auth";
import { Link } from "react-router-dom";
import $ from "jquery";
import { trackPromise } from "react-promise-tracker";

class ForgotPassword extends Component {
  componentDidMount() {
    $(".show").on("click", () => {
      if ($("input[type=password]").prop("type") === "password") {
        $("input[type=password]").attr("type", "text");
        $(".show").addClass("bi-eye-fill-color");
      } else {
        $("input:last").attr("type", "password");
        $(".show").removeClass("bi-eye-fill-color");
      }
    });
  }

  renderInput({ input, type, label, meta, placeholder }) {
    return (
      <div className="form-group row">
        <div className="col-12">
          <div className="form-label">
            <label>{label}</label>
          </div>
          <input
            {...input}
            type={type}
            autoComplete="off"
            className="form-control"
            placeholder={placeholder}
          />
          <div>
            {meta.touched && meta.error ? (
              <div className="alert alert-danger p-1 my-1">{meta.error}</div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }

  onSubmit = (formValues) => {
    // console.log(formValues);
    trackPromise(
      this.props.resetPassword(formValues.email, formValues, this.props.history)
    );
  };

  render() {
    return (
      <div className="">
        <div className="home-btn d-none d-sm-block greenBg float-right mr-5 mt-1">
          <Link to="/">
            <i className="fas fa-home h2 text-white"></i>
          </Link>
        </div>

        <div className="authentication-bg greenBg authentication-bg-pattern d-flex align-items-center pb-0 vh-100">
          <div className="account-pages w-100 mt-5 mb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6 col-xl-5">
                  <div className="card mb-0">
                    <div className="card-body p-4">
                      <div className="account-box">
                        <div className="account-logo-box">
                          <div className="text-center">
                            <Link to="/">
                              <img
                                src="images/Urban_Images/Main_logo.png"
                                alt=""
                                height="100"
                              />
                            </Link>
                          </div>
                          <h5 className="text-uppercase mb-1 mt-4">
                            Reset your password
                          </h5>
                        </div>

                        <div className="account-content mt-4">
                          {this.props.auth.errorMessage.length >= 2 ? (
                            <div className="text-center alert alert-danger">
                              {this.props.auth.errorMessage}
                            </div>
                          ) : (
                            ""
                          )}
                          <form
                            className="form-horizontal"
                            onSubmit={this.props.handleSubmit(this.onSubmit)}
                          >
                            <Field
                              type="email"
                              name="email"
                              label="Email"
                              component={this.renderInput}
                              placeholder="example@gmail.com"
                            />

                            <div style={{ position: "relative" }}>
                              <i className="fas fa-eye bi bi-eye-fill show"></i>
                              <Field
                                type="password"
                                name="password"
                                label="New Password"
                                component={this.renderInput}
                                placeholder="Enter your password"
                              />
                            </div>

                            <div className="form-group row text-center mt-2">
                              <div className="col-12">
                                <button
                                  className="btn btn-md btn-block btn-success waves-effect waves-light"
                                  type="submit"
                                >
                                  Update password
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end card-body --> */}
                </div>
                {/* <!-- end card --> */}
              </div>
              {/* <!-- end row --> */}
            </div>
            {/* <!-- end container --> */}
          </div>
        </div>
      </div>
    );
  }
}

function validate(formValues) {
  const errors = {};
  if (!formValues.password) {
    errors.password = "Password is required.";
  }
  if (!formValues.email) {
    errors.email = "Email is required.";
  }
  return errors;
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default compose(
  reduxForm({ form: "signinForm", validate }),
  connect(mapStateToProps, { resetPassword })
)(withRouter(ForgotPassword));
