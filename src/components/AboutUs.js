import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      {" "}
      <section className="about-section section-gap">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="circle-image-gallery mb-md-50">
                <div className="row">
                  <div className="col-6 gallery-left">
                    <div
                      className="single-img wow fadeInLeft"
                      data-wow-delay="0.3s"
                    >
                      <img
                        src="assets/img/circle-image-gallery/01.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className="single-img wow fadeInRight"
                      data-wow-delay="0.4s"
                    >
                      <img
                        src="assets/img/circle-image-gallery/04.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-6 gallery-right">
                    <div
                      className="single-img wow fadeInLeft"
                      data-wow-delay="0.5s"
                    >
                      <img
                        className="animate-float-bob-y"
                        src="assets/img/circle-image-gallery/03.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      className="single-img wow fadeInRight"
                      data-wow-delay="0.6s"
                    >
                      <img
                        src="assets/img/circle-image-gallery/02.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="about-text">
                <div className="section-heading mb-35">
                  <span className="tagline">About US</span>
                  <h2 className="title">
                    Comprehensive ENT & Rhinoplasty Care
                  </h2>
                  <p>
                    Rhinoplasty Performed by an ENT Specialist & Facial Plastic
                    Surgeon – Dr. Haitam Akaash
                  </p>
                </div>
                <p>
                  we are committed to providing exceptional care. Our expert
                  team specializes in diagnosing and treating ear, nose, and
                  throat conditions, as well as offering advanced rhinoplasty
                  procedures. We use state-of-the-art technology and techniques
                  to ensure the best outcomes for our patients.
                </p>
                <Link href="/about">
                  <a className="template-btn mt-40">
                    Learn More <i className="far fa-plus" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
