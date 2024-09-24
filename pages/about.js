import Link from "next/link";
import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
import AboutUs from "../src/components/AboutUs";
import WhyUs from "../src/components/WhyUs";
import { getMetadata } from "./api/getMetadata";
import Head from "next/head";

const About = () => {
  const [toggle, setToggle] = useState(1);
  const page = "about"; // Set the page name here
  const { title, description } = getMetadata(page);
  return (
    <Layouts footer={2}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <PageBanner title={"About"} />
      <AboutUs />
      {/* <!--====== About Section End ======--> */}

      <div className="wcu-with-doctors">
        {/* <!--====== Why Choose Section Start ======--> */}
        <WhyUs />
        {/* <!--====== Why Choose Section End ======--> */}

        {/* <!--====== Doctor Section Start ======--> */}
        {/* <section className="doctors-section bg-color-grey polygon-pattern-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6">
                <div className="section-heading text-center mb-40">
                  <span className="tagline">Professional Team</span>
                  <h2 className="title">Meet Our Experience Team Members</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center doctors-loop">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="doctor-box-three mt-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="doctor-photo">
                    <img src="assets/img/doctors/18.jpg" alt="Image" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                      <Link href="/doctor-details">
                        <a>Allan K. Simons</a>
                      </Link>
                    </h5>
                    <span className="specialty">Dental Specialist</span>
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                    <span className="plus-icon">
                      <i className="far fa-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="doctor-box-three mt-30 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="doctor-photo">
                    <img src="assets/img/doctors/19.jpg" alt="Image" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                      <Link href="/doctor-details">
                        <a>Marcus K. Staton</a>
                      </Link>
                    </h5>
                    <span className="specialty">Neurology</span>
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                    <span className="plus-icon">
                      <i className="far fa-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="doctor-box-three mt-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="doctor-photo">
                    <img src="assets/img/doctors/20.jpg" alt="Image" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                      <Link href="/doctor-details">
                        <a>Travis A. Costillo</a>
                      </Link>
                    </h5>
                    <span className="specialty">Orthopedics</span>
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                    <span className="plus-icon">
                      <i className="far fa-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="doctor-box-three mt-30 wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="doctor-photo">
                    <img src="assets/img/doctors/21.jpg" alt="Image" />
                  </div>
                  <div className="doctor-information">
                    <h5 className="name">
                      <Link href="/doctor-details">
                        <a>M.Calhoun</a>
                      </Link>
                    </h5>
                    <span className="specialty">Cardiology</span>
                    <ul className="social-links">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                    <span className="plus-icon">
                      <i className="far fa-plus"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <!--====== Doctor Section End ======--> */}
      </div>

      {/* <!--====== FAQ Section Start ======--> */}
      <section className="faq-section section-gap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="faq-image text-center text-lg-left mb-md-50">
                <img src="assets/img/section-img/faq-image.png" alt="Image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-9 col-sm-11">
              <div className="faq-content pl-xl-5">
                <div className="section-heading mb-30">
                  <span className="tagline">
                    Q&A related to ENT and rhinoplasty:
                  </span>
                  <h2 className="title">
                    Why Have a Rhinoplasty Performed by an ENT Specialist
                  </h2>
                </div>
                <p>
                  Rhinoplasty is often performed by general plastic surgeons,
                  but discerning patients prefer to work with a trained ENT
                  specialist with expertise in facial cosmetic surgery for this
                  intricate functional and aesthetic nose reshaping procedure.
                </p>
                <Accordion
                  defaultActiveKey="collapseOne"
                  className="accordion-style-two mt-30"
                >
                  <div
                    className={
                      toggle === 1
                        ? "accordion-item active-accordion"
                        : "accordion-item"
                    }
                  >
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapseOne"
                        data-toggle="collapse"
                        onClick={() => setToggle(toggle === 1 ? 0 : 1)}
                      >
                        <span>Who is ENT specialist?</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapseOne">
                      <div className="accordion-content">
                        <p>
                          An ENT specialist or otolaryngologist is a medical
                          professional specializing in the diagnosis and
                          treatment of conditions related to the ears, nose, and
                          throat (ENT). These experts are trained to perform
                          complex medical and surgical procedures of the neck
                          and head structures, including nose surgery.
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div
                    className={
                      toggle === 2
                        ? "accordion-item active-accordion"
                        : "accordion-item"
                    }
                  >
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapseTwo"
                        data-toggle="collapse"
                        onClick={() => setToggle(toggle === 2 ? 0 : 2)}
                      >
                        <span>Who is for rhinoplasty?</span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapseTwo">
                      <div className="accordion-content">
                        <p>
                          Ideal candidates are individuals seeking to improve
                          the appearance or function of their nose due to
                          injury, birth defects, or breathing problems.
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                  <div
                    className={
                      toggle === 3
                        ? "accordion-item active-accordion"
                        : "accordion-item"
                    }
                  >
                    <div className="accordion-header">
                      <Accordion.Toggle
                        as="h6"
                        eventKey="collapseThree"
                        data-toggle="collapse"
                        onClick={() => setToggle(toggle === 3 ? 0 : 3)}
                      >
                        <span>
                          How does ensure a smooth recovery after rhinoplasty?
                        </span>
                      </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="collapseThree">
                      <div className="accordion-content">
                        <p>
                          Dr. Haitam Akaash provides detailed post-operative
                          care instructions and follows up closely with patients
                          to monitor healing, minimize discomfort, and ensure
                          successful outcomes..
                        </p>
                      </div>
                    </Accordion.Collapse>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default About;
