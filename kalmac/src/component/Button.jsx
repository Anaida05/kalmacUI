import React from "react";
import "./Styles/Button.css";
import whatsapp from "./images/whatsapp.png";
const Button = () => {
  return (
    <div>
      <div className="buttons">
        <button className="quote-btn">Get a Quote</button>
        <button className="whatsapp-btn">
          <img src={whatsapp} alt="" />
          <p>WhatsApp Us</p>
        </button>
      </div>
    </div>
  );
};

export default Button;
