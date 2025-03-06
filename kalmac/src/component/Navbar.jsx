import logo from "./images/logo.png"
import React from "react";
import "./Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />

      <div className="contactNo">
        <span className="material-symbols-outlined">call</span>
        <span>+98920 98920</span>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>About us</li>
        <li>Courses</li>
        <li>Training</li>
        <li>
          <button className="contactBtn">Contact Us</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
