import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";
import Subscription from "../IndexPage/Subscription";
import CartLink from "../Cart/CartLink";

export default class AboutUs extends Component {
  componentDidMount() {
    document.title = "MultiplexUrbanGarden - The URBAN GARDENING STORE";
  }
  render() {
    return (
      <div>
        <Header />
        <div className="mt-4">
          <CartLink />
          <main>
            <section
              className="introBannerHolder d-flex w-100 bgCover"
              style={{
                backgroundImage: "url(./images/Urban_Images/b-bg7.jpg)",
                // marginTop: " 2rem",
                backgroundSize: "revert",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-12 pt-lg-5 pt-md-5 pt-sm-10 pt-2 text-center">
                    <h1 className="headingIV fwEbold playfair mb-4">
                      About Us
                    </h1>
                    <div className="d-flex justify-content-center aboutContent">
                      <p> An Organic Way for </p>
                      <div className="aboutWrapper">
                        <div className="words">
                          <span>Terrace</span>
                          <span>Balcony</span>
                          <span>Kitchen</span>
                          <span className="mx-1">Landscape</span>
                        </div>
                      </div>{" "}
                      <span>Gardening. </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="
            abtSecHolder
            container
            mt-5
            pt-lg-4
            pt-2
            pb-5
          "
            >
              <div className="row">
                <div className="col-12 col-lg-12 pt-xl-12 pt-lg-8">
                  <h2 className="playfair fwEbold position-relative mb-7 pb-3">
                    <strong className="d-block">We Are Deep-Rooted</strong>
                  </h2>
                  <p className="pr-xl-16 pr-lg-10 mb-lg-0 mb-3 mt-3">
                    <b>Dr. G P Shetty,</b> a visionary agricultural scientist,
                    started Multiplex products in 1974 to address the
                    deficiencies and improve plant/soil health. Novel products
                    are added to boost soil fertility for better quality
                    produce.
                    <br />
                    <br />
                    The need to move towards the organic era was successful with
                    the start of Multiplex Biotech Pvt Ltd to bring in exclusive
                    products. Multiplex products have been well taken in the
                    farmer community across PAN India & overseas.
                    <br />
                    <br />
                    With a growing concern of inadequate scientific agricultural
                    practices in urban communities, Multiplex extended its
                    facility to start <b>
                      MULTIPLEX URBAN GREEN INDIA PVT LTD
                    </b>{" "}
                    to meet the need for organic food and concern for the health
                    of urbanities, Multiplex Urban Green has pioneered a novel
                    concept of growing vegetables in the terrace/balcony or back
                    yard.
                  </p>
                </div>
                {/* <div className="col-12 col-lg-6">
                  <img
                    src="http://placehold.it/570x440"
                    alt="image description"
                    className="img-fluid"
                  />
                </div> */}
                <div
                  className="col-12 col-lg-12 pt-xl-12 pt-lg-8 mt-4"
                  id="missionVision"
                >
                  <h2 className="playfair fwEbold position-relative mb-7 pb-3">
                    <strong className="d-block">Mission & Vision</strong>
                  </h2>
                  <p className="pr-xl-16 pr-lg-10 mb-lg-0 mb-3 mt-3">
                    Create joy of nurturing vegetables and flowers in urban
                    homes by providing organic & environmental friendly products
                    & services. Actively engage & support the cause of{" "}
                    <b className="text-uppercase">"Go Green Grow Green"</b>{" "}
                    initiative.
                  </p>
                </div>
              </div>
            </section>

            <section
              className="
            counterSec
            container
            pt-md-3
            pt-2
            pb-10
            mb-2 mb-md-4
          "
            >
              <div className="row">
                <div className="col-10 offset-lg-3 offset-1">
                  {/* progressCounter  */}
                  <ul
                    className="
                  progressCounter
                  list-unstyled
                  mb-2
                  d-flex
                  flex-wrap
                  text-capitalize text-center
                  mx-auto
                  w-100
                "
                  >
                    <li className="mb-md-0 mb-4">
                      <strong
                        className="d-block fwEbold counter mb-2"
                        style={{ color: "#94c657" }}
                      >
                        1000+
                      </strong>
                      <strong className="d-block text-uppercase txtWrap">
                        Happy Customers
                      </strong>
                    </li>
                    <li className="mb-md-0 mb-4">
                      <strong
                        className="d-block fwEbold counter mb-2"
                        style={{ color: "#94c657" }}
                      >
                        200+
                      </strong>
                      <strong className="d-block text-uppercase txtWrap">
                        completed projects
                      </strong>
                    </li>
                    <li className="mb-md-0 mb-4">
                      <strong
                        className="d-block fwEbold counter mb-2"
                        style={{ color: "#94c657" }}
                      >
                        10+
                      </strong>
                      <strong className="d-block text-uppercase txtWrap">
                        Garden Experts
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            {/* <section className="introSec bg-lightGray p-3 p-md-5">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-6 mb-lg-0 mb-6">
                    <img
                      src="http://placehold.it/490x505"
                      alt="image description"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                    <div id="accordion" className="accordionList pt-lg-12">
                      <div className="card mb-2">
                        <div className="card-header px-xl-3" id="headingOne">
                          <h5 className="mb-0">
                            <button
                              className="
                            btn btn-link
                            fwEbold
                            text-uppercase text-left
                            w-100
                            p-0
                          "
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              connecting people
                              <i className="fas fa-sort-down float-right"></i>
                            </button>
                          </h5>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="card-body px-xl-3 py-0">
                            <p className="mb-3">
                              To succeed you must believe. When you believe, you
                              will succeed. Surround yourself with angels,
                              positive energy, beautiful people, beautiful
                              souls, clean heart, angel. Let me be clear, you
                              have to make it through the jungle to make it to
                              paradise, that’s the key, Lion! Lion!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-2">
                        <div className="card-header py-xl-3" id="headingTwo">
                          <h5 className="mb-0">
                            <button
                              className="
                            btn btn-link
                            fwEbold
                            text-uppercase text-left
                            w-100
                            collapsed
                            p-0
                          "
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              we build your dream
                              <i className="fas fa-sort-down float-right"></i>
                            </button>
                          </h5>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordion"
                        >
                          <div className="card-body px-xl-3 py-0">
                            <p className="mb-3">
                              To succeed you must believe. When you believe, you
                              will succeed. Surround yourself with angels,
                              positive energy, beautiful people, beautiful
                              souls, clean heart, angel. Let me be clear, you
                              have to make it through the jungle to make it to
                              paradise, that’s the key, Lion! Lion!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-2">
                        <div className="card-header py-xl-3" id="headingThree">
                          <h5 className="mb-0">
                            <button
                              className="
                            btn btn-link
                            fwEbold
                            text-uppercase text-left
                            w-100
                            collapsed
                            p-0
                          "
                              data-toggle="collapse"
                              data-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              nothing to fear
                              <i className="fas fa-sort-down float-right"></i>
                            </button>
                          </h5>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordion"
                        >
                          <div className="card-body px-xl-3 py-0">
                            <p className="mb-3">
                              To succeed you must believe. When you believe, you
                              will succeed. Surround yourself with angels,
                              positive energy, beautiful people, beautiful
                              souls, clean heart, angel. Let me be clear, you
                              have to make it through the jungle to make it to
                              paradise, that’s the key, Lion! Lion!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-2">
                        <div className="card-header py-xl-3" id="headingFour">
                          <h5 className="mb-0">
                            <button
                              className="
                            btn btn-link
                            fwEbold
                            text-uppercase text-left
                            w-100
                            collapsed
                            p-0
                          "
                              data-toggle="collapse"
                              data-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              make the world better
                              <i className="fas fa-sort-down float-right"></i>
                            </button>
                          </h5>
                        </div>
                        <div
                          id="collapseFour"
                          className="collapse"
                          aria-labelledby="headingFour"
                          data-parent="#accordion"
                        >
                          <div className="card-body px-xl-3 py-0">
                            <p className="mb-3">
                              To succeed you must believe. When you believe, you
                              will succeed. Surround yourself with angels,
                              positive energy, beautiful people, beautiful
                              souls, clean heart, angel. Let me be clear, you
                              have to make it through the jungle to make it to
                              paradise, that’s the key, Lion! Lion!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}

            {/* <section
              className="
            processStepSec
            container
            pt-5
            pb-0
          "
            >
              <div className="row">
                <header className="col-12 mainHeader mb-3 text-center">
                  <h1 className="headingIV playfair fwEblod mb-4">
                    Delivery Process
                  </h1>
                  <span className="headerBorder d-block mb-5">
                    <img
                      src="images/hbdr.png"
                      alt="Header Border"
                      className="img-fluid img-bdr"
                    />
                  </span>
                </header>
              </div>
              <div className="row">
                <div className="col-12 pl-xl-23 mb-lg-3 mb-10">
                  <div className="stepCol position-relative bg-lightGray py-0 px-3">
                    <strong
                      className="
                    mainTitle
                    text-uppercase
                    d-block
                    text-center
                    px-1 py-2
                  "
                    >
                      step 01
                    </strong>
                    <h2 className="headingV fwEblod text-uppercase mb-2">
                      Choose your products
                    </h2>
                    <p className="mb-2 pb-3">
                      There are many variations of passages of lorem ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour. Both betanin
                    </p>
                  </div>
                </div>
                <div className="col-12 pr-xl-23 mb-lg-3 mb-10">
                  <div
                    className="
                  stepCol
                  rightArrow
                  position-relative bg-lightGray py-0 px-3 float-right
                "
                  >
                    <strong
                      className="
                    mainTitle
                    text-uppercase
                    text-uppercase
                    d-block
                    text-center
                    px-1 py-2
                  "
                    >
                      step 02
                    </strong>
                    <h2 className="headingV fwEblod text-uppercase mb-2">
                      Connect nearest stored
                    </h2>
                    <p className="mb-2 pb-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <div className="col-12 pl-xl-23 mb-lg-3 mb-10">
                  <div className="stepCol position-relative bg-lightGray py-0 px-3">
                    <strong
                      className="
                    mainTitle
                    text-uppercase
                    d-block
                    text-center
                    px-1 py-2
                  "
                    >
                      step 03
                    </strong>
                    <h2 className="headingV fwEblod text-uppercase mb-2">
                      Choose your products
                    </h2>
                    <p className="mb-2 pb-3">
                      There are many variations of passages of lorem ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour. Both betanin
                    </p>
                  </div>
                </div>
                <div className="col-12 pr-xl-23 mb-lg-3 mb-10">
                  <div
                    className="
                  stepCol
                  rightArrow
                  position-relative bg-lightGray py-0 px-3 float-right
                "
                  >
                    <strong
                      className="
                    mainTitle
                    text-uppercase
                    text-uppercase
                    d-block
                    text-center
                    px-1 py-2
                  "
                    >
                      step 04
                    </strong>
                    <h2 className="headingV fwEblod text-uppercase mb-2">
                      Connect nearest stored
                    </h2>
                    <p className="mb-2 pb-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
              </div>
            </section> */}

            <div className="col-12 mb-3 mt-5" id="certificates">
              <div className="row">
                <header className="col-12 mainHeader w-100 mb-9 text-center">
                  <h1 className="headingIV  playfair fwEblod mb-3">
                    Certificates
                  </h1>
                  <span className="headerBorder d-block mb-3">
                    <img
                      src="images/hbdr.png"
                      alt="Header Border"
                      className="img-fluid img-bdr"
                    />
                  </span>
                </header>
              </div>
              <div className="row">
                <div className="col-12 col-lg-3 offset-lg-3">
                  <article className="teamBlock overflow-hidden">
                    <span className="position-relative d-block text-center mb-2">
                      <img
                        src="images/CERTIFICATIONS/TUV.png"
                        className="img-fluid w-100"
                        alt="image description"
                      />
                    </span>
                  </article>
                </div>
                <div className="col-12 col-lg-3">
                  <article className="teamBlock overflow-hidden">
                    <span className=" position-relative d-block text-center mb-2">
                      <img
                        src="images/CERTIFICATIONS/iso.png"
                        className="img-fluid w-75"
                        alt="image description"
                      />
                    </span>
                  </article>
                </div>
              </div>
            </div>

            <section
              className="
            teamSec
            mt-md-5 mt-3
            pb-2
          "
              id="management"
            >
              <div className="container">
                <div className="row">
                  <header className="col-12 mainHeader mb-9 text-center">
                    <h1 className="headingIV playfair fwEblod mb-3">
                      Our Management
                    </h1>
                    <span className="headerBorder d-block mb-3">
                      <img
                        src="images/hbdr.png"
                        alt="Header Border"
                        className="img-fluid img-bdr"
                      />
                    </span>
                  </header>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-6 offset-md-1 col-lg-5 mb-lg-0 mb-6">
                    <article className="teamBlock overflow-hidden">
                      <span className=" position-relative d-block w-100 mb-2">
                        <div className="container">
                          {" "}
                          <img
                            src="images/msg.png"
                            className="img-fluid w-100 cursor-pointer"
                            alt="image description"
                            data-toggle="modal"
                            data-target="#mahesh"
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                      </span>
                      <div className="textDetail w-100 text-center">
                        <h3
                          data-toggle="modal"
                          data-target="#mahesh"
                          style={{ cursor: "pointer" }}
                        >
                          <span className="about_links">
                            Mr. MAHESH G SHETTY
                          </span>
                        </h3>

                        <blockquote
                          className=" text-center d-block mt-3"
                          id="print"
                        >
                          <q className="d-block fontStyle mb-3">
                            We aspire to serve urban farming <br />
                            community with trusted technology, quality <br />
                            products and services.
                          </q>
                          <cite className="d-block my-4"></cite>
                        </blockquote>
                        <strong className="text-capitalize d-block desination">
                          <b>- Managing Director</b>
                        </strong>
                      </div>
                    </article>
                  </div>
                  <div className="col-12  col-sm-6  col-lg-5 mb-lg-0 mb-6">
                    <article className="teamBlock overflow-hidden">
                      <span className=" position-relative d-block w-100 mb-2">
                        <div className="container">
                          <img
                            src="images/1.png"
                            className="img-fluid w-100"
                            width="370px"
                            alt="image description"
                            data-toggle="modal"
                            data-target="#nishcita"
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                      </span>
                      <div className="textDetail w-100 text-center">
                        <h3
                          data-toggle="modal"
                          data-target="#nishcita"
                          style={{ cursor: "pointer" }}
                        >
                          <span className="about_links">
                            Mrs. NISHCHITA M SHETTY
                          </span>
                        </h3>

                        <blockquote
                          className=" text-center d-block mt-3"
                          id="print"
                        >
                          <q className="d-block fontStyle mb-3">
                            We ship Organic products & healthy plants <br />{" "}
                            right to your doorstep. Each plant comes with simple
                            <br />
                            care instructions from our plant experts.
                          </q>
                          <cite className="d-block my-4"></cite>
                        </blockquote>
                        <strong className="text-capitalize d-block desination">
                          <b>- Director</b>
                        </strong>
                      </div>
                    </article>
                  </div>

                  <div className="col-12 mb-3 mt-5" id="ourTeam">
                    <div className="row">
                      <header className="col-12 mainHeader w-100 mb-9 text-center">
                        <h1 className="headingIV playfair fwEblod mb-3">
                          Meet Our Team
                        </h1>
                        <span className="headerBorder d-block mb-3">
                          <img
                            src="images/hbdr.png"
                            alt="Header Border"
                            className="img-fluid img-bdr"
                          />
                        </span>
                      </header>
                    </div>
                    <article className="teamBlock overflow-hidden">
                      <span className=" position-relative d-block w-100 mb-4">
                        <img
                          src="images/team.png"
                          className="img-fluid"
                          alt="image description"
                        />
                      </span>
                      <div className="w-100 text-center">
                        <h3>
                          <strong className="d-block fwEbold name mb-2">
                            We are a group of passionate horticulturists,
                            agriculturists, and gardeners who aim to provide
                            best practices to grow garden.
                          </strong>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </section>
            <div className="container mb-4" id="clients">
              <div className="row">
                <header className="col-12 mainHeader w-100  text-center">
                  <h1 className="headingIV playfair fwEblod mb-3">
                    Corporate Clients
                  </h1>
                  <span className="headerBorder d-block mb-0">
                    <img
                      src="images/hbdr.png"
                      alt="Header Border"
                      className="img-fluid img-bdr"
                    />
                  </span>
                </header>
              </div>
              <img
                src="images/clients.png"
                className="img-fluid"
                alt="image description"
              />
            </div>
            <div className="container-fluid px-xl-20 mb-5">
              {/* <!-- subscribeSecBlock --> */}
              <Subscription />
            </div>
            {/* <!-- footerHolder --> */}
          </main>
        </div>
        <Footer />

        {/* modal starts */}
        <div
          className="modal fade "
          id="mahesh"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="FAQ">
                  Mr. MAHESH G SHETTY
                </h3>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body ">
                <p>
                  Following his father’s footsteps, Mr. Mahesh G. Shetty
                  continued the vision that his father, Dr, G.P.Shetty had all
                  along. The journey upwards to succeed his father started while
                  very young. In the beginning, while he was still a college
                  student, he started off by assisting his father. This helped
                  him to understand the practical details of agriculture input
                  production and marketing. Today with over 25 years of
                  experience in the field of Agricultural Industry and under the
                  continued guidance of his father, Mr. Mahesh G.Shetty has
                  played an crucial key role in bringing up the facility into an
                  organization of status, deeply embedded in production and
                  marketing of micronutrients, especially fertilizers, organic
                  manure, Bio-Fertilizer and Bio-Pesticides, Bio-Activators &
                  Pesticides across India.
                  <br />
                  <br />
                  Recognizing his contribution, the “International Competence
                  Centre for Organic Agriculture (ICCOA)” has awarded Mr. Mahesh
                  G. Shetty the title of “Young Industrial Entrepreneur”. Also,
                  under his authority, the Multiplex Group has received the
                  Fertilizer Association of India (FAI) award for “Production,
                  Promotion, and Marketing of Bio Fertilizers”. Also, he has
                  been nominated as the President of “Indian micro fertilizers
                  manufacturers association”.
                </p>
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
          id="nishcita"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="FAQ">
                  Mrs. NISHCHITA M SHETTY
                </h3>
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
                <p>
                  Mrs. Nishchita M Shetty is an independent thinker and a
                  graduate of science. So, it came with no surprise that she
                  would start off a subsidiary under her name, namely M/s.
                  Multiplex Urban Green India Pvt. Ltd. With the constant
                  support she received from her husband and father-in-law, she
                  envisioned completing the long-cherished vision of Dr. G.P.
                  Shetty; that is, to provide chemical residue free food to the
                  urbanites. Her personal vision is to create joy in growing &
                  nurturing of vegetables and fruits and flowers in urban homes
                  by providing organic and eco-friendly products, kits &
                  services. She actively engages herself in the{" "}
                  <span className="text-uppercase">“GO GREEN, GROW GREEN”</span>{" "}
                  initiative.
                  <br />
                  <br />
                  She is also a director in all the subsidiaries of Multiplex
                  Group. Today she is an acclaimed entrepreneur in her own
                  right.
                </p>
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
