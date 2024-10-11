import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0yog4jt",
        "template_503zmag",
        form.current,
        "v2I9_LRyHUviUAmJO" // Replace with your EmailJS user ID
      )
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");

        // Clear the form fields
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
        alert("Failed to send the message. Please try again.");
      });
  };

  return (
    <>
      <section className="contact-form-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-heading mb-60 text-center">
                <span className="tagline">{`We're Ready To Help You`}</span>
                <h2 className="title">Leave a Message</h2>
              </div>
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-field">
                      <label htmlFor="name">Your Full Name</label>
                      <input type="text" name="name" id="name" required />
                    </div>
                  </div>
                  {/* <div className="col-md-6">
                    <div className="input-field">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" name="email" id="email" required />
                    </div>
                  </div> */}
                  <div className="col-lg-6">
                    <div className="input-field">
                      <label htmlFor="number">Phone Number</label>
                      <input type="text" name="phone" id="number" required />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-field">
                      <label htmlFor="message">Write Message</label>
                      <textarea name="message" id="message" required />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="text-center">
                      <button type="submit" className="template-btn">
                        Send Us Message <i className="far fa-plus" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
