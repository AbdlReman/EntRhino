import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Appointment = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0yog4jt", // Replace with your EmailJS service ID
        "template_503zmag", // Replace with your EmailJS template ID
        form.current,
        "v2I9_LRyHUviUAmJO" // Replace with your EmailJS user ID
      )
      .then((result) => {
        console.log(result.text);
        alert("Appointment request sent successfully!");

        // Clear the form fields
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
        alert("Failed to send the request. Please try again.");
      });
  };

  return (
    <>
      <section className="appointment-section section-gap-bottom">
        <div className="container">
          <div className="appointment-form-two">
            <div className="form-wrap">
              <div className="section-heading mb-40">
                <span className="tagline">Make an Appointment</span>
                <h2 className="title">Make an Appointment to Doctor Visit</h2>
              </div>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="appointment-form"
              >
                <div className="row">
                  <div className="col-12">
                    <div
                      className="input-field wow fadeInLeft"
                      data-wow-delay="0.3s"
                    >
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div
                      className="input-field wow fadeInLeft"
                      data-wow-delay="0.4s"
                    >
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div
                      className="input-field wow fadeInLeft"
                      data-wow-delay="0.5s"
                    >
                      <input
                        type="text"
                        name="phone"
                        placeholder="Enter Your Phone number"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div
                      className="input-field wow fadeInLeft"
                      data-wow-delay="0.6s"
                    >
                      <textarea
                        type="text"
                        name="message"
                        placeholder="Enter your message here"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div
                      className="input-field wow fadeInLeft"
                      data-wow-delay="0.7s"
                    >
                      <button type="submit" className="template-btn">
                        Make an Appointment <i className="far fa-plus" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="appointment-image"
              style={{
                backgroundImage: "url(assets/img/appointment/07.png)",
              }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
