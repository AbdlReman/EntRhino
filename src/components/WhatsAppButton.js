import React from "react";
import { IoLogoWhatsapp } from "react-icons/io"; // Using FontAwesome WhatsApp icon

const WhatsAppButton = () => {
  const phoneNumber = "+923005843974"; //  WhatsApp number in international format
  const message = "Hello!  i Need an appointment."; // Default message

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank"); // Opens WhatsApp in a new tab
  };

  return (
    <div className="whatsapp-btn ">
      <button onClick={handleWhatsAppClick} className="btn btn-whatsapp">
        <IoLogoWhatsapp size={40} color="#25D366" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
