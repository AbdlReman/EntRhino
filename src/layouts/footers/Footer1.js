import React from "react";
import Newlatter from "../../components/Newlatter";

const Footer1 = ({ noNewsletters }) => {
  return (
    <footer
      className={`template-footer ${noNewsletters ? "" : "have-cta-boxed-one"}`}
    >
      {!noNewsletters && (
        <div className="cta-boxed-one">
          <div className="container">
            <div
              className="cta-inner bg-color-secondary bg-size-cover blend-mode-multiply"
              style={{
                backgroundImage: "url(assets/img/cta-img/cta-boxed-bg-1.png)",
              }}
            >
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8 col-md-10">
                  <div className="cta-content text-center">
                    <div className="section-heading heading-white">
                      <span className="tagline">Get Free Consultations</span>
                      <h2 className="title">
                        Looking a Doctors to Get Your Services
                      </h2>
                    </div>
                    <ul className="cta-buttons d-flex justify-content-center flex-wrap">
                      <li>
                        <a
                          href="/contact"
                          className="template-btn template-btn-white"
                        >
                          Contact US <i className="far fa-plus" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="/contact"
                          className="template-btn template-btn-bordered"
                        >
                          Get Appointment <i className="far fa-plus" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="footer-inner bg-color-grey">
        <div className="container">
          <div className="footer-widgets">
            <div className="row">
              <div className="col-lg-3 col-md-8">
                <div className="widget text-widget">
                  <div className="footer-logo">
                    <img src="assets/img/logo.png" alt="Medibo" />
                  </div>
                  <p>we are committed to providing exceptional care.</p>
                  <ul className="contact-list">
                    <li>
                      <a href="https://goo.gl/maps/inpkL6wUZqMR3opX7">
                        <i className="far fa-map-marker-alt" />
                        ENT & Rhinoplasty Hub, Saidpur Road
                      </a>
                    </li>
                    <li>
                      <a href="mailto:support@gmail.com">
                        <i className="far fa-envelope" />
                        support@entrhino plasty.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:01267899">
                        <i className="far fa-phone" />
                        0300 584 3974
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-xl-5 col-md-6">
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
                          <a href="/biopsy">biopsy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-7 col-md-6">
                    <div className="widget instagram-widget">
                      <h4 className="widget-title">Photo Gallery</h4>
                      <div className="instagram-images">
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/01.jpg"
                            alt="Instagram"
                          />
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/02.jpg"
                            alt="Instagram"
                          />
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/03.jpg"
                            alt="Instagram"
                          />
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/04.jpg"
                            alt="Instagram"
                          />
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/05.jpg"
                            alt="Instagram"
                          />
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                        <div className="single-image">
                          <img
                            src="assets/img/instagram/06.jpg"
                            alt="Instagram"
                          />
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
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
              © 2024 <a href="#">EntRhinoplasty </a>. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer1;
