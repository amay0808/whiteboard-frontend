import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo2.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={Logo} alt="logo" className="navbar__logo" />
      </Link>
      <div className="link-container">
        <Link to="/" className="navbar__link navbar__link--home">
          Home
        </Link>
        <a href="#exercises" className="navbar__link">
          Exercises
        </a>
      </div>
    </div>
  );
};

export default Navbar;
