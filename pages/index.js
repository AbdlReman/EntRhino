import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

import Layouts from "../src/layouts/Layouts";

import WhyUs from "../src/components/WhyUs";
import Appointment from "../src/components/Appointment";
import Services from "../src/components/Services";
import GallaryHome from "../src/components/GallaryHome";
import AboutIndex from "../src/components/AboutIndex";
import Head from "next/head";
import { getMetadata } from "./api/getMetadata";

const Counter = dynamic(() => import("../src/components/Counter"), {
  ssr: false,
});

const Index = () => {
  const page = "home";
  const { title, description, keywords } = getMetadata(page);
  return (
    <Layouts position={"absolute"}>
      <>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="entrhinoplasty.com" />
          <meta
            property="og:image"
            content="assets/img/ENT. & Rhinoplasty Hub.jpeg"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="ENT & Rhinoplasty Hub" />
        </Head>
        {/*====== Hero Area Start ======*/}
        <section className="hero-area-one">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-5 col-md-8">
                <div className="hero-content">
                  <h1 className="title wow fadeInDown" data-wow-delay="0.3s">
                    ENT. &amp; RhinoPlasty Hub
                  </h1>
                  <p className="wow fadeInLeft" data-wow-delay="0.4s">
                    Expert care in ENT diseases and advanced rhinoplasty
                    procedures to enhance your health and appearance.
                  </p>
                  <Link href="#appointment">
                    <a
                      className="template-btn wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      Make an Appointment <i className="far fa-plus" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="hero-img wow fadeInUp" data-wow-delay="0.3s">
                  <img src="assets/img/hero-img/hero-img.png" alt="Hero" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== Hero Area End ======*/}
        {/*====== Why Choose Section Start ======*/}
        <WhyUs />
        {/*====== Why Choose Section End ======*/}
        {/*====== About Section Start ======*/}
        <AboutIndex />
        {/*====== About Section End ======*/}
        {/*====== Service Section Start ======*/}
        <Services />
        {/*====== Service Section End ======*/}
        {/*====== Big Tagline Start ======*/}
        {/* <section className="big-tagline">
          <div className="container-fluid">
            <h2 className="tagline">
              Learn better health outcomes, improve costs and increase
              productivity for your business
            </h2>
          </div>
        </section> */}
        {/*====== Big Tagline End ======*/}

        {/*====== Appointment Section Start ======*/}
        <div id="appointment">
          <Appointment />
        </div>

        <GallaryHome />

        {/*====== Appointment Section End ======*/}
        {/*====== Testimonials Section Start ======*/}
        {/* <section className="testimonial-section bg-color-grey section-have-half-bg">
          <div className="container-fluid">
            <div className="row justify-content-end">
              <div className="col-lg-6">
                <div className="testimonial-one-wrap">
                  <div className="section-heading mb-50">
                    <span className="tagline">Our Testimonials</span>
                    <h2 className="title">
                      What Our Patients Say About Our Medical
                    </h2>
                  </div>
                  <Slider
                    {...testimonialOne}
                    className="testimonial-slider-one"
                  >
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="avatar">
                          <img
                            src="assets/img/testimonial/01.png"
                            alt="Avatar"
                          />
                        </div>
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                            Sed ut perspiciatis unde omnis natusy error
                            voluptatem accusantium doloreue laudan totam rem
                            aperiam eaquip quae abillo inventore veritatis quasi
                            architecto beatae vitae dicta sunt explicabo
                          </p>
                          <div className="author-info">
                            <h5 className="name">Mark E. Kaminsky</h5>
                            <span className="title">Web Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="avatar">
                          <img
                            src="assets/img/testimonial/01.png"
                            alt="Avatar"
                          />
                        </div>
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                            Sed ut perspiciatis unde omnis natusy error
                            voluptatem accusantium doloreue laudan totam rem
                            aperiam eaquip quae abillo inventore veritatis quasi
                            architecto beatae vitae dicta sunt explicabo
                          </p>
                          <div className="author-info">
                            <h5 className="name">Mark E. Kaminsky</h5>
                            <span className="title">Web Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="avatar">
                          <img
                            src="assets/img/testimonial/01.png"
                            alt="Avatar"
                          />
                        </div>
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                            Sed ut perspiciatis unde omnis natusy error
                            voluptatem accusantium doloreue laudan totam rem
                            aperiam eaquip quae abillo inventore veritatis quasi
                            architecto beatae vitae dicta sunt explicabo
                          </p>
                          <div className="author-info">
                            <h5 className="name">Mark E. Kaminsky</h5>
                            <span className="title">Web Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-testimonial-slider">
                      <div className="testimonial-inner">
                        <div className="avatar">
                          <img
                            src="assets/img/testimonial/01.png"
                            alt="Avatar"
                          />
                        </div>
                        <div className="content-wrap">
                          <p className="testimonial-desc">
                            Sed ut perspiciatis unde omnis natusy error
                            voluptatem accusantium doloreue laudan totam rem
                            aperiam eaquip quae abillo inventore veritatis quasi
                            architecto beatae vitae dicta sunt explicabo
                          </p>
                          <div className="author-info">
                            <h5 className="name">Mark E. Kaminsky</h5>
                            <span className="title">Web Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section-half-bg"
            style={{
              backgroundImage: "url(assets/img/section-bg/half-bg-img-01.jpg)",
            }}
          />
        </section> */}
        {/*====== Testimonials Section End ======*/}
        {/*====== Counter Section Start ======*/}
        {/* <section className="counter-section section-gap">
          <div className="container">
            <div className="counter-inner">
              <div className="row justify-content-between">
                <div className="col-lg-auto col-md-5 col-sm-6">
                  <div className="counter-item">
                    <div className="counter-wrap">
                     
                      <Counter end={359} />
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">Professional Doctors</h6>
                  </div>
                </div>
                <div className="col-lg-auto col-md-5 col-sm-6">
                  <div className="counter-item">
                    <div className="counter-wrap">
                      <Counter end={85} />
                    
                      <span className="suffix">k+</span>
                    </div>
                    <h6 className="title">Saticfied Our Clients</h6>
                  </div>
                </div>
                <div className="col-lg-auto col-md-5 col-sm-6">
                  <div className="counter-item">
                    <div className="counter-wrap">
                      <Counter end={863} />
                      
                      <span className="suffix">+</span>
                    </div>
                    <h6 className="title">Win International Awards</h6>
                  </div>
                </div>
                <div className="col-lg-auto col-md-5 col-sm-6">
                  <div className="counter-item">
                    <div className="counter-wrap">
                      <Counter end={86} />
                      <span className="suffix">k+</span>
                    </div>
                    <h6 className="title">4.9 Star Reviews</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/*====== Counter Section End ======*/}
        {/*====== Help Section Start ======*/}
        {/* <section className="help-section section-gap-bottom">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-end align-items-center">
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="help-text-wrapper">
                  <div className="section-heading mb-20">
                    <span className="tagline">How Can We Help</span>
                    <h2 className="title">
                      Flexible &amp; Responsive to Changing Need
                    </h2>
                  </div>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptatem
                    accusantium doloremque laudantium totam rem aperieaqueys
                    epsa quae abillo inventore veritatis et quase
                  </p>
                  <ul className="check-list mt-35 pr-xl-4">
                    <li className="wow fadeInUp" data-wow-delay="0.3s">
                      25-30% estimated savings in implementation when using
                      Mobile Health Clinics
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.4s">
                      Activate Mobile Health Clinics in just weeks
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.5s">
                      Flexible, on-demand access to care services
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="0.6s">
                      Supports referrals to provider networks and care
                      management programs
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="help-img text-center text-lg-right mt-md-50">
                  <img
                    src="assets/img/section-img/help-section-img.jpg"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/*====== Help Section End ======*/}
        {/*====== Partners Section Start ======*/}
        {/* <section className="partner-section section-gap bg-color-secondary section-map-overly">
          <div className="container">
            <div className="section-heading heading-white text-center mb-50">
              <span className="span tagline">Our Trusted Partners</span>
              <h2 className="title">We’ve 23563k+ Trusted Partners</h2>
            </div>
            <div className="partner-logo-grid grid-border-white">
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/01.png" alt="Partner" />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/02.png" alt="Partner" />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/03.png" alt="Partner" />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/04.png" alt="Partner" />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/05.png" alt="Partner" />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/06.png" alt="Partner" />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/07.png" alt="Partner" />
                </a>
              </div>
              <div className="single-partner">
                <a href="#">
                  <img src="assets/img/partner-logos/08.png" alt="Partner" />
                </a>
              </div>
            </div>
          </div>
        </section> */}
        {/*====== Partners Section End ======*/}
        {/*====== Latest Blog Start ======*/}
        {/* <section className="latest-blog-section section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8">
                <div className="section-heading mb-40">
                  <span className="tagline">Latest News &amp; Blog</span>
                  <h2 className="title">
                    Get Every Single Updates For Medical &amp; Health
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center latest-blog-loop">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="latest-blog-one mt-30">
                  <div className="blog-thumb">
                    <img src="assets/img/latest-blog/01.jpg" alt="Thumb" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="#" className="blog-category">
                        Health
                      </a>
                      <a href="#" className="blog-date">
                        <i className="far fa-calendar-alt" /> 25 Aug 2021
                      </a>
                    </div>
                    <h4 className="blog-title">
                      <Link href="/blog-details">
                        <a>Comprehensive Worksite Health Program Built</a>
                      </Link>
                    </h4>
                    <div className="btn-area">
                      <Link href="/blog-details">
                        <a className="read-more-btn">
                          Read More <i className="far fa-plus" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="latest-blog-one mt-30">
                  <div className="blog-thumb">
                    <img src="assets/img/latest-blog/02.jpg" alt="Thumb" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="#" className="blog-category">
                        Medical
                      </a>
                      <a href="#" className="blog-date">
                        <i className="far fa-calendar-alt" /> 26 Aug 2021
                      </a>
                    </div>
                    <h4 className="blog-title">
                      <Link href="/blog-details">
                        <a>Speeding Up The Return on Your Healthcare</a>
                      </Link>
                    </h4>
                    <div className="btn-area">
                      <Link href="/blog-details">
                        <a className="read-more-btn">
                          Read More <i className="far fa-plus" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="latest-blog-one mt-30">
                  <div className="blog-thumb">
                    <img src="assets/img/latest-blog/03.jpg" alt="Thumb" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="#" className="blog-category">
                        Health
                      </a>
                      <a href="#" className="blog-date">
                        <i className="far fa-calendar-alt" /> 25 Aug 2021
                      </a>
                    </div>
                    <h4 className="blog-title">
                      <Link href="/blog-details">
                        <a>Comprehensive Worksite Health Program Built</a>
                      </Link>
                    </h4>
                    <div className="btn-area">
                      <Link href="/blog-details">
                        <a className="read-more-btn">
                          Read More <i className="far fa-plus" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/*====== Latest Blog End ======*/}
      </>
    </Layouts>
  );
};
export default Index;
