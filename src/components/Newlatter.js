import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Newsletter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0yog4jt", // Your EmailJS service ID
        "template_503zmag", // Your EmailJS template ID
        form.current, // The current form reference
        "v2I9_LRyHUviUAmJO" // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Newsletter subscription successful!"); // Success message
          form.current.reset(); // Reset form after submission
        },
        (error) => {
          console.log(error.text);
          alert("Failed to subscribe. Please try again."); // Error message
        }
      );
  };

  return (
    <>
      <div className="col-lg-3 col-md-10">
        <div className="widget newsletters-widget">
          <h4 className="widget-title">Newsletters</h4>
          <p>
            Stay Updated with the Latest <br /> Tips, and News
          </p>
          <form ref={form} onSubmit={sendEmail} className="newsletters-form">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <button type="submit">
              <i className="far fa-arrow-right" />
            </button>
          </form>
          <div className="opening-notice mt-30">
            <h6>
              <i className="far fa-clock" /> Opening Hours
            </h6>
            <p>Mon - Saturday, 04:00 pm - 07:00 pm</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
