import Link from "next/link";
import React from "react";

const WhyUs = () => {
  return (
    <>
      <section className="wcu-section section-gap-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="section-heading heading-white text-center mb-40">
                <span className="tagline">Why Choose Us</span>
                <h2 className="title">
                  Leading Expertise in ENT & Rhinoplasty
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="image-title-box mt-30">
                <h4 className="title">
                  <Link href="/service">
                    <a>Optimize Your ENT Health</a>
                  </Link>
                </h4>
                <div className="image">
                  <img src="assets/img/img-title-box/1.png" alt="Image" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="image-title-box mt-30">
                <h4 className="title">
                  <Link href="/service">
                    <a>Exceptional care and support</a>
                  </Link>
                </h4>
                <div className="image">
                  <img src="assets/img/img-title-box/2.png" alt="Image" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-9 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="image-title-box mt-30">
                <h4 className="title">
                  <Link href="/service">
                    <a>Achieve Your Desired Results</a>
                  </Link>
                </h4>
                <div className="image">
                  <img src="assets/img/img-title-box/3.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
