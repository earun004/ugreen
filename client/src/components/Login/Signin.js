import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import { reduxForm, Field } from "redux-form";

import { signin, sendForgotEmail } from "../../actions/auth";
import { Link } from "react-router-dom";
import $ from "jquery";
import { trackPromise } from "react-promise-tracker";

class Signin extends Component {
  state = { email: "" };
  componentDidMount() {
    $(".show").on("click", () => {
      if ($("#txtPassword").prop("type") === "password") {
        $("#txtPassword").attr("type", "text");
        $(".show").addClass("bi-eye-fill-color");
      } else {
        $("#txtPassword").attr("type", "password");
        $(".show").removeClass("bi-eye-fill-color");
      }
    });
  }

  renderInput({ input, type, label, meta, placeholder, id, readonly }) {
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
            id={id}
            readonly={readonly}
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
    trackPromise(this.props.signin(formValues, this.props.history));
  };

  submitEmail(e) {
    e.preventDefault();
    trackPromise(this.props.sendForgotEmail(this.state));
    // console.log(this.state);
  }

  render() {
    return (
      <div className="">
        <div className="home-btn d-none d-sm-block greenBg float-right mr-5 mt-1">
          <Link to="/">
            <i className="fas fa-home h2 text-white"></i>
          </Link>
        </div>

        <div className="authentication-bg greenBg authentication-bg-pattern d-flex align-items-center pb-0 vh-100">
          {this.props.auth.errorMessage.length >= 2 ? (
            <div className="text-center alert alert-danger">
              {this.props.auth.errorMessage}
            </div>
          ) : (
            ""
          )}

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
                          <h5 className="text-uppercase mb-1 mt-4">Sign In</h5>
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
                              id="txtUserName"
                              readonly={false}
                            />

                            <div style={{ position: "relative" }}>
                              <i className="fas fa-eye bi bi-eye-fill show"></i>
                              <Field
                                type="password"
                                name="password"
                                label="Password"
                                component={this.renderInput}
                                placeholder="Enter your password"
                                id="txtPassword"
                                readonly={true}
                                onFocus={() => {
                                  $(this).removeAttr("readonly");
                                }}
                              />
                            </div>

                            <div className="form-group row text-center mt-2">
                              <div className="col-12">
                                <button
                                  className="btn btn-md btn-block btn-success waves-effect waves-light"
                                  type="submit"
                                >
                                  Sign In
                                </button>
                              </div>
                            </div>
                          </form>

                          <div className="row mt-4 pt-2">
                            <div className="col-sm-12 text-center">
                              <p className="text-muted mb-0">
                                Don't have an account?{" "}
                                <Link to="/signup" className="text-dark ml-1">
                                  <b>Sign Up</b>
                                </Link>
                                <br />
                                Forgot password?
                                <a
                                  className="text-dark ml-1"
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#forgotPassword"
                                >
                                  <b>Click here</b>
                                </a>
                              </p>
                            </div>
                          </div>
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
        {/* modal starts */}
        <form onSubmit={this.submitEmail.bind(this)}>
          <div
            className="modal fade "
            id="forgotPassword"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="FAQ">
                    Password Reset Form
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group row">
                    <div className="col-12">
                      <div className="form-label">
                        <label>
                          Enter your registered email{" "}
                          <span className="text-danger">*</span>
                        </label>
                      </div>
                      <input
                        type="email"
                        autoComplete="off"
                        className="form-control"
                        placeholder="example@gmail.com"
                        required
                        value={this.state.email}
                        onChange={(e) => {
                          this.setState({ email: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="Submit"
                  />
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    style={{
                      color: "#000 !important",
                      fontSize: "2rem  !important",
                      background: "transparent  !important",
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* modal ends */}
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
  connect(mapStateToProps, { signin, sendForgotEmail })
)(withRouter(Signin));
