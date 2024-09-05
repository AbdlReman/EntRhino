import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
import ContactForm from "../src/components/ContactForm";

const Contact = () => {
  return (
    <Layouts footer={2}>
      <PageBanner title={"Contact Us"} />
      {/*====== Page Title End ======*/}
      {/*====== Contact Info Section Start ======*/}
      <section className="section-gap contact-top-wrappper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="contact-info-wrapper">
                <div className="single-contact-info">
                  <div className="single-contact-info">
                    <h3 className="info-title">
                      <i className="fal fa-map-marker-alt" /> Address
                    </h3>
                    <p>
                      7895 Piermont Dr NE Albuquerque, <br />
                      NM 198866, See Our Stores
                    </p>
                  </div>
                  <div className="single-contact-info">
                    <h3 className="info-title">
                      <i className="fal fa-coffee" /> Get In Touch
                    </h3>
                    <ul>
                      <li>
                        <span>Phone Number</span>
                        <a href="tel:+012020200">+012 (345) 6789</a>
                      </li>
                      <li>
                        <span>Email Address</span>
                        <a href="mailto:support@gmail.com">support@gmail.com</a>
                      </li>
                      <li>
                        <span>Hotline</span>
                        <a href="tel:+12345678">12345678</a>
                      </li>
                    </ul>
                  </div>
                  <div className="single-contact-info">
                    <h3 className="info-title">
                      <i className="fal fa-comments" /> Follow Us
                    </h3>
                    <p>
                      Sit amet consectetur adipiscing elit sed do eiusmod tempor
                      incididunt ut labore
                    </p>
                    <p className="social-icon">
                      <a href="#">
                        <i className="fab fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter-square" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube-square" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="working-hour-chart">
                <h2 className="chart-title">Working Hour</h2>
                <ul>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Monday
                    </span>
                    <span>9:00-19:00</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Tuesday
                    </span>
                    <span>9:00-19:00</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Wednesday
                    </span>
                    <span>9:00-19:00</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Thursday
                    </span>
                    <span>9:00-19:00</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Friday
                    </span>
                    <span>9:00-19:00</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Saturday
                    </span>
                    <span>9:00-19:00</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Sunday
                    </span>
                    <span>9:00-19:00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Contact Info Section End ======*/}
      {/*====== Contact Form Start ======*/}
      <section className="contact-form-area">
        <ContactForm />
        <div className="section-gap">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d107201.226767341!2d-74.05027451789393!3d40.71534534062428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1634195102348!5m2!1sen!2sbd"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Contact;
