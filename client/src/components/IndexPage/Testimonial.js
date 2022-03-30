import React, { Component } from "react";

export default class Testimonial extends Component {
  render() {
    return (
      <div className="mt-md-1 mt-n5">
        <div className="row" id="testimonial">
          {/*  mainHeader  */}
          <header className="col-12 mainHeader mb-0 text-center">
            <h1 className="headingIV playfair fwEblod mb-1">Testimonials</h1>
            <span className="headerBorder d-block mb-1">
              <img
                src="images/hbdr.png"
                alt="Header Border"
                className="img-fluid img-bdr"
              />
            </span>
          </header>
        </div>
        <div className="container-fluid px-lg-2 testimonial_section mt-n2">
          <div className="carousel slide" data-ride="carousel" id="mycarousel">
            <ol className="carousel-indicators">
              <li data-target="#mycarousel" data-slide-to="0"></li>
              <li
                data-target="#mycarousel"
                data-slide-to="1"
                className="active"
              ></li>
              <li data-target="#mycarousel" data-slide-to="2"></li>
              <li data-target="#mycarousel" data-slide-to="3"></li>
              <li data-target="#mycarousel" data-slide-to="4"></li>
            </ol>
            <div className="container-fluid carouselImg">
              <div className="carousel-inner" style={{ fontSize: "1rem" }}>
                <div className="carousel-item  text-center">
                  <img src="images/avatar.svg" width="100px" />
                  <h3>Soumya N Rao </h3>
                  <p>
                    When your plain terrace is transformed into a beautiful
                    garden with sights of fresh veggies <br /> and colorful
                    flowers- your day is made!!Thank you Multiplex Urban Green
                    for efficiently setting up a beautiful garden- the veggies,
                    <br />
                    greens and the flowers fill our heart and sight with
                    happiness!! And it's definitely a great feeling to relish
                    home grown veggies. Cheers to the team - keep up the great
                    work going!!
                  </p>
                </div>
                <div className="carousel-item active text-center">
                  <img src="images/avatar.svg" width="100px" />
                  <h3>Asma Zahara</h3>
                  <p>
                    Hello, excellent job and excellent service, my plants has
                    started growing and <br /> flowers are blooming thank you
                    for excellent service
                  </p>
                </div>
                <div className="carousel-item  text-center">
                  <img src="images/avatar.svg" width="100px" />
                  <h3>Shashi</h3>
                  <p>
                    Ordered 10 bags of soil manure. The response from team was
                    amazing.
                  </p>
                </div>
                <div className="carousel-item  text-center">
                  <img src="images/avatar.svg" width="100px" />
                  <h3>Anusha</h3>
                  <p>
                    Good place to buy potting soil. Prithvi potting soil is of
                    good quality and affordable also. <br /> They also give
                    garden services. I strongly recommend their products
                  </p>
                </div>
                <div className="carousel-item  text-center">
                  <img src="images/avatar.svg" width="100px" />
                  <h3>Dileep </h3>
                  <p>
                    Excellent service with good customer care. <br /> They were
                    able to help with my plants and setup my own balcony garden.
                  </p>
                </div>
              </div>
            </div>
            <a
              href="#mycarousel"
              className="carousel-control-prev"
              data-slide="prev"
            >
              <span
                className=" fas fa-angle-left d-none d-lg-block"
                style={{ fontSize: "2rem", color: "#000" }}
              ></span>
            </a>
            <a
              href="#mycarousel"
              className="carousel-control-next"
              data-slide="next"
            >
              <span
                className=" fas fa-angle-right d-none d-lg-block"
                style={{ fontSize: "2rem", color: "#000" }}
              ></span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
