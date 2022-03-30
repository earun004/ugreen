import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";

import { sendEmail } from "../../actions/OtherActions";
import { Link } from "react-router-dom";

class Footer extends Component {
  state = { email: "" };

  onSubmit(e) {
    e.preventDefault();
    trackPromise(this.props.sendEmail(this.state));
    this.setState({ email: "" });
  }

  render() {
    return (
      <div>
        <aside className="footerHolder overflow-hidden bg-lightGray pt-xl-5 pt-md-4 pb-md-4  pt-3">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-4 mb-lg-0 mb-4">
                <h3 className="headingVI fwEbold text-uppercase mb-7">
                  Contact Us
                </h3>
                <ul className="list-unstyled footerContactList mb-3">
                  <li className="mb-3 d-flex flex-nowrap pr-xl-20 pr-0">
                    <span className="icon icon-place mr-3"></span>
                    <a
                      href="https://g.page/multiplex-urban-green?share"
                      target="_blank"
                    >
                      <address className="fwEbold m-0 ">
                        # 1, Techno Industrial Complex, Police Station Road,
                        Peenya 1st Stage, Peenya, Bengaluru, Karnataka - 560058.
                      </address>
                    </a>
                  </li>
                  <li className="mb-3 d-flex flex-nowrap">
                    <span className="icon icon-phone mr-3"></span>{" "}
                    <span className="leftAlign">
                      Mobile: <a href="tel:+919036999422">(+91) 90369 99422</a>
                      <br />{" "}
                      <a
                        href="tell:+918453084530"
                        className="ml-4 pl-3 mt-2 d-block"
                      >
                        (+91) 84530 84530
                      </a>
                    </span>
                  </li>
                  <li className="mb-3 d-flex flex-nowrap">
                    <span className="icon icon-phone mr-3"></span>{" "}
                    <span className="leftAlign">
                      Phone: <a href="tell:08028399991">080 28399991</a>
                    </span>
                  </li>
                  <li className=" mb-3 d-flex  flex-nowrap">
                    <span className="icon icon-email mr-2"></span>{" "}
                    <span className="leftAlign ml-1">
                      Email:
                      <a href="mailto:enquiry@multiplexurbangreen.com">
                        enquiry@multiplexurbangreen.com
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 pl-xl-14 mb-lg-0 mb-4">
                <h3 className="headingVI fwEbold text-uppercase mb-6">
                  Information
                </h3>
                <ul className="list-unstyled footerNavList">
                  <li className="mb-2">
                    <a>Working Days & Hours: Mon - Sat 9:00AM - 6:00PM </a>
                  </li>
                  <li className="mb-2">
                    <Link to="/blog">Blogs</Link>
                  </li>
                  <li className="mb-2">
                    <a href="/#testimonial">Testimonials</a>
                  </li>
                  {/* <li className="mb-2">
                    <a >Gallery</a>
                  </li> */}
                </ul>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 pl-xl-12 mb-lg-0 mb-4">
                <h3 className="headingVI fwEbold text-uppercase mb-7">
                  My Account
                </h3>
                <ul className="list-unstyled footerNavList">
                  <li className="mb-1">
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/profile">Orders history</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/profile">Order Status</Link>
                  </li>
                  {/* <li>
                    <a >Payment Info</a>
                  </li> */}
                </ul>
              </div>
              <div className="col-12 col-sm-6 col-lg-2 pl-xl-18 mb-lg-0 mb-1">
                <h3 className="headingVI fwEbold text-uppercase mb-1">
                  MAIN FEATURES
                </h3>
                <ul className="list-unstyled footerNavList">
                  <li className="mb-2">
                    <a href="#" data-toggle="modal" data-target="#favoriet">
                      F.A.Q
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" data-toggle="modal" data-target="#delivery">
                      Delivery & Returns
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" data-toggle="modal" data-target="#tracking">
                      Ordering & Tracking
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" data-toggle="modal" data-target="#terms">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" data-toggle="modal" data-target="#sales">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-4">
                <ul className="list-unstyled followSocailNetwork d-flex flex-nowrap social-nav">
                  <li className="fwEbold mr-xl-3 mr-md-4 mr-3">Follow us:</li>
                  <li className="mr-3">
                    <a
                      href="https://www.facebook.com/MultiplexUrbanGreenIndia/"
                      className="fab fa-facebook-f"
                      target="_blank"
                    ></a>
                  </li>
                  <li className="mr-3">
                    <a
                      href="https://www.twitter.com/UrbanGreenIndia/"
                      className="fab fa-twitter"
                      target="_blank"
                    ></a>
                  </li>
                  <li className="mr-3">
                    <a
                      href="https://www.pinterest.com/UrbanGreenIndia/"
                      className="fab fa-pinterest"
                      target="_blank"
                    ></a>
                  </li>
                  <li className="mr-3">
                    <a
                      href="https://www.youtube.com/channel/UC3oYd-JyEuJVFJJ0u2XADDw"
                      className="fab fa-youtube"
                      target="_blank"
                    ></a>
                  </li>
                  <li className="mr-3">
                    <a
                      href="https://www.instagram.com/multiplexurbangreenindia/"
                      className="fab fa-instagram"
                      target="_blank"
                    ></a>
                  </li>
                  <li className="mr-3">
                    <a
                      href="https://www.linkedin.com/company/multiplex-urban-green-india"
                      className="fab fa-linkedin"
                      target="_blank"
                    ></a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-8 d-lg-flex d-block">
                <h4 className="">Subscribe to Our Newsletter</h4>
                <form
                  className="emailForm1 mx-auto overflow-hidden d-lg-flex d-block"
                  onSubmit={this.onSubmit.bind(this)}
                >
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={(e) => {
                      this.setState({ email: e.target.value });
                    }}
                    className="form-control px-4 py-3 border-0"
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
                  ml-lg-2
                  my-2
                  my-md-0  mx-auto
                  d-block
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
              </div>
            </div>
          </div>
        </aside>

        {/* Copy rights */}
        <footer id="footer" className="overflow-hidden bg-dark">
          <div className="row justify-content-between">
            <div className="col-12 col-md-4 copyRightHolder v-II text-center pt-md-2 pb-md-2 py-2">
              <p className="mb-0">
                Coppyright 2020 by <a>Multiplex Urban Green</a> - All right
                reserved
              </p>
            </div>
            <div
              className="col-12 col-md-3 mt-2"
              style={{ marginTop: "20px !important", color: " #fff" }}
            >
              <p className="text-center">
                Powered by{" "}
                <a href="https://techravensolutions.com" target="_blank">
                  <img src="./images/TRlogo.png" height="15px" alt="" />
                </a>
              </p>
            </div>
          </div>
        </footer>

        {/* modal starts */}
        <div
          className="modal fade "
          id="favoriet"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="FAQ">
                  F.A.Q
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
              <div className="modal-body modal_body">
                <ol>
                  <li>
                    <b>My Account and how to order</b>
                    <br />
                    <p>
                      'My Account' allows you to take complete control over your
                      transactions., via "My account" you can do the following
                      actions
                    </p>
                    <ul>
                      <li>
                        Manage/edit your personal data like address, phone
                        numbers, email ids
                      </li>
                      <li>Change your password</li>
                      <li>Track the status of your order</li>
                    </ul>
                  </li>
                  <li>
                    <b>How will I know that my order is confirmed?</b>
                    <br />
                    <p>
                      {" "}
                      Once your order has been logged and payment authorization
                      has been received, MUG confirms receipt of the order and
                      begins processing it. You will receive an email
                      notification containing the details of your order. In this
                      mail you will be provided with a unique Order ID, item(s)
                      you have ordered. You will also be notified when we ship
                      the item(s) to you along with tracking details.
                    </p>
                  </li>
                  <li>
                    <b>Can I order a product which is out of stock?</b>
                    <br />
                    <p>
                      Unfortunately, products listed as 'Out of Stock' are not
                      available for sale. Please call/ WhatsApp us on 9036999422
                      of the product's availability.
                    </p>
                  </li>
                  <li>
                    <b>What are my Payment options?</b>
                    <br />
                    <p>MUG offers you multiple payment options such as</p>
                    <ul>
                      <li>Debit/ Credit Card</li>
                      <li>COD</li>
                      <li>Net Banking</li>
                      <li>UPI</li>
                    </ul>
                  </li>
                  <li>
                    <b>
                      Are there any hidden taxes when I purchase? ( Sales Tax,
                      VAT)
                    </b>
                    <br />
                    <p>
                      The prices listed for all the items are all-inclusive. The
                      price you see on the product page is exactly what you pay.
                      There are no extra charges. However, Delivery charges may
                      be extra. For purchases less than Rs.999 there is a
                      delivery charge of Rs.99. For purchase value of over
                      Rs.999 there are no charges. We accept payments made by
                      credit/debit cards issued in India.
                    </p>
                  </li>
                  <li>
                    <b>Credit cards</b>
                    <br />
                    <p>
                      We accept payments made using Visa, MasterCard, PayPal,
                      Maestro and American Express credit cards. To pay using
                      your credit card at checkout, you will need your card
                      number, expiry date, three-digit CVV number found at the
                      back of your card. After entering these details, you will
                      be redirected to the bank's page for entering the online
                      3D Secure password.
                    </p>
                  </li>
                  <li>
                    <b>Debit cards</b>
                    <br />
                    <p>
                      We accept payments made using Visa, MasterCard debit
                      cards. To pay using your debit card at checkout, you will
                      need your card number, expiry date, three-digit CVV
                      number. You will then be redirected to your bank's secure
                      page for entering your online password to complete the
                      payment.
                    </p>
                  </li>
                  <li>
                    <b>
                      What about Fraud ? Is it safe to use my credit card on
                      your site?
                    </b>
                    <br />
                    <p>
                      Your online transaction is secure with high levels of
                      transaction security, we process your payments via secure
                      and trusted payment gateways managed by leading service
                      providers. Banks use 3D secure password for online
                      transactions which are an added security feature. Hence
                      chances of misuse are at a minimal.
                    </p>
                  </li>
                  <li>
                    <b>Do you offer COD?</b>
                    <br />
                    <p>Yes, we do offer COD facility.</p>
                  </li>
                  <li>
                    <b>How to check the current status of my order?</b>
                    <br />
                    <p>
                      In the “My Account" section on the My Account page click
                      on the “My Orders" link to view the status of your orders.
                    </p>
                  </li>
                  <li>
                    <b>What do the following status' mean?</b>
                    <br />
                    <ul>
                      <li>
                        Payment pending – Your order has been logged and we are
                        waiting for the authorization from the Payment Gateway.
                      </li>
                      <li>
                        Order Under Processing – Your authorization has been
                        received from the payment gateway and the order is being
                        processed by MUG
                      </li>
                      <li>
                        Order shipped – Your order has been shipped by us and
                        it's on its way to you
                      </li>
                      <li> Order Cancelled – Your order has been cancelled</li>
                    </ul>
                  </li>
                  <li>
                    <b>Order Cancellation</b>
                    <br />
                    <p>
                      You can cancel your order before order shipped status. To
                      cancel, please contact us with the order number on
                      9036999422.
                    </p>
                  </li>
                  <li>
                    <b>Shipping</b>
                    <br />
                    <p>
                      For purchases less than Rs.999 there is a charge of Rs.99
                      delivery charge and for over Rs.999 there are no charges.
                      Estimated shipping time is two to five days from the order
                      being placed with us. Business days exclude Sundays and
                      other public holidays.
                    </p>
                  </li>
                  <li>
                    <b>Ordering special items</b>
                    <br />
                    <p>
                      The item may not be in stock but we can procure it for you
                      after you place the order. The delivery time depends on
                      the estimated procuring time and estimated delivery time.
                    </p>
                  </li>
                  <li>
                    <b>For Back in Stock Items</b>
                    <br />
                    <p>
                      The item is sold out; however, you can book an order and
                      the item will be shipped to you as and when we procure it.
                    </p>
                  </li>
                  <li>
                    <b>Temporarily Unavailable</b>
                    <br />
                    <p>
                      Even if an item is temporarily unavailable, we can get it
                      for you. Please use “Add to Wishlist" feature so that we
                      can notify you once it's back.
                    </p>
                  </li>
                  <li>
                    <b>
                      If the Delivery date does not correspond with the
                      timelines mentioned
                    </b>
                    <br />
                    <p>
                      Sometimes there may be public holidays between your order
                      date and delivery date. In this case we will add a day to
                      the estimated date of delivery.
                    </p>
                  </li>
                  <li>
                    <b>No service to my area or location</b>
                    <br />
                    <p>
                      We use our own delivery infrastructure and we may not be
                      able to service an area or a location. Please see the
                      areas where we deliver to check whether your location is
                      being currently serviced. If we are unable to deliver to
                      you, the system will not allow your order to be processed.
                    </p>
                  </li>
                  <li>
                    <b>I need to return an item</b>
                    <br />
                    <p>
                      Contact us to initiate a return and we will explain the
                      return mechanism to you.
                    </p>
                  </li>
                  <li>
                    <b>How do you do your delivery?</b>
                    <br />
                    <p>
                      We deliver via our trusted delivery partners. Utmost care
                      is taken to make sure that the product reaches you in the
                      best possible condition.
                    </p>
                  </li>
                  <li>
                    <b>Cancellation & Returns</b>
                    <br />
                    <p>
                      We value our customers. If you are not entirely satisfied
                      with the purchase, please can contact us online, write to
                      us at urbangreen@multiplexgroup.com and we will ensure
                      that a resolution is reached. If the product is damaged,
                      we will take it back within 2- 5 working days.
                      <br />
                      <br />
                      Please note that our policies vary from product to
                      product. Some products are non- returnable. In case you
                      want an item to be replaced contact us within the
                      stipulated return period, which is within one working day
                      from the date of delivery.
                    </p>
                  </li>
                  <li>
                    <b>Exchange</b>
                    <br />
                    <p>
                      If you are not satisfied with a purchase you can request
                      an exchange within one working day of the delivery.
                      Exchange is subject availability.
                    </p>
                  </li>
                  <li>
                    <b>Product Reviews</b>
                    <br />
                    <p>
                      We offer you a platform to aid customers on their buying
                      decision. Please review products based on the following
                      basic guidelines. Only review a product you have used,
                      provide a relevant unbiased review, be informative, and
                      make sure that you supply correct and accurate
                      information. Be concise.
                    </p>
                  </li>
                </ol>
              </div>
              <div className="modal-footer">
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
        {/* modal ends */}

        {/* modal starts */}
        <div
          className="modal fade "
          id="delivery"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="FAQ">
                  Delivery & Returns
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
              <div className="modal-body modal_body">
                <ol>
                  <li>
                    <b>Delivery Time</b>
                    <br />
                    <p>
                      Most orders arrive within 5-10 days of order being
                      confirmed. An order confirmation SMS/Email will be sent to
                      you, post which keep a watch out for a SMS/Email
                      notification that you will receive from us, once your
                      order is shipped.
                    </p>
                  </li>
                  <li>
                    <b>Free Shipping</b>
                    <br />
                    <p>We provide free shipping on all eligible orders.</p>
                  </li>
                  <li>
                    <b>International Shipping</b>
                    <br />
                    <p>
                      We only ship within India but accept most international
                      credit cards.
                    </p>
                  </li>
                  <li>
                    <b>Unable to Deliver</b>
                    <br />
                    <p>
                      If you are not available to take delivery, when our
                      courier partner attempts to deliver your order, the
                      courier partnerwill notify you. Thereafter, an additional
                      attempt will be made to deliver your order, after which
                      your package will be returned to our fulfilment centre and
                      your account will be refunded for the order amount.
                    </p>
                  </li>
                  <li>
                    <b>Cancelling an order</b>
                    <br />
                    <p>
                      <b>
                        Only orders that haven't left the fulfilment centre can
                        be cancelled.
                      </b>{" "}
                      To cancel an order, view the order details in “My Account”
                      section and click on “Cancel”. If the order has already
                      been shipped from our fulfilment centre, then you can
                      refuse to accept the delivery and send it back with the
                      courier partner. We will refund your amount, after the
                      product is received at our fulfilment centre.
                    </p>
                  </li>
                  <li>
                    <b>Return Process</b>
                    <br />
                    <p>
                      A request for return can only be raised, post 24 hours of
                      receipt of product. All returns requests must be received
                      within 15 days of delivery. To return a product, view the
                      order details in “My Account” section and click on
                      “Return”. Once the request is processed, the return order
                      will be picked up from the address provided by you while
                      placing the return request.
                      <br />
                      <br />
                      Please provide your product details and the reason for
                      your return, so we can keep improving. Once your return
                      request has been generated, we’ll send you a confirmation
                      via SMS and email.
                    </p>
                  </li>
                  <li>
                    <b>Return Policy</b>
                    <br />
                    <p>
                      Most items are eligible for returns (and refunds), except
                      for personal use items. The items should be unused, intact
                      and in their original packaging (labels, tags, boxes).
                      <br />
                      <br />
                      The refund will be processed post quality inspection of
                      the product(s). This may take 5-7 working days post
                      receipt of goods at our fulfilment centre.
                    </p>
                  </li>
                  <li>
                    <b>Returns with Promo Code or Discount</b>
                    <br />
                    <p>
                      If you used a promo code or discount at the time of
                      purchase, you will be credited only for the final amount
                      you paid after using the promo code.
                    </p>
                  </li>
                  <li>
                    <b>Refunds</b>
                    <br />
                    <p>
                      If you had opted for cash on delivery at the time of
                      purchase, please provide your bank details in “My
                      Accounts” section while placing the return request.
                    </p>
                  </li>
                </ol>
              </div>
              <div className="modal-footer">
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
        {/* modal ends */}

        {/* modal starts */}
        <div
          className="modal fade "
          id="tracking"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="FAQ">
                  Ordering & Tracking
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
                <ol>
                  <li>
                    <b>Order Tracking</b>
                    <br />
                    <p>
                      You can check the status of your order by visiting the
                      “Orders” section of your account. Visit the ‘Track Your
                      Order’ section, where you will see a link to track your
                      order via our courier partner’s website. You can then
                      track your order in real time.
                    </p>
                  </li>
                  <li>
                    <b>Split Shipments</b>
                    <br />
                    <p>
                      Sometimes, we ship orders in multiple parts, so we can get
                      you each part faster, therefore, one of the shipments may
                      arrive in advance of another.
                    </p>
                  </li>
                  <li>
                    <b>Order Delays or Cancellations</b>
                    <br />
                    <p>
                      We do our best to deliver all orders within the expected
                      delivery date. However, sometimes, it might take us longer
                      than expected to deliver your product. In the event that
                      your delivery date has passed and you still haven’t
                      received your order, please email us at
                      crm@multiplexurbangreen.com with your tracking number, so
                      we can assist you with the same.
                    </p>
                  </li>
                  <li>
                    <b>Orders Cancelled by MUG</b>
                    <br />
                    <p>
                      http://multiplexurbangreen.com reserves the right to
                      cancel any order without any explanation for doing so, as
                      per the circumstances where the requirement cannot be met.
                      The brand will ensure that any communication of
                      cancellation of an order, or any applicable refund will be
                      made within a reasonable time frame
                    </p>
                  </li>
                  <li>
                    <b>Damaged on Arrival</b>
                    <br />
                    <p>
                      If your order is tampered, opened, or visibly damaged on
                      delivery, return the order on arrival and notify our
                      Customer Care team by emailing crm@multiplexurbangreen.com
                    </p>
                  </li>
                </ol>
              </div>
              <div className="modal-footer">
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
        {/* modal ends */}

        {/* modal starts */}
        <div
          className="modal fade "
          id="terms"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="FAQ">
                  Terms of Service
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
              <div className="modal-body modal_body">
                <b>
                  Please read the following terms and conditions very carefully
                  as your use of service is subject to your acceptance of and
                  compliance with the following terms and conditions ("Terms").
                </b>
                <br />
                <br />
                <p>
                  By subscribing to or using any of our services you agree that
                  you have read, understood and are bound by the Terms,
                  regardless of how you subscribe to or use the services. If you
                  do not want to be bound by the Terms, you must not subscribe
                  to or use our services. These Terms and various other policies
                  are binding as per the provisions of the Information
                  Technology (Intermediaries guidelines) Rules, 2011 formulated
                  under the Information Technology Act of 2000. In these Terms,
                  references to "you", "User" shall mean the end user accessing
                  the Website, its contents and using the Services offered
                  through the Website, "Service Providers" mean independent
                  third party service providers, and "we", "us" and "our" shall
                  mean Multiplex Urban Green (India) Private Limited.
                </p>
                <ol>
                  <li>
                    <b>Introduction:</b>
                    <br />
                    <p>
                      a) www.multiplexurbangreen.com is an Internet based
                      content and e-commerce portal licensed by Multiplex Urban
                      Green (India) Private Limited, a company incorporated
                      under the laws of India hereinafter referred to as
                      Company.
                      <br />
                      b) Use of the Website is offered to you conditioned on
                      acceptance without modification of all the terms,
                      conditions and notices contained in these Terms, as may be
                      posted on the Website from time to time. Company at its
                      sole discretion reserves the right not to accept a User
                      from registering on the Website without assigning any
                      reason thereof.
                    </p>
                  </li>
                  <li>
                    <b>User Account, Password, and Security:</b>
                    <br />
                    <p>
                      You will receive a password and account designation upon
                      completing the Website's registration process. You are
                      responsible for maintaining the confidentiality of the
                      password and account, and are fully responsible for all
                      activities that occur under your password or account. You
                      agree to (a) immediately notify the Company of any
                      unauthorized use of your password or account or any other
                      breach of security, and (b) ensure that you exit from your
                      account at the end of each session. Company cannot and
                      will not be liable for any loss or damage arising from
                      your failure to comply with this Section 2.
                    </p>
                  </li>
                  <li>
                    <b>Services Offered:</b>
                    <br />
                    <p>
                      Company provides this Internet-based service through the
                      Web Site (all such services, collectively, the "Service")
                      which enables users to purchase Company’s products and
                      other allied accessories. The Products can be purchased
                      through the Website through various methods of payments
                      offered. The sale/purchase of Products shall be
                      additionally governed by specific policies of sale, like
                      cancellation policy, return policy, etc. and all of which
                      are incorporated here by reference. In addition, these
                      terms and policies may be further supplemented by Product
                      specific conditions, which may be displayed on the webpage
                      of that Product.
                    </p>
                  </li>
                  <li>
                    <b>Privacy Policy:</b>
                    <br />
                    <p>
                      The User hereby consents, expresses and agrees that he has
                      read and fully understands the Privacy Policy of Company.
                      The user further consents that the terms and contents of
                      such Privacy Policy are acceptable to him.
                    </p>
                  </li>
                  <li>
                    <b>Limited User:</b>
                    <br />
                    <p>
                      The User agrees and undertakes not to reverse engineer,
                      modify copy, distribute, transmit, display, perform,
                      reproduce, publish, license, create derivative works from,
                      transfer, or sell any information or software obtained
                      from the Website. Limited reproduction and copying of the
                      content of the Website is permitted provided that
                      Company's name is stated as the source and prior written
                      permission of Company is sought. For the removal of doubt,
                      it is clarified that unlimited or wholesale reproduction,
                      copying of the content for commercial or non-commercial
                      purposes and unwarranted modification of data and
                      information within the content of the Website is not
                      permitted.
                    </p>
                  </li>
                  <li>
                    <b>User Conduct and Rules:</b>
                    <br />
                    <p>
                      You agree and undertake to use the Website and the Service
                      only to post and upload messages and material that are
                      proper. By way of example, and not as a limitation, you
                      agree and undertake that when using a Service, you will
                      not:
                      <br />
                      (a) defame, abuse, harass, stalk, threaten or otherwise
                      violate the legal rights of others;
                      <br />
                      (b) publish, post, upload, distribute or disseminate any
                      inappropriate, profane, defamatory, infringing, obscene,
                      indecent or unlawful topic, name, material or information;
                      <br />
                      (c) upload files that contain software or other material
                      protected by intellectual property laws unless you own or
                      control the rights thereto or have received all necessary
                      consents; you own or control the rights thereto or have
                      received all necessary consents;
                      <br />
                      (d) upload or distribute files that contain viruses,
                      corrupted files, or any other similar software or programs
                      that may damage the operation of the Website or another's
                      computer;
                      <br />
                      (e) conduct or forward surveys, contests, pyramid schemes
                      or chain letters;
                      <br />
                      (f) download any file posted by another user of a Service
                      that you know, or reasonably should know, cannot be
                      legally distributed in such manner;
                      <br />
                      (g) falsify or delete any author attributions, legal or
                      other proper notices or proprietary designations or labels
                      of the origin or source of software or other material
                      contained in a file that is uploaded;
                      <br />
                      (h) violate any code of conduct or other guidelines, which
                      may be applicable for or to any particular Service;
                      <br />
                      (i) violate any applicable laws or regulations for the
                      time being in force in or outside India; and
                      <br />
                      (j) violate, abuse, unethically manipulate or exploit, any
                      of the terms and conditions of this Agreement or any other
                      terms and conditions for the use of the Website contained
                      elsewhere.
                    </p>
                  </li>
                  <li>
                    <b>User Warranty and Representation:</b>
                    <br />
                    <p>
                      The user guarantees, warrants, and certifies that you are
                      the owner of the content which you submit or otherwise
                      authorised to use the content and that the content does
                      not infringe upon the property rights, intellectual
                      property rights or other rights of others. You further
                      warrant that to your knowledge, no action, suit,
                      proceeding, or investigation has been instituted or
                      threatened relating to any content, including trademark,
                      trade name service mark, and copyright formerly or
                      currently used by you in connection with the Services
                      rendered by Company.
                    </p>
                  </li>
                  <li>
                    <b>Exactness Not Guaranteed:</b>
                    <br />
                    <p>
                      Company hereby disclaims any guarantees of exactness as to
                      the performance of the final Product as ordered by the
                      user. The quality of any products, Services, information,
                      or other material purchased or obtained by you through the
                      Website may not meet your expectations.
                    </p>
                  </li>
                  <li>
                    <b>Intellectual Property Rights::</b>
                    <br />
                    <p>
                      a) Unless otherwise indicated or anything contained to the
                      contrary or any proprietary material owned by a third
                      party and so expressly mentioned, Company owns all
                      Intellectual Property Rights to and into the Website,
                      including, without limitation, any and all rights, title
                      and interest in and to copyright, related rights, patents,
                      utility models, trademarks, trade names, service marks,
                      designs, know-how, trade secrets and inventions (whether
                      patentable or not), goodwill, source code, meta tags,
                      databases, text, content, graphics, icons, and hyperlinks.
                      You acknowledge and agree that you shall not use,
                      reproduce or distribute any content from the Website
                      belonging to Company without obtaining authorization from
                      Company.
                      <br />
                      b) Notwithstanding the foregoing, it is expressly
                      clarified that you will retain ownership and shall solely
                      be responsible for any content that you provide or upload
                      when using any Service, including any text, data,
                      information, images, photographs, music, sound, video or
                      any other material which you may upload, transmit or store
                      when making use of our various Service. However, with
                      regard to the product customization Service (as against
                      other Services like blogs and forums) you expressly agree
                      that by uploading and posting content on to the Website
                      for public viewing and reproduction/use of your content by
                      third party users, you accept the User whereby you grant a
                      non-exclusive license for the use of the same.
                    </p>
                  </li>
                  <li>
                    <b>Links to Third Party Sites:</b>
                    <br />
                    <p>
                      The Website may contain links to other websites ("Linked
                      Sites"). The Linked Sites are not under the control of
                      Company or the Website and Company is not responsible for
                      the contents of any Linked Site, including without
                      limitation any link contained in a Linked Site, or any
                      changes or updates to a Linked Site. Company is not
                      responsible for any form of transmission, whatsoever,
                      received by you from any Linked Site. Company is providing
                      these links to you only as a convenience, and the
                      inclusion of any link does not imply endorsement by
                      Company or the Website of the Linked Sites or any
                      association with its operators or owners including the
                      legal heirs or assigns thereof. The users are requested to
                      verify the accuracy of all information on their own before
                      undertaking any reliance on such information.
                    </p>
                  </li>
                  <li>
                    <b>Disclaimer Of Warranties/Limitation Of Liability:</b>
                    <br />
                    <p>
                      Company has endeavoured to ensure that all the information
                      on the Website is correct, but Company neither warrants
                      nor makes any representations regarding the quality,
                      accuracy or completeness of any data, information, product
                      or Service. In no event shall Company be liable for any
                      direct, indirect, punitive, incidental, special,
                      consequential damages or any other damages resulting from:
                      <br />
                      (a) the use or the inability to use the Services or
                      Products <br />
                      (b) unauthorized access to or alteration of the user's
                      transmissions or data
                      <br />
                      (c) any other matter relating to the services; including,
                      without limitation, damages for loss of use, data or
                      profits, arising out of or in any way connected with the
                      use or performance of the Website or Service. Neither
                      shall Company be responsible for the delay or inability to
                      use the Website or related services, the provision of or
                      failure to provide Services, or for any information,
                      software, products, services and related graphics obtained
                      through the Website, or otherwise arising out of the use
                      of the website, whether based on contract, tort,
                      negligence, strict liability or otherwise. Further,
                      Company shall not be held responsible for non-availability
                      of the Website during periodic maintenance operations or
                      any unplanned suspension of access to the website that may
                      occur due to technical reasons or for any reason beyond
                      Company’s control. The user understands and agrees that
                      any material and/or data downloaded or otherwise obtained
                      through the Website is done entirely at their own
                      discretion and risk and they will be solely responsible
                      for any damage to their computer systems or loss of data
                      that results from the download of such material and/or
                      data.
                    </p>
                  </li>
                  <li>
                    <b>Indemnification:</b>
                    <br />
                    <p>
                      You agree to indemnify, defend and hold harmless Company
                      from and against any and all losses, liabilities, claims,
                      damages, costs and expenses (including legal fees and
                      disbursements in connection therewith and interest
                      chargeable thereon) asserted against or incurred by
                      Company that arise out of, result from, or may be payable
                      by virtue of, any breach or non-performance of any
                      representation, warranty, covenant or agreement made or
                      obligation to be performed by you pursuant to these Terms.
                    </p>
                  </li>
                  <li>
                    <b>Pricing:</b>
                    <br />
                    <p>
                      Prices for products are described on our Website and are
                      incorporated into these Terms by reference. All prices are
                      in Indian rupees. Prices, products and Services may change
                      at Company’s discretion.
                    </p>
                  </li>
                  <li>
                    <b>Shipping:</b>
                    <br />
                    <p>
                      Title and risk of loss for all products ordered by you
                      shall pass on to you upon Company’s shipment to the
                      shipping carrier.
                    </p>
                  </li>
                  <li>
                    <b>Termination:</b>
                    <br />
                    <p>
                      a) Company may suspend or terminate your use of the
                      Website or any Service if it believes, in its sole and
                      absolute discretion that you have breached, violated,
                      abused, or unethically manipulated or exploited any term
                      of these Terms or anyway otherwise acted unethically.
                      <br />
                      b) Notwithstanding Section 15.a above, these Terms will
                      survive indefinitely unless and until Company chooses to
                      terminate them.
                      <br />
                      c) If you or Company terminates your use of the Website or
                      any Service, Company may delete any content or other
                      materials relating to your use of the Service and Company
                      will have no liability to you or any third party for doing
                      so.
                      <br />
                      d) You shall be liable to pay for any Service or product
                      that you have already ordered till the time of Termination
                      by either party whatsoever. Further, you shall be entitled
                      to your royalty payments as per the User License Agreement
                      that has or is legally deemed accrued to you.
                    </p>
                  </li>
                  <li>
                    <b>Refunds/ Cancellations:</b>
                    <br />
                    <p>
                      No refunds shall be offered, where a Service is deemed to
                      have begun and is, for all intents and purposes, underway.
                      Any monies that have been paid to us which constitute
                      payment in respect of the provision of unused Services
                      shall be refunded. Once goods/ services have been ordered,
                      the same shall not be cancellable except at exceptional
                      circumstances which shall be at the sole discretion of the
                      company.
                    </p>
                  </li>
                  <li>
                    <b>Governing Law:</b>
                    <br />
                    <p>
                      These terms shall be governed by and constructed in
                      accordance with the laws of India without reference to
                      conflict of laws principles and disputes arising in
                      relation hereto shall be subject to the exclusive
                      jurisdiction of the courts at Bangalore.
                    </p>
                  </li>
                  <li>
                    <b>Severability:</b>
                    <br />
                    <p>
                      If any provision of the Terms is determined to be invalid
                      or unenforceable in whole or in part, such invalidity or
                      unenforceability shall attach only to such provision or
                      part of such provision and the remaining part of such
                      provision and all other provisions of these Terms shall
                      continue to be in full force and effect.
                      <br />
                      <br />
                      These terms and conditions form part of the Agreement
                      between the Client and ourselves. Your accessing of this
                      website and/or undertaking of a booking or Agreement
                      indicates your understanding, agreement to and acceptance,
                      of the Disclaimer Notice and the full Terms and Conditions
                      contained herein.
                    </p>
                  </li>
                </ol>
              </div>
              <div className="modal-footer">
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
        {/* modal ends */}

        {/* modal starts */}
        <div
          className="modal fade "
          id="terms"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="FAQ">
                  Terms of Service
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
              <div className="modal-body modal_body"></div>
              <div className="modal-footer">
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
        {/* modal ends */}

        {/* modal starts */}
        <div
          className="modal fade "
          id="sales"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="FAQ">
                  Privacy Policy
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
              <div className="modal-body modal_body">
                <div>
                  <p>
                    <b>GENERAL PRINCIPLES</b>
                    <br />
                    Protecting your privacy is very important to us. We have
                    accordingly developed this Privacy Policy to protect your
                    personal information and keep it confidential. We endeavour
                    to comply with laws of other countries but cannot and do not
                    warrant that we do. We do everything we reasonably can to
                    protect your rights of privacy on systems and the Website
                    controlled by us, but we are not liable for any unauthorised
                    or unlawful disclosures of your personal and confidential
                    information made by third parties who are not subject to our
                    control, for example advertisers and websites that have
                    links to our Website. You should take note that the
                    information and privacy practices of our business partners,
                    advertisers, sponsors or other sites to which we provide
                    hyperlinks, may be different from ours. Our privacy policy
                    is subject to change at any time without notice. To make
                    sure you are aware of any changes, please review this policy
                    periodically.
                  </p>
                  <p>
                    <b>
                      We categorise information about you (collectively referred
                      to as "Personal Information") as follows:
                    </b>
                    <br />
                    (a) Profiling Information: Information which you provide
                    when you register for a Service, which may include some or
                    all of the following: - Information about your personal
                    identity such as gender, marital status, age, preferences,
                    likes and dislikes etc.; - Your financial information such
                    as your banking details and any information relating to your
                    income and lifestyle levels; and - Your contact details such
                    as your physical addresses, postal addresses, telephone and
                    fax numbers and the like. - In the case of Facebook aligned
                    services (if so opted by you), publicly available
                    information of your friends, their likes and dislikes, etc.
                    <br />
                    (b) Payment and Account Information: Your account history
                    with us including (without limitation) all billing
                    information and communications, payment history etc. We
                    maintain this on secure servers.
                    <br />
                    (c) Service Usage: Information about your navigation using
                    our Services, for example the URLs of websites, which you
                    visit and from which you request downloads.
                    <br />
                    (d) Log information: Information such as your web request,
                    IP address, browser type, browser language, date and time of
                    request.
                    <br />
                    (e) Transactional Information: Transactional history (other
                    than banking details) about your e-commerce activities.
                    <br />
                    (f) Correspondence Information: Content, information about
                    your correspondents, and the destination/origin of
                    communications between you and any other person using our
                    Services, which include email communications, blog, chat
                    room and discussion board communications, instant message
                    communications, experts forum communications, faxmail
                    communications, membership of mailing lists etc.
                    <br />
                    (g) User IDs: Your usernames, passwords, email addresses and
                    other security-related information used by you in relation
                    to our Services.
                    <br />
                    (h) Stored Information: Data either created by you or by a
                    third party and which you wish to store on our servers such
                    as image files, documents etc. We only collect your Personal
                    Information to conduct our business and to enable us to
                    deliver and improve our Services.
                    <br /> <br />
                    We do not for any reason whatsoever sell your Personal
                    Information to any third party or otherwise trade on it. We
                    will only disclose your Personal Information in accordance
                    with this Privacy Policy. If we want to use it for any other
                    purpose, we will obtain your prior written consent. If you
                    decline to submit personal information to us, then we will
                    unfortunately not be in a position to provide the Services
                    to you. Any of your information which you provide when you
                    use certain Services and are to an open, public environment
                    or forum including (without limitation) any blog, community
                    or discussion board, is not confidential, does not
                    constitute Personal Information, and is not subject to
                    protection under Privacy Policy. Since such public
                    environments are accessible by third parties, it is possible
                    that third parties may collect and collate and use such
                    information for their own purposes. You should accordingly
                    be careful when deciding to share any of your Personal
                    Information in such public environments. Information, which
                    is disclosed publicly, is also shared with our affiliates,
                    third party service providers, sponsors of competitions etc.
                    unless expressly stated otherwise. We are not liable to you
                    or any third party for any damages that you or any third
                    party may suffer howsoever arising from your disclosure of
                    Personal Information in any public environment. You
                    accordingly disclose information in a public environment at
                    your own risk.RIGHT TO COLLECTBy accepting the Terms of
                    Service you agree that we may collect and store your
                    Personal Information as long as you use our Services subject
                    to the limitations
                  </p>
                  <p>
                    <b>
                      We collect your Profiling and Account Information for the
                      following reasons:
                    </b>
                    <br />
                    (a) We need your identity details, contact details, banking
                    information and account history to manage our relationship
                    with you and provide Services to you. We may use this
                    information for suggesting products and promotional offers
                    and schemes. We will only disclose this information as
                    provided below.
                    <br /> (b) We use certain of your information in an
                    aggregated form to compile statistical and demographical
                    profiles for our business and marketing activities. We may
                    disclose such information about you, provided that the
                    information is in an aggregated form that is not capable of
                    being used or interpreted in such a manner as to identify
                    you.
                  </p>
                  <p>
                    <b>
                      We collect and store your Service Usage and Transactional
                      Information to:
                    </b>
                    <br />
                    (a) determine and verify the Service Charges payable by you
                    and to administer our relationship with you.
                    <br />
                    (b) comply with any statutory or regulatory requirement.
                    <br />
                    (c) compile statistical and demographical profiles about you
                    for our business and marketing activities and to customise
                    our Services to you. While we are entitled to use such
                    information about you for our own internal business purposes
                    without limitation, we will only disclose it in an
                    aggregated form which is not capable of being used or
                    interpreted in such a manner as to identify you; and
                    <br />
                    (d) monitor your use of our Services for the purposes of
                    ensuring compliance with our Terms of Service.
                  </p>
                  <p>
                    <b>
                      We collect and store your Correspondence Information and
                      Personal Identifiers to:
                    </b>
                    <br />
                    (a) comply with our obligations under law; and
                    <br />
                    (b) monitor your use of our Services in order to ensure your
                    compliance with our Terms of Service. Any Personal
                    Information which we collect and which we may use in an
                    aggregated format ensuring you are not individually
                    identified is our property. We may use it, in our sole
                    discretion and without any compensation to you, for any
                    legitimate purpose including (without limitation) the
                    commercial sale thereof to third parties. Sometime we use
                    "cookies" so that we can provide you with more customised
                    information when you return to our website. "Cookies" are
                    used to store user preferences and to track user trends, so
                    as to enhance your interactive experience and generally
                    improve our Services to you. You can set your browser to
                    notify you when you are sent a "cookie", giving you the
                    chance to decide whether or not to accept it. If you do
                    accept a "cookie", you thereby agree to our use of any
                    Personal Information collected by us using that Cookie. You
                    may update your Profiling Information at any time on the
                    website. You acknowledge and agree that in the interests of
                    improving personalisation and Service efficiency, we may,
                    under controlled and secure circumstances, share your
                    Personal Information with our affiliates (an entity which is
                    our subsidiary or holding company or a subsidiary of our
                    holding company or an entity which controls, is controlled
                    by or is under common control with us).
                  </p>
                  <p>
                    <b>GENERAL EXCEPTIONS</b>
                    <br />
                    If we are required to intercept, disclose, monitor and/or
                    store your Personal Information:
                    <br />
                    (a) by law
                    <br /> (b) to conduct our business
                    <br /> (c) to secure our systems
                    <br /> (d) to enforce our own rights, we will do so in the
                    manner as prescribed by law. Such interception, disclosure,
                    monitoring and storage may take place without your
                    knowledge. In that case, we will not be liable to you or any
                    third party for any damages howsoever arising from such
                    interception, disclosure, monitoring and storage. In order
                    to ensure that all our Users comply with the Terms of
                    Service, we may monitor your Personal Information to the
                    extent that this may be required to determine compliance
                    and/or to identify instances of non-compliance. To ensure
                    that the security and integrity of our Services are
                    safeguarded, we may monitor your Personal Information. This
                    monitoring may include (without limitation) the filtering of
                    incoming and outgoing electronic data messages to identify,
                    limit and/or prevent the transmission of spam, viruses
                    and/or unlawful, defamatory, obscene or otherwise
                    undesirable material or content. We may under certain
                    circumstances procure an element of the Services from a
                    third party service provider. To the extent that it may be
                    necessary, and solely for the purposes of providing the
                    Service to you, you agree that we may disclose to such third
                    party any of your Personal Information that may be necessary
                    for the procurement of services from the third party.
                  </p>
                  <p>
                    <b>Refunds/ Cancellations</b>
                    <br />
                    No refunds shall be offered, where a Service is deemed to
                    have begun and is, for all intents and purposes, underway.
                    Any monies that have been paid to us which constitute
                    payment in respect of the provision of unused Services shall
                    be refunded. Once goods/ services have been ordered, the
                    same shall not be cancellable except at exceptional
                    circumstances which shall be at the sole discretion of the
                    company.
                  </p>
                </div>
              </div>
              <div className="modal-footer">
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
        {/* modal ends */}
      </div>
    );
  }
}

export default connect(null, { sendEmail })(Footer);
