import React from "react";

const SlidePanel = ({ sidebarTrigger, setSidebarTrigger }) => {
  return (
    <div
      className={`slide-panel off-canvas-panel ${
        sidebarTrigger ? "show-panel" : ""
      }`}
    >
      <div className="panel-overlay" onClick={() => setSidebarTrigger()} />
      <div className="panel-inner">
        <div className="canvas-logo">
          <img src="assets/img/logo.png" alt="" />
        </div>
        <div className="about-us">
          <h5 className="canvas-widget-title">About Us</h5>
          <p>
            we are committed to providing exceptional care. Our expert team
            specializes in diagnosing and treating ear, nose, and throat
          </p>
        </div>
        <div className="contact-us">
          <h5 className="canvas-widget-title">Contact Us</h5>
          <ul>
            <li>
              <i className="far fa-map-marker-alt" />
              ENT & Rhinoplasty Hub, Saidpur Road
            </li>
            <li>
              <i className="far fa-envelope-open" />
              <a href="mailto:support@qolle.com">support@entrhinoplasty.com</a>
              {/* <a href="mailto:info@qolle.com">info@seeva.com</a> */}
            </li>
            <li>
              <i className="far fa-phone" />
              <a href="tel:+01234567899">0300 584 3974</a>
              {/* <br />
              <a href="tel:+8563214">+8563214</a> */}
            </li>
          </ul>
        </div>
        <a href="#" className="panel-close" onClick={() => setSidebarTrigger()}>
          <i className="fal fa-times" />
        </a>
      </div>
    </div>
  );
};
export default SlidePanel;
