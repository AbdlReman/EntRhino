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
                        src="assets/img/circle-image-gallery/01.png"
                        alt=""
                      />
                    </div>
                    <div
                      className="single-img wow fadeInRight"
                      data-wow-delay="0.4s"
                    >
                      <img
                        src="assets/img/circle-image-gallery/04.png"
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
                        src="assets/img/circle-image-gallery/03.png"
                        alt=""
                      />
                    </div>
                    <div
                      className="single-img wow fadeInRight"
                      data-wow-delay="0.6s"
                    >
                      <img
                        src="assets/img/circle-image-gallery/02.png"
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
                  {/* <h2 className="title">
                    Comprehensive ENT & Rhinoplasty Care
                  </h2> */}
                  <p>
                    Rhinoplasty Performed by an ENT Specialist & Facial Plastic
                    Surgeon – Dr. Haitham Akaash
                  </p>
                </div>
                <p>
                  Dr. Haitham Akaash Renowned Expert in Rhinoplasty & Advanced
                  ENT Surgery Assistant Professor of Otolaryngology - Head &
                  Neck Surgery Founder of ENT & Rhinoplasty Hub, Rawalpindi
                  (Pakistan)Dr. Haitham Akaash is a distinguished ENT surgeon
                  with a wealth of expertise, having performed hundreds of
                  successful rhinoplasties and microscopic thyroid surgeries. As
                  an Assistant Professor at Holy Family Hospital, Rawalpindi,
                  and the founder of ENT & Rhinoplasty Hub, he is a leading
                  figure in the field of advanced ENT and facial reconstructive
                  surgery.At ENT & Rhinoplasty Hub, Dr. Akaash provides
                  world-class surgical care, specializing in cosmetic and
                  functional rhinoplasty, where his ability to enhance both
                  appearance and nasal function has made him the go-to surgeon
                  for patients seeking transformative results. His expertise,
                  gained from performing hundreds of procedures, ensures that
                  each patient receives the most natural and aesthetically
                  pleasing outcomes, all while prioritizing safety and
                  functionality.Beyond rhinoplasty, Dr. Akaash is also a
                  renowned expert in microscopic thyroid surgery, offering
                  minimally invasive solutions that lead to faster recovery and
                  superior results.
                </p>
                {/* <Link href="/about">
                  <a className="template-btn mt-40">
                    Learn More <i className="far fa-plus" />
                  </a>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
