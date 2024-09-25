import React from "react";
import PageBanner from "../src/components/PageBanner";
import Layouts from "../src/layouts/Layouts";
import ContactForm from "../src/components/ContactForm";
import { getMetadata } from "./api/getMetadata";
import Head from "next/head";

const Contact = () => {
  const page = "contact"; // Set the page name here
  const { title, description, keywords } = getMetadata(page);
  return (
    <Layouts footer={2}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="entrhinoplasty.com/contact" />
        <meta
          property="og:image"
          content="assets/img/ENT. & Rhinoplasty Hub.jpeg"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="ENT & Rhinoplasty Hub" />
      </Head>
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
                      B-1322 B Block 4th B Road <br />
                      Satellite Town Rawalpindi
                    </p>
                  </div>
                  <div className="single-contact-info">
                    <h3 className="info-title">
                      <i className="fal fa-coffee" /> Get In Touch
                    </h3>
                    <ul>
                      <li>
                        <span>Phone Number</span>
                        <a href="tel:+012020200">0300 584 3974</a>
                      </li>
                      <li>
                        <span>Email Address</span>
                        <a href="mailto:support@gmail.com">
                          support@entrhinoplasty.com
                        </a>
                      </li>
                      {/* <li>
                        <span>Hotline</span>
                        <a href="tel:+12345678">12345678</a>
                      </li> */}
                    </ul>
                  </div>
                  <div className="single-contact-info">
                    <h3 className="info-title">
                      <i className="fal fa-comments" /> Follow Us
                    </h3>
                    <p>
                      Follow us on social media to stay updated with the latest
                      from ENT & Rhinoplasty Hub!
                    </p>
                    <p className="social-icon">
                      <a href="https://www.facebook.com/profile.php?id=100095401231180&mibextid=ZbWKwL">
                        <i className="fab fa-facebook" />
                      </a>
                      {/* <a href="#">
                        <i className="fab fa-twitter-square" />
                      </a> */}
                      <a href="https://www.instagram.com/entandrhinoplastyhub">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="https://youtube.com/@entandrhinoplastyhub?si=pR0GXXZmmWiSb77d">
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
                    <span>4:00-7:00 pm</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Tuesday
                    </span>
                    <span>4:00-7:00 pm</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Wednesday
                    </span>
                    <span>4:00-7:00 pm</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Thursday
                    </span>
                    <span>4:00-7:00 pm</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Friday
                    </span>
                    <span>4:00-7:00 pm</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Saturday
                    </span>
                    <span>4:00-7:00 pm</span>
                  </li>
                  <li>
                    <span>
                      <i className="far fa-angle-right" />
                      Sunday
                    </span>
                    <span>Closed --</span>
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
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3321.9132595263363!2d73.065578!3d33.633491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDM4JzAwLjYiTiA3M8KwMDMnNTYuMSJF!5e0!3m2!1sen!2s!4v1727256641499!5m2!1sen!2s"
              loading="lazy"
            ></iframe>
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3321.8948473250216!2d73.06263347569865!3d33.633968373317344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDM4JzAyLjMiTiA3M8KwMDMnNTQuOCJF!5e0!3m2!1sen!2s!4v1726133072498!5m2!1sen!2s"
              loading="lazy"
            ></iframe> */}
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d107201.226767341!2d-74.05027451789393!3d40.71534534062428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1634195102348!5m2!1sen!2sbd"
              loading="lazy"
            /> */}
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Contact;
