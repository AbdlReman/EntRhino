import React from "react";
import Newlatter from "../../components/Newlatter";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

const Footer2 = ({ noNewsletters }) => {
  return (
    <footer
      className={`template-footer template-footer-white ${
        noNewsletters ? "" : "have-cta-boxes-two"
      }`}
    >
      {!noNewsletters && (
        <div className="cta-boxes-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div
                  className="cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30"
                  style={{
                    backgroundImage:
                      "url(assets/img/cta-img/cta-boxed-2-1.png)",
                  }}
                >
                  <h2 className="cta-title">We're Ready To Help You</h2>
                  <a
                    href="/contact"
                    className="template-btn template-btn-bordered"
                  >
                    Contact us <i className="far fa-plus" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30"
                  style={{
                    backgroundImage:
                      "url(assets/img/cta-img/cta-boxed-2-2.png)",
                  }}
                >
                  <h2 className="cta-title">Make Appointment Online (24/7)</h2>
                  <a
                    href="/contact"
                    className="template-btn template-btn-bordered"
                  >
                    Appointment <i className="far fa-plus" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-8">
                <div
                  className="cta-boxed-two bg-color-secondary bg-size-cover blend-mode-multiply mb-30"
                  style={{
                    backgroundImage:
                      "url(assets/img/cta-img/cta-boxed-2-3.png)",
                  }}
                >
                  <h2 className="cta-title">Looking a Doctors For Treatment</h2>
                  <a
                    href="/contact"
                    className="template-btn template-btn-bordered"
                  >
                    Find Doctor <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="footer-inner bg-color-primary">
        <div className="container">
          <div className="footer-widgets">
            <div className="row">
              <div className="col-lg-3 col-md-8">
                <div className="widget text-widget">
                  <div className="footer-logo">
                    <img src="assets/img/logo-white.png" alt="Medibo" />
                  </div>
                  <p>
                    Our expert team specializes in diagnosing and treating ear,
                    nose, and throat conditions
                  </p>
                  <ul className="contact-list">
                    <li>
                      <a href="https://goo.gl/maps/inpkL6wUZqMR3opX7">
                        <CiLocationOn id="footer2icon" />
                        ENT & Rhinoplasty Hub, Saidpur Road
                      </a>
                    </li>
                    <li>
                      <a href="mailto:support@gmail.com">
                        <MdOutlineEmail id="footer2icon" />
                        support@entrhino plasty.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:01267899">
                        <LuPhone id="footer2icon" />
                        0300 584 3974
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row justify-content-center">
                  <div className="col-xl-5 col-sm-6">
                    <div className="d-flex justify-content-lg-center">
                      <div className="widget nav-widget">
                        <h4 className="widget-title">Popular Services</h4>
                        <ul className="nav-links">
                          <li>
                            <a href="/rhinoplasty">Rhinoplasty</a>
                          </li>
                          <li>
                            <a href="/tonsillectomy">Tonsillectomy</a>
                          </li>
                          <li>
                            <a href="/adenoidectomy">Adenoidectomy</a>
                          </li>
                          <li>
                            <a href="/septoplasty">Septoplasty</a>
                          </li>
                          <li>
                            <a href="/turbinoplasty">Turbinoplasty</a>
                          </li>
                          <li>
                            <a href="/biopsy/">biopsy</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-sm-6">
                    <div className="d-flex justify-content-lg-center">
                      <div className="widget nav-widget">
                        <h4 className="widget-title">Pages</h4>
                        <ul className="nav-links">
                          <li>
                            <a href="/">Home</a>
                          </li>
                          <li>
                            <a href="/service">Services</a>
                          </li>
                          <li>
                            <a href="/about">About</a>
                          </li>
                          <li>
                            <a href="/gallery">Gallery</a>
                          </li>
                          <li>
                            <a href="/contact">Contact</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Newlatter />
            </div>
          </div>
          <div className="copyright-area">
            <p>
              © 2024 <a href="#">EntRhinoplasty</a>. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer2;
